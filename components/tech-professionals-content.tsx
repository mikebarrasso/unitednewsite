"use client";

import { motion } from "motion/react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Calculator,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Compass,
  FolderKanban,
  HeartPulse,
  Home,
  Landmark,
  LineChart,
  Plane,
  Quote,
  Scale,
  ShieldCheck,
  Sparkles,
  Sunrise,
  TrendingUp,
  Umbrella,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/lib/motion";

const ease = [0.16, 1, 0.3, 1] as const;

const VIEWPORT = { once: true, margin: "-80px" } as const;

// Full transform strings, not Motion's x/y/scale shorthands: the shorthands
// run on the main thread and drop frames while the page is still loading.
// Reduced motion keeps the fade and drops the movement.
function useReveal(from = "translateY(16px)", to = "translateY(0px)") {
  const reduced = useReducedMotion();
  return {
    initial: { opacity: 0, transform: reduced ? to : from },
    whileInView: { opacity: 1, transform: to },
    viewport: VIEWPORT,
  };
}

function useEnter() {
  const reduced = useReducedMotion();
  return (from: string, to: string) => ({
    initial: { opacity: 0, transform: reduced ? to : from },
    animate: { opacity: 1, transform: to },
  });
}

function Eyebrow({ children }: { children: ReactNode }): ReactNode {
  const reveal = useReveal();
  return (
    <motion.p
      {...reveal}
      transition={{ duration: 0.4 }}
      className="mb-4 text-sm font-medium text-[#1e6eae]"
    >
      {children}
    </motion.p>
  );
}

function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}): ReactNode {
  const reveal = useReveal();
  return (
    <motion.h2
      {...reveal}
      transition={{ duration: 0.5, ease }}
      className={`text-foreground font-serif text-3xl font-medium text-balance leading-[1.1] sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </motion.h2>
  );
}

/* ═══════ Hero ═══════ */

const heroGrants = [
  { type: "ISOs", detail: "Exercise scenarios modeled", tag: "AMT checked" },
  { type: "RSUs", detail: "Withholding gap covered", tag: "Vesting Q3" },
  { type: "ESPP", detail: "Qualifying sale date set", tag: "Holding" },
  { type: "Company stock", detail: "Diversification plan in motion", tag: "On track" },
];

function HeroVisual(): ReactNode {
  const enter = useEnter();
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 p-6 sm:p-8 lg:p-10">
      <motion.div
        {...enter("translateY(12px)", "translateY(0px)")}
        transition={{ duration: 0.5, delay: 0.4, ease }}
        className="bg-background border-border rounded-2xl border p-5"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-foreground text-xs font-semibold">
            Your equity, in one plan
          </span>
          <span className="rounded-full bg-[#1e6eae]/10 px-2 py-0.5 text-[10px] font-medium text-[#1e6eae]">
            Coordinated
          </span>
        </div>
        {heroGrants.map((g, i) => (
          <motion.div
            key={g.type}
            {...enter("translateX(-8px)", "translateX(0px)")}
            transition={{ duration: 0.4, delay: 0.55 + i * 0.08, ease }}
            className={`flex items-center justify-between py-3 ${
              i < heroGrants.length - 1 ? "border-border/60 border-b" : ""
            }`}
          >
            <div>
              <p className="text-foreground text-sm font-semibold">{g.type}</p>
              <p className="text-muted-foreground text-xs">{g.detail}</p>
            </div>
            <span className="text-xs font-medium text-[#1e6eae]">{g.tag}</span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        {...enter("translateY(12px)", "translateY(0px)")}
        transition={{ duration: 0.5, delay: 0.9, ease }}
        className="grid grid-cols-2 gap-3"
      >
        <div className="bg-background border-border rounded-2xl border p-4">
          <p className="text-muted-foreground text-[11px]">Next decision</p>
          <p className="text-foreground mt-1 text-sm font-semibold">
            Exercise before year-end?
          </p>
        </div>
        <div className="rounded-2xl bg-[#1e6eae] p-4 text-white">
          <p className="text-[11px] text-white/70">The goal</p>
          <p className="mt-1 text-sm font-semibold">
            Freedom, flexibility, options
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function TechHero(): ReactNode {
  const enter = useEnter();
  return (
    <section className="bg-background w-full px-4 pt-32 pb-16 sm:px-6 sm:pt-36 sm:pb-20 lg:px-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <motion.div
              {...enter("translateY(16px)", "translateY(0px)")}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="border-border flex w-fit items-center gap-2 rounded-full border p-1 sm:gap-3"
            >
              <span className="bg-primary text-primary-foreground inline-flex items-center rounded-full px-3 py-1 text-xs font-medium sm:text-sm">
                Tech
              </span>
              <span className="text-foreground/80 mr-2 text-sm sm:text-base">
                For engineers, founders &amp; executives
              </span>
            </motion.div>

            <motion.h1
              {...enter("translateY(16px)", "translateY(0px)")}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="text-foreground font-serif text-4xl font-medium text-balance leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Financial Planning for High-Earning Tech Professionals
            </motion.h1>

            <motion.p
              {...enter("translateY(16px)", "translateY(0px)")}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="text-foreground/70 max-w-xl text-base leading-relaxed text-pretty sm:text-lg"
            >
              We help you turn your high income and complex company stock
              decisions into freedom, flexibility, and real wealth you can
              actually use.
            </motion.p>

            <motion.div
              {...enter("translateY(16px)", "translateY(0px)")}
              transition={{ duration: 0.5, delay: 0.4, ease }}
            >
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-[scale,opacity] duration-150 ease-out hover:opacity-90 active:scale-[0.97] sm:w-auto sm:text-base"
              >
                Meet With Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            {...enter("scale(0.97)", "scale(1)")}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="bg-muted border-border/60 relative flex min-h-[320px] w-full items-center justify-center overflow-hidden rounded-4xl border sm:min-h-[480px]"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#1e6eae]/15 blur-3xl" />
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Proof band ═══════ */

const stats = [
  { value: "200+", label: "Tech clients served*" },
  { value: "18+", label: "Years of experience*" },
  { value: "100%", label: "Fiduciary commitment" },
];

export function TechProofBand(): ReactNode {
  const reveal = useReveal();
  return (
    <section className="bg-background w-full px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
      <div className="border-border mx-auto max-w-[1400px] rounded-4xl border">
        <div className="divide-border grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...reveal}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="px-8 py-8 text-center sm:py-10"
            >
              <p className="text-foreground font-serif text-5xl font-medium tracking-tight tabular-nums sm:text-6xl">
                {s.value}
              </p>
              <p className="text-muted-foreground mt-2 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="border-border flex flex-col items-center justify-between gap-2 border-t px-8 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-foreground text-sm font-medium sm:text-base">
            Your Trusted Austin Financial Advisors Serving You Virtually
            Nationwide
          </p>
          <p className="text-muted-foreground text-xs">
            * All numbers updated 02/26/2026
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════ The big questions ═══════ */

const bigQuestions = [
  "Should I exercise my stock options now, or wait—and how do taxes impact that decision?",
  "What happens to my equity if I leave for another company, get laid off, or take a break?",
  "Am I taking too much risk by having so much of my net worth tied to my company?",
  "Are we missing something important or doing something inefficient without realizing it?",
  "If the tech job I have now isn’t the one I want long term, how should that change the way we plan today?",
  "Why does it feel like my income keeps going up, but my life doesn’t get any easier?",
  "How do I think about buying a home or other big decisions when so much of my net worth is tied up in stock?",
  "If I wanted to take a sabbatical or step away from work, would we actually be okay?",
  "Am I saving and investing enough, or being too cautious with cash?",
  "When is it okay to take money off the table and enjoy it, not just reinvest everything?",
];

export function BigQuestionsSection(): ReactNode {
  const reveal = useReveal();
  return (
    <section className="bg-muted/40 w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 max-w-3xl">
          <Eyebrow>The Big Questions</Eyebrow>
          <SectionHeading className="mb-6">
            The Big Questions We Help Tech Professionals Answer
          </SectionHeading>
          <motion.p
            {...reveal}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-muted-foreground text-base leading-relaxed text-pretty sm:text-lg"
          >
            You’ve done a lot right, but your finances still feel confusing.
            These are the kinds of questions that come up when you’re juggling
            multiple moving parts and complex decisions.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {bigQuestions.map((q, i) => (
            <motion.div
              key={q}
              {...reveal}
              transition={{ duration: 0.4, delay: (i % 2) * 0.06, ease }}
              className="bg-card border-border flex items-start gap-4 rounded-2xl border p-5 sm:p-6"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1e6eae]" />
              <p className="text-foreground text-base leading-relaxed">{q}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════ How we help ═══════ */

const helpItems = [
  { icon: LineChart, label: "Stock option and RSU planning" },
  { icon: Calculator, label: "Tax-smart equity and vesting planning" },
  { icon: Scale, label: "Concentrated stock and diversification planning" },
  { icon: FolderKanban, label: "Coordinated equity, tax, and investment planning" },
  { icon: Sunrise, label: "Retirement planning for high earners" },
  { icon: Briefcase, label: "Career transition planning (layoffs, sabbaticals, entrepreneurship)" },
  { icon: Home, label: "Planning for major life decisions (homes, relocation, kids, aging parents)" },
  { icon: Umbrella, label: "Insurance and protection planning" },
  { icon: Landmark, label: "Estate planning and trusts as your life, income, and family grow" },
  { icon: Plane, label: "Intentional spending (travel, dream purchases, experiences)" },
  { icon: Compass, label: "Life planning (using money to create flexibility and options)" },
  { icon: HeartPulse, label: "Well-being (using money to reduce stress and buy back time)" },
];

export function HowWeHelpSection(): ReactNode {
  const reveal = useReveal();
  return (
    <section className="bg-background w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>At a Glance</Eyebrow>
            <SectionHeading className="mb-6">How We Help</SectionHeading>
            <motion.p
              {...reveal}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-muted-foreground text-base leading-relaxed text-pretty sm:text-lg"
            >
              We focus on the high-stakes decisions that matter most for tech
              professionals—so you can understand all your options, easily
              weigh trade-offs, and build a financial plan around what matters
              most to you.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {helpItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  {...reveal}
                  transition={{ duration: 0.4, delay: (i % 2) * 0.06, ease }}
                  className="border-border bg-card flex items-start gap-4 rounded-2xl border p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1e6eae]/10">
                    <Icon className="h-5 w-5 text-[#1e6eae]" />
                  </div>
                  <p className="text-foreground pt-2 text-sm font-medium leading-snug sm:text-[15px]">
                    {item.label}
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

/* ═══════ Company stock types ═══════ */

const stockTypes = [
  "Incentive Stock Options (ISOs)",
  "Nonqualified Stock Options (NSOs or NQSOs)",
  "Restricted Stock Units (RSUs)",
  "Restricted Stock Awards (RSAs / Restricted Stock)",
  "Employee Stock Purchase Plans (ESPPs)",
  "Stock Appreciation Rights (SARs)",
  "Phantom Stock / Deferred Equity",
  "83(b) Elections",
  "IPO Liquidity Events",
  "Private Stock",
  "10b5-1 Insider Trading Plans",
  "LTIPs",
  "Founder Shares",
];

export function StockTypesSection(): ReactNode {
  const reveal = useReveal();
  const pop = useReveal("scale(0.96)", "scale(1)");
  return (
    <section className="w-full bg-[#0f2a44] px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.p
            {...reveal}
            transition={{ duration: 0.4 }}
            className="mb-4 text-sm font-medium text-[#8cc2f0]"
          >
            Equity Compensation
          </motion.p>
          <motion.h2
            {...reveal}
            transition={{ duration: 0.5, ease }}
            className="mb-6 font-serif text-3xl font-medium text-balance leading-[1.1] sm:text-4xl md:text-5xl"
          >
            Company Stock Is Complex — We Simplify It All
          </motion.h2>
          <motion.p
            {...reveal}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Different stock types come with different rules, risks, and tax
            consequences. We help you understand what you actually have and how
            to make the most of it.
          </motion.p>
        </div>
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
          {stockTypes.map((t, i) => (
            <motion.span
              key={t}
              {...pop}
              transition={{ duration: 0.35, delay: i * 0.03, ease }}
              className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white/90 sm:text-[15px]"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════ Client companies ═══════ */

// Placeholder wordmarks until the firm supplies real client-company logos.
const placeholderLogos = [
  "acmecorp",
  "boltshift",
  "cloudwatch",
  "featherdev",
  "galileo",
  "interlock",
  "focalpoint",
  "commandr",
];

export function ClientCompaniesSection(): ReactNode {
  return (
    <section className="bg-background border-border w-full border-b px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-muted-foreground mb-10 text-center text-sm font-medium tracking-wide uppercase">
          Our Clients Work At Companies Like These
        </p>
        <div className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4">
          {placeholderLogos.map((name) => (
            <div key={name} className="flex justify-center">
              <Image
                src={`/mock-logos/${name}.svg`}
                alt=""
                width={150}
                height={36}
                className="h-7 w-auto opacity-50 dark:invert sm:h-8"
              />
            </div>
          ))}
        </div>
        <p className="text-muted-foreground/70 mt-8 text-center text-xs">
          Sample logos shown. Client company logos go here.
        </p>
      </div>
    </section>
  );
}

/* ═══════ What planning looks like ═══════ */

const planningPillars = [
  {
    icon: Calendar,
    title: "Timing your option exercises",
    body: "We model different exercise scenarios so you can see exactly how each choice affects your taxes and cash flow before you make a move.",
  },
  {
    icon: Wallet,
    title: "Turning company stock into real wealth",
    body: "We help you turn equity into real money you can spend on today’s goals like buying a house, changing jobs, starting a family, or retiring.",
  },
  {
    icon: Calculator,
    title: "Building a proactive tax strategy",
    body: "We look at your vesting schedule, investments, and life goals to find opportunities to proactively reduce your taxes now and in the years ahead.",
  },
  {
    icon: Briefcase,
    title: "Planning for a job change",
    body: "Whether you’re navigating a layoff, considering a sabbatical, exploring entrepreneurship, or moving to a lower-stress role, we help you understand the tradeoffs and weigh all your options.",
  },
  {
    icon: Home,
    title: "Making big life decisions with confidence",
    body: "We help you navigate big life decisions—home purchases, having kids, or lifestyle shifts—so you can move forward knowing you can easily afford what’s next.",
  },
  {
    icon: FolderKanban,
    title: "Bringing order and organization to your finances",
    body: "We bring together all the moving parts—equity, cash flow, investments, and tax planning, so you know exactly what you have and no longer stress about taxes, diversification, or if you can afford the life you want.",
  },
];

export function PlanningLooksLikeSection(): ReactNode {
  const reveal = useReveal();
  return (
    <section className="bg-background w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 max-w-3xl">
          <Eyebrow>Our Approach</Eyebrow>
          <SectionHeading className="mb-6">
            What Financial Planning For Tech Professionals Looks Like
          </SectionHeading>
          <motion.p
            {...reveal}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-muted-foreground text-base leading-relaxed text-pretty sm:text-lg"
          >
            Here’s how our team of CERTIFIED FINANCIAL PLANNERS®, based in
            Austin, TX and fully virtual, can help. You no longer have to make
            these choices alone.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {planningPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                {...reveal}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease }}
                className="bg-card border-border group relative flex flex-col rounded-3xl border p-7 transition-colors hover:border-[#1e6eae]/40 sm:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e6eae]/10">
                    <Icon className="h-5 w-5 text-[#1e6eae]" />
                  </div>
                  <span className="text-muted-foreground/50 font-serif text-2xl tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-foreground mb-3 text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════ Mistakes ═══════ */

const mistakes = [
  {
    title: "Under withholding taxes on RSUs or NSOs",
    body: "The default withholding rate is often not enough, leading to surprise tax bills without proper planning.",
  },
  {
    title: "Ignoring the AMT until tax time",
    body: "For high earners, you can accidentally trigger the AMT and face surprise large tax bills.",
  },
  {
    title: "Holding too much company stock for too long",
    body: "When your job, income, and investments are all tied to one company, it can be risky.",
  },
  {
    title: "Treating equity like it’s not real wealth",
    body: "When equity doesn’t feel like real money, tech pros struggle to use it as a resource for real-life goals today.",
  },
  {
    title: "Staying in a high-stress job longer than you need to",
    body: "When the numbers aren’t clear, it’s hard to know if you can afford to change jobs, work less, or retire.",
  },
  {
    title: "Making big decisions without modeling the tradeoffs",
    body: "Big choices affect more than one line item, and the tradeoffs aren’t always obvious up front.",
  },
];

export function MistakesSection(): ReactNode {
  const reveal = useReveal();
  return (
    <section className="bg-muted/40 w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 max-w-3xl">
          <Eyebrow>Costly Mistakes</Eyebrow>
          <SectionHeading className="mb-6">
            Mistakes We Help Tech Professionals Avoid
          </SectionHeading>
          <motion.p
            {...reveal}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-muted-foreground text-base leading-relaxed text-pretty sm:text-lg"
          >
            When your wealth grows quickly through equity, decisions involve
            multiple variables and mistakes are costly. All the moving parts
            and taxes can trip up even the most intelligent tech professionals.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((m, i) => (
            <motion.div
              key={m.title}
              {...reveal}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease }}
              className="bg-card border-border rounded-3xl border p-7"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-foreground mb-2 text-base font-semibold sm:text-lg">
                {m.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{m.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════ Testimonials ═══════ */

export function TestimonialsSection(): ReactNode {
  const reveal = useReveal();
  return (
    <section className="bg-background w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Eyebrow>Client Stories</Eyebrow>
          <SectionHeading>
            What Our Clients Say It’s Like To Work With Us
          </SectionHeading>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <motion.figure
              key={i}
              {...reveal}
              transition={{ duration: 0.45, delay: i * 0.08, ease }}
              className="bg-card border-border flex flex-col rounded-3xl border p-7"
            >
              <Quote className="mb-5 h-7 w-7 text-[#1e6eae]/30" />
              <blockquote className="text-muted-foreground flex-1 leading-relaxed italic">
                A testimonial from a tech professional client goes here.
              </blockquote>
              <figcaption className="border-border mt-6 border-t pt-4">
                <p className="text-foreground text-sm font-semibold">
                  Client name
                </p>
                <p className="text-muted-foreground text-xs">
                  Role, tech company
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/testimonials"
            className="border-border text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-[scale,background-color] duration-150 ease-out active:scale-[0.97]"
          >
            Read More Reviews
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-muted-foreground mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed">
          These testimonials were provided by current United Financial
          Planning Group clients and may not be representative of the
          experiences of other clients. The clients were not compensated, nor
          are there material conflicts of interest that would affect the given
          testimonials. You can view a complete list of our reviews on Google.
        </p>
      </div>
    </section>
  );
}

/* ═══════ Choose an advisor who gets tech ═══════ */

const whyUs = [
  "We've worked with a variety of tech professionals, from engineers to executives.",
  "We understand equity compensation inside and out—ISOs, NSOs, RSUs, ESPPs, and more.",
  "We speak your language and can help you unravel the complexity of it all.",
  "We're fiduciaries legally required to act in your best interest.",
  "We work with clients in Austin and nationwide. Your zip code isn't a barrier.",
  "We're not here to sell you products. We're here to help you build a financial plan that works.",
  "We will help you make the most of your money… and intentionally spend some of it too!",
];

export function ChooseAdvisorSection(): ReactNode {
  const reveal = useReveal();
  return (
    <section className="bg-muted/40 w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Why Specialization Matters</Eyebrow>
            <SectionHeading className="mb-8">
              Choose a Financial Advisor Who Gets Tech Professionals
            </SectionHeading>
            <motion.div
              {...reveal}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="rounded-3xl border border-[#1e6eae]/20 bg-[#1e6eae]/[0.05] p-7"
            >
              <p className="text-foreground font-serif text-xl leading-snug sm:text-2xl">
                You wouldn&apos;t hire a doctor who&apos;s never seen your
                condition before. Why work with an advisor who doesn&apos;t
                understand all the moving parts of tech compensation?
              </p>
            </motion.div>
          </div>
          <ul className="flex flex-col gap-3">
            {whyUs.map((item, i) => (
              <motion.li
                key={item}
                {...reveal}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className="bg-card border-border flex items-start gap-4 rounded-2xl border p-5"
              >
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1e6eae]" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ═══════ What makes us different ═══════ */

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Zero shame about money choices.",
    body: "Most people we work with have made smart decisions and a few imperfect ones. We won’t judge you, no matter how you got here.",
  },
  {
    icon: Sparkles,
    title: "Spending is a skill worth building.",
    body: "Spending well is a skill. We encourage you to make room in your financial plan for exciting purchases without putting your future at risk.",
  },
  {
    icon: TrendingUp,
    title: "The goal of money is to create a meaningful life.",
    body: (
      <>
        Money isn’t the finish line. We help you use it to create a life that
        feels meaningful <em>now</em>, not just successful on paper.
      </>
    ),
  },
];

export function DifferentSection(): ReactNode {
  const reveal = useReveal();
  return (
    <section className="bg-background w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Eyebrow>Our Philosophy</Eyebrow>
          <SectionHeading className="mb-6">
            What Makes Us Different From Other Advisors
          </SectionHeading>
          <motion.p
            {...reveal}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-muted-foreground text-base leading-relaxed text-pretty sm:text-lg"
          >
            Who you choose to be your thinking partner for big financial
            decisions is important. Here’s what makes our team unique.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                {...reveal}
                transition={{ duration: 0.45, delay: i * 0.08, ease }}
                className="bg-card border-border rounded-3xl border p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1e6eae] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-3 font-serif text-2xl font-medium leading-snug">
                  {d.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{d.body}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.p
          {...reveal}
          transition={{ duration: 0.5, ease }}
          className="text-foreground mx-auto mt-12 max-w-3xl text-center text-base font-medium sm:text-lg"
        >
          We are fiduciaries, fee-only CERTIFIED FINANCIAL PLANNERS® who serve
          tech professionals in Austin and nationwide.
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════ FAQ ═══════ */

export type TechFaq = { question: string; answer: ReactNode };

export function TechFaqSection({ faqs }: { faqs: TechFaq[] }): ReactNode {
  return (
    <section className="bg-muted/40 w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Eyebrow>FAQ</Eyebrow>
        <SectionHeading className="mb-12">
          Common Questions Tech Professionals Ask Us
        </SectionHeading>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              open={i === 0}
              className="group bg-card border-border rounded-2xl border px-6 py-5 open:pb-6 [&::details-content]:opacity-0 [&::details-content]:transition-[opacity,content-visibility] [&::details-content]:duration-200 [&::details-content]:ease-out [&::details-content]:[transition-behavior:allow-discrete] open:[&::details-content]:opacity-100"
            >
              <summary className="text-foreground flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold sm:text-lg [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="text-muted-foreground mt-1 h-5 w-5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-open:rotate-180" />
              </summary>
              <div className="text-muted-foreground mt-4 space-y-4 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════ Final CTA ═══════ */

export function TechFinalCta(): ReactNode {
  const reveal = useReveal();
  return (
    <section className="bg-background w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <motion.div
        {...reveal}
        transition={{ duration: 0.5, ease }}
        className="relative mx-auto max-w-[1400px] overflow-hidden rounded-4xl bg-[#0f2a44] px-6 py-20 text-center text-white sm:px-12 sm:py-24"
      >
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-[#1e6eae]/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl font-medium text-balance leading-[1.1] sm:text-4xl md:text-5xl">
            Ready to Turn Your Tech Success into Freedom, Flexibility, and
            Options?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Schedule a conversation with our team to see if we’re a great fit.
            No pressure, no sales pitch. Just a kind, caring team of financial
            planners ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0f2a44] transition-[scale,opacity] duration-150 ease-out hover:opacity-90 active:scale-[0.97] sm:text-base"
          >
            <Calendar className="h-4 w-4" />
            Schedule A Call With Us
          </Link>
          <p className="mt-8 text-xs text-white/60 sm:text-sm">
            Free 45-minute call • Fee-Only Financial Planners in Austin, TX •
            Fiduciaries
          </p>
        </div>
      </motion.div>
    </section>
  );
}
