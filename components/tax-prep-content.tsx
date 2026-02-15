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
  FileText,
  Building2,
  Globe,
  MessageCircle,
  UserCheck,
  AlertTriangle,
  FileQuestion,
  XCircle,
  CheckCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ═══════ Problem Section ═══════ */

const gaps = [
  { icon: AlertTriangle, title: "No context on Roth conversion", detail: "Preparer didn't know about the June conversion", color: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: FileQuestion, title: "Stock options timing unknown", detail: "Nobody explained why Q3 instead of Q4", color: "text-rose-500", bg: "bg-rose-500/10" },
  { icon: XCircle, title: "Year-end rebalance missed", detail: "Portfolio rebalanced two weeks before year-end — preparer unaware", color: "text-red-500", bg: "bg-red-500/10" },
];

export function ProblemSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">
              The Problem
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
              Your Tax Preparer Shouldn&apos;t Be Meeting Your Financial Life for the First Time in March
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg">
              <p>
                Every spring, millions of people gather a pile of documents, hand
                them to a CPA who has no context, and hope nothing gets missed.
                When your preparer and your advisor are at different firms, your
                return is only as good as the information you remember to hand
                over.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease }} className="mt-8 p-6 bg-[#1e6eae]/[0.05] border border-[#1e6eae]/20 rounded-2xl">
              <p className="text-foreground font-medium leading-relaxed">
                At United, your tax return is prepared by the same team that
                built your financial plan and managed your portfolio. They
                already know what happened and why.
              </p>
            </motion.div>
          </div>

          {/* Right — gap cascade */}
          <div className="flex flex-col gap-3">
            <div className="p-5 rounded-2xl bg-card border border-border mb-1">
              <p className="text-xs font-semibold text-foreground mb-1">Typical Tax Season</p>
              <p className="text-xs text-muted-foreground">Preparer sees your financial life for the first time</p>
            </div>
            {gaps.map((g, i) => {
              const Icon = g.icon;
              return (
                <div key={g.title} className="flex flex-col gap-3">
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.15, ease }} className="p-4 rounded-2xl bg-card border border-border">
                    <div className="flex items-start gap-4">
                      <div className={`shrink-0 w-10 h-10 rounded-xl ${g.bg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${g.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">{g.title}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{g.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                  {i < gaps.length - 1 && (
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.4 + i * 0.15 }} className="flex justify-center">
                      <ArrowDown className="w-4 h-4 text-muted-foreground/30" />
                    </motion.div>
                  )}
                </div>
              );
            })}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7, ease }} className="p-4 rounded-2xl bg-destructive/[0.04] border border-destructive/15 text-center">
              <p className="text-sm text-destructive/80 font-semibold">
                Result: missed deductions, surprise bills, strategies that never made it to the return
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ What You Can Expect — features-4 style tabs ═══════ */

const expectTabs = [
  {
    icon: FileText,
    title: "Personal Tax Returns",
    description: "Prepared by CPAs and Enrolled Agents who understand your investments, retirement income strategy, Roth conversions, and charitable giving — because they were involved in those decisions throughout the year.",
    features: [
      "Full context from your financial and investment plan",
      "Roth conversions, harvested losses already documented",
      "Credits and deductions identified proactively",
      "No re-explaining your situation every spring",
    ],
  },
  {
    icon: Building2,
    title: "Business Tax Returns",
    description: "S-corps, partnerships, LLCs, and sole proprietorships — prepared in coordination with your personal return so entity structure, compensation strategy, and retirement contributions are optimized across both.",
    features: [
      "Business and personal returns prepared together",
      "Entity structure and compensation reviewed annually",
      "Retirement plan contributions optimized",
      "K-1s and pass-through income coordinated",
    ],
  },
  {
    icon: Globe,
    title: "Federal & State Returns",
    description: "All required federal and state returns handled completely, with proactive identification of credits, deductions, and strategies you may have been missing with a preparer who didn't have the full picture.",
    features: [
      "All federal and state filings managed",
      "Multi-state income situations handled",
      "Proactive credit and deduction review",
      "Estimated payments coordinated with income plan",
    ],
  },
  {
    icon: MessageCircle,
    title: "Year-Round Access",
    description: "You won't hear from us only during filing season. Questions come up in July, October, and December too — and your team is available when they do.",
    features: [
      "Questions answered any time of year",
      "Mid-year tax situation check-ins",
      "Life changes addressed in real time",
      "No waiting until March for guidance",
    ],
  },
  {
    icon: UserCheck,
    title: "A Team That Knows You",
    description: "Your history, goals, and complete financial picture live with us. You'll never start from scratch because someone left the firm or because you're assigned to a different associate.",
    features: [
      "Continuity across every filing year",
      "Full financial context in every conversation",
      "Same team manages plan, portfolio, and return",
      "No annual re-onboarding",
    ],
  },
];

export function ExpectationsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % expectTabs.length);
    }, 5500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % expectTabs.length);
      }, 5500);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">
            What You Can Expect
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-4">
            Tax Preparation With Full Context
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4 flex flex-col justify-between gap-3">
            {expectTabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;
              return (
                <motion.button key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} onClick={() => handleTabClick(index)}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl transition-[border-color,background-color] duration-200 flex-1 flex items-start ${isActive ? "bg-[#1e6eae]/[0.07] border border-[#1e6eae]/20" : "bg-muted/40 border border-border hover:bg-muted/70"}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${isActive ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm md:text-base font-semibold mb-0.5 ${isActive ? "text-foreground" : "text-foreground/80"}`}>{tab.title}</h3>
                      <p className="text-xs line-clamp-2 text-muted-foreground">{tab.description}</p>
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
                    {(() => { const Icon = expectTabs[activeTab].icon; return <Icon className="w-8 h-8 text-[#1e6eae]" />; })()}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">{expectTabs[activeTab].title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{expectTabs[activeTab].description}</p>
                </div>
                <div className="space-y-4">
                  {expectTabs[activeTab].features.map((feature, index) => (
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

import { useRef } from "react";

/* ═══════ Differentiator — animated return timeline ═══════ */

const returnSteps = [
  { month: "Sep", label: "CFP recommends Roth conversion", status: "Accounted for" },
  { month: "Nov", label: "Portfolio manager harvests losses", status: "Documented" },
  { month: "Q3", label: "Estimated payments adjusted for income", status: "Reflected" },
  { month: "Mar", label: "Return prepared — no surprises", status: "Filed" },
];

export function DifferentiatorSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">
              The United Difference
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
              The Return Is the Last Step — Not the Only Step
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg">
              <p>
                At most accounting firms, the tax return is the entire
                relationship. You show up in March, hand over your documents, and
                get a return back in April. Whatever happened during the year is
                already done.
              </p>
              <p>
                At United, the return is just where everything comes together.
                By the time we sit down to prepare your return, there are no
                surprises — because we&apos;ve been managing your tax situation
                all year. The return is simply the final expression of a strategy
                that&apos;s been running for twelve months.
              </p>
            </motion.div>
          </div>

          {/* Right — animated year timeline */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease }} className="p-6 rounded-2xl bg-card border border-border">
            <p className="text-xs font-semibold text-foreground mb-5 uppercase tracking-wider">
              Your tax year at United
            </p>
            <div className="space-y-4">
              {returnSteps.map((step, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.15, ease }} className="flex items-center gap-4 p-4 rounded-xl bg-muted/40">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1e6eae]/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-[#1e6eae]">{step.month}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{step.label}</p>
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease }} className="h-1 bg-[#1e6eae]/20 rounded-full mt-2" />
                    </div>
                    <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.9 + i * 0.15 }}>
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </motion.div>
                  </motion.div>
                  {i < returnSteps.length - 1 && (
                    <div className="flex justify-center">
                      <motion.div initial={{ height: 0 }} whileInView={{ height: 16 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.6 + i * 0.15 }} className="w-0.5 bg-[#1e6eae]/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.6 }} className="mt-6 p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 text-center">
              <p className="text-sm text-emerald-700 dark:text-emerald-400 font-semibold">
                No surprises. A return that reflects 12 months of strategy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Hero Visual — tax return dashboard ═══════ */

const returnItems = [
  { label: "Roth Conversion", value: "Documented", done: true },
  { label: "Tax-Loss Harvesting", value: "Documented", done: true },
  { label: "Estimated Payments", value: "Adjusted Q3", done: true },
  { label: "Charitable QCD", value: "Coordinated", done: true },
  { label: "Business Return", value: "Filed together", done: true },
];

export function TaxPrepVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-6 sm:p-8 lg:p-10 gap-4">
      {/* Status header */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4, ease }} className="grid grid-cols-3 gap-3">
        {[
          { label: "Filing Status", value: "On Track" },
          { label: "Context Level", value: "Full Year" },
          { label: "Surprises", value: "Zero" },
        ].map((m) => (
          <div key={m.label} className="p-3 rounded-xl bg-background border border-border">
            <p className="text-[10px] sm:text-xs text-muted-foreground">{m.label}</p>
            <p className="text-xs sm:text-sm font-semibold text-foreground mt-0.5">{m.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Return checklist */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5, ease }} className="p-4 sm:p-5 rounded-xl bg-background border border-border">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-foreground">Return Preparation Checklist</span>
          <span className="text-[10px] text-emerald-600 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">All clear</span>
        </div>
        {returnItems.map((item, i) => (
          <motion.div key={item.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.6 + i * 0.08, ease }}
            className={`flex items-center justify-between py-2.5 ${i < returnItems.length - 1 ? "border-b border-border/50" : ""}`}
          >
            <div className="flex items-center gap-2.5">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.8 + i * 0.08 }}>
                <CheckCircle className="w-4 h-4 text-[#1e6eae]" />
              </motion.div>
              <span className="text-xs sm:text-sm text-foreground font-medium">{item.label}</span>
            </div>
            <span className="text-[10px] sm:text-xs text-[#1e6eae] font-medium">{item.value}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════ CTA ═══════ */

const floatingCards = [
  { x: "8%", y: "15%", rotation: -10, intensity: 0.03 },
  { x: "72%", y: "12%", rotation: 8, intensity: 0.04 },
  { x: "25%", y: "60%", rotation: 15, intensity: 0.02 },
  { x: "78%", y: "65%", rotation: -12, intensity: 0.035 },
];

function FloatingCard({ card, smoothX, smoothY, index }: { card: (typeof floatingCards)[0]; smoothX: MotionValue<number>; smoothY: MotionValue<number>; index: number }) {
  const px = useTransform(smoothX, [-1, 1], [-15 * card.intensity * 100, 15 * card.intensity * 100]);
  const py = useTransform(smoothY, [-1, 1], [-10 * card.intensity * 100, 10 * card.intensity * 100]);
  const labels = ["Return", "W-2s", "K-1s", "1099s"];
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: card.x, top: card.y, x: px, y: py, rotate: card.rotation }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.15, scale: 1 }} transition={{ duration: 0.8, delay: index * 0.15 }}>
      <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-xl border border-border bg-muted/60 flex items-center justify-center">
        <span className="text-xs sm:text-sm font-medium text-foreground/40">{labels[index]}</span>
      </div>
    </motion.div>
  );
}

export function TaxPrepCTA() {
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
        {floatingCards.map((card, i) => (<FloatingCard key={i} card={card} smoothX={smoothX} smoothY={smoothY} index={i} />))}
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
          Tax Season Shouldn&apos;t Feel Like Starting Over
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="text-lg text-muted-foreground leading-relaxed mb-10">
          Schedule a no-pressure conversation. We&apos;ll talk about how your
          taxes are currently handled and whether there&apos;s a better way.
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
