"use client";

import { motion } from "motion/react";

const articles = [
  {
    id: 1,
    title: "5 Tax Planning Strategies to Consider Before Year-End",
    date: "Dec 15, 2024",
    category: "Tax Planning",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Why Integrated Financial Planning Beats the Siloed Approach",
    date: "Dec 10, 2024",
    category: "Financial Planning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Roth vs. Traditional IRA: Making the Right Choice for Your Retirement",
    date: "Dec 05, 2024",
    category: "Retirement",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Stock Options and Equity Compensation: What High Earners Need to Know",
    date: "Nov 28, 2024",
    category: "Equity Compensation",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Building a Tax-Efficient Investment Portfolio",
    date: "Nov 20, 2024",
    category: "Investments",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "When to Start Social Security: A Framework for Decision-Making",
    date: "Nov 15, 2024",
    category: "Retirement",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
  },
];

function ArticleCard({
  title,
  date,
  category,
  image,
  delay = 0,
}: {
  title: string;
  date: string;
  category: string;
  image: string;
  delay?: number;
}) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col gap-3 cursor-pointer"
    >
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 px-3 py-1 bg-background text-foreground text-xs font-medium rounded-full shadow-sm border border-border">
          {category}
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm sm:text-base font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <span className="text-xs text-muted-foreground">
          {date}
        </span>
      </div>
    </motion.a>
  );
}

export function Blog1() {
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
              {articles.map((article, idx) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  date={article.date}
                  category={article.category}
                  image={article.image}
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
