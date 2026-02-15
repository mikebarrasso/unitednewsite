import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import {
  ProblemSection,
  ExpectationsSection,
  DifferentiatorSection,
  TaxPrepVisual,
  TaxPrepCTA,
} from "@/components/tax-prep-content";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Tax Preparation — United Financial Planning Group",
  description:
    "Accurate, thorough personal and business tax returns prepared by CPAs and Enrolled Agents who manage your investments, your financial plan, and your tax strategy year-round.",
  path: "/services/tax-preparation",
});

export default function TaxPreparationPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <ServiceHero
          eyebrow="Tax Preparation"
          title="Tax Preparation by Professionals Who Already Know Your Financial Story"
          subtitle="Accurate, thorough personal and business tax returns prepared by CPAs and Enrolled Agents who manage your investments, your financial plan, and your tax strategy year-round."
          customVisual={<TaxPrepVisual />}
        />

        <ProblemSection />

        <ExpectationsSection />

        <DifferentiatorSection />

        <TaxPrepCTA />
      </main>
      <Footer />
    </>
  );
}
