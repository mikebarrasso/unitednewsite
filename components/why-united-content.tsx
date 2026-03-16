"use client";

import {
  motion,
  AnimatePresence,
} from "motion/react";
import {
  ArrowRight,
  ArrowDown,
  BarChart3,
  Calendar,
  Clock,
  Shield,
  CheckCircle,
  Brain,
  Link2,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ═══════ Opening Section - coordination visual ═══════ */

const disconnectedSteps = [
  { label: "Advisor suggests Roth conversion", who: "Advisor" },
  { label: "CPA pushes back, missing context", who: "CPA" },
  { label: "Nobody follows through", who: "You" },
  { label: "Window closes. Opportunity gone.", who: "-" },
];

const coordinatedSteps = [
  { label: "CFP® professional identifies conversion window" },
  { label: "CPA confirms tax impact, same day" },
  { label: "Portfolio manager moves the assets" },
  { label: "Strategy implemented. You're informed." },
];

export function OpeningSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">The Core Idea</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
              You&apos;re Not Just Paying for a Plan. You&apos;re Paying for Coordination.
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg">
              <p>Anyone can build you a financial plan. Plenty of firms manage investments well. Good CPAs are not hard to find.</p>
              <p>But when those professionals are at different firms, operating on different timelines, with incomplete views of your financial life, the advice you receive can have gaps. And those gaps can create avoidable costs.</p>
              <p>A Roth conversion done in the wrong year. A portfolio rebalanced without considering tax consequences. A Social Security claiming decision made without modeling how it may affect Medicare premiums.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease }} className="mt-8 p-6 bg-[#1e6eae]/[0.05] border border-[#1e6eae]/20 rounded-2xl">
              <p className="text-foreground font-medium leading-relaxed">United was built to be the one firm that sees the whole picture.</p>
            </motion.div>
          </div>

          {/* Right - disconnected vs coordinated */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-destructive/80 uppercase tracking-wider">Typical Setup</p>
                <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">Disconnected</span>
              </div>
              {disconnectedSteps.map((s, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + i * 0.12 }} className="p-3 rounded-lg bg-background border border-border">
                    <p className="text-xs text-foreground/80">{s.label}</p>
                  </motion.div>
                  {i < disconnectedSteps.length - 1 && (
                    <div className="flex justify-center"><ArrowDown className="w-3 h-3 text-destructive/20" /></div>
                  )}
                </div>
              ))}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }} className="mt-3 p-2.5 rounded-lg bg-destructive/[0.04] border border-destructive/15 text-center">
                <p className="text-[10px] text-destructive/80 font-semibold">Value lost quietly</p>
              </motion.div>
            </div>

            <div className="p-4 rounded-2xl border border-[#1e6eae]/20 bg-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-[#1e6eae] uppercase tracking-wider">United FPG</p>
                <span className="text-[10px] text-[#1e6eae] bg-[#1e6eae]/10 px-2 py-0.5 rounded-full font-medium">Coordinated</span>
              </div>
              {coordinatedSteps.map((s, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + i * 0.12 }} className="flex items-center gap-2.5 p-3 rounded-lg bg-background border border-[#1e6eae]/10">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.12 }}>
                      <CheckCircle className="w-3.5 h-3.5 text-[#1e6eae] shrink-0" />
                    </motion.div>
                    <p className="text-xs text-foreground/80">{s.label}</p>
                  </motion.div>
                  {i < coordinatedSteps.length - 1 && (
                    <div className="flex justify-center"><ArrowDown className="w-3 h-3 text-[#1e6eae]/20" /></div>
                  )}
                </div>
              ))}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }} className="mt-3 p-2.5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20 text-center">
                <p className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">Implemented same day</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Value Pillars - features-5 style bordered grid (6 tiles) ═══════ */

const pillars = [
  { icon: BarChart3, title: "Tax-Aware Investing", subtitle: "Keeping More of What You Earn", description: "When your portfolio manager and tax team are on the same team, investment decisions can be evaluated with tax consequences in mind: tax-loss harvesting, rebalancing timing, and asset location coordinated to help reduce unnecessary tax drag." },
  { icon: Calendar, title: "Proactive Tax Planning", subtitle: "Planning Before April", description: "Multi-year projections, scenario analysis before major decisions, and proactive outreach when tax laws change. The value shows up in decisions made at the right time, with the right information." },
  { icon: Clock, title: "Retirement Income Strategy", subtitle: "Making Your Money Last", description: "Which accounts to tap first, when to claim Social Security, whether Roth conversions make sense, how to manage RMDs: modeled as a connected, multi-year strategy, not a series of isolated decisions." },
  { icon: Brain, title: "Behavioral Guidance", subtitle: "Avoiding Expensive Mistakes", description: "Markets drop. Headlines get scary. Our job isn't just to build a plan; it's to help you stick to it when the world gets noisy. The best financial decision is often the one you don't make." },
  { icon: Shield, title: "Fee-Only & Fiduciary", subtitle: "Aligning Incentives", description: "No commissions. No proprietary products. No revenue sharing. Low-cost index funds and ETFs. When incentives are aligned, the advice is simpler, clearer, and more focused on your goals." },
  { icon: Link2, title: "One Firm, One Strategy", subtitle: "No More Playing Middleman", description: "Your CFP, CPA, and portfolio manager work together directly. Opportunities are evaluated with shared context, and implementation is faster because the people responsible are aligned." },
];

export function ValuePillarsGrid() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: `linear-gradient(to right, rgba(30,110,174,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,110,174,0.08) 1px, transparent 1px)`, backgroundSize: "20px 20px", maskImage: `repeating-linear-gradient(to right,black 0px,black 3px,transparent 3px,transparent 8px),repeating-linear-gradient(to bottom,black 0px,black 3px,transparent 3px,transparent 8px),radial-gradient(ellipse 100% 100% at 100% 0%,#000 24%,transparent 82%)`, WebkitMaskImage: `repeating-linear-gradient(to right,black 0px,black 3px,transparent 3px,transparent 8px),repeating-linear-gradient(to bottom,black 0px,black 3px,transparent 3px,transparent 8px),radial-gradient(ellipse 100% 100% at 100% 0%,#000 24%,transparent 82%)`, maskComposite: "intersect", WebkitMaskComposite: "source-in" }} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-12 md:mb-16">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6 max-w-3xl">
            Where the Value Shows Up
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border rounded-2xl overflow-hidden">
          {pillars.map((p, index) => {
            const Icon = p.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-8 md:p-10 bg-card
                  ${index < 3 ? "border-b border-border" : ""}
                  ${(index + 1) % 3 !== 0 ? "lg:border-r lg:border-border" : ""}
                  ${index % 2 === 0 && index < 4 ? "md:border-r md:border-border" : ""}
                  ${index < 4 ? "md:border-b md:border-border" : ""}
                `}
              >
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <Icon className="w-full h-full text-[#1e6eae]" strokeWidth={0.5} />
                  </div>
                </div>
                <h3 className="text-lg tracking-tight sm:text-xl font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-[#1e6eae] font-medium mb-3">{p.subtitle}</p>
                <p className="text-sm tracking-tight sm:text-base text-muted-foreground leading-normal">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════ Deep Dive Sections (expandable pillar details) ═══════ */

/* 1. Tax-Aware Investing */
const taxAwarePoints = [
  "Tax-loss harvesting coordinated with your actual income picture",
  "Rebalancing timed to help manage tax impact",
  "Asset location optimized across taxable, tax-deferred, and tax-free accounts",
  "Cumulative impact of consistent, tax-aware management over 20–30 years",
];

export function TaxAwareSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">1. Tax-Aware Investing</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
              The Return Your Statement Doesn&apos;t Show You
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Your investment return is a number on a screen. Your after-tax return is what you actually keep, and the gap between those two numbers is where many investors lose money without realizing it.
            </motion.p>
            <div className="space-y-3">
              {taxAwarePoints.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }} className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border">
                  <CheckCircle className="w-4.5 h-4.5 text-[#1e6eae] shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80 font-medium">{p}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground italic">Tax strategies involve complexities and risks, including the risk that expected tax benefits are not realized. Results vary.</p>
          </div>

          {/* Visual - tax coordination coverage */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease }} className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs font-semibold text-foreground">Tax-Aware Coordination Coverage</p>
              <span className="text-[10px] text-[#1e6eae] font-medium bg-[#1e6eae]/10 px-2 py-0.5 rounded-full">United FPG</span>
            </div>
            {[
              { area: "Tax-Loss Harvesting", detail: "Coordinated with actual income", coordinated: true },
              { area: "Rebalancing Timing", detail: "Tax impact evaluated first", coordinated: true },
              { area: "Asset Location", detail: "Optimized across account types", coordinated: true },
              { area: "Capital Gains Management", detail: "Bracket-aware year-round", coordinated: true },
              { area: "Withdrawal Sequencing", detail: "Aligned with tax plan", coordinated: true },
            ].map((item, i) => (
              <motion.div key={item.area} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                className={`flex items-center justify-between py-3 ${i < 4 ? "border-b border-border/50" : ""}`}
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{item.area}</p>
                  <p className="text-[10px] text-muted-foreground">{item.detail}</p>
                </div>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}>
                  <CheckCircle className="w-5 h-5 text-[#1e6eae]" />
                </motion.div>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }} className="mt-4 p-3 rounded-lg bg-[#1e6eae]/[0.05] border border-[#1e6eae]/15 text-center">
              <p className="text-xs text-[#1e6eae] font-medium">All five areas managed by one team, in coordination</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* 2. Proactive Tax Planning */
const taxPlanPoints = [
  "Multi-year tax projections, not just next April",
  "Scenario analysis before exercising options or taking distributions",
  "Proactive outreach when tax laws change",
  "Conversion strategies implemented when they fit your broader picture",
];

export function ProactiveTaxSection() {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - animated timeline */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease }} className="p-6 rounded-2xl bg-card border border-border order-2 lg:order-1">
            <p className="text-xs font-semibold text-foreground mb-5 uppercase tracking-wider">Proactive vs. Reactive</p>
            {[
              { month: "Jan", label: "Tax projections built for the year", reactive: "CPA not involved yet" },
              { month: "Jun", label: "Roth conversion window identified", reactive: "Nobody looking" },
              { month: "Oct", label: "Year-end strategy adjusted", reactive: "Still waiting for March" },
              { month: "Mar", label: "Return filed, no surprises", reactive: "Surprises discovered at filing" },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }} className="flex items-center gap-4 p-3 rounded-xl bg-muted/40 mb-3 last:mb-0">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#1e6eae]/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#1e6eae]">{step.month}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-foreground">{step.label}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Others: {step.reactive}</p>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              </motion.div>
            ))}
          </motion.div>

          {/* Right - text */}
          <div className="order-1 lg:order-2">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">2. Proactive Tax Planning</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
              The Most Valuable Tax Work Happens Months Before Your Return Is Filed
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg">
              <p>Many people experience &ldquo;tax planning&rdquo; in hindsight: &ldquo;You should have done that last year.&rdquo; At United, we plan forward where appropriate.</p>
            </motion.div>
            <div className="mt-6 space-y-3">
              {taxPlanPoints.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }} className="flex items-start gap-3 p-3 rounded-xl bg-muted/40">
                  <CheckCircle className="w-4.5 h-4.5 text-[#1e6eae] shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80 font-medium">{p}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground italic">United does not provide legal advice. Tax outcomes are not guaranteed and depend on your full financial picture and current law.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3–6: Remaining pillars as styled cards with the features-4 tabbed interface */

const remainingPillars = [
  {
    icon: Clock,
    title: "Retirement Income Strategy",
    description: "How you draw down (which accounts first, when to claim Social Security, whether Roth conversions make sense, how to manage RMDs) modeled as a connected, multi-year strategy.",
    features: [
      "Social Security claiming scenarios modeled against broader income",
      "Roth conversion windows evaluated year by year",
      "RMD planning to help manage tax impact proactively",
      "Plan adjusts when life changes, because it always does",
    ],
  },
  {
    icon: Brain,
    title: "Behavioral Guidance",
    description: "Markets drop. Headlines get scary. Our job isn't just to build a plan; it's to help you stick to it when the world gets noisy.",
    features: [
      "Guidance through multiple market cycles and tax law changes",
      "Helping avoid panic-driven selling or speculative bets",
      "Keeping your long-term strategy intact during short-term fear",
      "Experienced team that's seen it before and planned for it",
    ],
  },
  {
    icon: Shield,
    title: "Fee-Only & Fiduciary",
    description: "No commissions. No proprietary products. No revenue sharing. As a registered investment adviser held to a fiduciary standard, our recommendations are required to be in your best interest.",
    features: [
      "Low-cost index funds and ETFs, not commissionable products",
      "No 12b-1 fees or third-party payments",
      "Transparent, client-only compensation",
      "Incentives aligned with your goals, not product sales",
    ],
  },
  {
    icon: Link2,
    title: "One Firm, One Strategy",
    description: "Your CFP, CPA, and portfolio manager work together directly. No more playing middleman between your advisor and your accountant.",
    features: [
      "One coordinated team, one phone call when something comes up",
      "Opportunities evaluated with shared context",
      "Implementation faster because the responsible people are aligned",
      "Peace of mind that every part of your financial life is connected",
    ],
  },
];

export function RemainingPillarsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % remainingPillars.length);
    }, 5500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % remainingPillars.length);
      }, 5500);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-4">
            More Ways Coordination Shows Up
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            {remainingPillars.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;
              return (
                <motion.button key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} onClick={() => handleTabClick(index)}
                  className={`w-full text-left p-4 md:p-6 rounded-2xl transition-[border-color,background-color] duration-200 flex-1 flex items-start ${isActive ? "bg-[#1e6eae]/[0.07] border border-[#1e6eae]/20" : "bg-card border border-border hover:bg-muted/70"}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${isActive ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}><Icon className="w-5 h-5" /></div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-base md:text-lg font-semibold mb-1 ${isActive ? "text-foreground" : "text-foreground/80"}`}>{tab.title}</h3>
                      <p className="text-sm line-clamp-2 text-muted-foreground">{tab.description}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
          <div className="lg:col-span-8 flex">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="rounded-3xl border border-border bg-background p-6 md:p-8 lg:p-10 flex-1">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1e6eae]/[0.08] mb-6">
                    {(() => { const Icon = remainingPillars[activeTab]?.icon; if (!Icon) return null; return <Icon className="w-8 h-8 text-[#1e6eae]" />; })()}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">{remainingPillars[activeTab]?.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{remainingPillars[activeTab]?.description}</p>
                </div>
                <div className="space-y-4">
                  {remainingPillars[activeTab]?.features.map((feature, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm md:text-base text-foreground/80 font-medium">{feature}</span>
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

/* ═══════ Closing Section ═══════ */

export function ClosingSection() {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-8">
          The Real Question Isn&apos;t What We Cost. It&apos;s What Disconnected Advice Can Cost You.
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="space-y-5 text-foreground/70 leading-relaxed text-lg mb-10">
          <p>
            If your advisor has never talked to your CPA. If your tax return is
            prepared by someone who has no idea what your financial plan says. If
            you&apos;re the one connecting the dots between professionals who
            should be coordinating, there can be a cost to that.
          </p>
          <p>
            We built United to reduce those gaps through integrated planning,
            investing, and tax strategy.
          </p>
        </motion.div>
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
