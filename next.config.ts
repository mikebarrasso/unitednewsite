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
  // -------------------------------------------------------------------------
  // April 2026 — second pass. Sourced from production 404 logs (Vercel
  // runtime logs, last 24h) cross-referenced against a Wayback Machine
  // crawl of the old WordPress site (175 unique URLs). Specific routes go
  // before catch-alls; the two regex catch-alls at the bottom still win for
  // anything that matches `*-ny` or `/YYYY/MM/DD/{matching-slug}`.
  // -------------------------------------------------------------------------

  // Old top-level pages → new equivalents
  { source: "/our-fees", destination: "/fees" },
  { source: "/services-and-fees", destination: "/fees" },
  { source: "/services-and-fees/our-fees", destination: "/fees" },
  {
    source: "/services-and-fees/financial-planning",
    destination: "/services/financial-planning",
  },
  {
    source: "/services-and-fees/wealth-management",
    destination: "/services/investment-management",
  },
  {
    source: "/services-and-fees/tax-prep",
    destination: "/services/tax-preparation",
  },
  { source: "/services-financial-advisor", destination: "/services" },
  { source: "/what-sets-us-apart", destination: "/why-united" },
  { source: "/associations", destination: "/why-united" },
  { source: "/credit", destination: "/about" },
  {
    source: "/inheritance-planning",
    destination: "/services/financial-planning",
  },
  { source: "/client-testimonials", destination: "/testimonials" },
  { source: "/contact-us", destination: "/contact" },
  { source: "/frequently-asked-questions", destination: "/faq" },
  { source: "/resources/faq", destination: "/faq" },
  { source: "/refer-someone", destination: "/contact" },
  { source: "/client-login", destination: "/contact" },
  { source: "/privacy-policy-2", destination: "/privacy-policy" },
  { source: "/lp-1", destination: "/" },
  { source: "/lp-2", destination: "/" },

  // Old "Meet the team" pages
  { source: "/meet-the-team", destination: "/team" },
  { source: "/meet-the-team/who-we-are", destination: "/about" },
  { source: "/meet-the-team/what-we-believe", destination: "/why-united" },

  // Team aliases / former employees → team page
  { source: "/gerry", destination: "/team/gerry-barrasso" },
  { source: "/ryan-derousseau-cfp", destination: "/team/ryan-derousseau" },
  { source: "/amir", destination: "/team" },
  { source: "/amir-noor-cfp-ea", destination: "/team" },
  { source: "/christine", destination: "/team" },
  { source: "/john", destination: "/team" },

  // Old tax-preparation subpages
  {
    source: "/tax-preparation/book-an-introductory-call",
    destination: "/contact",
  },
  { source: "/tax-preparation/our-team", destination: "/team" },
  {
    source: "/tax-preparation/tax-preparation-services",
    destination: "/services/tax-preparation",
  },

  // In-the-media: best-effort specific match, then catch-all
  {
    source:
      "/in-the-media/napfa-open-your-own-ria-or-join-a-firm-ryan-derousseaus-insightful-experience",
    destination: "/blog/ryan-derousseau-napfa-advisor-magazine",
  },
  { source: "/in-the-media/:path+", destination: "/in-the-media" },

  // Blog: posts whose slugs changed in the migration. Keep these BEFORE the
  // dated-URL regex catch-all so they win for both the bare and dated forms.
  {
    source: "/blog/2-crucial-questions-to-ask-when-interviewing-a-financial-advisor",
    destination: "/blog/two-crucial-questions-interviewing-financial-advisor",
  },
  {
    source: "/blog/investment-management-strategies-for-high-net-worth-individuals",
    destination: "/blog/investment-management-strategies-high-net-worth",
  },
  {
    source: "/blog/retirement-portfolio-strategies-for-market-downturns",
    destination: "/blog/retirement-portfolio-strategies-market-downturns",
  },
  {
    source:
      "/blog/navigating-financial-challenges-as-a-business-owner-in-new-york",
    destination: "/blog/navigating-financial-challenges-business-owner-new-york",
  },
  {
    source: "/blog/gerry-barrasso-cpa-cfp-pfs-quoted-in-fortune",
    destination: "/blog/gerry-barrasso-quoted-in-fortune",
  },
  {
    source:
      "/blog/united-financial-planning-groups-ryan-derousseau-featured-in-napfa-advisor-magazine",
    destination: "/blog/ryan-derousseau-napfa-advisor-magazine",
  },
  {
    source:
      "/2024/08/07/2-crucial-questions-to-ask-when-interviewing-a-financial-advisor",
    destination: "/blog/two-crucial-questions-interviewing-financial-advisor",
  },
  {
    source:
      "/2024/08/19/united-financial-planning-groups-ryan-derousseau-featured-in-napfa-advisor-magazine",
    destination: "/blog/ryan-derousseau-napfa-advisor-magazine",
  },
  {
    source:
      "/2024/08/28/navigating-financial-challenges-as-a-business-owner-in-new-york",
    destination: "/blog/navigating-financial-challenges-business-owner-new-york",
  },
  {
    source:
      "/2024/09/10/investment-management-strategies-for-high-net-worth-individuals",
    destination: "/blog/investment-management-strategies-high-net-worth",
  },
  {
    source: "/2025/02/27/gerry-barrasso-cpa-cfp-pfs-quoted-in-fortune",
    destination: "/blog/gerry-barrasso-quoted-in-fortune",
  },
  {
    source: "/2025/03/18/retirement-portfolio-strategies-for-market-downturns",
    destination: "/blog/retirement-portfolio-strategies-market-downturns",
  },

  // Old WP posts that have no current equivalent → blog index (preserves
  // SEO equity better than a 404 chain).
  { source: "/blog/how-to-plan-for-retirement-and-achieve-financial-independence", destination: "/blog" },
  { source: "/blog/non-profit-fundraising-strategies-to-increase-your-revenue", destination: "/blog" },
  { source: "/blog/the-6-financial-documents-you-need-to-get-a-loan", destination: "/blog" },
  { source: "/blog/how-to-get-student-financial-aid", destination: "/blog" },
  { source: "/blog/crypto-investing-tips-for-beginners", destination: "/blog" },
  { source: "/blog/page/:n", destination: "/blog" },

  // Old blog-unitedfpg/* posts — specific maps where they exist
  {
    source:
      "/blog-unitedfpg/financial-tips-for-business-owners-navigating-wealth-taxes-and-succession-planning",
    destination: "/blog/financial-tips-business-owners",
  },
  {
    source: "/blog-unitedfpg/high-net-worth-financial-planning-tailored-strategies",
    destination: "/blog/high-net-worth-financial-planning",
  },
  {
    source: "/blog-unitedfpg/hybrid-earners-financial-planning-wealth-management",
    destination: "/blog/balancing-ebbs-flows-hybrid-earners",
  },
  {
    source: "/blog-unitedfpg/investing-for-major-financial-goals",
    destination: "/blog/investing-for-major-financial-goals",
  },
  {
    source:
      "/blog-unitedfpg/why-a-fee-only-fiduciary-financial-planner-is-crucial-for-your-wealth-management",
    destination: "/blog/why-fee-only-fiduciary-financial-planner",
  },

  // WordPress folder catch-alls — these MUST come after their specific maps
  // above. /:path* matches zero or more segments (so it also catches the
  // bare path with no slug).
  { source: "/blog-unitedfpg/:path*", destination: "/blog" },
  { source: "/checklists/:path*", destination: "/blog" },
  { source: "/newsletters/:path*", destination: "/blog" },
  { source: "/educational-videos/:path*", destination: "/in-the-media" },
  { source: "/category/:path*", destination: "/blog" },

  // Old 2021 dated posts — none match current slugs, so catch them before
  // the generic dated regex below routes them to a 404'ing /blog/{slug}.
  { source: "/2021/:path*", destination: "/blog" },

  // Generic catch-alls — keep these last.
  {
    source:
      "/:slug((?!financial-advisor-|hauppauge-ny|lake-success-ny|manhattan-ny)[^/]+-ny)",
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
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
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
