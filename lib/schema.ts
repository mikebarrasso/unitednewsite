import { siteConfig } from "@/lib/config";

export const organizationSchemaId = `${siteConfig.url}/#organization`;

export const officeAddresses = [
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
    streetAddress: "14 Penn Plaza",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10122",
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
] as const;

export const coreServiceNames = [
  "Financial Planning",
  "Investment Management",
  "Tax Planning",
  "Tax Preparation",
  "Retirement Planning",
  "Equity Compensation Planning",
] as const;

export function createOfferCatalog(
  services: readonly string[],
  name = "Financial Advisory Services",
) {
  return {
    "@type": "OfferCatalog",
    name,
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };
}
