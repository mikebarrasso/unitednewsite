import { Breadcrumb } from "@/components/breadcrumb";
import { createMetadata } from "@/lib/metadata";
import { locations } from "@/lib/locations";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Our Offices & Locations",
  description:
    "Offices in Hauppauge, Manhattan, and Lake Success, NY. Fee-only financial planning, tax, and investment management, with in-person and virtual meetings nationwide.",
  path: "/locations",
});

function LocationsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "United Financial Planning Group",
    url: "https://unitedfpg.com",
    location: locations.map((loc) => ({
      "@type": "Place",
      name: `United Financial Planning Group - ${loc.city}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.city,
        addressRegion: loc.stateAbbr,
        postalCode: loc.zip,
        addressCountry: "US",
      },
      telephone: loc.phone,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function LocationsPage(): ReactNode {
  return (
    <>
      <LocationsSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "Locations" }]} />
        <section className="relative w-full bg-muted pt-6 pb-24 sm:pt-8 sm:pb-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground leading-tight">
              Our Offices
            </h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/60 max-w-2xl leading-relaxed">
              Three locations across the New York metro area, plus nationwide
              virtual service. Every office is staffed by the same integrated
              team of CFP® professionals, CPAs, and Enrolled Agents.
            </p>
          </div>
        </section>

        <section className="relative w-full bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group flex flex-col bg-muted/50 border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-5 bg-muted">
                    <Image
                      src={location.heroImage}
                      alt={location.heroImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {location.city}, {location.stateAbbr}
                  </h2>
                  {location.label && (
                    <p className="text-xs font-medium text-primary mt-1">
                      {location.label}
                    </p>
                  )}
                  <div className="mt-3 space-y-2 text-sm text-foreground/60">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-foreground/40 shrink-0 mt-0.5" />
                      <span>
                        {location.address}, {location.city},{" "}
                        {location.stateAbbr} {location.zip}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-foreground/40 shrink-0" />
                      <span>{location.phone}</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-5 flex items-center gap-1 text-sm font-medium text-primary">
                    View office details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-medium font-serif text-foreground leading-tight">
              Serving Clients Nationwide
            </h2>
            <p className="mt-4 text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              While we have three offices in the New York metro area, we work
              with clients across all 50 states through secure video meetings and
              digital collaboration tools. Your location doesn&apos;t limit
              access to integrated financial planning, investment management, and
              tax services.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Schedule a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-medium font-serif text-foreground mb-3">
              Find a Financial Advisor Near You
            </h2>
            <p className="text-foreground/60 mb-8 max-w-2xl">
              Learn more about how we serve clients across the New York
              metropolitan area.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/financial-advisor-long-island"
                className="group flex items-center justify-between rounded-xl border border-border bg-muted/50 p-5 hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    Long Island, NY
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href="/financial-advisor-manhattan"
                className="group flex items-center justify-between rounded-xl border border-border bg-muted/50 p-5 hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    Manhattan, NYC
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href="/financial-advisor-nyc"
                className="group flex items-center justify-between rounded-xl border border-border bg-muted/50 p-5 hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    New York City
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
