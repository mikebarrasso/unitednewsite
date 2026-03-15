import { Breadcrumb } from "@/components/breadcrumb";
import {
  BookkeepingSection,
  FeesClosingSection,
  FeesHero,
  ProcessSection,
  SubscriptionSection,
} from "@/components/fees-content";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Our Fees & Pricing",
  description:
    "Transparent, fee-only pricing with no hidden fees. Comprehensive financial planning, tax planning, and wealth management. See exactly what you'll pay before we start working together.",
  path: "/fees",
});

export default function FeesPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "Our Fees" }]} />
        <FeesHero />
        <ProcessSection />
        <SubscriptionSection />
        <BookkeepingSection />
        <FeesClosingSection />
      </main>
      <Footer />
    </>
  );
}
