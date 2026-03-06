import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/private/", "/towns/"];
  const allow = ["/", "/llms.txt", "/llms-full.txt"];
  const host = new URL(siteConfig.url).host;
  const aiCrawlers = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "PerplexityBot",
    "ClaudeBot",
    "anthropic-ai",
    "Googlebot",
    "Google-Extended",
    "Bingbot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow,
        disallow,
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow,
        disallow,
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host,
  };
}
