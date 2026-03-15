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
import { towns, getTownBySlug, getNearbyTowns } from "@/lib/towns";
import { ArrowRight, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return towns.map((town) => ({ slug: town.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const town = getTownBySlug(slug);
  if (!town) return {};

  return createMetadata({
    title: town.seoTitle,
    description: town.metaDescription,
    path: `/financial-advisor-${town.slug}`,
  });
}

function TownSchema({ slug }: { slug: string }) {
  const town = getTownBySlug(slug);
  if (!town) return null;

  const baseUrl = "https://unitedfpg.com";
  const pageUrl = `${baseUrl}/financial-advisor-${town.slug}`;

  const officeAddress =
    town.nearestOffice === "Hauppauge"
      ? {
          "@type": "PostalAddress" as const,
          streetAddress: "350 Motor Parkway, Suite 105",
          addressLocality: "Hauppauge",
          addressRegion: "NY",
          postalCode: "11788",
          addressCountry: "US",
        }
      : {
          "@type": "PostalAddress" as const,
          streetAddress: "1979 Marcus Avenue, Suite 210",
          addressLocality: "Lake Success",
          addressRegion: "NY",
          postalCode: "11042",
          addressCountry: "US",
        };

  const officeGeo =
    town.nearestOffice === "Hauppauge"
      ? { "@type": "GeoCoordinates" as const, latitude: 40.8176, longitude: -73.2151 }
      : { "@type": "GeoCoordinates" as const, latitude: 40.7712, longitude: -73.7174 };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `United Financial Planning Group - ${town.name}`,
    url: pageUrl,
    logo: `${baseUrl}/logo-black-cropped.png`,
    description: town.metaDescription,
    telephone: "(631) 234-0871",
    email: "info@unitedfpg.com",
    address: officeAddress,
    geo: officeGeo,
    areaServed: town.areaServed.map((a) => ({
      "@type": a.type,
      name: a.name,
    })),
    serviceType: town.primaryServices,
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${baseUrl}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Financial Advisor in ${town.name}, NY`,
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

function NearbyTowns({ slug }: { slug: string }) {
  const nearby = getNearbyTowns(slug);
  if (nearby.length === 0) return null;

  return (
    <section className="relative w-full bg-muted py-16 sm:py-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-medium font-serif text-foreground mb-3">
          Also Serving Nearby Communities
        </h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          Our team works with families and professionals across Long Island.
          Explore how we serve communities near you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nearby.map((town) => (
            <Link
              key={town.slug}
              href={`/financial-advisor-${town.slug}`}
              className="group flex items-start gap-3 rounded-xl border border-border bg-background p-5 hover:border-foreground/20 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#1e6eae] mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-foreground group-hover:text-[#1e6eae] transition-colors">
                  {town.name}, NY
                </span>
                <p className="text-xs text-foreground/50 mt-1">
                  {town.distanceToOffice} from {town.nearestOffice} office
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-2">
          <Link
            href="/locations"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            View all office locations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default async function TownPage({
  params,
}: {
  params: Promise<Params>;
}): Promise<ReactNode> {
  const { slug } = await params;
  const town = getTownBySlug(slug);

  if (!town) {
    notFound();
  }

  return (
    <>
      <TownSchema slug={slug} />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Locations", href: "/locations" },
            { label: `Financial Advisor in ${town.name}, NY` },
          ]}
        />
        <LocalHero
          headline={town.h1}
          subtitle={town.heroSubtitle}
          badge={town.heroBadge}
          locationLabel={town.heroLabel}
        />
        <TrustedBy />
        <FeatureHighlight />
        <LocalValueProp
          heading={town.valuePropHeading}
          subheading={town.valuePropSubheading}
          items={town.valueProps}
          insightHeading={town.insightHeading}
          insight={town.insight}
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
          heading={town.faqHeading}
          faqs={town.faqs}
          idPrefix={`${town.slug}-faq`}
        />
        <NearbyTowns slug={slug} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
