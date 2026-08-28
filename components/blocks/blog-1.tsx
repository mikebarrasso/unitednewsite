import {
  Blog1Client,
  type BlogCardPost,
} from "@/components/blocks/blog-1-client";
import { getPostFrontmatter, isPostLive, type BlogPost } from "@/lib/blog";

function toBlogCardPost(post: BlogPost): BlogCardPost {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    category: post.category,
    excerpt: post.excerpt,
    ...(!isPostLive(getPostFrontmatter(post)) ? { isDraft: true } : {}),
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

export function Blog1({ posts }: { posts: BlogPost[] }) {
  // Full post bodies must never ship in the client bundle again: after contract
  // 3.5, a waiting post's body would be a public leak even while its URL 404s.
  return <Blog1Client posts={posts.map(toBlogCardPost)} />;
}
