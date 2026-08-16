import { cookies, draftMode } from "next/headers";

/**
 * Set by the /api/draft door when the platform's advisor-facing "view draft"
 * link enters with `as=owner`. Cosmetic only — it never widens what renders.
 */
export const DRAFT_AUDIENCE_COOKIE = "wr_draft_audience";

/**
 * Is this request allowed to see not-live posts? Draft mode (the cookie set
 * via /api/draft), OR a development server — the editor box runs `next dev`,
 * and the advisor's own preview must show their waiting posts (with the
 * draft treatment), never hide them. Production builds are never
 * NODE_ENV=development, so this widens nothing publicly.
 */
export async function draftViewEnabled(): Promise<boolean> {
  if (process.env.NODE_ENV === "development") return true;
  const { isEnabled } = await draftMode();
  return isEnabled;
}

/**
 * Did this draft session enter as the site OWNER? Gates the owner banner on
 * not-live post pages — the advisor jumps straight to a post that looks fully
 * live, so the page itself must say it isn't. Reviewer and PDF-capture
 * navigations never send the hint: the reviewed page and the archived
 * compliance capture stay pixel-identical to the public rendering.
 */
export async function draftAudienceIsOwner(): Promise<boolean> {
  const jar = await cookies();
  return jar.get(DRAFT_AUDIENCE_COOKIE)?.value === "owner";
}
