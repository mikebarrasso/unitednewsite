import { Breadcrumb } from "@/components/breadcrumb";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { getMediaMentions, getBlogPosts, formatDate } from "@/lib/blog";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "In The Media",
  description:
    "United Financial Planning Group in the media — features and quotes in The Wall Street Journal, Fortune, GOBankingRates, NAPFA Advisor Magazine, and more.",
  path: "/in-the-media",
});

function MediaSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "United Financial Planning Group In The Media",
    description:
      "Media appearances and features from United Financial Planning Group's team in The Wall Street Journal, Fortune, GOBankingRates, and NAPFA Advisor Magazine.",
    url: `${siteConfig.url}/in-the-media`,
    publisher: {
      "@type": "Organization",
      name: "United Financial Planning Group",
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const publicationLogos: Record<string, string> = {
  "The Wall Street Journal": "WSJ",
  Fortune: "Fortune",
  GOBankingRates: "GBR",
  "NAPFA Advisor Magazine": "NAPFA",
};

export default function InTheMediaPage(): ReactNode {
  const mediaMentions = getMediaMentions();
  const recentPosts = getBlogPosts().slice(0, 3);

  return (
    <>
      <MediaSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "In The Media" }]} />

        <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-3xl mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif tracking-tight text-foreground">
                In The Media
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Our team&apos;s expertise has been recognized by leading
                financial publications. Explore our media appearances and the
                insights we&apos;ve shared with national audiences.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-8">
                As Seen In
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.entries(publicationLogos).map(([name, abbr]) => (
                  <div
                    key={name}
                    className="flex items-center justify-center p-6 rounded-xl border border-border bg-card"
                  >
                    <span className="text-lg font-serif font-medium text-foreground/60">
                      {abbr === "WSJ"
                        ? "The Wall Street Journal"
                        : abbr === "GBR"
                          ? "GOBankingRates"
                          : name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {mediaMentions.map((mention) => (
                <Link
                  key={mention.slug}
                  href={`/blog/${mention.slug}`}
                  className="group block p-6 sm:p-8 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                    <div className="shrink-0">
                      <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center border border-border">
                        <span className="text-xs font-medium text-foreground/40 text-center leading-tight px-1">
                          {mention.publication}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2.5 py-0.5 bg-muted text-foreground text-xs font-medium rounded-full border border-border">
                          {mention.publication}
                        </span>
                        <time
                          dateTime={mention.date}
                          className="text-sm text-muted-foreground"
                        >
                          {formatDate(mention.date)}
                        </time>
                      </div>
                      <h3 className="text-lg sm:text-xl font-medium font-serif text-foreground group-hover:text-foreground/80 transition-colors leading-snug">
                        {mention.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {mention.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {recentPosts.length > 0 && (
              <div className="mt-16 pt-12 border-t border-border">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-serif font-medium text-foreground">
                    From Our Blog
                  </h2>
                  <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View all articles &rarr;
                  </Link>
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block p-5 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-xs text-muted-foreground">
                        {post.category} &middot; {formatDate(post.date)}
                      </span>
                      <h3 className="mt-2 text-sm font-medium text-foreground group-hover:text-foreground/80 leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Media appearances and interviews are provided for informational purposes only and should not be construed as an endorsement of United Financial Planning Group or a guarantee of future investment success. No compensation was provided by the firm in exchange for these media inclusions.
              </p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
