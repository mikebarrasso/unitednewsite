import { Blog1 } from "@/components/blocks/blog-1";
import { Breadcrumb } from "@/components/breadcrumb";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Insights, guides, and news on financial planning, tax strategy, retirement, and investment management from United Financial Planning Group.",
  path: "/blog",
});

export default function BlogPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "Blog" }]} />
        <Blog1 />

        <section className="relative w-full bg-muted py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-medium font-serif text-foreground mb-3">
              Put These Insights Into Action
            </h2>
            <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
              Our articles reflect the same integrated approach we bring to every
              client engagement. Explore how our services work together.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
