export type CtTown = {
  slug: string;
  name: string;
  county: "Fairfield";
  /** One-line angle used on the hub town cards */
  cardBlurb: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  heroBadge: string;
  heroLabel: string;
  valuePropHeading: string;
  valuePropSubheading: string;
  valueProps: { title: string; description: string }[];
  insightHeading: string;
  insight: string;
  faqHeading: string;
  faqs: { question: string; answer: string }[];
  /** Other Connecticut town slugs shown as related pages */
  nearbyTownSlugs: string[];
};

export const CT_HUB_PATH = "/financial-advisor-connecticut";

export const ctTowns: CtTown[] = [
  {
    slug: "greenwich",
    name: "Greenwich",
    county: "Fairfield",
    cardBlurb:
      "Complex compensation, concentrated stock, and two-state filing for finance and professional services households.",
    seoTitle: "Financial Advisor for Greenwich, CT Residents",
    metaDescription:
      "Fee-only financial planning for Greenwich, CT residents who work in New York or hold equity compensation. NY/CT dual-state tax planning from CFP® professionals and CPAs.",
    h1: "Financial Planning for Greenwich Residents With Complex Compensation and Two-State Taxes",
    heroSubtitle:
      "Greenwich households may have income that touches New York, equity or deferred compensation, and a concentrated position in one employer. Our CFP® professionals, CPAs, and Enrolled Agents plan these pieces together, so your investments, your tax return, and your compensation decisions are coordinated, not siloed.",
    heroBadge: "Fee-Only Planning for Greenwich, CT",
    heroLabel:
      "CFP® professionals, CPAs, and Enrolled Agents working with Connecticut residents.",
    valuePropHeading: "Planning Built Around a Greenwich Household",
    valuePropSubheading:
      "Compensation that spans several forms, a New York workplace, and a Connecticut home can each pull a plan in a different direction. This page describes how we approach that coordination. Outcomes depend on your individual circumstances.",
    valueProps: [
      {
        title: "Two-state tax coordination",
        description:
          "Connecticut generally taxes its residents on income from all sources, and New York generally taxes nonresidents on income from New York sources. Estimating both returns together during the year can help your withholding and estimated payments line up with what each state may ask for at filing time.",
      },
      {
        title: "Equity and deferred compensation timing",
        description:
          "RSU vesting, option exercises, and bonus timing each create income in a specific tax year. We look at the sequence across years, not one event at a time, and we model the trade-offs before a decision is made.",
      },
      {
        title: "Concentrated position planning",
        description:
          "A large holding in one employer's stock can tie a meaningful part of your net worth to a single outcome. Diversifying can reduce that concentration, and it may also create a tax cost, so the timing and method are worth planning in advance.",
      },
      {
        title: "Planning, investing, and tax under one team",
        description:
          "Financial planning, investment management, tax planning, and tax preparation are handled by one coordinated team. We are a fee-only fiduciary, with no commissions.",
      },
    ],
    insightHeading: "A Useful Place to Start",
    insight:
      "A useful first question is how a Connecticut home and a New York workplace affect the same paycheck. The answer depends on where you perform your work, how your employer reports it, and what other income you have. Starting with a clear picture of both returns may make the equity and investment decisions easier to sequence. For the full explanation, see our page for Connecticut residents who work in New York.",
    faqHeading: "Questions From Greenwich Residents",
    faqs: [
      {
        question:
          "I live in Greenwich and work in Manhattan. Do I file in both states?",
        answer:
          "Often, yes. Connecticut generally taxes residents on all of their income, and New York generally taxes nonresidents on income from New York sources, which commonly includes wages for work performed in New York. That usually means a New York nonresident return and a Connecticut resident return. Your situation depends on where you actually work and what other income you have, so it is worth confirming with a tax professional each year.",
      },
      {
        question:
          "Can I claim a credit for taxes I pay to New York?",
        answer:
          "Connecticut residents may be able to claim a credit on their Connecticut return for income tax paid to another qualifying state, such as New York, on the same income. The credit is generally limited, so it may not offset every dollar paid to New York. Rules and forms change, so we confirm current instructions each filing season.",
      },
      {
        question:
          "How do you plan around a concentrated stock position?",
        answer:
          "We start with how much of your net worth is tied to the position, any restrictions on selling, and the tax cost of reducing it. From there we compare options such as staged sales, gifting, or holding, along with the trade-offs of each. The right approach depends on your goals, your tax situation, and your tolerance for risk.",
      },
      {
        question: "Do I need to come to your office?",
        answer:
          "No. Many planning conversations happen by video call with secure document sharing, and we can meet in person at our New York offices when that is useful. Our offices are in Hauppauge, Lake Success, and Manhattan.",
      },
    ],
    nearbyTownSlugs: ["stamford", "darien", "new-canaan"],
  },
  {
    slug: "stamford",
    name: "Stamford",
    county: "Fairfield",
    cardBlurb:
      "Equity compensation and hybrid-work tax questions for professionals at local and New York employers.",
    seoTitle: "Financial Advisor for Stamford, CT Professionals",
    metaDescription:
      "Fee-only financial planning for Stamford, CT professionals with equity compensation or hybrid work between Connecticut and New York. CFP® and CPA coordinated planning.",
    h1: "Financial Planning for Stamford Professionals With Equity Compensation and Hybrid Work",
    heroSubtitle:
      "Stamford professionals may work for a local employer, commute into New York, or split the week between a home office and an office in either state. Each setup can change how your income is taxed and how your equity compensation is planned. Our CFP® professionals, CPAs, and Enrolled Agents work through those details together.",
    heroBadge: "Fee-Only Planning for Stamford, CT",
    heroLabel:
      "CFP® professionals, CPAs, and Enrolled Agents working with Connecticut residents.",
    valuePropHeading: "Planning for Stamford Professionals",
    valuePropSubheading:
      "Equity awards, bonuses, and a workweek that crosses state lines call for a plan that looks at the whole picture. Results vary by individual situation and may involve trade-offs.",
    valueProps: [
      {
        title: "Equity compensation planning",
        description:
          "RSUs, stock options, and employee stock purchase plans each have different tax mechanics. We model vesting, exercise, and sale timing across tax years, including the possible Alternative Minimum Tax effect of exercising incentive stock options.",
      },
      {
        title: "Hybrid and remote workday questions",
        description:
          "New York and Connecticut may not treat days worked from home the same way, and the treatment can depend on the facts of your employment. A simple log of where you worked each day gives you and your tax preparer something concrete to review.",
      },
      {
        title: "Withholding and estimated payments",
        description:
          "When income is taxed by two states, withholding can fall short or run ahead. Estimating both states together during the year helps you see what may be owed before filing season.",
      },
      {
        title: "One team for planning and tax",
        description:
          "The team that builds your financial plan can also prepare your returns, so the tax picture and the plan stay consistent. We are a fee-only fiduciary.",
      },
    ],
    insightHeading: "A Planning Question for Stamford Professionals",
    insight:
      "Whether you work for a Stamford employer or a New York one, equity compensation can create income in a year you did not expect. Looking at vesting dates, exercise windows, and your expected income for the year ahead can help you decide what to do and when. Each choice has trade-offs, and the details of your grant agreement matter.",
    faqHeading: "Questions From Stamford Professionals",
    faqs: [
      {
        question:
          "I work for a Stamford employer. Does New York tax matter to me?",
        answer:
          "It may, depending on where you perform your work and what other income you have. If you work in Connecticut and live in Connecticut, New York generally is not involved, but New York-source income from other activity, such as a second job or rental property, could change that. A tax professional can review the facts of your situation.",
      },
      {
        question:
          "How are RSUs and ISOs taxed for a Connecticut resident?",
        answer:
          "At the federal level, RSUs are generally taxed as ordinary income when they vest, and an ISO exercise may create an Alternative Minimum Tax item in the year of exercise even if you do not sell. State treatment can differ from federal treatment and can depend on where you worked during the relevant period. We model it for your situation instead of relying on a rule of thumb.",
      },
      {
        question: "What should I keep track of if I work from home some days?",
        answer:
          "A simple record of the days you worked in each state is a good start. Rules and agency guidance in this area change, so we review it with you each year rather than assume a single answer.",
      },
      {
        question: "Do you offer virtual meetings?",
        answer:
          "Yes. Many planning conversations happen by video call with secure document sharing, and we can meet in person at our New York offices when that is useful.",
      },
    ],
    nearbyTownSlugs: ["greenwich", "darien", "norwalk"],
  },
  {
    slug: "darien",
    name: "Darien",
    county: "Fairfield",
    cardBlurb:
      "Household planning for families with a New York commuter and Connecticut property and tax questions.",
    seoTitle: "Financial Advisor for Darien, CT Families",
    metaDescription:
      "Fee-only financial planning for Darien, CT families with a New York commuter. Dual-state tax coordination, retirement planning, and investment management from CFP® and CPA professionals.",
    h1: "Financial Planning for Darien Families With a Connecticut Home and a New York Workplace",
    heroSubtitle:
      "When one or both earners work in New York and the family lives in Darien, taxes, retirement savings, and investments all have to fit together across two states. Our CFP® professionals, CPAs, and Enrolled Agents plan the household as a whole.",
    heroBadge: "Fee-Only Planning for Darien, CT",
    heroLabel:
      "CFP® professionals, CPAs, and Enrolled Agents working with Connecticut residents.",
    valuePropHeading: "Planning for the Whole Darien Household",
    valuePropSubheading:
      "A household plan looks at savings, taxes, investments, and long-term goals together. The right choices depend on your circumstances and involve trade-offs.",
    valueProps: [
      {
        title: "Dual-state tax filing, coordinated",
        description:
          "Many Connecticut households file a New York nonresident return and a Connecticut resident return. The New York return usually comes first and feeds the Connecticut credit calculation, so the order of preparation matters.",
      },
      {
        title: "Retirement savings and tax planning",
        description:
          "We look at how workplace plans, IRAs, and taxable accounts work together, and how the mix may affect your taxes now and in retirement.",
      },
      {
        title: "Investment management in context",
        description:
          "Investment decisions are made with your tax situation and your other goals in view, not in isolation. Investing involves risk, including the potential loss of principal.",
      },
      {
        title: "Fee-only, with no commissions",
        description:
          "We are compensated by client fees, not by commissions or product sales. See our fees page for how the arrangement works.",
      },
    ],
    insightHeading: "Starting With the Household Picture",
    insight:
      "A useful first step for many households is a single view of income by state, accounts by type, and the next few years of known events, such as a bonus, a vesting date, or a change in work arrangement. From there, the order of decisions is easier to see.",
    faqHeading: "Questions From Darien Families",
    faqs: [
      {
        question:
          "My spouse commutes to New York and I work in Connecticut. How are we taxed?",
        answer:
          "The two incomes may be treated differently by each state. A spouse who works in New York may have New York-source income reported on a nonresident return, while the household's combined income is generally reported to Connecticut as residents. Filing status and credits can affect the result, so we review the full return picture together.",
      },
      {
        question: "Can you prepare our tax returns as well as manage investments?",
        answer:
          "Yes. Tax planning and tax preparation are part of what our team of CPAs and Enrolled Agents provides, alongside financial planning and investment management.",
      },
      {
        question: "How often do we meet?",
        answer:
          "It depends on the engagement and your needs. Many clients prefer a regular planning meeting plus check-ins around specific events such as a job change, a vesting date, or tax season.",
      },
      {
        question: "Do we have to meet in person?",
        answer:
          "No. Many conversations happen by video call with secure document sharing, and we can meet in person at our New York offices when that is useful.",
      },
    ],
    nearbyTownSlugs: ["greenwich", "new-canaan", "stamford"],
  },
  {
    slug: "new-canaan",
    name: "New Canaan",
    county: "Fairfield",
    cardBlurb:
      "Pre-retirement tax transitions and retirement income planning for households five to ten years from retirement.",
    seoTitle: "Financial Advisor for New Canaan, CT Pre-Retirees",
    metaDescription:
      "Fee-only retirement and tax planning for New Canaan, CT pre-retirees and retirees. Roth conversion analysis, Social Security timing, and withdrawal planning from CFP® and CPA professionals.",
    h1: "Retirement and Tax Planning for New Canaan Pre-Retirees and Retirees",
    heroSubtitle:
      "The years before and after retirement bring decisions about Social Security timing, Roth conversions, required distributions, and Medicare premiums that affect each other. Our CFP® professionals, CPAs, and Enrolled Agents plan those decisions together for New Canaan households.",
    heroBadge: "Fee-Only Planning for New Canaan, CT",
    heroLabel:
      "CFP® professionals, CPAs, and Enrolled Agents working with Connecticut residents.",
    valuePropHeading: "Planning the Years Around Retirement",
    valuePropSubheading:
      "Retirement planning is a series of linked choices. The sequence you choose can change your tax picture, and each option carries trade-offs. Results depend on individual circumstances.",
    valueProps: [
      {
        title: "Tax-aware withdrawal planning",
        description:
          "The order in which you draw from taxable, tax-deferred, and Roth accounts can affect your tax bracket across several years. We model the options before you act.",
      },
      {
        title: "Roth conversion analysis",
        description:
          "A Roth conversion adds taxable income in the year it is done and may lower taxable distributions later. Whether it makes sense depends on your brackets, your timing, and your other income. It is not right for everyone.",
      },
      {
        title: "Social Security and Medicare coordination",
        description:
          "Claiming age, spousal benefits, and income-based Medicare premium adjustments are connected. We look at them together instead of one at a time.",
      },
      {
        title: "A CFP® and CPA on the same plan",
        description:
          "The team that plans your retirement income can also prepare your returns, so projections and actual filings are consistent. We are a fee-only fiduciary.",
      },
    ],
    insightHeading: "The Five to Ten Years Before Retirement",
    insight:
      "For many households, the years just before retirement offer room to adjust: income may still be high, but the shape of the next phase is coming into view. Reviewing your account mix, expected income sources, and tax brackets during this window can help you weigh your options with more information.",
    faqHeading: "Questions From New Canaan Pre-Retirees",
    faqs: [
      {
        question: "When should I start planning for retirement taxes?",
        answer:
          "Many people benefit from looking five to ten years before they plan to retire, because there may be more room to adjust account types and the timing of income. The right timing depends on your situation.",
      },
      {
        question: "Is a Roth conversion right for me?",
        answer:
          "It depends. A conversion generally adds taxable income in the year it is completed and may reduce taxable distributions later. We model it against your current and expected brackets, along with its effect on items such as Medicare premiums, before anyone decides.",
      },
      {
        question: "How do you coordinate with my current CPA or attorney?",
        answer:
          "If you want to keep an outside professional, we are glad to coordinate with them. If you would rather have planning and tax work under one team, our CPAs and Enrolled Agents can handle that too.",
      },
      {
        question: "Do I have to meet in person?",
        answer:
          "No. Many conversations happen by video call with secure document sharing, and we can meet in person at our New York offices when that is useful.",
      },
    ],
    nearbyTownSlugs: ["darien", "westport", "greenwich"],
  },
  {
    slug: "westport",
    name: "Westport",
    county: "Fairfield",
    cardBlurb:
      "Integrated personal and business planning for owners, founders, and independent professionals.",
    seoTitle: "Financial Advisor for Westport, CT Business Owners",
    metaDescription:
      "Fee-only financial planning for Westport, CT business owners, founders, and independent professionals. Integrated personal and business tax planning from CFP® and CPA professionals.",
    h1: "Financial Planning for Westport Business Owners, Founders, and Independent Professionals",
    heroSubtitle:
      "Owners and founders often have personal and business finances that affect each other: how you pay yourself, which retirement plan fits, and what happens when equity becomes liquid. Our CFP® professionals, CPAs, and Enrolled Agents plan both sides together for Westport households.",
    heroBadge: "Fee-Only Planning for Westport, CT",
    heroLabel:
      "CFP® professionals, CPAs, and Enrolled Agents working with Connecticut residents.",
    valuePropHeading: "Planning for Owners and Founders",
    valuePropSubheading:
      "The business and the household share one balance sheet. Coordinated planning aims to keep the two aligned. Outcomes vary and involve trade-offs.",
    valueProps: [
      {
        title: "Owner compensation and tax planning",
        description:
          "How you pay yourself, and through which entity, can change both your personal tax picture and the business's. We review the options with your tax situation in view.",
      },
      {
        title: "Retirement plan design",
        description:
          "Plans such as a SEP IRA, SIMPLE IRA, or Solo 401(k) differ in contribution rules, administration, and eligibility. We compare them against your goals and your staffing.",
      },
      {
        title: "Planning for equity events",
        description:
          "If you hold founder or early-employee shares, Section 1202 qualified small business stock may be relevant. Eligibility depends on the company's facts, the issue date, and the holding period, so it calls for document-level review.",
      },
      {
        title: "Business and personal planning together",
        description:
          "One team can handle financial planning, investment management, tax planning, and tax preparation. We are a fee-only fiduciary, with no commissions.",
      },
    ],
    insightHeading: "Where Owners Often Start",
    insight:
      "A useful first step for owners and founders is mapping how money moves between the business and the household, and which decisions are coming up in the next year or two, such as a new retirement plan, a change in entity, or a liquidity event. That map can show where the personal and business plans need to line up.",
    faqHeading: "Questions From Westport Business Owners",
    faqs: [
      {
        question: "Can you coordinate with the business's bookkeeper or attorney?",
        answer:
          "Yes. We are glad to work with the professionals you already use. Legal drafting is handled by your attorney, and we coordinate planning and tax decisions with them.",
      },
      {
        question: "What retirement plan fits a small business?",
        answer:
          "It depends on whether you have employees, how much you want to contribute, and how much administration you want to take on. We compare the options with you rather than recommend one by default.",
      },
      {
        question: "Does QSBS apply to my company's stock?",
        answer:
          "It may, depending on your specific shares. Section 1202 eligibility turns on the company's gross assets when the shares were issued, the type of business, and how long the shares are held, among other conditions. A review of your documents is the only way to say for sure.",
      },
      {
        question: "Do I have to meet in person?",
        answer:
          "No. Many conversations happen by video call with secure document sharing, and we can meet in person at our New York offices when that is useful.",
      },
    ],
    nearbyTownSlugs: ["norwalk", "darien", "new-canaan"],
  },
  {
    slug: "norwalk",
    name: "Norwalk",
    county: "Fairfield",
    cardBlurb:
      "RSU, option, and QSBS timing for technology employees living in Fairfield County.",
    seoTitle: "Financial Advisor for Norwalk, CT Technology Professionals",
    metaDescription:
      "Fee-only financial planning for Norwalk, CT technology professionals with RSUs, stock options, or QSBS. NY/CT dual-state tax planning from CFP® and CPA professionals.",
    h1: "Financial Planning for Norwalk Technology Professionals With Equity Compensation",
    heroSubtitle:
      "Technology professionals in Norwalk may hold RSUs, stock options, or shares in a private company, and may work remotely for an employer in another state. Our CFP® professionals, CPAs, and Enrolled Agents plan equity decisions and state taxes together.",
    heroBadge: "Fee-Only Planning for Norwalk, CT",
    heroLabel:
      "CFP® professionals, CPAs, and Enrolled Agents working with Connecticut residents.",
    valuePropHeading: "Planning for Norwalk Technology Professionals",
    valuePropSubheading:
      "Equity compensation can create tax bills before the shares can be sold. Planning ahead gives you more options, and each option has trade-offs.",
    valueProps: [
      {
        title: "RSU vesting and withholding",
        description:
          "RSUs are generally taxed as ordinary income when they vest, and the default withholding may not match your actual tax. We estimate the gap before vesting dates so you can plan for it.",
      },
      {
        title: "Option exercise timing",
        description:
          "Exercising incentive stock options can create an Alternative Minimum Tax item even if you do not sell. We model the exercise before you make it, along with any post-departure exercise window in your agreement.",
      },
      {
        title: "Private company equity and QSBS",
        description:
          "If your company is private, liquidity may depend on a tender offer or other event. Section 1202 may apply to some shares, depending on the issue date and the company's facts, and it calls for a document-by-document review.",
      },
      {
        title: "Remote work across state lines",
        description:
          "If your employer is based in another state, where you perform the work can affect which states may tax your pay. We help you keep the records your tax preparer will need.",
      },
    ],
    insightHeading: "Planning Before a Liquidity Event",
    insight:
      "For many technology employees, planning is more useful before a vesting date, an exercise deadline, or a tender offer, not after. Knowing your expected income, your cash needs, and your concentration in one employer can make those decisions more deliberate.",
    faqHeading: "Questions From Norwalk Technology Professionals",
    faqs: [
      {
        question: "Are you affiliated with any technology company?",
        answer:
          "No. United Financial Planning Group is an independent firm. Any company named on our website is referenced only to describe the kind of planning questions that arise with that type of equity.",
      },
      {
        question: "How do I plan for tax on RSUs that vest in a lump?",
        answer:
          "We estimate the tax on each vesting date, compare it with the withholding your employer applies, and look at how the income affects your bracket for the year. The result depends on your grant terms and income.",
      },
      {
        question: "What happens to my options if I leave my company?",
        answer:
          "Many agreements give a limited window, often 90 days, to exercise vested options, and incentive stock options can convert to non-qualified options after that window. Your agreement controls, so we review it with you.",
      },
      {
        question: "Do you offer virtual meetings?",
        answer:
          "Yes. Many planning conversations happen by video call with secure document sharing, and we can meet in person at our New York offices when that is useful.",
      },
    ],
    nearbyTownSlugs: ["stamford", "westport", "darien"],
  },
];

export function getCtTownBySlug(slug: string): CtTown | undefined {
  return ctTowns.find((t) => t.slug === slug);
}

export function getNearbyCtTowns(slug: string): CtTown[] {
  const town = getCtTownBySlug(slug);
  if (!town) return [];
  return town.nearbyTownSlugs
    .map((s) => getCtTownBySlug(s))
    .filter((t): t is CtTown => Boolean(t));
}
