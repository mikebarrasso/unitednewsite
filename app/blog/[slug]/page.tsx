import { ArticleToc } from "@/components/article-toc";
import { Breadcrumb } from "@/components/breadcrumb";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import {
  extractToc,
  getAllPosts,
  getAuthor,
  getPostLastModified,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
  injectHeadingIds,
  readingTimeIso,
  readingTimeMinutes,
  type BlogPost,
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

// Strips HTML tags so we can compute a clean wordCount for schema.
function htmlToWordCount(html: string): number {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;|&#\d+;/gi, " ");
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

const serviceKeywordMap: Record<string, string> = {
  "/services/financial-planning": "financial planning",
  "/services/retirement-planning": "retirement planning",
  "/services/investment-management": "investment management",
  "/services/tax-planning": "tax planning",
  "/services/tax-preparation": "tax preparation",
  "/services/equity-compensation": "equity compensation planning",
};

function buildKeywords(post: NonNullable<ReturnType<typeof getPostBySlug>>): string[] {
  const fromServices = post.relatedServices
    .map((href) => serviceKeywordMap[href])
    .filter((k): k is string => Boolean(k));
  const baseline = ["fee-only financial advisor", "fiduciary financial advisor"];
  return Array.from(
    new Set([post.category.toLowerCase(), ...fromServices, ...baseline]),
  );
}

function ArticleSchema({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  const dateModified = getPostLastModified(post);
  const author = getAuthor(post);
  const isIndividualAuthor = author.url.startsWith("/team/");
  // Falls back to the firm-wide dynamic OG image if the post has no custom image.
  const imageUrl = `${siteConfig.url}/opengraph-image`;
  const wordCount = htmlToWordCount(post.content);

  const authorEntity = isIndividualAuthor
    ? {
        "@type": "Person",
        name: author.name,
        jobTitle: author.jobTitle,
        ...(author.credentials ? { honorificSuffix: author.credentials } : {}),
        url: `${siteConfig.url}${author.url}`,
        ...(author.sameAs && author.sameAs.length > 0
          ? { sameAs: author.sameAs }
          : {}),
        ...(author.knowsAbout && author.knowsAbout.length > 0
          ? { knowsAbout: author.knowsAbout }
          : {}),
        worksFor: {
          "@type": "Organization",
          "@id": `${siteConfig.url}/#organization`,
          name: "United Financial Planning Group",
          url: siteConfig.url,
        },
      }
    : {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: "United Financial Planning Group",
        url: siteConfig.url,
      };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    wordCount,
    timeRequired: readingTimeIso(wordCount),
    keywords: buildKeywords(post),
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    author: authorEntity,
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
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

function FAQSchema({ faqs }: { faqs: NonNullable<BlogPost["faqs"]> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function HowToSchema({
  howToSteps,
}: {
  howToSteps: NonNullable<BlogPost["howToSteps"]>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howToSteps.name,
    ...(howToSteps.description ? { description: howToSteps.description } : {}),
    step: howToSteps.steps.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: step.name,
      text: step.text,
    })),
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
  const author = getAuthor(post);
  // Inject heading IDs once at render time so the TOC anchors and the rendered
  // article share the same slugs (avoids two passes that can drift over time).
  const renderedContent = injectHeadingIds(post.content);
  const tocItems = post.type === "blog" ? extractToc(renderedContent) : [];
  const wordCount = htmlToWordCount(renderedContent);
  const readingMinutes = readingTimeMinutes(wordCount);

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema post={post} />
      {post.faqs && post.faqs.length > 0 && <FAQSchema faqs={post.faqs} />}
      {post.howToSteps && post.howToSteps.steps.length > 0 && (
        <HowToSchema howToSteps={post.howToSteps} />
      )}
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
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-4">
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
                {post.type === "blog" && (
                  <span className="text-sm text-muted-foreground">
                    · {readingMinutes} min read
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
                  href={author.url}
                  className="flex items-center gap-2.5 group"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-xs font-medium text-foreground/60 border border-border">
                    {author.initials}
                  </span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {author.name}
                    {author.credentials ? `, ${author.credentials}` : ""}
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

            {post.type === "blog" && (
              <aside
                role="note"
                aria-label="Educational article notice"
                className="mb-8 rounded-xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-foreground/70"
              >
                <p className="font-medium text-foreground mb-1">
                  Educational article — not personal advice
                </p>
                <p>
                  This article is provided for general educational purposes and
                  does not constitute investment, tax, legal, or accounting
                  advice or a recommendation to buy or sell any security. See
                  the{" "}
                  <a
                    href="#disclosures"
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    full disclosures
                  </a>{" "}
                  at the end.
                </p>
              </aside>
            )}

            {post.type === "blog" && tocItems.length >= 3 && (
              <ArticleToc items={tocItems} />
            )}

            <div
              className="prose prose-lg prose-united max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: renderedContent }}
            />

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-14 pt-8 border-t border-border">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <dl className="space-y-6">
                  {post.faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="text-base font-medium text-foreground">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {post.type === "blog" && (
              <div className="mt-14 rounded-2xl border border-border bg-muted/40 p-8 sm:p-10">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Talk it through
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-medium text-foreground">
                  Want a second set of eyes on your situation?
                </h2>
                <p className="mt-3 text-foreground/70 leading-relaxed max-w-2xl">
                  Schedule a complimentary conversation with our team of CFP
                  &reg; professionals, CPAs, and Enrolled Agents. No obligation,
                  no sales pitch &mdash; just a calm look at how recession risk
                  fits into your specific plan.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Schedule a Conversation
                  </Link>
                  <Link
                    href="/why-united"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Why United
                  </Link>
                </div>
              </div>
            )}

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
