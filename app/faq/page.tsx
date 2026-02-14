import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "FAQ — United Financial Planning Group",
  description:
    "Frequently asked questions about fee-only financial planning, fiduciary advisors, integrated tax and investment services, and working with United Financial Planning Group.",
  path: "/faq",
});

export default function FAQPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="relative w-full bg-muted pt-40 pb-12 sm:pb-16">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Questions We Hear Often
            </h1>
          </div>
        </section>

        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
