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
  founderVariant = false,
}: {
  heading: string;
  subheading: string;
  services: { title: string; description: string; href: string }[];
  founderVariant?: boolean;
}): ReactNode {
  if (founderVariant) {
    return (
      <section className="relative w-full overflow-hidden bg-[#1e3a5f] py-24 sm:py-32 text-white">
        <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.42)_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-12 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">
                Your founder planning desk
              </p>
              <h2 className="mt-5 text-3xl font-medium font-serif leading-tight sm:text-4xl lg:text-5xl">
                {heading}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                {subheading}
              </p>
              <div className="mt-8 h-px w-20 bg-sky-200/80" />
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
                Different questions may need attention at different stages. Start with the area most relevant to your next decision.
              </p>
            </div>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {services.map((service, index) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group grid grid-cols-[auto_1fr_auto] gap-x-5 py-7 sm:gap-x-7 sm:py-9"
                >
                  <span className="font-serif text-3xl leading-none text-sky-200/80 sm:text-4xl">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-sky-200">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-white/70">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 text-sky-200 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

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

function FounderPlanningSections({
  planningStages,
  preparationItems,
  resources,
}: {
  planningStages?: { title: string; description: string }[] | undefined;
  preparationItems?: string[] | undefined;
  resources?: { title: string; description: string; href: string }[] | undefined;
}): ReactNode {
  if (!planningStages && !preparationItems && !resources) return null;

  return (
    <>
      {planningStages && (
        <section className="relative w-full bg-muted py-24 sm:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1e6eae]">
              A coordinated planning process
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground max-w-3xl">
              Planning Through Each Stage of Founder Wealth
            </h2>
            <p className="mt-4 text-foreground/60 max-w-2xl leading-relaxed">
              Founder planning is not a one-time event. The questions can change as your ownership, income, company, and personal priorities evolve.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {planningStages.map((stage, index) => (
                <div key={stage.title} className="rounded-xl border border-border bg-background p-6 sm:p-8">
                  <span className="text-sm font-semibold text-[#1e6eae]">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{stage.title}</h3>
                  <p className="mt-3 text-foreground/60 leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {preparationItems && (
        <section className="relative w-full bg-background py-24 sm:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1e6eae]">
                Optional preparation
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-medium font-serif leading-tight text-foreground">
                A Few Documents Can Make the First Conversation More Productive
              </h2>
              <p className="mt-4 text-foreground/60 leading-relaxed">
                You do not need to have everything organized before reaching out. If these documents are readily available, they can provide useful context.
              </p>
            </div>
            <ul className="space-y-3 rounded-xl border border-border bg-muted p-6 sm:p-8">
              {preparationItems.map((item) => (
                <li key={item} className="flex gap-3 text-foreground/70 leading-relaxed">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1e6eae]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {resources && (
        <section className="relative w-full bg-muted py-24 sm:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1e6eae]">
              Founder resources
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-medium font-serif leading-tight text-foreground">
              Explore the Questions Behind the Decisions
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <Link key={resource.href} href={resource.href} className="group rounded-xl border border-border bg-background p-6 sm:p-8 hover:border-foreground/20 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-[#1e6eae] transition-colors">{resource.title}</h3>
                  <p className="mt-3 text-foreground/60 leading-relaxed">{resource.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/50 group-hover:text-[#1e6eae] transition-colors">
                    Read the article
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
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
          founderVariant={persona.slug === "startup-founders"}
        />
        <FounderPlanningSections
          planningStages={persona.planningStages}
          preparationItems={persona.preparationItems}
          resources={persona.resources}
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
        {persona.showStandardCta && (
          <section className="relative w-full bg-background py-12 sm:py-16 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 border-t border-border pt-8">
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground">
                Let&apos;s Start With a Conversation
              </h2>
              <p className="mt-3 text-foreground/70 leading-relaxed max-w-2xl">
                <Link
                  href="/contact"
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Let&apos;s Start With a Conversation
                </Link>
                . No sales pitch. No obligation.
              </p>
            </div>
          </section>
        )}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
