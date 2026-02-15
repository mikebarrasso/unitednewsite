import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { TaxPlanningVisual } from "@/components/tax-planning-visual";
import {
  ProblemSection,
  PrepVsPlanningSection,
  TaxStrategyGrid,
  ImplementationSection,
  YearRoundSection,
  TaxPlanningCTA,
} from "@/components/tax-planning-content";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Tax Planning — United Financial Planning Group",
  description:
    "Proactive, year-round tax strategies designed to reduce your lifetime tax burden — not just this year's bill. Built by CPAs and CFPs who manage your investments, your financial plan, and your tax return under one roof.",
  path: "/services/tax-planning",
});

export default function TaxPlanningPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <ServiceHero
          eyebrow="Tax Planning"
          title="Tax Planning That Goes Far Beyond April 15th"
          subtitle="Proactive, year-round tax strategies designed to reduce your lifetime tax burden — not just this year's bill. Built by CPAs and CFPs who manage your investments, your financial plan, and your tax return under one roof."
          customVisual={<TaxPlanningVisual />}
        />

        <ProblemSection />

        <PrepVsPlanningSection />

        <TaxStrategyGrid />

        <ImplementationSection />

        <YearRoundSection />

        <TaxPlanningCTA />
      </main>
      <Footer />
    </>
  );
}
