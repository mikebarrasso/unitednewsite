import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import { Download } from "lucide-react";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Form ADV Part 2A – Firm Brochure",
  description:
    "United Financial Planning Group's Form ADV Part 2A firm brochure describes our advisory services, fees, business practices, and any conflicts of interest.",
  path: "/adv-part-2a",
});

const PDF_URL = "/2025-03-21-UFPG-Form-ADV-Part-2A-1.pdf";

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
        name: "Form ADV Part 2A",
        item: `${siteConfig.url}/adv-part-2a`,
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

export default function AdvPart2APage(): ReactNode {
  return (
    <>
      <PageSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Compliance", href: "/compliance" },
            { label: "Form ADV Part 2A" },
          ]}
        />

        <section className="relative w-full bg-muted pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <p className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-3">
              Last updated: March 21, 2025
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Form ADV Part 2A
            </h1>
            <p className="mt-4 text-base text-foreground/50 font-medium">
              Firm Brochure
            </p>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              Our firm brochure describes our advisory services, fees, business
              practices, and any conflicts of interest as required by the U.S.
              Securities and Exchange Commission.
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
                title="Form ADV Part 2A – Firm Brochure"
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
