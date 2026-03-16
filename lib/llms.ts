import { getAllPosts } from "@/lib/blog";
import { locations } from "@/lib/locations";
import { siteConfig } from "@/lib/metadata";
import { towns } from "@/lib/towns";

type LlmsLink = {
  title: string;
  path: string;
  description: string;
};

function toAbsoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${siteConfig.url}${path}`;
}

function renderSection(title: string, links: LlmsLink[]): string {
  if (links.length === 0) return "";

  return [
    `## ${title}`,
    ...links.map(
      (link) =>
        `- [${link.title}](${toAbsoluteUrl(link.path)}): ${link.description}`
    ),
  ].join("\n");
}

function sortByTitle<T extends { title: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.title.localeCompare(b.title));
}

const essentialPages: LlmsLink[] = [
  {
    title: "Home",
    path: "/",
    description:
      "Firm overview and primary entry point for fee-only financial planning, tax strategy, and investment management.",
  },
  {
    title: "Services",
    path: "/services",
    description:
      "Hub page covering the firm's integrated advisory services and ideal client fit.",
  },
  {
    title: "About",
    path: "/about",
    description:
      "Firm background, philosophy, and positioning for prospective clients evaluating the advisory team.",
  },
  {
    title: "Why United",
    path: "/why-united",
    description:
      "Differentiators for the firm, including the integrated CFP, CPA, and Enrolled Agent model.",
  },
  {
    title: "Fees",
    path: "/fees",
    description:
      "Pricing and engagement overview for prospective clients comparing advisory firms.",
  },
  {
    title: "FAQ",
    path: "/faq",
    description:
      "Frequently asked questions about planning, taxes, investments, process, and fit.",
  },
  {
    title: "Contact",
    path: "/contact",
    description:
      "Primary conversion page for scheduling a complimentary consultation.",
  },
  {
    title: "Testimonials",
    path: "/testimonials",
    description:
      "Client proof and experience signals for evaluative search and AI citation.",
  },
  {
    title: "Compliance",
    path: "/compliance",
    description:
      "Regulatory and trust-related information for due diligence and entity verification.",
  },
];

const servicePages: LlmsLink[] = [
  {
    title: "Financial Planning",
    path: "/services/financial-planning",
    description:
      "Comprehensive financial planning that coordinates investments, taxes, retirement, and long-term goals.",
  },
  {
    title: "Retirement Planning",
    path: "/services/retirement-planning",
    description:
      "Retirement income, Social Security, distribution planning, and tax-aware withdrawal strategy.",
  },
  {
    title: "Investment Management",
    path: "/services/investment-management",
    description:
      "Evidence-based portfolio management with tax efficiency and long-term discipline.",
  },
  {
    title: "Tax Planning",
    path: "/services/tax-planning",
    description:
      "Year-round proactive tax strategy coordinated with the rest of the financial plan.",
  },
  {
    title: "Tax Preparation",
    path: "/services/tax-preparation",
    description:
      "Annual tax preparation handled by in-house CPAs and tax professionals.",
  },
  {
    title: "Equity Compensation",
    path: "/services/equity-compensation",
    description:
      "Planning for RSUs, stock options, deferred compensation, and related tax decisions.",
  },
];

const companyPages: LlmsLink[] = [
  {
    title: "Meet the Team",
    path: "/team",
    description:
      "Team overview for the firm's advisors, planners, and tax professionals.",
  },
  {
    title: "Gerry Barrasso",
    path: "/team/gerry-barrasso",
    description:
      "Advisor profile page for Gerry Barrasso and his credentials.",
  },
  {
    title: "Michael Barrasso",
    path: "/team/michael-barrasso",
    description:
      "Advisor profile page for Michael Barrasso and his credentials.",
  },
  {
    title: "Ryan Derousseau",
    path: "/team/ryan-derousseau",
    description:
      "Advisor profile page for Ryan Derousseau and his credentials.",
  },
  {
    title: "Jose Vivero",
    path: "/team/jose-vivero",
    description:
      "Advisor profile page for Jose Vivero and his credentials.",
  },
  {
    title: "Blog",
    path: "/blog",
    description:
      "Educational articles on retirement, investing, taxes, and financial planning.",
  },
  {
    title: "In The Media",
    path: "/in-the-media",
    description:
      "Press mentions and external authority signals featuring the firm's experts.",
  },
];

const officePages: LlmsLink[] = [
  {
    title: "Locations",
    path: "/locations",
    description:
      "Hub page for offices and service areas across Long Island, Manhattan, and beyond.",
  },
  ...locations.map((location) => ({
    title: `${location.city}, ${location.stateAbbr}`,
    path: `/locations/${location.slug}`,
    description: location.metaDescription,
  })),
];

const flagshipLocationPages: LlmsLink[] = [
  {
    title: "Financial Advisor Long Island",
    path: "/financial-advisor-long-island",
    description:
      "Flagship Long Island landing page for integrated financial planning, tax strategy, and investment management.",
  },
  {
    title: "Financial Advisor Manhattan",
    path: "/financial-advisor-manhattan",
    description:
      "Flagship Manhattan landing page for NYC professionals, executives, and high-income households.",
  },
  {
    title: "Financial Advisor NYC",
    path: "/financial-advisor-nyc",
    description:
      "New York City-focused advisory page covering financial planning, investing, and taxes.",
  },
];

const featuredTownPages: LlmsLink[] = sortByTitle(
  towns
    .filter((town) => town.tier === 1)
    .slice(0, 12)
    .map((town) => ({
      title: `Financial Advisor in ${town.name}, NY`,
      path: `/financial-advisor-${town.slug}`,
      description: town.metaDescription,
    }))
);

const allTownPages: LlmsLink[] = sortByTitle(
  towns.map((town) => ({
    title: `Financial Advisor in ${town.name}, NY`,
    path: `/financial-advisor-${town.slug}`,
    description: town.metaDescription,
  }))
);

const articlePages: LlmsLink[] = getAllPosts()
  .map((post) => ({
    title: post.title,
    path: `/blog/${post.slug}`,
    description: post.excerpt,
  }))
  .sort((a, b) => a.title.localeCompare(b.title));

export function buildLlmsTxt(): string {
  return [
    "# United Financial Planning Group",
    "",
    "> United Financial Planning Group is a fee-only financial planning firm serving clients nationwide, with a strong New York focus. The firm combines financial planning, investment management, tax planning, and tax preparation under one roof. Its team includes CFP® professionals, CPAs, and Enrolled Agents, and it is best suited for retirees, business owners, executives, and high-net-worth households with complex financial lives.",
    "",
    "## Best starting points",
    "- Core conversion goal: schedule a complimentary consultation.",
    "- Core differentiator: tax planning, tax preparation, financial planning, and investment management are integrated in one team.",
    "- Core geography: nationwide service with offices in Hauppauge, Manhattan, and Lake Success, plus many Long Island location pages.",
    "",
    renderSection("Essential Pages", essentialPages),
    "",
    renderSection("Core Services", servicePages),
    "",
    renderSection("Trust, Team, and Authority Pages", companyPages),
    "",
    renderSection("Office and Location Hubs", officePages),
    "",
    renderSection("Flagship Local SEO Pages", [
      ...flagshipLocationPages,
      ...featuredTownPages,
    ]),
    "",
    `For a broader AI-readable index of local pages and article URLs, see [llms-full.txt](${toAbsoluteUrl("/llms-full.txt")}).`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildLlmsFullTxt(): string {
  return [
    "# United Financial Planning Group Full AI Index",
    "",
    "> Expanded AI-readable index of public pages on unitedfpg.com. This file is intended to help retrieval systems discover the site's core service pages, trust pages, local landing pages, office pages, and article library.",
    "",
    renderSection("Essential Pages", essentialPages),
    "",
    renderSection("Core Services", servicePages),
    "",
    renderSection("Trust, Team, and Authority Pages", companyPages),
    "",
    renderSection("Office and Location Hubs", officePages),
    "",
    renderSection("Flagship Local SEO Pages", flagshipLocationPages),
    "",
    renderSection("Programmatic Local Service Pages", allTownPages),
    "",
    renderSection("Articles and Media Mentions", articlePages),
  ]
    .filter(Boolean)
    .join("\n");
}
