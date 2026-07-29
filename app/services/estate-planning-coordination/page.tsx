import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedServices } from "@/components/related-services";
import { ServiceFAQ } from "@/components/service-faq";
import { ServiceCrossLinks } from "@/components/service-cross-links";
import { ServiceSchema } from "@/components/service-schema";
import { FinalCTA } from "@/components/final-cta";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Estate Planning Coordination",
  description:
    "Estate planning coordination with a financial advisor near you. United FPG's CFP® professionals, CPAs, and Enrolled Agents align beneficiary designations, account titling, trust funding, and tax-efficient wealth transfer with your complete financial plan.",
  path: "/services/estate-planning-coordination",
});

const estatePlanningFaqs = [
  {
    question: "What does estate planning coordination mean at United FPG?",
    answer:
      "Estate planning coordination at United FPG means our CFP® professionals, CPAs, and Enrolled Agents work alongside your estate attorney to align the financial and tax side of your estate plan with the rest of your financial picture. We review beneficiary designations, account titling, trust funding follow-through, and tax-efficient wealth transfer strategies so that the documents your attorney drafts can actually work as intended.",
  },
  {
    question: "Does United FPG draft wills, trusts, or other legal documents?",
    answer:
      "No. United FPG does not draft legal documents and does not practice law. Clients work with their own estate attorney for document drafting. Our role is to coordinate the financial and tax dimensions: reviewing how accounts are titled, confirming beneficiary designations match the estate plan, and modeling the tax implications of wealth transfer decisions so your attorney and your financial team are working from the same set of facts.",
  },
  {
    question: "Who benefits most from estate planning coordination?",
    answer:
      "Estate planning coordination is especially valuable for people in the five to ten years before retirement who are making beneficiary and titling decisions that can be difficult to undo, and for business owners and founders whose estate plans often involve complex ownership structures, buy-sell agreements, and succession considerations. If your financial plan, investment accounts, and estate documents have never been reviewed together, there may be gaps worth addressing.",
  },
  {
    question:
      "How does estate planning coordination connect to tax planning?",
    answer:
      "Many estate planning decisions, including Roth conversions, charitable giving, the timing of asset transfers, and the way accounts are titled, carry meaningful tax consequences. United FPG's integrated team of CFPs, CPAs, and Enrolled Agents can model those implications before decisions are finalized so the estate plan and the tax plan reinforce each other rather than working at cross-purposes.",
  },
  {
    question:
      "Is United FPG fee-only when it comes to estate planning coordination?",
    answer:
      "Yes. United FPG is a fee-only firm. We do not earn commissions or receive compensation from insurance products, legal referrals, or any other third party. Our advice on estate planning coordination, like all our advice, is compensated solely by the fees our clients pay.",
  },
];

const whatItIncludes = [
  {
    heading: "Beneficiary Designation Review",
    body: "We review every account, policy, and retirement plan to confirm beneficiary designations are consistent with your estate plan. Outdated or conflicting designations can override a will; catching them before they cause problems is a core part of coordination.",
  },
  {
    heading: "Account Titling and Ownership Structure",
    body: "How accounts are titled, individually, jointly, in a trust, or in a business entity, affects both estate distribution and tax treatment. We work through titling decisions with you so that the ownership structure of your assets aligns with your estate plan.",
  },
  {
    heading: "Trust Funding Follow-Through",
    body: "A trust that is not funded is a document, not a plan. We work with you and your estate attorney to confirm that assets intended for a trust are actually retitled and transferred so the plan functions as designed.",
  },
  {
    heading: "Tax-Efficient Wealth Transfer",
    body: "The order and method by which assets pass to heirs can affect the tax burden on your estate and on your beneficiaries. Our CPAs and CFPs model those implications so wealth transfer decisions consider both the estate and the income tax picture.",
  },
  {
    heading: "Coordination with Your Estate Attorney",
    body: "We communicate directly with your estate attorney when that helps. If you do not yet have an estate attorney, we can help you understand what kind of professional you need and what questions to bring to that first conversation.",
  },
  {
    heading: "Integration with Your Full Financial Plan",
    body: "Estate planning does not happen in a silo at United FPG. We review it alongside your retirement income strategy, investment portfolio, and tax plan so every piece is evaluated as part of the same financial picture.",
  },
];

export default function EstatePlanningCoordinationPage(): ReactNode {
  return (
    <>
      <ServiceSchema
        name="Estate Planning Coordination"
        description="Estate planning coordination that aligns beneficiary designations, account titling, trust funding, and tax-efficient wealth transfer with your complete financial plan. United FPG works alongside your estate attorney."
        url="/services/estate-planning-coordination"
      />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Estate Planning Coordination" },
          ]}
        />
        <ServiceHero
          eyebrow="Estate Planning Coordination"
          title="Your Estate Plan and Your Financial Plan Should Work as One."
          subtitle="Beneficiary designations, account titling, trust funding, and tax-efficient wealth transfer can all affect how your estate plan actually works. United FPG coordinates the financial and tax side alongside your estate attorney so nothing falls through the cracks."
          imageUrl="/retirees.png"
          imageAlt="Couple reviewing financial and estate planning documents with an advisor"
          hasBreadcrumb
        />

        {/* Problem Section */}
        <section className="relative w-full bg-muted py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <p className="mb-4 text-sm font-medium text-[#1e6eae]">
              The Gap Most People Miss
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium font-serif text-foreground mb-6">
              A Will Is Not Enough on Its Own
            </h2>
            <div className="space-y-5 text-foreground/70 leading-relaxed">
              <p>
                Most people assume an estate plan is complete once the documents
                are signed. But the legal documents are only one part of the
                picture. An IRA with an outdated beneficiary designation will
                pass outside of a will entirely. A trust that was never funded
                with the intended assets cannot distribute those assets. A
                jointly titled account may transfer to a surviving spouse in a
                way the estate plan did not anticipate.
              </p>
              <p>
                These are not rare edge cases. They are common results of an
                estate plan that was never coordinated with the financial plan.
                United FPG seeks to close that gap by working alongside your
                estate attorney on the financial and tax dimensions that legal
                documents alone cannot address.
              </p>
              <p>
                This matters most for people in the five to ten years before
                retirement, when assets are at their largest and decisions about
                titling, beneficiary designations, and wealth transfer
                strategies carry their greatest long-term consequences. It also
                matters significantly for business owners and founders whose
                estate plans involve ownership structures, buy-sell agreements,
                or succession planning that intersect with both personal and
                business finances.
              </p>
            </div>
          </div>
        </section>

        {/* What It Includes Section */}
        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <p className="mb-4 text-sm font-medium text-[#1e6eae]">
              What Estate Planning Coordination Includes
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium font-serif text-foreground mb-4">
              The Financial and Tax Side of Your Estate Plan
            </h2>
            <p className="text-foreground/60 mb-12 max-w-2xl">
              United FPG&apos;s CFP® professionals, CPAs, and Enrolled Agents
              work together on the elements below. Clients work with their own
              estate attorney for document drafting; we coordinate everything
              else.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whatItIncludes.map((item) => (
                <div key={item.heading} className="flex flex-col gap-3">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.heading}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiator Section */}
        <section className="relative w-full bg-muted py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <p className="mb-4 text-sm font-medium text-[#1e6eae]">
              Why Coordination Matters
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium font-serif text-foreground mb-6">
              Integrated Advice, Not Siloed Advice
            </h2>
            <div className="space-y-5 text-foreground/70 leading-relaxed">
              <p>
                United FPG was founded by Gerry Barrasso, CFP®, CPA, PFS, and
                built around a simple observation: financial advice works best
                when the advisor who manages your investments is the same team
                that files your taxes and coordinates your estate plan. That
                integration is not common. Most households have a financial
                advisor in one office and a CPA in another, and those
                professionals rarely talk to each other.
              </p>
              <p>
                Estate planning coordination is a place where that gap is
                especially costly. A Roth conversion that makes sense for
                retirement income may also affect estate values and heir tax
                outcomes. A charitable bequest can interact with income tax
                deductions in ways that require planning before year-end. The
                way an IRA beneficiary designation is structured may determine
                whether heirs can stretch distributions or must take them within
                ten years.
              </p>
              <p>
                Because our CFP® professionals, CPAs, and Enrolled Agents work
                side by side, those connections can be evaluated together rather
                than missed because advice was siloed across separate firms.
              </p>
              <p>
                As a fee-only fiduciary firm, we do not earn commissions on
                insurance products, annuities, or any other financial products
                that sometimes intersect with estate planning. Our advice is
                compensated solely by the fees our clients pay.
              </p>
            </div>
          </div>
        </section>

        <RelatedServices
          services={[
            {
              label: "Financial Planning",
              description:
                "Your estate plan is one piece of a comprehensive financial roadmap. We build both together so each decision reinforces the others.",
              href: "/services/financial-planning",
            },
            {
              label: "Tax Planning",
              description:
                "Wealth transfer decisions carry tax consequences. Our CPAs model those implications before they are locked in.",
              href: "/services/tax-planning",
            },
            {
              label: "Retirement Planning",
              description:
                "Beneficiary designations, RMDs, and account titling decisions intersect with retirement income planning in ways that matter most in the final decade before retirement.",
              href: "/services/retirement-planning",
            },
          ]}
        />

        <ServiceCrossLinks />

        <ServiceFAQ faqs={estatePlanningFaqs} />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
