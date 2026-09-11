import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { RelatedServices } from "@/components/related-services";
import { ServiceFAQ } from "@/components/service-faq";
import { ServiceHero } from "@/components/service-hero";
import { ServiceSchema } from "@/components/service-schema";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Estate Planning Coordination",
  description:
    "Estate planning coordination for families whose tax, investment, retirement, and legacy decisions need to work together.",
  path: "/services/estate-planning",
});

const estatePlanningFaqs = [
  {
    question: "Do you prepare wills and trusts?",
    answer:
      "We do not draft legal documents or provide legal advice. We coordinate with your estate planning attorney and help ensure that your financial plan, tax considerations, beneficiary designations, and account structure are considered alongside the legal work.",
  },
  {
    question: "How does estate planning connect with my financial plan?",
    answer:
      "Estate planning can affect how assets are titled, how beneficiaries are designated, how retirement accounts are handled, and how family members may receive assets. We help bring those financial considerations into the same conversation as your broader financial and tax plan.",
  },
  {
    question: "When should I review an estate plan?",
    answer:
      "A review may be appropriate after a major life, family, career, or financial change, or when tax rules or your intentions change. Your attorney can advise on legal updates. We can help identify planning items to discuss with that attorney.",
  },
  {
    question: "Can you work with my existing estate planning attorney?",
    answer:
      "Yes. With your permission, we can coordinate with your attorney and other professionals so the financial information they need is organized and the resulting work fits your overall plan.",
  },
];

const coordinationAreas = [
  {
    title: "Beneficiary and account reviews",
    description:
      "Review how beneficiary designations, account registrations, and your stated intentions fit together. Legal documents and beneficiary designations can operate differently, so attorney guidance remains essential.",
  },
  {
    title: "Tax-aware planning conversations",
    description:
      "Bring tax considerations into decisions involving retirement accounts, charitable intentions, and the transfer of assets. Tax outcomes depend on individual circumstances and changing law.",
  },
  {
    title: "Retirement and legacy coordination",
    description:
      "Consider how retirement income, distributions, cash flow, and family priorities may affect the resources you intend to leave behind.",
  },
  {
    title: "Professional collaboration",
    description:
      "Help organize financial information and coordinate with your estate attorney, tax professionals, and other specialists when needed.",
  },
];

export default function EstatePlanningPage(): ReactNode {
  return (
    <>
      <ServiceSchema
        name="Estate Planning Coordination"
        description="Financial and tax planning coordination that helps families prepare for estate planning conversations with their attorney."
        url="/services/estate-planning"
      />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Estate Planning" },
          ]}
        />
        <ServiceHero
          eyebrow="Estate Planning Coordination"
          title="Your Legacy Planning Deserves the Same Coordination as the Rest of Your Financial Life."
          subtitle="Estate planning is not only about documents. It is also about how your tax plan, investment accounts, retirement income, and family priorities fit together. We help you prepare for those conversations and coordinate with your estate planning attorney."
          imageUrl="/retirement-couple.png"
          imageAlt="Couple walking together near the water"
          hasBreadcrumb
        />

        <section className="w-full bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#347ad5]">
              Coordinated, not siloed
            </p>
            <h2 className="mt-4 text-3xl font-medium text-foreground sm:text-4xl">
              Legal documents are one part of a larger financial picture.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Your estate planning attorney provides legal guidance and prepares the documents that carry out your wishes. Our role is to bring the financial side of the picture into focus, including account ownership, beneficiary designations, taxes, retirement accounts, and the resources available for the people and causes that matter to you.
              </p>
              <p>
                That coordination may help make planning conversations more productive. It does not replace legal or tax advice, and the appropriate approach depends on your circumstances, goals, and applicable law.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-muted py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h2 className="max-w-3xl text-3xl font-medium text-foreground sm:text-4xl">
              What estate planning coordination can include
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {coordinationAreas.map((area) => (
                <article key={area.title} className="border border-border bg-background p-7">
                  <h3 className="text-xl font-medium text-foreground">{area.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-background py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#347ad5]">A practical starting point</p>
              <h2 className="mt-4 text-3xl font-medium text-foreground sm:text-4xl">
                Begin with the questions your documents should answer.
              </h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>Who should make financial or health decisions if you cannot? Who should receive particular accounts or assets? How do your beneficiary designations and account titles support those wishes?</p>
              <p>We can help organize the financial details and identify questions for your attorney. That gives each professional a clearer view of the same financial picture.</p>
              <p>
                Estate planning often intersects with retirement income and taxes. Explore our{" "}
                <Link href="/services/retirement-planning" className="text-[#1e6eae] underline hover:no-underline">
                  retirement planning
                </Link>{" "}
                and{" "}
                <Link href="/services/tax-planning" className="text-[#1e6eae] underline hover:no-underline">
                  tax planning
                </Link>{" "}
                services for more context.
              </p>
            </div>
          </div>
        </section>

        <RelatedServices
          services={[
            {
              label: "Financial Planning",
              description: "Bring your family goals, cash flow, investments, and long-term priorities into one coordinated plan.",
              href: "/services/financial-planning",
            },
            {
              label: "Tax Planning",
              description: "Evaluate tax considerations alongside your broader financial decisions and changing circumstances.",
              href: "/services/tax-planning",
            },
            {
              label: "Retirement Planning",
              description: "Coordinate retirement income decisions with the legacy you intend to leave behind.",
              href: "/services/retirement-planning",
            },
          ]}
        />

        <ServiceFAQ faqs={estatePlanningFaqs} heading="Estate Planning Coordination Questions" />

        <section className="w-full bg-[#1e3a5f] py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
            <h2 className="text-3xl font-medium text-white sm:text-4xl">Let&apos;s Start With a Conversation.</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">No sales pitch. No obligation.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center rounded-md bg-[#347ad5] px-6 py-3 font-medium text-black transition-colors hover:bg-[#347ad5]/90">
              Talk With Our Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
