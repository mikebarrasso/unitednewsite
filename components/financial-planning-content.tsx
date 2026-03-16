"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  Users,
  ShieldCheck,
  BarChart3,
  HeartPulse,
  FileCheck,
  AlertTriangle,
  Clock,
  Building2,
  ArrowDown,
  RefreshCw,
  Bell,
  CalendarCheck,
  UserCheck,
  Zap,
  TrendingUp,
  Baby,
  Stethoscope,
  Scale,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const scenarios = [
  {
    icon: Clock,
    title: "Withdrawal Sequencing",
    problem: "Started taking retirement withdrawals in the wrong order",
    cost: "Thousands in unnecessary taxes, every year",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: AlertTriangle,
    title: "Stock Option Exercise",
    problem: "Exercised options without modeling AMT impact",
    cost: "Tax bill $40K higher than expected",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: Building2,
    title: "Business + Personal Silos",
    problem: "Personal CPA has no idea what's happening on the business side",
    cost: "Missed deductions, duplicate strategies, conflicting advice",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

const taxPractice = [
  {
    text: "Multi-year tax projection modeling that looks 5, 10, and 20+ years ahead, not just next April.",
  },
  {
    text: "Capital gains and bracket management coordinated with your portfolio, not after the fact.",
  },
  {
    text: "Business and personal tax strategies built together, not by separate firms making separate assumptions.",
  },
  {
    text: "In-house CPA and advisor alignment so nothing gets lost in translation between your plan and your return.",
  },
];

const differentiators = [
  {
    icon: Users,
    text: "CFP® professionals and CPAs working together from day one. Your plan is stress-tested against real tax scenarios, not theoretical ones.",
  },
  {
    icon: ShieldCheck,
    text: "Every projection and recommendation accounts for the tax consequences most plans ignore.",
  },
  {
    icon: BarChart3,
    text: "Investment strategy integrated into your plan, not managed by a different firm with a different set of assumptions.",
  },
  {
    icon: HeartPulse,
    text: "Insurance, retirement income, and tax decisions coordinated together, because a Roth conversion in the wrong year can raise your Medicare premiums for two years running.",
  },
  {
    icon: FileCheck,
    text: "Not a 100-page binder you'll never open, but a living strategy that evolves with your life and gives you confidence that the pieces fit together.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - text */}
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
              You&apos;ve Outgrown Simple Answers
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="space-y-6 text-foreground/70 leading-relaxed text-base sm:text-lg"
            >
              <p>
                These aren&apos;t edge cases. They&apos;re what happens when
                financial planning and tax planning live in different offices,
                or when your advisor builds a plan that looks great on paper but
                ignores what happens when the IRS gets involved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-8 p-6 bg-[#1e6eae]/[0.05] border border-[#1e6eae]/20 rounded-2xl"
            >
              <p className="text-foreground font-medium leading-relaxed">
                You don&apos;t need another pie chart. You need a planning
                process that coordinates your income, investments, taxes, and
                long-term goals, and stress-tests every recommendation before
                you act on it.
              </p>
            </motion.div>
          </div>

          {/* Right - animated scenario cascade */}
          <div className="flex flex-col gap-3">
            {scenarios.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="flex flex-col gap-3">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.15, ease }}
                    className="p-4 rounded-2xl bg-card border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`shrink-0 w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}
                      >
                        <Icon className={`w-5 h-5 ${s.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          {s.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {s.problem}
                        </p>
                        {/* Animated cost bar */}
                        <div className="mt-3 flex items-center gap-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.5 + i * 0.15,
                              ease,
                            }}
                            className={`h-1.5 rounded-full ${s.bg}`}
                            style={{
                              maxWidth:
                                i === 0 ? "70%" : i === 1 ? "85%" : "60%",
                            }}
                          />
                        </div>
                        <p
                          className={`text-xs font-medium mt-1.5 ${s.color}`}
                        >
                          {s.cost}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Cascade arrow between cards */}
                  {i < scenarios.length - 1 && (
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

            {/* Summary card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7, ease }}
              className="p-4 rounded-2xl bg-destructive/[0.04] border border-destructive/15 text-center"
            >
              <p className="text-sm text-destructive/80 font-semibold">
                When planning and tax live in different offices, the cost
                compounds silently.
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

export function TaxIntegrationSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6"
        >
          Every Recommendation, Tax-Tested Before You Act
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="space-y-6 text-foreground/70 leading-relaxed mb-10"
        >
          <p className="text-lg">
            This is where United is fundamentally different. Because our team
            includes CFP® professionals and CPAs working side by side, your financial plan is
            built against real tax scenarios from day one, not handed off to a
            separate firm to &ldquo;review.&rdquo;
          </p>
          <p className="text-base font-medium text-foreground">
            What that looks like in practice:
          </p>
        </motion.div>

        <div className="space-y-4">
          {taxPractice.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease }}
              className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
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
              <span className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DifferentiatorSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-10"
        >
          What You&apos;ll Actually Feel
        </motion.h2>

        <div className="space-y-4">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease }}
                className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════ Living Plan Section ═══════ */

const lifeEvents = [
  { icon: TrendingUp, label: "Market downturn detected", action: "Reassessing withdrawal sequence…", color: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: Scale, label: "New tax law enacted", action: "Rerunning Roth conversion projections…", color: "text-[#1e6eae]", bg: "bg-[#1e6eae]/10" },
  { icon: Zap, label: "Consulting income started", action: "Adjusting tax strategy proactively…", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Baby, label: "New grandchild", action: "Updating estate & education plans…", color: "text-violet-500", bg: "bg-violet-500/10" },
  { icon: Stethoscope, label: "Health event", action: "Reviewing insurance & income plan…", color: "text-rose-500", bg: "bg-rose-500/10" },
];

const planMetrics = [
  { label: "Income Plan", basePct: 88 },
  { label: "Tax Strategy", basePct: 92 },
  { label: "Retirement", basePct: 76 },
  { label: "Risk Coverage", basePct: 84 },
];

const ongoingItems = [
  {
    icon: CalendarCheck,
    title: "Strategy reviews beyond performance",
    description: "We revisit projections, stress-test assumptions, and identify new opportunities based on what's actually happening in your life.",
  },
  {
    icon: Bell,
    title: "Proactive outreach when something changes",
    description: "When a new tax provision passes, we model the impact on your situation and reach out with a recommendation. We don't wait for you to call.",
  },
  {
    icon: RefreshCw,
    title: "Year-round coordination",
    description: "Financial plan, portfolio, and tax strategy working together all year, not a once-a-year meeting followed by eleven months of silence.",
  },
  {
    icon: UserCheck,
    title: "A team that already knows your story",
    description: "Your history, goals, and full financial picture live with us. You'll never re-explain your situation to a new associate.",
  },
];

function LivingPlanVisual() {
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % lifeEvents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const event = lifeEvents[activeEvent]!;
  const EventIcon = event.icon;

  const recentActions = [
    { time: "Today", text: "Roth conversion projection updated", status: "Complete" },
    { time: "3 days ago", text: "Medicare bracket review triggered", status: "Complete" },
    { time: "1 week ago", text: "Withdrawal sequence re-optimized", status: "Complete" },
    { time: "2 weeks ago", text: "Capital gains harvest executed", status: "Complete" },
  ];

  const coordination = [
    { area: "Financial Plan", status: "Synced", active: true },
    { area: "Investment Portfolio", status: "Synced", active: true },
    { area: "Tax Strategy", status: "Updating…", active: false },
    { area: "Tax Return", status: "Synced", active: true },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Plan Health Dashboard */}
      <div className="p-5 rounded-2xl bg-card border border-border">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1e6eae] animate-pulse" />
            <span className="text-sm font-semibold text-foreground">
              Plan Health
            </span>
          </div>
          <span className="text-xs font-medium text-[#1e6eae] bg-[#1e6eae]/10 px-2.5 py-0.5 rounded-full">
            Live
          </span>
        </div>

        <div className="space-y-4">
          {planMetrics.map((m, i) => {
            const jitter = ((activeEvent + i) % 3) * 2 - 2;
            const pct = Math.min(100, Math.max(50, m.basePct + jitter));
            return (
              <div key={m.label}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">{m.label}</span>
                  <span className="text-foreground font-medium tabular-nums">
                    {pct}%
                  </span>
                </div>
                <div className="h-2 bg-foreground/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#1e6eae] rounded-full"
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, ease }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coordination Status */}
      <div className="p-5 rounded-2xl bg-card border border-border">
        <p className="text-xs font-semibold text-foreground mb-4">
          Coordination Status
        </p>
        <div className="grid grid-cols-2 gap-3">
          {coordination.map((c) => (
            <div
              key={c.area}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/40"
            >
              <div
                className={`w-2 h-2 rounded-full shrink-0 ${
                  c.active ? "bg-emerald-500" : "bg-amber-500 animate-pulse"
                }`}
              />
              <div className="min-w-0">
                <p className="text-xs font-medium text-foreground truncate">
                  {c.area}
                </p>
                <p
                  className={`text-[10px] ${
                    c.active
                      ? "text-emerald-600"
                      : "text-amber-600"
                  }`}
                >
                  {c.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Life Event Feed */}
      <div className="p-5 rounded-2xl bg-card border border-border">
        <p className="text-xs font-semibold text-foreground mb-4">
          Latest Life Event
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEvent}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-3"
          >
            <div className={`shrink-0 w-10 h-10 rounded-xl ${event.bg} flex items-center justify-center`}>
              <EventIcon className={`w-5 h-5 ${event.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">
                {event.label}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {event.action}
              </p>
              <div className="mt-3 h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${event.bg.replace("/10", "")}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Ticker dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {lifeEvents.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                i === activeEvent ? "bg-[#1e6eae]" : "bg-foreground/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Recent Activity Log */}
      <div className="p-5 rounded-2xl bg-card border border-border">
        <p className="text-xs font-semibold text-foreground mb-4">
          Recent Plan Activity
        </p>
        <div className="space-y-3">
          {recentActions.map((a, i) => (
            <motion.div
              key={a.text}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1e6eae] shrink-0" />
                <p className="text-xs text-foreground/80 truncate">
                  {a.text}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] text-muted-foreground">
                  {a.time}
                </span>
                <span className="text-[10px] text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  {a.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LivingPlanSection() {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm text-[#1e6eae] font-medium mb-4"
            >
              Ongoing Planning
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6"
            >
              A Plan That Changes When Your Life Does
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="space-y-6 text-foreground/70 leading-relaxed text-base sm:text-lg mb-10"
            >
              <p>
                Most financial plans are built once and forgotten. Someone hands
                you a thick document full of projections, and then life happens,
                and that document is already out of date. That&apos;s not
                planning. That&apos;s a snapshot.
              </p>
              <p>
                At United, your financial plan is a living strategy that evolves
                alongside your life, because every piece of your financial life
                is managed under one roof, in real time, with full context.
              </p>
            </motion.div>

            {/* Ongoing planning items */}
            <div className="space-y-4">
              {ongoingItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease }}
                    className="flex items-start gap-3"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-[#1e6eae]/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-4.5 h-4.5 text-[#1e6eae]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right - animated living plan visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="lg:sticky lg:top-32"
          >
            <LivingPlanVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
