import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedServices } from "@/components/related-services";
import { ServiceCrossLinks } from "@/components/service-cross-links";
import { ServiceFAQ } from "@/components/service-faq";
import { ServiceSchema } from "@/components/service-schema";
import {
  EquityCompVisual,
  ProblemSection,
  WhyDifferentSection,
  EquityStrategyGrid,
  IntegrationSection,
  ExecutiveSection,
  StartupSection,
  WhoSection,
  EquityCompCTA,
} from "@/components/equity-comp-content";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Equity Compensation Planning",
  description:
    "Equity compensation comes with complex tax timing decisions that most financial advisors won't touch. Most CPAs only see them after it's too late. We handle both sides, together.",
  path: "/services/equity-compensation",
});

const equityCompFaqs = [
  {
    question:
      "What is the difference between ISOs and NSOs for tax purposes?",
    answer:
      "ISOs (incentive stock options) and NSOs (non-qualified stock options) are taxed differently. ISOs may qualify for preferential long-term capital gains treatment if holding-period requirements are met, but exercising ISOs can trigger the alternative minimum tax (AMT). NSOs are taxed as ordinary income at exercise based on the spread between the strike price and fair market value, with no AMT implications. The right approach depends on your individual tax situation, grant terms, and overall financial picture.",
  },
  {
    question: "When are RSUs taxed, and how should I plan for it?",
    answer:
      "RSUs (restricted stock units) are generally taxed as ordinary income at vesting, based on the fair market value of the shares on the vesting date. Unlike stock options, there is no exercise decision with RSUs. Planning typically involves coordinating vesting schedules with your other income, evaluating whether to sell shares at vesting or hold them, and considering the concentration risk that comes with holding a large position in a single company's stock. Tax outcomes vary by individual circumstances.",
  },
  {
    question:
      "How does the alternative minimum tax (AMT) affect ISO exercises?",
    answer:
      "Exercising ISOs can trigger AMT because the spread between the exercise price and fair market value at exercise is included as an AMT preference item, even though it is not taxed for regular income tax purposes until the shares are sold. Whether AMT actually applies depends on your overall income, the size of the ISO spread, and other AMT preferences. Coordinated planning may help manage AMT exposure through timing of exercises across tax years, but outcomes depend on individual tax circumstances.",
  },
  {
    question: "What is a concentrated stock position, and why does it matter?",
    answer:
      "A concentrated stock position occurs when a significant portion of your net worth is tied to a single company's stock, which is common for executives and employees with equity compensation. Concentration introduces risk because the value of your holdings depends on one company's performance. Strategies to address concentration may include systematic selling, charitable giving, or exchange funds, each with different tax and timing trade-offs. No strategy eliminates risk entirely, and the right approach depends on your goals, tax situation, and risk tolerance.",
  },
  {
    question: "How does equity compensation fit into a coordinated financial plan?",
    answer:
      "Equity compensation decisions rarely exist in isolation. The timing of option exercises, RSU vesting, and stock sales can affect your tax bracket, retirement contributions, cash flow, and investment diversification. A coordinated plan evaluates equity compensation alongside your overall tax strategy, investment portfolio, retirement timeline, and estate planning goals so that each decision is considered as part of the same financial picture.",
  },
];

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
          subtitle="Equity compensation comes with complex tax timing decisions that most financial advisors won't touch. Most CPAs only see them after it's too late. We handle both sides, together."
          customVisual={<EquityCompVisual />}
          hasBreadcrumb
        />

        <ProblemSection />

        <WhyDifferentSection />

        <EquityStrategyGrid />

        <IntegrationSection />

        <ExecutiveSection />

        <StartupSection />

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

        <ServiceCrossLinks />

        <ServiceFAQ
          faqs={equityCompFaqs}
          heading="Equity Compensation Questions"
        />

        <EquityCompCTA />
      </main>
      <Footer />
    </>
  );
}
