import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedServices } from "@/components/related-services";
import { ServiceSchema } from "@/components/service-schema";
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
  title: "Tax Preparation",
  description:
    "Accurate, thorough personal and business tax returns prepared by CPAs and Enrolled Agents who manage your investments, your financial plan, and your tax strategy year-round.",
  path: "/services/tax-preparation",
});

export default function TaxPreparationPage(): ReactNode {
  return (
    <>
      <ServiceSchema
        name="Tax Preparation"
        description="Personal and business tax returns prepared by CPAs and Enrolled Agents who already manage your investments and financial plan."
        url="/services/tax-preparation"
      />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Tax Preparation" },
          ]}
        />
        <ServiceHero
          eyebrow="Tax Preparation"
          title="Tax Preparation by Professionals Who Already Know Your Financial Story"
          subtitle="Accurate, thorough personal and business tax returns prepared by CPAs and Enrolled Agents who manage your investments, your financial plan, and your tax strategy year-round."
          customVisual={<TaxPrepVisual />}
          hasBreadcrumb
        />

        <ProblemSection />

        <ExpectationsSection />

        <DifferentiatorSection />

        <RelatedServices
          services={[
            {
              label: "Tax Planning",
              description:
                "Tax preparation is reactive. Tax planning is proactive. We do both — and they inform each other.",
              href: "/services/tax-planning",
            },
            {
              label: "Financial Planning",
              description:
                "Your tax return is one of the most important inputs to your financial plan. We connect both.",
              href: "/services/financial-planning",
            },
            {
              label: "Investment Management",
              description:
                "The CPAs who file your return also manage your portfolio — tax-aware investing by design.",
              href: "/services/investment-management",
            },
          ]}
        />

        <TaxPrepCTA />
      </main>
      <Footer />
    </>
  );
}
