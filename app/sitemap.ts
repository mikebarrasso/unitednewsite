import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";
import { getAllPosts, getPostLastModified } from "@/lib/blog";
import { locations } from "@/lib/locations";
import { siteConfig } from "@/lib/metadata";
import { personas } from "@/lib/personas";
import { towns } from "@/lib/towns";

type SitemapChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type StaticRoute = {
  path: string;
  sources: string[];
  changeFrequency: SitemapChangeFrequency;
  priority: number;
};

const FALLBACK_LASTMOD = new Date("2025-01-01");

const staticRoutes: StaticRoute[] = [
  {
    path: "/",
    sources: ["app/page.tsx"],
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    sources: ["app/about/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services",
    sources: ["app/services/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/financial-planning",
    sources: ["app/services/financial-planning/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/retirement-planning",
    sources: ["app/services/retirement-planning/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/investment-management",
    sources: ["app/services/investment-management/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/tax-planning",
    sources: ["app/services/tax-planning/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/tax-preparation",
    sources: ["app/services/tax-preparation/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/equity-compensation",
    sources: ["app/services/equity-compensation/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/team",
    sources: ["app/team/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/testimonials",
    sources: ["app/testimonials/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog",
    sources: ["app/blog/page.tsx", "lib/blog.ts"],
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/in-the-media",
    sources: ["app/in-the-media/page.tsx", "lib/blog.ts"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/faq",
    sources: ["app/faq/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/contact",
    sources: ["app/contact/page.tsx", "components/tally-contact-form.tsx"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/why-united",
    sources: ["app/why-united/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/fees",
    sources: ["app/fees/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/compliance",
    sources: ["app/compliance/page.tsx"],
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/who-we-serve",
    sources: ["app/who-we-serve/page.tsx", "lib/personas.ts"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/locations",
    sources: ["app/locations/page.tsx", "lib/locations.ts"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/financial-advisor-long-island",
    sources: ["app/financial-advisor-long-island/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/financial-advisor-manhattan",
    sources: ["app/financial-advisor-manhattan/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/financial-advisor-nyc",
    sources: ["app/financial-advisor-nyc/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/team/gerry-barrasso",
    sources: ["app/team/gerry-barrasso/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/team/michael-barrasso",
    sources: ["app/team/michael-barrasso/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/team/ryan-derousseau",
    sources: ["app/team/ryan-derousseau/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/team/jose-vivero",
    sources: ["app/team/jose-vivero/page.tsx"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

function getLatestModifiedDate(sources: string[]): Date {
  const timestamps = sources.flatMap((source) => {
    try {
      return [statSync(join(process.cwd(), source)).mtime.getTime()];
    } catch {
      return [];
    }
  });

  if (timestamps.length === 0) {
    return FALLBACK_LASTMOD;
  }

  return new Date(Math.max(...timestamps));
}

function absoluteUrl(path: string): string {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const locationLastModified = getLatestModifiedDate([
    "app/locations/[slug]/page.tsx",
    "lib/locations.ts",
  ]);
  const townLastModified = getLatestModifiedDate([
    "app/towns/[slug]/page.tsx",
    "lib/towns.ts",
  ]);

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: getLatestModifiedDate(route.sources),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${siteConfig.url}/locations/${location.slug}`,
    lastModified: locationLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const townPages: MetadataRoute.Sitemap = towns.map((town) => ({
    url: `${siteConfig.url}/financial-advisor-${town.slug}`,
    lastModified: townLastModified,
    changeFrequency: "monthly",
    priority: town.tier === 1 ? 0.8 : town.tier === 2 ? 0.7 : 0.6,
  }));

  const personaLastModified = getLatestModifiedDate([
    "app/who-we-serve/[slug]/page.tsx",
    "lib/personas.ts",
  ]);
  const personaPages: MetadataRoute.Sitemap = personas.map((persona) => ({
    url: `${siteConfig.url}/who-we-serve/${persona.slug}`,
    lastModified: personaLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPostPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(getPostLastModified(post)),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...locationPages,
    ...personaPages,
    ...townPages,
    ...blogPostPages,
  ];
}
