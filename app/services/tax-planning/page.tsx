import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { TaxPlanningVisual } from "@/components/tax-planning-visual";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedServices } from "@/components/related-services";
import { ServiceFAQ } from "@/components/service-faq";
import { ServiceCrossLinks } from "@/components/service-cross-links";
import { ServiceSchema } from "@/components/service-schema";
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
  title: "Tax Planning",
  description:
    "Proactive tax strategies to reduce your lifetime tax burden, not just this year's bill. Built by CPAs and CFP® professionals under one roof.",
  path: "/services/tax-planning",
});

const taxPlanningFaqs = [
  {
    question: "What is tax planning?",
    answer:
      "Tax planning is the process of making financial decisions with their tax consequences in mind before those decisions are locked in. It can include Roth conversion planning, capital gains management, charitable giving strategy, equity compensation planning, estimated tax coordination, and retirement withdrawal sequencing.",
  },
  {
    question: "How is tax planning different from tax preparation?",
    answer:
      "Tax preparation reports what already happened and files the required return. Tax planning happens before and during the year, when there is still time to change timing, income, deductions, investment sales, or retirement distributions in a way that may reduce lifetime tax cost.",
  },
  {
    question: "Who benefits from proactive tax planning?",
    answer:
      "Proactive tax planning is especially useful for retirees, business owners, high-income households, people with equity compensation, families considering Roth conversions, and anyone whose investment or financial planning decisions can create meaningful tax consequences.",
  },
  {
    question: "Does United FPG coordinate tax planning with investments?",
    answer:
      "Yes. United FPG coordinates tax planning with investment management, financial planning, and tax preparation so portfolio trades, charitable gifts, Roth conversions, and withdrawal decisions are evaluated against the same tax picture.",
  },
];

export default function TaxPlanningPage(): ReactNode {
  return (
    <>
      <ServiceSchema
        name="Tax Planning"
        description="Proactive tax strategies to reduce your lifetime tax burden, built by CPAs and CFP® professionals who manage your full financial picture."
        url="/services/tax-planning"
      />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Tax Planning" },
          ]}
        />
        <ServiceHero
          eyebrow="Tax Planning"
          title="Tax Planning That Goes Far Beyond April 15th"
          subtitle="Proactive, year-round tax strategies designed to reduce your lifetime tax burden, not just this year's bill. Built by CPAs and CFP® professionals who manage your investments, your financial plan, and your tax return under one roof."
          customVisual={<TaxPlanningVisual />}
          hasBreadcrumb
        />

        <ProblemSection />

        <PrepVsPlanningSection />

        <TaxStrategyGrid />

        <ImplementationSection />

        <YearRoundSection />

        <RelatedServices
          services={[
            {
              label: "Tax Preparation",
              description:
                "Your tax plan is only as good as your return. Our CPAs file every return they plan.",
              href: "/services/tax-preparation",
            },
            {
              label: "Investment Management",
              description:
                "Tax-efficient investing and portfolio rebalancing managed alongside your tax strategy.",
              href: "/services/investment-management",
            },
            {
              label: "Equity Compensation",
              description:
                "RSU and stock option tax planning requires year-round coordination. We specialize in both.",
              href: "/services/equity-compensation",
            },
          ]}
        />

        <ServiceCrossLinks />

        <ServiceFAQ faqs={taxPlanningFaqs} />

        <TaxPlanningCTA />
      </main>
      <Footer />
    </>
  );
}
