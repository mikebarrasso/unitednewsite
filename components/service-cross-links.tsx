import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type ReactNode } from "react";

const crossLinks = [
  {
    label: "What Our Clients Say",
    description:
      "Hear from families and professionals who work with our integrated team.",
    href: "/testimonials",
  },
  {
    label: "Our Fees",
    description:
      "Transparent, fee-only pricing with no commissions or hidden costs.",
    href: "/fees",
  },
];

export function ServiceCrossLinks({
  lastUpdated = "March 2026",
}: {
  lastUpdated?: string;
}): ReactNode {
  return (
    <section className="relative w-full bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {crossLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-muted/50 p-5 hover:border-foreground/20 transition-colors"
            >
              <div>
                <p className="text-sm font-semibold text-foreground group-hover:text-[#1e6eae] transition-colors">
                  {link.label}
                </p>
                <p className="text-xs text-foreground/50 mt-1 leading-relaxed">
                  {link.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-[#1e6eae] group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border mt-8 pt-6">
          <p className="text-sm text-foreground/40">
            Guidance from our team of CFP® professionals, CPAs, and Enrolled
            Agents.{" "}
            <Link
              href="/team"
              className="underline hover:text-foreground/60 transition-colors"
            >
              Meet the team
            </Link>
          </p>
          <p className="text-xs text-foreground/30">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>
    </section>
  );
}
