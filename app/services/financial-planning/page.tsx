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
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedServices } from "@/components/related-services";
import { ServiceFAQ } from "@/components/service-faq";
import { ServiceCrossLinks } from "@/components/service-cross-links";
import { ServiceSchema } from "@/components/service-schema";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Financial Planning",
  description:
    "A comprehensive financial plan built around what matters to you, informed by deep tax expertise most financial planners simply don't have.",
  path: "/services/financial-planning",
});

const financialPlanningFaqs = [
  {
    question: "What does financial planning include?",
    answer:
      "Financial planning can include retirement projections, cash flow planning, tax strategy, investment coordination, insurance review, estate planning coordination, education planning, business-owner planning, and decisions around major life transitions.",
  },
  {
    question: "How is United FPG's financial planning different?",
    answer:
      "United FPG builds financial plans with CFP® professionals, CPAs, and tax professionals working together. That means recommendations are evaluated against your tax picture, portfolio, income needs, and long-term goals rather than treated as separate decisions.",
  },
  {
    question: "Do I need financial planning if I already have investments?",
    answer:
      "Yes, many households benefit from financial planning even if they already have investments. A portfolio answers how money is invested, while a financial plan defines what the money is for, how much risk is appropriate, when income is needed, and how taxes affect each decision.",
  },
  {
    question: "How often should a financial plan be updated?",
    answer:
      "A financial plan should be updated whenever your life, income, tax situation, goals, or market environment changes meaningfully. At United FPG, the plan is treated as a living strategy rather than a one-time document.",
  },
];

export default function FinancialPlanningPage(): ReactNode {
  return (
    <>
      <ServiceSchema
        name="Financial Planning"
        description="Comprehensive financial planning built around your goals, informed by deep tax expertise most financial planners don't have."
        url="/services/financial-planning"
      />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Financial Planning" },
          ]}
        />
        {/* Hero */}
        <ServiceHero
          eyebrow="Financial Planning"
          title="Financial Planning for Financial Lives That Don't Fit in a Template"
          subtitle="A comprehensive plan built around what matters to you, informed by deep tax expertise most financial planners simply don't have."
          imageUrl="/IMG_0256-1.jpg"
          imageAlt="Family on the beach planning for the future"
          hasBreadcrumb
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

        {/* Related Services */}
        <RelatedServices
          services={[
            {
              label: "Tax Planning",
              description:
                "Your financial plan is only as strong as your tax strategy. Our CPAs build both together.",
              href: "/services/tax-planning",
            },
            {
              label: "Investment Management",
              description:
                "Portfolio decisions driven by your financial plan, not the other way around.",
              href: "/services/investment-management",
            },
            {
              label: "Retirement Planning",
              description:
                "Turn your plan into a sustainable retirement income strategy that accounts for taxes.",
              href: "/services/retirement-planning",
            },
          ]}
        />

        <ServiceCrossLinks />

        <ServiceFAQ faqs={financialPlanningFaqs} />

        {/* CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
