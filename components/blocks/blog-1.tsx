"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { getAllPosts, formatDate, type BlogPost } from "@/lib/blog";

function ArticleCard({
  post,
  delay = 0,
}: {
  post: BlogPost;
  delay?: number;
}) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col gap-3 group"
      >
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10" />
          <span className="text-4xl font-serif text-foreground/10 select-none">
            UFPG
          </span>
          <span className="absolute top-3 right-3 px-3 py-1 bg-background text-foreground text-xs font-medium rounded-full shadow-sm border border-border">
            {post.category}
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-sm sm:text-base font-medium text-foreground leading-snug line-clamp-2 group-hover:text-foreground/70 transition-colors">
            {post.title}
          </h3>
          <span className="text-xs text-muted-foreground">
            {formatDate(post.date)}
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

export function Blog1() {
  const posts = getAllPosts();

  return (
    <section className="w-full pb-8 sm:pb-12 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-0 bg-background px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 md:pb-28"
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium font-serif tracking-tight text-foreground">
              Blog
            </h1>

            <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 lg:max-w-sm tracking-tight">
              Insights, guides, and news on financial planning, tax strategy,
              retirement, and investment management.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="bg-card rounded-3xl sm:rounded-[2rem] pt-10 sm:pt-14 px-6 sm:px-10 pb-12 sm:pb-16 border border-border shadow-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-medium font-serif text-foreground mb-8 sm:mb-10"
            >
              Latest Articles
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post, idx) => (
                <ArticleCard
                  key={post.slug}
                  post={post}
                  delay={0.15 + idx * 0.05}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
