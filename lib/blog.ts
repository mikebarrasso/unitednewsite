import { readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";

import {
  parseBlogDocument,
  type PostFrontmatter,
} from "./blog-contract/frontmatter.ts";
import { mediaPosts } from "./blog-media.ts";

export type AuthorSlug =
  | "gerry-barrasso"
  | "michael-barrasso"
  | "ryan-derousseau"
  | "jose-vivero"
  | "firm";

export type AuthorProfile = {
  name: string;
  /** Initials shown in the byline avatar. */
  initials: string;
  jobTitle: string;
  /** Credential string for display, e.g. "CFP®, CPA, PFS". */
  credentials?: string;
  /** Path to the team page; "/" for firm posts that have no individual page. */
  url: string;
  /** External profiles (LinkedIn, etc.) emitted as schema.org `sameAs`. */
  sameAs?: string[];
  /** Topical expertise; emitted as schema.org `knowsAbout` on the author. */
  knowsAbout?: string[];
};

export const authorProfiles: Record<AuthorSlug, AuthorProfile> = {
  "gerry-barrasso": {
    name: "Gerry Barrasso",
    initials: "GB",
    jobTitle: "President & Founder",
    credentials: "CFP®, CPA, PFS",
    url: "/team/gerry-barrasso",
    sameAs: ["https://www.linkedin.com/in/gerrybarrasso/"],
    knowsAbout: [
      "Wealth Management",
      "Financial Planning",
      "Tax Planning",
      "Tax Preparation",
      "Retirement Planning",
      "Investment Management",
    ],
  },
  "michael-barrasso": {
    name: "Michael Barrasso",
    initials: "MB",
    jobTitle: "Director of Business Development",
    url: "/team/michael-barrasso",
  },
  "ryan-derousseau": {
    name: "Ryan Derousseau",
    initials: "RD",
    jobTitle: "Financial Advisor",
    credentials: "CFP®, EA",
    url: "/team/ryan-derousseau",
    knowsAbout: [
      "Financial Planning",
      "Tax Planning",
      "Investment Management",
    ],
  },
  "jose-vivero": {
    name: "Jose Vivero",
    initials: "JV",
    jobTitle: "Financial Advisor",
    credentials: "CFP®, ChFC®, CLU®, RICP®",
    url: "/team/jose-vivero",
    knowsAbout: [
      "Financial Planning",
      "Retirement Income Planning",
      "Investment Management",
    ],
  },
  firm: {
    name: "United Financial Planning Group",
    initials: "UF",
    jobTitle: "United Financial Planning Group",
    url: "/about",
  },
};

export type BlogFAQ = {
  question: string;
  answer: string;
};

export type HowToStep = {
  /** Short imperative title for the step. */
  name: string;
  /** Full description rendered into HowTo schema. */
  text: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  updatedDate?: string;
  category: string;
  excerpt: string;
  /** Display string used as a fallback if `authorSlug` isn't supplied. */
  author: string;
  /** Preferred way to attribute a post; drives the byline and Article schema. */
  authorSlug?: AuthorSlug;
  type: "blog" | "media";
  externalUrl?: string;
  publication?: string;
  relatedServices: string[];
  relatedSlugs: string[];
  /** Optional FAQ block rendered below the article and emitted as FAQPage schema. */
  faqs?: BlogFAQ[];
  /** Optional step list emitted as HowTo schema (steps should also appear in `content`). */
  howToSteps?: {
    /** Headline for the procedure (also rendered as the HowTo `name`). */
    name: string;
    /** One-sentence description of the procedure. */
    description?: string;
    steps: HowToStep[];
  };
  /** Optional featured/hero image URL used as og:image and in Article schema. */
  image?: string;
  /** Alt text for the featured image (required when `image` is set). */
  imageAlt?: string;
  content: string;
};

type BlogPostMeta = {
  authorSlug?: AuthorSlug;
  relatedServices?: string[];
  relatedSlugs?: string[];
  faqs?: BlogFAQ[];
  howToSteps?: BlogPost["howToSteps"];
};

const BLOG_DIRECTORY = join(process.cwd(), "data/blog");
const ORDER_MANIFEST = join(BLOG_DIRECTORY, "order.json");
const frontmatterBySlug = new Map<string, PostFrontmatter>();

function requiredScalar(
  frontmatter: PostFrontmatter,
  key:
    | "title"
    | "description"
    | "publishedAt"
    | "author"
    | "category",
  slug: string,
): string {
  const value = frontmatter[key];
  if (!value) {
    throw new Error(
      'Blog post "' + slug + '" is missing required frontmatter "' + key + '".',
    );
  }
  return value;
}

function loadBlogPost(fileName: string): BlogPost {
  const slug = basename(fileName, ".mdx");
  const source = readFileSync(join(BLOG_DIRECTORY, fileName), "utf8");
  const { frontmatter, body } = parseBlogDocument(source);
  const meta = JSON.parse(
    readFileSync(join(BLOG_DIRECTORY, slug + ".meta.json"), "utf8"),
  ) as BlogPostMeta;

  const post: BlogPost = {
    slug,
    title: requiredScalar(frontmatter, "title", slug),
    date: requiredScalar(frontmatter, "publishedAt", slug),
    category: requiredScalar(frontmatter, "category", slug),
    excerpt: requiredScalar(frontmatter, "description", slug),
    author: requiredScalar(frontmatter, "author", slug),
    type: "blog",
    relatedServices: meta.relatedServices ?? [],
    relatedSlugs: meta.relatedSlugs ?? [],
    content: body,
  };

  if (frontmatter.updatedAt) post.updatedDate = frontmatter.updatedAt;
  if (meta.authorSlug) post.authorSlug = meta.authorSlug;
  if (meta.faqs) post.faqs = meta.faqs;
  if (meta.howToSteps) post.howToSteps = meta.howToSteps;
  if (frontmatter.image) post.image = frontmatter.image;
  if (frontmatter.imageAlt) post.imageAlt = frontmatter.imageAlt;

  frontmatterBySlug.set(slug, frontmatter);
  return post;
}

const fileBlogPosts = readdirSync(BLOG_DIRECTORY)
  .filter((fileName) => fileName.endsWith(".mdx"))
  .sort((a, b) => a.localeCompare(b))
  .map(loadBlogPost);

for (const post of mediaPosts) {
  frontmatterBySlug.set(post.slug, {
    title: post.title,
    description: post.excerpt,
    publishedAt: post.date,
    ...(post.updatedDate ? { updatedAt: post.updatedDate } : {}),
    author: post.author,
    category: post.category,
    ...(post.image ? { image: post.image } : {}),
    ...(post.imageAlt ? { imageAlt: post.imageAlt } : {}),
  });
}

const postBySlug = new Map<string, BlogPost>();
for (const post of [...fileBlogPosts, ...mediaPosts]) {
  if (postBySlug.has(post.slug)) {
    throw new Error('Duplicate blog slug: "' + post.slug + '".');
  }
  postBySlug.set(post.slug, post);
}

const preservedOrder = JSON.parse(
  readFileSync(ORDER_MANIFEST, "utf8"),
) as string[];
const orderedSlugs = new Set(preservedOrder);
const orderedPosts = preservedOrder.flatMap((slug) => {
  const post = postBySlug.get(slug);
  return post ? [post] : [];
});
const newlyAuthoredPosts = fileBlogPosts.filter(
  (post) => !orderedSlugs.has(post.slug),
);

/**
 * Preserves the legacy array order for byte-identical rendering. Newly authored
 * file posts append deterministically by filename until a publishing workflow
 * establishes their final order in data/blog/order.json.
 */
export const blogPosts: BlogPost[] = [...orderedPosts, ...newlyAuthoredPosts];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.type === "blog");
}

export function getMediaMentions(): BlogPost[] {
  return blogPosts.filter((post) => post.type === "media");
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return postBySlug.get(slug);
}

/** Frontmatter stays module-private on BlogPost objects so the public API shape is unchanged. */
export function getPostFrontmatter(
  post: BlogPost | string,
): PostFrontmatter {
  const slug = typeof post === "string" ? post : post.slug;
  return frontmatterBySlug.get(slug) ?? {};
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => postBySlug.get(slug))
    .filter((related): related is BlogPost => related !== undefined);
}

export function formatDate(dateStr: string): string {
  // Append a local-noon time so the date is never shifted by timezone offset
  // when parsed. Plain ISO date strings like "2026-07-16" are treated as UTC
  // midnight by the Date constructor, which causes the date to display one day
  // earlier in any timezone behind UTC (e.g. US/Eastern on a Node SSR server).
  const normalized = dateStr.includes("T") ? dateStr : `${dateStr}T12:00:00`;
  return new Date(normalized).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getPostLastModified(post: BlogPost): string {
  return post.updatedDate ?? post.date;
}

/**
 * Resolves the post's display author. Falls back to the firm profile if no
 * `authorSlug` is set (which is the case for legacy posts and "In The Media"
 * entries that are attributed to the firm rather than an individual).
 */
export function getAuthor(post: BlogPost): AuthorProfile {
  if (post.authorSlug) {
    return authorProfiles[post.authorSlug];
  }
  return authorProfiles.firm;
}

const HEADING_TAGS_FOR_TOC = ["h2"] as const;

/** Slugifies heading text (and entity-decodes the common ones we use in posts). */
function slugifyHeading(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/gi, "&")
    .replace(/&(ldquo|rdquo|lsquo|rsquo);/gi, "")
    .replace(/&mdash;|&ndash;/gi, "-")
    .replace(/&[a-z]+;|&#\d+;/gi, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Decodes the small set of entities we use in heading display strings. */
function decodeHeadingText(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/gi, "&")
    .replace(/&ldquo;|&rdquo;|&quot;/gi, '"')
    .replace(/&lsquo;|&rsquo;|&#8217;/gi, "\u2019")
    .replace(/&mdash;/gi, "\u2014")
    .replace(/&ndash;/gi, "\u2013")
    .replace(/&reg;/gi, "\u00ae")
    .replace(/&trade;/gi, "\u2122")
    .trim();
}

/**
 * Adds a stable `id` to every <h2> in the rendered post HTML so deep-links and
 * the table of contents work without authors hand-writing IDs. Existing IDs
 * (e.g. the disclosures anchor) are preserved.
 */
export function injectHeadingIds(html: string): string {
  return html.replace(
    /<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/gi,
    (match, attrsRaw: string | undefined, inner: string) => {
      const attrs = attrsRaw ?? "";
      if (/\bid=["'][^"']+["']/i.test(attrs)) return match;
      return `<h2${attrs} id="${slugifyHeading(inner)}">${inner}</h2>`;
    },
  );
}

export type TocItem = { id: string; text: string };

/** Extracts an ordered list of <h2> headings for the in-article table of contents. */
export function extractToc(html: string): TocItem[] {
  const items: TocItem[] = [];
  for (const tag of HEADING_TAGS_FOR_TOC) {
    // Capture optional attributes so an explicit `id=""` (e.g. the disclosures
    // section) wins over the auto-slugified one — otherwise TOC links 404.
    const regex = new RegExp(
      `<${tag}(\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`,
      "gi",
    );
    for (const match of html.matchAll(regex)) {
      const attrs = match[1] ?? "";
      const inner = match[2] ?? "";
      const text = decodeHeadingText(inner);
      if (!text) continue;
      const explicitId = attrs.match(/\bid=["']([^"']+)["']/i)?.[1];
      const id = explicitId ?? slugifyHeading(inner);
      items.push({ id, text });
    }
  }
  return items;
}

/** Estimates reading time in minutes from a word count (220 wpm baseline). */
export function readingTimeMinutes(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 220));
}

/** Returns ISO 8601 duration for the schema.org `timeRequired` field. */
export function readingTimeIso(wordCount: number): string {
  return `PT${readingTimeMinutes(wordCount)}M`;
}
