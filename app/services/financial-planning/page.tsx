import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Financial Planning — United Financial Planning Group",
  description:
    "A comprehensive financial plan built around what matters to you, informed by deep tax expertise most financial planners simply don't have.",
  path: "/services/financial-planning",
});

const coverageItems = [
  "Cash flow analysis and optimization",
  "Goal setting and milestone tracking",
  "Risk assessment and insurance review",
  "Education funding strategies",
  "Estate and legacy planning",
  "Integration with tax planning and investment strategy",
];

export default function FinancialPlanningPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="relative w-full bg-muted pt-40 pb-24 sm:pb-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Financial Planning That Starts With Your Life —{" "}
              <span className="italic">Not a Product Catalog</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              A comprehensive plan built around what matters to you, informed by
              deep tax expertise most financial planners simply don&apos;t have.
            </p>
          </div>
        </section>

        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-2xl font-medium font-serif text-foreground mb-6">
              You don&apos;t need another pie chart. You need a plan that
              actually accounts for your reality.
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Maybe you&apos;re five years from retirement and wondering
                whether your savings will last. Maybe you&apos;re navigating a
                business sale and need to understand what you&apos;ll walk away
                with after taxes. Maybe you&apos;ve accumulated significant
                wealth and want to make sure you&apos;re not unknowingly
                overpaying the IRS by six figures.
              </p>
              <p>
                Whatever brought you here, our financial planning process starts
                with listening — not selling.
              </p>
            </div>

            <h3 className="text-lg font-medium text-foreground mt-12 mb-4">
              What makes our financial planning different
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Because our team includes CFPs and CPAs working together, your
              financial plan is stress-tested against real tax scenarios from day
              one. Every projection, every recommendation, every strategy
              accounts for the tax consequences that most financial plans simply
              ignore.
            </p>

            <h3 className="text-lg font-medium text-foreground mb-4">
              Our financial planning process covers
            </h3>
            <ul className="space-y-3 mb-12">
              {coverageItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground/70"
                >
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-8 bg-muted/50 border border-border rounded-sm">
              <p className="text-foreground/80 leading-relaxed">
                <strong className="text-foreground">
                  The difference you&apos;ll feel:
                </strong>{" "}
                Clarity. Not a 100-page binder you&apos;ll never open — but a
                living strategy that evolves with your life and gives you
                confidence that the pieces fit together.
              </p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
