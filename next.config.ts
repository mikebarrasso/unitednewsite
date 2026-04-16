import type { NextConfig } from "next";

const legacyRedirects = [
  {
    source: "/financial-planning",
    destination: "/services/financial-planning",
  },
  {
    source: "/retirement-planning",
    destination: "/services/retirement-planning",
  },
  {
    source: "/investment-management",
    destination: "/services/investment-management",
  },
  {
    source: "/wealth-management",
    destination: "/services/investment-management",
  },
  {
    source: "/tax-planning",
    destination: "/services/tax-planning",
  },
  {
    source: "/tax-planning-advisory",
    destination: "/services/tax-planning",
  },
  {
    source: "/tax-preparation",
    destination: "/services/tax-preparation",
  },
  {
    source: "/equity-compensation",
    destination: "/services/equity-compensation",
  },
  {
    source: "/stock-options-equity-comp",
    destination: "/services/equity-compensation",
  },
  {
    source: "/stock-options-equity-compensation-planning",
    destination: "/services/equity-compensation",
  },
  {
    source: "/gerry-barrasso",
    destination: "/team/gerry-barrasso",
  },
  {
    source: "/gerry-barrasso-cpa-cfp-pfs",
    destination: "/team/gerry-barrasso",
  },
  {
    source: "/michael-barrasso",
    destination: "/team/michael-barrasso",
  },
  {
    source: "/ryan-derousseau",
    destination: "/team/ryan-derousseau",
  },
  {
    source: "/jose-vivero",
    destination: "/team/jose-vivero",
  },
  {
    source: "/what-we-believe-li-advisors",
    destination: "/why-united",
  },
  {
    source: "/hauppauge-ny",
    destination: "/locations/hauppauge-ny",
  },
  {
    source: "/manhattan-ny",
    destination: "/locations/manhattan-ny",
  },
  {
    source: "/lake-success-ny",
    destination: "/locations/lake-success-ny",
  },
  {
    source: "/blog/questions-blog",
    destination: "/blog/two-crucial-questions-interviewing-financial-advisor",
  },
  {
    source: "/questions-blog",
    destination: "/blog/two-crucial-questions-interviewing-financial-advisor",
  },
  {
    source: "/2024/08/07/questions-blog",
    destination: "/blog/two-crucial-questions-interviewing-financial-advisor",
  },
  {
    source: "/financial-advisor-hauppauge-ny",
    destination: "/locations/hauppauge-ny",
  },
  {
    source: "/financial-advisor-manhattan-ny",
    destination: "/locations/manhattan-ny",
  },
  {
    source: "/financial-advisor-lake-success-ny",
    destination: "/locations/lake-success-ny",
  },
  {
    source: "/financial-advisor-new-york",
    destination: "/financial-advisor-nyc",
  },
  {
    source: "/financial-advisor-new-york-city",
    destination: "/financial-advisor-nyc",
  },
  {
    source: "/financial-advisor-long-island-ny",
    destination: "/financial-advisor-long-island",
  },
  {
    source:
      "/:slug((?!hauppauge-ny|lake-success-ny|manhattan-ny)[^/]+-ny)",
    destination: "/financial-advisor-:slug",
  },
  {
    source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
    destination: "/blog/:slug",
  },
] satisfies Array<{ source: string; destination: string }>;

const nextConfig: NextConfig = {
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  // Remove console.log in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return legacyRedirects.map((redirect) => ({
      ...redirect,
      permanent: true,
    }));
  },
  async rewrites() {
    return [
      {
        source: "/financial-advisor-:slug",
        destination: "/towns/:slug",
      },
    ];
  },
};

export default nextConfig;
