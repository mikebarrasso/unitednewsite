import type { Persona } from "@/lib/personas";
import { siteConfig } from "@/lib/metadata";
import type { ReactNode } from "react";

export function PersonaSchema({ persona }: { persona: Persona }): ReactNode {
  const pageUrl = `${siteConfig.url}/who-we-serve/${persona.slug}`;

  const financialService = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `United Financial Planning Group – ${persona.name}`,
    url: pageUrl,
    logo: `${siteConfig.url}/logo-black-cropped.png`,
    description: persona.metaDescription,
    telephone: "(631) 234-0871",
    email: "info@unitedfpg.com",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "350 Motor Parkway, Suite 300",
        addressLocality: "Hauppauge",
        addressRegion: "NY",
        postalCode: "11788",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "1979 Marcus Avenue, Suite 210",
        addressLocality: "Lake Success",
        addressRegion: "NY",
        postalCode: "11042",
        addressCountry: "US",
      },
    ],
    serviceType: persona.serviceTypes,
    priceRange: "$$",
    parentOrganization: {
      "@type": "Organization",
      name: "United Financial Planning Group",
      url: siteConfig.url,
    },
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Who We Serve",
        item: `${siteConfig.url}/who-we-serve`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: persona.name,
        item: pageUrl,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: persona.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
