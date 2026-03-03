"use client";

import { useState, type ReactNode } from "react";
import { Plus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What does "fee-only" mean, and why does it matter?',
    answer:
      "Fee-only means we are compensated exclusively by the fees our clients pay us — never by commissions, referral fees, or product sales. This avoids the conflicts of interest that arise when advisors earn commissions or sell products — common in the financial industry. When an advisor earns a commission for recommending a particular product, it's difficult to know whether that recommendation is truly in your best interest. With a fee-only model, our only incentive is to give you the best advice we can.",
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
      "As a registered investment advisor, we are legally obligated to act in your best interest at all times. This is known as a fiduciary duty. Not all financial professionals are held to this standard — many operate under a lower \"suitability\" standard, which only requires that recommendations be suitable for you, not necessarily the best option available.",
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

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}): ReactNode {
  const answerId = `faq-answer-${index}`;
  const questionId = `faq-question-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease }}
      className="border-b border-foreground/10"
    >
      <button
        type="button"
        id={questionId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
      >
        <span className="text-base sm:text-lg font-medium text-foreground pr-8">
          {item.question}
        </span>
        <div className="shrink-0 w-6 h-6 flex items-center justify-center">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease }}
          >
            <Plus
              className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={questionId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-foreground/60 leading-relaxed max-w-2xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ(): ReactNode {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-background py-24 sm:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-0 xl:px-12">
        <div className="px-8 sm:px-12">
          <div className="max-w-2xl mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground"
            >
              Questions We Hear Often
            </motion.h2>
          </div>

          <div className="border-t border-foreground/10">
            {faqs.map((faq, index) => (
              <FAQAccordionItem
                key={faq.question}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <p className="text-foreground/60">Still have questions?</p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-foreground font-medium hover:opacity-70 transition-opacity"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
