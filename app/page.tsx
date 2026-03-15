import { FAQ } from "@/components/faq";
import { FeatureCards } from "@/components/feature-cards";
import { FeatureHighlight } from "@/components/feature-highlight";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Features2 } from "@/components/blocks/features-2";
import { Stats } from "@/components/stats";
import { WealthtenderFirmReviews } from "@/components/wealthtender-firm-reviews";
import { TrustedBy } from "@/components/trusted-by";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  absoluteTitle:
    "United Financial Planning Group | Fee-Only Financial Advisor",
  description:
    "United Financial Planning Group is a fee-only advisory firm with CFPs, CPAs, and Enrolled Agents under one roof. Financial planning, investment management, and tax services, integrated for clients nationwide.",
  path: "/",
});

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "United Financial Planning Group",
    url: "https://unitedfpg.com",
    logo: "https://unitedfpg.com/logo-black-cropped.png",
    description:
      "United Financial Planning Group is a fee-only advisory firm with CFPs, CPAs, and Enrolled Agents under one roof. Financial planning, investment management, and tax services, integrated for clients nationwide.",
    telephone: "(631) 234-0871",
    email: "info@unitedfpg.com",
    foundingDate: "2008",
    founder: {
      "@type": "Person",
      name: "Gerry Barrasso",
      jobTitle: "President & Founder",
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "350 Motor Parkway, Suite 105",
        addressLocality: "Hauppauge",
        addressRegion: "NY",
        postalCode: "11788",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "14 Penn Plaza",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10122",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "1979 Marcus Avenue, Suite 210",
        addressLocality: "Lake Success",
        addressRegion: "NY",
        postalCode: "11042",
        addressCountry: "US",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Financial Planning",
      "Investment Management",
      "Tax Planning",
      "Tax Preparation",
      "Retirement Planning",
      "Equity Compensation Planning",
    ],
    knowsAbout: [
      "Fee-only financial planning",
      "Fiduciary investment management",
      "Tax-efficient investing",
      "Roth conversion strategies",
      "Equity compensation planning",
      "Retirement income planning",
    ],
    sameAs: [
      "https://www.linkedin.com/company/united-financial-planning-group",
      "https://wealthtender.com/financial-advisors/united-financial-planning-group",
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "46",
      reviewCount: "46",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomePage(): ReactNode {
  return (
    <>
      <OrganizationSchema />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustedBy />
        <FeatureHighlight />
        <FeatureCards />
        <Features2 />
        <Stats />
        <section className="relative w-full bg-background py-24 sm:py-32 overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground text-center mb-16">
              What Our Clients Say
            </h2>
            <WealthtenderFirmReviews firmId="36778" />
          </div>
        </section>
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
