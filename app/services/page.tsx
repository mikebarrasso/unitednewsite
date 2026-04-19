import { Breadcrumb } from "@/components/breadcrumb";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { createMetadata, siteConfig } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Our Services",
  description:
    "Explore our fee-only services: financial planning, retirement planning, investment management, tax planning, tax preparation, and equity compensation guidance — all coordinated under one roof.",
  path: "/services",
});

const services = [
  {
    title: "Financial Planning",
    description:
      "A comprehensive roadmap for your financial future, built around your actual goals, not a generic questionnaire.",
    href: "/services/financial-planning",
  },
  {
    title: "Retirement Planning",
    description:
      "Turn decades of accumulation into sustainable income, with a clear strategy for Social Security, withdrawals, Roth conversions, and healthcare costs.",
    href: "/services/retirement-planning",
  },
  {
    title: "Investment Management",
    description:
      "Portfolio management that goes beyond asset allocation, integrating tax efficiency, risk management, and your complete financial picture.",
    href: "/services/investment-management",
  },
  {
    title: "Tax Planning",
    description:
      "Proactive strategies to minimize your lifetime tax burden, not just this year's return, but across decades of wealth-building decisions.",
    href: "/services/tax-planning",
  },
  {
    title: "Tax Preparation",
    description:
      "Accurate, thorough tax preparation by CPAs and Enrolled Agents who already understand your investments, your retirement plan, and your goals.",
    href: "/services/tax-preparation",
  },
  {
    title: "Equity Compensation",
    description:
      "Navigate stock options, RSUs, and equity awards with tax-coordinated planning that aligns vesting schedules with your broader financial strategy.",
    href: "/services/equity-compensation",
  },
];

const blindSpots = [
  "Your advisor rebalances your portfolio in December, triggering capital gains your CPA didn't expect and can't offset.",
  "You convert to a Roth IRA based on a rule of thumb, without modeling how it impacts your Medicare premiums two years later.",
  "You exercise stock options on your own timeline, unaware that waiting three months would have saved you $40,000 in taxes.",
];

function ServicesPageSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Financial Services",
      description:
        "Comprehensive fee-only financial services including financial planning, retirement planning, investment management, tax planning, and tax preparation.",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: `${siteConfig.url}${service.href}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteConfig.url}/services`,
        },
      ],
    },
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

export default function ServicesPage(): ReactNode {
  return (
    <>
      <ServicesPageSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "Services" }]} />
        <ServiceHero
          eyebrow="All Services"
          title="Every Part of Your Financial Life. One Team. One Strategy."
          subtitle="Most people cobble together advice from a financial advisor, a CPA, and maybe an estate attorney. We bring it all together so every decision reinforces the others."
          imageUrl="/240710_AJ8700-scaled%20(1).jpg"
          imageAlt="The United Financial Planning Group team"
          secondaryCtaHref="/contact"
          secondaryCtaLabel="Talk With Our Team"
          hasBreadcrumb
        />

        {/* Services Grid */}
        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h2 className="sr-only">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col p-8 bg-muted/50 border border-border rounded-sm hover:border-foreground/20 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cost of Disconnected Advice */}
        <section className="relative w-full bg-muted py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-medium font-serif text-foreground mb-4">
              The Cost of Disconnected Advice
            </h2>
            <p className="text-foreground/60 mb-8">
              Here&apos;s what happens when your financial advisor and your CPA
              don&apos;t talk:
            </p>
            <ul className="space-y-4 mb-8">
              {blindSpots.map((spot) => (
                <li
                  key={spot}
                  className="flex items-start gap-3 text-foreground/70"
                >
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30" />
                  <span className="leading-relaxed">{spot}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-foreground/40 leading-relaxed mb-8">
              The scenarios above are hypothetical illustrations for educational
              purposes only. They do not represent actual client outcomes. Dollar
              figures are examples only; individual results vary based on
              personal circumstances, tax situation, and applicable law.
            </p>
            <p className="text-foreground font-medium text-lg">
              At United, they share a hallway.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
