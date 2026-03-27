import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { FileText } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Compliance",
  description:
    "Access United Financial Planning Group's regulatory documents including Form ADV, Form CRS, and Privacy Policy.",
  path: "/compliance",
});

const documents = [
  {
    title: "Form ADV Part 2A - Firm Brochure",
    description:
      "Our firm brochure describes our advisory services, fees, business practices, and any conflicts of interest.",
    href: "/adv-part-2a",
    date: "March 21, 2025",
  },
  {
    title: "Form ADV Part 2B - Brochure Supplement",
    description:
      "Supplemental information about the supervised persons who provide advisory services on behalf of our firm.",
    href: "/adv-part-2b",
    date: "March 21, 2025",
  },
  {
    title: "Form CRS - Client Relationship Summary",
    description:
      "A summary of the types of services we provide, fees, costs, conflicts of interest, and disciplinary history.",
    href: "/form-crs",
    date: "August 17, 2023",
  },
  {
    title: "Privacy Policy",
    description:
      "How we collect, use, and protect your personal and financial information.",
    href: "/privacy-policy",
    date: "2021",
  },
];

export default function CompliancePage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "Compliance" }]} />
        {/* Hero */}
        <section className="relative w-full bg-muted pt-6 pb-24 sm:pt-8 sm:pb-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Compliance &amp; Disclosures
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              As a registered investment advisor and fee-only fiduciary, we hold
              ourselves to the highest standards of transparency. Below you will
              find our regulatory filings and policies.
            </p>
          </div>
        </section>

        {/* Documents */}
        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="space-y-4">
              {documents.map((doc) => (
                <Link
                  key={doc.title}
                  href={doc.href}
                  className="group flex items-start gap-5 p-6 bg-muted/50 border border-border rounded-xl hover:bg-muted/70 transition-colors"
                >
                  <div className="shrink-0 mt-0.5">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {doc.title}
                    </h2>
                    <p className="text-sm text-foreground/60 mt-1 leading-relaxed">
                      {doc.description}
                    </p>
                    <p className="text-xs text-foreground/30 mt-2">
                      Last updated: {doc.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-12 text-sm text-foreground/40 leading-relaxed">
              United Financial Planning Group is a fee-only Registered
              Investment Advisory (RIA) firm. If you have any questions about
              these documents or our regulatory obligations, please{" "}
              <Link
                href="/contact"
                className="underline hover:text-foreground transition-colors"
              >
                contact us
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
