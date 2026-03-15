"use client";

import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  visual: "planning" | "investing" | "tax";
};

const services: ServiceCard[] = [
  {
    title: "Financial Planning",
    description:
      "A comprehensive roadmap for your financial future, built around your actual life and informed by deep tax expertise most planners simply don't have.",
    href: "/services/financial-planning",
    visual: "planning",
  },
  {
    title: "Investment Management",
    description:
      "Tax-aware portfolio management that considers how every trade, every rebalance, and every distribution flows through to your tax return.",
    href: "/services/investment-management",
    visual: "investing",
  },
  {
    title: "Tax Planning & Preparation",
    description:
      "Proactive, year-round strategies to reduce your lifetime tax burden, prepared by CPAs and Enrolled Agents who already know your financial story.",
    href: "/services/tax-planning",
    visual: "tax",
  },
];

function PlanningVisual(): ReactNode {
  const milestones = [
    { label: "Cash Flow", pct: 92 },
    { label: "Retirement", pct: 78 },
    { label: "Estate Plan", pct: 65 },
    { label: "Risk Coverage", pct: 85 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="w-full max-w-xs">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#1e6eae]" />
          <span className="text-xs font-medium text-foreground">
            Plan Health
          </span>
          <span className="text-xs text-[#1e6eae] ml-auto font-semibold">
            On Track
          </span>
        </div>
        <div className="space-y-3">
          {milestones.map((m, i) => (
            <div key={m.label}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-muted-foreground">{m.label}</span>
                <span className="text-foreground font-medium">{m.pct}%</span>
              </div>
              <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-foreground/70 rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease }}
                  style={{ width: `${m.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InvestingVisual(): ReactNode {
  const bars = [0.35, 0.5, 0.45, 0.6, 0.55, 0.7, 0.65, 0.8, 0.75, 0.9, 0.85, 1.0];

  return (
    <div className="w-full h-full flex items-center justify-center p-8 sm:p-6">
      <div className="relative w-full max-w-xs">
        <div className="flex items-end justify-between gap-1.5 h-24 sm:h-32">
          {bars.map((height, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-linear-to-t from-foreground/60 to-foreground/25 rounded-t origin-bottom"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04, ease }}
              style={{ height: `${height * 100}%` }}
            />
          ))}
        </div>
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-foreground/60" />
            <span className="text-[10px] text-muted-foreground">
              Tax-optimized
            </span>
          </div>
        </div>
        <p className="text-[9px] text-muted-foreground/50 leading-relaxed mt-3">
          Hypothetical illustration only. Not actual client results. Past
          performance does not guarantee future results. Investing involves
          risk, including possible loss of principal.
        </p>
      </div>
    </div>
  );
}

function TaxVisual(): ReactNode {
  const rows = [
    {
      strategy: "Roth Conversion",
      savings: "$42,000",
      status: "Executed",
      highlight: true,
    },
    {
      strategy: "Tax-Loss Harvest",
      savings: "$18,500",
      status: "Executed",
      highlight: true,
    },
    {
      strategy: "Charitable QCD",
      savings: "$12,000",
      status: "Planned",
      highlight: false,
    },
    {
      strategy: "ESPP Timing",
      savings: "$8,200",
      status: "Monitoring",
      highlight: false,
    },
  ];

  return (
    <div className="w-full h-full flex items-end justify-center p-6">
      <div className="w-full max-w-xs translate-y-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground pb-2 border-b border-border mb-1">
          <span>Strategy</span>
          <div className="flex gap-8">
            <span>Savings</span>
            <span className="w-16 text-right">Status</span>
          </div>
        </div>
        {rows.map((row, i) => (
          <motion.div
            key={row.strategy}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease }}
            className={`flex items-center justify-between py-2.5 text-sm ${i < rows.length - 1 ? "border-b border-border/50" : ""}`}
          >
            <span
              className={
                row.highlight
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }
            >
              {row.strategy}
            </span>
            <div className="flex gap-8 items-center">
              <span className="text-foreground font-medium tabular-nums">
                {row.savings}
              </span>
              <span
                className={`w-16 text-right text-xs ${row.status === "Executed" ? "text-[#1e6eae]" : "text-muted-foreground"}`}
              >
                {row.status}
              </span>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4, ease }}
          className="flex items-center justify-between pt-3 mt-1 border-t border-foreground/10"
        >
          <span className="text-sm font-medium text-foreground">
            Total Projected
          </span>
          <span className="text-sm font-semibold text-foreground tabular-nums">
            $80,700
          </span>
        </motion.div>
        <p className="text-[9px] text-muted-foreground/50 leading-relaxed mt-3">
          Hypothetical illustration only. Dollar figures do not represent actual
          client results. Individual outcomes vary based on circumstances.
        </p>
      </div>
    </div>
  );
}

function ServiceCardComponent({
  card,
  index,
}: {
  card: ServiceCard;
  index: number;
}): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="group flex flex-col bg-muted/50 border border-border rounded-sm overflow-hidden hover:border-foreground/20 hover:shadow-lg transition-[border-color,box-shadow]"
    >
      <div className="relative h-56 sm:h-64 bg-background">
        {card.visual === "planning" && <PlanningVisual />}
        {card.visual === "investing" && <InvestingVisual />}
        {card.visual === "tax" && <TaxVisual />}
      </div>
      <div className="flex flex-col p-6">
        <h3 className="text-lg font-medium font-serif text-foreground">
          {card.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {card.description}
        </p>
        <Link
          href={card.href}
          className="flex items-center gap-1 mt-4 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors"
        >
          Learn more
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export function FeatureCards(): ReactNode {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground"
          >
            A one stop shop for your
            <br />
            <span className="italic">entire financial life</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((card, index) => (
            <ServiceCardComponent key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
