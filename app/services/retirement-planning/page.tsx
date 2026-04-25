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
import { ServiceFAQ } from "@/components/service-faq";
import { ServiceCrossLinks } from "@/components/service-cross-links";
import { ServiceSchema } from "@/components/service-schema";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Retirement Planning",
  description:
    "Most retirement plans ignore the single biggest variable: taxes. Ours is built around it, because the difference between a good retirement and a great one is often what you keep, not what you earn.",
  path: "/services/retirement-planning",
});

const retirementPlanningFaqs = [
  {
    question: "What does retirement planning include at United FPG?",
    answer:
      "Retirement planning at United FPG coordinates your income plan, investment portfolio, tax strategy, Social Security timing, Medicare considerations, and withdrawal sequence so each decision is evaluated as part of the same retirement strategy.",
  },
  {
    question: "How do taxes affect retirement planning?",
    answer:
      "Taxes can affect which accounts you draw from, when Roth conversions make sense, how Social Security is taxed, whether Medicare IRMAA surcharges apply, and how long your portfolio may last. We model those tax consequences before recommending a retirement income strategy.",
  },
  {
    question: "When should I start retirement planning?",
    answer:
      "Retirement planning is most useful before you retire, especially in the five to ten years leading up to retirement. That window can create opportunities to adjust savings, manage tax brackets, evaluate Roth conversions, and build a withdrawal plan before income changes.",
  },
  {
    question: "Do you help with Social Security and withdrawal sequencing?",
    answer:
      "Yes. We evaluate Social Security timing, pension income, required minimum distributions, taxable accounts, tax-deferred accounts, and Roth accounts together so withdrawals are coordinated with your broader income and tax picture.",
  },
];

export default function RetirementPlanningPage(): ReactNode {
  return (
    <>
      <ServiceSchema
        name="Retirement Planning"
        description="Retirement planning built around taxes, because the difference between a good retirement and a great one is what you keep."
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
          subtitle="Most retirement plans ignore the single biggest variable: taxes. Ours is built around it, because the difference between a good retirement and a great one is often what you keep, not what you earn."
          imageUrl="/retirees.png"
          imageAlt="Retired couple walking on the beach at sunset"
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
                "Roth conversions, RMD strategies, and Social Security timing, all built around your tax bracket.",
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

        <ServiceFAQ faqs={retirementPlanningFaqs} />

        <RetirementCTA />
      </main>
      <Footer />
    </>
  );
}
