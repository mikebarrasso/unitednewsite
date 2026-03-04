import { Features5 } from "@/components/blocks/features-5";
import Stats2 from "@/components/blocks/stats-2";
import { Footer } from "@/components/footer";
import {
  ProblemSection,
  ApproachSection,
  DifferentiatorSection,
  RetirementCTA,
} from "@/components/retirement-planning-content";
import { ServiceHero } from "@/components/service-hero";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedServices } from "@/components/related-services";
import { ServiceCrossLinks } from "@/components/service-cross-links";
import { ServiceSchema } from "@/components/service-schema";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Retirement Planning",
  description:
    "Most retirement plans ignore the single biggest variable: taxes. Ours is built around it — because the difference between a good retirement and a great one is often what you keep, not what you earn.",
  path: "/services/retirement-planning",
});

export default function RetirementPlanningPage(): ReactNode {
  return (
    <>
      <ServiceSchema
        name="Retirement Planning"
        description="Retirement planning built around taxes — because the difference between a good retirement and a great one is what you keep."
        url="/services/retirement-planning"
      />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Retirement Planning" },
          ]}
        />
        <ServiceHero
          eyebrow="Retirement Planning"
          title="You've Spent Decades Building Wealth. The Next Chapter Is About Making It Last."
          subtitle="Most retirement plans ignore the single biggest variable: taxes. Ours is built around it — because the difference between a good retirement and a great one is often what you keep, not what you earn."
          imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1740&auto=format&fit=crop"
          imageAlt="Couple reviewing retirement plan together"
          hasBreadcrumb
        />

        <ProblemSection />

        <Stats2 />

        <ApproachSection />

        <Features5 />

        <DifferentiatorSection />

        <RelatedServices
          services={[
            {
              label: "Tax Planning",
              description:
                "Roth conversions, RMD strategies, and Social Security timing — all built around your tax bracket.",
              href: "/services/tax-planning",
            },
            {
              label: "Financial Planning",
              description:
                "Your retirement plan is one piece of a comprehensive financial roadmap. We build both together.",
              href: "/services/financial-planning",
            },
            {
              label: "Investment Management",
              description:
                "Tax-efficient drawdown strategies that make your retirement portfolio last longer.",
              href: "/services/investment-management",
            },
          ]}
        />

        <ServiceCrossLinks />

        <RetirementCTA />
      </main>
      <Footer />
    </>
  );
}
