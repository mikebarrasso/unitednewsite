import type { ReactNode } from "react";

type PersonSchemaProps = {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  credentials?: string[];
  url: string;
  worksFor?: string;
  linkedIn?: string;
  alumniOf?: string[];
  knowsAbout?: string[];
};

export function PersonSchema({
  name,
  jobTitle,
  description,
  image,
  credentials,
  url,
  worksFor = "United Financial Planning Group",
  linkedIn,
  alumniOf,
  knowsAbout,
}: PersonSchemaProps): ReactNode {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    url: `https://unitedfpg.com${url}`,
    worksFor: {
      "@type": "Organization",
      name: worksFor,
      url: "https://unitedfpg.com",
    },
  };

  if (image) {
    schema.image = `https://unitedfpg.com${image}`;
  }

  if (credentials && credentials.length > 0) {
    schema.hasCredential = credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      name: c,
    }));
  }

  if (linkedIn) {
    schema.sameAs = [linkedIn];
  }

  if (alumniOf && alumniOf.length > 0) {
    schema.alumniOf = alumniOf.map((school) => ({
      "@type": "EducationalOrganization",
      name: school,
    }));
  }

  if (knowsAbout && knowsAbout.length > 0) {
    schema.knowsAbout = knowsAbout;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
