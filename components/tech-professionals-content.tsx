"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BadgeDollarSign,
  Briefcase,
  CalendarClock,
  Calculator,
  Clock,
  Coffee,
  Compass,
  FolderKanban,
  Gauge,
  HandCoins,
  HeartPulse,
  Home,
  Landmark,
  LineChart,
  Plane,
  PiggyBank,
  Receipt,
  Repeat,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Sunrise,
  TrendingUp,
  Umbrella,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { LogoLoop, type LogoItem } from "@/components/logo-loop";
import { WealthtenderFirmReviews } from "@/components/wealthtender-firm-reviews";
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
      className={`text-foreground font-serif text-3xl font-medium text-balance sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </motion.h2>
  );
}

// Same filled check the service pages use in their checklists.
function CheckDot(): ReactNode {
  return (
    <div className="bg-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
      <svg
        className="text-primary-foreground h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

/* ═══════ Hero (service-hero layout) ═══════ */

export function TechHero(): ReactNode {
  const enter = useEnter();
  return (
    <section className="bg-background w-full px-4 pt-32 pb-20 sm:px-6 sm:pt-36 sm:pb-24 lg:px-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col space-y-6 sm:space-y-8">

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
                MEET WITH OUR TEAM
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            {...enter("scale(0.97)", "scale(1)")}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="bg-muted border-border/60 relative min-h-[280px] w-full overflow-hidden rounded-4xl border sm:min-h-[480px]"
          >
            {/* Same photo as the Software Engineers page. */}
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
              alt="Software engineer's workspace with code on screen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Big questions (retirement "questions" layout) ═══════ */

const bigQuestions: { icon: LucideIcon; text: string }[] = [
  { icon: CalendarClock, text: "Should I exercise my stock options now, or wait, and how do taxes impact that decision?" },
  { icon: Briefcase, text: "What happens to my equity if I leave for another company, get laid off, or take a break?" },
  { icon: Scale, text: "Am I taking too much risk by having so much of my net worth tied to my company?" },
  { icon: Search, text: "Are we missing something important or doing something inefficient without realizing it?" },
  { icon: Compass, text: "If the tech job I have now isn’t the one I want long term, how should that change the way we plan today?" },
  { icon: Gauge, text: "Why does it feel like my income keeps going up, but my life doesn’t get any easier?" },
  { icon: Home, text: "How do I think about buying a home or other big decisions when so much of my net worth is tied up in stock?" },
  { icon: Coffee, text: "If I wanted to take a sabbatical or step away from work, would we actually be okay?" },
  { icon: PiggyBank, text: "Am I saving and investing enough, or being too cautious with cash?" },
  { icon: HandCoins, text: "When is it okay to take money off the table and enjoy it, not just reinvest everything?" },
];

export function BigQuestionsSection(): ReactNode {
  const reveal = useReveal();
  const reduced = useReducedMotion();
  const trackRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);

  const syncProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 0);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", syncProgress);
    return () => window.removeEventListener("resize", syncProgress);
  }, [syncProgress]);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({
      left: dir * (card.getBoundingClientRect().width + gap),
      behavior: reduced ? "auto" : "smooth",
    });
  };

  const atStart = progress <= 0.01;
  const atEnd = progress >= 0.99;
  // Lines the cards up with the page's 1400px content column while letting
  // the track run to the screen edge.
  const gutter =
    "px-4 sm:px-6 lg:px-[max(2rem,calc((100vw_-_1400px)_/_2_+_2rem))] scroll-px-4 sm:scroll-px-6 lg:scroll-px-[max(2rem,calc((100vw_-_1400px)_/_2_+_2rem))]";
  const arrow =
    "border-border text-foreground hover:bg-muted flex h-11 w-11 items-center justify-center rounded-full border transition-[scale,background-color,opacity] duration-150 ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-35";

  return (
    <section className="bg-background relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <SectionHeading>
            The Big Questions We Help Tech Professionals Answer
          </SectionHeading>
          <motion.p
            {...reveal}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-foreground/70 text-base leading-relaxed text-pretty sm:text-lg"
          >
            You’ve done a lot right, but your finances still feel confusing.
            These are the kinds of questions that come up when you’re juggling
            multiple moving parts and complex decisions.
          </motion.p>
        </div>
      </div>

      <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.15, ease }}>
        <ul
          ref={trackRef}
          onScroll={syncProgress}
          tabIndex={0}
          aria-label="The big questions"
          className={`flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] sm:gap-5 [&::-webkit-scrollbar]:hidden ${gutter}`}
        >
          {bigQuestions.map((q) => {
            const Icon = q.icon;
            return (
              <li
                key={q.text}
                className="bg-muted/40 border-border flex min-h-[260px] w-[82%] shrink-0 snap-start flex-col justify-between gap-10 rounded-3xl border p-7 sm:w-[380px] sm:p-8 lg:w-[420px]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e6eae]/10">
                  <Icon className="h-5 w-5 text-[#1e6eae]" />
                </div>
                <p className="text-foreground font-serif text-xl leading-snug text-pretty sm:text-2xl">
                  {q.text}
                </p>
              </li>
            );
          })}
        </ul>
      </motion.div>

      <div className="mx-auto mt-8 flex max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <div
          className="bg-border relative h-0.5 w-40 overflow-hidden rounded-full sm:w-64"
          aria-hidden="true"
        >
          <div
            className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-[#1e6eae]"
            style={{ transform: `scaleX(${0.1 + progress * 0.9})` }}
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous question"
            disabled={atStart}
            onClick={() => step(-1)}
            className={arrow}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next question"
            disabled={atEnd}
            onClick={() => step(1)}
            className={arrow}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════ How we help (financial-planning icon-row list) ═══════ */

const helpItems: { icon: LucideIcon; label: string }[] = [
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
    <section className="bg-muted/30 w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-16">
          <div>
            <SectionHeading className="mb-6">
              How We Help (At a Glance)
            </SectionHeading>
            <motion.p
              {...reveal}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-foreground/70 max-w-md text-base leading-relaxed text-pretty sm:text-lg"
            >
              We focus on the high-stakes decisions that matter most for tech
              professionals, so you can understand all your options, easily
              weigh trade-offs, and build a financial plan around what matters
              most to you.
            </motion.p>
          </div>
          <motion.ul
            {...reveal}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="bg-card border-border grid grid-cols-1 overflow-hidden rounded-3xl border shadow-[0_1px_2px_rgba(15,42,68,0.04),0_12px_32px_-16px_rgba(15,42,68,0.12)] sm:auto-rows-fr sm:grid-cols-2"
          >
            {helpItems.map((item, i) => {
              const Icon = item.icon;
              // "Name (detail)" labels: same words, the detail set quieter.
              const split = item.label.indexOf(" (");
              const lead = split === -1 ? item.label : item.label.slice(0, split);
              const detail = split === -1 ? null : item.label.slice(split + 1);
              return (
                <li
                  key={item.label}
                  className={`border-border flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 ${
                    i < helpItems.length - 1 ? "border-b" : ""
                  } ${i >= helpItems.length - 2 ? "sm:border-b-0" : ""} ${
                    i % 2 === 0 ? "sm:border-r" : ""
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1e6eae]/10">
                    <Icon className="h-5 w-5 text-[#1e6eae]" />
                  </div>
                  <p className="text-foreground text-[15px] leading-snug font-semibold text-pretty">
                    {lead}
                    {detail && (
                      <span className="text-muted-foreground mt-0.5 block text-sm font-normal">
                        {detail}
                      </span>
                    )}
                  </p>
                </li>
              );
            })}
          </motion.ul>
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
          <motion.h2
            {...reveal}
            transition={{ duration: 0.5, ease }}
            className="mb-6 font-serif text-3xl font-medium text-balance leading-[1.1] sm:text-4xl md:text-5xl"
          >
            <span className="sm:whitespace-nowrap">
              Company Stock Is Complex:
            </span>{" "}
            <span className="sm:whitespace-nowrap">We Simplify It All</span>
          </motion.h2>
          <motion.p
            {...reveal}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-base leading-relaxed text-pretty text-white/70 sm:text-lg"
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

/* ═══════ Client companies (home logo marquee) ═══════ */

// Sample wordmarks standing in for "[INSERT TECH LOGOS HERE]".
const placeholderLogos: LogoItem[] = [
  "acmecorp",
  "boltshift",
  "cloudwatch",
  "featherdev",
  "galileo",
  "interlock",
  "focalpoint",
  "commandr",
].map((name) => ({
  node: (
    <Image
      src={`/mock-logos/${name}.svg`}
      alt=""
      width={150}
      height={36}
      className="h-7 w-auto opacity-60 dark:invert sm:h-8"
    />
  ),
}));

export function ClientCompaniesSection(): ReactNode {
  return (
    <section className="bg-background w-full pt-20 pb-4 sm:pt-24 sm:pb-8">
      <h2 className="text-foreground mb-10 px-4 text-center font-serif text-2xl font-medium text-balance sm:text-3xl">
        Our Clients Work At Companies Like These
      </h2>
      <LogoLoop logos={placeholderLogos} speed={40} logoHeight={40} gap={80} />
    </section>
  );
}

/* ═══════ What planning looks like (retirement tab explorer) ═══════ */

const planningTabs: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: CalendarClock,
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
    body: "We help you navigate big life decisions (home purchases, having kids, or lifestyle shifts) so you can move forward knowing you can easily afford what’s next.",
  },
  {
    icon: FolderKanban,
    title: "Bringing order and organization to your finances",
    body: "We bring together all the moving parts: equity, cash flow, investments, and tax planning, so you know exactly what you have and no longer stress about taxes, diversification, or if you can afford the life you want.",
  },
];

export function PlanningLooksLikeSection(): ReactNode {
  const [active, setActive] = useState(0);
  const reveal = useReveal();
  const slideIn = useReveal("translateX(-12px)", "translateX(0px)");
  const reduced = useReducedMotion();
  const tab = planningTabs[active]!;
  const TabIcon = tab.icon;

  return (
    <section className="bg-background w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <SectionHeading className="mb-4">
            What Financial Planning For Tech Professionals Looks Like
          </SectionHeading>
          <motion.p
            {...reveal}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-muted-foreground text-lg text-pretty sm:text-xl"
          >
            Here’s how our team of CERTIFIED FINANCIAL PLANNERS®, based in
            Austin, TX and fully virtual, can help. You no longer have to make
            these choices alone.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div
            role="tablist"
            aria-label="What financial planning looks like"
            className="flex flex-col gap-3 lg:col-span-5"
          >
            {planningTabs.map((t, i) => {
              const Icon = t.icon;
              const isActive = active === i;
              return (
                <motion.button
                  key={t.title}
                  type="button"
                  role="tab"
                  id={`planning-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls="planning-panel"
                  {...slideIn}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left lg:items-center transition-[border-color,background-color,scale] duration-200 ease-out active:scale-[0.98] md:px-5 ${
                    isActive
                      ? "border-[#1e6eae]/20 bg-[#1e6eae]/[0.07]"
                      : "bg-muted/40 border-border hover:bg-muted/70"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-base font-semibold ${
                        isActive ? "text-foreground" : "text-foreground/80"
                      }`}
                    >
                      {t.title}
                    </span>
                    {/* Phones: the panel would sit below all six tabs, so the
                        selected tab shows its text in place. */}
                    {isActive && (
                      <span className="text-muted-foreground mt-2 block text-sm leading-relaxed text-pretty lg:hidden">
                        {t.body}
                      </span>
                    )}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="hidden lg:col-span-7 lg:flex">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                id="planning-panel"
                role="tabpanel"
                aria-labelledby={`planning-tab-${active}`}
                initial={{ opacity: 0, transform: reduced ? "translateY(0px)" : "translateY(8px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                exit={{ opacity: 0, transform: reduced ? "translateY(0px)" : "translateY(-8px)" }}
                transition={{ duration: 0.2, ease }}
                className="border-border bg-background flex flex-1 flex-col justify-center rounded-3xl border p-8 md:p-10 lg:p-14"
              >
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1e6eae]/[0.08]">
                  <TabIcon className="h-8 w-8 text-[#1e6eae]" />
                </div>
                <h3 className="text-foreground mb-4 font-serif text-3xl font-medium text-balance md:text-4xl">
                  {tab.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed text-pretty md:text-xl">
                  {tab.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Mistakes (investment line-icon grid) ═══════ */

const mistakes: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Receipt,
    title: "Under withholding taxes on RSUs or NSOs",
    body: "The default withholding rate is often not enough, leading to surprise tax bills without proper planning.",
  },
  {
    icon: AlertTriangle,
    title: "Ignoring the AMT until tax time",
    body: "For high earners, you can accidentally trigger the AMT and face surprise large tax bills.",
  },
  {
    icon: Scale,
    title: "Holding too much company stock for too long",
    body: "When your job, income, and investments are all tied to one company, it can be risky.",
  },
  {
    icon: BadgeDollarSign,
    title: "Treating equity like it’s not real wealth",
    body: "When equity doesn’t feel like real money, tech pros struggle to use it as a resource for real-life goals today.",
  },
  {
    icon: Clock,
    title: "Staying in a high-stress job longer than you need to",
    body: "When the numbers aren’t clear, it’s hard to know if you can afford to change jobs, work less, or retire.",
  },
  {
    icon: Repeat,
    title: "Making big decisions without modeling the tradeoffs",
    body: "Big choices affect more than one line item, and the tradeoffs aren’t always obvious up front.",
  },
];

export function MistakesSection(): ReactNode {
  const reveal = useReveal();
  return (
    <section className="bg-muted/30 relative w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* Dashed grid background, as on the investment management page. */}
      <div
        aria-hidden="true"
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
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="mb-12 md:mb-16">
          <SectionHeading className="mb-6 max-w-4xl tracking-tight">
            Mistakes We Help Tech Professionals Avoid
          </SectionHeading>
          <motion.p
            {...reveal}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-muted-foreground max-w-3xl text-base text-pretty sm:text-lg"
          >
            When your wealth grows quickly through equity, decisions involve
            multiple variables and mistakes are costly. All the moving parts
            and taxes can trip up even the most intelligent tech professionals.
          </motion.p>
        </div>

        <div className="border-border grid grid-cols-1 overflow-hidden rounded-2xl border md:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((m, index) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                {...reveal}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                className={`bg-card p-6 md:p-8 ${index < 5 ? "border-border border-b" : ""} ${
                  index % 2 === 0 ? "md:border-border md:border-r" : ""
                } ${index < 4 ? "md:border-border md:border-b" : "md:border-b-0"} ${
                  index % 3 !== 2 ? "lg:border-border lg:border-r" : "lg:border-r-0"
                } ${index < 3 ? "lg:border-border lg:border-b" : "lg:border-b-0"}`}
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
                    <Icon className="h-full w-full text-[#1e6eae]" strokeWidth={0.8} />
                  </div>
                </div>
                <h3 className="text-foreground mb-3 text-lg font-semibold tracking-tight sm:text-xl">
                  {m.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-normal tracking-tight sm:text-base">
                  {m.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════ Testimonials (home reviews widget) ═══════ */

export function TestimonialsSection(): ReactNode {
  const reveal = useReveal();
  return (
    <section className="bg-background w-full px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading className="mb-14">
          What Our Clients Say It’s Like To Work With Us
        </SectionHeading>
        <motion.div {...reveal} transition={{ duration: 0.5, ease }}>
          <WealthtenderFirmReviews firmId="36778" />
        </motion.div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/testimonials"
            className="border-border text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-[scale,background-color] duration-150 ease-out active:scale-[0.97]"
          >
            READ MORE REVIEWS
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-muted-foreground mx-auto mt-10 max-w-3xl text-xs leading-relaxed text-pretty">
          These testimonials were provided by current [ADD FIRM NAME]
          clients and may not be representative of the
          experiences of other clients. The clients were not compensated, nor
          are there material conflicts of interest that would affect the given
          testimonials. You can view a complete list of our reviews on Google.
        </p>
      </div>
    </section>
  );
}

/* ═══════ Choose an advisor (financial-planning checklist column) ═══════ */

const whyUs = [
  "We've worked with a variety of tech professionals, from engineers to executives.",
  "We understand equity compensation inside and out: ISOs, NSOs, RSUs, ESPPs, and more.",
  "We speak your language and can help you unravel the complexity of it all.",
  "We're fiduciaries legally required to act in your best interest.",
  "We work with clients in Austin and nationwide. Your zip code isn't a barrier.",
  "We're not here to sell you products. We're here to help you build a financial plan that works.",
  "We will help you make the most of your money… and intentionally spend some of it too!",
];

export function ChooseAdvisorSection(): ReactNode {
  const reveal = useReveal();
  const slideIn = useReveal("translateX(-12px)", "translateX(0px)");
  return (
    <section className="bg-muted/30 relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading className="mb-6">
          Choose a Financial Advisor Who Gets Tech Professionals
        </SectionHeading>
        <motion.p
          {...reveal}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-foreground/70 mb-10 text-lg leading-relaxed text-pretty"
        >
          You wouldn&apos;t hire a doctor who&apos;s never seen your condition
          before. Why work with an advisor who doesn&apos;t understand all the
          moving parts of tech compensation?
        </motion.p>
        <ul className="space-y-4">
          {whyUs.map((item, i) => (
            <motion.li
              key={item}
              {...slideIn}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease }}
              className="bg-background border-border flex items-start gap-3 rounded-xl border p-4"
            >
              <CheckDot />
              <span className="text-foreground/80 text-sm leading-relaxed font-medium sm:text-base">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ═══════ What makes us different (retirement difference panel) ═══════ */

const differentiators: { icon: LucideIcon; title: string; body: ReactNode }[] = [
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
        <SectionHeading className="mb-10 max-w-4xl">
          What Makes Us Different From Other Advisors
        </SectionHeading>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
          <motion.div
            {...reveal}
            transition={{ duration: 0.5 }}
            className="border-border bg-muted/30 rounded-2xl border p-6 sm:p-8 lg:col-span-3"
          >
            <p className="text-foreground text-lg leading-relaxed font-medium text-balance sm:text-xl lg:text-center lg:text-2xl">
              Who you choose to be your thinking partner for big financial
              decisions is important. Here’s what makes our team unique.
            </p>
          </motion.div>
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                {...reveal}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="border-border bg-muted/30 flex flex-col rounded-2xl border p-6 sm:p-8"
              >
                <Icon className="mb-5 h-6 w-6 text-[#1e6eae]" />
                <h3 className="text-foreground mb-2 text-base font-semibold sm:text-lg">
                  {d.title}
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                  {d.body}
                </p>
              </motion.div>
            );
          })}
          <motion.div
            {...reveal}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-[#1e6eae]/20 bg-[#1e6eae]/[0.06] p-6 sm:p-8 lg:col-span-3"
          >
            <p className="text-foreground text-center text-base font-medium text-balance sm:text-lg">
              We are fiduciaries, fee-only CERTIFIED FINANCIAL PLANNERS® who
              serve tech professionals in Austin and nationwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
