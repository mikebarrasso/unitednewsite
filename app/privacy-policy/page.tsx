import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import { Download } from "lucide-react";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "United Financial Planning Group's Privacy Policy describes how we collect, use, and protect your personal and financial information.",
  path: "/privacy-policy",
});

const PDF_URL = "/2021-UFPG-PRIVACY-POLICY.pdf";

function PageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Compliance",
        item: `${siteConfig.url}/compliance`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Privacy Policy",
        item: `${siteConfig.url}/privacy-policy`,
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

export default function PrivacyPolicyPage(): ReactNode {
  return (
    <>
      <PageSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Compliance", href: "/compliance" },
            { label: "Privacy Policy" },
          ]}
        />

        <section className="relative w-full bg-muted pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <p className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-3">
              Effective: 2021
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              How United Financial Planning Group collects, uses, and protects
              your personal and financial information in accordance with
              applicable privacy laws and regulations.
            </p>
            <div className="mt-8">
              <a
                href={PDF_URL}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/80 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-background py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="hidden sm:block w-full rounded-xl border border-border overflow-hidden">
              <iframe
                src={`${PDF_URL}#toolbar=1&navpanes=0`}
                className="w-full"
                style={{ height: "80vh", minHeight: "600px" }}
                title="Privacy Policy"
              />
            </div>
            <div className="sm:hidden flex flex-col items-center gap-4 py-8 text-center">
              <p className="text-foreground/60 text-sm leading-relaxed">
                PDF viewing is best experienced on a desktop browser. Use the
                button above to download the document.
              </p>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/80 transition-colors"
              >
                <Download className="w-4 h-4" />
                Open PDF
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
