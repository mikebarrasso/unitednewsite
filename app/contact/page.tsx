import { Footer } from "@/components/footer";
import { ContactForm } from "./contact-form";
import { MapPin } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Contact — United Financial Planning Group",
  description:
    "Schedule a complimentary consultation with United Financial Planning Group. Fee-only financial planning, tax planning, and investment management for complex financial lives.",
  path: "/contact",
});

const offices = [
  {
    name: "Hauppauge, NY (Headquarters)",
    address: "350 Motor Parkway, Suite 105",
    city: "Hauppauge, NY 11788",
  },
  {
    name: "Manhattan, NY",
    address: "14 Penn Plaza",
    city: "New York, NY 10122",
  },
  {
    name: "Lake Success, NY",
    address: "1979 Marcus Avenue, Suite 210",
    city: "Lake Success, NY 11042",
  },
];

export default function ContactPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="relative w-full bg-muted pt-40 pb-24 sm:pb-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Let&apos;s Start With a Conversation
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              No sales pitch. No obligation. Just a chance to talk about
              what&apos;s on your mind financially — and see if we&apos;re the
              right fit.
            </p>
          </div>
        </section>

        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Form */}
              <div>
                <p className="text-foreground/60 leading-relaxed mb-8">
                  Whether you have a specific question about your retirement
                  plan, your tax situation, or your equity compensation — or
                  you&apos;re just tired of feeling like nobody has the full
                  picture — we&apos;re here to listen.
                </p>
                <ContactForm />
              </div>

              {/* Offices */}
              <div>
                <h2 className="text-2xl font-medium font-serif text-foreground mb-8">
                  Our Offices
                </h2>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div
                      key={office.name}
                      className="flex items-start gap-4 p-6 bg-muted/50 border border-border rounded-sm"
                    >
                      <MapPin className="w-5 h-5 text-foreground/40 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium text-foreground">
                          {office.name}
                        </h3>
                        <p className="text-sm text-foreground/60 mt-1">
                          {office.address}
                          <br />
                          {office.city}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-foreground/50">
                  Nationwide service available via video consultation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
