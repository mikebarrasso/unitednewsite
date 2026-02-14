import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Investment Management — United Financial Planning Group",
  description:
    "Investment decisions that account for your tax bracket, your retirement timeline, your estate plan, and your complete financial life — not just risk tolerance.",
  path: "/services/investment-management",
});

const practiceItems = [
  {
    title: "Tax-loss harvesting",
    description:
      "Coordinated with your actual tax situation — not applied as a blanket strategy.",
  },
  {
    title: "Asset location optimization",
    description:
      "Placing investments in the right account types (taxable, IRA, Roth) to minimize tax drag over time.",
  },
  {
    title: "Capital gains management",
    description:
      "Timing sales and rebalancing to stay within favorable tax brackets.",
  },
  {
    title: "Equity compensation integration",
    description:
      "Factoring your stock options, RSUs, and ESPP shares into overall portfolio allocation and risk management.",
  },
  {
    title: "Concentrated position strategies",
    description:
      "Thoughtful diversification plans for founders and executives with significant holdings in a single stock.",
  },
];

export default function InvestmentManagementPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="relative w-full bg-muted pt-40 pb-24 sm:pb-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Portfolio Management That{" "}
              <span className="italic">Sees Past the Portfolio</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              Investment decisions that account for your tax bracket, your
              retirement timeline, your estate plan, and your complete financial
              life — not just risk tolerance.
            </p>
          </div>
        </section>

        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-2xl font-medium font-serif text-foreground mb-6">
              The best investment strategy in the world can still cost you money
              if it ignores your taxes.
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed mb-12">
              <p>
                Most investment managers build a portfolio based on your risk
                tolerance and time horizon. That&apos;s necessary — but it&apos;s
                not sufficient. Because the portfolio that maximizes pre-tax
                returns is rarely the one that maximizes after-tax wealth.
              </p>
              <p>
                At United, investment management is never a standalone service.
                It&apos;s part of a coordinated strategy that considers how every
                trade, every rebalance, and every distribution flows through to
                your tax return.
              </p>
            </div>

            <h3 className="text-lg font-medium text-foreground mb-6">
              What tax-aware investment management looks like in practice
            </h3>
            <div className="space-y-4 mb-12">
              {practiceItems.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-muted/50 border border-border rounded-sm"
                >
                  <h4 className="text-sm font-medium text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-muted/50 border border-border rounded-sm">
              <p className="text-foreground/80 leading-relaxed">
                <strong className="text-foreground">
                  Our investment philosophy:
                </strong>{" "}
                We believe in evidence-based, diversified portfolio construction —
                not market timing or speculative bets. We build portfolios that
                are globally diversified, cost-efficient, and designed to capture
                long-term market returns while managing risk and minimizing taxes.
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
