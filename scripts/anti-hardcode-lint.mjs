import fs from "node:fs";
import path from "node:path";

// Chrome files the manifest MUST control. Body/page content is intentionally excluded.
const CHROME_FILES = [
  "src/app/layout.tsx",
  "src/components/sections/navbar.tsx",
  "src/components/sections/footer.tsx",
  "src/components/theme/site-theme-provider.tsx",
  "src/components/theme/theme-toggle.tsx",
  "src/components/consent/consent-banner.tsx",
  "src/components/booking/booking-embed.tsx",
];

const LINK_ARRAY_RE = /\[\s*\{[^}]*\bhref\b\s*:/;

export function findHardcodeViolations({ brandLiterals, files }) {
  const violations = [];
  const literals = (brandLiterals ?? []).filter(
    (v) => typeof v === "string" && v.trim().length > 3 && v.trim().toLowerCase() !== "advisor name",
  );
  for (const file of files) {
    for (const literal of literals) {
      if (file.content.includes(literal)) {
        violations.push({ path: file.path, reason: `hardcoded brand literal "${literal}"` });
      }
    }
    if (LINK_ARRAY_RE.test(file.content)) {
      violations.push({ path: file.path, reason: "hardcoded nav/link array (read from config instead)" });
    }
  }
  return violations;
}

// Content-registry ban: blog/page content must live in data/ files, never in
// source modules. blogBodies.tsx-class registries (a giant slug→content record
// in lib/) caused the empty-blog production incident; this makes them
// mechanically unpublishable.
const REGISTRY_SIZE_LIMIT = 64_000; // bytes; largest legit source file ships well under this
const CONTENT_FIELD_RE = /\b(content|body|html)\s*:\s*(`|"|')/g;
const REGISTRY_CONTENT_FIELDS = 8; // this many inline content fields in one module = a registry

export function findRegistryViolations({ files, blogSlugPage }) {
  const violations = [];
  for (const file of files) {
    if (Buffer.byteLength(file.content, "utf8") > REGISTRY_SIZE_LIMIT) {
      violations.push({
        path: file.path,
        reason: `source module exceeds ${REGISTRY_SIZE_LIMIT / 1000}KB — content registries are banned; content belongs in data/ files`,
      });
      continue;
    }
    const fields = file.content.match(CONTENT_FIELD_RE);
    if (fields && fields.length >= REGISTRY_CONTENT_FIELDS) {
      violations.push({
        path: file.path,
        reason: `looks like a slug→content registry (${fields.length} inline content/body/html fields) — content belongs in data/ files`,
      });
    }
  }
  if (blogSlugPage && !/data['"],\s*['"]blog|data\/blog/.test(blogSlugPage.content)) {
    violations.push({
      path: blogSlugPage.path,
      reason: "blog slug page must read posts from data/blog/ (fs), not from an in-source registry",
    });
  }
  return violations;
}

function listSourceFiles(root) {
  const out = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
      const rel = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(rel);
      else if (/\.(ts|tsx)$/.test(entry.name) && !/\.test\./.test(entry.name)) out.push(rel);
    }
  };
  walk("src");
  return out;
}

function readManifestBrandLiterals(root) {
  const raw = JSON.parse(fs.readFileSync(path.join(root, "data/site-config.json"), "utf8"));
  const out = [];
  if (raw.brand?.legalName) out.push(raw.brand.legalName);
  if (raw.brand?.displayName) out.push(raw.brand.displayName);
  if (raw.firmName) out.push(raw.firmName); // v1 back-compat
  return out;
}

function main() {
  const root = process.cwd();
  const brandLiterals = readManifestBrandLiterals(root);
  const files = CHROME_FILES.filter((p) => fs.existsSync(path.join(root, p))).map((p) => ({
    path: p,
    content: fs.readFileSync(path.join(root, p), "utf8"),
  }));
  const sourceFiles = listSourceFiles(root).map((p) => ({
    path: p,
    content: fs.readFileSync(path.join(root, p), "utf8"),
  }));
  const blogSlugPagePath = "src/app/blog/[slug]/page.tsx";
  const blogSlugPage = sourceFiles.find((f) => f.path === blogSlugPagePath) ?? null;
  const violations = [
    ...findHardcodeViolations({ brandLiterals, files }),
    ...findRegistryViolations({ files: sourceFiles, blogSlugPage }),
  ];
  if (violations.length > 0) {
    console.error("Anti-hardcode lint FAILED:");
    for (const v of violations) console.error(`  - ${v.path}: ${v.reason}`);
    process.exit(1);
  }
  console.log("Anti-hardcode lint passed.");
}

// Run as a CLI only (not when imported by tests).
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
