import { Breadcrumb } from "@/components/breadcrumb";
import { FeatureHighlight } from "@/components/feature-highlight";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { LocalFAQ } from "@/components/local-faq";
import { PersonaSchema } from "@/components/persona-schema";
import { ServiceHero } from "@/components/service-hero";
import { TrustedBy } from "@/components/trusted-by";
import { createMetadata } from "@/lib/metadata";
import {
  personas,
  getPersonaBySlug,
  getRelatedPersonas,
} from "@/lib/personas";
import { ArrowRight } from "lucide-react";
import {
  Clock,
  Target,
  Building2,
  Rocket,
  Code2,
  BarChart3,
  Gem,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type Params = { slug: string };

const iconMap = {
  Clock,
  Target,
  Building2,
  Rocket,
  Code2,
  BarChart3,
  Gem,
} as const;

export function generateStaticParams(): Params[] {
  return personas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const persona = getPersonaBySlug(slug);
  if (!persona) return {};

  return createMetadata({
    title: persona.seoTitle,
    description: persona.metaDescription,
    path: `/who-we-serve/${persona.slug}`,
  });
}

function ProblemSection({
  heading,
  subheading,
  problems,
}: {
  heading: string;
  subheading: string;
  problems: { heading: string; description: string }[];
}): ReactNode {
  return (
    <section className="relative w-full bg-muted py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground max-w-2xl">
          {heading}
        </h2>
        <p className="mt-4 text-foreground/60 max-w-2xl">
          {subheading}
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem) => (
            <div
              key={problem.heading}
              className="rounded-xl border border-border bg-background p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {problem.heading}
              </h3>
              <p className="mt-3 text-foreground/60 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({
  heading,
  subheading,
  services,
}: {
  heading: string;
  subheading: string;
  services: { title: string; description: string; href: string }[];
}): ReactNode {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground max-w-2xl">
          {heading}
        </h2>
        <p className="mt-4 text-foreground/60 max-w-2xl">
          {subheading}
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-xl border border-border p-6 sm:p-8 hover:border-foreground/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-[#1e6eae] transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-foreground/60 leading-relaxed">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/40 group-hover:text-[#1e6eae] transition-colors">
                Learn more
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedPersonas({ slug }: { slug: string }): ReactNode {
  const related = getRelatedPersonas(slug);
  if (related.length === 0) return null;

  return (
    <section className="relative w-full bg-muted py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-medium font-serif text-foreground mb-3">
          We Also Work With
        </h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          Our integrated approach helps people across many financial situations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {related.map((persona) => {
            const Icon = iconMap[persona.icon];
            return (
              <Link
                key={persona.slug}
                href={`/who-we-serve/${persona.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-border bg-background p-6 hover:border-foreground/20 transition-colors"
              >
                <Icon className="w-5 h-5 text-[#1e6eae] mt-0.5 shrink-0" />
                <div>
                  <span className="text-base font-semibold text-foreground group-hover:text-[#1e6eae] transition-colors">
                    {persona.name}
                  </span>
                  <p className="text-sm text-foreground/50 mt-1 line-clamp-2">
                    {persona.heroSubtitle}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 flex items-center gap-2">
          <Link
            href="/who-we-serve"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            View all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default async function PersonaPage({
  params,
}: {
  params: Promise<Params>;
}): Promise<ReactNode> {
  const { slug } = await params;
  const persona = getPersonaBySlug(slug);

  if (!persona) {
    notFound();
  }

  return (
    <>
      <PersonaSchema persona={persona} />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Who We Serve", href: "/who-we-serve" },
            { label: persona.name },
          ]}
        />
        <ServiceHero
          eyebrow={persona.eyebrow}
          title={persona.h1}
          subtitle={persona.heroSubtitle}
          imageUrl={persona.imageUrl}
          imageAlt={persona.imageAlt}
          secondaryCtaHref="/who-we-serve"
          secondaryCtaLabel="Who We Serve"
          hasBreadcrumb
        />
        <TrustedBy />
        <ProblemSection
          heading={persona.problemsHeading}
          subheading={persona.problemsSubheading}
          problems={persona.problems}
        />
        <ServicesGrid
          heading={persona.servicesHeading}
          subheading={persona.servicesSubheading}
          services={persona.services}
        />
        <FeatureHighlight />
        <LocalFAQ
          heading={persona.faqHeading}
          faqs={persona.faqs}
          idPrefix={`${persona.slug}-faq`}
        />
        <section className="relative w-full bg-background py-12 sm:py-16 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border pt-8">
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
                Last updated: {persona.lastUpdated}
              </p>
            </div>
          </div>
        </section>
        <RelatedPersonas slug={slug} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
