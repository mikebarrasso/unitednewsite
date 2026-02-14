import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Retirement Planning — United Financial Planning Group",
  description:
    "Retirement planning that coordinates your income, investments, taxes, and healthcare into one strategy — so you can stop worrying and start living.",
  path: "/services/retirement-planning",
});

const keyAreas = [
  {
    title: "Income strategy",
    description:
      "Designing a sustainable withdrawal plan across multiple account types (taxable, tax-deferred, tax-free) to minimize your lifetime tax burden.",
  },
  {
    title: "Social Security optimization",
    description:
      "Modeling claiming strategies based on your specific financial picture — not a generic calculator.",
  },
  {
    title: "Roth conversion planning",
    description:
      "Identifying the optimal windows to convert — balancing current tax cost against future tax savings.",
  },
  {
    title: "Healthcare and Medicare planning",
    description:
      "Accounting for IRMAA surcharges, supplemental coverage, and long-term care considerations.",
  },
  {
    title: "RMD management",
    description:
      "Strategies to reduce the tax sting of required minimum distributions before they begin — and manage them efficiently once they start.",
  },
  {
    title: "Legacy and estate coordination",
    description:
      "Ensuring your wealth transfers to the next generation as tax-efficiently as possible.",
  },
];

export default function RetirementPlanningPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="relative w-full bg-muted pt-40 pb-24 sm:pb-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              You&apos;ve Spent Decades Building Wealth.{" "}
              <span className="italic">
                The Next Chapter Is About Making It Last.
              </span>
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              Retirement planning that coordinates your income, investments,
              taxes, and healthcare into one strategy — so you can stop worrying
              and start living.
            </p>
          </div>
        </section>

        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-2xl font-medium font-serif text-foreground mb-6">
              Retirement isn&apos;t a single decision. It&apos;s hundreds of
              interconnected decisions — and the order matters.
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed mb-12">
              <p>
                When should you claim Social Security? How much can you safely
                withdraw each year? Should you do Roth conversions now or later?
                Most retirees make these decisions in isolation.
              </p>
              <p className="font-medium text-foreground">
                We build retirement plans that treat every decision as connected —
                because they are.
              </p>
            </div>

            <h3 className="text-lg font-medium text-foreground mb-6">
              Key areas we address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {keyAreas.map((area) => (
                <div
                  key={area.title}
                  className="p-6 bg-muted/50 border border-border rounded-sm"
                >
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    {area.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-muted/50 border border-border rounded-sm">
              <p className="text-foreground/80 leading-relaxed">
                <strong className="text-foreground">
                  Why this matters at United:
                </strong>{" "}
                Your retirement plan isn&apos;t just projections — it&apos;s
                actively managed alongside your portfolio and your tax return.
                When market conditions change or tax law shifts, we adjust in real
                time.
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
