import { FeatureCards } from "@/components/feature-cards";
import { FeatureHighlight } from "@/components/feature-highlight";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { LocalFAQ } from "@/components/local-faq";
import { LocalHero } from "@/components/local-hero";
import { LocalValueProp } from "@/components/local-value-prop";
import { Breadcrumb } from "@/components/breadcrumb";
import { WealthtenderFirmReviews } from "@/components/wealthtender-firm-reviews";
import {
  CT_HUB_PATH,
  ctTowns,
  getCtTownBySlug,
  getNearbyCtTowns,
} from "@/lib/ct-towns";
import { createMetadata } from "@/lib/metadata";
import { ArrowRight, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type Params = { slug: string };

const baseUrl = "https://unitedfpg.com";

export function generateStaticParams(): Params[] {
  return ctTowns.map((town) => ({ slug: town.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const town = getCtTownBySlug(slug);
  if (!town) return {};

  return createMetadata({
    title: town.seoTitle,
    description: town.metaDescription,
    path: `${CT_HUB_PATH}/${town.slug}`,
  });
}

function CtTownSchema({ slug }: { slug: string }) {
  const town = getCtTownBySlug(slug);
  if (!town) return null;

  const pageUrl = `${baseUrl}${CT_HUB_PATH}/${town.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `United Financial Planning Group - ${town.name}, CT`,
    url: pageUrl,
    logo: `${baseUrl}/logo-black-cropped.png`,
    description: town.metaDescription,
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
      { "@type": "City", name: `${town.name}, CT` },
      { "@type": "AdministrativeArea", name: "Fairfield County, CT" },
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
      {
        "@type": "ListItem",
        position: 3,
        name: `${town.name}, CT`,
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: town.faqs.map((faq) => ({
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

function RelatedLinks({ slug }: { slug: string }): ReactNode {
  const nearby = getNearbyCtTowns(slug);

  return (
    <section className="relative w-full bg-muted py-16 sm:py-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-medium font-serif text-foreground mb-3">
          More Connecticut Planning Pages
        </h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          Explore planning pages for other Fairfield County towns, or read the
          two-state tax overview.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearby.map((town) => (
            <Link
              key={town.slug}
              href={`${CT_HUB_PATH}/${town.slug}`}
              className="group flex items-start gap-3 rounded-xl border border-border bg-background p-5 hover:border-foreground/20 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#1e6eae] mt-0.5 shrink-0" />
              <span className="text-sm font-semibold text-foreground group-hover:text-[#1e6eae] transition-colors">
                {town.name}, CT
              </span>
            </Link>
          ))}
          <Link
            href="/who-we-serve/connecticut-professionals"
            className="group flex items-start gap-3 rounded-xl border border-border bg-background p-5 hover:border-foreground/20 transition-colors"
          >
            <ArrowRight className="w-4 h-4 text-[#1e6eae] mt-0.5 shrink-0" />
            <span className="text-sm font-semibold text-foreground group-hover:text-[#1e6eae] transition-colors">
              Connecticut residents who work in New York
            </span>
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={CT_HUB_PATH}
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            All Connecticut planning pages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/services/equity-compensation"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            Equity compensation planning
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/services/tax-planning"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            Tax planning
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default async function CtTownPage({
  params,
}: {
  params: Promise<Params>;
}): Promise<ReactNode> {
  const { slug } = await params;
  const town = getCtTownBySlug(slug);

  if (!town) {
    notFound();
  }

  return (
    <>
      <CtTownSchema slug={slug} />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Connecticut", href: CT_HUB_PATH },
            { label: `${town.name}, CT` },
          ]}
        />
        <LocalHero
          headline={town.h1}
          subtitle={town.heroSubtitle}
          badge={town.heroBadge}
          locationLabel={town.heroLabel}
        />
        <FeatureHighlight />
        <LocalValueProp
          heading={town.valuePropHeading}
          subheading={town.valuePropSubheading}
          items={town.valueProps}
          insightHeading={town.insightHeading}
          insight={town.insight}
        />
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
          heading={town.faqHeading}
          faqs={town.faqs}
          idPrefix={`ct-${town.slug}-faq`}
        />
        <RelatedLinks slug={slug} />
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
