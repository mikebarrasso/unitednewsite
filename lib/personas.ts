export type Persona = {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  eyebrow: string;
  icon: "Clock" | "Target" | "Building2" | "Rocket" | "Code2" | "BarChart3" | "Gem";
  imageUrl: string;
  imageAlt: string;
  problemsHeading: string;
  problemsSubheading: string;
  problems: { heading: string; description: string }[];
  servicesHeading: string;
  servicesSubheading: string;
  services: { title: string; description: string; href: string }[];
  planningStages?: { title: string; description: string }[];
  preparationItems?: string[];
  resources?: { title: string; description: string; href: string }[];
  faqs: { question: string; answer: string }[];
  faqHeading: string;
  lastUpdated: string;
  relatedPersonaSlugs: string[];
  serviceTypes: string[];
  /** When true, renders a standard "Let's Start With a Conversation" CTA block above the generic closing CTA for this persona only. */
  showStandardCta?: boolean;
};

export const personas: Persona[] = [
  // ─── RETIREES ───
  {
    slug: "retirees",
    name: "Retirees",
    seoTitle: "Financial Advisor for Retirees",
    metaDescription:
      "Fee-only financial planning for retirees. CFP®, CPA, and tax professionals coordinating your retirement income, RMDs, withdrawal strategy, and estate plan under one roof.",
    h1: "Retirement Planning Where Your Advisor and Your CPA Are the Same Team",
    heroSubtitle:
      "At United Financial Planning Group, CFP® professionals, CPAs, and Enrolled Agents work together on your retirement — so your withdrawal strategy, tax plan, and estate considerations are built as one cohesive whole, not handed off between offices.",
    eyebrow: "For Retirees",
    icon: "Clock",
    imageUrl:
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1200&auto=format&fit=crop",
    imageAlt:
      "Retired couple reviewing their financial plan with confidence",
    problemsHeading:
      "When the Paycheck Stops, the Decisions Multiply",
    problemsSubheading:
      "Retirement introduces a layer of financial complexity most people don't see coming — and decisions around taxes, withdrawals, and Social Security don't wait for you to get organized.",
    problems: [
      {
        heading: "Your advisor and CPA make decisions in isolation",
        description:
          "Most retirees work with a financial advisor and a CPA who have never spoken to each other. When your advisor recommends a Roth conversion and your CPA doesn't know about it until April, you may face unexpected IRMAA surcharges or a higher tax bracket that neither professional planned for. The gaps between advisors cost real money in retirement.",
      },
      {
        heading: "Withdrawals feel like guesswork without a strategy",
        description:
          "Which account do you pull from first — and when? The order in which you draw down taxable, tax-deferred, and Roth accounts has lasting consequences for your tax liability and how long your money lasts. Without a coordinated withdrawal strategy, you risk overpaying taxes or depleting assets faster than necessary.",
      },
      {
        heading: "RMDs can quietly erode your retirement income",
        description:
          "Required minimum distributions can push you into a higher tax bracket, trigger Medicare surcharges, or increase the portion of your Social Security that's taxable. Without proactive planning, RMDs become a recurring source of tax surprises rather than a manageable part of your income strategy.",
      },
      {
        heading: "IRMAA surcharges add up when no one is watching",
        description:
          "A single Roth conversion or capital gain in the wrong year can push your modified adjusted gross income above an IRMAA threshold, increasing your Medicare premiums for the following year. Managing that threshold requires your financial planner and tax professional to coordinate — not react after the fact.",
      },
    ],
    servicesHeading:
      "Your Income, Taxes, and Investments — Finally Coordinated",
    servicesSubheading:
      "Our CFP® professionals, CPAs, and Enrolled Agents work as one team, so your retirement income strategy and tax plan are built together — not reconciled after the fact.",
    services: [
      {
        title: "Retirement Planning",
        description:
          "We build a retirement income plan that coordinates withdrawal sequencing, required minimum distributions, Social Security optimization, and estate considerations — pulling every lever together rather than one at a time.",
        href: "/services/retirement-planning",
      },
      {
        title: "Tax Planning",
        description:
          "Our CPAs and Enrolled Agents work alongside your financial planner to identify opportunities for tax-efficient withdrawals, proactive Roth conversions, and strategies to manage IRMAA thresholds before they become surprises.",
        href: "/services/tax-planning",
      },
      {
        title: "Investment Management",
        description:
          "We manage your portfolio with your full retirement picture in mind — account location, withdrawal sequencing, and risk appropriate to your income needs, not just your age.",
        href: "/services/investment-management",
      },
      {
        title: "Financial Planning",
        description:
          "From income projections to Medicare planning to estate coordination, your financial plan is a living document — updated as your life changes, not filed away after your first meeting.",
        href: "/services/financial-planning",
      },
    ],
    faqs: [
      {
        question:
          "What makes your team different from other financial advisors?",
        answer:
          "Most firms separate financial planning from tax work — you get an advisor who sends you to your own CPA, and the two rarely coordinate in a meaningful way. At United Financial Planning Group, CFP® professionals, CPAs, and Enrolled Agents work as one team on your plan. That integration matters most during retirement, when financial and tax decisions are deeply intertwined.",
      },
      {
        question: "Are you a fiduciary?",
        answer:
          "Yes. As a fee-only Registered Investment Advisor, we are a fiduciary — legally and ethically obligated to act in your interest. We earn no commissions and receive no compensation from product sales, so our recommendations are based on your situation, not on what pays us.",
      },
      {
        question:
          "I'm already retired — is it too late to improve my financial plan?",
        answer:
          "Not at all. Many of our retired clients come to us after realizing their current advisors aren't coordinating effectively. Even well into retirement, there are meaningful opportunities — adjusting withdrawal sequencing, managing RMDs proactively, optimizing Social Security if a spouse hasn't claimed yet, and ensuring your estate plan reflects your current wishes.",
      },
      {
        question: "How do you manage withdrawal sequencing?",
        answer:
          "We analyze which accounts to draw from and when — balancing taxable, tax-deferred, and Roth sources against your current bracket, your projected RMDs, and any IRMAA thresholds. The goal is to minimize your lifetime tax burden while preserving flexibility, not just default to drawing from whichever account is easiest.",
      },
      {
        question: "Do you handle both tax planning and tax preparation?",
        answer:
          "Yes — both services are handled by the same team. Your tax preparer knows your financial plan, and your financial planner knows your return. That continuity eliminates the coordination gap that causes costly surprises for many retirees.",
      },
    ],
    faqHeading: "Common Questions About Retirement Planning",
    lastUpdated: "March 2026",
    relatedPersonaSlugs: ["pre-retirees", "high-net-worth"],
    serviceTypes: [
      "Retirement Planning",
      "Tax Planning",
      "Investment Management",
      "Financial Planning",
    ],
  },

  // ─── PRE-RETIREES ───
  {
    slug: "pre-retirees",
    name: "Nearing Retirement",
    seoTitle: "Financial Advisor for Pre-Retirees",
    metaDescription:
      "Fee-only financial planning for people nearing retirement. CFP®, CPA, and tax professionals working together to answer 'Can I retire?' with a plan you can trust.",
    h1: "You're Close to Retirement. Let's Make Sure the Numbers Actually Work.",
    heroSubtitle:
      "At United Financial Planning Group, our CFP® professionals, CPAs, and Enrolled Agents work as one team to stress-test your retirement readiness — turning savings projections into an income plan you can commit to with confidence.",
    eyebrow: "For Those Nearing Retirement",
    icon: "Target",
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    imageAlt:
      "Pre-retiree reviewing retirement plan documents with a financial planner",
    problemsHeading:
      "The Decisions You Make Now Shape Every Year After You Stop Working",
    problemsSubheading:
      "The five to ten years before retirement are when the highest-impact financial decisions get made — and most of them can't easily be reversed once you've walked out the door.",
    problems: [
      {
        heading: "You don't actually know if you can afford to retire",
        description:
          "A 401(k) balance isn't a retirement plan. Without a comprehensive projection that accounts for taxes, healthcare costs, inflation, and the income you'll actually need, 'Can I retire at 62?' remains an unanswered question. Most people nearing retirement are making one of the biggest financial decisions of their lives based on incomplete information.",
      },
      {
        heading:
          "Your financial advisor and CPA aren't building the same plan",
        description:
          "Your advisor is projecting retirement income. Your CPA is preparing last year's return. Neither knows what the other is recommending, which means your Roth conversion window, catch-up contribution strategy, and tax bracket management aren't coordinated — and the cost of that gap compounds as you approach retirement.",
      },
      {
        heading:
          "The Roth conversion window is closing faster than you think",
        description:
          "The years between your peak earning and the start of Social Security and RMDs are often the best window for Roth conversions — but only if someone is actively watching your tax brackets and modeling the impact. Once that window closes, the opportunity doesn't come back.",
      },
      {
        heading: "Health insurance before Medicare is a blind spot",
        description:
          "If you want to retire before 65, you need a plan for the health insurance gap. The options — COBRA, the ACA marketplace, or private coverage — each have different costs, tax implications, and coverage trade-offs. This is one of the most common reasons people delay retirement, and one of the least planned-for.",
      },
    ],
    servicesHeading:
      "Your Retirement Readiness, Built by One Coordinated Team",
    servicesSubheading:
      "Our CFP® professionals, CPAs, and Enrolled Agents work together on your transition from accumulation to income — so your timeline, tax strategy, and investment positioning all move in the same direction.",
    services: [
      {
        title: "Retirement Planning",
        description:
          "We build detailed retirement readiness projections that go beyond a savings target — modeling your income sources, tax liability, healthcare costs, and spending patterns to answer 'Can I retire?' with real clarity.",
        href: "/services/retirement-planning",
      },
      {
        title: "Tax Planning",
        description:
          "Our CPAs and Enrolled Agents work alongside your financial planner to identify Roth conversion opportunities, optimize catch-up contributions, and manage your tax bracket in the critical years before retirement income begins.",
        href: "/services/tax-planning",
      },
      {
        title: "Investment Management",
        description:
          "We begin repositioning your portfolio for the transition from growth to income — managing risk, improving tax efficiency, and building the account structure you'll draw from in retirement.",
        href: "/services/investment-management",
      },
      {
        title: "Financial Planning",
        description:
          "From Social Security timing and pension analysis to health insurance bridging and estate coordination, your financial plan accounts for the full picture — not just the investments.",
        href: "/services/financial-planning",
      },
    ],
    faqs: [
      {
        question:
          "How far from retirement should I start working with a planner?",
        answer:
          "Ideally, five to ten years before you plan to retire. That's when the highest-impact decisions get made — Roth conversion planning, catch-up contribution strategy, Social Security timing, and portfolio positioning. The earlier we can model your retirement income, the more levers we have to optimize it.",
      },
      {
        question: "How do you determine if I can afford to retire?",
        answer:
          "We build a comprehensive retirement readiness analysis that models your income sources, projected expenses, tax liability, healthcare costs, and inflation over a multi-decade horizon. We stress-test it across different market scenarios and Social Security claiming ages so you can see where you stand — not just in the best case, but across a range of outcomes.",
      },
      {
        question: "Should I be doing Roth conversions before I retire?",
        answer:
          "In many cases, yes — the years before Social Security and RMDs begin are often the optimal window for Roth conversions. But the right amount depends on your current bracket, your projected retirement income, and how conversions interact with factors like IRMAA thresholds. Our team models this as part of your integrated tax and retirement plan.",
      },
      {
        question:
          "What makes your team different from other financial advisors?",
        answer:
          "Most firms separate financial planning from tax work — you get an advisor who sends you to your own CPA, and the two rarely coordinate. At United Financial Planning Group, CFP® professionals, CPAs, and Enrolled Agents work as one team. That integration is especially valuable near retirement, when every financial decision has a tax consequence and every tax decision affects your retirement timeline.",
      },
      {
        question: "Are you a fiduciary?",
        answer:
          "Yes. As a fee-only Registered Investment Advisor, we are a fiduciary — legally and ethically obligated to act in your interest. We earn no commissions and receive no compensation from product sales, so our recommendations are based on your situation, not on what pays us.",
      },
    ],
    faqHeading: "Common Questions About Pre-Retirement Planning",
    lastUpdated: "March 2026",
    relatedPersonaSlugs: ["retirees", "business-owners"],
    serviceTypes: [
      "Retirement Planning",
      "Tax Planning",
      "Investment Management",
      "Financial Planning",
    ],
  },

  // ─── BUSINESS OWNERS ───
  {
    slug: "business-owners",
    name: "Business Owners",
    seoTitle: "Financial Advisor for Business Owners",
    metaDescription:
      "Fee-only financial planning for business owners. CFPs, CPAs, and Enrolled Agents under one roof — tax, planning, and investments aligned with your business.",
    h1: "Your Business and Personal Finances, Finally on the Same Page",
    heroSubtitle:
      "At United Financial Planning Group, our CFP® professionals, CPAs, and Enrolled Agents work together as one team — so your entity structure, tax strategy, compensation plan, and personal wealth are never managed in isolation.",
    eyebrow: "For Business Owners",
    icon: "Building2",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Business owner reviewing strategy in a professional setting",
    problemsHeading:
      "Running a Business Leaves Your Own Finances Behind",
    problemsSubheading:
      "When your focus is on the business, personal financial decisions — compensation structure, retirement planning, exit strategy — tend to get pushed back until the cost of waiting becomes clear.",
    problems: [
      {
        heading:
          "Your business returns and personal finances live separately",
        description:
          "Your business tax return gets filed at one firm, your personal financial plan is managed at another, and neither side knows what the other is doing. Compensation decisions, retirement plan contributions, and entity structure choices all affect both columns — but when advisors don't share information, you end up coordinating between them yourself, hoping nothing falls through the cracks.",
      },
      {
        heading: "Salary vs. distributions is never a simple answer",
        description:
          "Getting your compensation structure right as an S-corp or LLC owner has real tax consequences for both you and the business. Without planners who understand both sides, you're often leaving money on the table or creating problems you won't discover until tax season.",
      },
      {
        heading: "Your exit plan is still just a rough idea",
        description:
          "Succession planning, buy-sell agreements, and business valuation all affect what your years of work are actually worth when you're ready to transition. Most business owners delay this work until it becomes urgent — which limits your options.",
      },
      {
        heading:
          "Retirement planning built around a paycheck doesn't fit you",
        description:
          "Standard retirement advice assumes a W-2 income stream and an employer match. As a business owner, your retirement is often tied to the value of your business, your ability to fund a plan through the entity, and how you eventually exit. That requires a different kind of planning.",
      },
    ],
    servicesHeading:
      "Business and Personal Finances — Planned by One Team",
    servicesSubheading:
      "We bring financial planning, tax strategy, and investment management together under one roof, so your business decisions and personal wealth goals are always in sync.",
    services: [
      {
        title: "Financial Planning",
        description:
          "We build a financial plan that accounts for the complexity of business ownership — entity structure, cash flow, personal goals, and eventual exit — all mapped together by the same advisory team.",
        href: "/services/financial-planning",
      },
      {
        title: "Tax Planning",
        description:
          "Our CPAs and Enrolled Agents develop a proactive tax strategy — not just for your personal return, but for your business structure and compensation decisions throughout the year.",
        href: "/services/tax-planning",
      },
      {
        title: "Tax Preparation",
        description:
          "We prepare both your personal and business returns in-house, so there's no handoff between firms and nothing gets lost in translation between your Schedule K-1 and your individual filing.",
        href: "/services/tax-preparation",
      },
      {
        title: "Retirement Planning",
        description:
          "We help business owners evaluate the right retirement plan structure for their entity — whether that's a SEP-IRA, Solo 401(k), defined benefit plan, or a combination — and integrate that with long-term personal wealth goals.",
        href: "/services/retirement-planning",
      },
    ],
    faqs: [
      {
        question:
          "What makes your team different from a typical financial advisor?",
        answer:
          "Most financial advisors don't have CPAs on staff, and most CPA firms don't do financial planning. We bring CFP® professionals, CPAs, and Enrolled Agents together as one team. That means your tax strategy, financial plan, and investment decisions are coordinated by people who are in the same room — not handed off between separate firms.",
      },
      {
        question:
          "Do you work with business owners who already have an accountant?",
        answer:
          "Yes, and we're happy to collaborate with your existing accountant if you prefer. That said, many of our business owner clients find that consolidating their financial planning and tax work with one team reduces complexity and helps them make more informed decisions across the board.",
      },
      {
        question:
          "Can you help with entity structuring and compensation planning?",
        answer:
          "Yes. Whether you're evaluating your current entity structure, optimizing your salary-to-distribution mix as an S-corp owner, or thinking through how a change in structure affects your taxes and planning, our team works through those decisions with you — with both the planning and tax perspective in the same conversation.",
      },
      {
        question: "What does fee-only mean, and why does it matter?",
        answer:
          "Fee-only means we're compensated directly by you — not through commissions, referral fees, or product sales. As a fiduciary, we're required to act in your interest. That structure keeps our recommendations focused on what makes sense for your situation, not on what generates revenue for us.",
      },
      {
        question: "Do you help with business succession and exit planning?",
        answer:
          "We do. Succession planning and exit strategy are areas where financial planning, tax planning, and investment strategy all converge — which makes it especially well-suited to a firm like ours. We help business owners think through their options well in advance of a transition so the decision is made on your terms.",
      },
    ],
    faqHeading: "Common Questions From Business Owners",
    lastUpdated: "March 2026",
    relatedPersonaSlugs: ["pre-retirees", "startup-founders"],
    serviceTypes: [
      "Financial Planning",
      "Tax Planning",
      "Tax Preparation",
      "Business Succession Planning",
    ],
  },

  // ─── STARTUP FOUNDERS ───
  {
    slug: "startup-founders",
    name: "Founders",
    seoTitle: "Financial Planning for Startup Founders",
    metaDescription:
      "Financial planning for startup founders, coordinating equity decisions, tax planning, liquidity events, and personal wealth planning with CFP® professionals, CPAs, and Enrolled Agents.",
    h1: "Founder Equity Decisions Deserve a Coordinated Financial Plan",
    heroSubtitle:
      "Equity grants, tax elections, company milestones, and personal goals can intersect quickly. Our CFP® professionals, CPAs, and Enrolled Agents help founders organize the planning questions around ownership, taxes, liquidity, and life beyond the company.",
    eyebrow: "For Founders",
    icon: "Rocket",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Startup founder working through strategy with their team",
    problemsHeading:
      "Your Cap Table Does Not Fit a Standard Financial Plan",
    problemsSubheading:
      "Founder wealth may be tied to equity, irregular compensation, and decisions that affect both company ownership and personal finances. A useful plan needs to account for those connections.",
    problems: [
      {
        heading: "Equity tax elections have short decision windows",
        description:
          "An 83(b) election is generally due within 30 days after a qualifying property transfer. The decision can involve tax, valuation, and liquidity considerations, so founders may benefit from coordinating with their tax and legal professionals promptly.",
      },
      {
        heading: "QSBS planning depends on facts and documentation",
        description:
          "Section 1202 treatment depends on statutory requirements, holding periods, company circumstances, and records that may need attention over time. We help integrate the financial and tax planning questions with your broader personal plan, alongside appropriate legal guidance.",
      },
      {
        heading: "Liquidity can create several decisions at once",
        description:
          "A secondary sale or company exit may change your cash flow, tax picture, concentration, and estate considerations at the same time. Coordinated planning can help you evaluate trade-offs before acting under time pressure.",
      },
      {
        heading: "Founder income can change from year to year",
        description:
          "Salary, draws, equity, and company milestones may not follow a predictable schedule. Your personal plan should reflect the uncertainty, liquidity constraints, and tax considerations that come with that structure.",
      },
    ],
    servicesHeading:
      "From Cap Table to Personal Planning, Coordinated",
    servicesSubheading:
      "Our CFP® professionals, CPAs, and Enrolled Agents work together so equity planning, tax questions, and personal financial decisions can be considered in the same conversation.",
    services: [
      {
        title: "Equity Compensation Planning",
        description:
          "We help founders organize the questions around equity grants, tax elections, early exercise decisions, QSBS considerations, and how ownership fits within a broader personal plan.",
        href: "/services/equity-compensation",
      },
      {
        title: "Tax Planning",
        description:
          "Our CFP® professionals, CPAs, and Enrolled Agents coordinate tax planning with the financial decisions surrounding equity, cash flow, and company milestones throughout the year.",
        href: "/services/tax-planning",
      },
      {
        title: "Financial Planning",
        description:
          "We help you organize liquid and illiquid assets, personal cash needs, evolving income, and long-term goals into a plan that reflects your circumstances.",
        href: "/services/financial-planning",
      },
      {
        title: "Investment Management",
        description:
          "Following a liquidity event, investment decisions may need to be considered alongside taxes, concentration, cash needs, and your broader financial plan.",
        href: "/services/investment-management",
      },
    ],
    planningStages: [
      {
        title: "Before an equity decision",
        description:
          "Review grant documents, timing considerations, cash needs, and the tax or legal questions that may need attention before you act.",
      },
      {
        title: "As the company grows",
        description:
          "Coordinate evolving compensation, estimated taxes, personal cash flow, and planning priorities as circumstances change.",
      },
      {
        title: "Before a liquidity event",
        description:
          "Assess tax exposure, concentration, charitable and estate considerations, and near-term liquidity needs before a sale or exit.",
      },
      {
        title: "After liquidity",
        description:
          "Revisit cash flow, investment management, tax preparation, and long-term family goals in light of your new circumstances.",
      },
    ],
    preparationItems: [
      "An equity summary or cap table, if available",
      "Grant agreements and exercise history",
      "Your most recent tax return",
      "Expected company milestones or liquidity constraints",
      "Existing estate documents, if applicable",
    ],
    resources: [
      {
        title: "QSBS and Section 1202 planning",
        description:
          "A detailed overview of questions founders and pre-IPO employees may need to consider around Qualified Small Business Stock.",
        href: "/blog/qsbs-exclusion-section-1202-planning",
      },
      {
        title: "Equity compensation planning for startup employees",
        description:
          "How equity compensation can connect with tax planning and a broader personal financial plan.",
        href: "/blog/equity-compensation-planning-startup-employees",
      },
      {
        title: "ISO and NSO tax considerations",
        description:
          "An educational comparison of incentive stock options and nonqualified stock options for New York startup employees.",
        href: "/blog/equity-compensation-isos-vs-nsos-ny-startup-employees",
      },
      {
        title: "Planning around a concentrated stock position",
        description:
          "Questions to consider when a substantial share of personal wealth is tied to one company position.",
        href: "/blog/tax-efficient-diversification-unwind-concentrated-stock",
      },
    ],
    faqs: [
      {
        question: "When should a founder involve a financial planner?",
        answer:
          "A planning conversation can be useful before an equity election, exercise decision, secondary sale, or anticipated liquidity event. Earlier coordination may provide more time to identify questions for your tax and legal professionals, but the appropriate timing depends on your circumstances.",
      },
      {
        question: "What information is useful to bring to a first conversation?",
        answer:
          "If convenient, an equity summary, grant agreements, exercise history, recent tax return, and notes about upcoming company milestones can help us understand the planning questions. You do not need to have every document organized before reaching out.",
      },
      {
        question: "How do you coordinate with my startup attorney and outside tax counsel?",
        answer:
          "We can work alongside your existing professionals to help align the personal financial planning and tax questions with the legal work they provide. Legal and tax conclusions remain with the appropriate licensed professional.",
      },
      {
        question: "What should I consider before a secondary sale?",
        answer:
          "The decision may involve tax consequences, liquidity needs, ownership restrictions, concentration, and personal goals. We help organize those financial planning questions with your tax situation in view, while you coordinate company and legal requirements with the appropriate parties.",
      },
      {
        question: "How can I evaluate QSBS considerations?",
        answer:
          "Section 1202 treatment depends on the facts, documentation, holding periods, and other statutory requirements. We can help incorporate the tax planning questions into your broader financial plan and coordinate with your tax and legal professionals as appropriate.",
      },
    ],
    faqHeading: "Common Questions From Founders",
    lastUpdated: "September 2026",
    relatedPersonaSlugs: ["software-engineers", "executives"],
    serviceTypes: [
      "Equity Compensation Planning",
      "Tax Planning",
      "Financial Planning",
      "Investment Management",
    ],
  },

  // ─── SOFTWARE ENGINEERS ───
  {
    slug: "software-engineers",
    name: "Software Engineers",
    seoTitle: "Financial Advisor for Software Engineers",
    metaDescription:
      "Fee-only financial planning built for tech comp: RSUs, ESPPs, mega-backdoor Roth, and tax strategy handled by CFPs, CPAs, and EAs under one roof.",
    h1: "Your Comp Package Is Complex. Your Financial Plan Should Keep Up.",
    heroSubtitle:
      "We work with software engineers navigating RSU vesting, stock refreshers, ESPP decisions, and high W-2 income — bringing financial planning, investment management, and tax strategy together on one team.",
    eyebrow: "For Software Engineers",
    icon: "Code2",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Software engineer's workspace with code on screen",
    problemsHeading:
      "Every Vesting Cycle Brings a New Financial Problem",
    problemsSubheading:
      "The complexity of tech compensation compounds over time — RSU grants, annual refreshers, ESPP windows, and rising income brackets create decisions that need more than a generic financial plan.",
    problems: [
      {
        heading: "RSU vesting creates a tax problem every year",
        description:
          "When shares vest, they're taxed as ordinary income — often at your highest marginal rate. Without proactive withholding adjustments and sell strategy, you can end up owing more than you expected every April.",
      },
      {
        heading: "Your net worth is concentrated in one stock",
        description:
          "Most engineers accumulate significant exposure to their employer's stock through RSUs, ESPPs, and options. That concentration is a real risk, and unwinding it strategically — without triggering a large tax bill — takes planning.",
      },
      {
        heading: "Comp changes every year, and so does the math",
        description:
          "Promotions, refresher grants, and variable bonuses mean your income picture looks different every cycle. Financial advice that made sense at one level may not make sense at the next, especially when your saving capacity and tax bracket shift significantly.",
      },
      {
        heading: "Most advisors don't understand how tech comp works",
        description:
          "If you've ever had to explain what a cliff vesting schedule or an ESPP lookback provision is to an advisor, you know the problem. You need someone who already understands the mechanics — not someone who nods along.",
      },
    ],
    servicesHeading:
      "One Team for Your Comp, Taxes, and Wealth",
    servicesSubheading:
      "Our CFP® professionals, CPAs, and Enrolled Agents work together on your financial plan — so your equity strategy, tax withholding, and long-term goals are always moving in the same direction.",
    services: [
      {
        title: "Equity Compensation Planning",
        description:
          "We help you make decisions around RSU vesting, ESPP participation and sell timing, stock option exercises, and concentration risk — coordinated with your tax situation so each choice fits into the larger picture.",
        href: "/services/equity-compensation",
      },
      {
        title: "Tax Planning & Preparation",
        description:
          "Our CPAs and Enrolled Agents handle both your tax strategy and your tax return — the same team that plans your withholding and estimated payments also files your return, so nothing falls through the cracks.",
        href: "/services/tax-planning",
      },
      {
        title: "Investment Management",
        description:
          "We build and manage portfolios with your full financial picture in mind, including the employer stock you already hold, your risk tolerance, and the tax implications of every move.",
        href: "/services/investment-management",
      },
      {
        title: "Financial Planning",
        description:
          "From mega-backdoor Roth strategies to savings rate optimization and career-stage planning, we connect your day-to-day financial decisions to where you're headed over the next decade.",
        href: "/services/financial-planning",
      },
    ],
    faqs: [
      {
        question:
          "Do you actually understand RSUs, ESPPs, and tech comp structures?",
        answer:
          "Yes — we work with engineers at major tech companies, late-stage startups, and public tech firms as a core part of our practice. We understand cliff vesting, refresher grants, ESPP lookback provisions, and how supplemental wage withholding works. You won't need to explain the basics.",
      },
      {
        question: "What does fee-only mean, and why does it matter?",
        answer:
          "Fee-only means we're paid directly by you — not through commissions on products we sell. We don't earn anything based on what investments we recommend, which keeps our advice focused on your interests. We're also fiduciaries, meaning we're legally obligated to act in your interest.",
      },
      {
        question:
          "Can you help me figure out how much to withhold on RSU vests?",
        answer:
          "That's one of the most common issues we address for engineers. Because RSUs are taxed as ordinary income at vest, the default 22% federal supplemental withholding rate often falls short for people in higher brackets. We work through the numbers with you and coordinate adjustments with your overall tax plan.",
      },
      {
        question:
          "How do you handle the tax side — do I still need a separate CPA?",
        answer:
          "No. Our team includes CFP® professionals, CPAs, and Enrolled Agents, so financial planning and tax work happen under one roof. The same team that advises on your equity strategy also handles your tax planning and prepares your return — which means the advice is actually coordinated.",
      },
      {
        question:
          "I have a lot of my net worth in my employer's stock. Can you help me diversify?",
        answer:
          "This is exactly the kind of problem we plan for. Unwinding concentrated stock positions has real tax consequences, and the right approach depends on your specific cost basis, vesting schedule, other income, and timeline. We model the tradeoffs and build a diversification plan that accounts for all of it.",
      },
    ],
    faqHeading: "Common Questions From Software Engineers",
    lastUpdated: "March 2026",
    relatedPersonaSlugs: ["executives", "startup-founders"],
    serviceTypes: [
      "Equity Compensation Planning",
      "Tax Planning",
      "Investment Management",
      "Financial Planning",
    ],
  },

  // ─── EXECUTIVES ───
  {
    slug: "executives",
    name: "Executives",
    seoTitle: "Financial Advisor for Executives",
    metaDescription:
      "Fee-only financial planning for executives navigating equity compensation, AMT exposure, concentrated stock, and deferred compensation. CFPs, CPAs, and EAs in one firm.",
    h1: "Your Compensation Is Complex. Your Financial Team Should Match It.",
    heroSubtitle:
      "United Financial Planning Group brings CFP® professionals, CPAs, and Enrolled Agents together under one roof — so your equity events, tax strategy, and long-term wealth all move in the same direction.",
    eyebrow: "For Executives",
    icon: "BarChart3",
    imageUrl:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Executive in a professional meeting setting",
    problemsHeading:
      "Complexity at This Level Requires Advisors Who Coordinate",
    problemsSubheading:
      "Executive compensation involves decisions with narrow windows, meaningful tax exposure, and long-term consequences. When the advice you receive is fragmented, the costs often don't show up until it's too late to do anything about them.",
    problems: [
      {
        heading: "Your equity grants have a narrow window",
        description:
          "ISOs, RSUs, NSOs, and ESPP shares each carry different tax consequences — and the decisions you make at grant, vesting, or exercise can't easily be undone. Missing the right timing means leaving money on the table or handing more of it to the IRS.",
      },
      {
        heading: "AMT exposure catches executives off guard",
        description:
          "Exercising ISOs can trigger the Alternative Minimum Tax even when you haven't sold a single share. Without a coordinated plan across income, deductions, and equity activity, the bill at year-end can be significant and avoidable.",
      },
      {
        heading: "Most of your net worth is tied to one stock",
        description:
          "Concentrated positions in your employer create real risk — and diversifying isn't as simple as selling. Blackout periods, 10b5-1 plan requirements, and capital gains exposure all shape what you can do and when.",
      },
      {
        heading:
          "Your three advisors have never compared notes",
        description:
          "Most executives work with an investment manager, a financial planner, and a CPA at separate firms — none of whom have visibility into what the others are doing. When an ISO exercise triggers unexpected AMT exposure, or a deferred compensation distribution lands in a year when you've already hit the top of your bracket, no one catches it in advance because no one has the full picture.",
      },
    ],
    servicesHeading:
      "Your Equity Strategy and Tax Plan, Built as One",
    servicesSubheading:
      "Our CFP® professionals, CPAs, and Enrolled Agents work together on your equity compensation, deferred income, and long-term financial plan — so every decision is made with the full picture in view.",
    services: [
      {
        title: "Equity Compensation Planning",
        description:
          "We map the full landscape of your equity grants — exercise timing, tax exposure, AMT planning, and diversification strategy — coordinated with everything else happening in your financial life.",
        href: "/services/equity-compensation",
      },
      {
        title: "Tax Planning",
        description:
          "Our CPAs and Enrolled Agents work alongside your financial planners year-round — not just at filing — to manage AMT exposure, capital gains, deferred compensation distributions, and the tax implications of every equity decision.",
        href: "/services/tax-planning",
      },
      {
        title: "Investment Management",
        description:
          "We build portfolios that account for what you already hold — including concentrated employer stock — so your broader investments work to reduce risk and build wealth outside your company.",
        href: "/services/investment-management",
      },
      {
        title: "Financial Planning",
        description:
          "Your career trajectory, equity milestones, deferred compensation, and retirement timeline are all connected. We plan across all of it so that each financial decision supports the next.",
        href: "/services/financial-planning",
      },
    ],
    faqs: [
      {
        question: "How does working with a fee-only firm help me?",
        answer:
          "Fee-only means we earn no commissions — ever. We are compensated only by the fees you pay us, which means our advice is based entirely on what serves your financial goals. As a fiduciary, we are legally required to act in your interest.",
      },
      {
        question:
          "What makes United Financial Planning Group different from a typical financial advisor?",
        answer:
          "Most advisors refer you out to a CPA for taxes and a separate attorney for planning. At United Financial Planning Group, CFP® professionals, CPAs, and Enrolled Agents work as a single integrated team. That means your equity decisions, tax strategy, and financial plan are coordinated by people who talk to each other daily — not across different firms.",
      },
      {
        question:
          "Can you help me set up or manage a 10b5-1 trading plan?",
        answer:
          "Yes. We work with executives to structure 10b5-1 plans that fit their diversification goals, comply with SEC requirements, and account for tax timing. We coordinate with your company's legal counsel and work within the constraints of your trading window.",
      },
      {
        question: "How do you handle deferred compensation planning?",
        answer:
          "Non-qualified deferred compensation (NQDC) plans require careful distribution planning — timing elections, tax implications, and risk of forfeiture if your employer's financial position changes. We analyze your NQDC alongside your other income sources to build a distribution strategy that makes sense across your career and into retirement.",
      },
      {
        question:
          "When is the right time to start planning around equity compensation?",
        answer:
          "The best time is before a major equity event — before you exercise ISOs, before a liquidity event, or before a large RSU vesting. The earlier we understand your equity schedule, the more options we have. That said, we regularly help executives who are catching up after a missed window and still have meaningful planning opportunities ahead.",
      },
    ],
    faqHeading: "Common Questions From Executives",
    lastUpdated: "March 2026",
    relatedPersonaSlugs: ["software-engineers", "startup-founders"],
    serviceTypes: [
      "Equity Compensation Planning",
      "Tax Planning",
      "Investment Management",
      "Financial Planning",
    ],
  },

  // ─── ANTHROPIC EMPLOYEES ───
  {
    slug: "anthropic-employees",
    name: "Anthropic Employees",
    seoTitle: "Financial Advisor for Anthropic Employees | NYC Equity & Pre-IPO Planning",
    metaDescription:
      "Fee-only financial planning for Anthropic employees in NYC. Private-company RSU double-trigger vesting, tender offer liquidity, QSBS, 83(b) elections, and AMT planning. CFPs, CPAs, and EAs under one roof.",
    h1: "Financial Planning Built for Anthropic's Private-Company Equity",
    heroSubtitle:
      "Anthropic recently leased space at 330 Hudson St in Hudson Square, bringing its NYC headcount to 1,000-plus by end of 2026. Our Manhattan office is minutes away. If you work at Anthropic or another pre-IPO AI company, your equity has a different set of rules from public-company RSUs. We help you navigate them.",
    eyebrow: "For Anthropic and Pre-IPO AI Company Employees",
    icon: "Code2",
    imageUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    imageAlt:
      "AI researcher working at a modern desk with dual monitors displaying code",
    problemsHeading:
      "Private-Company Equity Works Differently. Most Financial Advisors Treat It Like It Doesn't.",
    problemsSubheading:
      "At a company like Anthropic, your equity isn't traded on a public exchange. The timing of your taxes, your liquidity, and your planning decisions all depend on mechanics that most financial advisors have never seen up close. Getting them wrong is costly and often irreversible.",
    problems: [
      {
        heading: "Double-trigger RSU vesting means your tax clock starts at the liquidity event, not the vest date",
        description:
          "Most public-company RSU guides talk about tax at vest. Private-company RSUs often use double-trigger vesting: shares don't deliver until both a time-based schedule and a liquidity event (IPO, acquisition, or secondary sale) have been satisfied. That structure affects when you owe tax, how much you owe, and what planning moves are still available to you before and after the trigger.",
      },
      {
        heading: "Tender offers and secondary sales require fast, coordinated decisions",
        description:
          "Anthropic has offered employees periodic liquidity through tender offers and secondary-market transactions. Each one comes with a short window, limited information, and real tax consequences. Whether to participate, how much to sell, and how to handle the resulting income requires a financial and tax analysis you can't rush.",
      },
      {
        heading: "The 83(b) election window is 30 days, and missing it is permanent",
        description:
          "If you received restricted stock or early-exercised options at Anthropic before the equity was fully vested, you had 30 days to file an 83(b) election with the IRS. If that window passed without a filing, you may owe ordinary income tax on appreciation that hasn't generated any liquidity yet. For those still holding unvested shares, understanding where you stand on this decision is a foundational planning step.",
      },
      {
        heading: "QSBS and AMT exposure are often overlooked until it's too late",
        description:
          "Shares in a company like Anthropic may qualify for the Section 1202 Qualified Small Business Stock exclusion if specific conditions are met and a five-year holding period is satisfied. Separately, if any incentive stock options (ISOs) are involved, exercising them can trigger Alternative Minimum Tax even before you've sold a share. Both situations require proactive, coordinated planning, not year-end discovery.",
      },
    ],
    servicesHeading:
      "Equity Planning, Tax Strategy, and Financial Planning on One Team",
    servicesSubheading:
      "Our CFP® professionals, CPAs, and Enrolled Agents work together on your plan, so your private-company equity decisions, tax exposure, and long-term financial goals are built as one coordinated whole. We are fee-only fiduciaries: no commissions, ever.",
    services: [
      {
        title: "Equity Compensation Planning",
        description:
          "We work through the mechanics that matter for pre-IPO employees: double-trigger RSU structures, 83(b) elections, tender-offer participation decisions, QSBS eligibility tracking, and ISO exercise strategy with AMT modeling. Each decision is evaluated in the context of your full financial picture.",
        href: "/services/equity-compensation",
      },
      {
        title: "Tax Planning",
        description:
          "Our CPAs and Enrolled Agents work alongside your financial planner year-round. We model your tax exposure before tender offers close, estimate AMT impact from ISO exercises, and build a plan for managing ordinary income and capital gains when liquidity events arrive.",
        href: "/services/tax-planning",
      },
      {
        title: "Financial Planning",
        description:
          "We help you see your full financial picture: liquid savings, illiquid equity, pre-IPO concentration risk, and long-term goals. For senior staff and engineers approaching a potential retirement timeline, we integrate your equity milestones with retirement readiness planning.",
        href: "/services/financial-planning",
      },
      {
        title: "Investment Management",
        description:
          "After a tender offer or secondary sale generates liquidity, the decisions around investing that capital require coordination with your tax situation and your remaining equity exposure. We manage investments with the full picture in view.",
        href: "/services/investment-management",
      },
    ],
    faqs: [
      {
        question: "What is double-trigger RSU vesting and why does it matter for tax planning?",
        answer:
          "Standard public-company RSUs vest on a time-based schedule, and you owe ordinary income tax at vest. Private-company RSUs at companies like Anthropic often use double-trigger vesting: shares only deliver when both a time condition and a liquidity event are satisfied. That second trigger changes when ordinary income tax is due. It also means your planning decisions before a liquidity event, such as whether to participate in a tender offer, carry real tax consequences that are specific to your situation.",
      },
      {
        question: "Should I participate in Anthropic's tender offer?",
        answer:
          "There is no universal answer. Whether to sell, how much to sell, and which shares to sell depends on your cost basis, your current income, your overall financial picture, and your view of the company's long-term value. It also depends on whether you have QSBS-eligible shares you want to hold through the five-year mark, or ISO shares where a sale could affect your AMT position. These are exactly the kinds of decisions we help clients work through before tender offer windows close.",
      },
      {
        question: "What is the QSBS five-year holding period and do my Anthropic shares qualify?",
        answer:
          "Section 1202 of the tax code allows certain shareholders of qualified small business stock to exclude a significant portion of their gain from federal capital gains tax, provided the shares are held for at least five years and other conditions are met. Whether Anthropic shares issued to you qualify depends on when they were issued, the nature of your grant, and factors specific to the company at the time of issuance. We evaluate this as part of our equity compensation planning work.",
      },
      {
        question: "Can you help me understand my AMT exposure from ISO exercises?",
        answer:
          "Yes. Exercising incentive stock options at a pre-IPO company can trigger AMT in the year of exercise, even if you haven't sold the shares and haven't received any cash. The amount of AMT exposure depends on the spread between your exercise price and the current 409A valuation, your other income, and deductions available to you that year. We model this before you exercise, not after, so you can make an informed decision.",
      },
      {
        question: "What does fee-only fiduciary mean, and why does it matter?",
        answer:
          "Fee-only means we are compensated only by the fees you pay us. We earn no commissions, no referral fees, and no revenue from investment products. As a fiduciary, we are legally required to act in your interest. That structure means our advice is based on your situation, not on what generates revenue for us.",
      },
      {
        question: "Are you affiliated with or endorsed by Anthropic?",
        answer:
          "No. United Financial Planning Group is an independent firm with no affiliation, partnership, endorsement, or sponsorship relationship with Anthropic. We serve employees of Anthropic and other pre-IPO technology companies as independent financial advisors. Anthropic is referenced on this page only to describe the professional background of clients we work with.",
      },
    ],
    faqHeading: "Common Questions From Pre-IPO Tech Employees",
    lastUpdated: "July 2026",
    relatedPersonaSlugs: ["software-engineers", "executives", "startup-founders"],
    serviceTypes: [
      "Equity Compensation Planning",
      "Tax Planning",
      "Financial Planning",
      "Investment Management",
    ],
  },

  // ─── RAMP EMPLOYEES ───
  {
    slug: "ramp-employees",
    name: "Ramp Employees",
    seoTitle: "Financial Advisor for Ramp Employees | Equity, Pre-IPO & Tax Planning",
    metaDescription:
      "Fee-only financial planning for Ramp employees. RSU vesting, concentration risk, tender offer decisions, QSBS, AMT from ISOs, and pre-IPO tax planning. CFPs, CPAs, and EAs under one roof.",
    h1: "Financial Planning Built for Ramp's Late-Stage Equity",
    heroSubtitle:
      "Ramp is one of the most-watched fintech IPO candidates in the country, with a valuation history that spans multiple funding rounds and a real path to liquidity. If you work at Ramp, your equity situation is specific: RSU vesting schedules, potential tender offer windows, ISO/QSBS considerations, and a future IPO that could change your tax picture overnight. Our CFPs, CPAs, and EAs work as one team to plan around all of it. We are based in NYC and work with clients nationwide.",
    eyebrow: "For Ramp Employees",
    icon: "BarChart3",
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    imageAlt:
      "Financial professional reviewing equity compensation data on a modern workstation",
    problemsHeading:
      "Late-Stage Fintech Equity Comes With Its Own Set of Planning Problems",
    problemsSubheading:
      "Ramp sits at an unusual inflection point: private enough that your equity is still illiquid on most days, but advanced enough that IPO planning, secondary liquidity, and tax exposure are real and near-term considerations. Most financial advisors have never worked through this stage up close.",
    problems: [
      {
        heading: "RSU concentration risk grows with every vesting cycle",
        description:
          "Each time a tranche of RSUs vests, your exposure to Ramp as a single position increases. At a private company, you cannot simply sell as you go the way you might at a public employer. That means concentration builds until a liquidity event arrives, and the tax consequences of unwinding it all at once can be significant. Planning for diversification has to start well before you have the ability to act.",
      },
      {
        heading: "Tender offers and secondary windows close fast",
        description:
          "Late-stage private companies at Ramp's scale occasionally offer employees periodic liquidity through tender offers or secondary transactions. Each window is short, the information available is limited, and the decision of how much to sell, which shares to sell, and what the tax consequences will be requires analysis you cannot complete in a day or two. Arriving prepared is the only way to make a good decision.",
      },
      {
        heading: "A potential IPO changes your tax exposure, not just your liquidity",
        description:
          "An IPO is not just a liquidity event. It is a tax event. Depending on how your equity is structured, the timing of your grants relative to the IPO, and your income in the year shares become liquid, you could face a significant and compressible tax bill. Planning for that in advance, not after the fact, is the difference between managing your tax liability and simply paying it.",
      },
      {
        heading: "ISO and QSBS mechanics are easy to miss until the window closes",
        description:
          "If any of your Ramp equity involves incentive stock options (ISOs), exercising them before an IPO can trigger the Alternative Minimum Tax even if you have not sold a single share. Separately, shares in certain qualifying startups may be eligible for the Section 1202 QSBS exclusion, which can shield a meaningful portion of your gain from federal capital gains tax, but only if specific conditions are met and a five-year holding period is maintained. Both require proactive planning, not year-end discovery.",
      },
    ],
    servicesHeading:
      "Equity Planning, Tax Strategy, and Financial Planning on One Team",
    servicesSubheading:
      "Our CFP® professionals, CPAs, and Enrolled Agents work together on your plan so your Ramp equity decisions, tax exposure, and long-term financial goals are built as one coordinated whole. We are fee-only fiduciaries: no commissions, ever.",
    services: [
      {
        title: "Equity Compensation Planning",
        description:
          "We work through the details that matter for late-stage private company employees: RSU vesting and concentration risk, secondary sale and tender offer analysis, ISO exercise strategy with AMT modeling, and QSBS eligibility tracking. Each decision is evaluated in the context of your full financial picture.",
        href: "/services/equity-compensation",
      },
      {
        title: "Tax Planning",
        description:
          "Our CPAs and Enrolled Agents work alongside your financial planner year-round. We model your tax exposure before tender offer windows close, estimate AMT impact from ISO exercises, and build a forward-looking plan for managing ordinary income and capital gains when a liquidity event arrives.",
        href: "/services/tax-planning",
      },
      {
        title: "Financial Planning",
        description:
          "We help you see your full financial picture: liquid savings, illiquid equity, pre-IPO concentration risk, retirement readiness, and long-term goals. For Ramp employees with equity milestones on the horizon, we integrate your equity timeline with the rest of your financial plan.",
        href: "/services/financial-planning",
      },
      {
        title: "Investment Management",
        description:
          "After a tender offer or IPO generates liquidity, the decisions around investing that capital require coordination with your tax situation and your remaining equity exposure. We manage investments with the full picture in view, not in isolation from it.",
        href: "/services/investment-management",
      },
    ],
    faqs: [
      {
        question: "How do RSU vesting schedules at a private company like Ramp affect my taxes?",
        answer:
          "At a public company, RSUs typically vest on a time-based schedule and you owe ordinary income tax at vest, based on the market price of the shares that day. At a private company, the tax treatment can work differently depending on how the grants are structured. Some private-company RSUs use double-trigger vesting, meaning shares only deliver and taxes become due when both a time condition and a liquidity event are satisfied. Understanding which structure applies to your grants, and what that means for your planning, is a foundational step.",
      },
      {
        question: "Should I participate in a Ramp tender offer or secondary sale?",
        answer:
          "There is no universal answer. The right decision depends on your cost basis, your current income, your overall financial picture, your view of the company's long-term trajectory, and whether you hold QSBS-eligible shares you want to hold through the five-year mark or ISO shares where a sale could affect your AMT position. These are exactly the kinds of decisions we help clients work through before tender offer windows close, not during them.",
      },
      {
        question: "What should I be doing now to prepare for a potential Ramp IPO?",
        answer:
          "The period leading up to a potential IPO is when planning matters most and options are still open. We help Ramp employees model what their equity could be worth under different scenarios, understand the tax consequences of shares becoming liquid, evaluate whether to exercise any ISOs before the IPO to manage AMT exposure, and build a diversification and tax strategy for the proceeds. The goal is to arrive at any liquidity event with a plan already in place.",
      },
      {
        question: "What is the QSBS exclusion and could it apply to my Ramp equity?",
        answer:
          "Section 1202 of the tax code allows qualifying shareholders of certain small business stock to exclude a significant portion of their gain from federal capital gains tax, provided shares are held for at least five years and other conditions are met at the time of issuance. Whether any of your Ramp equity qualifies depends on when and how it was issued, the nature of your grant, and factors specific to the company at that time. We evaluate this as part of our equity compensation planning work.",
      },
      {
        question: "Can you help me understand AMT exposure from exercising ISOs?",
        answer:
          "Yes. Exercising incentive stock options at a private company can trigger the Alternative Minimum Tax in the year of exercise, even if you have not sold the shares and have not received any cash. The amount of AMT exposure depends on the spread between your exercise price and the current 409A valuation, your other income, and deductions available to you that year. We model this before you exercise so you can make an informed decision.",
      },
      {
        question: "What does fee-only fiduciary mean, and why does it matter?",
        answer:
          "Fee-only means we are compensated only by the fees you pay us. We earn no commissions, no referral fees, and no revenue from investment products. As a fiduciary, we are legally required to act in your interest. That structure means our advice is based on your situation, not on what generates revenue for us.",
      },
      {
        question: "Are you affiliated with or endorsed by Ramp?",
        answer:
          "No. United Financial Planning Group is an independent firm with no affiliation, partnership, endorsement, or sponsorship relationship with Ramp. We serve employees of Ramp and other late-stage private companies as independent financial advisors. Ramp is referenced on this page only to describe the professional background of clients we work with.",
      },
    ],
    faqHeading: "Common Questions From Ramp Employees",
    lastUpdated: "July 2026",
    relatedPersonaSlugs: ["software-engineers", "executives", "startup-founders"],
    serviceTypes: [
      "Equity Compensation Planning",
      "Tax Planning",
      "Financial Planning",
      "Investment Management",
    ],
  },

  // ─── HIGH NET WORTH ───
  {
    slug: "high-net-worth",
    name: "High-Net-Worth Families",
    seoTitle: "High-Net-Worth Financial Advisor",
    metaDescription:
      "Fee-only financial planning, investment management, and tax strategy for high-net-worth individuals and families. CFPs, CPAs, and EAs under one roof.",
    h1: "Wealth This Complex Deserves Advice This Coordinated",
    heroSubtitle:
      "United Financial Planning Group brings together CFP® professionals, CPAs, and Enrolled Agents under one roof — so your financial plan, investment strategy, and tax picture are never managed in silos.",
    eyebrow: "For High-Net-Worth Families and Individuals",
    icon: "Gem",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    imageAlt:
      "Professional financial planning session for high-net-worth family",
    problemsHeading:
      "At This Level, Disconnected Advice Has Real Consequences",
    problemsSubheading:
      "Significant wealth creates complexity across accounts, assets, taxes, and generations that multiple advisors working in silos cannot manage well — and the cost of misalignment grows as the numbers do.",
    problems: [
      {
        heading: "Your wealth is managed in disconnected pieces",
        description:
          "At this level of wealth, you've likely accumulated multiple advisors — a financial planner, an investment manager, a CPA, possibly an estate attorney — each managing their piece without meaningful coordination with the others. A tax-efficient withdrawal strategy can work against your estate plan; a Roth conversion can affect your charitable giving calculus. When those advisors don't share information, opportunities get missed and costly surprises appear at year-end.",
      },
      {
        heading: "Concentrated positions create risk and tax exposure",
        description:
          "A large stake in a single stock — whether from equity compensation, an inheritance, or a business sale — creates both portfolio risk and a significant tax liability. Managing one without considering the other is a costly mistake.",
      },
      {
        heading: "Estate planning requires more than a will",
        description:
          "Trusts, gifting strategies, generation-skipping transfers, and charitable vehicles each carry their own tax and legal implications. Coordinating them across generations takes more than occasional check-ins with an estate attorney.",
      },
      {
        heading:
          "Cookie-cutter allocation models weren't built for you",
        description:
          "Standard portfolio models don't account for your trust accounts, your stock options vesting schedule, your DAF, or your plans for the business you're still building. Your situation is specific — your advice should be too.",
      },
    ],
    servicesHeading:
      "One Team for Your Wealth, Taxes, and Legacy",
    servicesSubheading:
      "Our CFP® professionals, CPAs, and Enrolled Agents work together on every dimension of your financial life — from investment strategy and tax planning to multi-generational wealth transfer.",
    services: [
      {
        title: "Investment Management",
        description:
          "We manage portfolios with your full financial picture in mind — including tax consequences, concentrated positions, and multi-account coordination across taxable, retirement, and trust accounts.",
        href: "/services/investment-management",
      },
      {
        title: "Tax Planning",
        description:
          "Our CPAs and Enrolled Agents work alongside your financial planner year-round — not just at tax time — to identify opportunities for tax-loss harvesting, Roth conversions, and charitable giving strategies.",
        href: "/services/tax-planning",
      },
      {
        title: "Financial Planning",
        description:
          "From liquidity events to multi-generational wealth transfer, our CFP® professionals build plans that account for the complexity of significant wealth — and revisit them as your life evolves.",
        href: "/services/financial-planning",
      },
      {
        title: "Tax Preparation",
        description:
          "Because your tax returns are prepared by the same team managing your financial plan, nothing gets lost in translation. Your return reflects the strategy, not just the transactions.",
        href: "/services/tax-preparation",
      },
    ],
    faqs: [
      {
        question: "What does it mean that you're a fee-only fiduciary?",
        answer:
          "Fee-only means we charge only the fees you agree to — we earn no commissions from investment products, insurance sales, or referral arrangements. As a fiduciary, we're legally required to act in your interest. Those two things together mean our advice is never shaped by what pays us more.",
      },
      {
        question:
          "How do you handle the coordination between financial planning and taxes?",
        answer:
          "Our CFP® professionals, CPAs, and Enrolled Agents work in the same firm, on the same team. When we model a Roth conversion, update your investment allocation, or plan a charitable gift, the tax implications are part of that conversation from the start — not something you sort out later with a separate accountant.",
      },
      {
        question:
          "Do you work with clients who have complex estate planning needs?",
        answer:
          "Yes. We regularly work alongside estate attorneys to coordinate strategies involving revocable and irrevocable trusts, generation-skipping transfers, annual gifting programs, and charitable vehicles like donor-advised funds and charitable remainder trusts. Our role is to make sure the financial and tax planning aligns with the estate structure your attorney puts in place.",
      },
      {
        question: "How do you approach a concentrated stock position?",
        answer:
          "We look at the full picture — your cost basis, your income situation, your overall portfolio, and your goals — before recommending any action. Diversification strategies like systematic sales, charitable giving, or hedging all carry different trade-offs. We help you weigh them in the context of your specific tax situation and timeline.",
      },
      {
        question:
          "What's the minimum to work with United Financial Planning Group?",
        answer:
          "We work with clients who have significant accumulated wealth, typically $1 million or more in investable assets. That said, the right fit matters as much as the number. The best starting point is a conversation — we're happy to talk through whether our approach makes sense for your situation.",
      },
    ],
    faqHeading: "Common Questions About Wealth Management",
    lastUpdated: "March 2026",
    relatedPersonaSlugs: ["retirees", "executives"],
    serviceTypes: [
      "Investment Management",
      "Tax Planning",
      "Financial Planning",
      "Estate Planning",
    ],
  },

  // ─── DATABRICKS EMPLOYEES ───
  {
    slug: "databricks-employees",
    name: "Databricks Employees",
    seoTitle:
      "Financial Advisor for Databricks Employees | NYC Equity & Tax Planning",
    metaDescription:
      "Fee-only financial planning for Databricks employees in NYC. Databricks RSU, ISO, and QSBS tax planning from CFP and CPA professionals under one roof.",
    h1: "Financial Planning for Databricks Employees Where Your Advisor and Your CPA Are the Same Team",
    heroSubtitle:
      "Databricks opened a New York research and development hub at 5 Bryant Park in early 2026, shortly after a Series L funding round valued the company near $134 billion (TechCrunch, February 2026). Employees hold a mix of double-trigger RSUs, incentive stock options, and in some cases QSBS-eligible shares, each with different tax mechanics as a potential IPO approaches. Our CFP® professionals and CPAs work together so those decisions are planned as one coordinated whole.",
    eyebrow: "For Databricks Employees",
    icon: "Code2",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    imageAlt:
      "Data engineering workspace with code and analytics dashboards on screen",
    problemsHeading:
      "Your Databricks Equity Has Moving Parts Most Advisors Have Never Seen",
    problemsSubheading:
      "Double-trigger RSUs, incentive stock options, and potential QSBS eligibility create planning decisions that a standalone advisor or a CPA working alone often cannot fully coordinate, and the sequencing of those decisions can affect your tax bill for years.",
    problems: [
      {
        heading:
          "Double-trigger RSU vesting can create a tax bill before you have liquidity",
        description:
          "Databricks has granted many employees double-trigger RSUs: shares vest only once both a time-based schedule and a liquidity event, such as an IPO, have occurred. If that trigger happens, ordinary income tax may become due on shares that have already met the time-based schedule, even though a post-IPO lock-up period can prevent you from selling for months afterward. Planning for that gap between tax owed and cash available is something we work through with clients before it happens, not after.",
      },
      {
        heading:
          "ISO exercises can trigger AMT well before you sell a share",
        description:
          "If you hold incentive stock options, exercising them creates a spread between your strike price and the current fair market value, which is informed by Databricks' most recent funding round valuation. That spread can become an Alternative Minimum Tax preference item in the year you exercise, whether or not you sell. Depending on your income and grant size, this can create a meaningful cash tax obligation on shares you cannot yet sell.",
      },
      {
        heading:
          "QSBS eligibility depends on when your shares were granted, not just how long you have held them",
        description:
          "Section 1202 of the tax code may allow certain early Databricks shareholders to exclude a portion of their gain from federal capital gains tax, but eligibility depends on the company's aggregate gross assets at the time your shares were issued and a five-year holding period, among other conditions. Employees who joined when Databricks was earlier in its growth may be more likely to qualify, but this requires a document-by-document review rather than an assumption.",
      },
      {
        heading:
          "A concentrated position in a single pre-IPO company adds risk that is easy to underestimate",
        description:
          "For many Databricks employees, equity compensation can represent a large share of total compensation, sometimes in the range of 40 to 60 percent depending on level and tenure. That concentration ties a meaningful portion of your net worth to one company's outcome, including the timing and pricing of a future IPO, which is not guaranteed and could differ from current expectations. Coordinating a diversification plan around vesting, lock-up, and tax exposure is part of managing that risk.",
      },
    ],
    servicesHeading: "How Coordinated Planning Helps Databricks Employees",
    servicesSubheading:
      "Our CFP® professionals, CPAs, and Enrolled Agents work side by side, so your equity decisions, tax exposure, and long-term financial plan are coordinated, not siloed.",
    services: [
      {
        title: "Equity Compensation Planning",
        description:
          "We work through the mechanics specific to Databricks equity: double-trigger RSU vesting, ISO exercise timing with AMT modeling, and QSBS eligibility review for early grants. Each decision is evaluated alongside your full financial picture, and outcomes depend on your individual circumstances.",
        href: "/services/equity-compensation",
      },
      {
        title: "Tax Planning",
        description:
          "Our CPAs and Enrolled Agents work alongside your financial planner year-round to estimate AMT exposure from ISO exercises, model RSU vesting income against New York State and New York City tax brackets, and plan ahead of a potential IPO.",
        href: "/services/tax-planning",
      },
      {
        title: "Financial Planning",
        description:
          "We build a plan that accounts for your liquid savings, your illiquid Databricks equity, and the concentration risk that comes with it, so your broader goals are not left waiting on a future liquidity event that may not arrive on the timeline you expect.",
        href: "/services/financial-planning",
      },
      {
        title: "Investment Management",
        description:
          "When RSUs vest or a liquidity event provides cash, decisions about how to invest it are made with your remaining equity exposure and tax situation in view, not in isolation from them.",
        href: "/services/investment-management",
      },
    ],
    faqs: [
      {
        question: "How do Databricks RSUs work?",
        answer:
          "Databricks has historically used double-trigger RSU vesting: shares vest only once both a time-based schedule, typically over four years, and a liquidity event, such as an IPO or acquisition, have occurred. When that liquidity event happens, RSUs that have already met the time-based schedule are treated as vested, and their value is generally taxed as ordinary income at that time. A post-IPO lock-up period, commonly around six months, can prevent you from selling shares for a period even after the tax obligation arises. Terms vary by grant, so reviewing your specific agreement matters.",
      },
      {
        question: "What is my Databricks RSU value?",
        answer:
          "Databricks RSU value depends on the company's fair market value, which is currently informed by a recent funding round valuation near $134 billion (TechCrunch, February 2026). That figure can change with future funding rounds or an eventual IPO price, and it may differ from secondary marketplace pricing, such as Forge Global quotes, which do not always match the company's internal or last-round valuation. Actual liquidity, meaning your ability to convert vested shares to cash, depends on IPO timing and any post-IPO lock-up period, neither of which follows a guaranteed schedule.",
      },
      {
        question: "Should I exercise my Databricks ISOs before the IPO?",
        answer:
          "This depends on your specific situation. Exercising incentive stock options creates a spread between your strike price and the current fair market value, and that spread can trigger Alternative Minimum Tax in the year you exercise, even if you have not sold any shares. Employees who leave the company typically have a limited window, often 90 days, to exercise vested ISOs before they convert to non-qualified stock options, which are taxed differently. Modeling your AMT exposure before you exercise, rather than after, is something we help clients do based on their income, grant size, and available cash.",
      },
      {
        question: "Does QSBS apply to my Databricks stock?",
        answer:
          "It may, depending on your specific grant. Section 1202 of the tax code allows eligible shareholders of qualified small business stock to exclude a substantial portion of gain from federal capital gains tax, up to the greater of $10 million or ten times basis, provided the stock is held for at least five years and other requirements are met. Whether your Databricks shares qualify depends on the company's aggregate gross assets at the time your shares were issued, generally shares issued while gross assets were under $50 million are more likely to qualify, among other conditions. Employees who joined earlier are more likely to hold QSBS-eligible shares, but this requires review of your specific grant documents.",
      },
      {
        question: "How does Databricks' New York office affect my tax situation?",
        answer:
          "Databricks opened a research and development hub in New York in early 2026, and both New York State and New York City apply their own income tax on top of federal tax. New York State's top marginal rate is 10.9%, and New York City residents pay an additional resident income tax that tops out near 3.876%. Both can apply to ordinary income recognized when RSUs vest or when an ISO exercise triggers AMT, which can meaningfully change the after-tax value of a vesting event. Coordinating the timing of equity decisions with your New York tax picture is part of how we plan for clients in this situation.",
      },
      {
        question: "Are you affiliated with or endorsed by Databricks?",
        answer:
          "No. United Financial Planning Group is an independent firm with no affiliation, partnership, endorsement, or sponsorship relationship with Databricks. We serve employees of Databricks and other pre-IPO technology companies as independent financial advisors. Databricks is referenced on this page only to describe the professional background of clients we work with.",
      },
    ],
    faqHeading: "Databricks Equity Compensation: Questions We Hear Often",
    lastUpdated: "2026-09-02",
    relatedPersonaSlugs: [
      "anthropic-employees",
      "software-engineers",
      "executives",
      "startup-founders",
    ],
    serviceTypes: [
      "Equity Compensation Planning",
      "Tax Planning",
      "Financial Planning",
      "Investment Management",
    ],
    showStandardCta: true,
  },
];

export function getPersonaBySlug(slug: string): Persona | undefined {
  return personas.find((p) => p.slug === slug);
}

export function getRelatedPersonas(slug: string): Persona[] {
  const persona = getPersonaBySlug(slug);
  if (!persona) return [];
  return persona.relatedPersonaSlugs
    .map((s) => getPersonaBySlug(s))
    .filter((p): p is Persona => p !== undefined);
}
