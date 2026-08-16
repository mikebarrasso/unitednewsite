import { isSafeHref } from "./safe-url.ts";

/**
 * Blog post frontmatter parsing (contract v3 D1, extended in v3.2 with the
 * `video` block). Deliberately a small hand-rolled YAML subset rather than a
 * dependency: the frontmatter surface is a fixed, documented set of keys.
 *
 * THE one parser — the post page, the blog index, and the RSS feed all import
 * it. They each used to carry their own copy, which was harmless while every
 * key was a top-level scalar and actively wrong once `video:` nested one: a
 * flat line-by-line reader treats the block's indented `title:` as the POST's
 * title. Nested keys belong to their block here, and stray indented lines
 * outside a known block are ignored.
 *
 * Supported shapes:
 *   title/description/publishedAt/updatedAt/author/category  — quoted or bare scalars
 *   keywords: ["a", "b"]                                     — inline flow array
 *   featured/published: true|false                           — booleans
 *   video:                                                   — nested block, see PostVideo
 *     url: "https://…"
 *     transcript: |
 *       block scalars are supported (that is how a transcript is authored)
 */

export type PostVideoPlacement = "auto" | "manual";

/**
 * The `video` frontmatter block. `url` is the only required field — a block
 * whose url is missing or fails the href policy is dropped entirely, so an
 * unsafe URL can never reach the player or the JSON-LD.
 *
 * `placement` controls the AUTOMATIC render only:
 *   - absent / "auto"  → the post page renders <VideoPlayer> after the H1.
 *   - "manual"         → the page renders no player; the author placed a
 *                        <VideoPlayer> tag inside the MDX body themselves.
 *                        JSON-LD and the transcript section are emitted either
 *                        way, so choosing manual placement never costs SEO.
 */
export type PostVideo = {
  url: string;
  title?: string;
  thumbnail?: string;
  duration_seconds?: number;
  upload_date?: string;
  transcript?: string;
  placement?: PostVideoPlacement;
};

export type PostFrontmatter = {
  title?: string;
  description?: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  keywords?: string[];
  category?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  published?: boolean;
  /**
   * Waiting state (contract 3.5): platform-written. A post is live only when
   * this is absent or `"live"` — see isPostLive.
   */
  status?: string;
  video?: PostVideo;
  /** Internal fail-closed marker for frontmatter-like source that did not parse. */
  __parseDegraded?: true;
};

const SCALAR_KEYS = [
  "title",
  "description",
  "publishedAt",
  "updatedAt",
  "author",
  "category",
  "image",
  "imageAlt",
  "status",
] as const;
type ScalarKey = (typeof SCALAR_KEYS)[number];

/**
 * THE visibility predicate (contract 3.5). A post is live on the public site
 * only when `published` is not false AND `status` is absent or `"live"`.
 * Fail-closed on purpose: any other status value — including a typo — hides
 * the post rather than exposing unapproved content. `published: false`
 * (legacy unlisted) is unified into the same not-live meaning: excluded from
 * every list AND its route 404s publicly (pre-3.5 it stayed reachable by URL).
 * The blog index, post route, sitemap, and RSS feed must all gate through
 * this one predicate — never re-derive visibility locally.
 */
export function isPostLive(frontmatter: PostFrontmatter): boolean {
  if (frontmatter.__parseDegraded) return false;
  if (frontmatter.published === false) return false;
  return frontmatter.status === undefined || frontmatter.status === "live";
}

/**
 * Unquotes a scalar. Only a MATCHING quote pair is stripped: double-quoted
 * values get JSON escape handling (`\"`, `\\`), single-quoted values get the
 * YAML `''` escape. A mismatched or interior quote is author content and is
 * left exactly as written.
 */
function parseScalar(rawValue: string): string {
  const value = rawValue.trim();
  if (value.length < 2) return value;

  const quote = value[0];
  if ((quote !== `"` && quote !== `'`) || value.at(-1) !== quote) return value;

  if (quote === `"`) {
    try {
      return JSON.parse(value) as string;
    } catch {
      return value.slice(1, -1).replaceAll(`\\"`, `"`).replaceAll(`\\\\`, `\\`);
    }
  }

  return value.slice(1, -1).replaceAll(`''`, `'`);
}

/** Splits an inline flow array's inner text on commas, respecting quotes. */
function splitInlineArray(value: string): string[] {
  const items: string[] = [];
  let current = "";
  let quote: `"` | `'` | null = null;
  let escaped = false;

  for (const character of value) {
    if (escaped) {
      current += character;
      escaped = false;
      continue;
    }
    if (character === "\\" && quote === `"`) {
      current += character;
      escaped = true;
      continue;
    }
    if (character === `"` || character === `'`) {
      if (quote === character) quote = null;
      else if (quote === null) quote = character;
      current += character;
      continue;
    }
    if (character === "," && quote === null) {
      items.push(current);
      current = "";
      continue;
    }
    current += character;
  }

  items.push(current);
  return items;
}

function parseKeywords(rawValue: string): string[] | undefined {
  const value = rawValue.trim();
  if (!value.startsWith("[") || !value.endsWith("]")) return undefined;
  const inner = value.slice(1, -1);
  if (!inner.trim()) return [];
  return splitInlineArray(inner).map(parseScalar).filter(Boolean);
}

function indentOf(line: string): number {
  return line.length - line.trimStart().length;
}

/** A `key: |`/`key: >` block scalar header (with optional chomping indicator). */
function blockScalarStyle(rawValue: string): "literal" | "folded" | null {
  if (/^\|[-+]?$/.test(rawValue)) return "literal";
  if (/^>[-+]?$/.test(rawValue)) return "folded";
  return null;
}

/**
 * Consumes the indented body of a block scalar starting at `start`, dedenting
 * by the block's own indentation. Literal (`|`) keeps line breaks; folded (`>`)
 * joins lines with spaces (blank lines stay paragraph breaks).
 */
function readBlockScalar(
  lines: string[],
  start: number,
  parentIndent: number,
  style: "literal" | "folded",
): { value: string; next: number } {
  const body: string[] = [];
  let i = start;
  while (i < lines.length) {
    const line = lines[i]!;
    if (line.trim() === "") {
      body.push("");
      i++;
      continue;
    }
    if (indentOf(line) <= parentIndent) break;
    body.push(line);
    i++;
  }
  while (body.length > 0 && body[body.length - 1] === "") body.pop();
  const blockIndent = Math.min(
    ...body.filter((l) => l.trim() !== "").map(indentOf),
    Number.MAX_SAFE_INTEGER,
  );
  const dedented = body.map((l) => (l.trim() === "" ? "" : l.slice(blockIndent)));
  const value = style === "literal" ? dedented.join("\n") : foldParagraphs(dedented);
  return { value: value.trim(), next: i };
}

/** Folded (`>`) semantics: lines join with spaces, blank lines break paragraphs. */
function foldParagraphs(lines: string[]): string {
  const paragraphs: string[][] = [[]];
  for (const line of lines) {
    if (line === "") paragraphs.push([]);
    else paragraphs[paragraphs.length - 1]!.push(line);
  }
  return paragraphs
    .filter((p) => p.length > 0)
    .map((p) => p.join(" "))
    .join("\n\n");
}

/** Reads the raw `key: value` entries of an indented nested block. */
function readNestedBlock(
  lines: string[],
  start: number,
): { entries: Record<string, string>; next: number } {
  const entries: Record<string, string> = {};
  let i = start;
  let blockIndent: number | null = null;
  while (i < lines.length) {
    const line = lines[i]!;
    if (line.trim() === "") {
      i++;
      continue;
    }
    const indent = indentOf(line);
    if (indent === 0) break;
    if (blockIndent === null) blockIndent = indent;
    if (indent < blockIndent) break;

    const colon = line.indexOf(":");
    if (colon === -1) {
      i++;
      continue;
    }
    const key = line.slice(0, colon).trim();
    const rawValue = line.slice(colon + 1).trim();
    const style = blockScalarStyle(rawValue);
    if (style) {
      const block = readBlockScalar(lines, i + 1, indent, style);
      entries[key] = block.value;
      i = block.next;
      continue;
    }
    entries[key] = parseScalar(rawValue);
    i++;
  }
  return { entries, next: i };
}

/**
 * Normalizes raw `video:` entries into a PostVideo, dropping anything that
 * would produce misleading structured data: an unsafe/absent url voids the
 * whole block, a non-positive or unparseable duration is omitted (a fake
 * duration is worse than none), and an upload_date that is not ISO-8601-ish is
 * omitted rather than guessed.
 */
export function normalizePostVideo(entries: Record<string, string>): PostVideo | null {
  const url = (entries.url ?? "").trim();
  if (!url || !isSafeHref(url)) return null;

  const video: PostVideo = { url };
  if (entries.title) video.title = entries.title;
  if (entries.thumbnail && isSafeHref(entries.thumbnail)) video.thumbnail = entries.thumbnail;
  if (entries.transcript?.trim()) video.transcript = entries.transcript.trim();

  const duration = Number(entries.duration_seconds);
  if (Number.isFinite(duration) && duration > 0) video.duration_seconds = Math.round(duration);

  if (entries.upload_date && /^\d{4}-\d{2}-\d{2}/.test(entries.upload_date)) {
    video.upload_date = entries.upload_date;
  }
  if (entries.placement === "manual") video.placement = "manual";

  return video;
}

/**
 * Delimiter tolerance (contract v3.4): optional BOM, CRLF line endings,
 * trailing spaces/tabs after `---`, and an EOF-terminated close all parse.
 * The `m` flag lets the CLOSING `^---` match at any line start — which also
 * means the OPENING match could start mid-document, so callers must check
 * `match.index === 0`: a post that opens with prose and later uses `---`
 * horizontal rules must not have the text between its first two rules eaten
 * as "frontmatter". A post without frontmatter is legal (the title falls back
 * to the filename).
 */
const FRONTMATTER_RE = /^(?:\uFEFF)?---[ \t]*\r?\n([\s\S]*?)^---[ \t]*\r?(?:\n|$)/m;
const FRONTMATTER_PROBE_BYTES = 1024;

export function looksLikeMalformedFrontmatter(content: string): boolean {
  const probe = content.slice(0, FRONTMATTER_PROBE_BYTES).replace(/^\uFEFF/, "");
  return /^(?:---(?!-)|(?:status|published):)/.test(probe);
}

function degradedFrontmatter(content: string): PostFrontmatter {
  if (!looksLikeMalformedFrontmatter(content)) return {};
  console.warn(
    "[blog/frontmatter] frontmatter-like metadata could not be parsed; hiding post",
  );
  return { __parseDegraded: true };
}

function matchFrontmatter(content: string): RegExpMatchArray | null {
  const match = content.match(FRONTMATTER_RE);
  return match && match.index === 0 ? match : null;
}

export type ParsedBlogDocument = {
  frontmatter: PostFrontmatter;
  body: string;
};

/**
 * The one place that splits a post file into frontmatter and body — the post
 * page uses this instead of keeping its own delimiter regex, so delimiter
 * tolerance can never diverge between the metadata and the rendered body.
 */
export function parseBlogDocument(content: string): ParsedBlogDocument {
  const match = matchFrontmatter(content);
  if (!match) return { frontmatter: degradedFrontmatter(content), body: content };
  return {
    frontmatter: parseFrontmatterBlock(match[1]!),
    body: content.slice(match[0].length),
  };
}

export function parseFrontmatter(content: string): PostFrontmatter {
  const match = matchFrontmatter(content);
  if (!match) return degradedFrontmatter(content);
  return parseFrontmatterBlock(match[1]!);
}

function parseFrontmatterBlock(block: string): PostFrontmatter {
  const lines = block.split(/\r?\n/);
  const result: PostFrontmatter = {};

  let i = 0;
  while (i < lines.length) {
    const line = lines[i]!;
    // Blank lines, and stray indented lines that belong to no known block.
    if (line.trim() === "" || indentOf(line) > 0) {
      i++;
      continue;
    }
    const colon = line.indexOf(":");
    if (colon <= 0) {
      i++;
      continue;
    }
    const k = line.slice(0, colon).trim();
    const rawValue = line.slice(colon + 1).trim();

    if (k === "video" && rawValue === "") {
      const { entries, next } = readNestedBlock(lines, i + 1);
      const video = normalizePostVideo(entries);
      if (video) result.video = video;
      i = next;
      continue;
    }

    if (k === "keywords") {
      const keywords = parseKeywords(rawValue);
      if (keywords) result.keywords = keywords;
    } else if (k === "featured" || k === "published") {
      result[k] = parseScalar(rawValue) === "true";
    } else if ((SCALAR_KEYS as readonly string[]).includes(k)) {
      result[k as ScalarKey] = parseScalar(rawValue);
    }
    i++;
  }
  return result;
}
