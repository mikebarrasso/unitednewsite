"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";
import { LogoLoop, type LogoItem } from "@/components/logo-loop";

const ease = [0.16, 1, 0.3, 1] as const;

const logos: LogoItem[] = [
  {
    node: (
      <span className="text-lg sm:text-xl font-serif font-medium text-foreground/40 whitespace-nowrap select-none">
        The Wall Street Journal
      </span>
    ),
  },
  {
    node: (
      <span className="text-lg sm:text-xl font-serif font-bold italic text-foreground/40 whitespace-nowrap select-none">
        Forbes
      </span>
    ),
  },
  {
    node: (
      <span className="text-lg sm:text-xl font-serif font-bold text-foreground/40 whitespace-nowrap select-none tracking-tight">
        FORTUNE
      </span>
    ),
  },
  {
    node: (
      <span className="text-lg sm:text-xl font-serif font-medium text-foreground/40 whitespace-nowrap select-none">
        MarketWatch
      </span>
    ),
  },
  {
    node: (
      <span className="text-lg sm:text-xl font-medium text-foreground/40 whitespace-nowrap select-none tracking-tight uppercase">
        NAPFA
      </span>
    ),
  },
  {
    node: (
      <span className="text-lg sm:text-xl font-medium text-foreground/40 whitespace-nowrap select-none tracking-tight uppercase">
        AICPA
      </span>
    ),
  },
];

export function TrustedBy(): ReactNode {
  return (
    <section className="relative w-full bg-background py-16 sm:py-20">
      <div className="flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-sm font-medium uppercase tracking-wider text-foreground/40 mb-10"
        >
          As seen in
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="w-full"
        >
          <LogoLoop logos={logos} speed={40} logoHeight={36} gap={80} />
        </motion.div>
      </div>
    </section>
  );
}
