"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  ArrowRight,
  ArrowDown,
  DollarSign,
  Briefcase,
  HeartPulse,
  Calendar,
  FileSpreadsheet,
  Replace,
  Building2,
  Heart,
  BarChart3,
  Users,
  Zap,
  Bell,
  TrendingDown,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ═══════ Problem Section - tax mistake cascade ═══════ */

const mistakes = [
  {
    icon: HeartPulse,
    title: "Roth Conversion → IRMAA Surprise",
    detail: "Converted in October without checking Medicare thresholds",
    cost: "+$4,000/yr in Medicare premiums",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: BarChart3,
    title: "December Rebalance → Capital Gains",
    detail: "Advisor rebalanced without consulting tax team",
    cost: "$60K in unexpected capital gains",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Briefcase,
    title: "Stock Options → AMT Hit",
    detail: "Exercised based on gut feeling, nobody modeled AMT",
    cost: "Five-figure tax bill discovered at filing",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
];

export function ProblemSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
              className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6"
            >
              The Most Expensive Tax Mistakes Happen Long Before Filing Season
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg"
            >
              <p>
                These aren&apos;t careless mistakes. They&apos;re the
                predictable result of a system where your financial advisor
                doesn&apos;t think about taxes and your CPA only sees your
                financial life once a year, after every decision has already
                been made.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="mt-8 p-6 bg-[#1e6eae]/[0.05] border border-[#1e6eae]/20 rounded-2xl"
            >
              <p className="text-foreground font-medium leading-relaxed">
                The gap between financial planning and tax planning is where
                money quietly disappears. We built our firm to close that gap.
              </p>
            </motion.div>
          </div>

          {/* Right - animated mistake cascade */}
          <div className="flex flex-col gap-3">
            {mistakes.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="flex flex-col gap-3">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.15, ease }}
                    className="p-4 rounded-2xl bg-card border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`shrink-0 w-10 h-10 rounded-xl ${m.bg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${m.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">{m.title}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{m.detail}</p>
                        <div className="mt-3 flex items-center gap-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.15, ease }}
                            className={`h-1.5 rounded-full ${m.bg}`}
                            style={{ maxWidth: i === 0 ? "60%" : i === 1 ? "85%" : "75%" }}
                          />
                        </div>
                        <p className={`text-xs font-medium mt-1.5 ${m.color}`}>{m.cost}</p>
                      </div>
                    </div>
                  </motion.div>
                  {i < mistakes.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.15 }}
                      className="flex justify-center"
                    >
                      <ArrowDown className="w-4 h-4 text-muted-foreground/30" />
                    </motion.div>
                  )}
                </div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7, ease }}
              className="p-4 rounded-2xl bg-destructive/[0.04] border border-destructive/15 text-center"
            >
              <p className="text-sm text-destructive/80 font-semibold">
                The cost of disconnected advice can compound significantly over a retirement.
              </p>
            </motion.div>
            <p className="text-[11px] text-muted-foreground/50 text-center mt-3">
              The scenarios above are hypothetical illustrations and do not represent actual client results. Individual outcomes vary based on personal circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Prep vs Planning - side-by-side comparison ═══════ */

const prepItems = [
  "Happens after decisions are made",
  "Reports what already occurred",
  "Looks backward at last year",
  "Focused on compliance",
  "CPA sees your life once a year",
];

const planItems = [
  "Happens before you make the decision",
  "Models the most tax-efficient path forward",
  "Projects impact 5, 10, 20+ years ahead",
  "Focused on strategy and savings",
  "Team monitors your situation year-round",
];

export function PrepVsPlanningSection() {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm text-[#1e6eae] font-medium mb-4"
          >
            Why Most Tax Planning Falls Short
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6"
          >
            Your CPA Files Your Return. But Who&apos;s Actually Planning?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            There&apos;s a difference between tax preparation and tax planning,
            and most people are only getting one. At United, tax planning
            isn&apos;t a separate service. It&apos;s woven into every financial
            and investment decision we make with you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Preparation column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl border border-border bg-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">Tax Preparation</p>
                <p className="text-xs text-muted-foreground">Compliance-focused</p>
              </div>
            </div>
            <div className="space-y-3">
              {prepItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-3 py-2"
                >
                  <XCircle className="w-4.5 h-4.5 text-muted-foreground/40 shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Planning column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl border border-[#1e6eae]/20 bg-[#1e6eae]/[0.03]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1e6eae]/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#1e6eae]" />
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">Tax Planning</p>
                <p className="text-xs text-[#1e6eae]">Strategy-focused · United FPG</p>
              </div>
            </div>
            <div className="space-y-3">
              {planItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-3 py-2"
                >
                  <CheckCircle className="w-4.5 h-4.5 text-[#1e6eae] shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Grid - 6 tiles (features-5 style) ═══════ */

const tiles = [
  { icon: Calendar, title: "Multi-Year Tax Projections", description: "We model the tax impact of today's decisions across 5, 10, and 20+ year horizons, because a move that saves you $5,000 this year might cost you $50,000 over the next decade if nobody runs the numbers forward." },
  { icon: Replace, title: "Roth Conversion Planning", description: "We identify narrow conversion windows (between retirement and RMDs, or during low-income years), size conversions to stay within optimal brackets, and coordinate with your investment team so the money moves efficiently." },
  { icon: Briefcase, title: "Equity Compensation Strategies", description: "ISOs, NSOs, RSUs, and ESPP shares each come with different tax treatment and timing risks. We model exercise strategies against your full income picture, because the difference between November and January can be five figures." },
  { icon: Building2, title: "Business & Personal Coordination", description: "We handle both sides (business bookkeeping, business returns, and personal returns) so entity structure, compensation strategy, and retirement contributions are all optimized together." },
  { icon: Heart, title: "Charitable Giving Optimization", description: "DAFs, QCDs from IRAs, bunching strategies, appreciated stock donations: the right approach depends on your income, bracket, and broader plan. We maximize impact and tax benefit simultaneously." },
  { icon: BarChart3, title: "Capital Gains & Bracket Management", description: "We monitor taxable income throughout the year and coordinate with your portfolio manager (because they're down the hall, not across town) to time sales, harvest losses, and manage distributions." },
];

export function TaxStrategyGrid() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(30,110,174,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,110,174,0.08) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          maskImage: `repeating-linear-gradient(to right,black 0px,black 3px,transparent 3px,transparent 8px),repeating-linear-gradient(to bottom,black 0px,black 3px,transparent 3px,transparent 8px),radial-gradient(ellipse 100% 100% at 100% 0%,#000 24%,transparent 82%)`,
          WebkitMaskImage: `repeating-linear-gradient(to right,black 0px,black 3px,transparent 3px,transparent 8px),repeating-linear-gradient(to bottom,black 0px,black 3px,transparent 3px,transparent 8px),radial-gradient(ellipse 100% 100% at 100% 0%,#000 24%,transparent 82%)`,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-12 md:mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">
            Proactive Tax Strategies
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6 max-w-4xl">
            What Proactive Tax Planning Looks Like
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border rounded-2xl overflow-hidden">
          {tiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-6 md:p-8 bg-card ${index < 3 ? "border-b border-border" : ""} ${index % 3 !== 2 ? "lg:border-r lg:border-border" : ""} ${index % 2 === 0 && index < 4 ? "md:border-r md:border-border" : ""} ${index < 4 ? "md:border-b md:border-border" : ""}`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <Icon className="w-full h-full text-[#1e6eae]" strokeWidth={0.8} />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{tile.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-normal">{tile.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════ Implementation - animated flow ═══════ */

const flowSteps = [
  { icon: Users, label: "CPA identifies conversion window", color: "bg-[#1e6eae]" },
  { icon: CheckCircle, label: "CFP confirms alignment with retirement plan", color: "bg-[#1e6eae]" },
  { icon: BarChart3, label: "Portfolio manager moves the assets", color: "bg-[#1e6eae]" },
];

export function ImplementationSection() {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">
              What Changes When Tax Planning Shares a Roof
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
              Strategies That Get Implemented, Not Just Recommended
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg">
              <p>
                Here&apos;s the dirty secret of the advisory industry: tax
                planning recommendations that cross firm boundaries rarely get
                executed. Your advisor suggests a Roth conversion. Your CPA
                pushes back. Nobody follows through. The window closes.
              </p>
              <p>
                When your tax planner, financial planner, and investment manager
                are on the same team, that breakdown doesn&apos;t happen.
                Strategies move from idea to implementation because there&apos;s
                no game of telephone.
              </p>
            </motion.div>
          </div>

          {/* Right - animated implementation flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <p className="text-xs font-semibold text-foreground mb-5 uppercase tracking-wider">
              One team. One conversation. Done.
            </p>
            <div className="space-y-4">
              {flowSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex flex-col gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.2, ease }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/40"
                    >
                      <div className={`shrink-0 w-10 h-10 rounded-xl ${step.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{step.label}</p>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.2, ease }}
                          className="h-1 bg-[#1e6eae]/20 rounded-full mt-2"
                        />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.0 + i * 0.2 }}
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                      </motion.div>
                    </motion.div>
                    {i < flowSteps.length - 1 && (
                      <div className="flex justify-center">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: 20 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.2 }}
                          className="w-0.5 bg-[#1e6eae]/20"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="mt-6 p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 text-center"
            >
              <p className="text-sm text-emerald-700 dark:text-emerald-400 font-semibold">
                Strategy identified → confirmed → executed. Same day.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Year-Round Monitoring - live feed visual ═══════ */

const monitorEvents = [
  { icon: Zap, label: "New tax legislation passed", action: "Modeling impact on your Roth strategy…", color: "text-[#1e6eae]", bg: "bg-[#1e6eae]/10" },
  { icon: TrendingDown, label: "Market drop detected", action: "Reviewing tax-loss harvesting opportunities…", color: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: DollarSign, label: "Income tracking above projection", action: "Adjusting estimated payments & year-end strategy…", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Bell, label: "RMD deadline approaching", action: "Coordinating distribution with bracket plan…", color: "text-violet-500", bg: "bg-violet-500/10" },
];

export function YearRoundSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % monitorEvents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const evt = monitorEvents[active]!;
  const EvtIcon = evt.icon;

  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">
              Year-Round, Not Once-a-Year
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
              Tax Planning That Doesn&apos;t Wait for You to Call
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg">
              <p>
                Most tax advice is reactive. Something happens, you call your
                CPA, they tell you what you should have done differently.
              </p>
              <p>
                Our approach is the opposite. We monitor your situation
                throughout the year and reach out when we see an opportunity or
                a risk. You shouldn&apos;t have to be your own tax strategist.
                That&apos;s what you&apos;re paying us for.
              </p>
            </motion.div>
          </div>

          {/* Right - monitoring dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex flex-col gap-4"
          >
            {/* Status bar */}
            <div className="p-5 rounded-2xl bg-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">Tax Monitor</span>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">Active</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["Legislation", "Income", "Portfolio"].map((area) => (
                  <div key={area} className="p-2.5 rounded-lg bg-muted/40 text-center">
                    <p className="text-[10px] text-muted-foreground">{area}</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">Monitoring</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Event feed */}
            <div className="p-5 rounded-2xl bg-card border border-border">
              <p className="text-xs font-semibold text-foreground mb-4">Latest Alert</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className={`shrink-0 w-10 h-10 rounded-xl ${evt.bg} flex items-center justify-center`}>
                    <EvtIcon className={`w-5 h-5 ${evt.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{evt.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{evt.action}</p>
                    <div className="mt-3 h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div className={`h-full rounded-full ${evt.bg.replace("/10", "")}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.5, ease: "linear" }} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {monitorEvents.map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === active ? "bg-[#1e6eae]" : "bg-foreground/10"}`} />
                ))}
              </div>
            </div>

            {/* Recent actions */}
            <div className="p-5 rounded-2xl bg-card border border-border">
              <p className="text-xs font-semibold text-foreground mb-3">Proactive Actions This Quarter</p>
              {[
                "Modeled SECURE Act impact on RMD schedule",
                "Harvested losses during March dip",
                "Adjusted Q3 estimated payments for bonus income",
                "Identified optimal QCD window for charitable giving",
              ].map((action, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }} className="flex items-center gap-2.5 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1e6eae] shrink-0" />
                  <p className="text-xs text-foreground/80">{action}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ CTA - parallax floating cards ═══════ */

const floatingCards = [
  { x: "8%", y: "15%", rotation: -10, intensity: 0.03 },
  { x: "72%", y: "12%", rotation: 8, intensity: 0.04 },
  { x: "25%", y: "60%", rotation: 15, intensity: 0.02 },
  { x: "78%", y: "65%", rotation: -12, intensity: 0.035 },
];

function FloatingCard({ card, smoothX, smoothY, index }: { card: (typeof floatingCards)[0]; smoothX: MotionValue<number>; smoothY: MotionValue<number>; index: number }) {
  const px = useTransform(smoothX, [-1, 1], [-15 * card.intensity * 100, 15 * card.intensity * 100]);
  const py = useTransform(smoothY, [-1, 1], [-10 * card.intensity * 100, 10 * card.intensity * 100]);
  const labels = ["Tax Plan", "Projections", "Brackets", "Strategy"];
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: card.x, top: card.y, x: px, y: py, rotate: card.rotation }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.15, scale: 1 }} transition={{ duration: 0.8, delay: index * 0.15 }}>
      <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-xl border border-border bg-muted/60 flex items-center justify-center">
        <span className="text-xs sm:text-sm font-medium text-foreground/40">{labels[index]}</span>
      </div>
    </motion.div>
  );
}

export function TaxPlanningCTA() {
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
    <section className="relative w-full min-h-[60vh] flex items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0">
        {floatingCards.map((card, i) => (
          <FloatingCard key={i} card={card} smoothX={smoothX} smoothY={smoothY} index={i} />
        ))}
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
          Stop Leaving Money on the Table Every April
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="text-lg text-muted-foreground leading-relaxed mb-10">
          Schedule a no-pressure conversation. We&apos;ll talk about your
          current tax situation, where the gaps might be, and whether a more
          proactive approach could make a meaningful difference.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease }}>
          <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Book Your Complimentary Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
