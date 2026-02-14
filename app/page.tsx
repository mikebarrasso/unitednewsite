import { FAQ } from "@/components/faq";
import { FeatureCards } from "@/components/feature-cards";
import { FeatureHighlight } from "@/components/feature-highlight";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Features2 } from "@/components/blocks/features-2";
import { Stats } from "@/components/stats";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { TrustedBy } from "@/components/trusted-by";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: `${siteConfig.name} — Financial Planning, Tax & Investment Management Under One Roof`,
  description:
    "United Financial Planning Group is a fee-only advisory firm with CFPs, CPAs, and Enrolled Agents under one roof. Financial planning, investment management, and tax services — integrated for clients nationwide.",
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustedBy />
        <FeatureHighlight />
        <FeatureCards />
        <Features2 />
        <Stats />
        <TestimonialsSlider />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
