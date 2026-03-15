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
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedServices } from "@/components/related-services";
import { ServiceCrossLinks } from "@/components/service-cross-links";
import { ServiceSchema } from "@/components/service-schema";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Investment Management",
  description:
    "Low-cost, tax-efficient portfolio management built on index investing, guided by your financial plan and tax situation, because the most effective portfolio is the one you actually keep after taxes.",
  path: "/services/investment-management",
});

export default function InvestmentManagementPage(): ReactNode {
  return (
    <>
      <ServiceSchema
        name="Investment Management"
        description="Tax-efficient portfolio management built on index investing, guided by your financial plan and tax situation."
        url="/services/investment-management"
      />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Investment Management" },
          ]}
        />
        {/* Hero */}
        <ServiceHero
          eyebrow="Investment Management"
          title="Investment Management That Answers to Your Financial Plan, Not the Other Way Around"
          subtitle="Low-cost, tax-efficient portfolio management built on index investing, guided by your financial plan and tax situation, because the most effective portfolio is the one you actually keep after taxes."
          customVisual={<PortfolioVisual />}
          hasBreadcrumb
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

        {/* Related Services */}
        <RelatedServices
          services={[
            {
              label: "Tax Planning",
              description:
                "Tax-loss harvesting, asset location, and Roth conversion strategies, managed alongside your portfolio.",
              href: "/services/tax-planning",
            },
            {
              label: "Financial Planning",
              description:
                "Portfolio decisions should flow from your plan, not the other way around. We do both.",
              href: "/services/financial-planning",
            },
            {
              label: "Equity Compensation",
              description:
                "RSUs, ISOs, and NQSOs require specialized investment and tax coordination, handled in-house.",
              href: "/services/equity-compensation",
            },
          ]}
        />

        <ServiceCrossLinks />

        {/* CTA */}
        <InvestmentCTA />
      </main>
      <Footer />
    </>
  );
}
