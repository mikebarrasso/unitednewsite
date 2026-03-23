import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import {
  OpeningSection,
  ValuePillarsGrid,
  TaxAwareSection,
  ProactiveTaxSection,
  RemainingPillarsSection,
  ClosingSection,
} from "@/components/why-united-content";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Why Choose United?",
  description:
    "Most advisory firms do one thing. We integrate four (financial planning, investment management, tax planning, and tax preparation) under one roof.",
  path: "/why-united",
});

function WhyUnitedPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Why United",
        item: `${siteConfig.url}/why-united`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function WhyUnitedPage(): ReactNode {
  return (
    <>
      <WhyUnitedPageSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "Why United" }]} />
        <ServiceHero
          eyebrow="Why United?"
          title="What's the Value of an Advisor Who Sees Everything?"
          subtitle="Most advisory firms do one thing. We integrate four (financial planning, investment management, tax planning, and tax preparation) under one roof, for one reason: disconnected advice can be costly."
          imageUrl="/240710_AJ8700-scaled%20(1).jpg"
          imageAlt="The United Financial Planning Group team"
          secondaryCtaHref="/services"
          secondaryCtaLabel="Explore Services"
          hasBreadcrumb
        />

        {/* Disclosure */}
        <div className="w-full px-4 sm:px-6 lg:px-8 -mt-12 mb-8">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
              This page is for informational purposes only and is not
              individualized investment, tax, or legal advice. Strategies
              discussed may not be suitable for every person and do not guarantee
              results. Investing involves risk, including the possible loss of
              principal. Tax outcomes depend on individual circumstances and may
              change as tax laws and regulations change.
            </p>
          </div>
        </div>

        <OpeningSection />

        <ValuePillarsGrid />

        <TaxAwareSection />

        <ProactiveTaxSection />

        <RemainingPillarsSection />

        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
