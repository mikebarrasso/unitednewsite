import { type ReactNode } from "react";

type ServiceSchemaProps = {
  name: string;
  description: string;
  url: string;
};

export function ServiceSchema({
  name,
  description,
  url,
}: ServiceSchemaProps): ReactNode {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://unitedfpg.com${url}`,
    provider: {
      "@type": "FinancialService",
      name: "United Financial Planning Group",
      url: "https://unitedfpg.com",
      telephone: "(631) 234-0871",
      priceRange: "$$",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: "Financial Advisory",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
