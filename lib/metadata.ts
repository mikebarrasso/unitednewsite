import type { Metadata } from "next";

export const siteConfig = {
  name: "United Financial Planning Group",
  shortName: "United FPG",
  description:
    "United Financial Planning Group is a fee-only advisory firm with CFP® professionals, CPAs, and Enrolled Agents under one roof. Financial planning, investment management, and tax services, integrated for clients nationwide.",
  url: "https://www.unitedfpg.com",
  // Resolved by Next from app/opengraph-image.tsx; no static fallback needed.
  creator: "@unitedfpg",
  authors: [
    {
      name: "United Financial Planning Group",
      url: "https://unitedfpg.com",
    },
  ],
  keywords: [
    "fee-only financial advisor",
    "financial planning and tax planning under one roof",
    "CPA and CFP® financial advisor",
    "retirement planning advisor",
    "tax-efficient investment management",
    "stock options financial advisor",
    "equity compensation tax planning",
    "fiduciary financial advisor",
    "financial advisor New York",
    "integrated tax and financial planning",
  ],
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    // Short suffix keeps SERP titles under ~60 chars even for long page titles.
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  verification: {
    google: "B1nH_--m8YRYK7N9s2BLxDhXNOqVphubh54Jy28_EZE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.creator,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
};

export function createMetadata({
  title,
  absoluteTitle,
  description,
  path = "/",
  image,
  noIndex = false,
}: {
  title?: string;
  absoluteTitle?: string;
  description?: string;
  path?: string;
  /** Optional image override. If omitted, Next falls back to app/opengraph-image.tsx. */
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const resolvedTitle = absoluteTitle ? { absolute: absoluteTitle } : title;
  const ogTitle = absoluteTitle ?? title ?? siteConfig.name;

  const imageOverride = image
    ? {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: ogTitle,
          },
        ],
      }
    : {};

  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: ogTitle,
      description: description ?? siteConfig.description,
      url,
      ...imageOverride,
    },
    twitter: {
      // Re-declare card here because Next.js does a shallow merge of the
      // twitter metadata object: child pages overwrite the parent's twitter
      // entry wholesale, so dropping `card` would silently downgrade the
      // social preview to the small summary layout.
      card: "summary_large_image",
      title: ogTitle,
      description: description ?? siteConfig.description,
      ...(image ? { images: [image] } : {}),
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
