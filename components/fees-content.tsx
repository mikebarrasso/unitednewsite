"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Phone,
  Clock,
  ChevronDown,
  BarChart3,
  RefreshCw,
  Calculator,
  FileCheck,
  FileText,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const step1Details = [
  { icon: Phone, text: "Phone or Zoom — whichever you prefer" },
  { icon: Clock, text: "30 minutes" },
  {
    icon: MessageCircle,
    text: "We\u2019ll discuss your goals and your current situation",
  },
  {
    icon: FileText,
    text: "You\u2019ll receive a transparent quote with no obligation",
  },
];

const planFeatures = [
  "Financial goal development and success analysis",
  "Financial organization and balance sheet preparation",
  "Cash flow planning, budgeting, and debt management",
  "Investment analysis and recommendations",
  "Insurance and risk management evaluation",
  "Advanced tax planning strategies",
  "Comprehensive retirement planning",
  'Plan stress testing and "what if" scenario analysis',
  "Retirement income distribution planning",
  "Social Security timing strategy",
  "Roth conversion opportunity analysis",
  "Equity compensation and stock options planning",
  "Charitable giving strategy",
  "Long-term care planning",
];

const wealthServices = [
  {
    icon: BarChart3,
    title: "Tax-Efficient Investment Management",
    description:
      "Low-cost, globally diversified portfolios built on index investing. Every trade, rebalance, and allocation decision is made with your tax situation in mind \u2014 because your CPA and your portfolio manager are on the same team.",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Ongoing Financial Planning",
    description:
      "Your financial plan isn\u2019t a one-time deliverable. It\u2019s a living strategy that\u2019s reviewed, stress-tested, and updated as your life changes \u2014 at no additional cost.",
  },
  {
    icon: Calculator,
    title: "Unlimited Tax Planning and Optimization",
    description:
      "Year-round, proactive tax planning coordinated with your investments and your financial plan. We don\u2019t wait for filing season to look for opportunities.",
  },
  {
    icon: FileCheck,
    title: "Tax Preparation and Filing \u2014 Included",
    description:
      "Your personal tax return, prepared and filed by our in-house CPAs and Enrolled Agents. No more playing middleman between your accountant and your financial advisor \u2014 because they\u2019re the same team.",
  },
];

const subscriptionFeatures = [
  "Comprehensive financial plan",
  "Retirement planning",
  "Investment planning and optional investment management",
  "Stock options planning and tax analysis",
  "Tax planning",
  "Tax-loss harvesting",
  "Education planning",
];

/* ═══════════════════════════════════════════════════════════════
   HERO VISUAL — 3-step preview for ServiceHero customVisual
   ═══════════════════════════════════════════════════════════════ */

export function FeesHero() {
  return (
    <section className="w-full flex items-center justify-center pt-40 pb-20 sm:pt-48 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="flex items-center gap-2 sm:gap-3 rounded-full border border-border p-1 w-fit"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-medium">
            United
          </span>
          <span className="text-sm sm:text-base text-foreground/80 mr-2">
            Our Fees
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-medium font-serif text-foreground leading-[1.1]"
        >
          Transparent Pricing. No Surprises. No Hidden Fees.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl"
        >
          You should know exactly what you&apos;re paying and exactly what
          you&apos;re getting &mdash; before we start working together.
          Here&apos;s how it works.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm sm:text-base hover:opacity-90 transition-opacity"
          >
            <Calendar className="w-4 h-4" />
            Schedule Your Introductory Call
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm sm:text-base hover:bg-muted transition-colors"
          >
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STEP CONNECTOR — animated line between steps
   ═══════════════════════════════════════════════════════════════ */

function StepConnector() {
  return (
    <div className="flex flex-col items-center py-10 sm:py-14">
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease }}
        className="flex flex-col items-center origin-top"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#1e6eae] shadow-[0_0_10px_rgba(30,110,174,0.35)]" />
        <div className="w-px h-14 sm:h-20 bg-gradient-to-b from-[#1e6eae]/40 via-[#1e6eae]/15 to-[#1e6eae]/40" />
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <ChevronDown className="w-4 h-4 text-[#1e6eae]/40" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STEP BADGE — shared numbered circle for each step
   ═══════════════════════════════════════════════════════════════ */

function StepBadge({
  number,
  label,
  sublabel,
}: {
  number: number;
  label: string;
  sublabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-10"
    >
      <div className="w-14 h-14 rounded-full bg-[#1e6eae] text-white flex items-center justify-center text-xl font-bold shadow-[0_0_24px_rgba(30,110,174,0.25)]">
        {number}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-[#1e6eae] font-semibold">
          {label}
        </p>
        <p className="text-sm text-muted-foreground">{sublabel}</p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROCESS SECTION — Steps 1-3 with animated connectors
   ═══════════════════════════════════════════════════════════════ */

export function ProcessSection() {
  return (
    <section className="w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* ─── Section Header ─── */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm text-[#1e6eae] font-medium mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground max-w-3xl mx-auto"
          >
            A Simple Process, Designed Around You
          </motion.h2>
        </div>

        {/* ─── STEP 1: Introductory Call ─── */}
        <div>
          <StepBadge
            number={1}
            label="Step One"
            sublabel="Complimentary Introductory Call"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: description */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="text-2xl sm:text-3xl md:text-4xl font-medium font-serif text-foreground mb-6"
              >
                A Conversation &mdash; Not a Sales Pitch
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg"
              >
                <p>
                  This is where we get to know each other. You&apos;ll meet with
                  one of our advisors, who will ask about your situation, your
                  goals, and what you&apos;re looking for in an advisory
                  relationship. We&apos;ll explain how we can help &mdash; in
                  plain English, with no jargon &mdash; and answer any questions
                  you have.
                </p>
                <p>
                  If we&apos;re a good fit, we&apos;ll send you a proposal with
                  a clear quote based on your specific situation. If we&apos;re
                  not the right firm for you, we&apos;ll tell you that too.
                </p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-sm text-foreground/50 italic"
              >
                No pressure. No sales pitch. Just a conversation.
              </motion.p>
            </div>

            {/* Right: pricing card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              {/* Price */}
              <div className="text-center mb-8 pb-8 border-b border-border">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease }}
                >
                  <p className="text-6xl sm:text-7xl font-serif font-medium text-foreground">
                    $0
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Complimentary
                  </p>
                </motion.div>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-8">
                {step1Details.map((detail, i) => {
                  const Icon = detail.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <Icon className="w-4 h-4 text-[#1e6eae] shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">
                        {detail.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <Link
                  href="/contact"
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Your Introductory Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ─── Connector 1 → 2 ─── */}
        <StepConnector />

        {/* ─── STEP 2: Financial Plan ─── */}
        <div>
          <StepBadge
            number={2}
            label="Step Two"
            sublabel="Building Your Foundation"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: description */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="text-2xl sm:text-3xl md:text-4xl font-medium font-serif text-foreground mb-6"
              >
                Your Comprehensive Financial Plan
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg"
              >
                <p>
                  This is where we build the foundation. Your financial plan is
                  a tailored roadmap that addresses every aspect of your
                  financial life &mdash; investments, taxes, retirement income,
                  risk management, and beyond.
                </p>
                <p>
                  We don&apos;t hand you a generic template. We dig into your
                  specific situation, stress-test your plan against real tax
                  scenarios, and make sure every recommendation is coordinated.
                  You&apos;ll walk away with complete clarity on where you stand,
                  what to do next, and why &mdash; with no question left
                  unanswered.
                </p>
                <p>
                  Most plans require 4&ndash;6 hours of work, though this can
                  vary based on complexity. We&apos;ll give you an accurate
                  estimate on the introductory call so you know exactly what to
                  expect.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-6 p-4 rounded-xl bg-[#1e6eae]/[0.05] border border-[#1e6eae]/15"
              >
                <p className="text-sm text-[#1e6eae] font-medium">
                  If you decide to move forward with wealth management (Step 3),
                  your planning fees are credited toward your management fee.
                </p>
              </motion.div>
            </div>

            {/* Right: pricing card + features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              {/* Price */}
              <div className="text-center mb-8 pb-8 border-b border-border">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease }}
                >
                  <p className="text-5xl sm:text-6xl font-serif font-medium text-foreground">
                    $400
                  </p>
                  <p className="text-lg text-muted-foreground mt-1">/hour</p>
                </motion.div>
              </div>

              {/* Features */}
              <p className="text-xs uppercase tracking-wider text-foreground/40 font-semibold mb-4">
                Your plan includes:
              </p>
              <div className="grid grid-cols-1 gap-2">
                {planFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.5 + i * 0.04 }}
                    className="flex items-start gap-2.5 py-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#1e6eae] shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70 leading-snug">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── Connector 2 → 3 ─── */}
        <StepConnector />

        {/* ─── STEP 3: Wealth Management ─── */}
        <div>
          <StepBadge
            number={3}
            label="Step Three"
            sublabel="Ongoing Wealth Management"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
            {/* Left: description */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="text-2xl sm:text-3xl md:text-4xl font-medium font-serif text-foreground mb-6"
              >
                Your Plan, Put Into Action
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg"
              >
                <p>
                  This is where your financial plan comes to life. We implement
                  your strategy, manage your investments, and provide ongoing
                  coordination between your financial plan, your portfolio, and
                  your taxes &mdash; all year, every year.
                </p>
                <p>
                  This is also where United&apos;s integrated model delivers the
                  most value. Your investments are managed with your tax return
                  in mind. Your tax plan is updated when your portfolio changes.
                  And your financial plan evolves alongside both &mdash; because
                  the same team handles all three.
                </p>
              </motion.div>
            </div>

            {/* Right: pricing card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease }}
              >
                <p className="text-4xl sm:text-5xl font-serif font-medium text-foreground tracking-tight">
                  0.50%&ndash;1.00%
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  of assets under management
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* What's included — 4 service cards */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-wider text-foreground/40 font-semibold mb-6"
          >
            What&apos;s included:
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wealthServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-[#1e6eae]/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1e6eae]/[0.08] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#1e6eae]" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUBSCRIPTION SECTION — for high-earning professionals
   ═══════════════════════════════════════════════════════════════ */

export function SubscriptionSection() {
  return (
    <section className="w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: description */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm text-[#1e6eae] font-medium mb-4"
            >
              For High-Earning Professionals Still Building Wealth
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6"
            >
              Not Ready for Wealth Management? We Have a Plan for That.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg"
            >
              <p>
                If you&apos;re a high-earning professional with less than $500K
                in investable assets &mdash; maybe you&apos;re early in your
                career, accumulating equity compensation, or growing a business
                &mdash; our subscription model gives you access to the same
                integrated advisory team without an AUM requirement.
              </p>
              <p>
                You get an ongoing relationship with an advisor, yearly tax
                planning, financial planning, investment guidance, stock options
                analysis, and more. It&apos;s designed for people who are
                building toward significant wealth and want coordinated,
                professional guidance along the way.
              </p>
            </motion.div>
          </div>

          {/* Right: pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            {/* Price */}
            <div className="text-center mb-8 pb-8 border-b border-border">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease }}
              >
                <p className="text-xs uppercase tracking-wider text-foreground/40 font-semibold mb-2">
                  Starting at
                </p>
                <p className="text-5xl sm:text-6xl font-serif font-medium text-foreground">
                  $500
                </p>
                <p className="text-lg text-muted-foreground mt-1">/month</p>
              </motion.div>
            </div>

            {/* Features */}
            <p className="text-xs uppercase tracking-wider text-foreground/40 font-semibold mb-4">
              Includes:
            </p>
            <div className="space-y-3 mb-8">
              {subscriptionFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-[#1e6eae] shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BOOKKEEPING SECTION
   ═══════════════════════════════════════════════════════════════ */

export function BookkeepingSection() {
  return (
    <section className="w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1e6eae]/[0.08] mb-6"
        >
          <Briefcase className="w-7 h-7 text-[#1e6eae]" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-3xl sm:text-4xl font-medium font-serif text-foreground mb-4"
        >
          Bookkeeping for Business Owners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="text-foreground/60 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          For business owner clients who need bookkeeping services coordinated
          with their personal financial plan and tax strategy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#1e6eae] hover:text-[#1e6eae]/80 transition-colors"
          >
            Contact us for a quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CLOSING SECTION — "Questions About Pricing?"
   ═══════════════════════════════════════════════════════════════ */

export function FeesClosingSection() {
  return (
    <section className="w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-8"
        >
          Questions About Pricing?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-foreground/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          We&apos;re happy to walk through our fee structure in detail &mdash;
          no obligation, no pressure. The introductory call is the easiest way
          to get a clear picture of what working together would look like and
          what it would cost for your specific situation.
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
            <Calendar className="w-4 h-4" />
            Book Your Complimentary Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
