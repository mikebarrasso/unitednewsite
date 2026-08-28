/**
 * Href/src safety rules for blog post bodies (contract v3 D1).
 * Same policy the pre-v3 hand-rolled markdown renderer enforced:
 * absolute http(s)/mailto/tel and site-relative ("/", not "//") URLs only —
 * javascript:, data:, vbscript:, and protocol-relative URLs are rejected.
 *
 * Enforced twice: at compile time by the rehypeSafeUrls plugin, and at render
 * time by the a/img entries in the MDX component map (belt and braces).
 */
export function isSafeHref(href: string): boolean {
  const t = href.trim().toLowerCase();
  if (t.startsWith("javascript:") || t.startsWith("data:") || t.startsWith("vbscript:")) return false;
  if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith("mailto:") || t.startsWith("tel:")) return true;
  if (t.startsWith("/") && !t.startsWith("//")) return true;
  return false;
}
