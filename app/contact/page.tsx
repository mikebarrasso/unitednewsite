import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { TallyContactForm } from "@/components/tally-contact-form";
import { MapPin, Mail, Phone, Printer } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Schedule a complimentary consultation with United Financial Planning Group. Fee-only financial planning, tax planning, and investment management for complex financial lives.",
  path: "/contact",
});

function ContactSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "United Financial Planning Group",
    url: "https://unitedfpg.com",
    telephone: "(631) 234-0871",
    email: "info@unitedfpg.com",
    faxNumber: "(631) 584-3763",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "350 Motor Parkway, Suite 300",
        addressLocality: "Hauppauge",
        addressRegion: "NY",
        postalCode: "11788",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "14 Penn Plaza",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10122",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "1979 Marcus Avenue, Suite 210",
        addressLocality: "Lake Success",
        addressRegion: "NY",
        postalCode: "11042",
        addressCountry: "US",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "(631) 234-0871",
      contactType: "customer service",
      email: "info@unitedfpg.com",
      availableLanguage: "English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ContactPage(): ReactNode {
  return (
    <>
      <ContactSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "Contact" }]} />
        <section className="relative w-full bg-muted pt-6 pb-2 sm:pt-8 sm:pb-4">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground leading-tight">
              Let&apos;s Start With a Conversation
            </h1>
            <p className="mt-3 text-base sm:text-lg text-foreground/60 max-w-2xl leading-relaxed">
              No sales pitch. No obligation. Just a chance to talk about
              what&apos;s on your mind financially, and see if we&apos;re the
              right fit.
            </p>
          </div>
        </section>

        <section className="relative w-full bg-background pt-6 sm:pt-8 pb-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="tel:+16312340871"
                    className="flex items-center gap-4 p-4 bg-muted/50 border border-border rounded-lg hover:bg-muted/70 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      (631) 234-0871
                    </span>
                  </a>
                  <a
                    href="mailto:info@unitedfpg.com"
                    className="flex items-center gap-4 p-4 bg-muted/50 border border-border rounded-lg hover:bg-muted/70 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      info@unitedfpg.com
                    </span>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-muted/50 border border-border rounded-lg">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      Service Nationwide
                    </span>
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <TallyContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="relative w-full bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-medium font-serif text-foreground mb-10">
              Our Locations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Hauppauge, NY
                </h3>
                <p className="text-xs font-medium text-primary mb-4">
                  Headquarters
                </p>
                <div className="space-y-3 text-sm text-foreground/60">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-foreground/40 shrink-0 mt-0.5" />
                    <span>
                      350 Motor Parkway, Suite 300
                      <br />
                      Hauppauge, NY 11788
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-foreground/40 shrink-0" />
                    <a
                      href="tel:+16312340871"
                      className="hover:text-foreground transition-colors"
                    >
                      (631) 234-0871
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Printer className="w-4 h-4 text-foreground/40 shrink-0" />
                    <span>(631) 584-3763</span>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-5">
                  Manhattan, NY
                </h3>
                <div className="space-y-3 text-sm text-foreground/60">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-foreground/40 shrink-0 mt-0.5" />
                    <span>
                      14 Penn Plaza
                      <br />
                      New York, NY 10122
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-foreground/40 shrink-0" />
                    <a
                      href="tel:+16312340871"
                      className="hover:text-foreground transition-colors"
                    >
                      (631) 234-0871
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Printer className="w-4 h-4 text-foreground/40 shrink-0" />
                    <span>(631) 584-3763</span>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-5">
                  Lake Success, NY
                </h3>
                <div className="space-y-3 text-sm text-foreground/60">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-foreground/40 shrink-0 mt-0.5" />
                    <span>
                      1979 Marcus Avenue, Suite 210
                      <br />
                      Lake Success, NY 11042
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-foreground/40 shrink-0" />
                    <a
                      href="tel:+16312340871"
                      className="hover:text-foreground transition-colors"
                    >
                      (631) 234-0871
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Printer className="w-4 h-4 text-foreground/40 shrink-0" />
                    <span>(631) 584-3763</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
