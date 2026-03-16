import type { Metadata } from "next";

export const siteConfig = {
  name: "United Financial Planning Group",
  description:
    "United Financial Planning Group is a fee-only advisory firm with CFP® professionals, CPAs, and Enrolled Agents under one roof. Financial planning, investment management, and tax services, integrated for clients nationwide.",
  url: "https://unitedfpg.com",
  ogImage: "/og-image.png",
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
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
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
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  icons: {
    icon: "/favicon.ico",
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
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;
  const resolvedTitle = absoluteTitle ? { absolute: absoluteTitle } : title;
  const ogTitle = absoluteTitle ?? title ?? siteConfig.name;

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
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      title: ogTitle,
      description: description ?? siteConfig.description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
