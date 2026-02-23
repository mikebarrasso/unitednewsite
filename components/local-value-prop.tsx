"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

type ValuePropItem = {
  title: string;
  description: string;
};

export function LocalValueProp({
  heading,
  subheading,
  items,
  insight,
  insightHeading,
}: {
  heading: string;
  subheading: string;
  items: ValuePropItem[];
  insight: string;
  insightHeading: string;
}): ReactNode {
  return (
    <section className="relative w-full bg-muted py-24 sm:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground"
            >
              {heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="mt-5 text-lg text-foreground/60 leading-relaxed"
            >
              {subheading}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 h-12 px-6 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 active:scale-[0.97] transition-all duration-150"
              >
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease }}
                className="flex gap-4"
              >
                <div className="shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-[#1e6eae]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-20 rounded-2xl border border-border bg-background p-8 sm:p-10"
        >
          <h3 className="text-xl sm:text-2xl font-medium font-serif text-foreground mb-4">
            {insightHeading}
          </h3>
          <p className="text-foreground/60 leading-relaxed max-w-3xl">
            {insight}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
