import type { ReactNode } from "react";

export type ServiceFAQItem = {
  question: string;
  answer: string;
};

type ServiceFAQProps = {
  heading?: string;
  faqs: ServiceFAQItem[];
};

export function ServiceFAQ({
  heading = "Frequently Asked Questions",
  faqs,
}: ServiceFAQProps): ReactNode {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="bg-background w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium text-[#1e6eae]">Service FAQ</p>
          <h2 className="text-foreground mb-10 font-serif text-3xl font-medium sm:text-4xl">
            {heading}
          </h2>
          <dl className="divide-border border-border divide-y border-y">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <dt className="text-foreground text-base font-semibold">
                  {faq.question}
                </dt>
                <dd className="text-muted-foreground mt-3 leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
            This information is general education only. Decisions about tax,
            investment, retirement, or financial planning should be evaluated
            against your specific circumstances with qualified professionals.
          </p>
        </div>
      </section>
    </>
  );
}
