import { Breadcrumb } from "@/components/breadcrumb";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import {
  getAllPosts,
  getPostLastModified,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
} from "@/lib/blog";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function ArticleSchema({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  const dateModified = getPostLastModified(post);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified,
    author: {
      "@type": "Person",
      name: "Michael Barrasso",
      jobTitle: "Director of Business Development",
      url: `${siteConfig.url}/team/michael-barrasso`,
      worksFor: {
        "@type": "Organization",
        name: "United Financial Planning Group",
        url: siteConfig.url,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "United Financial Planning Group",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo-black-cropped.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    articleSection: post.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteConfig.url}/blog/${post.slug}`,
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

const serviceLabels: Record<string, string> = {
  "/services/financial-planning": "Financial Planning",
  "/services/retirement-planning": "Retirement Planning",
  "/services/investment-management": "Investment Management",
  "/services/tax-planning": "Tax Planning",
  "/services/tax-preparation": "Tax Preparation",
  "/services/equity-compensation": "Equity Compensation",
};

export default async function BlogPostPage({ params }: Props): Promise<ReactNode> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema post={post} />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <article className="px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <div className="max-w-3xl mx-auto">
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-muted text-foreground text-xs font-medium rounded-full border border-border">
                  {post.category}
                </span>
                <time
                  dateTime={post.date}
                  className="text-sm text-muted-foreground"
                >
                  {formatDate(post.date)}
                </time>
                {post.updatedDate && post.updatedDate !== post.date && (
                  <span className="text-sm text-muted-foreground">
                    · Updated{" "}
                    <time dateTime={post.updatedDate}>
                      {formatDate(post.updatedDate)}
                    </time>
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground leading-tight">
                {post.title}
              </h1>

              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <Link
                  href="/team/michael-barrasso"
                  className="flex items-center gap-2.5 group"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-xs font-medium text-foreground/60 border border-border">
                    MB
                  </span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Michael Barrasso
                  </span>
                </Link>
              </div>

              {post.type === "media" && post.externalUrl && (
                <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground">
                    Originally featured in{" "}
                    <strong className="text-foreground">{post.publication}</strong>.{" "}
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-4 hover:text-foreground/70 transition-colors"
                    >
                      Read the original article &rarr;
                    </a>
                  </p>
                </div>
              )}
            </header>

            <div
              className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-medium prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-foreground/80 prose-li:text-foreground/80 prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-foreground/70 prose-blockquote:border-l-foreground/20 prose-blockquote:text-foreground/70 prose-blockquote:italic prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.relatedServices.length > 0 && (
              <div className="mt-14 pt-8 border-t border-border">
                <h2 className="text-lg font-serif font-medium text-foreground mb-4">
                  Related Services
                </h2>
                <div className="flex flex-wrap gap-3">
                  {post.relatedServices.map((href) => (
                    <Link
                      key={href}
                      href={href}
                      className="px-4 py-2 text-sm bg-muted text-foreground rounded-full border border-border hover:bg-muted/70 transition-colors"
                    >
                      {serviceLabels[href] ?? href}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedPosts.length > 0 && (
              <div className="mt-10 pt-8 border-t border-border">
                <h2 className="text-lg font-serif font-medium text-foreground mb-6">
                  Related Articles
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block p-5 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-xs text-muted-foreground">
                        {related.category} &middot; {formatDate(related.date)}
                      </span>
                      <h3 className="mt-2 text-sm font-medium text-foreground group-hover:text-foreground/80 leading-snug line-clamp-2">
                        {related.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
