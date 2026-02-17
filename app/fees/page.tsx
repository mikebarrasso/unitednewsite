import {
  BookkeepingSection,
  FeesClosingSection,
  FeesHeroVisual,
  ProcessSection,
  SubscriptionSection,
} from "@/components/fees-content";
import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Our Fees — United Financial Planning Group",
  description:
    "Transparent, fee-only pricing with no hidden fees. Comprehensive financial planning, tax planning, and wealth management — see exactly what you'll pay before we start working together.",
  path: "/fees",
});

export default function FeesPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <ServiceHero
          eyebrow="Our Fees"
          title="Transparent Pricing. No Surprises. No Hidden Fees."
          subtitle="You should know exactly what you're paying and exactly what you're getting — before we start working together. Here's how it works."
          customVisual={<FeesHeroVisual />}
          primaryCtaLabel="Schedule Your Introductory Call"
          secondaryCtaHref="/services"
          secondaryCtaLabel="Explore Services"
        />

        <ProcessSection />
        <SubscriptionSection />
        <BookkeepingSection />
        <FeesClosingSection />
      </main>
      <Footer />
    </>
  );
}
