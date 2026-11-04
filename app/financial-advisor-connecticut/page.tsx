import { FeatureCards } from "@/components/feature-cards";
import { FeatureHighlight } from "@/components/feature-highlight";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { LocalFAQ } from "@/components/local-faq";
import { LocalHero } from "@/components/local-hero";
import { LocalValueProp } from "@/components/local-value-prop";
import { Breadcrumb } from "@/components/breadcrumb";
import { WealthtenderFirmReviews } from "@/components/wealthtender-firm-reviews";
import { CT_HUB_PATH, ctTowns } from "@/lib/ct-towns";
import { createMetadata } from "@/lib/metadata";
import { ArrowRight, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Financial Advisor for Connecticut Residents",
  description:
    "Fee-only financial planning for Fairfield County, CT residents who work in New York or hold equity compensation. NY/CT dual-state tax planning from CFP® professionals and CPAs.",
  path: CT_HUB_PATH,
});

const baseUrl = "https://unitedfpg.com";

const hubFaqs = [
  {
    question:
      "I live in Connecticut and work in New York. Do I file in both states?",
    answer:
      "Often, yes. Connecticut generally taxes residents on income from all sources, and New York generally taxes nonresidents on income from New York sources, which commonly includes wages for work performed in New York. That usually means a New York nonresident return and a Connecticut resident return. Your situation depends on where you work and what other income you have, so it is worth confirming with a tax professional each year.",
  },
  {
    question: "Do I need to come to a New York office?",
    answer:
      "No. Many planning conversations happen by video call with secure document sharing. We can also meet in person at our offices in Hauppauge, Lake Success, and Manhattan when that is useful.",
  },
  {
    question: "What does fee-only mean?",
    answer:
      "Fee-only means we are paid by the fees our clients pay us, not by commissions or product sales. See our fees page for how the arrangement works.",
  },
  {
    question: "Which Connecticut towns do these pages cover?",
    answer:
      "The pages below cover Greenwich, Stamford, Darien, New Canaan, Westport, and Norwalk in Fairfield County. If your town is not listed, the same planning approach applies, and you are welcome to start a conversation.",
  },
];

const valueProps = [
  {
    title: "Two states, one coordinated plan",
    description:
      "Many Connecticut residents who work in New York file in both states. We estimate your New York nonresident and Connecticut resident taxes together, so withholding and estimated payments reflect both.",
  },
  {
    title: "Equity compensation planning",
    description:
      "RSUs, stock options, and private company equity each create income at specific points. We model the timing and the trade-offs before you act. Outcomes depend on your grant terms and individual circumstances.",
  },
  {
    title: "Planning, investing, and tax under one team",
    description:
      "CFP® professionals, CPAs, and Enrolled Agents work side by side, so your plan, your investments, and your tax return stay consistent. We are a fee-only fiduciary.",
  },
  {
    title: "Meet by video or in New York",
    description:
      "Planning conversations can happen by video call. In-person meetings are available at our New York offices.",
  },
];

function ConnecticutSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "United Financial Planning Group - Connecticut",
    url: `${baseUrl}${CT_HUB_PATH}`,
    logo: `${baseUrl}/logo-black-cropped.png`,
    description:
      "Fee-only financial planning for Connecticut residents who work in New York or hold equity compensation. CFP® professionals, CPAs, and Enrolled Agents providing financial planning, tax planning, tax preparation, and investment management.",
    telephone: "(631) 234-0871",
    email: "info@unitedfpg.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "350 Motor Parkway, Suite 300",
      addressLocality: "Hauppauge",
      addressRegion: "NY",
      postalCode: "11788",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Fairfield County, CT" },
      ...ctTowns.map((t) => ({ "@type": "City", name: `${t.name}, CT` })),
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
      url: baseUrl,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Financial Advisor for Connecticut Residents",
        item: `${baseUrl}${CT_HUB_PATH}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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

function TownCards(): ReactNode {
  return (
    <section className="relative w-full bg-background py-16 sm:py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-medium font-serif leading-tight text-foreground mb-3">
          Planning Pages by Connecticut Town
        </h2>
        <p className="text-foreground/60 mb-10 max-w-2xl">
          Each page covers the planning questions that tend to come up for
          households in that town. Pick the one closest to you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ctTowns.map((town) => (
            <Link
              key={town.slug}
              href={`${CT_HUB_PATH}/${town.slug}`}
              className="group flex items-start gap-3 rounded-xl border border-border bg-background p-6 hover:border-foreground/20 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#1e6eae] mt-1 shrink-0" />
              <div>
                <span className="text-base font-semibold text-foreground group-hover:text-[#1e6eae] transition-colors">
                  {town.name}, CT
                </span>
                <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                  {town.cardBlurb}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  View page
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-foreground/70 max-w-2xl">
          Looking for the two-state tax explanation first? See our page for{" "}
          <Link
            href="/who-we-serve/connecticut-professionals"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Connecticut residents who work in New York
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export default function FinancialAdvisorConnecticutPage(): ReactNode {
  return (
    <>
      <ConnecticutSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Locations", href: "/locations" },
            { label: "Connecticut" },
          ]}
        />
        <LocalHero
          headline="Fee-Only Financial Planning for Connecticut Residents"
          subtitle="Many Fairfield County households have income in New York, equity compensation, and a home in Connecticut. Our CFP® professionals, CPAs, and Enrolled Agents plan across both states, so your plan and your taxes are coordinated, not siloed."
          badge="Fairfield County, CT"
          locationLabel="CFP® professionals, CPAs, and Enrolled Agents working with Connecticut residents."
        />
        <FeatureHighlight />
        <LocalValueProp
          heading="Planning Across Connecticut and New York"
          subheading="Where you live, where you work, and how you are paid can each change your tax picture. This is how we approach it. Outcomes depend on your individual circumstances."
          items={valueProps}
          insightHeading="Start With the Two-State Picture"
          insight="A useful first step is a single view of your income by state, your accounts by type, and the next few known events, such as a vesting date or a change in work arrangement. From there, the order of decisions is easier to see, and each choice can be weighed with its trade-offs."
        />
        <TownCards />
        <FeatureCards />
        <section className="relative w-full bg-background py-24 sm:py-32 overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground text-center mb-16">
              What Our Clients Say
            </h2>
            <WealthtenderFirmReviews firmId="36778" />
          </div>
        </section>
        <LocalFAQ
          heading="Questions From Connecticut Residents"
          faqs={hubFaqs}
          idPrefix="ct-faq"
        />
        <section className="relative w-full bg-background py-12 sm:py-16 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 border-t border-border pt-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground">
              Let&apos;s Start With a Conversation
            </h2>
            <p className="mt-3 text-foreground/70 leading-relaxed max-w-2xl">
              <Link
                href="/contact"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Let&apos;s Start With a Conversation
              </Link>
              . No sales pitch. No obligation.
            </p>
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
