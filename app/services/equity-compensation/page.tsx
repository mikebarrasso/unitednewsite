import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
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
  title:
    "Stock Options & Equity Compensation Planning — United Financial Planning Group",
  description:
    "Equity compensation comes with complex tax timing decisions that most financial advisors won't touch — and most CPAs only see after it's too late. We handle both sides, together.",
  path: "/services/equity-compensation",
});

export default function EquityCompensationPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <ServiceHero
          eyebrow="Equity Compensation"
          title="Your Stock Options Are Worth What You Keep After Taxes"
          subtitle="Equity compensation comes with complex tax timing decisions that most financial advisors won't touch — and most CPAs only see after it's too late. We handle both sides, together."
          customVisual={<EquityCompVisual />}
        />

        <ProblemSection />

        <WhyDifferentSection />

        <EquityStrategyGrid />

        <IntegrationSection />

        <WhoSection />

        <EquityCompCTA />
      </main>
      <Footer />
    </>
  );
}
