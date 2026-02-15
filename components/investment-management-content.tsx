"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from "motion/react";
import {
  ArrowRight,
  TrendingDown,
  Map,
  RefreshCw,
  BarChart3,
  Briefcase,
  Layers,
  Shield,
  Target,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ═══════ Disconnected vs Coordinated visual ═══════ */

function DisconnectedVisual() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-destructive/80 uppercase tracking-wider">
          Typical Setup
        </p>
        <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
          Disconnected
        </span>
      </div>

      {/* Advisor rebalances */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="p-3 rounded-lg bg-background border border-border"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center text-[10px] font-bold text-foreground/60">
            A
          </div>
          <span className="text-xs font-medium text-foreground">
            Advisor rebalances in December
          </span>
        </div>
        <div className="flex items-center gap-2 ml-8">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1.5 bg-foreground/15 rounded-full"
          />
        </div>
      </motion.div>

      {/* Arrow down with X */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="flex items-center justify-center gap-2"
      >
        <div className="h-px flex-1 bg-destructive/20" />
        <div className="w-7 h-7 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center">
          <span className="text-destructive text-xs font-bold">✕</span>
        </div>
        <div className="h-px flex-1 bg-destructive/20" />
      </motion.div>

      {/* CPA surprised */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="p-3 rounded-lg bg-background border border-destructive/20"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-[10px] font-bold text-destructive/60">
            C
          </div>
          <span className="text-xs font-medium text-foreground">
            CPA discovers $47K capital gains
          </span>
        </div>
        <p className="text-[10px] text-muted-foreground ml-8">
          Too late to offset — no losses harvested
        </p>
      </motion.div>

      {/* Cost */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.0 }}
        className="p-3 rounded-lg bg-destructive/[0.04] border border-destructive/15 text-center"
      >
        <p className="text-xs text-destructive/80 font-semibold">
          Unnecessary tax bill: $12,400
        </p>
      </motion.div>
    </div>
  );
}

function CoordinatedVisual() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-[#1e6eae] uppercase tracking-wider">
          United FPG
        </p>
        <span className="text-[10px] text-[#1e6eae] bg-[#1e6eae]/10 px-2 py-0.5 rounded-full font-medium">
          Coordinated
        </span>
      </div>

      {/* Advisor checks tax plan first */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="p-3 rounded-lg bg-background border border-border"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-6 h-6 rounded-full bg-[#1e6eae]/10 flex items-center justify-center text-[10px] font-bold text-[#1e6eae]">
            1
          </div>
          <span className="text-xs font-medium text-foreground">
            Advisor checks tax brackets first
          </span>
        </div>
        <p className="text-[10px] text-muted-foreground ml-8">
          Models rebalance impact on this year&apos;s return
        </p>
      </motion.div>

      {/* Arrow down with check */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="flex items-center justify-center gap-2"
      >
        <div className="h-px flex-1 bg-[#1e6eae]/20" />
        <div className="w-7 h-7 rounded-full bg-[#1e6eae]/10 border border-[#1e6eae]/20 flex items-center justify-center">
          <span className="text-[#1e6eae] text-xs font-bold">✓</span>
        </div>
        <div className="h-px flex-1 bg-[#1e6eae]/20" />
      </motion.div>

      {/* Harvest losses first */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="p-3 rounded-lg bg-background border border-[#1e6eae]/20"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-6 h-6 rounded-full bg-[#1e6eae]/10 flex items-center justify-center text-[10px] font-bold text-[#1e6eae]">
            2
          </div>
          <span className="text-xs font-medium text-foreground">
            Harvests losses to offset gains
          </span>
        </div>
        <p className="text-[10px] text-muted-foreground ml-8">
          Rebalances using contributions + dividends
        </p>
      </motion.div>

      {/* Arrow down with check */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1.0 }}
        className="flex items-center justify-center gap-2"
      >
        <div className="h-px flex-1 bg-[#1e6eae]/20" />
        <div className="w-7 h-7 rounded-full bg-[#1e6eae]/10 border border-[#1e6eae]/20 flex items-center justify-center">
          <span className="text-[#1e6eae] text-xs font-bold">✓</span>
        </div>
        <div className="h-px flex-1 bg-[#1e6eae]/20" />
      </motion.div>

      {/* Result */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.1 }}
        className="p-3 rounded-lg bg-[#1e6eae]/[0.05] border border-[#1e6eae]/20 text-center"
      >
        <p className="text-xs text-[#1e6eae] font-semibold">
          Tax saved: $12,400 — portfolio on target
        </p>
      </motion.div>
    </div>
  );
}

/* ═══════ Problem Section ═══════ */

export function ProblemSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm text-[#1e6eae] font-medium mb-4"
            >
              The Problem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-8"
            >
              Your Portfolio Doesn&apos;t Exist in a Vacuum. So Why Is It
              Managed Like It Does?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="space-y-6 text-foreground/70 leading-relaxed text-base sm:text-lg"
            >
              <p>
                Your advisor rebalances in December without asking your CPA how
                it&apos;ll hit your return. You&apos;re paying capital gains
                taxes that could have been offset — if anyone had been paying
                attention.
              </p>
              <p>
                Most investment managers optimize for one thing: returns before
                taxes. But returns before taxes aren&apos;t what you spend. What
                you spend is what&apos;s left after the IRS takes its share.
              </p>
            </motion.div>
          </div>

          {/* Right — animated comparison visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-4 rounded-2xl border border-border bg-card">
              <DisconnectedVisual />
            </div>
            <div className="p-4 rounded-2xl border border-[#1e6eae]/20 bg-card">
              <CoordinatedVisual />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="mt-12 p-6 sm:p-8 bg-[#1e6eae]/[0.06] border border-[#1e6eae]/20 rounded-2xl"
        >
          <p className="text-foreground font-medium leading-relaxed text-lg sm:text-xl text-center">
            At United, your portfolio is never managed in isolation. It&apos;s
            managed in service of your financial and tax plan — always.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════ Philosophy Section — features-4 style tabs ═══════ */

const philosophyTabs = [
  {
    icon: Layers,
    title: "Low-Cost Index Investing",
    description:
      "We build globally diversified portfolios using low-cost index funds and ETFs. The evidence is clear — over the long term, most active managers fail to beat the index after fees. We'd rather put that fee savings back in your pocket and let compounding do the work.",
    features: [
      "Globally diversified index fund portfolios",
      "Evidence-based asset allocation",
      "Expense ratios as low as 0.03%",
      "No proprietary or high-commission products",
    ],
  },
  {
    icon: Map,
    title: "Tax-Efficient Portfolio Management",
    description:
      "Where you hold an investment matters almost as much as what you hold. We optimize asset location — placing tax-inefficient investments in tax-advantaged accounts and tax-efficient holdings in taxable accounts — so you minimize the drag that taxes create on long-term growth.",
    features: [
      "Asset location optimization across account types",
      "Tax-inefficient holdings placed in IRAs and 401(k)s",
      "Tax-efficient equity in taxable accounts",
      "Minimized long-term tax drag on growth",
    ],
  },
  {
    icon: Target,
    title: "Your Plan Drives Your Portfolio",
    description:
      "Every investment decision at United is informed by your financial plan and your tax situation. We don't build a portfolio and hope it fits your life. We start with your life — your retirement timeline, your income needs, your tax brackets, your goals — and build a portfolio that serves it.",
    features: [
      "Portfolio constructed from your financial plan",
      "Risk aligned to your retirement timeline",
      "Income needs and tax brackets inform every trade",
      "Adjusted as your life and goals change",
    ],
  },
];

export function PhilosophySection() {
  const [activeTab, setActiveTab] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % philosophyTabs.length);
    }, 5500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % philosophyTabs.length);
      }, 5500);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm text-[#1e6eae] font-medium mb-4"
          >
            Our Investment Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-4"
          >
            Simple. Disciplined. Tax-Efficient.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We don&apos;t chase performance. We don&apos;t try to time the
            market. And we don&apos;t use expensive, actively managed funds that
            statistically underperform their benchmarks over time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            {philosophyTabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => handleTabClick(index)}
                  className={`w-full text-left p-4 md:p-6 rounded-2xl transition-[border-color,background-color] duration-200 flex-1 flex items-start ${
                    isActive
                      ? "bg-[#1e6eae]/[0.07] border border-[#1e6eae]/20"
                      : "bg-muted/40 border border-border hover:bg-muted/70"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-base md:text-lg font-semibold mb-1 ${
                          isActive ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {tab.title}
                      </h3>
                      <p className="text-sm line-clamp-2 text-muted-foreground">
                        {tab.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="lg:col-span-8 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-border bg-background p-6 md:p-8 lg:p-10 flex-1"
              >
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1e6eae]/[0.08] mb-6">
                    {(() => {
                      const Icon = philosophyTabs[activeTab].icon;
                      return <Icon className="w-8 h-8 text-[#1e6eae]" />;
                    })()}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                    {philosophyTabs[activeTab].title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {philosophyTabs[activeTab].description}
                  </p>
                </div>

                <div className="space-y-4">
                  {philosophyTabs[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-muted/40"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                        <svg
                          className="w-4 h-4 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-foreground/80 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Tax-Aware Grid (features-5 style, 6 tiles — 3×2) ═══════ */

import { DollarSign } from "lucide-react";

const taxTiles = [
  {
    icon: TrendingDown,
    title: "Tax-Loss Harvesting",
    description:
      "When positions decline, we strategically realize losses to offset gains elsewhere — coordinated with your actual tax situation, because a loss that saves you 37 cents on the dollar is worth a lot more than one that saves you 12.",
  },
  {
    icon: Map,
    title: "Asset Location Optimization",
    description:
      "The same investment can produce very different after-tax results depending on which account it sits in. We place bonds and REITs in IRAs while keeping tax-efficient equity index funds in taxable accounts.",
  },
  {
    icon: RefreshCw,
    title: "Rebalancing With Tax Consequences in Mind",
    description:
      "We rebalance strategically — using new contributions, dividends, and tax-loss harvesting opportunities to bring your portfolio back to target without creating avoidable tax bills.",
  },
  {
    icon: BarChart3,
    title: "Capital Gains & Bracket Management",
    description:
      "We monitor your taxable income throughout the year and time investment decisions accordingly — because the same team managing your portfolio is also managing your tax plan.",
  },
  {
    icon: Briefcase,
    title: "Equity Compensation & Concentrated Positions",
    description:
      "ISOs, NSOs, RSUs, or a concentrated single-stock position — we integrate equity compensation into your overall allocation and model exercise and diversification strategies with tax consequences in mind.",
  },
  {
    icon: DollarSign,
    title: "Withdrawal & Distribution Coordination",
    description:
      "Which account you pull from — and when — can dramatically change your tax bill in retirement. We sequence withdrawals across taxable, tax-deferred, and Roth accounts to keep you in the lowest bracket possible, year after year.",
  },
];

export function TaxAwareGrid() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
      {/* Dashed grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(30, 110, 174, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30, 110, 174, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 100% 100% at 100% 0%, #000 24%, transparent 82%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 100% 100% at 100% 0%, #000 24%, transparent 82%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm text-[#1e6eae] font-medium mb-4"
          >
            Tax-Aware Investing in Practice
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl tracking-tight sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6 max-w-4xl"
          >
            How Tax-Aware Investing Works in Practice
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl"
          >
            Six coordinated strategies that turn portfolio management into
            after-tax wealth building.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border rounded-2xl overflow-hidden">
          {taxTiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-6 md:p-8 bg-card
                  ${index < 3 ? "border-b border-border" : ""}
                  ${index % 3 !== 2 ? "lg:border-r lg:border-border" : ""}
                  ${index % 2 === 0 && index < 4 ? "md:border-r md:border-border" : ""}
                  ${index < 4 ? "md:border-b md:border-border" : ""}
                `}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <Icon
                      className="w-full h-full text-[#1e6eae]"
                      strokeWidth={0.8}
                    />
                  </div>
                </div>
                <h3 className="text-lg tracking-tight sm:text-xl font-semibold text-foreground mb-3">
                  {tile.title}
                </h3>
                <p className="text-sm tracking-tight sm:text-base text-muted-foreground leading-normal">
                  {tile.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════ Differentiator — bento grid ═══════ */

const diffPoints = [
  {
    span: "lg:col-span-3",
    text: "Most investment managers will build you a good portfolio. Some will even build a great one. But very few will call your CPA before rebalancing. Almost none will model how a trade in your brokerage account affects your Medicare premiums two years from now.",
  },
  {
    span: "",
    text: "We do — because the people managing your portfolio are the same people managing your financial plan and preparing your tax return.",
  },
  {
    span: "",
    text: "There's no handoff, no game of telephone, no hoping that two separate firms happen to make compatible decisions.",
  },
  {
    span: "",
    text: "Your investments, your tax plan, and your financial plan — one team, one strategy.",
  },
];

export function DifferentiatorSection() {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm text-[#1e6eae] font-medium mb-4"
        >
          The United Difference
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-10 max-w-4xl"
        >
          The Difference Between Managing a Portfolio and Managing Your Wealth
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {diffPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col justify-between rounded-2xl border border-border bg-muted/30 p-6 sm:p-8 ${item.span}`}
            >
              <p
                className={`leading-relaxed ${
                  i === 0
                    ? "text-lg sm:text-xl lg:text-2xl font-medium text-foreground lg:text-center"
                    : "text-sm sm:text-base text-foreground/80"
                }`}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════ CTA — parallax floating cards ═══════ */

const floatingCards = [
  { x: "8%", y: "15%", rotation: -10, intensity: 0.03 },
  { x: "72%", y: "12%", rotation: 8, intensity: 0.04 },
  { x: "25%", y: "60%", rotation: 15, intensity: 0.02 },
  { x: "78%", y: "65%", rotation: -12, intensity: 0.035 },
];

function FloatingCard({
  card,
  smoothX,
  smoothY,
  index,
}: {
  card: (typeof floatingCards)[0];
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  index: number;
}) {
  const px = useTransform(smoothX, [-1, 1], [-15 * card.intensity * 100, 15 * card.intensity * 100]);
  const py = useTransform(smoothY, [-1, 1], [-10 * card.intensity * 100, 10 * card.intensity * 100]);
  const labels = ["Portfolio", "Tax Plan", "Financial Plan", "Returns"];

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: card.x, top: card.y, x: px, y: py, rotate: card.rotation }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-xl border border-border bg-muted/60 flex items-center justify-center">
        <span className="text-xs sm:text-sm font-medium text-foreground/40">
          {labels[index]}
        </span>
      </div>
    </motion.div>
  );
}

export function InvestmentCTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  return (
    <section
      className="relative w-full min-h-[60vh] flex items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0">
        {floatingCards.map((card, i) => (
          <FloatingCard key={i} card={card} smoothX={smoothX} smoothY={smoothY} index={i} />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6"
        >
          Ready for Investment Management That Sees the Full Picture?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-lg text-muted-foreground leading-relaxed mb-10"
        >
          Schedule a no-pressure conversation. We&apos;ll listen to how your
          portfolio is currently managed, what&apos;s working, what isn&apos;t —
          and whether a more coordinated approach could make a meaningful
          difference.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book Your Complimentary Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
