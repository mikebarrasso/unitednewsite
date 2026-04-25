import { Blog1 } from "@/components/blocks/blog-1";
import { Breadcrumb } from "@/components/breadcrumb";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { getAllPosts, getPostLastModified } from "@/lib/blog";
import { createMetadata, siteConfig } from "@/lib/metadata";
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

function BlogIndexSchema(): ReactNode {
  const posts = getAllPosts();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${siteConfig.url}/blog#blog`,
        name: "United Financial Planning Group Blog",
        description:
          "Insights, guides, and news on financial planning, tax strategy, retirement, and investment management from United Financial Planning Group.",
        url: `${siteConfig.url}/blog`,
        publisher: {
          "@type": "Organization",
          "@id": `${siteConfig.url}/#organization`,
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/blog#itemlist`,
        name: "United Financial Planning Group articles",
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.url}/blog/${post.slug}`,
          item: {
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url: `${siteConfig.url}/blog/${post.slug}`,
            datePublished: post.date,
            dateModified: getPostLastModified(post),
            author: {
              "@type": "Organization",
              name: post.author,
            },
          },
        })),
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

export default function BlogPage(): ReactNode {
  return (
    <>
      <BlogIndexSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "Blog" }]} />
        <Blog1 />

        <section className="bg-muted relative w-full py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
            <h2 className="text-foreground mb-3 font-serif text-2xl font-medium sm:text-3xl">
              Put These Insights Into Action
            </h2>
            <p className="text-foreground/60 mx-auto mb-6 max-w-2xl">
              Our articles reflect the same integrated approach we bring to
              every client engagement. Explore how our services work together.
            </p>
            <Link
              href="/services"
              className="text-foreground inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
