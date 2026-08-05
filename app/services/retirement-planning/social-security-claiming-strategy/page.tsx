import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedServices } from "@/components/related-services";
import { ServiceFAQ } from "@/components/service-faq";
import { ServiceCrossLinks } from "@/components/service-cross-links";
import { ServiceSchema } from "@/components/service-schema";
import { SocialSecurityContent } from "@/components/social-security-claiming-content";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Social Security Claiming Strategy",
  description:
    "When you claim Social Security affects your taxes, Medicare premiums, and Roth conversion windows. A coordinated claiming decision considers all three, not just the monthly benefit.",
  path: "/services/retirement-planning/social-security-claiming-strategy",
});

const socialSecurityFaqs = [
  {
    question: "Is there a best age to claim Social Security?",
    answer:
      "There is no single best age that applies to everyone. The right claiming age depends on your health, income needs, tax situation, whether you are married, and your overall retirement plan. What works well for one household may not work well for another with a different set of circumstances.",
  },
  {
    question: "Does delaying Social Security always pay off?",
    answer:
      "Delaying can increase your monthly benefit, but whether that increase pays off over your lifetime depends on factors like your longevity, your spouse's situation, and the opportunity cost of not having that income available sooner. It is a trade-off to evaluate, not a guaranteed outcome.",
  },
  {
    question: "How does Social Security interact with my taxes?",
    answer:
      "Up to 85% of your Social Security benefit may be subject to federal income tax, depending on your combined income. Your claiming age affects your overall income picture in a given year, which in turn affects how much of your benefit is taxable and which tax bracket you land in.",
  },
  {
    question: "Can claiming Social Security affect my Medicare premiums?",
    answer:
      "Yes. Medicare Part B and Part D premiums can include an Income-Related Monthly Adjustment Amount, or IRMAA, surcharge based on your income from two years prior. Coordinating when you claim Social Security with your other income sources can help you understand your IRMAA exposure before it affects your premiums.",
  },
  {
    question: "What is the Social Security earnings test?",
    answer:
      "If you claim Social Security before your full retirement age and continue to work, benefits may be temporarily reduced if your earnings exceed an annual limit set by the Social Security Administration. Amounts withheld under the earnings test are credited back starting at full retirement age, typically resulting in a higher monthly benefit afterward.",
  },
];

export default function SocialSecurityClaimingStrategyPage(): ReactNode {
  return (
    <>
      <ServiceSchema
        name="Social Security Claiming Strategy"
        description="Coordinated Social Security claiming strategy that considers taxes, Medicare premiums, and Roth conversion windows together, not the monthly benefit alone."
        url="/services/retirement-planning/social-security-claiming-strategy"
      />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            {
              label: "Retirement Planning",
              href: "/services/retirement-planning",
            },
            { label: "Social Security Claiming Strategy" },
          ]}
        />
        <ServiceHero
          eyebrow="Retirement Planning"
          title="Social Security Claiming Strategy"
          subtitle="When you claim Social Security affects more than your monthly check. It shapes your taxable income, your Medicare premiums, and how much room you have for Roth conversions. A coordinated claiming decision looks at all three together, not the benefit amount alone."
          imageUrl="/retirement-couple.png"
          imageAlt="Couple reviewing retirement and Social Security paperwork together"
          hasBreadcrumb
        />

        <SocialSecurityContent />

        <RelatedServices
          services={[
            {
              label: "Retirement Planning",
              description:
                "Social Security is one piece of a coordinated retirement income and withdrawal strategy.",
              href: "/services/retirement-planning",
            },
            {
              label: "Tax Planning",
              description:
                "Roth conversions, RMD strategies, and Social Security timing, all built around your tax bracket.",
              href: "/services/tax-planning",
            },
            {
              label: "Investment Management",
              description:
                "Tax-efficient withdrawal strategies that work alongside your Social Security income.",
              href: "/services/investment-management",
            },
          ]}
        />

        <ServiceCrossLinks />

        <ServiceFAQ faqs={socialSecurityFaqs} />
      </main>
      <Footer />
    </>
  );
}
