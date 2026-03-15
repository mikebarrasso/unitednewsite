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
  title: "Financial Advisor in NYC",
  description:
    "NYC fee-only financial advisor with CFPs, CPAs, and Enrolled Agents. Integrated financial planning, tax strategy, and investment management for New York City professionals and families.",
  path: "/financial-advisor-nyc",
});

function NYCSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "United Financial Planning Group - New York City",
    url: "https://unitedfpg.com/financial-advisor-nyc",
    logo: "https://unitedfpg.com/logo-black-cropped.png",
    description:
      "Fee-only financial advisory firm serving New York City. CFPs, CPAs, and Enrolled Agents providing integrated financial planning, investment management, and tax services across all five boroughs and the NYC metro area.",
    telephone: "(631) 234-0871",
    email: "info@unitedfpg.com",
    address: [
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7505,
      longitude: -73.9934,
    },
    areaServed: [
      { "@type": "City", name: "New York, NY" },
      { "@type": "AdministrativeArea", name: "Manhattan" },
      { "@type": "AdministrativeArea", name: "Brooklyn" },
      { "@type": "AdministrativeArea", name: "Queens" },
      { "@type": "AdministrativeArea", name: "Bronx" },
      { "@type": "AdministrativeArea", name: "Staten Island" },
      { "@type": "City", name: "Hoboken, NJ" },
      { "@type": "City", name: "Jersey City, NJ" },
      { "@type": "AdministrativeArea", name: "Westchester County, NY" },
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
        name: "Financial Advisor in NYC",
        item: "https://unitedfpg.com/financial-advisor-nyc",
      },
    ],
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
    </>
  );
}

const valueProps = [
  {
    title: "Integrated tax and financial planning",
    description:
      "Most NYC advisors focus on investments and refer out for tax. We built our firm differently: CFPs and CPAs working side-by-side so your portfolio, Roth conversions, and tax return are all coordinated under one roof.",
  },
  {
    title: "Designed for New York's tax complexity",
    description:
      "Federal, state, and city income taxes create a combined burden that can exceed 50% for high earners. We build every strategy (from equity compensation timing to retirement withdrawals) around that reality.",
  },
  {
    title: "Equity compensation expertise",
    description:
      "ISOs, RSUs, NSOs, ESPPs, and deferred compensation plans require precise tax timing. Our team models exercise strategies and manages AMT exposure as part of your financial plan.",
  },
  {
    title: "Offices in Manhattan and Long Island",
    description:
      "Meet in Midtown at 14 Penn Plaza or at our Nassau County office in Lake Success. We also serve clients virtually across all five boroughs, the tri-state area, and nationwide.",
  },
  {
    title: "Multi-state tax specialists",
    description:
      "Living in NJ or CT and working in NYC? We handle multi-state filing, income allocation, and cross-state tax credits as part of our integrated approach.",
  },
];

const localFaqs = [
  {
    question: "Do you work with clients outside Manhattan?",
    answer:
      "Yes. We serve clients across all five boroughs, the tri-state area, and nationwide. Our Manhattan office at 14 Penn Plaza is available for in-person meetings, but most of our work is done through video calls and secure digital tools. Whether you're in Brooklyn, Queens, Hoboken, or Westchester, we provide the same integrated planning, investment management, and tax preparation.",
  },
  {
    question: "How do New York taxes affect my retirement planning?",
    answer:
      "New York's high tax rates make retirement planning decisions especially consequential. Roth conversion timing, Social Security claiming strategy, pension distribution elections, and withdrawal sequencing all interact with your state and city tax burden. Our team models these scenarios together because we manage your investments and prepare your tax returns, so the recommendations aren't theoretical, they're executed.",
  },
  {
    question: "I have stock options from my company. Can you help?",
    answer:
      "Equity compensation is one of our core specialties. We work with employees and executives at public and pre-IPO companies across NYC's finance, tech, media, and professional services sectors. Because we handle both financial planning and tax preparation, we coordinate exercise timing, AMT exposure, and concentrated stock management with your full financial and tax picture.",
  },
  {
    question: "What makes you different from a big bank's wealth management division?",
    answer:
      "Big banks and wirehouses typically earn revenue through commissions and proprietary products. As a fee-only firm, we have no products to sell and no commissions to earn. Every recommendation is legally required to be in your best interest. Additionally, most large firms don't do tax preparation. We do, which means your investment and planning decisions are always coordinated with your actual tax situation.",
  },
  {
    question: "What does a fee-only fiduciary mean?",
    answer:
      "Fee-only means we are compensated exclusively by the fees our clients pay us, no commissions, referral fees, or product sales. Fiduciary means we are legally obligated to act in your best interest at all times. Combined, this means you can trust that every recommendation we make is designed to benefit you, not us.",
  },
];

export default function FinancialAdvisorNYCPage(): ReactNode {
  return (
    <>
      <NYCSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Locations", href: "/locations" },
            { label: "New York City" },
          ]}
        />
        <LocalHero
          headline="Fee-Only Financial Advisor in New York City"
          subtitle="United Financial Planning Group brings financial planning, investment management, tax planning, and tax preparation together under one roof, serving professionals and families across all five boroughs and the greater NYC metro area."
          badge="NYC Metro · Manhattan & Long Island Offices"
          locationLabel="CFPs, CPAs, and Enrolled Agents serving the New York City metro area."
        />
        <TrustedBy />
        <FeatureHighlight />
        <LocalValueProp
          heading="Why NYC Professionals Choose United"
          subheading="New York City is one of the most financially complex environments in the world. Between triple-layer taxation, equity compensation, real estate decisions, and the demands of high-earning households, you need advisors who coordinate everything."
          items={valueProps}
          insightHeading="The NYC Financial Planning Difference"
          insight="For New York City residents, the gap between good and great financial planning often comes down to tax coordination. When your advisor doesn't talk to your CPA (or worse, doesn't understand tax at all), you're leaving money on the table. We close that gap by keeping financial planning, investment management, tax planning, and tax preparation all under one roof. One team. One strategy. No silos."
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
          heading="Questions From NYC Clients"
          faqs={localFaqs}
          idPrefix="nyc-faq"
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
