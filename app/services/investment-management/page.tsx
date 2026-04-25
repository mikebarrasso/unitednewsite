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
import { ServiceFAQ } from "@/components/service-faq";
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

const investmentManagementFaqs = [
  {
    question: "What is investment management?",
    answer:
      "Investment management is the ongoing process of designing, implementing, monitoring, and adjusting a portfolio based on your goals, time horizon, risk tolerance, income needs, tax situation, and broader financial plan.",
  },
  {
    question: "How does United FPG approach investment management?",
    answer:
      "United FPG uses low-cost, globally diversified portfolios guided by each client's financial plan and tax situation. Portfolio decisions are coordinated with planning and tax considerations instead of being managed in isolation.",
  },
  {
    question: "Why does tax efficiency matter in investment management?",
    answer:
      "Tax efficiency matters because pre-tax return is not the same as spendable wealth. Asset location, tax-loss harvesting, rebalancing, capital gains timing, and withdrawal sequencing can all affect what you keep after taxes.",
  },
  {
    question: "Do you use active funds or index investing?",
    answer:
      "United FPG emphasizes disciplined, low-cost index investing rather than trying to time markets or rely on expensive active management. The portfolio is built to serve the client's plan, not to chase short-term performance.",
  },
];

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

        <ServiceFAQ faqs={investmentManagementFaqs} />

        {/* CTA */}
        <InvestmentCTA />
      </main>
      <Footer />
    </>
  );
}
