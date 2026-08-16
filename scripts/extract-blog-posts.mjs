import { mkdirSync, writeFileSync } from "node:fs";

import { blogPosts } from "../lib/blog.ts";

const blogDirectory = new URL("../data/blog/", import.meta.url);
const mediaModule = new URL("../lib/blog-media.ts", import.meta.url);
const orderManifest = new URL("../data/blog/order.json", import.meta.url);

function yamlScalar(value) {
  return JSON.stringify(value);
}

function serializeDocument(post) {
  const lines = [
    "---",
    "title: " + yamlScalar(post.title),
    "description: " + yamlScalar(post.excerpt),
    "publishedAt: " + yamlScalar(post.date),
  ];

  if (post.updatedDate) {
    lines.push("updatedAt: " + yamlScalar(post.updatedDate));
  }

  lines.push(
    "author: " + yamlScalar(post.author),
    "category: " + yamlScalar(post.category),
  );

  if (post.image) {
    lines.push("image: " + yamlScalar(post.image));
  }
  if (post.imageAlt) {
    lines.push("imageAlt: " + yamlScalar(post.imageAlt));
  }

  return lines.concat(["---", post.content]).join("\n");
}

function compactObject(entries) {
  return Object.fromEntries(entries.filter(([, value]) => value !== undefined));
}

function serializeMeta(post) {
  const meta = compactObject([
    ["authorSlug", post.authorSlug],
    ["relatedServices", post.relatedServices],
    ["relatedSlugs", post.relatedSlugs],
    ["faqs", post.faqs],
    ["howToSteps", post.howToSteps],
  ]);
  return JSON.stringify(meta, null, 2) + "\n";
}

function assertSafeSlug(slug) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("Refusing unsafe blog slug: " + JSON.stringify(slug));
  }
}

const seen = new Set();
for (const post of blogPosts) {
  assertSafeSlug(post.slug);
  if (seen.has(post.slug)) {
    throw new Error("Duplicate blog slug: " + post.slug);
  }
  seen.add(post.slug);
}

mkdirSync(blogDirectory, { recursive: true });

const filePosts = blogPosts.filter((post) => post.type === "blog");
for (const post of filePosts) {
  writeFileSync(
    new URL(post.slug + ".mdx", blogDirectory),
    serializeDocument(post),
    "utf8",
  );
  writeFileSync(
    new URL(post.slug + ".meta.json", blogDirectory),
    serializeMeta(post),
    "utf8",
  );
}

const mediaPosts = blogPosts.filter((post) => post.type === "media");
const mediaSource = [
  'import type { BlogPost } from "./blog.ts";',
  "",
  "/** External citations stay in TypeScript because their internal pages preserve",
  " * the existing media-specific article treatment and outbound source notice. */",
  "export const mediaPosts: BlogPost[] = " +
    JSON.stringify(mediaPosts, null, 2) +
    ";",
  "",
].join("\n");
writeFileSync(mediaModule, mediaSource, "utf8");

writeFileSync(
  orderManifest,
  JSON.stringify(blogPosts.map((post) => post.slug), null, 2) + "\n",
  "utf8",
);

console.log(
  "Extracted " +
    filePosts.length +
    " blog posts and retained " +
    mediaPosts.length +
    " media entries.",
);
