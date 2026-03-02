"use client";

import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { getAllPosts, formatDate, type BlogPost } from "@/lib/blog";

const ease = [0.16, 1, 0.3, 1] as const;

function ArticleCard({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}): ReactNode {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 * index, ease }}
        className="group block"
      >
        <div className="relative aspect-4/3 overflow-hidden rounded-md bg-muted mb-4 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10" />
          <span className="text-4xl font-serif text-foreground/10 select-none">
            UFPG
          </span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium text-accent">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">&middot;</span>
          <span className="text-xs text-muted-foreground">
            {formatDate(post.date)}
          </span>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      </motion.div>
    </Link>
  );
}

export function BlogShowcase(): ReactNode {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="relative w-full bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground">
              Latest from our blog
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Insights, guides, and news to help you make smarter financial
              decisions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors shrink-0"
            >
              View all articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <ArticleCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
