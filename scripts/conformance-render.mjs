import fs from "node:fs";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";

const MANIFEST = path.join(process.cwd(), "data/site-config.json");
const BACKUP = `${MANIFEST}.bak`;
const PORT = Number(process.env.CONFORMANCE_PORT ?? 4399);
const SENTINEL = "WR-SENTINEL-7Q9";
const SENTINEL_HOST = `${SENTINEL.toLowerCase()}.example.com`;

function withSentinelManifest() {
  // Guard: a leftover .bak means a prior run was killed mid-flight — restore first, don't double-back-up.
  if (fs.existsSync(BACKUP)) {
    throw new Error(`Leftover ${path.basename(BACKUP)} found — a prior run was interrupted. Run: cp "${BACKUP}" "${MANIFEST}" && rm "${BACKUP}", then retry.`);
  }
  const original = fs.readFileSync(MANIFEST, "utf8");
  fs.writeFileSync(BACKUP, original);
  const m = JSON.parse(original);
  m.version = 3;
  m.brand = { ...(m.brand ?? {}), legalName: `${SENTINEL}-LEGAL`, displayName: `${SENTINEL}-NAME`, tagline: `${SENTINEL}-TAG`, logoUrl: m.brand?.logoUrl ?? "" };
  m.header = { ...(m.header ?? {}), nav: [{ label: `${SENTINEL}-HEADERNAV`, href: "/wr-sentinel" }] };
  m.footer = { ...(m.footer ?? {}), groups: [{ heading: `${SENTINEL}-FOOTERGROUP`, links: [{ label: `${SENTINEL}-FOOTERNAV`, href: "/wr-sentinel" }] }] };
  m.seo = { ...(m.seo ?? {}), siteUrl: `https://${SENTINEL_HOST}`, defaultTitle: `${SENTINEL}-NAME`, defaultDescription: `${SENTINEL}-TAG` };
  // v3 chrome: the consent banner and booking embed are chrome and must be manifest-driven.
  m.consent = { enabled: true, message: `${SENTINEL}-CONSENT` };
  m.booking = { provider: "calendly", url: `https://calendly.com/${SENTINEL.toLowerCase()}/intro`, mode: "embed" };
  fs.writeFileSync(MANIFEST, JSON.stringify(m, null, 2));
}

function restoreManifest() {
  if (fs.existsSync(BACKUP)) {
    fs.copyFileSync(BACKUP, MANIFEST);
    fs.rmSync(BACKUP);
  }
}

async function waitForServer(url, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  return false;
}

async function main() {
  let server;
  try {
    withSentinelManifest();

    const build = spawnSync("npm", ["run", "build"], { stdio: "inherit" });
    if (build.status !== 0) throw new Error("next build failed under sentinel manifest");

    // detached:true so we can kill the whole process group (next spawns child workers
    // that otherwise outlive a plain server.kill() and keep holding the port).
    server = spawn("npx", ["next", "start", "-p", String(PORT)], { stdio: "inherit", detached: true });
    const up = await waitForServer(`http://localhost:${PORT}/`, 60_000);
    if (!up) throw new Error("server did not start");

    const html = await (await fetch(`http://localhost:${PORT}/`)).text();
    // Region-scope the checks to the rendered <header>/<footer>. The page BODY also renders
    // brand.displayName + tagline (hero headline/subheadline), so a whole-HTML token check would
    // false-pass even if the navbar/footer hardcoded them. Scoping to the chrome regions proves
    // each surface is genuinely manifest-driven.
    // navbar is the first <header>; the site footer is the last <footer> (each captured tightly,
    // non-greedy, so no body content bleeds into the region).
    const headerHtml = html.match(/<header\b[\s\S]*?<\/header>/i)?.[0];
    const footerMatches = [...html.matchAll(/<footer\b[\s\S]*?<\/footer>/gi)].map((m) => m[0]);
    const footerHtml = footerMatches[footerMatches.length - 1];
    if (!headerHtml) throw new Error("Sentinel render FAILED — no <header> (navbar) in rendered HTML");
    if (!footerHtml) throw new Error("Sentinel render FAILED — no <footer> in rendered HTML");
    const checks = [
      ["navbar brand (displayName)", headerHtml.includes(`${SENTINEL}-NAME`)],
      ["navbar nav (header.nav)", headerHtml.includes(`${SENTINEL}-HEADERNAV`)],
      ["footer brand (displayName)", footerHtml.includes(`${SENTINEL}-NAME`)],
      ["footer tagline", footerHtml.includes(`${SENTINEL}-TAG`)],
      ["footer legal (brand.legalName)", footerHtml.includes(`${SENTINEL}-LEGAL`)],
      ["footer group heading", footerHtml.includes(`${SENTINEL}-FOOTERGROUP`)],
      ["footer group links", footerHtml.includes(`${SENTINEL}-FOOTERNAV`)],
    ];
    const failed = checks.filter(([, ok]) => !ok).map(([name]) => name);
    if (failed.length > 0) {
      throw new Error(`Sentinel render FAILED — these chrome surfaces are not manifest-driven: ${failed.join(", ")}`);
    }

    // v3 chrome slots must be manifest-driven and observable in rendered HTML
    // (gate principle: verify wiring by observation, not code inspection).
    if (!html.includes(`${SENTINEL}-CONSENT`)) {
      throw new Error("Sentinel render FAILED — consent banner not driven by manifest consent.message (consent.enabled=true should render it).");
    }
    if (!html.includes('html:has(#wr-theme-root[data-wr-theme="dark"])')) {
      throw new Error("Sentinel render FAILED — page backdrop (html:has scheme rule) missing; dark mode would leave light strips on short pages.");
    }
    const contactHtml = await (await fetch(`http://localhost:${PORT}/contact`)).text();
    if (!contactHtml.includes(`calendly.com/${SENTINEL.toLowerCase()}/intro`)) {
      throw new Error("Sentinel render FAILED — booking embed on /contact not driven by manifest booking.url.");
    }

    // SEO surfaces must be driven by seo.siteUrl (not a hardcoded/env host).
    const robots = await (await fetch(`http://localhost:${PORT}/robots.txt`)).text();
    const sitemap = await (await fetch(`http://localhost:${PORT}/sitemap.xml`)).text();
    const rss = await (await fetch(`http://localhost:${PORT}/blog/feed.xml`)).text();
    if (!robots.includes(SENTINEL_HOST) || !sitemap.includes(SENTINEL_HOST)) {
      throw new Error(`Sentinel SEO FAILED — robots/sitemap not driven by seo.siteUrl (expected ${SENTINEL_HOST}).`);
    }
    if (!rss.includes(SENTINEL_HOST) || !rss.includes(`${SENTINEL}-NAME`)) {
      throw new Error(`Sentinel SEO FAILED — RSS feed not driven by manifest seo.siteUrl/brand.displayName (expected ${SENTINEL_HOST}).`);
    }

    console.log("Sentinel render passed — manifest controls chrome + SEO.");
  } finally {
    if (server?.pid) {
      try {
        process.kill(-server.pid, "SIGTERM"); // negative pid = kill the process group
      } catch {
        server.kill("SIGTERM");
      }
    }
    restoreManifest();
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
