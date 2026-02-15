import Comparison1 from "@/components/blocks/comparison-1";
import { Footer } from "@/components/footer";
import { PortfolioVisual } from "@/components/portfolio-visual";
import {
  ProblemSection,
  PhilosophySection,
  TaxAwareGrid,
  DifferentiatorSection,
  InvestmentCTA,
} from "@/components/investment-management-content";
import { ServiceHero } from "@/components/service-hero";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Investment Management — United Financial Planning Group",
  description:
    "Low-cost, tax-efficient portfolio management built on index investing, guided by your financial plan and tax situation — because the best-performing portfolio is the one you actually keep after taxes.",
  path: "/services/investment-management",
});

export default function InvestmentManagementPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <ServiceHero
          eyebrow="Investment Management"
          title="Investment Management That Answers to Your Financial Plan — Not the Other Way Around"
          subtitle="Low-cost, tax-efficient portfolio management built on index investing, guided by your financial plan and tax situation — because the best-performing portfolio is the one you actually keep after taxes."
          customVisual={<PortfolioVisual />}
        />

        {/* Problem */}
        <ProblemSection />

        {/* Fee Structure Comparison */}
        <Comparison1 />

        {/* Investment Philosophy */}
        <PhilosophySection />

        {/* Tax-Aware Investing Grid */}
        <TaxAwareGrid />

        {/* Differentiator */}
        <DifferentiatorSection />

        {/* CTA */}
        <InvestmentCTA />
      </main>
      <Footer />
    </>
  );
}
