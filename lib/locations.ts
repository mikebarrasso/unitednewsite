export type Location = {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  label?: string;
  address: string;
  zip: string;
  phone: string;
  fax: string;
  mapQuery: string;
  heroImage: string;
  heroImageAlt: string;
  headline: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  /** Unique content sections for this location page */
  areaDescription: string;
  clientProfile: string;
  localInsight: string;
  nearbyAreas: string[];
  services: {
    title: string;
    description: string;
    href: string;
  }[];
};

export const locations: Location[] = [
  {
    slug: "hauppauge-ny",
    city: "Hauppauge",
    state: "New York",
    stateAbbr: "NY",
    label: "Headquarters",
    address: "350 Motor Parkway, Suite 105",
    zip: "11788",
    phone: "(631) 234-0871",
    fax: "(631) 584-3763",
    mapQuery: "350+Motor+Parkway+Suite+105+Hauppauge+NY+11788",
    heroImage: "/SHOT_02_003-scaled.jpg",
    heroImageAlt: "United Financial Planning Group Hauppauge headquarters",
    headline: "Fee-Only Financial Planning in Hauppauge, Long Island",
    subtitle:
      "Our headquarters on Motor Parkway brings together Certified Financial Planners, CPAs, and Enrolled Agents — all working side-by-side to coordinate your investments, tax strategy, and long-term plan.",
    description:
      "Our Hauppauge office is where United Financial Planning Group began — the center of our practice and the place where our team of financial planners, CPAs, and tax professionals collaborate daily on behalf of clients across Suffolk County, Nassau County, and far beyond.",
    metaTitle: "Financial Advisor in Hauppauge, NY",
    metaDescription:
      "Fee-only financial advisor in Hauppauge, NY. Financial planning, investment management, and tax preparation by CFPs, CPAs, and Enrolled Agents.",
    areaDescription:
      "Hauppauge sits at the commercial heart of Suffolk County, home to one of the largest industrial parks on the East Coast. Many of our Long Island clients are business owners, corporate professionals commuting to Manhattan, and retirees who have spent decades building wealth in the area. The financial lives of Long Island families tend to be layered — multiple income streams, real estate holdings, and complex tax situations that benefit from having a CPA and CFP working together.",
    clientProfile:
      "Clients visiting our Hauppauge office often include business owners navigating S-corp and partnership tax planning, executives with equity compensation from public companies, and retirees managing required minimum distributions alongside Social Security timing. Many have spent years working with separate advisors and accountants who don't communicate — and that's exactly the problem we solve.",
    localInsight:
      "New York State has some of the highest combined state and local tax burdens in the country. For Long Island residents, smart tax planning isn't optional — it's essential. Our integrated approach means your investment decisions, Roth conversion strategies, and retirement timeline are all coordinated with your federal and New York State tax return.",
    nearbyAreas: [
      "Smithtown",
      "Commack",
      "Dix Hills",
      "Huntington",
      "Islandia",
      "Central Islip",
      "Brentwood",
      "Bohemia",
    ],
    services: [
      {
        title: "Financial Planning",
        description:
          "Comprehensive plans that integrate your investments, tax exposure, and retirement timeline into one coordinated strategy.",
        href: "/services/financial-planning",
      },
      {
        title: "Retirement Planning",
        description:
          "Social Security optimization, pension analysis, Roth conversion modeling, and withdrawal sequencing built around your goals.",
        href: "/services/retirement-planning",
      },
      {
        title: "Investment Management",
        description:
          "Tax-efficient portfolio management with direct indexing, asset location, and ongoing rebalancing.",
        href: "/services/investment-management",
      },
      {
        title: "Tax Planning & Preparation",
        description:
          "Year-round proactive tax strategies and annual return preparation by CPAs and Enrolled Agents on our team.",
        href: "/services/tax-planning",
      },
    ],
  },
  {
    slug: "manhattan-ny",
    city: "Manhattan",
    state: "New York",
    stateAbbr: "NY",
    address: "14 Penn Plaza",
    zip: "10122",
    phone: "(631) 234-0871",
    fax: "(631) 584-3763",
    mapQuery: "14+Penn+Plaza+New+York+NY+10122",
    heroImage: "/SHOT_04_051-scaled (4).jpg",
    heroImageAlt: "United Financial Planning Group Manhattan office",
    headline: "Fee-Only Financial Advisor in Manhattan, NYC",
    subtitle:
      "Located steps from Penn Station, our Manhattan office gives New York City professionals direct access to integrated financial planning, investment management, and tax services — all under one roof.",
    description:
      "Our Manhattan office at 14 Penn Plaza sits in the center of Midtown, making it easy for professionals across the city to meet with their advisory team in person. Whether you work in finance, tech, media, or law, our team of CFPs and CPAs understands the unique financial pressures of building wealth in New York City.",
    metaTitle: "Financial Advisor in Manhattan, NYC",
    metaDescription:
      "Fee-only financial advisor in Manhattan, NY. Integrated financial planning, tax strategy, and investment management for NYC professionals.",
    areaDescription:
      "Manhattan is one of the most financially complex environments in the world. Between high state and city income taxes, expensive real estate decisions, concentrated stock positions from publicly traded employers, and the demands of dual-income professional households, the financial planning needs here are rarely simple. Professionals in the city often find themselves underserved by advisors who don't account for the full tax picture.",
    clientProfile:
      "Our Manhattan clients include corporate executives with RSUs, ISOs, and deferred compensation plans, partners at professional services firms, startup founders navigating liquidity events, and high-net-worth individuals managing multi-state tax exposure. Many come to us after realizing their investment advisor and CPA were making decisions in silos — costing them money in the process.",
    localInsight:
      "New York City residents face a triple layer of taxation: federal, New York State, and New York City income tax. Combined marginal rates can exceed 50% for high earners. That makes proactive tax planning — Roth conversions, charitable giving strategies, equity compensation timing, and estimated tax optimization — not just valuable, but critical. Our team handles both the planning and the return, so nothing falls through the cracks.",
    nearbyAreas: [
      "Midtown",
      "Chelsea",
      "Financial District",
      "Upper West Side",
      "Upper East Side",
      "Brooklyn Heights",
      "Hoboken",
      "Jersey City",
    ],
    services: [
      {
        title: "Equity Compensation Planning",
        description:
          "Strategic guidance for ISOs, NSOs, RSUs, and ESPPs — modeling exercise timing, AMT exposure, and 10b5-1 plans.",
        href: "/services/equity-compensation",
      },
      {
        title: "Financial Planning",
        description:
          "Comprehensive planning that integrates your investment portfolio, tax exposure, and long-term wealth goals.",
        href: "/services/financial-planning",
      },
      {
        title: "Investment Management",
        description:
          "Tax-efficient portfolio construction including direct indexing, tax-loss harvesting, and concentrated stock management.",
        href: "/services/investment-management",
      },
      {
        title: "Tax Planning & Preparation",
        description:
          "Multi-state tax optimization, estimated payment planning, and annual returns prepared by CPAs who know your full financial picture.",
        href: "/services/tax-planning",
      },
    ],
  },
  {
    slug: "lake-success-ny",
    city: "Lake Success",
    state: "New York",
    stateAbbr: "NY",
    address: "1979 Marcus Avenue, Suite 210",
    zip: "11042",
    phone: "(631) 234-0871",
    fax: "(631) 584-3763",
    mapQuery: "1979+Marcus+Avenue+Suite+210+Lake+Success+NY+11042",
    heroImage: "/240710_AJ8700-scaled (1).jpg",
    heroImageAlt: "United Financial Planning Group Lake Success office",
    headline: "Fee-Only Financial Advisor in Lake Success, Nassau County",
    subtitle:
      "Our Lake Success office on Marcus Avenue serves clients across Nassau County and western Long Island — offering the same integrated team of CFPs, CPAs, and Enrolled Agents you'll find at every United location.",
    description:
      "Situated on the border of Queens and Nassau County, our Lake Success office is ideally positioned for clients across the North Shore, Great Neck, Manhasset, and the surrounding communities. It provides a convenient meeting point for families and professionals who want hands-on financial planning without traveling into the city.",
    metaTitle: "Financial Advisor in Lake Success, NY",
    metaDescription:
      "Fee-only financial advisor in Lake Success, NY serving Nassau County. Financial planning, investment management, and tax preparation.",
    areaDescription:
      "Lake Success and the surrounding North Shore communities of Nassau County are home to some of the most affluent families on Long Island. The area is known for its proximity to Manhattan while offering a suburban quality of life. Many residents are senior professionals, medical practitioners, attorneys, or business owners whose financial complexity extends well beyond a standard portfolio and tax return.",
    clientProfile:
      "Clients at our Lake Success office often include dual-income professional households with children approaching college, retirees managing significant accumulated wealth and charitable giving strategies, small business owners in the healthcare and legal fields, and families navigating generational wealth transfer. The common thread is a need for planning that connects all the moving parts.",
    localInsight:
      "Nassau County property taxes are among the highest in the nation, which makes overall tax efficiency a top priority for residents. Our team coordinates investment strategy with property tax considerations, helps clients evaluate Roth conversions in the context of their full state and local tax burden, and ensures that charitable giving strategies are structured to maximize deductions in a high-tax environment.",
    nearbyAreas: [
      "Great Neck",
      "Manhasset",
      "New Hyde Park",
      "Roslyn",
      "Port Washington",
      "Garden City",
      "Floral Park",
      "Bayside",
    ],
    services: [
      {
        title: "Retirement Planning",
        description:
          "Income projection, Social Security optimization, Medicare planning, and tax-efficient withdrawal strategies tailored to your timeline.",
        href: "/services/retirement-planning",
      },
      {
        title: "Financial Planning",
        description:
          "A living plan that connects your investments, tax situation, estate strategy, and retirement goals in one place.",
        href: "/services/financial-planning",
      },
      {
        title: "Tax Planning & Preparation",
        description:
          "Proactive strategies to reduce your effective tax rate, plus annual return preparation by our in-house CPAs and Enrolled Agents.",
        href: "/services/tax-planning",
      },
      {
        title: "Investment Management",
        description:
          "Disciplined, evidence-based portfolio management with ongoing tax-loss harvesting and asset location optimization.",
        href: "/services/investment-management",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getOtherLocations(slug: string): Location[] {
  return locations.filter((l) => l.slug !== slug);
}
