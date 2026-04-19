import { Breadcrumb } from "@/components/breadcrumb";
import {
  BookkeepingSection,
  FeesClosingSection,
  FeesHero,
  ProcessSection,
  SubscriptionSection,
} from "@/components/fees-content";
import { Footer } from "@/components/footer";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Our Fees & Pricing",
  description:
    "Transparent, fee-only pricing with no hidden fees. Comprehensive financial planning, tax planning, and wealth management. See exactly what you'll pay before we start working together.",
  path: "/fees",
});

function FeesPageSchema() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Fees",
        item: `${siteConfig.url}/fees`,
      },
    ],
  };

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "United Financial Planning Group",
    url: `${siteConfig.url}/fees`,
    description:
      "Transparent, fee-only pricing with no hidden fees. Comprehensive financial planning, tax planning, and wealth management. See exactly what you'll pay before we start working together.",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Financial Planning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Financial Plan",
          },
          price: "400",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "400",
            priceCurrency: "USD",
            unitText: "hour",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wealth Management",
          },
          description: "0.50%-1.00% of AUM",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Subscription Advisory",
          },
          description: "Starting at $500/month",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialServiceSchema),
        }}
      />
    </>
  );
}

export default function FeesPage(): ReactNode {
  return (
    <>
      <FeesPageSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "Our Fees" }]} />
        <FeesHero />
        <ProcessSection />
        <SubscriptionSection />
        <BookkeepingSection />
        <section className="relative w-full bg-background py-8 sm:py-12">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border pt-6">
              <p className="text-sm text-foreground/40">
                Fee-only pricing with no commissions or hidden costs.{" "}
                <Link
                  href="/team"
                  className="underline hover:text-foreground/60 transition-colors"
                >
                  Meet the team
                </Link>
              </p>
              <p className="text-xs text-foreground/30">
                Last updated: March 2026
              </p>
            </div>
          </div>
        </section>
        <FeesClosingSection />
      </main>
      <Footer />
    </>
  );
}
