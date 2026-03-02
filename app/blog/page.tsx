import { Blog1 } from "@/components/blocks/blog-1";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
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
        <div className="pt-20">
          <Blog1 />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
