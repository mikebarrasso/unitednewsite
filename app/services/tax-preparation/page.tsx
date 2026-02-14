import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Tax Preparation — United Financial Planning Group",
  description:
    "Accurate, thorough tax returns prepared by CPAs and Enrolled Agents who understand your investments, your retirement plan, and your long-term goals.",
  path: "/services/tax-preparation",
});

const expectations = [
  "Tax preparation for individuals, families, and business owners",
  "Federal and all required state returns",
  "Proactive identification of credits, deductions, and strategies you may have been missing",
  "Year-round access to your tax team — not just during filing season",
  "Seamless coordination with your financial plan and investment strategy",
];

export default function TaxPreparationPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="relative w-full bg-muted pt-40 pb-24 sm:pb-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Tax Preparation by Professionals{" "}
              <span className="italic">Who Already Know Your Financial Story</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              Accurate, thorough tax returns prepared by CPAs and Enrolled Agents
              who understand your investments, your retirement plan, and your
              long-term goals.
            </p>
          </div>
        </section>

        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-2xl font-medium font-serif text-foreground mb-6">
              Your tax return shouldn&apos;t be prepared by someone seeing your
              financial life for the first time in March.
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed mb-12">
              <p>
                When you work with United, your tax return is prepared by the same
                team that manages your investments and builds your financial plan.
                That means your preparer already knows about the Roth conversion
                you did in June. They already accounted for the stock options you
                exercised in September. They already understand your charitable
                giving strategy.
              </p>
              <p className="font-medium text-foreground">
                No re-explaining your situation every spring. No scrambling to
                gather documents for someone who has no context. No missed
                deductions because your CPA didn&apos;t know what your financial
                advisor was doing.
              </p>
            </div>

            <h3 className="text-lg font-medium text-foreground mb-4">
              What you can expect
            </h3>
            <ul className="space-y-3 mb-12">
              {expectations.map((item) => (
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
                  For business owners:
                </strong>{" "}
                We handle entity-level returns (S-corps, partnerships, LLCs)
                alongside your personal return — ensuring coordination between
                business and personal tax strategies.
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
