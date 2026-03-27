import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import { Download } from "lucide-react";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Form CRS – Client Relationship Summary",
  description:
    "United Financial Planning Group's Form CRS summarizes the types of services we provide, fees, costs, conflicts of interest, and disciplinary history.",
  path: "/form-crs",
});

const PDF_URL = "/2023-08-17-UFPG-Form-CRS-1.pdf";

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
        name: "Form CRS",
        item: `${siteConfig.url}/form-crs`,
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

export default function FormCrsPage(): ReactNode {
  return (
    <>
      <PageSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Compliance", href: "/compliance" },
            { label: "Form CRS" },
          ]}
        />

        <section className="relative w-full bg-muted pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <p className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-3">
              Last updated: August 17, 2023
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Form CRS
            </h1>
            <p className="mt-4 text-base text-foreground/50 font-medium">
              Client Relationship Summary
            </p>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              A brief summary of the types of services we provide, our fees and
              costs, any conflicts of interest, and our disciplinary history, as
              required by the SEC for registered investment advisors.
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
                title="Form CRS – Client Relationship Summary"
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
