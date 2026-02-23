import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { locations, getLocationBySlug, getOtherLocations } from "@/lib/locations";
import { ServiceHero } from "@/components/service-hero";
import { LocationContent } from "@/components/location-content";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return createMetadata({
      title: "Location Not Found",
      description: "The requested location page could not be found.",
      path: `/locations/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
  });
}

function LocationSchema({ location }: { location: NonNullable<ReturnType<typeof getLocationBySlug>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `United Financial Planning Group — ${location.city}`,
    description: location.metaDescription,
    url: `https://unitedfpg.com/locations/${location.slug}`,
    telephone: location.phone,
    faxNumber: location.fax,
    email: "info@unitedfpg.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.stateAbbr,
      postalCode: location.zip,
      addressCountry: "US",
    },
    geo: undefined as undefined | object,
    parentOrganization: {
      "@type": "Organization",
      name: "United Financial Planning Group",
      url: "https://unitedfpg.com",
    },
    areaServed: [
      {
        "@type": "City",
        name: location.city,
      },
      ...location.nearbyAreas.map((area) => ({
        "@type": "City",
        name: area,
      })),
    ],
    serviceType: [
      "Financial Planning",
      "Investment Management",
      "Tax Planning",
      "Tax Preparation",
      "Retirement Planning",
    ],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Financial Advisory Services",
      itemListElement: location.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({ location }: { location: NonNullable<ReturnType<typeof getLocationBySlug>> }) {
  const schema = {
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
        name: "Locations",
        item: "https://unitedfpg.com/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${location.city}, ${location.stateAbbr}`,
        item: `https://unitedfpg.com/locations/${location.slug}`,
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

export default async function LocationPage({
  params,
}: PageProps): Promise<ReactNode> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const otherLocations = getOtherLocations(slug);

  return (
    <>
      <LocationSchema location={location} />
      <BreadcrumbSchema location={location} />
      <main id="main-content" className="flex-1">
        <ServiceHero
          eyebrow={`${location.city}, ${location.stateAbbr}`}
          title={location.headline}
          subtitle={location.subtitle}
          imageUrl={location.heroImage}
          imageAlt={location.heroImageAlt}
          primaryCtaHref="/contact"
          primaryCtaLabel="Schedule a Conversation"
          secondaryCtaHref="/locations"
          secondaryCtaLabel="All Locations"
        />
        <LocationContent
          location={location}
          otherLocations={otherLocations}
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
