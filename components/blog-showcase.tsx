import {
  BlogShowcaseClient,
  type BlogShowcasePost,
} from "@/components/blog-showcase-client";
import { getAllPosts, type BlogPost } from "@/lib/blog";

function toBlogShowcasePost(post: BlogPost): BlogShowcasePost {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    category: post.category,
    excerpt: post.excerpt,
    ...(post.image
      ? {
          image: {
            src: post.image,
            alt: post.imageAlt ?? post.title,
          },
        }
      : {}),
  };
}

export function BlogShowcase() {
  // Full post bodies must never ship in the client bundle again: after contract
  // 3.5, a waiting post's body would be a public leak even while its URL 404s.
  const posts = getAllPosts().slice(0, 3).map(toBlogShowcasePost);
  return <BlogShowcaseClient posts={posts} />;
}
