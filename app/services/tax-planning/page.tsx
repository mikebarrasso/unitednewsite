import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Tax Planning — United Financial Planning Group",
  description:
    "Proactive, year-round tax strategies designed to reduce your lifetime tax burden — not just this year's bill.",
  path: "/services/tax-planning",
});

const strategies = [
  {
    title: "Multi-year tax projections",
    description:
      "We don't just optimize this year's return; we model the tax impact of decisions across 5, 10, and 20+ year horizons.",
  },
  {
    title: "Roth conversion analysis",
    description:
      "Identifying the years when conversions make the most mathematical sense based on your income, bracket, and future expectations.",
  },
  {
    title: "Equity compensation tax planning",
    description:
      "Modeling the optimal exercise timing for ISOs, NSOs, and RSUs to minimize ordinary income, AMT, and capital gains exposure.",
  },
  {
    title: "Business entity and compensation structuring",
    description:
      "Ensuring your business is set up to maximize tax efficiency for both the entity and you personally.",
  },
  {
    title: "Charitable giving strategies",
    description:
      "Donor-advised funds, qualified charitable distributions, and timing strategies that maximize your tax benefit.",
  },
  {
    title: "Estate and gift tax planning",
    description:
      "Coordinating lifetime gifting strategies with your broader estate plan.",
  },
];

export default function TaxPlanningPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="relative w-full bg-muted pt-40 pb-24 sm:pb-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Tax Planning That Goes{" "}
              <span className="italic">Far Beyond April 15th</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              Proactive, year-round tax strategies designed to reduce your
              lifetime tax burden — not just this year&apos;s bill.
            </p>
          </div>
        </section>

        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-2xl font-medium font-serif text-foreground mb-6">
              If tax planning only happens when your CPA prepares your return,
              you&apos;re already too late.
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed mb-12">
              <p>
                The most impactful tax decisions aren&apos;t made in March.
                They&apos;re made throughout the year — when you exercise stock
                options, rebalance your portfolio, convert to a Roth, sell a
                business, or adjust your charitable giving strategy.
              </p>
              <p className="font-medium text-foreground">
                At United, tax planning isn&apos;t an afterthought. It&apos;s
                built into every financial decision we help you make.
              </p>
            </div>

            <h3 className="text-lg font-medium text-foreground mb-6">
              What proactive tax planning looks like
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {strategies.map((strategy) => (
                <div
                  key={strategy.title}
                  className="p-6 bg-muted/50 border border-border rounded-sm"
                >
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    {strategy.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-muted/50 border border-border rounded-sm">
              <p className="text-foreground/80 leading-relaxed">
                <strong className="text-foreground">
                  Why it matters that we do this in-house:
                </strong>{" "}
                When your tax planner is also connected to your investment manager
                and financial planner, strategies get implemented — not just
                recommended. No game of telephone. No dropped recommendations. No
                conflicting advice.
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
