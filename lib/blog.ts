export type AuthorSlug =
  | "gerry-barrasso"
  | "michael-barrasso"
  | "ryan-derousseau"
  | "jose-vivero"
  | "firm";

export type AuthorProfile = {
  name: string;
  /** Initials shown in the byline avatar. */
  initials: string;
  jobTitle: string;
  /** Credential string for display, e.g. "CFP®, CPA, PFS". */
  credentials?: string;
  /** Path to the team page; "/" for firm posts that have no individual page. */
  url: string;
  /** External profiles (LinkedIn, etc.) emitted as schema.org `sameAs`. */
  sameAs?: string[];
  /** Topical expertise; emitted as schema.org `knowsAbout` on the author. */
  knowsAbout?: string[];
};

export const authorProfiles: Record<AuthorSlug, AuthorProfile> = {
  "gerry-barrasso": {
    name: "Gerry Barrasso",
    initials: "GB",
    jobTitle: "President & Founder",
    credentials: "CFP®, CPA, PFS",
    url: "/team/gerry-barrasso",
    sameAs: ["https://www.linkedin.com/in/gerrybarrasso/"],
    knowsAbout: [
      "Wealth Management",
      "Financial Planning",
      "Tax Planning",
      "Tax Preparation",
      "Retirement Planning",
      "Investment Management",
    ],
  },
  "michael-barrasso": {
    name: "Michael Barrasso",
    initials: "MB",
    jobTitle: "Director of Business Development",
    url: "/team/michael-barrasso",
  },
  "ryan-derousseau": {
    name: "Ryan Derousseau",
    initials: "RD",
    jobTitle: "Financial Advisor",
    credentials: "CFP®, EA",
    url: "/team/ryan-derousseau",
    knowsAbout: [
      "Financial Planning",
      "Tax Planning",
      "Investment Management",
    ],
  },
  "jose-vivero": {
    name: "Jose Vivero",
    initials: "JV",
    jobTitle: "Financial Advisor",
    credentials: "CFP®, ChFC®, CLU®, RICP®",
    url: "/team/jose-vivero",
    knowsAbout: [
      "Financial Planning",
      "Retirement Income Planning",
      "Investment Management",
    ],
  },
  firm: {
    name: "United Financial Planning Group",
    initials: "UF",
    jobTitle: "United Financial Planning Group",
    url: "/about",
  },
};

export type BlogFAQ = {
  question: string;
  answer: string;
};

export type HowToStep = {
  /** Short imperative title for the step. */
  name: string;
  /** Full description rendered into HowTo schema. */
  text: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  updatedDate?: string;
  category: string;
  excerpt: string;
  /** Display string used as a fallback if `authorSlug` isn't supplied. */
  author: string;
  /** Preferred way to attribute a post; drives the byline and Article schema. */
  authorSlug?: AuthorSlug;
  type: "blog" | "media";
  externalUrl?: string;
  publication?: string;
  relatedServices: string[];
  relatedSlugs: string[];
  /** Optional FAQ block rendered below the article and emitted as FAQPage schema. */
  faqs?: BlogFAQ[];
  /** Optional step list emitted as HowTo schema (steps should also appear in `content`). */
  howToSteps?: {
    /** Headline for the procedure (also rendered as the HowTo `name`). */
    name: string;
    /** One-sentence description of the procedure. */
    description?: string;
    steps: HowToStep[];
  };
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "retirement-withdrawal-sequencing-strategy",
    title: "Retirement Withdrawal Sequencing: Which Accounts Should You Tap First?",
    date: "2026-05-14",
    category: "Retirement Planning",
    excerpt: "The order you withdraw from retirement accounts — taxable, tax-deferred, and tax-free — can materially affect how long your money lasts and how much of it goes to taxes. Here's a clear framework for sequencing withdrawals in retirement.",
    author: "United Financial Planning Group",
    authorSlug: "firm",
    type: "blog",
    relatedServices: ["/services/retirement-planning", "/services/tax-planning"],
    relatedSlugs: [],
    content: `<p>The order in which you draw from your retirement accounts — taxable brokerage accounts, tax-deferred accounts like traditional IRAs and 401(k)s, and tax-free accounts like Roth IRAs — can meaningfully affect how long your portfolio lasts, how much you pay in taxes over your lifetime, and whether you trigger unexpected consequences like higher Medicare premiums or a larger portion of your Social Security benefits becoming taxable.</p>

<p>This article explains the conventional withdrawal sequencing framework, the reasoning behind it, and several important situations where a different order may make more sense. Because every household's tax picture is different, the right sequence for your retirement is something to model against your specific income, bracket projections, and goals — not a rule to follow mechanically.</p>

<h2>What Is Retirement Withdrawal Sequencing?</h2>

<p>Withdrawal sequencing is the strategic order in which you draw income from different types of accounts in retirement. Most retirement households hold assets across three "buckets" that are taxed differently:</p>

<p>| Account Type | Examples | Tax Treatment at Withdrawal | |---|---|---| | <strong>Taxable</strong> | Brokerage accounts, savings | Only gains are taxed, typically at long-term capital gains rates | | <strong>Tax-deferred</strong> | Traditional IRA, 401(k), 403(b) | Withdrawals taxed as ordinary income | | <strong>Tax-free</strong> | Roth IRA, Roth 401(k) | Qualified withdrawals are tax-free |</p>

<p>The sequence in which you tap these buckets affects how much of your income is exposed to ordinary income tax rates each year — which in turn can affect your Medicare IRMAA surcharges, the taxable portion of Social Security, and whether you remain in a lower bracket across the full span of retirement.</p>

<h2>The Conventional Sequencing Framework</h2>

<p>The traditional sequencing rule of thumb draws accounts in this order:</p>

<ol>

<li><strong>Taxable accounts first</strong> — You spend down brokerage and savings accounts while allowing tax-deferred and Roth accounts to continue growing.</li>

<li><strong>Tax-deferred accounts second</strong> — Traditional IRAs, 401(k)s, and similar accounts come next.</li>

<li><strong>Roth accounts last</strong> — Roth IRAs, which have no required minimum distributions (RMDs) during the owner's lifetime, are preserved as long as possible to benefit from continued tax-free compounding.</li>

</ol>

<h3>Why this order has logic behind it</h3>

<p>Drawing taxable accounts first takes advantage of the fact that only realized gains — not the full account balance — are typically taxed, and long-term capital gains rates are generally lower than ordinary income rates for most retirees. Leaving tax-deferred money untouched longer means it continues to grow without current taxation.</p>

<p>Roth accounts are drawn last because they carry no RMDs for the original owner, produce no taxable income when distributed, and can be passed to heirs with continued tax-free treatment. Every additional year a Roth account compounds tax-free is an advantage that becomes harder to replicate later.</p>

<h2>Why the Conventional Rule Isn't Always the Right Answer</h2>

<p>The conventional framework is a reasonable starting point, but it has real limitations:</p>

<h3>Required Minimum Distributions can override your preferences</h3>

<p>Once you reach age 73 (under current law as of 2026), the IRS requires you to begin taking required minimum distributions (RMDs) from traditional IRAs, 401(k)s, and most employer retirement plans. These mandatory withdrawals are treated as ordinary income, regardless of whether you need the money for spending.</p>

<p>If you have a large balance in tax-deferred accounts, delaying withdrawals from them entirely through your sixties can result in very large RMDs in your seventies — which may push you into higher income brackets, increase the taxable portion of Social Security, and trigger Medicare IRMAA surcharges. Waiting is not always the tax-efficient choice.</p>

<h3>Roth conversions during lower-income years may reduce lifetime taxes</h3>

<p>For retirees who retire before age 73 and have a period of relatively low taxable income — after a career ends but before RMDs and full Social Security begin — deliberately taking income from tax-deferred accounts (or converting a portion to Roth) during that window may reduce the total taxes paid over the retirement period.</p>

<p>This strategy, sometimes called a "Roth conversion ladder," involves moving money from a traditional IRA to a Roth IRA during lower-bracket years and paying tax at today's rate rather than a potentially higher rate later. Whether this makes sense depends on your current bracket, projected future income, and the tax treatment of other income sources. It requires careful modeling and coordination with your tax situation — and is one reason <a href="/services/retirement-planning">retirement planning</a> and <a href="/services/tax-planning">tax planning</a> are most effective when handled together.</p>

<h3>Social Security and Medicare add complexity</h3>

<p>The amount of Social Security income that becomes taxable — up to 85% under current IRS rules — depends on your combined income, which includes adjusted gross income plus tax-exempt interest plus half of your Social Security benefit. A large withdrawal from a traditional IRA can push more of your Social Security into taxable territory.</p>

<p>Similarly, Medicare Part B and Part D premiums are subject to Income-Related Monthly Adjustment Amounts (IRMAA) that are determined based on your income from two years prior. A single large distribution — from a tax-deferred account, a Roth conversion, or the sale of a taxable asset — can temporarily increase your Medicare premiums. Sequencing and timing larger distributions with this in mind is one of the more nuanced aspects of retirement income planning.</p>

<h3>Capital gains stacking in taxable accounts</h3>

<p>Drawing heavily from taxable accounts can create its own tax complications if the accounts hold highly appreciated positions. Realizing large capital gains in a single year may push you above the 0% long-term capital gains threshold or into the range where the Net Investment Income Tax (NIIT) of 3.8% applies. Managing the pace and size of taxable account distributions — rather than simply drawing them down as fast as possible — may reduce this exposure.</p>

<h2>A Framework for Thinking About Withdrawal Order</h2>

<p>Rather than a single fixed sequence, a more useful way to think about withdrawal sequencing in retirement is to ask several questions each year:</p>

<p><strong>1. What is my taxable income this year, and what will it likely be in future years?</strong> If current-year income is lower than expected future income (for example, before RMDs begin), there may be room to take additional tax-deferred distributions or complete Roth conversions at lower rates.</p>

<p><strong>2. Am I approaching a bracket threshold, IRMAA tier, or Social Security taxability threshold?</strong> Distributions can often be calibrated to stop just below these thresholds rather than triggering a step-up to the next level. This requires looking at all sources of income together: Social Security, pensions, investment income, and planned withdrawals.</p>

<p><strong>3. What are my RMD obligations, and are they likely to grow?</strong> If tax-deferred accounts are large and growing, preemptive distributions in the years before RMDs begin can reduce the mandatory amounts later. Your tax-deferred account balance at age 72, divided by IRS life expectancy tables, determines your RMD — which means the balance matters.</p>

<p><strong>4. What is the after-tax cost of drawing from each account?</strong> A dollar from a Roth account and a dollar from a traditional IRA are not worth the same amount after taxes. Factoring the marginal tax rate into the "effective cost" of each source of income helps clarify which account to draw from in any given year.</p>

<h2>Common Mistakes in Retirement Account Sequencing</h2>

<ul>

<li><strong>Defaulting to one account type without modeling the tax impact.</strong> Drawing exclusively from taxable accounts for a decade while tax-deferred accounts compound can result in very large future RMDs.</li>

<li><strong>Ignoring the interaction between income sources.</strong> Social Security, pensions, part-time income, rental income, and investment distributions all add up to a combined income figure that determines tax treatment. Withdrawals don't happen in isolation.</li>

<li><strong>Treating Roth accounts as untouchable under all circumstances.</strong> In some years, drawing modestly from a Roth to manage a spike in ordinary income — rather than drawing more from a traditional IRA — can keep income below a meaningful threshold.</li>

<li><strong>Missing Roth conversion windows.</strong> The years between retirement and when RMDs and full Social Security begin can represent a lower-income period where Roth conversions may be particularly efficient.</li>

<li><strong>Overlooking state taxes.</strong> For New York residents, state income tax applies to IRA and 401(k) distributions alongside federal tax. New York does allow a $20,000 annual exclusion on pension and retirement income for residents age 59½ and older, but distributions above that threshold are fully taxable at the state level. This changes the after-tax comparison between account types.</li>

</ul>

<h2>How Withdrawal Sequencing Connects to the Bigger Retirement Picture</h2>

<p>Withdrawal sequencing is not a standalone decision — it intersects with:</p>

<ul>

<li><strong>Social Security timing.</strong> The age at which you claim Social Security affects your baseline income for the rest of retirement and, consequently, how much room you have to draw from tax-deferred accounts at lower rates in earlier years.</li>

<li><strong>Portfolio construction.</strong> Which assets are held in which accounts (asset location) affects both tax efficiency and what is available to draw from each bucket over time.</li>

<li><strong>Estate planning.</strong> If leaving assets to heirs is a goal, the tax treatment of inherited Roth versus traditional accounts matters. Under current law, most non-spouse beneficiaries must deplete inherited IRAs within ten years; the tax character of those distributions depends on the account type.</li>

<li><strong>Roth conversion strategy.</strong> Conversions change the balance between tax-deferred and tax-free assets, reshaping the sequencing problem for future years.</li>

</ul>

<p>Our <a href="/services/retirement-planning">retirement planning</a> approach at United Financial Planning Group coordinates these decisions together rather than treating each in isolation — because a withdrawal decision made without a tax projection, or a Roth conversion decided without looking at future RMDs, may solve one problem while creating another. Learn more about how our <a href="/services/tax-planning">tax planning</a> and retirement planning work in coordination.</p>

<h2>Frequently Asked Questions</h2>

<p><strong>What is the best order to withdraw from retirement accounts?</strong> The conventional starting point is taxable accounts first, then tax-deferred (traditional IRA, 401(k)), then tax-free (Roth IRA) last. However, the right order for any given year depends on your income sources, bracket, RMD requirements, Medicare premiums, and Social Security taxability. Many retirees benefit from a flexible, tax-calibrated approach rather than a strict sequence.</p>

<p><strong>Is it better to withdraw from a 401(k) or IRA first?</strong> Traditional 401(k)s and traditional IRAs are both tax-deferred and treated similarly at withdrawal — both produce ordinary income. The choice between them often comes down to which has lower fees, more investment flexibility, or RMD implications. Some retirees roll a 401(k) into an IRA at retirement to simplify the decision. A Roth 401(k) is treated more like a Roth IRA and generally preserved longer.</p>

<p><strong>Should I withdraw from my 401(k) or take Social Security first?</strong> These are not mutually exclusive decisions, but the interaction matters. Delaying Social Security increases your eventual benefit by approximately 8% per year between full retirement age and age 70. During that delay period, drawing from tax-deferred accounts or completing Roth conversions to cover living expenses may be beneficial — though it also produces taxable income. The trade-off requires modeling your specific benefit amounts, life expectancy assumptions, and tax situation.</p>

<p><strong>When do required minimum distributions begin?</strong> Under current law as of 2026, RMDs from traditional IRAs and most employer retirement plans begin at age 73. Roth IRAs are not subject to RMDs during the original owner's lifetime. Roth 401(k)s were historically subject to RMDs, but legislation effective from 2024 eliminated RMDs on Roth 401(k)s as well.</p>

<p><strong>What happens if I don't plan withdrawal sequencing carefully?</strong> The most common result is paying more in taxes than necessary over the course of retirement. This can happen through large RMDs pushing income into higher brackets, inadvertent Social Security benefit taxation, IRMAA Medicare surcharges triggered by a single large distribution, or a missed window for Roth conversions at lower rates. The impact compounds over time because it affects how long the portfolio lasts.</p>

<p><em>This article is for general educational purposes and does not constitute personalized investment, tax, legal, or accounting advice. Tax laws are complex, change frequently, and may not apply uniformly to your situation. Please consult a qualified tax and financial planning professional before making withdrawal or conversion decisions. United Financial Planning Group is a registered investment adviser. For important disclosures, please review our <a href="/adv-part-2a">Form ADV Part 2A</a> and <a href="/form-crs">Form CRS</a>.</em></p>`,
  },
  {
    slug: "recession-2026-new-york-investors",
    title: "Recession 2026: What New York Investors Should Actually Do",
    date: "2026-04-18",
    updatedDate: "2026-04-18",
    category: "Investment Management",
    excerpt:
      "A calm, considered look at recession risk in 2026 — what history suggests, the costliest mistakes investors make, and the questions New York households should think through before reacting.",
    author: "Gerry Barrasso, CFP\u00ae, CPA, PFS",
    authorSlug: "gerry-barrasso",
    type: "blog",
    relatedServices: [
      "/services/investment-management",
      "/services/financial-planning",
      "/services/tax-planning",
      "/services/retirement-planning",
    ],
    relatedSlugs: [
      "market-volatility-financial-plan-advisor",
      "retirement-portfolio-strategies-market-downturns",
      "investment-management-strategies-high-net-worth",
    ],
    howToSteps: {
      name: "How to think through a portfolio decision during recession headlines",
      description:
        "A five-step framework investors can use to evaluate whether a market-driven portfolio change actually reflects a change in their situation.",
      steps: [
        {
          name: "Identify what actually changed",
          text: "Write down what changed in your situation. If the answer is 'the news cycle,' that is a useful signal in itself. If something has actually changed in your income, time horizon, family situation, or goals, that is a different conversation.",
        },
        {
          name: "Confirm near-term cash needs are covered",
          text: "Confirm that the money you expect to spend in the next 12 to 36 months is funded from short-horizon assets, not from a portfolio whose value can move significantly. If short-term needs are covered, the long-term portion of the portfolio can be evaluated on its long-term merits.",
        },
        {
          name: "Re-read your written plan",
          text: "If you have a written investment policy or financial plan, review what it says about how to react to drawdowns. Most well-built plans already anticipate periods of significant volatility.",
        },
        {
          name: "Quantify the after-tax cost of any move",
          text: "Selling positions in taxable accounts can trigger capital gains, surtaxes, and (for New York residents) significant state tax. Sometimes the most sensible answer changes once the tax bill is on the page.",
        },
        {
          name: "Decide against your plan, not the headlines",
          text: "If the decision still makes sense after the prior steps, it is more likely to be a decision you will not regret. If it only makes sense in the context of today's headlines, that is a reason to pause.",
        },
      ],
    },
    faqs: [
      {
        question: "Is the U.S. officially in a recession in 2026?",
        answer:
          "A U.S. recession is formally declared by the National Bureau of Economic Research (NBER), which evaluates a range of indicators rather than relying on the popular \"two consecutive quarters of negative GDP\" shorthand. NBER declarations are typically made well after a recession has begun. Investors and policymakers often discuss recession risk in real time using leading indicators, but the official designation is retrospective.",
      },
      {
        question: "Should I sell my stocks because of recession fears?",
        answer:
          "There is no general answer that fits every investor. Whether to adjust an allocation depends on your time horizon, cash needs over the next one to three years, tax situation, and how the position fits into a broader plan. Decisions driven primarily by news cycles or short-term price moves have historically been associated with worse long-term outcomes than decisions tied to a written plan. A fiduciary financial advisor can help evaluate trade-offs against your specific circumstances.",
      },
      {
        question:
          "How have U.S. stocks historically behaved around recessions?",
        answer:
          "Historical data published by sources such as the National Bureau of Economic Research and major asset managers shows that U.S. equity markets have experienced significant drawdowns around recessions, but have also recovered over multi-year periods following each post-war recession. Past performance does not guarantee future results, and the timing and magnitude of any future recovery cannot be predicted.",
      },
      {
        question:
          "What can New York investors do that doesn\u2019t depend on predicting the market?",
        answer:
          "Most of the highest-impact decisions are unrelated to market timing: maintaining an appropriate emergency reserve, aligning the equity portion of a portfolio with the actual time horizon for each goal, harvesting tax losses where appropriate, coordinating Roth conversion strategy with current and projected tax brackets, and confirming beneficiary designations and estate documents are current. New York residents should also factor in state and local tax exposure when planning withdrawals or realizations.",
      },
      {
        question: "Does Long Island\u2019s high tax burden change the playbook?",
        answer:
          "It can affect how decisions are sequenced. Combined federal, New York State, and (for NYC residents) New York City income taxes, along with the federal cap on state and local tax deductions, mean that the after-tax impact of a portfolio decision can differ meaningfully from its pre-tax appearance. Coordinating investment decisions with tax preparation in the same engagement is one of the practical reasons families work with an integrated team.",
      },
      {
        question:
          "When should I talk to a financial advisor about recession risk?",
        answer:
          "Reasonable triggers include: planning to retire within the next one to five years, sitting on concentrated stock or significant cash that has not been allocated against a written plan, considering a major financial decision (selling a business, buying property, gifting), or noticing that headlines are driving emotionally significant changes to how you view your portfolio. A consultation does not commit you to a service relationship.",
      },
    ],
    content: `<p>Recession concerns have moved to the front of the conversation in 2026. The questions we are hearing from clients and prospective clients &mdash; <em>Will there be a recession this year? Should I sell my stocks? How will tariffs affect my portfolio?</em> &mdash; are reasonable ones. Tariff policy, growth concerns, and persistent uncertainty about inflation and interest rates have made the path forward feel less predictable than it did even a year ago.</p>

<p>I have been advising clients through markets since 1991. I have lived through the early-1990s recession, the dot-com bust, the 2008&ndash;2009 financial crisis, the 2020 pandemic shock, and the 2022 drawdown. Every cycle has its own narrative. The frameworks we have found most useful across those cycles have not been about predicting which narrative wins. They have been about controlling what is actually controllable, in the context of a written plan.</p>

<p>This piece is intended as a calm framework for thinking about recession risk in 2026, not a prediction. Whenever something here touches on a personal financial decision, the appropriate next step is a conversation with a qualified advisor about your specific situation.</p>

<h2>What &ldquo;recession&rdquo; actually means</h2>

<p>In the United States, a recession is formally dated by the <a href="https://www.nber.org/research/business-cycle-dating" target="_blank" rel="noopener noreferrer">Business Cycle Dating Committee of the National Bureau of Economic Research (NBER)</a>. The committee evaluates a broad set of indicators &mdash; including real personal income, employment, consumer spending, and industrial production &mdash; rather than relying on a single rule of thumb.</p>

<p>The popular shorthand of &ldquo;two consecutive quarters of negative GDP&rdquo; is not the official definition. It is also not how NBER decides. Official recession declarations are typically made <em>after</em> a recession has already begun, sometimes by many months. By the time a recession is named, markets have usually already reflected substantial information about it.</p>

<p>The practical implication for an investor is straightforward: by the time you are certain a recession has arrived, large portfolio reactions have historically been associated with poorer outcomes for many investors than disciplined inaction.</p>

<h2>What history suggests &mdash; and what it cannot tell us</h2>

<p>Looking at U.S. equity markets across post-war recessions, a few observations have generally held. Per the <a href="https://www.nber.org/research/business-cycle-dating" target="_blank" rel="noopener noreferrer">NBER recession chronology</a> together with publicly available S&amp;P 500 historical return data:</p>

<ul>
<li>Equity drawdowns around recessions have been substantial. Bear markets &mdash; commonly defined as a peak-to-trough decline of 20% or more in a major index &mdash; have not been rare. They are an expected feature of long-term equity investing, not a malfunction.</li>
<li>U.S. equity markets have, over multi-year horizons, recovered from each post-war recessionary drawdown. The length of those recoveries has varied widely, and the historical record does not guarantee that any future cycle will follow the same pattern.</li>
<li>According to <a href="https://am.jpmorgan.com/us/en/asset-management/adv/insights/market-insights/guide-to-the-markets/" target="_blank" rel="noopener noreferrer">JPMorgan Asset Management&rsquo;s <em>Guide to the Markets</em></a>, in the 20-year period from January 2005 through December 2024, seven of the ten best trading days for the S&amp;P 500 occurred within two weeks of the ten worst days. Missing the ten best days during that period would have substantially reduced an investor&rsquo;s overall return. Strategies that try to step out and back in have, in that historical record, struggled to consistently capture those rebounds.</li>
</ul>

<p>None of this guarantees future outcomes. Past performance is not indicative of future results, and the next cycle does not have to look like any prior cycle. What history does provide is a baseline for setting expectations: meaningful drawdowns are normal, and reacting to them on conviction has, on average, been difficult to do profitably.</p>

<h2>The decision that quietly costs the most</h2>

<p>In our experience, the largest avoidable cost in a portfolio rarely comes from picking the &ldquo;wrong&rdquo; investment. It comes from the decision to abandon a long-term plan during a short-term drawdown and then re-enter the market after prices have recovered.</p>

<p>The gap between an investment&rsquo;s reported return and the return investors actually earn &mdash; popularized by financial author <a href="https://behaviorgap.com/" target="_blank" rel="noopener noreferrer">Carl Richards as the <em>behavior gap</em></a> and quantified annually by <a href="https://www.morningstar.com/lp/mind-the-gap" target="_blank" rel="noopener noreferrer">Morningstar&rsquo;s <em>Mind the Gap</em> study</a> &mdash; is driven by well-documented cognitive biases. <em>Loss aversion</em> (originally documented by psychologists Daniel Kahneman and Amos Tversky in their work on prospect theory) describes the tendency to feel losses more acutely than equivalent gains. <em>Recency bias</em> leads us to extrapolate the recent past. <em>Herding</em> leads us to take cues from the people around us.</p>

<p>Those biases are not character flaws. They are universal. Recognizing them in yourself is part of why a written plan exists in the first place &mdash; so that decisions made under pressure are constrained by decisions made calmly.</p>

<h2>What you can actually control</h2>

<p>You cannot control whether a recession is officially declared, when tariff policy changes, or how the market reacts on any given week. The decisions that genuinely move the needle for most households are the ones that don&rsquo;t depend on any of those things being known.</p>

<table>
<thead>
<tr>
<th>Things you cannot control</th>
<th>Things you can control</th>
</tr>
</thead>
<tbody>
<tr>
<td>Whether NBER eventually dates a 2026 recession</td>
<td>Whether your near-term spending is funded from short-horizon assets</td>
</tr>
<tr>
<td>Tariff policy and legislative changes</td>
<td>Your asset allocation relative to your actual time horizon</td>
</tr>
<tr>
<td>Market direction in any single week, month, or quarter</td>
<td>Whether you harvest available tax losses where appropriate</td>
</tr>
<tr>
<td>Headlines, news cycles, and other investors&rsquo; reactions</td>
<td>Whether you re-evaluate Roth conversion strategy in lower-value windows</td>
</tr>
<tr>
<td>The exact bottom or top of any cycle</td>
<td>Whether your beneficiary designations and estate documents are current</td>
</tr>
</tbody>
</table>

<h3>1. Cash needs over the next one to three years</h3>

<p>Money you expect to spend in the next 12 to 36 months &mdash; living expenses for a near-retiree, a planned home purchase, an upcoming tuition payment &mdash; generally is not well suited to a portfolio whose value can move significantly over short periods. Confirming that short-horizon needs are funded from short-horizon assets is one of the most important pre-recession exercises an investor can do.</p>

<h3>2. Asset allocation versus actual time horizon</h3>

<p>The appropriate equity allocation for a 35-year-old funding retirement in 30 years is generally different from the appropriate equity allocation for a 65-year-old funding the next ten years. Many portfolios drift over time as some assets outperform others. A periodic rebalancing review &mdash; based on the original written plan, not on the current headlines &mdash; helps keep risk aligned with purpose.</p>

<h3>3. Tax-aware decisions</h3>

<p>Drawdowns can create planning opportunities. Tax-loss harvesting in taxable accounts, where appropriate, can be used to offset realized gains or a limited amount of ordinary income under current federal rules. Roth conversion windows may look different when account values are temporarily lower. None of this is one-size-fits-all; each requires modeling against your projected income, brackets, and goals, and should be evaluated with a qualified tax professional. For New York residents, those calculations should account for state (and where applicable, city) tax exposure, not just federal.</p>

<h3>4. Diversification</h3>

<p>A diversified portfolio is not a guarantee against losses. It is a strategy designed to reduce the impact of any single position or asset class on the overall outcome. The goal is not to eliminate volatility &mdash; it is to ensure that no single bad outcome can damage the plan beyond repair.</p>

<h3>5. Estate, beneficiary, and insurance basics</h3>

<p>Drawdowns are a useful prompt to confirm that beneficiary designations on retirement accounts are current, that wills and powers of attorney reflect current intent, and that life and disability insurance still match the family&rsquo;s actual needs. These are housekeeping items that have nothing to do with market direction and everything to do with whether a plan reflects current circumstances.</p>

<h2>What this means specifically for New York investors</h2>

<p>The financial picture for many of our Long Island and Manhattan clients has features that make the recession conversation different from the generic version you may read elsewhere.</p>

<ul>
<li><strong>High combined tax burden.</strong> New York&rsquo;s top marginal state income tax bracket sits among the highest in the country, and New York City residents pay an additional municipal income tax on top of that. A given pre-tax investment decision can have a meaningfully different after-tax outcome here than it would for a resident of a no-income-tax state.</li>
<li><strong>State and local tax deduction limits.</strong> Federal limitations on the deductibility of state and local taxes have meaningfully shaped itemized deduction strategy for many New York households since 2018, and the specifics of those limitations have been the subject of ongoing legislative attention. Coordinating charitable giving, large realizations, and Roth conversions with the current rules in mind is a meaningful planning lever &mdash; and a topic where current-year guidance from a tax professional matters.</li>
<li><strong>High property taxes.</strong> Long Island consistently ranks among the highest property tax jurisdictions in the United States. <a href="https://www.tax-rates.org/new_york/nassau_county_property_tax" target="_blank" rel="noopener noreferrer">Nassau County</a> ranks 2nd of 3,143 counties nationwide by median property tax bill, and <a href="https://www.tax-rates.org/new_york/suffolk_county_property_tax" target="_blank" rel="noopener noreferrer">Suffolk County</a> ranks 12th. For households who carry significant fixed property tax obligations, maintaining adequate liquid reserves takes on additional weight during periods of economic uncertainty.</li>
<li><strong>Equity compensation and concentrated positions.</strong> A meaningful portion of NYC professionals hold a significant share of household wealth in employer stock through ISOs, NSOs, RSUs, ESPPs, or deferred compensation. Recession concerns do not change the underlying complexity, but they often make the trade-offs (diversification versus tax cost, AMT exposure, holding-period planning) feel more urgent. Those decisions warrant model-based analysis, not headline-driven reactions.</li>
<li><strong>Multi-state filers.</strong> If you live in New Jersey or Connecticut and earn in New York, or vice versa, the state allocation of any realized gains or losses interacts with credits and reciprocity rules. This is a place where coordinating investment decisions with the actual tax return preparation matters.</li>
</ul>

<h2>A practical sequence before you act</h2>

<p>If recession headlines are pushing you toward a major portfolio change, here is a short framework worth running before making one.</p>

<ol>
<li><strong>Write down what changed in your situation.</strong> If the answer is &ldquo;the news cycle,&rdquo; that is a useful signal in itself. If something has actually changed in your income, time horizon, family situation, or goals, that is a different conversation.</li>
<li><strong>Confirm your near-term cash needs are covered without selling at depressed prices.</strong> If they are, the long-term portion of your portfolio can be evaluated on its long-term merits.</li>
<li><strong>Re-read the original plan.</strong> If you have a written investment policy or financial plan, what does it say about how to react to drawdowns? Most well-built plans already anticipate them.</li>
<li><strong>Quantify the after-tax cost of any move.</strong> Selling positions in taxable accounts can trigger capital gains, surtaxes, and (for New York residents) significant state tax. Sometimes the most sensible answer changes once the tax bill is on the page.</li>
<li><strong>Make the decision against your plan, not against the headlines.</strong> If the decision still makes sense after steps one through four, it is more likely to be a decision you will not regret.</li>
</ol>

<h2>When working with an advisor genuinely matters</h2>

<p>Most investors do not need an advisor to tell them what the market is going to do next, because no one knows. What a fiduciary, fee-only advisor typically focuses on, beyond the portfolio itself, is the structural and behavioral work that surrounds it:</p>

<ul>
<li>A written <a href="/services/financial-planning">financial plan</a> that defines what the money is actually for, by goal and by time horizon.</li>
<li>An <a href="/services/investment-management">investment policy</a> built around that plan, with explicit guidance for how to react to drawdowns before they occur.</li>
<li>Integrated <a href="/services/tax-planning">tax planning</a> and <a href="/services/tax-preparation">tax preparation</a>, so that investment decisions are evaluated against the actual after-tax outcome rather than a hypothetical pre-tax one.</li>
<li>Behavioral coaching during periods of volatility &mdash; not because clients lack discipline, but because a second set of eyes is genuinely useful when the headlines are loud.</li>
</ul>

<p>At United Financial Planning Group, our team includes <a href="/team">CFP&reg; professionals, CPAs, and Enrolled Agents</a> working in the same firm. We are <a href="/why-united">fee-only</a>, which means we do not earn commissions or sell products, and we are held to a fiduciary standard. If you would like to talk through how recession risk fits your specific situation, you can <a href="/contact">schedule a complimentary conversation</a>. There is no obligation, and the goal of that first call is simply to determine whether working together would actually serve your needs.</p>

<h2>The honest takeaway</h2>

<p>No one can tell you whether a recession will be officially dated for 2026, how deep any associated drawdown might be, or how quickly any recovery would arrive. Anyone selling certainty on those questions is selling something else.</p>

<p>What we can say with reasonable confidence is that the investors who tend to feel most prepared during periods like this are the ones who decided in advance how they would respond, sized their risk to their actual time horizon, kept short-term needs out of long-term assets, and made tax-aware decisions instead of headline-driven ones. That is a description of a process, not a prediction of returns.</p>`,
  },
];

// ---------------------------------------------------------------------------
// Helper utilities
// ---------------------------------------------------------------------------

export function getAllPosts(): BlogPost[] {
  return blogPosts.slice().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.type === "blog");
}

export function getMediaMentions(): BlogPost[] {
  return getAllPosts().filter((p) => p.type === "media");
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  const explicit = post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => Boolean(p));

  if (explicit.length >= 2) return explicit.slice(0, 2);

  const byCategory = getAllPosts().filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const combined = [
    ...explicit,
    ...byCategory.filter((p) => !explicit.find((e) => e.slug === p.slug)),
  ];
  return combined.slice(0, 2);
}

export function getAuthor(post: BlogPost): AuthorProfile & { initials: string } {
  if (post.authorSlug && authorProfiles[post.authorSlug]) {
    return authorProfiles[post.authorSlug];
  }
  return {
    name: post.author,
    initials: post.author
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase(),
    jobTitle: "",
    url: "/about",
  };
}

export function getPostLastModified(post: BlogPost): string {
  return post.updatedDate ?? post.date;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function injectHeadingIds(html: string): string {
  return html.replace(
    /<(h[2-6])([^>]*)>([\s\S]*?)<\/\1>/gi,
    (_match, tag, attrs, inner) => {
      if (/\bid\s*=/.test(attrs)) return _match;
      const text = inner.replace(/<[^>]+>/g, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
    },
  );
}

export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function extractToc(html: string): TocItem[] {
  const items: TocItem[] = [];
  const re = /<h([2-4])[^>]*\sid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    const text = match[3].replace(/<[^>]+>/g, "").trim();
    items.push({ level: parseInt(match[1], 10), id: match[2], text });
  }
  return items;
}

export function readingTimeMinutes(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 238));
}

export function readingTimeIso(wordCount: number): string {
  return `PT${readingTimeMinutes(wordCount)}M`;
}