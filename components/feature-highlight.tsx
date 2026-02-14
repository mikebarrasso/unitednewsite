"use client";

import { type ReactNode } from "react";
import { ArrowRight, Users, FileText, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const highlights = [
  {
    icon: <Users className="w-5 h-5" />,
    text: "CFPs, CPAs, and Enrolled Agents work side by side — not across town.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    text: "The person managing your portfolio understands exactly how it impacts your tax return.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    text: "Every recommendation accounts for both sides of the equation.",
  },
];

export function FeatureHighlight(): ReactNode {
  return (
    <section className="relative w-full bg-background pb-24 sm:pb-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground"
            >
              What Changes When{" "}
              <span className="italic">Everything Works Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mt-6 text-foreground/70 leading-relaxed max-w-lg"
            >
              Most advisory firms do one thing well and outsource the rest. We
              took a different approach. At United Financial Planning Group, your
              investment decisions, retirement timeline, and tax planning
              reinforce each other instead of working at cross purposes.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="mt-8 space-y-4"
            >
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 text-foreground/60">
                    {item.icon}
                  </span>
                  <span className="text-foreground/80">{item.text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 mt-10 text-foreground font-medium hover:opacity-70 transition-opacity"
              >
                Explore how we work together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative bg-muted/50 border border-border rounded-sm p-8 sm:p-10"
          >
            <p className="text-foreground/80 leading-relaxed text-lg">
              &ldquo;The result: strategies that actually compound — where your
              investment decisions, retirement timeline, and tax planning
              reinforce each other instead of working at cross purposes.&rdquo;
            </p>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm font-medium text-foreground">
                The Cost of Disconnected Advice
              </p>
              <ul className="mt-4 space-y-3">
                <li className="text-sm text-foreground/60 leading-relaxed">
                  Your advisor rebalances in December — triggering capital gains
                  your CPA didn&apos;t expect and can&apos;t offset.
                </li>
                <li className="text-sm text-foreground/60 leading-relaxed">
                  You convert to a Roth based on a rule of thumb — without
                  modeling the impact on your Medicare premiums.
                </li>
                <li className="text-sm text-foreground/60 leading-relaxed">
                  You exercise stock options on your own timeline — unaware that
                  waiting three months would have saved you $40,000.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
