import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Services — United Financial Planning Group",
  description:
    "Comprehensive fee-only financial services including financial planning, retirement planning, investment management, tax planning, and tax preparation — all in-house.",
  path: "/services",
});

const services = [
  {
    title: "Financial Planning",
    description:
      "A comprehensive roadmap for your financial future — built around your actual goals, not a generic questionnaire.",
    href: "/services/financial-planning",
  },
  {
    title: "Retirement Planning",
    description:
      "Turn decades of accumulation into sustainable income — with a clear strategy for Social Security, withdrawals, Roth conversions, and healthcare costs.",
    href: "/services/retirement-planning",
  },
  {
    title: "Investment Management",
    description:
      "Portfolio management that goes beyond asset allocation — integrating tax efficiency, risk management, and your complete financial picture.",
    href: "/services/investment-management",
  },
  {
    title: "Tax Planning",
    description:
      "Proactive strategies to minimize your lifetime tax burden — not just this year's return, but across decades of wealth-building decisions.",
    href: "/services/tax-planning",
  },
  {
    title: "Tax Preparation",
    description:
      "Accurate, thorough tax preparation by CPAs and Enrolled Agents who already understand your investments, your retirement plan, and your goals.",
    href: "/services/tax-preparation",
  },
];

const blindSpots = [
  "Your advisor rebalances your portfolio in December — triggering capital gains your CPA didn't expect and can't offset.",
  "You convert to a Roth IRA based on a rule of thumb — without modeling how it impacts your Medicare premiums two years later.",
  "You exercise stock options on your own timeline — unaware that waiting three months would have saved you $40,000 in taxes.",
];

export default function ServicesPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative w-full bg-muted pt-40 pb-24 sm:pb-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Every Part of Your Financial Life.{" "}
              <span className="italic">One Team. One Strategy.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              Most people cobble together advice from a financial advisor, a CPA,
              and maybe an estate attorney — none of whom see the full picture. We
              bring it all together so every decision reinforces the others.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col p-8 bg-muted/50 border border-border rounded-sm hover:border-foreground/20 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cost of Disconnected Advice */}
        <section className="relative w-full bg-muted py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-medium font-serif text-foreground mb-4">
              The Cost of Disconnected Advice
            </h2>
            <p className="text-foreground/60 mb-8">
              Here&apos;s what happens when your financial advisor and your CPA
              don&apos;t talk:
            </p>
            <ul className="space-y-4 mb-8">
              {blindSpots.map((spot) => (
                <li
                  key={spot}
                  className="flex items-start gap-3 text-foreground/70"
                >
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30" />
                  <span className="leading-relaxed">{spot}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground font-medium text-lg">
              At United, they share a hallway.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
