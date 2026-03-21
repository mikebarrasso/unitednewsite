export type Persona = {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  eyebrow: string;
  icon: "Clock" | "Building2" | "Rocket" | "Code2" | "BarChart3" | "Gem";
  imageUrl: string;
  imageAlt: string;
  problemsHeading: string;
  problemsSubheading: string;
  problems: { heading: string; description: string }[];
  servicesHeading: string;
  servicesSubheading: string;
  services: { title: string; description: string; href: string }[];
  faqs: { question: string; answer: string }[];
  faqHeading: string;
  lastUpdated: string;
  relatedPersonaSlugs: string[];
  serviceTypes: string[];
};

export const personas: Persona[] = [
  // ─── RETIREES ───
  {
    slug: "retirees",
    name: "Retirees & Pre-Retirees",
    seoTitle: "Financial Advisor for Retirees",
    metaDescription:
      "Fee-only financial planning for retirees. CFP®, CPA, and tax professionals coordinating your retirement income, RMDs, and estate plan under one roof.",
    h1: "Retirement Planning Where Your Advisor and Your CPA Are the Same Team",
    heroSubtitle:
      "At United Financial Planning Group, CFP® professionals, CPAs, and Enrolled Agents work together on your retirement — so your investment strategy, tax plan, and estate considerations are built as one cohesive whole, not handed off between offices.",
    eyebrow: "For Retirees & Those Approaching Retirement",
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
        heading: "Social Security timing is more complicated than it looks",
        description:
          "Claiming at 62 versus 70 can mean significantly different lifetime income — but the right answer depends on your health, your spouse's situation, your other income sources, and how Social Security interacts with your tax bracket. It's not a decision that should be made in isolation.",
      },
      {
        heading: "RMDs and Roth conversions need to be coordinated",
        description:
          "Required minimum distributions can push you into a higher tax bracket, trigger Medicare surcharges, or affect how much of your Social Security is taxable. Proactive Roth conversion planning before RMDs begin can reduce that exposure — but only if your financial plan and tax plan are built together.",
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
          "We build a retirement income plan that coordinates Social Security timing, Roth conversion opportunities, required minimum distributions, and estate considerations — pulling every lever together rather than one at a time.",
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
        question: "When should I start working with a retirement planner?",
        answer:
          "Ideally, five to ten years before you plan to retire. That window is when the highest-impact decisions get made — Roth conversion planning, Social Security strategy, and portfolio positioning ahead of decumulation. If you're already retired, it's not too late; coordinated planning still matters significantly for tax efficiency and longevity of assets.",
      },
      {
        question: "How do you approach Social Security timing?",
        answer:
          "We analyze your Social Security claiming options in the context of your full financial picture — your other income sources, your tax bracket, your spouse's benefit, and your health and longevity assumptions. The goal is a decision you understand and can commit to, not a generic rule of thumb.",
      },
      {
        question: "Do you handle both tax planning and tax preparation?",
        answer:
          "Yes — both services are handled by the same team. Your tax preparer knows your financial plan, and your financial planner knows your return. That continuity eliminates the coordination gap that causes costly surprises for many retirees.",
      },
    ],
    faqHeading: "Common Questions About Retirement Planning",
    lastUpdated: "March 2026",
    relatedPersonaSlugs: ["business-owners", "high-net-worth"],
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
    relatedPersonaSlugs: ["retirees", "startup-founders"],
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
    seoTitle: "Financial Advisor for Startup Founders",
    metaDescription:
      "Fee-only financial planning for startup founders. We handle equity, taxes, and wealth strategy — from 83(b) elections to post-exit diversification.",
    h1: "Your Equity Is Complex. Your Financial Plan Should Account for All of It.",
    heroSubtitle:
      "From 83(b) elections and QSBS planning to liquidity events and what comes after, we help founders translate cap-table complexity into a personal financial plan built around how you actually earn wealth.",
    eyebrow: "For Founders",
    icon: "Rocket",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Startup founder working through strategy with their team",
    problemsHeading:
      "Your Cap Table Doesn't Fit a Standard Financial Plan",
    problemsSubheading:
      "Founder wealth is built differently — through equity stakes, irregular draws, and events that can shift your net worth dramatically in a single day. Most financial planning frameworks weren't designed with any of that in mind.",
    problems: [
      {
        heading: "Missing the 83(b) window costs you later",
        description:
          "You have 30 days from the date of your equity grant to file an 83(b) election. Miss it and you may owe ordinary income tax on stock that hasn't generated a dollar of real liquidity yet. Most general financial planners don't catch this in time — or at all.",
      },
      {
        heading: "QSBS exclusions require proactive, coordinated planning",
        description:
          "Qualified Small Business Stock can shield a significant portion of your gain from federal capital gains tax — but only if the right conditions are met and maintained. The rules are technical, the recordkeeping is ongoing, and the tax savings are forfeited if the planning isn't done correctly from the start.",
      },
      {
        heading: "A liquidity event is not a financial plan",
        description:
          "A secondary sale or company exit can put more money in your account than you've ever seen at once. Without a plan for diversification, tax management, and long-term structure, the window for optimal decision-making closes fast.",
      },
      {
        heading: "Your income doesn't fit a standard financial model",
        description:
          "Founder compensation often looks nothing like a W-2 salary — it's irregular draws, equity-heavy, and tied to milestones you can't always predict. Advisors who work primarily with salaried employees will build a plan that doesn't fit your reality.",
      },
    ],
    servicesHeading:
      "From Cap Table to Personal Wealth — Fully Coordinated",
    servicesSubheading:
      "Our CFP® professionals, CPAs, and Enrolled Agents work as a single team, so your equity planning, tax strategy, and personal financial plan are built together from the start — not patched together at year-end.",
    services: [
      {
        title: "Equity Compensation Planning",
        description:
          "We work through the details that matter to founders: 83(b) elections, ISO vs. NSO treatment, QSBS eligibility, early exercise strategy, and how your equity fits into the broader picture of your personal wealth.",
        href: "/services/equity-compensation",
      },
      {
        title: "Tax Planning",
        description:
          "Our CFPs, CPAs, and Enrolled Agents work together — not in separate offices — so the tax strategy behind your equity decisions is built into your financial plan from the beginning, not bolted on at the end of the year.",
        href: "/services/tax-planning",
      },
      {
        title: "Financial Planning",
        description:
          "We help you turn a cap table into a personal balance sheet: mapping out your net worth across liquid and illiquid assets, building a plan around volatile income, and giving you a clear picture of where you stand.",
        href: "/services/financial-planning",
      },
      {
        title: "Investment Management",
        description:
          "Post-liquidity, concentrated positions and diversification decisions require careful coordination with your tax situation. We manage investments with your full financial picture in view, not in isolation from it.",
        href: "/services/investment-management",
      },
    ],
    faqs: [
      {
        question: "Do you work with founders before a liquidity event?",
        answer:
          "Yes — and that's often when the planning matters most. Decisions made around early equity grants, QSBS eligibility, and 83(b) elections have long-term consequences that are difficult or impossible to reverse later. We work with founders at every stage, not just after an exit.",
      },
      {
        question: "What does fee-only mean, and why does it matter?",
        answer:
          "Fee-only means we are paid directly by you — not through commissions, product sales, or referral fees. We act as fiduciaries, which means we are legally required to act in your interest. This structure removes the financial incentives that can skew advice at commission-based firms.",
      },
      {
        question:
          "How does having financial planners and CPAs on the same team help founders?",
        answer:
          "Founder wealth is built through equity, which means tax decisions and financial planning decisions are inseparable. When your CFP® and your CPA are on the same team — reviewing the same information, communicating in real time — the advice you receive is coordinated rather than siloed. That matters especially around 83(b) filings, AMT exposure from ISO exercises, and QSBS structuring.",
      },
      {
        question: "Can you help me understand my QSBS eligibility?",
        answer:
          "Yes. We evaluate whether your shares qualify under Section 1202, assess whether the five-year holding period and other requirements are being maintained, and build that potential exclusion into your broader tax and financial plan. QSBS planning requires ongoing attention, not a one-time check.",
      },
      {
        question: "What happens to my financial plan after an exit?",
        answer:
          "A liquidity event typically triggers decisions around tax liability, asset diversification, estate planning considerations, and long-term investment structure — all at once, often under time pressure. We help you work through those decisions in a deliberate, coordinated way, so the plan you build after an exit reflects what you actually want your wealth to do.",
      },
    ],
    faqHeading: "Common Questions From Founders",
    lastUpdated: "March 2026",
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
