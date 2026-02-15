import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { WealthtenderFirmReviews } from "@/components/wealthtender-firm-reviews";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Client Testimonials — United Financial Planning Group",
  description:
    "Read verified client reviews of United Financial Planning Group. See what clients say about our integrated financial planning, tax, and investment management services.",
  path: "/testimonials",
});

export default function TestimonialsPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative w-full bg-muted pt-40 pb-24 sm:pb-32">
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
