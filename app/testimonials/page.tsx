import { Breadcrumb } from "@/components/breadcrumb";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { WealthtenderFirmReviews } from "@/components/wealthtender-firm-reviews";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Client Testimonials",
  description:
    "Read verified client reviews of United Financial Planning Group. See what clients say about our integrated financial planning, tax, and investment management services.",
  path: "/testimonials",
});

function ReviewsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "United Financial Planning Group",
    url: "https://unitedfpg.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "25",
      reviewCount: "25",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function TestimonialsPage(): ReactNode {
  return (
    <>
      <ReviewsSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "Client Testimonials" }]} />
        {/* Hero */}
        <section className="relative w-full bg-muted pt-6 pb-24 sm:pt-8 sm:pb-32">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Client Testimonials
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              Don&apos;t take our word for it &mdash; hear directly from the
              clients we serve every day.
            </p>
          </div>
        </section>

        {/* Reviews Embed */}
        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <WealthtenderFirmReviews firmId="36778" />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
