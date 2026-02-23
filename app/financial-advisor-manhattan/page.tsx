import { FeatureCards } from "@/components/feature-cards";
import { FeatureHighlight } from "@/components/feature-highlight";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { LocalFAQ } from "@/components/local-faq";
import { LocalHero } from "@/components/local-hero";
import { LocalValueProp } from "@/components/local-value-prop";
import { Features2 } from "@/components/blocks/features-2";
import { Stats } from "@/components/stats";
import { WealthtenderFirmReviews } from "@/components/wealthtender-firm-reviews";
import { TrustedBy } from "@/components/trusted-by";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Fee-Only Financial Advisor in Manhattan, NYC",
  description:
    "Manhattan fee-only financial advisor with CFPs and CPAs under one roof. Equity compensation planning, tax strategy, and investment management for NYC professionals at 14 Penn Plaza.",
  path: "/financial-advisor-manhattan",
});

function ManhattanSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "United Financial Planning Group — Manhattan",
    url: "https://unitedfpg.com/financial-advisor-manhattan",
    logo: "https://unitedfpg.com/logo-black-cropped.png",
    description:
      "Fee-only financial advisory firm in Midtown Manhattan. CFPs and CPAs providing integrated financial planning, equity compensation planning, investment management, and tax services for NYC professionals.",
    telephone: "(631) 234-0871",
    email: "info@unitedfpg.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14 Penn Plaza",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10122",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7505,
      longitude: -73.9934,
    },
    areaServed: [
      { "@type": "City", name: "Manhattan, NY" },
      { "@type": "City", name: "New York, NY" },
      { "@type": "AdministrativeArea", name: "Midtown" },
      { "@type": "AdministrativeArea", name: "Chelsea" },
      { "@type": "AdministrativeArea", name: "Financial District" },
      { "@type": "AdministrativeArea", name: "Upper West Side" },
      { "@type": "AdministrativeArea", name: "Upper East Side" },
    ],
    serviceType: [
      "Equity Compensation Planning",
      "Financial Planning",
      "Investment Management",
      "Tax Planning",
      "Tax Preparation",
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
        name: "Financial Advisor in Manhattan",
        item: "https://unitedfpg.com/financial-advisor-manhattan",
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
    title: "Built for NYC's triple tax burden",
    description:
      "Manhattan residents face federal, New York State, and New York City income taxes. Combined marginal rates can exceed 50% for high earners. Every financial decision we make accounts for all three layers.",
  },
  {
    title: "Equity compensation specialists",
    description:
      "ISOs, NSOs, RSUs, ESPPs, and deferred comp require complex tax timing decisions. Because we handle both the financial planning and tax preparation, we model exercise strategies, manage AMT exposure, and coordinate equity decisions with your full financial picture.",
  },
  {
    title: "Your CPA and advisor in one team",
    description:
      "Most Manhattan professionals use separate advisors and CPAs who make decisions in silos — costing real money. Our CFPs and CPAs work side-by-side so your investments, tax strategy, and financial plan are always in sync.",
  },
  {
    title: "Steps from Penn Station",
    description:
      "Our Midtown office at 14 Penn Plaza makes in-person meetings easy for professionals across the city. We also serve clients virtually nationwide.",
  },
  {
    title: "Fee-only, fiduciary, always",
    description:
      "No commissions, no product sales. Every recommendation is legally required to be in your best interest.",
  },
];

const localFaqs = [
  {
    question: "How does the NYC tax situation affect my financial plan?",
    answer:
      "New York City residents face a triple layer of taxation: federal, New York State, and New York City income tax. Combined marginal rates can exceed 50% for high earners. That makes proactive tax planning — Roth conversions, charitable giving strategies, equity compensation timing, and estimated tax optimization — not just valuable, but critical. Our team handles both the planning and the return, so nothing falls through the cracks.",
  },
  {
    question: "Do you specialize in stock options and RSUs?",
    answer:
      "Yes — equity compensation is one of our core strengths. We work with executives and employees at public and pre-IPO companies who hold ISOs, NSOs, RSUs, and ESPPs. Because we manage both the financial planning and tax preparation, we can model exercise strategies, manage AMT exposure, build 10b5-1 plans, and coordinate equity decisions with your overall financial and tax plan.",
  },
  {
    question: "I work in Manhattan but live in another state. Can you help?",
    answer:
      "Absolutely. Multi-state tax situations are common among our clients. Whether you live in New Jersey, Connecticut, or elsewhere and commute to Manhattan, we handle the complexities of multi-state filing, allocation of income, and cross-state tax credits as part of our integrated planning and tax preparation process.",
  },
  {
    question: "How is United different from a typical wealth management firm?",
    answer:
      "Most firms focus on investment management and refer out for tax work. We built our firm with CFPs, CPAs, and Enrolled Agents under one roof. Your financial plan, investment strategy, tax plan, and tax return are all created and managed by people who talk to each other daily. For Manhattan professionals with complex finances, that coordination can save thousands of dollars annually.",
  },
  {
    question: "Do I need to visit your Manhattan office?",
    answer:
      "Not at all. While our 14 Penn Plaza office is available for in-person meetings, most of our work is done through video calls and secure digital tools. We serve clients across Manhattan and nationwide with the same integrated approach.",
  },
];

export default function FinancialAdvisorManhattanPage(): ReactNode {
  return (
    <>
      <ManhattanSchema />
      <main id="main-content" className="flex-1">
        <LocalHero
          headline="Fee-Only Financial Advisor in Manhattan"
          subtitle="United Financial Planning Group brings financial planning, investment management, tax planning, and tax preparation together under one roof — built for the financial complexity of working and living in New York City."
          badge="Midtown · 14 Penn Plaza"
          locationLabel="CFPs and CPAs in Midtown Manhattan, steps from Penn Station."
        />
        <TrustedBy />
        <FeatureHighlight />
        <LocalValueProp
          heading="Why Manhattan Professionals Choose United"
          subheading="Manhattan is one of the most financially complex environments in the world. Between triple-layer taxation, concentrated stock positions, and the demands of dual-income households, you need advisors who see the full picture."
          items={valueProps}
          insightHeading="The NYC Tax Reality"
          insight="New York City residents can face combined marginal tax rates exceeding 50%. That makes every financial decision — when to exercise stock options, whether to convert to Roth, how to structure charitable giving, when to take capital gains — a tax decision. Our team doesn't just build your financial plan and manage your investments. We prepare your tax return too. That means every strategy we recommend is built with full knowledge of your tax picture, not assumptions about it."
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
          heading="Questions From Manhattan Clients"
          faqs={localFaqs}
          idPrefix="manhattan-faq"
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
