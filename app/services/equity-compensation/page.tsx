import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedServices } from "@/components/related-services";
import { ServiceSchema } from "@/components/service-schema";
import {
  EquityCompVisual,
  ProblemSection,
  WhyDifferentSection,
  EquityStrategyGrid,
  IntegrationSection,
  WhoSection,
  EquityCompCTA,
} from "@/components/equity-comp-content";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Equity Compensation Planning",
  description:
    "Equity compensation comes with complex tax timing decisions that most financial advisors won't touch — and most CPAs only see after it's too late. We handle both sides, together.",
  path: "/services/equity-compensation",
});

export default function EquityCompensationPage(): ReactNode {
  return (
    <>
      <ServiceSchema
        name="Equity Compensation Planning"
        description="Stock options and equity compensation tax planning by advisors who handle both the financial planning and tax sides together."
        url="/services/equity-compensation"
      />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Equity Compensation" },
          ]}
        />
        <ServiceHero
          eyebrow="Equity Compensation"
          title="Your Stock Options Are Worth What You Keep After Taxes"
          subtitle="Equity compensation comes with complex tax timing decisions that most financial advisors won't touch — and most CPAs only see after it's too late. We handle both sides, together."
          customVisual={<EquityCompVisual />}
          hasBreadcrumb
        />

        <ProblemSection />

        <WhyDifferentSection />

        <EquityStrategyGrid />

        <IntegrationSection />

        <WhoSection />

        <RelatedServices
          services={[
            {
              label: "Tax Planning",
              description:
                "RSU vesting and option exercises trigger major tax events. We plan around them year-round.",
              href: "/services/tax-planning",
            },
            {
              label: "Investment Management",
              description:
                "Concentrated stock positions and diversification strategies managed with tax in mind.",
              href: "/services/investment-management",
            },
            {
              label: "Financial Planning",
              description:
                "Equity compensation is often the largest wealth-building event of your career. Let's plan for it.",
              href: "/services/financial-planning",
            },
          ]}
        />

        <EquityCompCTA />
      </main>
      <Footer />
    </>
  );
}
