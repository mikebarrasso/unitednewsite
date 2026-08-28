import { timingSafeEqual } from "node:crypto";
import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";

import { DRAFT_AUDIENCE_COOKIE } from "@/lib/blog-contract/draft-view";

/**
 * Draft mode door (contract 3.5). The platform holds the per-site secret
 * (WR_DRAFT_SECRET, set as a Vercel project env var at provision/conform —
 * same custody pattern as the protection-bypass secret; rotation = set env +
 * a FRESH deploy, `vercel redeploy` snapshots old env). The advisor's editor
 * preview and the compliance review frame enable draft mode through here;
 * the secret never renders into HTML — it exists only in the request URL the
 * platform constructs server-side.
 *
 * `?path=` must be a site-relative path: leading "/", no "//" (protocol-
 * relative), no scheme — anything else redirects home. `?disable=1` exits
 * draft mode (no secret required; disabling only ever hides content).
 */
function safeRelativePath(raw: string | null): string {
  if (!raw) return "/";
  // Backslashes rejected too: browsers treat "/\\evil.example" as an
  // external authority (Codex, #670 train review).
  if (
    !raw.startsWith("/") ||
    raw.startsWith("//") ||
    /[\u0000-\u001F\u007F]/.test(raw) ||
    raw.includes("\\") ||
    raw.includes("://")
  ) {
    return "/";
  }
  return raw;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const path = safeRelativePath(url.searchParams.get("path"));
  const draft = await draftMode();

  if (url.searchParams.get("disable") === "1") {
    draft.disable();
    (await cookies()).delete(DRAFT_AUDIENCE_COOKIE);
    redirect(path);
  }

  const secret = process.env.WR_DRAFT_SECRET;
  const providedSecret = url.searchParams.get("secret");
  const expectedBytes = Buffer.from(secret ?? "", "utf8");
  const providedBytes = Buffer.from(providedSecret ?? "", "utf8");
  if (
    !secret ||
    !providedSecret ||
    expectedBytes.length !== providedBytes.length ||
    !timingSafeEqual(expectedBytes, providedBytes)
  ) {
    return new Response("Not found", { status: 404 });
  }

  draft.enable();
  // Audience hint (cosmetic only — the secret above is the sole gate).
  // `as=owner` marks this draft session as the site owner's, which turns on
  // the owner banner on not-live post pages. Any other visit CLEARS the mark
  // (last door wins): at a small firm the same person can be advisor and
  // reviewer in one browser, and a review navigation must never inherit the
  // owner chrome — the reviewed page stays pixel-identical to the public one.
  const jar = await cookies();
  if (url.searchParams.get("as") === "owner") {
    jar.set(DRAFT_AUDIENCE_COOKIE, "owner", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
  } else {
    jar.delete(DRAFT_AUDIENCE_COOKIE);
  }
  redirect(path);
}
