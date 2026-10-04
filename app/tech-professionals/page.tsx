import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Stats } from "@/components/stats";
import {
  BigQuestionsSection,
  ChooseAdvisorSection,
  ClientCompaniesSection,
  DifferentSection,
  HowWeHelpSection,
  MistakesSection,
  PlanningLooksLikeSection,
  StockTypesSection,
  TechHero,
  TestimonialsSection,
} from "@/components/tech-professionals-content";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

// Preview build of a copy sample. Kept out of search and out of the nav.
export const metadata: Metadata = createMetadata({
  title: "Financial Planning for High-Earning Tech Professionals",
  description:
    "We help you turn your high income and complex company stock decisions into freedom, flexibility, and real wealth you can actually use.",
  path: "/tech-professionals",
  noIndex: true,
});

const faqs = [
  {
    question:
      "Do you only work with tech professionals in Austin, or can you work with me if I live somewhere else?",
    answer:
      "We work with tech professionals in Austin and nationwide. While we're based in Austin and have many local clients, all of our relationships are fully remote. We use video calls, screen sharing, and a secure document portal to work with you wherever you are.",
  },
  {
    question: "How much do I need to have saved to work with you?",
    answer: (
      <>
        <p>
          We do our best work with: Tech professionals who have accumulated
          investment and retirement assets of $1,000,000 or more. These assets
          can be in brokerage, IRA, 401(k), 403(b), options accounts, and more.
        </p>
        <p>
          This minimum does not typically include things like the value of your
          home, personal property, or a business you own. We know this can be
          confusing, especially for tech professionals who may have a high net
          worth tied up in other areas.
        </p>
        <p>
          If you’re not sure whether you meet the minimum or expect to in the
          near future, we’re happy to talk it through and help you understand
          how it applies to your situation.
        </p>
        <p>
          <Link
            href="/contact"
            className="font-medium text-[#1e6eae] hover:underline"
          >
            ➡ Start by filling out our form to book a call with our team.
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "How do you charge for your services?",
    answer: (
      <>
        <p>
          We charge an assets under management (AUM) fee based on your
          investable assets.
        </p>
        <p>
          We do not offer hourly planning or project work. Instead, we work
          with clients through an ongoing relationship. That usually includes
          financial planning and portfolio management, plus coordinating the
          moving parts of your life (like taxes, company stock decisions,
          retirement accounts, and major goals).
        </p>
        <p>
          <Link
            href="/fees"
            className="font-medium text-[#1e6eae] hover:underline"
          >
            ➡ View how much we charge for our services.
          </Link>
        </p>
      </>
    ),
  },
];

export default function TechProfessionalsPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <TechHero />
        <Stats
          heading="Your Trusted Austin Financial Advisors Serving You Virtually Nationwide"
          description={null}
          items={[
            { value: 200, suffix: "+", label: "Tech clients served*" },
            { value: 18, suffix: "+", label: "Years of experience*" },
            { value: 100, suffix: "%", label: "Fiduciary commitment" },
          ]}
          footnote="* All numbers updated 02/26/2026"
        />
        <BigQuestionsSection />
        <HowWeHelpSection />
        <StockTypesSection />
        <ClientCompaniesSection />
        <PlanningLooksLikeSection />
        <MistakesSection />
        <TestimonialsSection />
        <ChooseAdvisorSection />
        <DifferentSection />
        <FAQ
          heading="Common Questions Tech Professionals Ask Us"
          items={faqs}
          className="bg-muted/30"
          showContactLink={false}
        />
        <FinalCTA
          title="Ready to Turn Your Tech Success into Freedom, Flexibility, and Options?"
          description="Schedule a conversation with our team to see if we’re a great fit. No pressure, no sales pitch. Just a kind, caring team of financial planners ready to help."
          titleClassName="max-w-3xl"
          ctaLabel="Schedule A Call With Us"
          note="Free 45-minute call • Fee-Only Financial Planners in Austin, TX • Fiduciaries"
        />
      </main>
      <Footer />
    </>
  );
}
