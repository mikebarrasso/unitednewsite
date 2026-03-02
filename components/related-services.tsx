import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type ReactNode } from "react";

type ServiceLink = {
  label: string;
  description: string;
  href: string;
};

type RelatedServicesProps = {
  heading?: string;
  services: ServiceLink[];
};

export function RelatedServices({
  heading = "How This Connects to Your Full Financial Picture",
  services,
}: RelatedServicesProps): ReactNode {
  return (
    <section className="relative w-full bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-medium font-serif text-foreground mb-2">
          {heading}
        </h2>
        <p className="text-foreground/60 mb-10 max-w-2xl">
          At United Financial Planning Group, every service is informed by the
          others. No silos — just one integrated team working across your entire
          financial picture.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-background p-5 hover:border-foreground/20 transition-colors"
            >
              <div>
                <p className="text-sm font-semibold text-foreground group-hover:text-[#1e6eae] transition-colors">
                  {service.label}
                </p>
                <p className="text-xs text-foreground/50 mt-1 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-[#1e6eae] group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors"
          >
            View all services
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
