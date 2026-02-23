"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  ArrowRight,
  ArrowDown,
  DollarSign,
  TrendingDown,
  Briefcase,
  BarChart3,
  FileSpreadsheet,
  Calculator,
  Users,
  Building2,
  Rocket,
  PieChart,
  CreditCard,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

/* ═══════ Hero Visual ═══════ */

const vestingSchedule = [
  { type: "ISO", shares: "2,500", status: "Vested", action: "Exercise window open" },
  { type: "RSU", shares: "1,200", status: "Vesting Q2", action: "Tax impact modeled" },
  { type: "NSO", shares: "3,000", status: "Vested", action: "Optimal timing: Q1" },
  { type: "ESPP", shares: "850", status: "Holding", action: "Qualifying period: 4 mo" },
];

export function EquityCompVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-6 sm:p-8 lg:p-10 gap-4">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4, ease }} className="grid grid-cols-3 gap-3">
        {[
          { label: "Grant Types", value: "4 Active" },
          { label: "AMT Exposure", value: "Modeled" },
          { label: "Next Decision", value: "This Quarter" },
        ].map((m) => (
          <div key={m.label} className="p-3 rounded-xl bg-background border border-border">
            <p className="text-[10px] sm:text-xs text-muted-foreground">{m.label}</p>
            <p className="text-xs sm:text-sm font-semibold text-foreground mt-0.5">{m.value}</p>
          </div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5, ease }} className="p-4 sm:p-5 rounded-xl bg-background border border-border">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-foreground">Equity Compensation Dashboard</span>
          <span className="text-[10px] text-[#1e6eae] font-medium bg-[#1e6eae]/10 px-2 py-0.5 rounded-full">Coordinated</span>
        </div>
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground pb-2 border-b border-border">
          <span>Type</span>
          <div className="flex gap-4 sm:gap-6">
            <span>Shares</span>
            <span className="w-20 text-right">Status</span>
          </div>
        </div>
        {vestingSchedule.map((row, i) => (
          <motion.div key={row.type} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.6 + i * 0.08, ease }}
            className={`flex items-center justify-between py-2.5 ${i < vestingSchedule.length - 1 ? "border-b border-border/50" : ""}`}
          >
            <div>
              <span className="text-xs sm:text-sm font-semibold text-foreground">{row.type}</span>
              <p className="text-[10px] text-muted-foreground">{row.action}</p>
            </div>
            <div className="flex gap-4 sm:gap-6 items-center">
              <span className="text-xs sm:text-sm text-foreground font-medium tabular-nums">{row.shares}</span>
              <span className="w-20 text-right text-[10px] sm:text-xs font-medium text-[#1e6eae]">{row.status}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════ Problem Section ═══════ */

const mistakes = [
  { icon: Calculator, title: "ISO exercise → AMT surprise", detail: "Exercised without modeling alternative minimum tax", cost: "$30K+ unexpected tax bill", color: "text-rose-500", bg: "bg-rose-500/10" },
  { icon: PieChart, title: "RSU concentration risk", detail: "70% of portfolio in a single company stock", cost: "Massive downside exposure, gains on every sale", color: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: DollarSign, title: "ESPP holding period mistake", detail: "Sold before qualifying disposition threshold", cost: "Long-term gains converted to ordinary income", color: "text-red-500", bg: "bg-red-500/10" },
];

export function ProblemSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">The Problem</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
              The Most Expensive Mistake Isn&apos;t Picking the Wrong Stock. It&apos;s Exercising at the Wrong Time.
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg">
              <p>
                These are high-stakes decisions being made every day by smart,
                successful professionals who are either guessing, Googling, or
                getting advice from an advisor who understands the investment
                side but has never filed an AMT calculation — and a CPA who
                files accurate returns but has no visibility into the financial
                plan.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease }} className="mt-8 p-6 bg-[#1e6eae]/[0.05] border border-[#1e6eae]/20 rounded-2xl">
              <p className="text-foreground font-medium leading-relaxed">
                The gap between those two conversations is where equity
                compensation value disappears.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-3">
            {mistakes.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="flex flex-col gap-3">
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.15, ease }} className="p-4 rounded-2xl bg-card border border-border">
                    <div className="flex items-start gap-4">
                      <div className={`shrink-0 w-10 h-10 rounded-xl ${m.bg} flex items-center justify-center`}><Icon className={`w-5 h-5 ${m.color}`} /></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">{m.title}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{m.detail}</p>
                        <div className="mt-3"><motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 + i * 0.15, ease }} className={`h-1.5 rounded-full ${m.bg}`} style={{ maxWidth: i === 0 ? "85%" : i === 1 ? "70%" : "60%" }} /></div>
                        <p className={`text-xs font-medium mt-1.5 ${m.color}`}>{m.cost}</p>
                      </div>
                    </div>
                  </motion.div>
                  {i < mistakes.length - 1 && (<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.4 + i * 0.15 }} className="flex justify-center"><ArrowDown className="w-4 h-4 text-muted-foreground/30" /></motion.div>)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Why Different — side-by-side comparison ═══════ */

const standardItems = [
  "Advisor says \"diversify\" without modeling tax cost",
  "CPA sees equity comp at filing — months too late",
  "AMT calculated after exercise, not before",
  "No one coordinates across grant types",
];
const unitedItems = [
  "Every exercise modeled against AGI, AMT, and Medicare",
  "CFP and CPA collaborate before decisions are made",
  "AMT projections run throughout the year",
  "All grant types coordinated in one strategy",
];

export function WhyDifferentSection() {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl mb-12">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">Why Equity Comp Requires a Different Kind of Advisor</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
            This Isn&apos;t Standard Financial Planning
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every grant type carries its own tax rules, timing sensitivities,
            and interactions with your other income. The difference between
            exercising in December versus January can be five figures.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="p-6 sm:p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center"><FileSpreadsheet className="w-5 h-5 text-muted-foreground" /></div>
              <div><p className="text-base font-semibold text-foreground">Standard Approach</p><p className="text-xs text-muted-foreground">Separate advisor + CPA</p></div>
            </div>
            <div className="space-y-3">
              {standardItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }} className="flex items-start gap-3 py-2">
                  <XCircle className="w-4.5 h-4.5 text-muted-foreground/40 shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="p-6 sm:p-8 rounded-2xl border border-[#1e6eae]/20 bg-[#1e6eae]/[0.03]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1e6eae]/10 flex items-center justify-center"><Users className="w-5 h-5 text-[#1e6eae]" /></div>
              <div><p className="text-base font-semibold text-foreground">United FPG</p><p className="text-xs text-[#1e6eae]">CFP + CPA together</p></div>
            </div>
            <div className="space-y-3">
              {unitedItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }} className="flex items-start gap-3 py-2">
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

/* ═══════ Grid — 5 tiles (features-5 style) ═══════ */

const tiles = [
  { icon: Briefcase, title: "ISO Exercise Strategy", description: "We model the optimal number of shares to exercise each year — factoring in your other income, your bracket, your AMT crossover point, and your broader financial plan — so you capture the spread without the surprise." },
  { icon: DollarSign, title: "NSO Tax Planning", description: "Non-qualified options are taxed as ordinary income at exercise. We model scenarios against your full tax picture so you know exactly what you'll net, before you make the decision." },
  { icon: PieChart, title: "RSU Diversification Planning", description: "We build diversification timelines that balance your risk tolerance, your tax situation, and your overall portfolio allocation — so you're not making sell decisions in a vacuum." },
  { icon: CreditCard, title: "ESPP Optimization", description: "We track your lots, model the optimal sale timing, and ensure you're not accidentally converting long-term capital gains into ordinary income by selling before the qualifying disposition window." },
  { icon: Calculator, title: "AMT Modeling & Management", description: "We run AMT projections alongside regular tax projections throughout the year — not just at filing time — so you can make exercise decisions with full visibility into both tax systems." },
];

export function EquityStrategyGrid() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: `linear-gradient(to right, rgba(30,110,174,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,110,174,0.08) 1px, transparent 1px)`, backgroundSize: "20px 20px", maskImage: `repeating-linear-gradient(to right,black 0px,black 3px,transparent 3px,transparent 8px),repeating-linear-gradient(to bottom,black 0px,black 3px,transparent 3px,transparent 8px),radial-gradient(ellipse 100% 100% at 100% 0%,#000 24%,transparent 82%)`, WebkitMaskImage: `repeating-linear-gradient(to right,black 0px,black 3px,transparent 3px,transparent 8px),repeating-linear-gradient(to bottom,black 0px,black 3px,transparent 3px,transparent 8px),radial-gradient(ellipse 100% 100% at 100% 0%,#000 24%,transparent 82%)`, maskComposite: "intersect", WebkitMaskComposite: "source-in" }} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-12 md:mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">How We Approach Equity Compensation</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6 max-w-4xl">
            Five Strategies, One Coordinated Team
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border rounded-2xl overflow-hidden">
          {tiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-8 md:p-10 bg-card
                  ${index !== tiles.length - 1 ? "border-b border-border" : ""}
                  ${index % 2 === 0 && index !== tiles.length - 1 ? "md:border-r md:border-border" : ""}
                  ${(index + 1) % 3 !== 0 ? "lg:border-r lg:border-border" : ""}
                  ${index < 3 ? "lg:border-b lg:border-border" : ""}
                `}
              >
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <Icon className="w-full h-full text-[#1e6eae]" strokeWidth={0.5} />
                  </div>
                </div>
                <h3 className="text-lg tracking-tight sm:text-xl font-semibold text-foreground mb-3">{tile.title}</h3>
                <p className="text-sm tracking-tight sm:text-base text-muted-foreground leading-normal">{tile.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════ Integration — animated decision flow ═══════ */

const lenses = [
  { label: "Portfolio concentration impact", icon: PieChart },
  { label: "Roth conversion window check", icon: TrendingDown },
  { label: "Income interaction for the year", icon: BarChart3 },
  { label: "Estimated tax payment adjustment", icon: Calculator },
];

export function IntegrationSection() {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">Full Integration</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">
              Your Equity Comp Doesn&apos;t Exist Separately From the Rest of Your Financial Life
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="space-y-5 text-foreground/70 leading-relaxed text-base sm:text-lg">
              <p>
                A decision about when to exercise isn&apos;t just a tax question
                — it&apos;s a financial planning question, an investment
                question, and a tax question all at once. At United, that&apos;s
                how we treat it.
              </p>
              <p>
                That&apos;s what&apos;s possible when your financial planner,
                portfolio manager, and CPA are in the same firm — and
                it&apos;s nearly impossible when they&apos;re not.
              </p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease }} className="p-6 rounded-2xl bg-card border border-border">
            <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">One decision, analyzed through every lens</p>
            <p className="text-xs text-muted-foreground mb-5">Example: ISO exercise strategy</p>
            <div className="space-y-4">
              {lenses.map((lens, i) => {
                const Icon = lens.icon;
                return (
                  <div key={i} className="flex flex-col gap-4">
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.15, ease }} className="flex items-center gap-4 p-4 rounded-xl bg-muted/40">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-[#1e6eae] flex items-center justify-center"><Icon className="w-5 h-5 text-white" /></div>
                      <div className="flex-1"><p className="text-sm font-medium text-foreground">{lens.label}</p><motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease }} className="h-1 bg-[#1e6eae]/20 rounded-full mt-2" /></div>
                      <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.9 + i * 0.15 }}><CheckCircle className="w-5 h-5 text-emerald-500" /></motion.div>
                    </motion.div>
                    {i < lenses.length - 1 && (<div className="flex justify-center"><motion.div initial={{ height: 0 }} whileInView={{ height: 16 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.6 + i * 0.15 }} className="w-0.5 bg-[#1e6eae]/20" /></div>)}
                  </div>
                );
              })}
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.6 }} className="mt-6 p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 text-center">
              <p className="text-sm text-emerald-700 dark:text-emerald-400 font-semibold">One team. Every angle. Before you act.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Who This Is For — bento grid ═══════ */

const personas = [
  { icon: Building2, title: "Corporate Executives", description: "Vesting schedules across multiple grant types — ISOs, NSOs, and RSUs accumulating simultaneously — who need a coordinated strategy, not piecemeal advice." },
  { icon: Rocket, title: "Startup Employees", description: "Navigating the decision of when to exercise, how many shares, and how to plan around a company that may or may not go public." },
  { icon: PieChart, title: "Concentrated Positions", description: "You know you should diversify but need a tax-efficient plan to get there — not a generic \"sell and reallocate\" recommendation." },
  { icon: CreditCard, title: "Anyone With Equity on a W-2", description: "Your standard financial advisor and your standard CPA aren't talking to each other about your equity compensation. We fix that." },
];

export function WhoSection() {
  return (
    <section className="relative w-full bg-muted/30 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[#1e6eae] font-medium mb-4">Who This Is For</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-10 max-w-3xl">
          Built for the Complexity You&apos;re Actually Dealing With
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {personas.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1e6eae]/10 flex items-center justify-center"><Icon className="w-6 h-6 text-[#1e6eae]" /></div>
                <div><h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{p.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
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
  const labels = ["ISOs", "RSUs", "NSOs", "ESPP"];
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: card.x, top: card.y, x: px, y: py, rotate: card.rotation }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.15, scale: 1 }} transition={{ duration: 0.8, delay: index * 0.15 }}>
      <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-xl border border-border bg-muted/60 flex items-center justify-center"><span className="text-xs sm:text-sm font-medium text-foreground/40">{labels[index]}</span></div>
    </motion.div>
  );
}
export function EquityCompCTA() {
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
      <div className="absolute inset-0">{floatingCards.map((card, i) => (<FloatingCard key={i} card={card} smoothX={smoothX} smoothY={smoothY} index={i} />))}</div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6">Equity Compensation Is Too Valuable to Get Wrong</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="text-lg text-muted-foreground leading-relaxed mb-10">
          Schedule a no-pressure conversation. We&apos;ll look at what
          you&apos;re holding, what&apos;s vesting, and what decisions are
          coming up — and help you understand what a coordinated approach could
          mean for your net outcome.
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
