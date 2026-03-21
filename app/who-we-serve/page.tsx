import { Breadcrumb } from "@/components/breadcrumb";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import { personas } from "@/lib/personas";
import {
  Clock,
  Building2,
  Rocket,
  Code2,
  BarChart3,
  Gem,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Who We Serve",
  description:
    "United Financial Planning Group works with retirees, business owners, startup founders, software engineers, executives, and high-net-worth families. See how our integrated approach fits your financial life.",
  path: "/who-we-serve",
});

const iconMap = {
  Clock,
  Building2,
  Rocket,
  Code2,
  BarChart3,
  Gem,
} as const;

export default function WhoWeServePage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "Who We Serve" }]} />
        <section className="relative w-full bg-background pt-6 pb-24 sm:pt-8 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight max-w-3xl">
              Built for Financial Lives That Don&apos;t Fit in a Template
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              Our clients share one thing in common: financial complexity that
              benefits from having planning, investing, and tax preparation
              coordinated by the same team.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personas.map((persona) => {
                const Icon = iconMap[persona.icon];
                return (
                  <Link
                    key={persona.slug}
                    href={`/who-we-serve/${persona.slug}`}
                    className="group flex flex-col rounded-xl border border-border p-6 sm:p-8 hover:border-foreground/20 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e6eae]/10">
                        <Icon className="w-5 h-5 text-[#1e6eae]" />
                      </div>
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-[#1e6eae] transition-colors">
                        {persona.name}
                      </h2>
                    </div>
                    <p className="text-foreground/60 leading-relaxed flex-1 line-clamp-3">
                      {persona.heroSubtitle}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/40 group-hover:text-[#1e6eae] transition-colors">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
