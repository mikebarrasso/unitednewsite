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

<p>What we can say with reasonable confidence is that the investors who tend to feel most prepared during periods like this are the ones who decided in advance how they would respond, sized their risk to their actual time horizon, kept short-term needs out of long-term assets, and made tax-aware decisions instead of headline-driven ones. That is a description of a process, not a prediction of returns.</p>

<hr />

<h2 id="disclosures">Important Disclosures</h2>

<p><em>United Financial Planning Group is a registered investment advisor with the U.S. Securities and Exchange Commission (SEC). Registration with the SEC does not imply a certain level of skill or training.</em></p>

<p><em>This article is for general informational and educational purposes only. It is not, and should not be construed as, personalized investment, tax, legal, or accounting advice or a recommendation to buy, sell, or hold any specific security or to adopt any specific investment strategy. Investment decisions should be made based on an individual&rsquo;s own goals, time horizon, and tolerance for risk, and only after consulting appropriately qualified professionals.</em></p>

<p><em>All investing involves risk, including the possible loss of principal. Past performance is not indicative of future results. Diversification and asset allocation strategies do not guarantee a profit or protect against a loss. Statements regarding markets, the economy, or future events reflect our views as of the date of publication; those views may change without notice, and we are under no obligation to update them.</em></p>

<p><em>Tax laws are complex and change frequently. Any references to tax topics are general in nature and may not apply to your specific situation. Please consult your tax professional regarding your particular circumstances. CERTIFIED FINANCIAL PLANNER&reg; and CFP&reg; are professional certification marks granted by Certified Financial Planner Board of Standards, Inc.</em></p>

<p><em>United Financial Planning Group earns advisory fees from clients who engage the firm. Information in this article should be considered with that interest in mind. Please review our <a href="/adv-part-2a">Form ADV Part 2A</a> and <a href="/form-crs">Form CRS</a> for important disclosures about our advisory business, fees, and conflicts of interest.</em></p>`,
  },
  {
    slug: "gerry-barrasso-generational-wealth-gobankingrates",
    title:
      "Gerry Barrasso Featured in GOBankingRates Article on Generational Wealth Strategies",
    date: "2025-04-10",
    updatedDate: "2026-03-03",
    category: "In The Media",
    excerpt:
      "Gerry Barrasso, CPA, CFP\u00ae, was featured in GOBankingRates discussing strategies high-net-worth families use to build generational wealth, including the importance of fee-only advisory services.",
    author: "United Financial Planning Group",
    type: "media",
    externalUrl:
      "https://www.gobankingrates.com/money/wealth/strategies-high-net-worth-families-use-to-build-generational-wealth/",
    publication: "GOBankingRates",
    relatedServices: [
      "/services/financial-planning",
      "/services/investment-management",
    ],
    relatedSlugs: [
      "gerry-barrasso-quoted-in-fortune",
      "investment-management-strategies-high-net-worth",
    ],
    content: `<p>We are proud to announce that <a href="/team/gerry-barrasso">Gerry Barrasso, CPA, CFP\u00ae</a>, founder and president of United Financial Planning Group, has been prominently featured in <a href="https://www.gobankingrates.com/money/wealth/strategies-high-net-worth-families-use-to-build-generational-wealth/" target="_blank" rel="noopener noreferrer">GOBankingRates' recent article</a>, "5 Strategies High-Net-Worth Families Use to Build Generational Wealth."</p>

<p>In this insightful piece, Gerry emphasizes the critical importance of obtaining unbiased financial advice, especially when it comes to life insurance decisions. He advises:</p>

<blockquote>"Ask your fiduciary advisor if you need life insurance. If you do, have them recommend an insurance agent and make sure they aren't collecting commissions off the back end. An easy way to do this is to work with a fee-only advisor."</blockquote>

<p>This recommendation underscores Gerry's commitment to transparent, client-centered <a href="/services/financial-planning">financial planning</a>. By advocating for fee-only advisory services, he highlights the importance of avoiding the conflicts of interest that arise when advisors earn commissions\u2014ensuring clients receive advice that is truly in their best interest.</p>

<p>The GOBankingRates article explores several key strategies used by high-net-worth families to build and preserve generational wealth:</p>

<ol>
<li><strong>Utilizing Advanced Wealth Transfer Strategies:</strong> Implementing tools such as trusts and strategic gifting to minimize estate taxes and protect assets for future generations.</li>
<li><strong>Building a Collaborative Financial Team:</strong> Assembling a team of professionals\u2014including financial planners, tax strategists, estate attorneys, and investment specialists\u2014to ensure comprehensive and cohesive wealth management.</li>
<li><strong>Disciplined Investing:</strong> Adopting long-term, purpose-driven investment strategies focused on income generation and <a href="/services/tax-planning">tax efficiency</a>.</li>
<li><strong>Educating Future Generations:</strong> Prioritizing financial literacy to empower heirs with the knowledge to manage and grow their inheritance responsibly.</li>
</ol>

<p>Gerry's inclusion in this article reflects his dedication to providing clients with strategies that not only support wealth accumulation but also prioritize its preservation and efficient transfer to future generations.</p>

<p>At United Financial Planning Group, we are committed to offering personalized, transparent, and comprehensive <a href="/services/financial-planning">financial planning services</a>. Our approach aligns with the principles highlighted in the GOBankingRates article, ensuring our clients are well-equipped to build and maintain generational wealth.</p>

<p>We invite you to <a href="https://www.gobankingrates.com/money/wealth/strategies-high-net-worth-families-use-to-build-generational-wealth/" target="_blank" rel="noopener noreferrer">read the full article here</a> to gain further insights into these strategies and to learn more about how our expertise can support your financial goals.</p>`,
  },
  {
    slug: "market-volatility-financial-plan-advisor",
    title:
      "Market Volatility Got You Worried? Why Having a Plan (and an Advisor) Is Key",
    date: "2025-04-09",
    updatedDate: "2026-03-03",
    category: "Investment Management",
    excerpt:
      "Recent market turbulence, driven by tariff announcements and economic uncertainty, underscores why having a sound financial plan and a trusted advisor is crucial for long-term investment success.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/investment-management",
      "/services/financial-planning",
      "/services/retirement-planning",
    ],
    relatedSlugs: [
      "recession-2026-new-york-investors",
      "retirement-portfolio-strategies-market-downturns",
      "secure-retirement-investment-management",
    ],
    content: `<p>Recent weeks have seen significant turbulence in the financial markets, with major stock indices experiencing sharp declines. Events like the Dow Jones Industrial Average's third-largest one-day point drop can understandably cause concern for anyone watching their investments. However, it's important to remember that market ups and downs, while unsettling, are a normal part of the investment journey, especially over the long term.</p>

<h2>What's Been Driving the Markets?</h2>

<p>The market volatility in early April 2025 has been fueled by new developments in international trade policy, specifically the announcement and implementation of new, broad-based U.S. tariffs.</p>

<p><strong>Economic Data:</strong> Inflation data (CPI & PPI) showed some easing prior to the tariffs but remained above the Fed's target. Concerns arose that tariffs could push prices higher. The March jobs report showed solid gains but also included downward revisions for prior months.</p>

<p><strong>Tariff Impact:</strong> The tariffs, perceived as more aggressive than anticipated, led to a significant market sell-off. The Dow plunged over 2,200 points on April 4th, its third-largest point drop ever, and major indices saw their worst two-day performance since March 2020.</p>

<p><strong>Global Response:</strong> Key trading partners like China and the EU quickly announced retaliatory tariffs, escalating fears of a global trade war that could disrupt supply chains and slow economic growth.</p>

<p><strong>Fed's Position:</strong> The Federal Reserve held interest rates steady at 4.25%-4.50% in its March meeting, lowering its 2025 GDP growth forecast and raising its core inflation projection.</p>

<h2>Keeping Perspective in Turbulent Times</h2>

<p><strong>The Futility of Market Timing:</strong> Trying to sell before drops and buy before rebounds consistently is nearly impossible. Some of the market's best recovery days happen very close to the worst days. Missing just a handful of these key upswings can devastate long-term returns.</p>

<p><strong>Volatility is Normal:</strong> Market fluctuations, including sharp downturns, are not unusual. Markets have weathered numerous crises throughout history and demonstrated long-term resilience.</p>

<p><strong>Mind Over Market:</strong> Our emotions can lead to costly mistakes. Biases like loss aversion, herding, and recency bias can prompt panic selling during downturns, leading to a "Behavior Gap" where investors underperform the market due to emotional decisions.</p>

<h2>The High Cost of Missing the Best Days</h2>

<p>Bad timing can take a significant bite out of returns. Based on JP Morgan data (S&P 500 Index total returns from January 2003 to December 2022), missing out on just the 10 best trading days during that nearly 20-year period could have cost an investor the majority of their overall potential return. Seven of the ten best days occurred during bear markets.</p>

<h2>A Financial Plan: Your Anchor in the Storm</h2>

<ul>
<li><strong>The Discipline to Stay Invested:</strong> Strategies like Dollar-Cost Averaging (DCA)\u2014investing a fixed amount regularly\u2014reinforce discipline and turn downturns into opportunities to buy more shares at lower prices.</li>
<li><strong>Time Horizon Matters:</strong> Long-term goals generally allow for more stock exposure, as there's time to recover from dips. A <a href="/services/financial-planning">financial plan</a> aligns investments with specific time horizons.</li>
<li><strong>Diversification's Role:</strong> Spreading investments across different asset classes and sectors is crucial. It helps cushion the impact when specific areas are hit hard.</li>
<li><strong>Built for Bumps:</strong> A robust financial plan anticipates periods of volatility and potential downturns.</li>
</ul>

<h2>The Value of Working with an Advisor</h2>

<ul>
<li><strong>Fiduciary Standard:</strong> Advisors operating under a fiduciary standard are legally obligated to act in your best interest, with a duty to disclose and manage conflicts of interest.</li>
<li><strong>Expertise and Planning:</strong> Advisors bring expertise in <a href="/services/financial-planning">financial planning</a>, <a href="/services/investment-management">investment management</a>, and <a href="/services/tax-planning">tax strategies</a>.</li>
<li><strong>Behavioral Coaching:</strong> Advisors help investors stay disciplined and focused on the long term, bridging the "Behavior Gap."</li>
<li><strong>Objective Guidance:</strong> An advisor provides objective advice aligned with your goals, risk tolerance, and time horizon.</li>
</ul>

<h2>The Power of a Low-Cost, Diversified Portfolio</h2>

<p>A well-diversified, low-cost portfolio is foundational for navigating volatile markets. Historical data from Vanguard shows that a 60/40 portfolio reduced the 2008 drawdown by nearly half compared to an all-stock portfolio, while still achieving solid long-term returns.</p>

<p>According to Morningstar's 2022 research, low-cost funds outperformed high-cost funds in every asset class over a 10-year period, with fees being one of the strongest predictors of future performance.</p>

<h2>Ready to Build Your Plan?</h2>

<p>Building a plan that includes a <a href="/services/investment-management">low-cost, globally diversified portfolio</a> can reduce volatility, improve long-term outcomes, and give you the confidence to stay on track. Consider working with a fee-only fiduciary advisor who can help you build a plan, align your investments with your time horizon and risk tolerance, and avoid the pitfalls of emotional decision-making.</p>

<p><a href="/contact">Contact us</a> today to get started.</p>`,
  },
  {
    slug: "high-yield-savings-accounts-wsj-ryan-derousseau",
    title:
      "Ryan Derousseau CFP\u00ae, EA, Quoted in The Wall Street Journal: A Deep Dive into High-Yield Savings Accounts",
    date: "2025-03-28",
    updatedDate: "2026-03-02",
    category: "In The Media",
    excerpt:
      "Ryan Derousseau was quoted in The Wall Street Journal, offering critical insights on what savers should know before opening high-yield savings accounts, including hidden requirements that can affect actual returns.",
    author: "United Financial Planning Group",
    type: "media",
    externalUrl:
      "https://www.wsj.com/buyside/personal-finance/banking/what-is-a-high-yield-savings-account",
    publication: "The Wall Street Journal",
    relatedServices: [
      "/services/financial-planning",
      "/services/investment-management",
    ],
    relatedSlugs: [
      "ryan-derousseau-napfa-advisor-magazine",
      "secure-retirement-investment-management",
    ],
    content: `<p><a href="/team/ryan-derousseau">Ryan Derousseau, CFP\u00ae, EA</a>, of United Financial Planning Group was prominently featured in a comprehensive <a href="https://www.wsj.com/buyside/personal-finance/banking/what-is-a-high-yield-savings-account" target="_blank" rel="noopener noreferrer">Wall Street Journal analysis</a> of high-yield savings accounts, offering critical insights that every saver should consider.</p>

<h2>The Market Context: Why HYSAs Are Having a Moment</h2>

<p>The rising popularity of high-yield savings accounts can be traced to consumer financial awareness, increased competition among banks and fintech companies, digital banking innovations, and inflation concerns motivating savers to seek returns that offset declining purchasing power.</p>

<h2>Derousseau's Warning: The Devil in the Details</h2>

<blockquote>"You're going to want to understand what's required to get the rate that you're seeing on-screen."</blockquote>

<p>This straightforward recommendation encompasses a range of potential conditions that can significantly impact actual returns, including:</p>

<ul>
<li><strong>Minimum Balance Requirements:</strong> Falling below minimums might trigger fees that effectively reduce yields.</li>
<li><strong>Activity Requirements:</strong> Minimum deposits, regular transfers, or debit card transactions may be mandatory.</li>
<li><strong>Withdrawal Limitations:</strong> Penalties for frequent access or reduced rates when exceeding withdrawal limits.</li>
<li><strong>Digital Banking Requirements:</strong> Electronic communication consent, online banking registration, and mobile app usage.</li>
<li><strong>Account Bundling:</strong> Higher rates may depend on maintaining multiple account relationships.</li>
</ul>

<h2>The Real Math: Calculating Effective Returns</h2>

<p>The analysis emphasizes calculating the true, effective return, which extends beyond the stated APY. Fee structures\u2014including wire transfer costs, early closure penalties, inactivity fees, and monthly maintenance fees\u2014can each reduce net returns. A 4.5% APY account with fees may provide lower effective yield than a 4.0% account with no fees.</p>

<h2>Promotional Rates: The Bait and Switch Concern</h2>

<p>Introductory rates introduce additional complexity. Requirements to maintain promotional rates might differ from standard terms, promotion periods vary widely, and initial rates may be substantially higher than ongoing rates.</p>

<h2>Beyond Individual Accounts: The Portfolio Perspective</h2>

<p>Ryan and the United Financial Planning Group team emphasize integrating cash management into a <a href="/services/financial-planning">broader financial strategy</a>, including:</p>

<ul>
<li><a href="/services/investment-management">Diversified investment portfolios</a> for long-term growth</li>
<li>Tax-advantaged account strategies</li>
<li>Laddered time deposits or short-duration investments</li>
<li>Goal-based savings and emergency reserves</li>
</ul>

<p>Read the <a href="https://www.wsj.com/buyside/personal-finance/banking/what-is-a-high-yield-savings-account" target="_blank" rel="noopener noreferrer">full Wall Street Journal article here</a>.</p>`,
  },
  {
    slug: "retirement-portfolio-strategies-market-downturns",
    title:
      "Is Your Portfolio Built to Withstand a Recession? A Retiree's Comprehensive Guide to Risk Management",
    date: "2025-03-18",
    updatedDate: "2026-03-02",
    category: "Retirement Planning",
    excerpt:
      "A comprehensive guide for retirees on building recession-resistant portfolios, covering sequence of returns risk, withdrawal strategies, tax efficiency, and behavioral coaching.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/retirement-planning",
      "/services/investment-management",
      "/services/tax-planning",
    ],
    relatedSlugs: [
      "recession-2026-new-york-investors",
      "secure-retirement-investment-management",
      "market-volatility-financial-plan-advisor",
    ],
    content: `<h2>Understanding the Unique Risks Retirees Face During a Recession</h2>

<p>The foremost concern retirees face during a recession is "sequence of returns risk." This occurs when investors start withdrawing from retirement savings during a market downturn, accelerating depletion of savings and jeopardizing retirement security.</p>

<p>If retirement begins just as markets tumble, selling investments to cover living expenses forces retirees to lock in losses, permanently harming their portfolio's long-term potential.</p>

<h2>Evaluating Your Portfolio's Current Risk Exposure</h2>

<p>Understanding your asset allocation\u2014the proportion of stocks, bonds, cash, real estate, and alternatives\u2014is essential. Ask yourself:</p>

<ul>
<li>Do you have the discipline to stick with your allocation during a selloff?</li>
<li>How much of your portfolio is vulnerable to interest rate changes?</li>
<li>Is your income strategy dependent on market conditions?</li>
<li>Do you have enough liquid assets to avoid selling stocks during a downturn?</li>
<li>Could your portfolio withstand a 20-30% market decline?</li>
</ul>

<h2>Designing a Recession-Resistant Asset Allocation</h2>

<p><strong>Equities:</strong> Focus on high-quality, low-cost ETFs providing broad market exposure. ETFs tracking defensive sectors like healthcare, utilities, and consumer staples offer more stability during economic contractions.</p>

<p><strong>Fixed Income:</strong> High-quality government, municipal, and investment-grade corporate bonds that preserve capital and provide steady income.</p>

<p><strong>Cash and Equivalents:</strong> Sufficient liquidity to cover 2-3 years of expenses without forcing sales at unfavorable prices.</p>

<h2>Withdrawal Strategies to Mitigate Sequence of Returns Risk</h2>

<ul>
<li><strong>Flexible Withdrawal Strategies:</strong> Reducing amounts during downturns and supplementing with cash reserves.</li>
<li><strong>Bucket Approach:</strong> Segmenting your portfolio into short-term (cash), intermediate-term (bonds), and long-term (stocks) buckets.</li>
<li><strong>Dynamic Adjustments:</strong> Revising withdrawal percentages annually based on current market conditions.</li>
</ul>

<h2>Tax Efficiency Through Rebalancing</h2>

<p>Market downturns offer unique <a href="/services/tax-planning">tax-loss harvesting</a> opportunities. Harvesting losses during downturns can offset future gains, reduce your tax burden, and enhance after-tax returns.</p>

<h2>Behavioral Coaching: The Most Valuable Component</h2>

<p>According to Vanguard's research, behavioral coaching adds approximately 1.5% in net returns annually, making it the single most valuable service a financial advisor provides. Nearly 60% of investors who sold during 2008-2009 were still sitting in cash three years later, missing a 50%+ market recovery.</p>

<h2>Example Case Studies</h2>

<p><strong>Robert</strong> retired in 2007 with $1 million allocated 70% to stocks. When markets crashed, he panicked and sold. Ten years later, his portfolio was worth just $320,000.</p>

<p><strong>Eleanor</strong> also retired in 2007 with $1 million but had a recession-resistant strategy: 50% stocks, 40% bonds, two years of expenses in cash. She suspended stock sales, maintained her allocation, and even rebalanced into stocks at lower prices. By 2018, her portfolio had grown to $1.2 million.</p>

<h2>The United Financial Planning Group Advantage</h2>

<p>At United Financial Planning Group, we specialize in constructing portfolios tailored to retirees' unique needs. Our <a href="/services/retirement-planning">fee-only fiduciary approach</a> ensures transparent advice aligned solely with your interests, including ongoing monitoring, <a href="/services/tax-planning">tax-efficient withdrawal strategies</a>, strategic income planning, and the behavioral coaching that Vanguard research has identified as the most valuable component of professional financial advice.</p>

<p><a href="/contact">Schedule your complimentary consultation today</a>.</p>`,
  },
  {
    slug: "gerry-barrasso-quoted-in-fortune",
    title: "Gerry Barrasso CPA, CFP\u00ae, PFS Quoted in Fortune",
    date: "2025-02-27",
    updatedDate: "2026-03-02",
    category: "In The Media",
    excerpt:
      "Gerry Barrasso was quoted in Fortune discussing the importance of liquidity in emergency funds amid the rising trend of 'doomspending' and the savings shortfall facing Gen Z.",
    author: "United Financial Planning Group",
    type: "media",
    externalUrl:
      "https://fortune.com/article/half-of-gen-z-does-not-have-savings/",
    publication: "Fortune",
    relatedServices: ["/services/financial-planning"],
    relatedSlugs: [
      "gerry-barrasso-generational-wealth-gobankingrates",
      "investing-for-major-financial-goals",
    ],
    content: `<p>In a recent <a href="https://fortune.com/article/half-of-gen-z-does-not-have-savings/" target="_blank" rel="noopener noreferrer">Fortune article</a> exploring the rise of "doomspending"\u2014a trend where consumers spend impulsively under the weight of political and economic uncertainty\u2014experts weighed in on the challenges of building an emergency fund. Among them was <a href="/team/gerry-barrasso">Gerry Barrasso, CPA, CFP\u00ae</a>, president of United Financial Planning Group.</p>

<h2>Doomspending and the Savings Shortfall</h2>

<p>The Fortune piece highlights a concerning finding: nearly half of Gen Z respondents (47%) reported having no emergency fund at all. Experts attribute this to economic setbacks, political turmoil, and an overwhelming deluge of social media messaging that leaves many feeling powerless or unmotivated to save.</p>

<h2>Gerry Barrasso's Key Takeaway: Liquidity Matters</h2>

<blockquote>"Emergency funds need to be liquid, or there really is no point. You need to be able to access the money immediately."</blockquote>

<p>Barrasso cautions that while certificates of deposit (CDs) and other interest-bearing accounts may currently offer attractive yields, tying your emergency money up in less-accessible vehicles can defeat the purpose of having funds on hand for emergencies. If you can't access your cash quickly without penalties or delays, it won't do you much good when a real crisis hits.</p>

<h2>Conclusion</h2>

<p>Gerry Barrasso's quote in Fortune serves as a timely reminder for savers in every generation: an emergency fund is only as useful as it is accessible. With economic headwinds and political uncertainty likely to linger, prioritizing a liquid, well-funded emergency account can offer peace of mind and financial stability.</p>

<p>At <a href="/about">United Financial Planning Group</a>, we understand that every individual's circumstances are unique, and we tailor our <a href="/services/financial-planning">financial planning advice</a> to fit your specific goals and challenges. Whether you're just starting your emergency fund or seeking ways to optimize an existing one, our team is here to guide you.</p>

<p>Read the <a href="https://fortune.com/article/half-of-gen-z-does-not-have-savings/" target="_blank" rel="noopener noreferrer">full Fortune article here</a>.</p>`,
  },
  {
    slug: "secure-retirement-investment-management",
    title:
      "Five Key Strategies for a More Secure Retirement: Expert Tips in Wealth and Investment Management",
    date: "2024-12-09",
    updatedDate: "2026-03-02",
    category: "Retirement Planning",
    excerpt:
      "Five essential strategies retirees and near-retirees can implement to strengthen their financial footing, from comprehensive wealth assessments to tax-efficient distribution planning.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/retirement-planning",
      "/services/investment-management",
      "/services/tax-planning",
    ],
    relatedSlugs: [
      "retirement-portfolio-strategies-market-downturns",
      "passive-income-hnw-investment-management",
    ],
    content: `<p>Retirement represents an exciting new chapter\u2014one where you can focus on enjoying the life you've built. Yet, transitioning from a steady paycheck to living off your savings and investments often raises questions about how to ensure financial security for the long run.</p>

<h2>1. Begin with a Comprehensive Wealth Assessment</h2>

<p>Before making any decisions, take a holistic look at your overall financial picture. This includes more than just your investment accounts: consider your income sources, liabilities, insurance coverage, and estate plans. A thorough assessment can reveal gaps, highlight opportunities, and serve as a baseline for building a robust <a href="/services/retirement-planning">retirement strategy</a>.</p>

<p>A skilled <a href="/team/gerry-barrasso">wealth manager</a> can guide you through the complexities of balancing IRAs, 401(k)s, brokerage accounts, and business interests.</p>

<h2>2. Refine Your Investment Management Approach</h2>

<p>As you approach or enter retirement, your investment priorities may shift from aggressive growth to preserving capital and generating reliable income. This often requires adjusting your portfolio's asset allocation\u2014reducing equity exposure to mitigate volatility while incorporating more bonds, dividend-paying stocks, or alternative investments.</p>

<p><a href="/services/investment-management">Investment management</a> in retirement involves balancing growth-oriented assets to combat inflation with stable, income-generating investments to support your lifestyle.</p>

<h2>3. Optimize Your Income Sources and Distribution Strategies</h2>

<p>A secure retirement strategy involves coordinating multiple income sources: Social Security, pensions, annuities, dividends, interest, and systematic withdrawals. A knowledgeable advisor can suggest tax-efficient withdrawal plans, consider Roth conversions for long-term benefits, or help you delay Social Security benefits to increase guaranteed income later in life.</p>

<h2>4. Incorporate Tax-Efficient Wealth Management Practices</h2>

<p><a href="/services/tax-planning">Tax planning</a> doesn't end when you retire\u2014it becomes more critical. Strategically managing taxes means choosing which accounts to draw from first, timing Roth conversions, or harvesting losses in taxable accounts to offset gains. Minimizing unnecessary tax expenses leaves more of your money working for you.</p>

<h2>5. Review and Adjust Regularly</h2>

<p>Retirement isn't a "set it and forget it" scenario. Markets change, your personal goals evolve, and external factors\u2014like healthcare costs, legislation, or family needs\u2014can shift over time. At least once a year, meet with your advisor to reassess your financial situation, confirm that your asset allocation still aligns with your risk tolerance, and update your estate plan if necessary.</p>

<h2>Conclusion</h2>

<p>Every individual's situation is unique. If you'd like personalized guidance tailored to your goals and concerns, consider speaking with our team of qualified <a href="/services/investment-management">wealth managers and investment advisors</a>. The right professional partnership can help you navigate the complexities of retirement with confidence. <a href="/contact">Contact us today</a>.</p>`,
  },
  {
    slug: "passive-income-hnw-investment-management",
    title:
      "The Power of Passive Income Streams for High-Net-Worth Individuals",
    date: "2024-10-30",
    updatedDate: "2026-03-02",
    category: "Investment Management",
    excerpt:
      "For high-net-worth individuals, passive income streams provide ongoing cash flow, stability, and diversification. Explore dividend stocks, bonds, REITs, and tax-efficient strategies.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/investment-management",
      "/services/tax-planning",
      "/services/financial-planning",
    ],
    relatedSlugs: [
      "investment-management-strategies-high-net-worth",
      "secure-retirement-investment-management",
    ],
    content: `<p>For high-net-worth (HNW) individuals, wealth management involves more than just growing a portfolio\u2014it's about creating sustainable, passive income streams that provide ongoing cash flow, stability, and diversification.</p>

<h2>1. Understanding Passive Income in Wealth Management</h2>

<p>Passive income is cash flow generated from investments without active involvement. Types include dividends from stock investments, interest from bonds or bond ladders, returns from REITs, and rental income from real estate properties.</p>

<h2>2. Dividend Stocks: Generating Cash Flow While Growing Capital</h2>

<p>Dividend-paying stocks offer a steady income stream while providing exposure to equity growth potential. Blue-chip stocks with consistent dividends and dividend growth funds targeting companies with increasing dividends over time can complement capital gains for consistent cash flow.</p>

<h2>3. Bonds and Bond Ladders for Stable Income</h2>

<p>By creating a bond ladder\u2014a series of bonds maturing at regular intervals\u2014you ensure predictable income while preserving capital. Options include Treasury bonds (lower yields but virtually risk-free), municipal bonds (often tax-free), and corporate bonds (higher yields with moderate risk).</p>

<h2>4. Real Estate Investments: Passive Income and Diversification</h2>

<p>Real estate offers rental income and property appreciation, diversifying portfolios and providing an inflation hedge. Both residential rental properties and commercial properties with longer lease terms can generate reliable cash flow.</p>

<h2>5. REITs vs. Direct Property Investment</h2>

<p>REITs offer real estate exposure without property management complexities, providing a simpler, more liquid alternative by pooling investor funds. Direct property investment provides control and potential tax benefits but requires hands-on management.</p>

<h2>6. Maximizing Passive Income Through Tax-Efficient Strategies</h2>

<p>Without proper <a href="/services/tax-planning">tax planning</a>, a significant portion of returns can be diminished. Key strategies include placing investments in tax-deferred or tax-free accounts, utilizing qualified dividend stocks for lower tax rates, and incorporating tax-free municipal bonds for high-bracket investors.</p>

<h2>7. Building a Balanced Passive Income Portfolio</h2>

<p>A diversified portfolio of passive income streams\u2014equities for growth and income, fixed income for stability, real estate for diversification, and selected alternative investments\u2014protects against market downturns while maximizing overall income potential.</p>

<p>Ready to develop a passive income strategy that complements your overall <a href="/services/financial-planning">financial plan</a>? <a href="/contact">Contact</a> United Financial Planning Group and start building your wealth with a trusted <a href="/services/investment-management">advisor</a> by your side.</p>`,
  },
  {
    slug: "investment-management-strategies-high-net-worth",
    title:
      "Investment Management Strategies for High-Net-Worth Individuals",
    date: "2024-09-10",
    updatedDate: "2026-03-02",
    category: "Investment Management",
    excerpt:
      "A comprehensive guide to investment management for high-net-worth individuals, covering financial planning, diversification, tax-efficient investing, risk management, and multi-generational wealth planning.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/investment-management",
      "/services/financial-planning",
      "/services/tax-planning",
    ],
    relatedSlugs: [
      "passive-income-hnw-investment-management",
      "high-net-worth-financial-planning",
    ],
    content: `<p>Managing significant wealth comes with unique challenges and opportunities. As a high-net-worth individual, your investment strategy needs to be more sophisticated than conventional approaches.</p>

<h2>1. Start with a Comprehensive Financial Plan</h2>

<p>Before any money is invested, begin with a <a href="/services/financial-planning">comprehensive financial plan</a>. Many firms skip this step, focusing solely on managing assets without fully understanding a client's broader financial situation. A comprehensive plan allows us to develop strategies for estate planning and tax optimization, review potential risks, and align investment decisions with overall financial objectives.</p>

<h2>2. Tailored Investment Strategies</h2>

<p>Every HNW individual has unique goals, timelines, and risk profiles. Your strategy should be customized based on time horizon, risk tolerance, and personal financial goals\u2014whether focusing on preserving wealth, growing assets, or generating income.</p>

<h2>3. Diversification Across Asset Classes</h2>

<p>We use index funds to provide exposure to a broad range of asset classes: equities for growth, fixed income for stability, international markets for global diversification, and real estate through REIT index funds for inflation protection.</p>

<h2>4. Tax-Efficient Investing</h2>

<p>Without careful <a href="/services/tax-planning">tax planning</a>, a significant portion of returns could be lost. Key strategies include tax-loss harvesting, tax-efficient index funds that minimize capital gains distributions, municipal bonds for tax-free income, and charitable giving strategies like donor-advised funds.</p>

<h2>5. Risk Management</h2>

<p>Our disciplined, long-term approach to indexing helps reduce the impact of market fluctuations, economic downturns, and currency fluctuations by spreading risk across a broad spectrum of assets\u2014without attempting to time the market.</p>

<h2>6. Wealth Preservation vs. Growth</h2>

<p>At certain stages of life, wealth preservation takes priority. Strategies include shifting to lower-risk assets like bond index funds, establishing trusts to protect wealth, and philanthropy that creates tax benefits while making a positive impact.</p>

<h2>7. Multi-Generational Wealth Planning</h2>

<p>Effective <a href="/services/investment-management">investment management</a> incorporates trust structures (revocable, irrevocable, dynasty, and charitable remainder trusts), estate planning to minimize taxes, and family governance to align future generations with your financial vision.</p>

<p>Ready to take control of your financial future? <a href="/contact">Contact United Financial Planning Group</a> today to schedule a consultation and start building a customized investment strategy.</p>`,
  },
  {
    slug: "navigating-financial-challenges-business-owner-new-york",
    title:
      "Navigating Financial Challenges as a Business Owner in New York",
    date: "2024-08-28",
    updatedDate: "2026-03-02",
    category: "Financial Planning",
    excerpt:
      "A guide for New York's self-employed professionals on managing irregular income, retirement planning, tax optimization, health insurance, and business succession planning.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/financial-planning",
      "/services/tax-planning",
      "/services/tax-preparation",
      "/services/retirement-planning",
    ],
    relatedSlugs: [
      "financial-tips-business-owners",
      "two-crucial-questions-interviewing-financial-advisor",
    ],
    content: `<p>Self-employment offers unparalleled freedom and flexibility, but it also comes with unique financial challenges. As a fee-only <a href="/services/financial-planning">financial planning</a> firm serving New York's self-employed professionals, United Financial Planning Group understands these challenges intimately.</p>

<h2>Irregular Income Management</h2>

<p>Inconsistent cash flow can make budgeting difficult. Create a buffer by saving during high-income periods, aim for 3-6 months of expenses in an emergency fund, and consider using a separate business account, transferring a "salary" to your personal account monthly.</p>

<h2>Retirement Planning</h2>

<p>Without employer-sponsored plans, explore self-employed <a href="/services/retirement-planning">retirement options</a>: Solo 401(k) with contribution limits up to $69,000, SEP IRA allowing up to 25% of net earnings, and SIMPLE IRA suitable for businesses with employees.</p>

<h2>Tax Planning and Payments</h2>

<p>Without employer withholding, you're responsible for quarterly estimated <a href="/services/tax-planning">tax payments</a>. Set aside 25-30% of your income for taxes and consider working with a CPA to optimize deductions. Don't forget self-employment tax (15.3%) on top of income tax.</p>

<h2>Health Insurance</h2>

<p>Explore options on the New York State of Health Marketplace. Consider a high-deductible health plan paired with a Health Savings Account (HSA) for tax advantages.</p>

<h2>Business Expense Management</h2>

<p>Use dedicated business credit cards and bank accounts. Implement a robust system for tracking expenses\u2014this simplifies <a href="/services/tax-preparation">tax preparation</a> and provides clarity on business profitability.</p>

<h2>Business Succession Planning</h2>

<p>Develop a comprehensive succession plan that may involve grooming a successor, creating systems that allow the business to run without you, or planning for a potential sale.</p>

<p>At United Financial Planning Group, our fee-only, fiduciary approach ensures unbiased advice tailored to your specific situation. <a href="/contact">Contact us today</a> to take control of your financial future.</p>`,
  },
  {
    slug: "ryan-derousseau-napfa-advisor-magazine",
    title:
      "United Financial Planning Group's Ryan Derousseau Featured in NAPFA Advisor Magazine",
    date: "2024-08-19",
    updatedDate: "2026-03-02",
    category: "In The Media",
    excerpt:
      "Ryan Derousseau, CFP\u00ae, was featured in NAPFA Advisor magazine discussing how he found success serving private practice therapists as a financial advisor niche.",
    author: "United Financial Planning Group",
    type: "media",
    externalUrl:
      "https://www.naylornetwork.com/napf-nwl/articles/index.asp?aid=839314&issueID=102199",
    publication: "NAPFA Advisor Magazine",
    relatedServices: ["/services/financial-planning"],
    relatedSlugs: [
      "high-yield-savings-accounts-wsj-ryan-derousseau",
      "two-crucial-questions-interviewing-financial-advisor",
    ],
    content: `<p>We're excited to share that <a href="/team/ryan-derousseau">Ryan Derousseau, CFP\u00ae</a>, a key member of our team at United Financial Planning Group, has been featured in the <a href="https://www.naylornetwork.com/napf-nwl/articles/index.asp?aid=839314&issueID=102199" target="_blank" rel="noopener noreferrer">latest issue of NAPFA Advisor magazine</a>. His insightful article, "Committing to an Unexpected Niche," offers valuable lessons for financial advisors and demonstrates the innovative approach we take at our firm.</p>

<p>In his piece, Ryan discusses how he found success by focusing on an unexpected niche: private practice therapists. Despite initial hesitation due to his lack of background in therapy, Ryan discovered that his experience as a self-employed professional resonated strongly with this group.</p>

<h2>Key Takeaways from Ryan's Article</h2>

<ol>
<li>The benefits of approaching a niche with an open mind and willingness to learn</li>
<li>The value of building relationships within your chosen niche</li>
<li>How to quickly develop expertise in a new area</li>
<li>The importance of finding a specific niche, even if it's not what you initially expect</li>
</ol>

<p>Ryan's journey from zero clients to a projected 50-60 subscription planning clients by the end of 2024 is a testament to the power of targeted marketing and genuine commitment to serving a specific community.</p>

<p>At United Financial Planning Group, we're proud of Ryan's success and his contribution to the broader <a href="/services/financial-planning">financial planning</a> community. His experience aligns with our firm's commitment to providing personalized, expert financial guidance to our clients.</p>

<p>If you're a private practice therapist looking for financial guidance or simply interested in learning more about our services, don't hesitate to <a href="/contact">reach out</a>. <a href="https://www.naylornetwork.com/napf-nwl/articles/index.asp?aid=839314&issueID=102199" target="_blank" rel="noopener noreferrer">Click here to read Ryan's full article</a>.</p>`,
  },
  {
    slug: "two-crucial-questions-interviewing-financial-advisor",
    title:
      "2 Crucial Questions to Ask When Interviewing a Financial Advisor",
    date: "2024-08-07",
    updatedDate: "2026-03-02",
    category: "Financial Planning",
    excerpt:
      "The two most important questions to ask a financial advisor: their compensation model and business structure. Learn the difference between fee-only, fee-based, and commission-based advisors.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/financial-planning",
      "/services/investment-management",
    ],
    relatedSlugs: [
      "why-fee-only-fiduciary-financial-planner",
      "navigating-financial-challenges-business-owner-new-york",
    ],
    content: `<h2>The 2 Crucial Questions</h2>

<ol>
<li>What is your compensation model?</li>
<li>Under what type of business structure do you operate?</li>
</ol>

<h2>Types of Business Structures</h2>

<h3>Broker Dealers</h3>

<p>Typically larger companies or banks like TIAA, UBS, JP Morgan, Ameriprise, Northwestern Mutual, Goldman Sachs. In this model, the company creates incentive structures that impact the advice given to you. Advisors often push proprietary products that may not be the best fit, and may incur higher fees. Some clients don't realize they're paying over 2% per quarter on portfolios\u2014costing upwards of $20,000 per year on a $1 million portfolio. Some products carry front load fees of up to 5%, meaning $50,000 on a million-dollar portfolio.</p>

<h3>Registered Investment Advisor (RIA) Firms</h3>

<p>Usually smaller firms without their own investment products. RIAs are typically better, but some still push products for broker dealers through partnerships\u2014which is where compensation models become critical.</p>

<h2>Types of Compensation Models</h2>

<h3>Commission-Based Financial Advisors</h3>

<p>Income is directly tied to product sales. This leads to significant conflicts of interest: recommending unnecessary transactions, prioritizing short-term transactional relationships, and selling the highest-fee products for higher commissions.</p>

<h3>Fee-Based Financial Advisors</h3>

<p>A hybrid model receiving both client fees and product commissions. Don't confuse "fee-based" with "fee-only"\u2014they are very different. Fee-based advisors are held to a "suitability" standard, meaning products must be suitable but don't need to be the <em>best possible</em> investment.</p>

<h3>Fee-Only Financial Advisors</h3>

<p>Compensated exclusively by clients. Never earn commissions from selling products. Held to the <strong>Fiduciary Standard</strong>\u2014legally required to put your interests first. All recommendations must be what's best for you. Fee-only advisors typically avoid high-fee investments because there are almost zero scenarios warranting them.</p>

<h2>How to Confirm Your Advisor is Fee-Only</h2>

<ul>
<li><strong>Check the Firm's ADV:</strong> This compliance document explicitly lists whether an advisor is fee-based or fee-only.</li>
<li><strong>Check Fee-Only Portals:</strong> Sites like NAPFA, Garrett Planning Network, and XYPN require fee-only membership.</li>
<li><strong>Ask the Advisor:</strong> Anything other than a direct response should be considered a red flag.</li>
</ul>

<p>At <a href="/about">United Financial Planning Group</a>, we pride ourselves on our fee-only structure that fosters trust and aligns our success with yours. <a href="/contact">Contact us today</a> to learn more about our <a href="/services/financial-planning">financial planning services</a>.</p>`,
  },
  {
    slug: "investing-for-major-financial-goals",
    title: "Investing for Major Financial Goals",
    date: "2024-07-19",
    updatedDate: "2026-03-02",
    category: "Financial Planning",
    excerpt:
      "Setting clear investment goals is the foundation of financial success. Learn strategies for retirement savings, college planning, and major purchases with specific timelines.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/financial-planning",
      "/services/retirement-planning",
      "/services/investment-management",
    ],
    relatedSlugs: [
      "secure-retirement-investment-management",
      "balancing-ebbs-flows-hybrid-earners",
    ],
    content: `<p>Investing without setting clear-cut goals is like throwing money into a hole. The first step in investing is defining your dreams for the future\u2014be specific about what, when, and how much.</p>

<h2>Looking Forward to Retirement</h2>

<p>It's never too early to start planning for <a href="/services/retirement-planning">retirement</a>. Starting at age 25, contributing $250 per month to a 401(k) at 6% annual return compounded monthly yields over $500,000 by age 65. Waiting until 35 with the same contributions results in roughly half that amount.</p>

<p>Key points for retirement planning:</p>

<ul>
<li>Consider how inflation affects your savings and real rate of return</li>
<li>Invest according to your time horizon\u2014longer timelines allow more equity exposure</li>
<li>Plan for longevity, as average life expectancies continue increasing</li>
</ul>

<h2>Facing the Truth About College Savings</h2>

<p>With college costs rising faster than inflation, an early start makes an enormous difference. Consider state-sponsored tuition plans that allocate money into investments tailored to your time frame, research financial aid packages, and estimate total costs using widely available projections.</p>

<h2>Investing for Something Big</h2>

<p>Large purchases like a home typically have shorter time frames (1-5 years). Choose less volatile, highly liquid investments with some growth potential that give you quick access to your money when needed.</p>

<p>United Financial Planning Group is here to help you reach your <a href="/services/financial-planning">financial goals</a>. <a href="/contact">Contact us today</a> to learn more about how we can build a plan tailored to your specific objectives.</p>`,
  },
  {
    slug: "high-net-worth-financial-planning",
    title:
      "High Net Worth Financial Planning: Tailored Strategies for Distinctive Needs",
    date: "2024-07-19",
    updatedDate: "2026-03-02",
    category: "Financial Planning",
    excerpt:
      "High-net-worth individuals face unique financial challenges requiring a holistic approach. Explore tailored strategies for asset protection, estate planning, and tax-efficient advising.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/financial-planning",
      "/services/investment-management",
      "/services/tax-planning",
    ],
    relatedSlugs: [
      "investment-management-strategies-high-net-worth",
      "passive-income-hnw-investment-management",
    ],
    content: `<p>Navigating the complexities of the financial landscape can be challenging for anyone. But for high net worth individuals, the intricacies and stakes are even higher. Given the unique challenges and opportunities that come with substantial wealth, it's crucial to align with financial strategies designed for such a distinctive profile.</p>

<h2>Understanding the Unique Needs of High Net Worth Investors</h2>

<p>High net worth individuals often have diverse asset portfolios, including real estate holdings, investments, business interests, and international assets. Such diversity demands a holistic <a href="/services/financial-planning">financial planning</a> approach that ensures all pieces work in harmony.</p>

<h2>Asset Protection and Growth</h2>

<p>With more to safeguard, wealth protection becomes paramount. Yet, it's not just about shielding assets but also about optimizing their growth. Leveraging advanced <a href="/services/investment-management">investment diversification</a> and asset allocation strategies tailored to high net worth profiles ensures both protection and growth.</p>

<h2>Estate and Legacy Planning</h2>

<p>Ensuring a smooth intergenerational wealth transfer requires foresight. From trust planning to charitable giving strategies, creating a roadmap that reflects personal values and family aspirations is key. With the potential complexities of high net worth estates, aligning with a fiduciary financial advisor is even more important.</p>

<h2>Tax Efficient Advising for the Affluent</h2>

<p>High net worth often means more intricate tax situations. Crafting strategies for <a href="/services/tax-planning">tax efficiency</a> is not just about compliance, but maximizing wealth and minimizing unnecessary tax burdens. Having a CPA at your disposal is critical to ensure you are as tax efficient as possible.</p>

<h2>Why Fee-Only Makes a Difference</h2>

<p>Engaging with a fee-only financial planner with a fiduciary obligation ensures unbiased advice tailored for high net worth needs. Without external commissions to sway decisions, strategies remain aligned with the client's best interests.</p>

<p>High net worth individuals in Nassau County, Suffolk County, Manhattan, and nationwide need a partner who understands the nuances of substantial wealth. <a href="/contact">Contact us</a> today to learn more about how we help high net worth individuals.</p>`,
  },
  {
    slug: "balancing-ebbs-flows-hybrid-earners",
    title:
      "Balancing the Ebbs and Flows: A Financial Guide for Hybrid Earners",
    date: "2024-07-19",
    updatedDate: "2026-03-02",
    category: "Financial Planning",
    excerpt:
      "Professionals with base salary plus commission face unique financial challenges. Learn strategies for budgeting, investing, and retirement planning with a dual-income structure.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/financial-planning",
      "/services/investment-management",
      "/services/tax-planning",
    ],
    relatedSlugs: [
      "navigating-financial-challenges-business-owner-new-york",
      "investing-for-major-financial-goals",
    ],
    content: `<p>Many professionals enjoy the stability of a base salary complemented by commission-based bonuses. While this structure allows for increased earnings potential, it also presents unique challenges. Crafting a tailored <a href="/services/financial-planning">financial strategy</a> is essential for navigating this dual-income terrain.</p>

<h2>Budgeting for Dual Income</h2>

<ul>
<li><strong>Secure the Basics:</strong> Use your base salary to cover fixed expenses such as rent, mortgage, utilities, and insurance.</li>
<li><strong>Divide and Conquer:</strong> Allocate portions of your commission for immediate expenses, short-term savings, and investments.</li>
<li><strong>Utilize Technology:</strong> Leverage digital tools to track both base salary and commission incomes.</li>
</ul>

<h2>Optimizing Your Commission with Professional Wealth Management</h2>

<p>Recognizing that hybrid earners have distinctive financial goals, customized <a href="/services/investment-management">investment strategies</a> ensure that both salary and bonus work in tandem. A significant commission on top of a base salary has <a href="/services/tax-planning">tax nuances</a>\u2014engaging a fee-only financial advisor ensures tax-efficient strategies. Dollar-Cost Averaging and periodic portfolio rebalancing ensure alignment with your goals.</p>

<h2>Retirement Planning with Hybrid Earnings</h2>

<p>Understanding tax-advantaged accounts\u2014including IRAs, 401(k)s, and Roth IRAs\u2014is critical. Consistent contributions from your base salary, supplemented by strategic commission investment, build a solid <a href="/services/retirement-planning">retirement</a> foundation. Navigate contribution limits and compounding growth with professional guidance.</p>

<h2>Emergency Funds: Your Safety Net</h2>

<p>More than a monetary reserve, an emergency fund offers peace of mind. Setting aside a portion of your base salary each month ensures you can handle emergencies without resorting to high-interest loans or prematurely withdrawing from investments.</p>

<p>At United Financial Planning Group, we specialize in helping professionals navigate dual-income complexities. <a href="/contact">Reach out today</a> to ensure your base and bonus are working in harmony.</p>`,
  },
  {
    slug: "why-fee-only-fiduciary-financial-planner",
    title:
      "Why a Fee-Only Fiduciary Financial Planner is Crucial for Your Wealth Management",
    date: "2024-07-19",
    updatedDate: "2026-03-03",
    category: "Financial Planning",
    excerpt:
      "Understanding the difference between fee-only, fee-based, and commission-based financial planners is essential for protecting your wealth and ensuring unbiased advice.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/financial-planning",
      "/services/investment-management",
    ],
    relatedSlugs: [
      "two-crucial-questions-interviewing-financial-advisor",
      "high-net-worth-financial-planning",
    ],
    content: `<p>In the diverse landscape of financial planning, the terms "fee-only" and "fiduciary" stand out as beacons of transparency and trustworthiness. Understanding these terms and their implications is paramount.</p>

<h2>The Fee-Only Advantage</h2>

<p>Fee-only <a href="/services/financial-planning">financial planners</a>, like those at United Financial Planning Group, are compensated solely by their clients. This model offers:</p>

<ul>
<li><strong>Avoiding Commission-Based Conflicts:</strong> No commissions or incentives for recommending specific products.</li>
<li><strong>Transparent Costs:</strong> You know exactly what you're paying for.</li>
<li><strong>Dedication to Your Goals:</strong> Without outside commissions, the primary focus is crafting strategies tailored to your unique financial aspirations.</li>
</ul>

<h2>The Fiduciary Responsibility</h2>

<p>Being a fiduciary means the advisor is legally bound to act in your best interests:</p>

<ul>
<li><strong>High Ethical Standards:</strong> Obligated to provide advice that best serves you, even if it means less profit for them.</li>
<li><strong>Trustworthiness:</strong> Your financial well-being is prioritized above all else.</li>
<li><strong>Peace of Mind:</strong> A legal obligation to act in your favor.</li>
</ul>

<h2>Fee-Based and Commission-Based Planners: The Pitfalls</h2>

<p>"Fee-based" sounds similar to "fee-only" but they're worlds apart. Fee-based advisors earn both fees and commissions, introducing potential conflicts of interest. Commission-based planners earn money by selling financial products, potentially pushing products that grant higher commissions.</p>

<h2>The Clear Choice</h2>

<p>For those in Long Island, Manhattan, Westchester, and beyond, aligning with a fee-only fiduciary financial planner offers a path illuminated by transparency, trust, and genuine dedication to your financial goals. For holistic <a href="/services/financial-planning">financial planning</a> and expert <a href="/services/investment-management">wealth management</a>, <a href="/contact">contact us</a> today.</p>`,
  },
  {
    slug: "financial-tips-business-owners",
    title:
      "Financial Tips for Business Owners: Navigating Wealth, Taxes, and Succession Planning",
    date: "2024-07-19",
    updatedDate: "2026-03-02",
    category: "Tax Planning",
    excerpt:
      "Essential financial strategies for business owners covering integrated financial planning, tax optimization, retirement planning, and business succession.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/financial-planning",
      "/services/tax-planning",
      "/services/tax-preparation",
    ],
    relatedSlugs: [
      "navigating-financial-challenges-business-owner-new-york",
      "two-crucial-questions-interviewing-financial-advisor",
    ],
    content: `<p>As a business owner, your financial landscape is intricately linked to your enterprise, requiring a nuanced approach to ensure both personal and business prosperity.</p>

<h2>Integrated Business-Personal Financial Strategy</h2>

<p>Business and personal finances are two sides of the same coin. An integrated strategy offers a 360-degree view of total wealth, harmonizes personal and business goals, identifies investment opportunities benefiting both domains, manages liquidity across personal and business needs, and mitigates cross-domain financial risks.</p>

<p>While maintaining a holistic view for <a href="/services/financial-planning">planning purposes</a>, establishing clear financial boundaries between personal and business is essential for liability protection.</p>

<h2>Business Continuity and Succession Planning</h2>

<p>Effective succession planning ensures legacy protection through continued business existence and growth, talent development for smooth leadership transitions, valuation preservation through stakeholder confidence, and compliance with legal and tax implications of ownership transfer.</p>

<h2>Strategic Tax Optimization</h2>

<p>Proper <a href="/services/tax-planning">tax planning</a> turns potential liabilities into opportunities:</p>

<ul>
<li><strong>Business Expense Leveraging:</strong> Depreciation of assets and deduction of business expenses.</li>
<li><strong>Retirement Plan Contributions:</strong> SEP IRAs, Solo 401(k)s, and profit-sharing plans offer significant tax-deductible contributions.</li>
<li><strong>Business Structure Optimization:</strong> The right entity (LLC, S-Corp, C-Corp) has direct tax implications. Income splitting in S-Corps can reduce payroll taxes.</li>
<li><strong>Year-End Tax Moves:</strong> Strategic timing of expenses and revenue recognition, charitable contributions through the business.</li>
<li><strong>Capital Asset Management:</strong> Long-term capital gains often enjoy lower rates than ordinary income.</li>
</ul>

<p>We encourage you to <a href="/contact">contact United Financial Planning Group</a> for expert guidance from our team of CPAs and CFP\u00ae professionals. Our integrated approach to <a href="/services/tax-preparation">tax preparation</a> and financial planning ensures your financial journey is as successful as your business.</p>`,
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.type === "blog");
}

export function getMediaMentions(): BlogPost[] {
  return blogPosts.filter((p) => p.type === "media");
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is BlogPost => p !== undefined);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getPostLastModified(post: BlogPost): string {
  return post.updatedDate ?? post.date;
}

/**
 * Resolves the post's display author. Falls back to the firm profile if no
 * `authorSlug` is set (which is the case for legacy posts and "In The Media"
 * entries that are attributed to the firm rather than an individual).
 */
export function getAuthor(post: BlogPost): AuthorProfile {
  if (post.authorSlug) {
    return authorProfiles[post.authorSlug];
  }
  return authorProfiles.firm;
}

const HEADING_TAGS_FOR_TOC = ["h2"] as const;

/** Slugifies heading text (and entity-decodes the common ones we use in posts). */
function slugifyHeading(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/gi, "&")
    .replace(/&(ldquo|rdquo|lsquo|rsquo);/gi, "")
    .replace(/&mdash;|&ndash;/gi, "-")
    .replace(/&[a-z]+;|&#\d+;/gi, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Decodes the small set of entities we use in heading display strings. */
function decodeHeadingText(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/gi, "&")
    .replace(/&ldquo;|&rdquo;|&quot;/gi, '"')
    .replace(/&lsquo;|&rsquo;|&#8217;/gi, "\u2019")
    .replace(/&mdash;/gi, "\u2014")
    .replace(/&ndash;/gi, "\u2013")
    .replace(/&reg;/gi, "\u00ae")
    .replace(/&trade;/gi, "\u2122")
    .trim();
}

/**
 * Adds a stable `id` to every <h2> in the rendered post HTML so deep-links and
 * the table of contents work without authors hand-writing IDs. Existing IDs
 * (e.g. the disclosures anchor) are preserved.
 */
export function injectHeadingIds(html: string): string {
  return html.replace(
    /<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/gi,
    (match, attrsRaw: string | undefined, inner: string) => {
      const attrs = attrsRaw ?? "";
      if (/\bid=["'][^"']+["']/i.test(attrs)) return match;
      return `<h2${attrs} id="${slugifyHeading(inner)}">${inner}</h2>`;
    },
  );
}

export type TocItem = { id: string; text: string };

/** Extracts an ordered list of <h2> headings for the in-article table of contents. */
export function extractToc(html: string): TocItem[] {
  const items: TocItem[] = [];
  for (const tag of HEADING_TAGS_FOR_TOC) {
    // Capture optional attributes so an explicit `id=""` (e.g. the disclosures
    // section) wins over the auto-slugified one — otherwise TOC links 404.
    const regex = new RegExp(
      `<${tag}(\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`,
      "gi",
    );
    for (const match of html.matchAll(regex)) {
      const attrs = match[1] ?? "";
      const inner = match[2] ?? "";
      const text = decodeHeadingText(inner);
      if (!text) continue;
      const explicitId = attrs.match(/\bid=["']([^"']+)["']/i)?.[1];
      const id = explicitId ?? slugifyHeading(inner);
      items.push({ id, text });
    }
  }
  return items;
}

/** Estimates reading time in minutes from a word count (220 wpm baseline). */
export function readingTimeMinutes(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 220));
}

/** Returns ISO 8601 duration for the schema.org `timeRequired` field. */
export function readingTimeIso(wordCount: number): string {
  return `PT${readingTimeMinutes(wordCount)}M`;
}
