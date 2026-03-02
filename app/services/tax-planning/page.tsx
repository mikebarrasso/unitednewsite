import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { TaxPlanningVisual } from "@/components/tax-planning-visual";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedServices } from "@/components/related-services";
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
    "Proactive tax strategies to reduce your lifetime tax burden — not just this year's bill. Built by CPAs and CFPs under one roof.",
  path: "/services/tax-planning",
});

export default function TaxPlanningPage(): ReactNode {
  return (
    <>
      <ServiceSchema
        name="Tax Planning"
        description="Proactive tax strategies to reduce your lifetime tax burden, built by CPAs and CFPs who manage your full financial picture."
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
          subtitle="Proactive, year-round tax strategies designed to reduce your lifetime tax burden — not just this year's bill. Built by CPAs and CFPs who manage your investments, your financial plan, and your tax return under one roof."
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
                "RSU and stock option tax planning requires year-round coordination — we specialize in both.",
              href: "/services/equity-compensation",
            },
          ]}
        />

        <TaxPlanningCTA />
      </main>
      <Footer />
    </>
  );
}
