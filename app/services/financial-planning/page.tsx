import { FinalCTA } from "@/components/final-cta";
import { Features4 } from "@/components/blocks/features-4";
import { Features3 } from "@/components/blocks/features-3";
import {
  ProblemSection,
  TaxIntegrationSection,
  DifferentiatorSection,
  LivingPlanSection,
} from "@/components/financial-planning-content";
import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Financial Planning — United Financial Planning Group",
  description:
    "A comprehensive financial plan built around what matters to you, informed by deep tax expertise most financial planners simply don't have.",
  path: "/services/financial-planning",
});

export default function FinancialPlanningPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <ServiceHero
          eyebrow="Financial Planning"
          title="Financial Planning for Financial Lives That Don't Fit in a Template"
          subtitle="A comprehensive plan built around what matters to you, informed by deep tax expertise most financial planners simply don't have."
          imageUrl="/IMG_0256-1.jpg"
          imageAlt="Family on the beach planning for the future"
        />

        {/* Living Plan */}
        <LivingPlanSection />

        {/* Problem */}
        <ProblemSection />

        {/* Core Planning Areas */}
        <Features4 autoPlayDelay={5500} />

        {/* Tax Integration */}
        <TaxIntegrationSection />

        {/* How We Work */}
        <Features3 />

        {/* Differentiator */}
        <DifferentiatorSection />

        {/* CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
