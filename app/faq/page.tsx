import { Breadcrumb } from "@/components/breadcrumb";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about fee-only financial planning, fiduciary advisors, integrated tax and investment services, and working with United Financial Planning Group.",
  path: "/faq",
});

const faqItems = [
  {
    question: 'What does "fee-only" mean, and why does it matter?',
    answer:
      "Fee-only means we are compensated exclusively by the fees our clients pay us — never by commissions, referral fees, or product sales. This avoids the conflicts of interest that arise when advisors earn commissions or sell products — common in the financial industry. When an advisor earns a commission for recommending a particular product, it's difficult to know whether that recommendation is truly in your best interest. With a fee-only model, our only incentive is to give you objective advice that serves your best interests.",
  },
  {
    question:
      "How is United Financial Planning Group different from other financial advisors?",
    answer:
      "Most advisory firms focus on one piece of the puzzle — usually investment management. If you need tax planning, they refer you out. We built our firm differently. Our team includes Certified Financial Planners, CPAs, and Enrolled Agents working together under one roof. Your financial plan, investment strategy, tax plan, and tax return are all created and managed by people who talk to each other daily.",
  },
  {
    question: "What does it mean that you're a fiduciary?",
    answer:
      'As a registered investment advisor, we are legally obligated to act in your best interest at all times. This is known as a fiduciary duty. Not all financial professionals are held to this standard — many operate under a lower "suitability" standard, which only requires that recommendations be suitable for you, not necessarily the best option available.',
  },
  {
    question: "Who are your typical clients?",
    answer:
      "We work with individuals and families who have accumulated meaningful wealth and want thoughtful, coordinated guidance. Many of our clients are approaching or already in retirement. Others are business owners, corporate executives with equity compensation, startup founders, or high-net-worth individuals navigating complex financial situations.",
  },
  {
    question: "Do I need to live in New York to work with you?",
    answer:
      "No. While we have offices in the New York metro area, we serve clients nationwide. Much of our work is done through video calls and secure digital tools, and our planning and tax preparation process works seamlessly regardless of where you're located.",
  },
  {
    question: "How does the planning process work?",
    answer:
      "It starts with a conversation. We'll spend time understanding your financial situation, your concerns, and your goals. From there, we develop a comprehensive plan that addresses your investments, retirement timeline, tax situation, and anything else that's relevant. The plan isn't a one-time deliverable — it's an ongoing relationship where we monitor, adjust, and coordinate as your life evolves.",
  },
  {
    question: "Do you help with stock options and equity compensation?",
    answer:
      "Yes — this is one of our core strengths. Equity compensation (ISOs, NSOs, RSUs, ESPPs) involves complex tax timing decisions that can significantly impact your net outcome. Because we handle both the financial planning and tax preparation side, we can model exercise strategies, manage AMT exposure, and coordinate equity decisions with your overall financial plan.",
  },
];

function FAQPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQPage(): ReactNode {
  return (
    <>
      <FAQPageSchema />
      <main id="main-content" className="flex-1">
        <Breadcrumb items={[{ label: "FAQ" }]} />
        <section className="relative w-full bg-muted pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Questions We Hear Often
            </h1>
          </div>
        </section>

        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
