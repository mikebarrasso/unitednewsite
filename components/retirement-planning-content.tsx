"use client";

import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { ArrowRight, HelpCircle, AlertTriangle, Scale, Clock, HeartPulse } from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Problem Section — animated question cards ─── */

const questions = [
  { icon: Clock, text: "When should I claim Social Security — and what does that decision actually cost me over 20 years?" },
  { icon: Scale, text: "Am I withdrawing from the right accounts in the right order?" },
  { icon: HelpCircle, text: "Should I be doing Roth conversions now, and how much is too much?" },
  { icon: HeartPulse, text: "What happens to my Medicare premiums if my income spikes in one year?" },
  { icon: AlertTriangle, text: "Will my money actually last?" },
];

export function ProblemSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — question cards */}
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
              The Questions That Keep You Up at Night
            </motion.h2>

            <div className="space-y-3">
              {questions.map((q, i) => {
                const Icon = q.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-[#1e6eae]/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-4.5 h-4.5 text-[#1e6eae]" />
                    </div>
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-medium">
                      {q.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — explanation + callout */}
          <div className="lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="space-y-6 text-foreground/70 leading-relaxed text-lg"
            >
              <p>
                These aren&apos;t abstract planning questions. They&apos;re real
                decisions with real tax consequences — and getting the sequence
                wrong can quietly cost you tens or even hundreds of thousands of
                dollars over the course of retirement.
              </p>
              <p>
                The problem is that most advisors treat these as separate
                decisions. Your financial advisor picks a withdrawal rate. Your
                CPA files your return. Nobody models how one choice cascades
                into the next.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
              className="mt-8 p-6 sm:p-8 bg-[#1e6eae]/[0.06] border border-[#1e6eae]/20 rounded-2xl"
            >
              <p className="text-2xl sm:text-3xl font-semibold text-foreground font-serif">
                We do.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Every retirement decision at United is modeled as a connected
                system — income, taxes, Medicare, and portfolio, together.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Approach Section — features-4 style tabbed interface ─── */

import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import { HeartPulse as MedicareIcon, Replace, TrendingUp } from "lucide-react";

const approachTabs = [
  {
    icon: Replace,
    title: "Roth Conversion Modeling",
    description:
      "When we recommend a Roth conversion, we've already modeled the impact on your Medicare premiums two years from now.",
    features: [
      "Conversion sized to stay within optimal tax brackets",
      "IRMAA surcharge impact projected before you act",
      "Multi-year bracket analysis across retirement horizon",
      "Coordinated with your portfolio and withdrawal plan",
    ],
  },
  {
    icon: TrendingUp,
    title: "Withdrawal Sequence Design",
    description:
      "When we design your withdrawal sequence, we've already mapped it against your tax brackets for the next decade.",
    features: [
      "Taxable, tax-deferred, and Roth accounts sequenced together",
      "Bracket-aware distribution timing year by year",
      "Social Security integration into the income plan",
      "Adjusted as your income and tax situation change",
    ],
  },
  {
    icon: MedicareIcon,
    title: "Real-Time Strategy Adjustment",
    description:
      "When market conditions shift, we adjust your plan and your tax strategy together — not separately, not after the fact.",
    features: [
      "Market drops trigger Roth conversion opportunity reviews",
      "Tax law changes reflected in projections immediately",
      "Income changes re-optimize withdrawal sequencing",
      "Portfolio, plan, and return updated in coordination",
    ],
  },
];

export function ApproachSection() {
  const [activeTab, setActiveTab] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % approachTabs.length);
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
        setActiveTab((prev) => (prev + 1) % approachTabs.length);
      }, 5500);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm text-[#1e6eae] font-medium mb-4"
          >
            How We Approach Retirement Planning
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-4"
          >
            Every Retirement Decision Is a Tax Decision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Retirement planning at United isn&apos;t a projection spreadsheet
            you review once a year. It&apos;s an ongoing, actively managed
            strategy where your income plan, your portfolio, and your tax return
            are coordinated by the same team — in real time.
          </motion.p>
        </div>

        {/* Tabbed Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Tab Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            {approachTabs.map((tab, index) => {
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

          {/* Tab Content */}
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
                      const Icon = approachTabs[activeTab].icon;
                      return <Icon className="w-8 h-8 text-[#1e6eae]" />;
                    })()}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                    {approachTabs[activeTab].title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {approachTabs[activeTab].description}
                  </p>
                </div>

                <div className="space-y-4">
                  {approachTabs[activeTab].features.map((feature, index) => (
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

/* ─── Differentiator Section — bento-style cards ─── */

const diffPoints = [
  {
    span: "lg:col-span-3",
    text: "At most firms, your retirement plan is a document. At United, it's a living strategy managed by the same CFPs and CPAs who handle your investments and prepare your tax return.",
  },
  {
    span: "",
    text: "When tax law shifts, we update your projections immediately — not at your next annual review.",
  },
  {
    span: "",
    text: "When the market drops, we look for Roth conversion opportunities while prices are low.",
  },
  {
    span: "",
    text: "When your income changes, we re-optimize your withdrawal sequence and bracket strategy in concert.",
  },
];

export function DifferentiatorSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
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
          className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-10 max-w-3xl"
        >
          Why Retirement Planning at United Is Different
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {diffPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col justify-between rounded-2xl border border-border bg-background p-6 sm:p-8 ${item.span}`}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 p-6 sm:p-8 rounded-2xl border border-[#1e6eae]/20 bg-[#1e6eae]/[0.04]"
        >
          <p className="text-foreground font-medium leading-relaxed text-center text-lg">
            Your retirement plan, your investment strategy, and your tax return
            — built and managed by one team that sees the full picture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CTA Section — with parallax floating cards ─── */

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

  const labels = ["Income", "Taxes", "Portfolio", "Medicare"];

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

export function RetirementCTA() {
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
      className="relative w-full min-h-[60vh] flex items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Parallax floating cards */}
      <div className="absolute inset-0">
        {floatingCards.map((card, i) => (
          <FloatingCard key={i} card={card} smoothX={smoothX} smoothY={smoothY} index={i} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6"
        >
          Retirement Is Too Important to Wing It
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-lg text-muted-foreground leading-relaxed mb-10"
        >
          Schedule a no-pressure conversation. We&apos;ll listen to where you
          are in the process, answer your questions, and help you understand
          what a coordinated approach could look like for your situation.
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
