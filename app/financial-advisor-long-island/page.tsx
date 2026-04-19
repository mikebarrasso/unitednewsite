import { FeatureCards } from "@/components/feature-cards";
import { FeatureHighlight } from "@/components/feature-highlight";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { LocalFAQ } from "@/components/local-faq";
import { LocalHero } from "@/components/local-hero";
import { LocalValueProp } from "@/components/local-value-prop";
import { Breadcrumb } from "@/components/breadcrumb";
import { Features2 } from "@/components/blocks/features-2";
import { Stats } from "@/components/stats";
import { WealthtenderFirmReviews } from "@/components/wealthtender-firm-reviews";
import { TrustedBy } from "@/components/trusted-by";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Financial Advisor on Long Island",
  description:
    "Long Island fee-only financial advisor with CFP® professionals, CPAs, and Enrolled Agents. Integrated financial planning, tax, and investment management.",
  path: "/financial-advisor-long-island",
});

function LongIslandSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "United Financial Planning Group - Long Island",
    url: "https://unitedfpg.com/financial-advisor-long-island",
    logo: "https://unitedfpg.com/logo-black-cropped.png",
    description:
      "Fee-only financial advisory firm serving Long Island families and professionals. CFP® professionals, CPAs, and Enrolled Agents providing integrated financial planning, investment management, and tax services from offices in Hauppauge and Lake Success.",
    telephone: "(631) 234-0871",
    email: "info@unitedfpg.com",
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
        streetAddress: "1979 Marcus Avenue, Suite 210",
        addressLocality: "Lake Success",
        addressRegion: "NY",
        postalCode: "11042",
        addressCountry: "US",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.8176,
      longitude: -73.2151,
    },
    areaServed: [
      { "@type": "City", name: "Hauppauge, NY" },
      { "@type": "City", name: "Lake Success, NY" },
      { "@type": "City", name: "Smithtown, NY" },
      { "@type": "City", name: "Huntington, NY" },
      { "@type": "City", name: "Commack, NY" },
      { "@type": "City", name: "Dix Hills, NY" },
      { "@type": "City", name: "Great Neck, NY" },
      { "@type": "City", name: "Manhasset, NY" },
      { "@type": "City", name: "Garden City, NY" },
      { "@type": "City", name: "Roslyn, NY" },
      { "@type": "AdministrativeArea", name: "Suffolk County, NY" },
      { "@type": "AdministrativeArea", name: "Nassau County, NY" },
    ],
    serviceType: [
      "Financial Planning",
      "Investment Management",
      "Tax Planning",
      "Tax Preparation",
      "Retirement Planning",
      "Equity Compensation Planning",
    ],
    priceRange: "$$",
    parentOrganization: {
      "@type": "Organization",
      name: "United Financial Planning Group",
      url: "https://unitedfpg.com",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://unitedfpg.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Financial Advisor on Long Island",
        item: "https://unitedfpg.com/financial-advisor-long-island",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

const valueProps = [
  {
    title: "Tax planning and investing under one roof",
    description:
      "Most Long Island families use a separate CPA and financial advisor who never talk to each other. Our team includes both, so your investment strategy, Roth conversions, and tax return are all coordinated.",
  },
  {
    title: "Built for NY's tax complexity",
    description:
      "New York State's combined tax burden is among the highest in the country. We build every financial plan around that reality, from SALT deduction strategies to retirement withdrawal sequencing.",
  },
  {
    title: "Two Long Island offices",
    description:
      "Meet with us in Hauppauge (Suffolk County) or Lake Success (Nassau County). We also serve clients virtually across all 50 states.",
  },
  {
    title: "Deep Long Island roots",
    description:
      "Gerry Barrasso, CPA, CFP® began his career in finance in 1991 and built United around Long Island families. We understand this community's financial complexity because we've lived and worked here for decades.",
  },
  {
    title: "Fee-only, always",
    description:
      "We don't earn commissions or sell products. Every recommendation is legally required to be in your best interest. No exceptions.",
  },
];

const localFaqs = [
  {
    question: "Do I need to come to your office on Long Island?",
    answer:
      "Not at all. While we have offices in Hauppauge and Lake Success for in-person meetings, most of our clients work with us through video calls and secure digital tools. We serve clients across Long Island and nationwide.",
  },
  {
    question:
      "How does New York's tax burden affect my financial plan?",
    answer:
      "New York has some of the highest state income taxes and property taxes in the country. Our integrated approach coordinates your investment decisions, Roth conversion strategies, and retirement timing with your full New York State and federal tax picture. Something most advisors miss because they don't do taxes.",
  },
  {
    question:
      "I already have a CPA and a financial advisor. Why would I switch?",
    answer:
      "When your CPA and advisor work in silos, opportunities fall through the cracks: tax-loss harvesting that doesn't happen, Roth conversions timed poorly, charitable giving that isn't structured for maximum benefit. By bringing both disciplines under one roof, we eliminate those gaps.",
  },
  {
    question: "What does 'fee-only' mean?",
    answer:
      "Fee-only means we are compensated exclusively by the fees our clients pay us, never by commissions, referral fees, or product sales. This avoids the conflicts of interest that arise when advisors earn commissions or sell products, and ensures our only incentive is to give you objective advice that serves your best interests.",
  },
  {
    question: "Who are your typical Long Island clients?",
    answer:
      "Business owners navigating S-corp and partnership tax planning, executives with equity compensation, dual-income professional families, and retirees managing RMDs, Social Security timing, and accumulated wealth. The common thread is financial complexity that benefits from having planning, investing, and tax preparation coordinated together.",
  },
];

export default function FinancialAdvisorLongIslandPage(): ReactNode {
  return (
    <>
      <LongIslandSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Locations", href: "/locations" },
            { label: "Long Island, NY" },
          ]}
        />
        <LocalHero
          headline="Fee-Only Financial Advisor on Long Island"
          subtitle="United Financial Planning Group brings financial planning, investment management, tax planning, and tax preparation together under one roof, with offices in Hauppauge and Lake Success serving Long Island families."
          badge="Serving Suffolk & Nassau County"
          locationLabel="CFP® professionals, CPAs, and Enrolled Agents in Hauppauge & Lake Success."
        />
        <TrustedBy />
        <FeatureHighlight />
        <LocalValueProp
          heading="Why Long Island Families Choose United"
          subheading="Long Island's financial landscape is uniquely complex: high property taxes, significant commuter costs, and layered state and local tax obligations. We built our firm to address exactly that."
          items={valueProps}
          insightHeading="The Long Island Tax Advantage"
          insight="For Long Island residents, smart tax planning isn't optional; it's essential. Between New York State income tax, high property taxes, and the SALT deduction cap, the financial decisions that matter most are the ones that reduce your lifetime tax burden. Our team handles your investment strategy, Roth conversions, charitable giving, and tax return preparation, all coordinated to keep more of what you've earned."
        />
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
        <LocalFAQ
          heading="Questions From Long Island Clients"
          faqs={localFaqs}
          idPrefix="li-faq"
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
