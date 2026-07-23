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
  /** Optional featured/hero image URL used as og:image and in Article schema. */
  image?: string;
  /** Alt text for the featured image (required when `image` is set). */
  imageAlt?: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "roth-conversion-strategy-pre-retirees",
    title:
      "The Roth Conversion Window: When It Makes Sense for Pre-Retirees",
    date: "2026-07-16",
    category: "Tax Planning",
    excerpt:
      "For many pre-retirees, the years between leaving a full-time career and the start of Required Minimum Distributions at age 73 are the most favorable tax window they will ever have for Roth conversions. Income is temporarily low, brackets are more forgiving, and the decisions made here can compound quietly for decades. But sizing those conversions correctly, without triggering IRMAA surcharges or bracket creep, requires your financial plan and your tax picture to work together, not in parallel.",
    author: "United Financial Planning Group",
    authorSlug: "gerry-barrasso",
    type: "blog",
    image:
      "https://nz2q9bvkofj2xcya.public.blob.vercel-storage.com/sites/fc1baa26-67fb-4bda-8df5-8a06ead90442/images/2ab2309d-0380-441f-b7a2-ce44fea22384-MJkWeRhbyLKDgOiy5uP41sqN8x1eOx.jpg",
    imageAlt:
      "Roth IRA jar and coins illustrating tax-free growth for retirement",
    relatedServices: [
      "/services/retirement-planning",
      "/services/tax-planning",
      "/services/financial-planning",
    ],
    relatedSlugs: [
      "pre-retirement-tax-transition-managing-brackets-rmds",
      "modern-guide-retirement-planning",
      "retirement-portfolio-strategies-market-downturns",
    ],
    faqs: [
      {
        question: "What is a Roth conversion and how does it work?",
        answer:
          "A Roth conversion is the process of moving money from a traditional IRA (or other pre-tax retirement account) into a Roth IRA. The converted amount is added to your taxable income in the year of conversion and taxed at your ordinary income rate. In exchange, the funds now grow tax-free inside the Roth IRA and are not subject to Required Minimum Distributions (RMDs) during the account owner\u2019s lifetime. Qualified withdrawals in retirement are completely tax-free.",
      },
      {
        question:
          "What is the Roth conversion window for pre-retirees?",
        answer:
          "The \u201cconversion window\u201d refers to the period between retirement (or a significant reduction in earned income) and the time when Required Minimum Distributions begin at age 73 and Social Security benefits start. During this window, many pre-retirees are in a lower tax bracket than they were during their peak earning years and lower than they expect to be when RMDs force large taxable distributions later. This temporary low-income period creates an opportunity to convert traditional IRA funds to Roth at a relatively favorable tax rate.",
      },
      {
        question: "What is IRMAA and how does it affect Roth conversion planning?",
        answer:
          "IRMAA stands for Income-Related Monthly Adjustment Amount. It is a surcharge added to Medicare Part B and Part D premiums for beneficiaries whose Modified Adjusted Gross Income (MAGI) exceeds certain thresholds. Because IRMAA is based on income from two years prior (for example, your 2024 income affects your 2026 Medicare premiums), a Roth conversion that pushes MAGI above an IRMAA tier can increase Medicare costs significantly. The surcharges are structured as stair-steps, meaning a small excess over a threshold can trigger thousands of dollars in additional annual premiums. This must be carefully modeled when sizing annual conversions.",
      },
      {
        question: "What is the Roth five-year rule?",
        answer:
          "There are actually two five-year rules for Roth IRAs. The first applies to the earnings inside a Roth: to take qualified, tax-free withdrawals of earnings, the account must have been open for at least five tax years and the owner must be age 59\u00bd or older. The second applies to each individual Roth conversion: converted funds must remain in the Roth for five years before withdrawal to avoid the 10% early withdrawal penalty (if the account owner is under 59\u00bd). For most pre-retirees over age 59\u00bd, the five-year penalty rule on conversions is less of a concern, but the earnings rule still matters if you are opening a new Roth IRA for the first time.",
      },
      {
        question:
          "Should I pay Roth conversion taxes from my IRA or from outside funds?",
        answer:
          "In most cases, paying the conversion tax from outside the IRA (using funds in a taxable brokerage account, savings, or other non-retirement assets) is more advantageous. When you pay the tax from outside the IRA, the full converted amount moves into the Roth, maximizing the tax-free growth. If you withhold from the IRA itself to cover the tax, you effectively convert a smaller amount and lose the benefit of that withheld portion growing tax-free. In addition, if you are under age 59\u00bd, withholding from the IRA may trigger a 10% early withdrawal penalty on the withheld portion.",
      },
    ],
    content: `<h2>Why the Conversion Window Matters</h2>

<p>For decades of your working career, a Roth IRA may have been out of reach. High earned income pushed you above the contribution limits, and the tax deduction from a traditional 401(k) or IRA was too valuable to give up. So you did the right thing: you saved in pre-tax accounts and let those funds compound for years.</p>

<p>Now the calculus is changing. You are within five to ten years of retirement, or perhaps you have already left your primary career. Your earned income has dropped. Social Security has not started. Required Minimum Distributions are still years away. And your traditional IRA or 401(k) has grown substantially.</p>

<p>This is the <strong>Roth conversion window</strong>: the years when your taxable income is temporarily low, giving you an opportunity to move money from pre-tax accounts into a Roth IRA at a lower marginal tax rate than you faced during your peak earning years, and likely lower than the rates that will apply when RMDs force large mandatory distributions in your 70s and 80s.</p>

<p>Used strategically, this window can permanently reduce your lifetime tax burden, lower Medicare premiums, and leave your heirs a more tax-efficient inheritance. Missed entirely, it closes quietly and you cannot recover it.</p>

<h2>What a Roth Conversion Actually Is</h2>

<p>A <strong>Roth conversion</strong> is straightforward in mechanics: you move funds from a traditional IRA (or roll over a pre-tax 401(k) into a traditional IRA first, then convert) into a Roth IRA. The converted amount is included in your gross income for the year as ordinary income and taxed at your marginal rate. In exchange, those funds now sit in a Roth IRA where they grow tax-free and are never subject to RMDs during your lifetime.</p>

<p>There is no income limit for conversions. Anyone with a traditional IRA can execute a <strong>traditional IRA to Roth conversion</strong>, regardless of income. This is sometimes called the &ldquo;backdoor Roth&rdquo; strategy when used by high earners who cannot contribute directly, but for pre-retirees in the conversion window, it is simply a direct transfer executed with your IRA custodian.</p>

<h2>Traditional IRA vs. Roth IRA: Key Differences at a Glance</h2>

<p>Before modeling whether a conversion makes sense for your situation, it helps to see the two account types side by side. The table below summarizes the core tax treatment differences that drive the Roth conversion decision.</p>

<div class="overflow-x-auto my-6">
<table class="w-full border-collapse text-sm">
<caption class="text-left text-xs text-muted-foreground mb-2">For illustrative and educational purposes only. Tax rules are subject to change. Consult a qualified tax professional regarding your individual situation.</caption>
<thead>
<tr class="bg-muted">
<th class="text-left p-3 border border-border font-semibold">Feature</th>
<th class="text-left p-3 border border-border font-semibold">Traditional IRA / 401(k)</th>
<th class="text-left p-3 border border-border font-semibold">Roth IRA</th>
</tr>
</thead>
<tbody>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Contributions</td>
<td class="p-3 border border-border">Pre-tax (reduces taxable income in the contribution year, subject to income and participation rules)</td>
<td class="p-3 border border-border">After-tax (no deduction; income limits apply for direct contributions, but there is no limit for conversions)</td>
</tr>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Growth</td>
<td class="p-3 border border-border">Tax-deferred (no tax on dividends, interest, or gains while inside the account)</td>
<td class="p-3 border border-border">Tax-free (qualified earnings grow and are withdrawn free of federal income tax)</td>
</tr>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Withdrawals in Retirement</td>
<td class="p-3 border border-border">Fully taxable as ordinary income at your marginal rate in the year of withdrawal</td>
<td class="p-3 border border-border">Tax-free for qualified distributions (account open &ge;5 tax years; owner age 59&frac12; or older)</td>
</tr>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Required Minimum Distributions (RMDs)</td>
<td class="p-3 border border-border">Required beginning at age 73 (under current law), whether you need the income or not; RMDs are taxable</td>
<td class="p-3 border border-border">No RMDs during the original owner&rsquo;s lifetime; assets can grow tax-free indefinitely or be passed to heirs</td>
</tr>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Estate / Inheritance</td>
<td class="p-3 border border-border">Heirs pay ordinary income tax on inherited distributions (10-year rule for most non-spouse beneficiaries under SECURE 2.0)</td>
<td class="p-3 border border-border">Heirs generally receive distributions income-tax-free (10-year rule applies, but the distributions themselves are not taxable)</td>
</tr>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">IRMAA / Medicare Impact</td>
<td class="p-3 border border-border">Withdrawals count toward MAGI, which drives Medicare Part B and D premium surcharges</td>
<td class="p-3 border border-border">Qualified withdrawals do not count toward MAGI, so they do not increase Medicare premium surcharges</td>
</tr>
</tbody>
</table>
</div>

<h2>Evaluating Whether a Roth Conversion Makes Sense</h2>

<p>The Roth conversion decision is not a one-size-fits-all rule of thumb. It is a calculation that requires looking at your actual situation across multiple dimensions.</p>

<h3>Current vs. Expected Future Tax Brackets</h3>

<p>The core question in any <strong>Roth conversion tax bracket</strong> analysis is: are you in a lower bracket today than you expect to be when you start taking distributions?</p>

<p>For many pre-retirees, the answer is yes, but the magnitude matters. If you are currently in the 22% federal bracket and project that RMDs plus Social Security will push you into the 24% or 28% bracket in your mid-70s, a conversion at 22% today creates a permanent saving on every converted dollar. If your future bracket will be roughly the same as today, the benefit is less clear-cut, though Roth accounts still offer estate planning and RMD flexibility advantages.</p>

<p>A thorough analysis models:</p>

<ul>
<li><strong>Your projected RMDs at ages 73, 75, and 80</strong> based on current account balances and realistic growth assumptions.</li>
<li><strong>Social Security income</strong> and at what income levels your benefits become taxable (up to 85% of benefits can be taxable once your &ldquo;combined income&rdquo; exceeds IRS thresholds).</li>
<li><strong>Any pension or part-time income</strong> that will continue into retirement.</li>
<li><strong>Your available bracket space today</strong>: how much additional taxable income can you recognize before crossing into the next federal bracket?</li>
</ul>

<p>Getting these projections right requires actual tax-return-level modeling: not a quick calculator estimate. The difference between $80,000 and $100,000 in Roth conversions in a given year can mean the difference between staying in the 22% bracket and tripping into the 24% bracket, or crossing an IRMAA tier that costs thousands in Medicare premiums two years later.</p>

<h3>IRMAA: The Medicare Premium Surcharge Cliffs</h3>

<p>One of the most important, and most commonly overlooked, dimensions of <strong>Roth conversion strategy</strong> planning is Medicare&rsquo;s Income-Related Monthly Adjustment Amount, or IRMAA. Under IRMAA, your Medicare Part B and Part D premiums are not flat rates. They increase in steps based on your Modified Adjusted Gross Income (MAGI) from two years prior.</p>

<p>The mechanics matter: income you recognize during your conversion window directly affects your Medicare premiums two years later. Aggressive conversions in your late 60s can trigger IRMAA surcharges in your early 70s, adding thousands of dollars per year in healthcare costs. For a married couple, the combined impact can exceed $7,000 annually at higher income tiers.</p>

<p>The stair-step structure means precision is critical. Recognizing just $1 above an IRMAA threshold triggers the full surcharge for that tier. A conversion analysis that does not explicitly model IRMAA thresholds is incomplete.</p>

<h3>Net Investment Income Tax (NIIT) Thresholds</h3>

<p>If your MAGI exceeds $200,000 (single) or $250,000 (married filing jointly), net investment income (interest, dividends, and capital gains) is subject to an additional 3.8% Net Investment Income Tax. Roth conversions increase your MAGI, which can pull otherwise below-threshold investment income into NIIT exposure. For pre-retirees with substantial taxable brokerage income, this interaction deserves explicit modeling.</p>

<h3>New York State Tax Considerations</h3>

<p>For our clients on Long Island, in Manhattan, and throughout the New York metro area: New York State taxes Roth conversions as ordinary income at state rates. New York&rsquo;s top rate of 10.9% (for high earners) means a conversion that looks cost-effective at the federal level may be more expensive in total when state taxes are included. Conversely, if you plan to relocate to a no-income-tax state in retirement, converting before you move can eliminate the state tax entirely, a significant planning opportunity worth evaluating carefully.</p>

<h2>Common Roth Conversion Mistakes</h2>

<p>The conversion window is an opportunity, but it is possible to execute it poorly. Here are the most common mistakes we see:</p>

<h3>Converting Too Much in One Year</h3>

<p>The most frequent error is converting too aggressively in a single year without modeling the full tax impact. A large conversion can:</p>

<ul>
<li>Push you from the 22% to the 24% (or higher) federal bracket, reducing the tax efficiency of the conversion.</li>
<li>Trigger an IRMAA tier that raises your Medicare premiums for the following two years.</li>
<li>Cause more of your Social Security benefits to become taxable.</li>
<li>Subject more of your investment income to the 3.8% NIIT.</li>
</ul>

<p>The optimal approach is usually to spread conversions across multiple years, filling your current bracket carefully each year rather than attempting a large one-time conversion.</p>

<h3>Paying the Tax Bill From Inside the IRA</h3>

<p>If you withhold funds from the IRA itself to cover the conversion tax, you reduce the amount that actually lands in the Roth, and you lose the long-term compounding benefit of those withheld dollars growing tax-free. The optimal approach is to pay the conversion tax from a taxable brokerage account or other non-retirement savings, so the full converted amount moves into the Roth. If you are under age 59&frac12;, withholding from the IRA to pay the tax can also trigger a 10% penalty on the withheld portion.</p>

<h3>Ignoring the Five-Year Rule</h3>

<p>Roth IRAs have two five-year rules, and confusing them is a common source of errors. Each conversion begins its own five-year clock for penalty-free access to that specific converted amount (for those under 59&frac12;). The separate five-year rule on Roth IRA earnings requires the account to have been open at least five tax years before earnings can be withdrawn tax-free. For most pre-retirees converting in their 60s, the penalty issue is less pressing, but if you are opening a Roth IRA for the first time as part of this strategy, the earnings five-year clock starts now and is worth factoring into your planning timeline.</p>

<h3>Converting Without a Multi-Year Plan</h3>

<p>A Roth conversion executed without a multi-year projection is guesswork. Whether conversions make sense, and how much to convert each year, depends on your full income picture: expected Social Security timing, projected RMD amounts, capital gains harvesting plans, charitable giving, and future tax law expectations. Executing conversions year by year without a coordinated roadmap often results in suboptimal bracket and IRMAA outcomes that could have been avoided.</p>

<h2>What a Multi-Year Roth Conversion Ladder Might Look Like</h2>

<p>One of the most effective ways to use the conversion window is to spread conversions across several years, carefully filling up a lower tax bracket each year rather than converting a large lump sum all at once. The table below shows a <strong>hypothetical illustration</strong> of how this might work for a married couple filing jointly who retire at 63 with a $1.2 million traditional IRA, modest other income, and Social Security beginning at 70.</p>

<p><em>Important: The numbers below are entirely hypothetical and for illustration only. They are not a projection or guarantee of results, and they do not reflect any specific client situation. Federal bracket boundaries, IRMAA thresholds, and tax rates are subject to change. Individual circumstances vary significantly. This is not personalized tax or financial advice.</em></p>

<div class="overflow-x-auto my-6">
<table class="w-full border-collapse text-sm">
<caption class="text-left text-xs text-muted-foreground mb-2">Hypothetical illustration only: not a projection or individualized advice. Assumes 2024 federal brackets (MFJ), 5% annual IRA growth, and illustrative Social Security and other income figures. Actual results will differ based on your specific situation.</caption>
<thead>
<tr class="bg-muted">
<th class="text-left p-3 border border-border font-semibold">Year / Age</th>
<th class="text-left p-3 border border-border font-semibold">Other Taxable Income (Illus.)</th>
<th class="text-left p-3 border border-border font-semibold">Roth Conversion Amount (Illus.)</th>
<th class="text-left p-3 border border-border font-semibold">Approx. Top Bracket Used</th>
<th class="text-left p-3 border border-border font-semibold">Key Consideration</th>
</tr>
</thead>
<tbody>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Year 1, Age 63</td>
<td class="p-3 border border-border">$40,000 (part-time / dividends)</td>
<td class="p-3 border border-border">$50,000</td>
<td class="p-3 border border-border">22% federal</td>
<td class="p-3 border border-border">First year of conversion window; fill lower portion of 22% bracket. Pay tax from taxable savings, not IRA.</td>
</tr>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Year 2, Age 64</td>
<td class="p-3 border border-border">$35,000 (investment income)</td>
<td class="p-3 border border-border">$55,000</td>
<td class="p-3 border border-border">22% federal</td>
<td class="p-3 border border-border">Slightly larger conversion; confirm IRMAA MAGI stays below first threshold (~$206,000 MFJ for 2024). Two-year lookback means 2024 income affects 2026 Medicare premiums.</td>
</tr>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Year 3, Age 65</td>
<td class="p-3 border border-border">$35,000 (investment income)</td>
<td class="p-3 border border-border">$55,000</td>
<td class="p-3 border border-border">22% federal</td>
<td class="p-3 border border-border">Medicare begins at 65; IRMAA exposure is now active. This year&rsquo;s MAGI (2027) affects 2029 Medicare premiums. Careful sizing required.</td>
</tr>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Years 4&ndash;6, Ages 66&ndash;68</td>
<td class="p-3 border border-border">$30,000&ndash;$35,000</td>
<td class="p-3 border border-border">$50,000&ndash;$60,000 per year</td>
<td class="p-3 border border-border">22%&ndash;24% federal</td>
<td class="p-3 border border-border">Conversions continue annually. Total MAGI (other income + conversion) is modeled to stay below IRMAA Tier 1 each year. Conversion amount may vary based on that year&rsquo;s actual income.</td>
</tr>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Year 7, Age 69</td>
<td class="p-3 border border-border">$30,000</td>
<td class="p-3 border border-border">$45,000</td>
<td class="p-3 border border-border">22% federal</td>
<td class="p-3 border border-border">Approaching Social Security start (age 70). Modeling confirms that once SS begins (~$40,000/year taxable equivalent), the optimal conversion amount decreases significantly. Final full-bracket conversion year.</td>
</tr>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Age 70+: Social Security Begins</td>
<td class="p-3 border border-border">$40,000 SS (taxable portion) + investment income</td>
<td class="p-3 border border-border">Reduced or paused</td>
<td class="p-3 border border-border">Varies</td>
<td class="p-3 border border-border">Income rises meaningfully. Conversions may still occur in smaller amounts if bracket space remains, but the math is re-evaluated each year.</td>
</tr>
<tr class="odd:bg-background even:bg-muted/30">
<td class="p-3 border border-border font-medium">Age 73+: RMDs Begin</td>
<td class="p-3 border border-border">SS + RMD (potentially $60,000&ndash;$80,000+)</td>
<td class="p-3 border border-border">Likely minimal or none</td>
<td class="p-3 border border-border">24%&ndash;32% (illustrative)</td>
<td class="p-3 border border-border">RMDs from the (now smaller) traditional IRA are mandatory and taxable. Because conversions reduced the traditional IRA balance over years 1&ndash;7, RMDs are lower than they would have been. This is the long-term benefit of the strategy.</td>
</tr>
</tbody>
</table>
</div>

<p>The illustrative outcome: by converting roughly <strong>$360,000&ndash;$380,000 over seven years</strong> (hypothetical), this couple moves a meaningful portion of their pre-tax savings into a Roth IRA at the 22% federal bracket, before Social Security and RMDs would push that income into higher brackets. The traditional IRA balance at age 73 is smaller, which means lower mandatory distributions, and potentially lower Medicare premiums, throughout their 70s and 80s. The specific numbers for any individual will differ substantially based on their actual income, balances, state taxes, and life circumstances.</p>

<h2>Why Coordinated Planning and Tax Preparation Matter</h2>

<p>Roth conversion analysis is one of the clearest illustrations of why financial planning and tax preparation work best when they happen under the same roof.</p>

<p>A conversion decision is not simply a financial planning question (&ldquo;does the math work over 20 years?&rdquo;). It is also a tax preparation question that requires knowing your current-year AGI, your itemized vs. standard deduction, your capital gains, your MAGI relative to IRMAA thresholds, and your state income tax position, all simultaneously. Without the actual tax picture in front of them, a financial planner is estimating. Without the long-term projection, a tax preparer is optimizing only for this year.</p>

<p>At <strong>United Financial Planning Group</strong>, our team of <strong>CFP&reg; professionals, CPAs, and Enrolled Agents</strong> approaches Roth conversion analysis exactly this way. We are not relying on a generic planning calculator. We build multi-year conversion models using tax-return-level detail: your specific account balances, projected growth rates, expected income sources, IRMAA thresholds, NIIT exposure, and New York State tax impact, all modeled together so we can identify the optimal conversion amount for each year of the window.</p>

<p>Because our advisors work alongside our tax professionals, there are no &ldquo;surprises&rdquo; at tax time. The conversion amounts we plan in the spring are coordinated with your tax return in the winter. Adjustments can be made in real time as your income picture changes, something that is simply not possible when your financial planner and your accountant are in separate firms that communicate once a year, if at all.</p>

<p>We are <a href="/services/retirement-planning">fee-only and fiduciary</a>: we have no financial incentive to recommend a Roth conversion (or any other strategy) except that it is in your best interest. No commissions, ever.</p>

<h2>Is This the Right Time for You?</h2>

<p>The conversion window is time-limited by definition. Once RMDs begin at age 73, your annual taxable income rises mechanically and the conversion math changes. Once Social Security starts, your combined income pushes higher. Every year of inaction narrows the window.</p>

<p>The question is not whether Roth conversions are theoretically valuable, and for most pre-retirees with substantial traditional IRA balances, they are. The question is <em>how much to convert</em>, <em>in which years</em>, and <em>how to coordinate it</em> with the rest of your income, tax, and investment picture. That is where the real planning work happens.</p>

<p>If you are within five to ten years of retirement, or have already stopped working, this is the right time to have that analysis done properly. Learn more about our approach to <a href="/services/tax-planning">tax planning</a> and <a href="/services/retirement-planning">retirement planning</a>, or reach out directly.</p>

<h2>Schedule a Personalized Roth Conversion Analysis</h2>

<p>We invite you to schedule a complimentary conversation with our team at United Financial Planning Group. We serve clients in Hauppauge, Manhattan, Lake Success, and throughout New York, as well as clients nationwide who value the integrated planning approach.</p>

<p>In this conversation, we will review your current account structure, model your projected RMDs and Social Security income, identify your available conversion window, and assess whether a multi-year Roth conversion strategy fits your situation. There is no pressure and no obligation: just a clear-eyed look at whether this strategy makes sense for you.</p>

<p><a href="/contact">Contact United Financial Planning Group</a> to schedule your complimentary analysis. The window may be open longer than you think, but it will not stay open forever.</p>

<h2 id="disclosures">Disclosures</h2>

<p>This article is provided for general educational and informational purposes only and does not constitute personalized financial, tax, investment, or legal advice. Roth conversion analysis involves complex variables specific to each individual&rsquo;s income, tax bracket, account balances, state of residence, and long-term financial goals. Tax laws, Medicare premium schedules, IRMAA thresholds, and RMD rules are subject to change. The examples and scenarios described are for illustrative purposes only and should not be relied upon as a projection or guarantee of results. Please consult a qualified financial advisor and tax professional regarding your specific circumstances before making any decisions.</p>`,
  },
  {
    slug: "modern-guide-retirement-planning",
    title:
      "The Modern Guide to Retirement Planning: Integrating Wealth, Taxes, and Investments",
    date: "2026-06-30",
    category: "Retirement Planning",
    excerpt:
      "A comprehensive foundational guide to modern retirement planning. Learn how integrating financial planning, tax strategy, and investment management under one roof helps you build a secure, stress-free retirement.",
    author: "United Financial Planning Group",
    authorSlug: "gerry-barrasso",
    type: "blog",
    relatedServices: [
      "/services/financial-planning",
      "/services/tax-planning",
      "/services/investment-management",
    ],
    relatedSlugs: [
      "retirement-portfolio-strategies-market-downturns",
      "secure-retirement-investment-management",
      "why-fee-only-fiduciary-financial-planner",
    ],
    faqs: [
      {
        question: "What is the most important first step in retirement planning?",
        answer:
          "The most important first step is understanding your cash flow needs in retirement. Before choosing accounts or investments, you need a realistic estimate of your future expenses: housing, healthcare, travel, and daily living, so you can calculate the total savings required to fund your lifestyle without running out of money.",
      },
      {
        question: "What is a tax-efficient withdrawal sequence in retirement?",
        answer:
          "A tax-efficient withdrawal sequence means drawing down accounts in a specific order to minimize lifetime taxes. A common strategy is to first spend taxable brokerage accounts, then tax-deferred accounts like traditional IRAs and 401(k)s, and finally Roth accounts. However, the optimal sequence depends on your income level, tax bracket, and estate planning goals, which is why coordinated planning matters.",
      },
      {
        question: "What is sequence-of-returns risk and why does it matter?",
        answer:
          "Sequence-of-returns risk is the danger that poor investment returns early in your retirement (when you are making large withdrawals) can permanently deplete your portfolio, even if long-term average returns are fine. Managing this risk through asset allocation, a cash buffer, and flexible withdrawal strategies is one of the most critical elements of retirement investment planning.",
      },
      {
        question: "Should I do a Roth conversion before I retire?",
        answer:
          "For many pre-retirees, the years between retirement and age 73 (when Required Minimum Distributions begin) create a window of lower taxable income that is ideal for Roth conversions. Converting traditional IRA or 401(k) funds to a Roth during this window can reduce future RMDs, lower lifetime taxes, and leave a tax-free inheritance to heirs. Whether it makes sense for you depends on your specific tax situation.",
      },
    ],
    content: `<h2>The Changing Retirement Landscape</h2>

<p>Retirement planning has never been more complex, or more consequential. Americans are living longer than ever, with many retirees spending 25 to 30 years or more in retirement. At the same time, the rules governing taxes, Social Security, and retirement accounts continue to evolve, and financial markets remain unpredictable.</p>

<p>For decades, the traditional approach to retirement planning meant working with separate professionals: a financial planner here, an accountant there, and a stockbroker somewhere else. Each advisor worked in a silo, optimizing their own piece of the puzzle without a view of the whole. That fragmented model is no longer adequate for the complex financial realities most retirees face today.</p>

<p>At <strong>United Financial Planning Group</strong>, we believe that a truly secure retirement is built on three deeply interconnected pillars: <strong>integrated wealth and cash flow planning</strong>, <strong>tax-efficient accumulation and distribution</strong>, and <strong>active investment management</strong>. When these three pillars are coordinated under one roof, you avoid the costly gaps that siloed advice inevitably creates.</p>

<p>This guide walks you through each pillar and explains why the integrated approach makes all the difference.</p>

<h2>Pillar 1: Integrated Wealth &amp; Cash Flow Planning</h2>

<p>Every successful retirement plan starts with a fundamental question: <em>How much will I actually need?</em> The answer requires a detailed, honest look at your future life, not just a generic rule of thumb.</p>

<h3>Estimating Your Retirement Expenses</h3>

<p>Retirement spending does not follow a straight line. Early retirees (ages 60&ndash;70) often spend more as they travel, pursue hobbies, and enjoy their newfound freedom. Spending typically moderates in the mid-retirement years before rising again in later years as healthcare costs increase.</p>

<p>A thorough expense analysis should account for:</p>

<ul>
<li><strong>Essential living expenses:</strong> Housing, groceries, utilities, transportation, and insurance.</li>
<li><strong>Discretionary spending:</strong> Travel, dining, hobbies, and gifts to family.</li>
<li><strong>Healthcare and long-term care:</strong> One of the largest and most underestimated retirement costs, particularly for those who retire before Medicare eligibility at age 65.</li>
<li><strong>Taxes:</strong> Many retirees underestimate their tax burden. Withdrawals from traditional IRAs and 401(k)s are taxed as ordinary income, and Social Security benefits may be partially taxable.</li>
</ul>

<h3>Finding Your Retirement Number</h3>

<p>Once you know your annual spending target, you can work backward to determine the total portfolio size you need. A commonly used framework is the <strong>4% guideline</strong>, which suggests that a diversified portfolio can support annual withdrawals of approximately 4% of its initial balance with a high probability of lasting 30 years. If you need $100,000 per year from your portfolio, this implies a target portfolio of roughly $2.5 million.</p>

<p>However, the 4% guideline is a starting point, not a prescription. Your actual sustainable withdrawal rate depends on your asset allocation, the expected return environment, your flexibility to adjust spending during downturns, and how long you need the portfolio to last.</p>

<h3>Planning Your Lifetime Income Streams</h3>

<p>A complete retirement cash flow plan coordinates multiple income sources:</p>

<ul>
<li><strong>Social Security:</strong> Claiming strategies matter enormously. Delaying benefits from age 62 to age 70 can increase your monthly benefit by as much as 76%, providing a larger inflation-adjusted income for life.</li>
<li><strong>Pension or annuity income:</strong> If you have a defined benefit pension or are considering an annuity, the payout structure and its interaction with your other income sources must be carefully analyzed.</li>
<li><strong>Portfolio withdrawals:</strong> The amount, timing, and account source of your withdrawals have major tax implications, which brings us to Pillar 2.</li>
</ul>

<h2>Pillar 2: Tax-Efficient Wealth Accumulation &amp; Distributions</h2>

<p>Taxes are one of the largest expenses you will face in retirement, and they are one of the most controllable with proactive planning. The decisions you make about account types, Roth conversions, and withdrawal sequencing can save you tens of thousands of dollars over the course of your retirement.</p>

<h3>Understanding Your Account Types</h3>

<p>Different retirement accounts have fundamentally different tax treatments:</p>

<ul>
<li><strong>Traditional (pre-tax) accounts</strong> (401(k)s, 403(b)s, traditional IRAs): Contributions reduce your taxable income today, but every dollar withdrawn in retirement is taxed as ordinary income. Additionally, the IRS requires you to begin taking <strong>Required Minimum Distributions (RMDs)</strong> at age 73, whether you need the money or not.</li>
<li><strong>Roth accounts</strong> (Roth IRAs, Roth 401(k)s): Contributions are made with after-tax dollars, but qualified withdrawals in retirement are completely tax-free. Roth IRAs have no RMD requirements during the owner&rsquo;s lifetime, giving you greater control over your taxable income.</li>
<li><strong>Taxable brokerage accounts:</strong> Withdrawals are not taxed as ordinary income. Instead, you pay capital gains tax only on the growth, often at preferential long-term rates. These accounts also offer significant estate planning flexibility.</li>
</ul>

<h3>Managing Tax Brackets in Retirement</h3>

<p>One of the most powerful (and underused) tax planning strategies is <strong>bracket management</strong>: deliberately controlling how much taxable income you recognize in each year to avoid &ldquo;bracket creep.&rdquo;</p>

<p>For example, if your income in a given year falls in the 22% bracket and you have room before reaching the 24% bracket, you might take additional distributions from your traditional IRA to &ldquo;fill up&rdquo; the 22% bracket. This reduces your future RMDs and lowers the overall tax burden across your retirement years.</p>

<h3>Roth Conversions: The Pre-RMD Window</h3>

<p>The years between retirement and age 73 (when RMDs begin) often represent a unique, low-income window that is ideal for <strong>Roth conversions</strong>. By converting a portion of your traditional IRA to a Roth IRA during this window, you can:</p>

<ul>
<li>Reduce the size of future RMDs, which can push you into higher tax brackets in your 70s and 80s.</li>
<li>Create a pool of tax-free assets for retirement income and inheritance.</li>
<li>Reduce the taxation of Social Security benefits, which are calculated based on your &ldquo;combined income.&rdquo;</li>
<li>Potentially reduce Medicare Part B and D premiums, which are based on income (IRMAA surcharges).</li>
</ul>

<h3>Tax-Efficient Withdrawal Sequencing</h3>

<p>The order in which you draw from your accounts in retirement matters significantly. A common sequencing strategy is:</p>

<ol>
<li><strong>First,</strong> spend from taxable brokerage accounts (taking advantage of lower capital gains rates).</li>
<li><strong>Second,</strong> draw from tax-deferred accounts (traditional IRAs, 401(k)s) to manage bracket exposure.</li>
<li><strong>Third,</strong> preserve Roth accounts for as long as possible, allowing tax-free growth to compound.</li>
</ol>

<p>However, the optimal sequence is rarely this simple in practice. It must be customized based on your income sources, tax bracket each year, estate planning goals, and Medicare premium exposure.</p>

<h2>Pillar 3: Active Investment Management</h2>

<p>Even a perfectly designed financial and tax plan can be undermined by a poorly managed investment portfolio. In retirement, investment management takes on a different character than in the accumulation years: the stakes of a major loss are higher because you no longer have a paycheck to replenish your savings.</p>

<h3>Tailoring Your Asset Allocation</h3>

<p>Your asset allocation (the mix of stocks, bonds, and other assets in your portfolio) should reflect your time horizon, income needs, and risk tolerance. A common mistake is becoming too conservative too quickly, leaving your portfolio unable to keep pace with inflation over a 25- to 30-year retirement. Conversely, being too aggressive exposes you to the damaging effects of a market downturn in the early years of retirement.</p>

<p>A well-designed retirement portfolio typically balances:</p>

<ul>
<li><strong>Growth assets</strong> (equities) to combat inflation and fund long-term spending needs.</li>
<li><strong>Defensive assets</strong> (bonds, cash equivalents) to provide stability and fund near-term withdrawals without being forced to sell equities at depressed prices.</li>
<li><strong>Alternative or diversifying assets</strong> where appropriate, to reduce correlation with equity market swings.</li>
</ul>

<h3>Managing Sequence-of-Returns Risk</h3>

<p><strong>Sequence-of-returns risk</strong> is the single most underappreciated danger in retirement investing. If the market suffers a major decline in the first few years of your retirement (when your portfolio is at its largest and you are taking regular withdrawals), the damage can be permanent, even if the market eventually recovers.</p>

<p>Strategies to mitigate sequence-of-returns risk include:</p>

<ul>
<li><strong>A cash or short-term bond &ldquo;buffer&rdquo;:</strong> Maintaining one to three years of living expenses in low-risk assets so you never have to sell equities in a down market to meet income needs.</li>
<li><strong>Flexible withdrawal strategies:</strong> Being willing to reduce discretionary spending temporarily during a significant market decline.</li>
<li><strong>Bucketing strategies:</strong> Segmenting your portfolio into short-term, medium-term, and long-term &ldquo;buckets&rdquo; each invested appropriately for its time horizon.</li>
</ul>

<h3>Regular Rebalancing</h3>

<p>Over time, market movements will cause your portfolio&rsquo;s asset allocation to drift away from its targets. Without regular rebalancing, a portfolio that started as 60% equities and 40% bonds after a strong bull market could become 80% equities, far more risk than intended. Disciplined rebalancing keeps your risk profile aligned with your plan and, when done tax-efficiently, can also improve after-tax returns.</p>

<h2>Why the &ldquo;Under One Roof&rdquo; Philosophy Matters</h2>

<p>Reading through the three pillars above, you may have noticed how deeply they interact. Your asset allocation affects your tax situation. Your tax situation affects your withdrawal sequence. Your withdrawal sequence affects your Social Security strategy. Every decision in one pillar creates ripple effects in the others.</p>

<p>This is the core insight behind United Financial Planning Group&rsquo;s founding philosophy: <strong>Financial Planning, Tax, &amp; Investment Management Under One Roof.</strong></p>

<p>When your financial planner, tax professional, and investment manager are all separate, uncoordinated advisors, critical details fall through the cracks. The financial planner may not know about a large capital gain your accountant is expecting. The investment manager may not know that a Roth conversion is being planned this year. The accountant may not know how your portfolio&rsquo;s income interacts with your Medicare premiums.</p>

<p>Our integrated team (with in-house CFP&reg; professionals, CPAs, and investment managers) holds weekly strategy sessions and shares a complete picture of each client&rsquo;s financial life. Every recommendation is stress-tested across all three pillars before implementation.</p>

<p>The result is a retirement plan that is not just theoretically sound, but practically optimized for your taxes, your investments, and your life.</p>

<h2>Take the Next Step: A Retirement Readiness Review</h2>

<p>Whether retirement is 10 years away or right around the corner, now is the time to ensure your plan covers all three pillars, and that they are working together, not in isolation.</p>

<p>We invite you to schedule a <strong>complimentary Retirement Readiness Review</strong> with United Financial Planning Group. In this conversation, we will:</p>

<ul>
<li>Assess your current retirement savings trajectory and identify any gaps.</li>
<li>Review your tax situation for Roth conversion or bracket management opportunities.</li>
<li>Evaluate your investment portfolio for sequence-of-returns risk and allocation alignment.</li>
<li>Build a coordinated roadmap that integrates your wealth, tax, and investment strategy.</li>
</ul>

<p><a href="/contact">Contact United Financial Planning Group today</a> to schedule your complimentary review. A more secure, tax-efficient retirement starts with a conversation.</p>

<p><em>Disclosures: This article is intended for educational purposes only and does not constitute personalized financial, tax, or investment advice. Retirement planning involves complex decisions that depend on your individual circumstances. Please consult with a qualified financial and tax professional before making any decisions.</em></p>`,
  },
  {
    slug: "equity-compensation-planning-startup-employees",
    title: "Equity Compensation Planning for Startup Employees",
    date: "2026-06-27",
    updatedDate: "2026-06-29",
    category: "Equity Compensation",
    excerpt:
      "A comprehensive guide for startup employees on navigating ISOs, NSOs, RSUs, AMT, and concentration risk to build and protect wealth.",
    author: "United Financial Planning Group",
    type: "blog",
    relatedServices: [
      "/services/equity-compensation",
      "/services/tax-planning",
      "/services/financial-planning",
      "/services/investment-management",
    ],
    relatedSlugs: [
      "recession-2026-new-york-investors",
      "investment-management-strategies-high-net-worth",
      "why-fee-only-fiduciary-financial-planner",
    ],
    content: `<h2>Navigating the Wealth: Equity Compensation Planning for Startup Employees</h2>

<p>Joining a startup is an exciting venture. Beyond the mission and the fast-paced culture, one of the most compelling aspects of startup employment is <strong>equity compensation</strong>. Whether you are an early-stage employee or joining a late-stage scale-up, equity represents a unique vehicle for building life-changing wealth.</p>

<p>However, startup equity is also notoriously complex. Between <strong>ISOs, NSOs, RSUs, AMT, 83(b) elections, and liquidity constraints</strong>, it is easy to make costly mistakes that can erode your hard-earned gains.</p>

<p>At <strong>United Financial Planning Group</strong>, we specialize in integrating tax planning, investment management, and equity compensation under one roof. Here is our comprehensive guide on how startup employees can navigate their equity compensation to build and protect their wealth.</p>

<h2>1. Understand Your Equity Type</h2>

<p>The first step in equity compensation planning is knowing exactly what you hold. Startups generally grant equity in one of three forms:</p>

<h3>A. Incentive Stock Options (ISOs)</h3>

<p>ISOs are highly tax-advantaged but come with strict regulatory rules.</p>

<ul>
<li><strong>The Benefit:</strong> If you hold the shares for at least two years from the grant date and one year from the exercise date (known as a <strong>Qualifying Disposition</strong>), your gains are taxed at the lower <strong>Long-Term Capital Gains</strong> rate rather than your ordinary income tax rate.</li>
<li><strong>The Pitfall:</strong> When you exercise ISOs, the spread between the fair market value (the 409A valuation) and your strike price is treated as income for <strong>Alternative Minimum Tax (AMT)</strong> purposes. This can trigger a massive tax bill <em>before</em> you can actually sell your shares for cash.</li>
</ul>

<h3>B. Non-Qualified Stock Options (NSOs)</h3>

<p>NSOs are simpler than ISOs but are taxed more aggressively.</p>

<ul>
<li><strong>The Benefit:</strong> No AMT calculation is required.</li>
<li><strong>The Pitfall:</strong> When you exercise NSOs, the spread is immediately taxed as ordinary income, and your employer is required to withhold taxes (which may or may not cover your actual liability). Any subsequent growth is taxed as capital gains when you sell.</li>
</ul>

<h3>C. Restricted Stock Units (RSUs)</h3>

<p>Typically awarded by later-stage startups, RSUs are a promise to deliver shares once certain vesting conditions are met.</p>

<ul>
<li><strong>The Double-Trigger Pitfall:</strong> Many private startups use &ldquo;double-trigger&rdquo; RSUs. They vest only after you meet a time-based condition <em>and</em> the company goes through a liquidity event (like an IPO or acquisition). When that event occurs, all of your accumulated RSUs vest at once, potentially pushing you into the highest income tax bracket overnight.</li>
</ul>

<h2>2. Key Strategies for Private Startup Equity</h2>

<p>To maximize your wealth, you must proactively manage your equity before, during, and after vesting.</p>

<h3>The 83(b) Election (For Early-Stage Grants)</h3>

<p>If you receive stock options or restricted stock at a very early stage (when the 409A valuation is close to zero), you can file an <strong>83(b) election</strong> with the IRS within 30 days of the grant.</p>

<ul>
<li>This election allows you to pay taxes on the current value of the stock today (which is minimal) rather than when it vests in the future. All future growth is then taxed as capital gains.</li>
<li><strong>Warning:</strong> If the startup fails, you cannot recover the taxes paid upfront. It is a calculated risk that requires expert guidance.</li>
</ul>

<h3>The Exercise Strategy: Cash Flow &amp; AMT Planning</h3>

<p>Exercising stock options requires cash&mdash;both to pay the strike price and to cover potential tax liabilities (especially AMT for ISOs).</p>

<ul>
<li><strong>Early Exercise:</strong> Some startups allow you to exercise options before they vest. If paired with an 83(b) election, this can dramatically reduce your tax burden.</li>
<li><strong>Vesting Schedule Alignment:</strong> We help clients map out their exercise schedule to spread out AMT liability across multiple tax years, avoiding a single, overwhelming tax event.</li>
</ul>

<h2>3. Mitigating the &ldquo;Concentrated Position&rdquo; Risk</h2>

<p>One of the biggest financial planning challenges for startup employees is <strong>concentration risk</strong>. It is easy to become emotionally attached to the company you are helping to build, but having 50%, 80%, or even 100% of your net worth tied up in a single, illiquid stock is dangerous.</p>

<p>If the company thrives, you win big. But if the company struggles or fails, you lose both your primary income source and your investment portfolio.</p>

<h3>The 10% Rule of Thumb</h3>

<p>As a general rule, we advise clients to limit their exposure to any single stock to <strong>no more than 10% to 15% of their total net worth</strong>. Once your startup stock vests and has liquidity, implementing a disciplined, automated sell-off strategy (such as a 10b5-1 plan for executives) allows you to systematically diversify your wealth into a balanced, institutional-grade investment portfolio.</p>

<h2>4. How We Help: The United Financial Advantage</h2>

<p>Many financial advisors only look at your investments. Many tax professionals only look at your tax return.</p>

<p>At <strong>United Financial Planning Group</strong>, we believe that equity planning cannot be done in a vacuum. By bringing <strong>tax planning, investment management, and equity compensation</strong> under one roof, we provide an integrated strategy:</p>

<ol>
<li><strong>Tax Projection Modeling:</strong> We simulate ISO exercise scenarios to calculate your exact AMT exposure and determine the most cash-flow-efficient times to exercise.</li>
<li><strong>Liquidity Planning:</strong> We help you prepare for lock-up periods and execute post-IPO diversification plans.</li>
<li><strong>W-2 and Equity Optimization:</strong> We ensure your salary, bonus, and equity are fully optimized for your long-term personal wealth goals.</li>
</ol>

<h2>Ready to Optimize Your Startup Equity?</h2>

<p>Whether you hold ISOs, NSOs, or RSUs, a proactive plan is the difference between a massive tax bill and generational wealth.</p>

<p><a href="/contact"><strong>Schedule a complimentary equity consultation with our team today.</strong></a></p>

<p><em>Disclaimer: United Financial Planning Group is a registered investment advisor. This material is for educational purposes and does not constitute personalized tax or investment advice. Consult a tax professional regarding your specific situation.</em></p>`,
  },
  {
    slug: "recession-2026-new-york-investors",
    title: "Recession 2026: What New York Investors Should Actually Do",
    date: "2026-04-18",
    updatedDate: "2026-04-18",
    category: "Investment Management",
    excerpt:
      "A calm, considered look at recession risk in 2026: what history suggests, the costliest mistakes investors make, and the questions New York households should think through before reacting.",
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
    content: `<p>Recession concerns have moved to the front of the conversation in 2026. The questions we are hearing from clients and prospective clients (<em>Will there be a recession this year? Should I sell my stocks? How will tariffs affect my portfolio?</em>) are reasonable ones. Tariff policy, growth concerns, and persistent uncertainty about inflation and interest rates have made the path forward feel less predictable than it did even a year ago.</p>

<p>I have lived through the early-1990s recession, the dot-com bust, the 2008&ndash;2009 financial crisis, the 2020 pandemic shock, and the 2022 drawdown. Every cycle has its own narrative. The frameworks we have found most useful across those cycles have not been about predicting which narrative wins. They have been about controlling what is actually controllable, in the context of a written plan.</p>

<p>This piece is intended as a calm framework for thinking about recession risk in 2026, not a prediction. Whenever something here touches on a personal financial decision, the appropriate next step is a conversation with a qualified advisor about your specific situation.</p>

<h2>What &ldquo;recession&rdquo; actually means</h2>

<p>In the United States, a recession is formally dated by the <a href="https://www.nber.org/research/business-cycle-dating" target="_blank" rel="noopener noreferrer">Business Cycle Dating Committee of the National Bureau of Economic Research (NBER)</a>. The committee evaluates a broad set of indicators (including real personal income, employment, consumer spending, and industrial production) rather than relying on a single rule of thumb.</p>

<p>The popular shorthand of &ldquo;two consecutive quarters of negative GDP&rdquo; is not the official definition. It is also not how NBER decides. Official recession declarations are typically made <em>after</em> a recession has already begun, sometimes by many months. By the time a recession is named, markets have usually already reflected substantial information about it.</p>

<p>The practical implication for an investor is straightforward: by the time you are certain a recession has arrived, large portfolio reactions have historically been associated with poorer outcomes for many investors than disciplined inaction.</p>

<h2>What history suggests and what it cannot tell us</h2>

<p>Looking at U.S. equity markets across post-war recessions, a few observations have generally held. Per the <a href="https://www.nber.org/research/business-cycle-dating" target="_blank" rel="noopener noreferrer">NBER recession chronology</a> together with publicly available S&amp;P 500 historical return data:</p>

<ul>
<li>Equity drawdowns around recessions have been substantial. Bear markets (commonly defined as a peak-to-trough decline of 20% or more in a major index) have not been rare. They are an expected feature of long-term equity investing, not a malfunction.</li>
<li>U.S. equity markets have, over multi-year horizons, recovered from each post-war recessionary drawdown. The length of those recoveries has varied widely, and the historical record does not guarantee that any future cycle will follow the same pattern.</li>
<li>According to <a href="https://am.jpmorgan.com/us/en/asset-management/adv/insights/market-insights/guide-to-the-markets/" target="_blank" rel="noopener noreferrer">JPMorgan Asset Management&rsquo;s <em>Guide to the Markets</em></a>, in the 20-year period from January 2005 through December 2024, seven of the ten best trading days for the S&amp;P 500 occurred within two weeks of the ten worst days. Missing the ten best days during that period would have substantially reduced an investor&rsquo;s overall return. Strategies that try to step out and back in have, in that historical record, struggled to consistently capture those rebounds.</li>
</ul>

<p>None of this guarantees future outcomes. Past performance is not indicative of future results, and the next cycle does not have to look like any prior cycle. What history does provide is a baseline for setting expectations: meaningful drawdowns are normal, and reacting to them on conviction has, on average, been difficult to do profitably.</p>

<h2>The decision that quietly costs the most</h2>

<p>In our experience, the largest avoidable cost in a portfolio rarely comes from picking the &ldquo;wrong&rdquo; investment. It comes from the decision to abandon a long-term plan during a short-term drawdown and then re-enter the market after prices have recovered.</p>

<p>The gap between an investment&rsquo;s reported return and the return investors actually earn (popularized by financial author <a href="https://behaviorgap.com/" target="_blank" rel="noopener noreferrer">Carl Richards as the <em>behavior gap</em></a> and quantified annually by <a href="https://www.morningstar.com/lp/mind-the-gap" target="_blank" rel="noopener noreferrer">Morningstar&rsquo;s <em>Mind the Gap</em> study</a>) is driven by well-documented cognitive biases. <em>Loss aversion</em> (originally documented by psychologists Daniel Kahneman and Amos Tversky in their work on prospect theory) describes the tendency to feel losses more acutely than equivalent gains. <em>Recency bias</em> leads us to extrapolate the recent past. <em>Herding</em> leads us to take cues from the people around us.</p>

<p>Those biases are not character flaws. They are universal. Recognizing them in yourself is part of why a written plan exists in the first place, so that decisions made under pressure are constrained by decisions made calmly.</p>

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

<p>Money you expect to spend in the next 12 to 36 months (living expenses for a near-retiree, a planned home purchase, an upcoming tuition payment) generally is not well suited to a portfolio whose value can move significantly over short periods. Confirming that short-horizon needs are funded from short-horizon assets is one of the most important pre-recession exercises an investor can do.</p>

<h3>2. Asset allocation versus actual time horizon</h3>

<p>The appropriate equity allocation for a 35-year-old funding retirement in 30 years is generally different from the appropriate equity allocation for a 65-year-old funding the next ten years. Many portfolios drift over time as some assets outperform others. A periodic rebalancing review (based on the original written plan, not on the current headlines) helps keep risk aligned with purpose.</p>

<h3>3. Tax-aware decisions</h3>

<p>Drawdowns can create planning opportunities. Tax-loss harvesting in taxable accounts, where appropriate, can be used to offset realized gains or a limited amount of ordinary income under current federal rules. Roth conversion windows may look different when account values are temporarily lower. None of this is one-size-fits-all; each requires modeling against your projected income, brackets, and goals, and should be evaluated with a qualified tax professional. For New York residents, those calculations should account for state (and where applicable, city) tax exposure, not just federal.</p>

<h3>4. Diversification</h3>

<p>A diversified portfolio is not a guarantee against losses. It is a strategy designed to reduce the impact of any single position or asset class on the overall outcome. The goal is not to eliminate volatility, but to ensure that no single bad outcome can damage the plan beyond repair.</p>

<h3>5. Estate, beneficiary, and insurance basics</h3>

<p>Drawdowns are a useful prompt to confirm that beneficiary designations on retirement accounts are current, that wills and powers of attorney reflect current intent, and that life and disability insurance still match the family&rsquo;s actual needs. These are housekeeping items that have nothing to do with market direction and everything to do with whether a plan reflects current circumstances.</p>

<h2>What this means specifically for New York investors</h2>

<p>The financial picture for many of our Long Island and Manhattan clients has features that make the recession conversation different from the generic version you may read elsewhere.</p>

<ul>
<li><strong>High combined tax burden.</strong> New York&rsquo;s top marginal state income tax bracket sits among the highest in the country, and New York City residents pay an additional municipal income tax on top of that. A given pre-tax investment decision can have a meaningfully different after-tax outcome here than it would for a resident of a no-income-tax state.</li>
<li><strong>State and local tax deduction limits.</strong> Federal limitations on the deductibility of state and local taxes have meaningfully shaped itemized deduction strategy for many New York households since 2018, and the specifics of those limitations have been the subject of ongoing legislative attention. Coordinating charitable giving, large realizations, and Roth conversions with the current rules in mind is a meaningful planning lever, and a topic where current-year guidance from a tax professional matters.</li>
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
<li>Behavioral coaching during periods of volatility, not because clients lack discipline, but because a second set of eyes is genuinely useful when the headlines are loud.</li>
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
    updatedDate: "2026-07-18",
    category: "Investment Management",
    excerpt:
      "High-net-worth investment management is not just about picking the right funds. It requires a coordinated strategy across financial planning, tax, and investment decisions, with each piece working in sync. This guide breaks down the seven core strategies that distinguish sophisticated wealth management from generic advice, and explains how integrated planning under one roof changes the outcome.",
    author: "United Financial Planning Group",
    authorSlug: "gerry-barrasso",
    type: "blog",
    relatedServices: [
      "/services/investment-management",
      "/services/financial-planning",
      "/services/tax-planning",
      "/services/equity-compensation",
    ],
    relatedSlugs: [
      "passive-income-hnw-investment-management",
      "high-net-worth-financial-planning",
      "roth-conversion-strategy-pre-retirees",
    ],
    faqs: [
      {
        question: "What counts as high-net-worth for investment planning purposes?",
        answer:
          "The term high-net-worth (HNW) is used differently depending on context. The SEC defines a \u201cqualified client\u201d at $2.2 million in assets under management or $2.2 million in net worth. Many advisors informally use $1 million in investable assets as the threshold where personalized investment management meaningfully outpaces generic strategies. At that level and above, the tax complexity, concentrated position risk, estate coordination needs, and retirement income planning become complex enough that a coordinated, customized approach creates measurable value.",
      },
      {
        question: "How much does a high-net-worth investment strategy cost?",
        answer:
          "Investment management fees for high-net-worth individuals are typically structured as a percentage of assets under management (AUM), commonly ranging from 0.50% to 1.25% annually depending on the firm, the scope of services included, and the size of the portfolio. Fee-only advisors, who are compensated exclusively by you with no commissions, provide a transparent cost structure where the fee is your total advisory cost. Watch for hidden layering: advisory fees on top of high-expense-ratio funds can push your all-in cost above 1.5%, compounding against you over time. Ask any advisor for their all-in cost including fund expense ratios.",
      },
      {
        question: "Do I need a separate CPA and financial advisor?",
        answer:
          "Not necessarily. The traditional model, a financial planner here, an accountant there, is increasingly being replaced by integrated firms that house both capabilities under one roof. The reason this matters at the high-net-worth level is that tax and investment decisions are deeply intertwined: tax-loss harvesting, Roth conversions, equity compensation timing, and withdrawal sequencing all require knowing your real-time tax picture and your investment allocation simultaneously. When those professionals are siloed, critical coordination falls through the cracks. At United Financial Planning Group, our CFP® professionals, CPAs, and Enrolled Agents work on the same team so that your investment decisions and your tax situation are always in view together.",
      },
      {
        question: "What is tax-loss harvesting and how does it work for HNW investors?",
        answer:
          "Tax-loss harvesting is the practice of selling securities that have declined in value to realize a capital loss, which can offset taxable capital gains or up to $3,000 of ordinary income per year, with excess losses carried forward indefinitely. For high-net-worth investors with substantial taxable brokerage portfolios, systematic harvesting throughout the year (not just at year-end) can generate meaningful after-tax value, particularly during volatile markets. The harvested position is typically replaced with a similar but not substantially identical security to maintain market exposure while capturing the tax benefit. When your investment manager and tax advisor are working from the same data, harvesting opportunities can be identified and executed with real-time awareness of your overall tax picture.",
      },
      {
        question: "How should an executive with RSUs or stock options approach investment management?",
        answer:
          "Executives with equity compensation face a layer of complexity that a general investment strategy does not address: concentrated single-stock risk, vesting event tax exposure, and the interaction of equity income with their broader tax picture. RSUs are taxed as ordinary income at vesting; Incentive Stock Options (ISOs) create AMT exposure at exercise; Non-Qualified Stock Options (NQSOs) trigger ordinary income tax at exercise. Managing these alongside a diversified portfolio requires coordinating vesting schedules, option exercise timing, and tax bracket management across multiple years. An advisor without specific equity compensation experience will default to generic \u201cdiversify your concentrated position\u201d advice without a concrete, tax-efficient roadmap for how to get there.",
      },
      {
        question: "What is the difference between wealth preservation and growth in an investment strategy?",
        answer:
          "Wealth preservation strategies prioritize protecting existing capital and generating reliable income, typically through a heavier allocation to fixed income, short-duration bonds, and lower-volatility assets. Growth strategies accept more short-term volatility in exchange for higher long-term return potential, typically through a higher equity allocation. Most HNW investors need both orientations in their portfolio, balanced according to their time horizon, income needs, and risk tolerance. A common framework is to segment assets by purpose: near-term income needs funded by stable assets, long-term capital and legacy goals funded by growth assets. The right balance is not static; it should be revisited as your life circumstances and market conditions evolve.",
      },
    ],
    content: `<p>Managing significant wealth is not simply a matter of picking the right funds and waiting. At the high-net-worth level, investment management intersects constantly with tax planning, retirement income strategy, estate coordination, and in many cases, equity compensation complexity. When those pieces are managed in silos, each one optimized separately, gaps emerge that cost money and create risk. When they are coordinated under one roof, the strategy works as a system.</p>

<p>This guide covers the seven foundational strategies for high-net-worth investment management. Each section goes beyond the surface to explain the actual mechanics, common mistakes, and the places where integrated financial and tax planning changes the outcome.</p>

<h2>1. Start with a Comprehensive Financial Plan</h2>

<p>Before any investment decision is made, a <a href="/services/financial-planning">comprehensive financial plan</a> should frame the entire strategy. This is not a box-checking exercise. It is the foundation that determines how every other investment and tax decision gets made.</p>

<p>A financial plan at the high-net-worth level quantifies several things that generic investment management ignores: your actual income needs in retirement versus your growth targets, the tax liability profile of your current holdings, the interaction between your investable assets and any business ownership or equity compensation, your estate planning structure and how it affects titling and beneficiary designations, and your liquidity needs over different time horizons.</p>

<p>Many asset managers skip this step. They focus on managing the portfolio without understanding what the portfolio is actually supposed to accomplish. The result is an investment strategy that is technically competent but poorly calibrated: the right mix of funds for the wrong goals.</p>

<p>At United Financial Planning Group, founded by <strong>Gerry Barrasso, CFP&reg;, CPA, PFS</strong>, every investment relationship begins with a full financial planning engagement. Investment decisions are made in the context of a complete understanding of your tax picture, your income needs, your estate plan, and your risk tolerance. That sequence matters.</p>

<h2>2. Tailored Investment Strategies</h2>

<p>The phrase \u201ccustomized investment strategy\u201d is used by nearly every advisor. What it actually means in practice separates firms significantly.</p>

<p>A genuinely tailored strategy begins with a rigorous goal-setting process that distinguishes between assets needed for income in the near term, assets targeted for long-term growth, and assets designated for legacy or charitable purposes. Each pool has a different time horizon and a different risk profile, which should drive a different investment approach.</p>

<p>Beyond goals, true customization accounts for your tax situation. A high-income professional in the 37% federal bracket and subject to New York State tax has a very different after-tax return profile than the same person planning to retire to Florida in five years. Asset location decisions (which assets to hold in taxable accounts versus tax-deferred versus Roth accounts) can add meaningful after-tax return without changing the underlying investment selection at all.</p>

<p>Customization also means acknowledging what you already own. Many HNW investors arrive with concentrated equity positions, often from decades of employer stock accumulation or equity compensation. A strategy that ignores those positions and simply builds a generic diversified portfolio alongside them is not actually a coordinated strategy. A tailored plan assesses the tax cost of unwinding concentration, models a timeline for doing so, and integrates the transition with your income and tax planning each year.</p>

<h2>3. Diversification Across Asset Classes</h2>

<p>True diversification at the high-net-worth level goes beyond a standard 60/40 stock-bond portfolio. It means deliberate, tax-aware exposure across multiple asset classes and geographies, each chosen for a specific role in the portfolio.</p>

<p>The core building blocks for HNW investors typically include domestic equities (growth engine, highest long-term return potential), international developed-market equities (global diversification, partial currency exposure), emerging-market equities (higher-volatility growth with lower correlation to U.S. markets), fixed income across duration and credit quality (stability and income), and real estate investment trusts (REITs) for inflation-sensitive income and diversification from pure equity exposure.</p>

<p>Low-cost index funds are an efficient vehicle for most of these exposures. Broad-market index funds minimize transaction costs, keep capital gains distributions low (an important feature in taxable accounts), and avoid the performance drag that comes with high-expense active management. The focus shifts from manager selection to asset allocation precision and tax-efficient implementation.</p>

<p>A common mistake at the HNW level is over-diversifying into complexity: adding alternative funds, structured products, or hedge fund strategies that charge high fees without delivering proportional benefit. True diversification reduces risk through low correlation between holdings. Complexity for its own sake reduces transparency and increases costs without improving outcomes.</p>

<h2>4. Tax-Efficient Investing</h2>

<p>For high-net-worth investors, after-tax return is the only return that matters. Two portfolios with identical pre-tax performance can have dramatically different outcomes for investors in high brackets. <a href="/services/tax-planning">Tax planning</a> integrated directly into investment management is not a nice-to-have; it is a core driver of long-term wealth.</p>

<h3>Tax-Loss Harvesting</h3>

<p>Tax-loss harvesting is one of the most reliable sources of after-tax value for HNW investors with taxable accounts. When holdings decline in value, those losses can be realized and used to offset capital gains elsewhere in the portfolio or reduce ordinary income by up to $3,000 per year, with excess losses carried forward indefinitely. The harvested position is replaced by a similar (but not substantially identical) security so market exposure is maintained while the tax benefit is captured.</p>

<p>For investors in the highest federal brackets, a long-term capital gain that would otherwise be taxed at 23.8% (20% capital gains rate plus 3.8% Net Investment Income Tax) can instead be offset by a harvested loss, effectively creating a tax asset. Done systematically throughout the year rather than only at year-end, and coordinated with your actual tax position, harvesting can generate meaningful compounding benefit over time.</p>

<p>The key requirement is that your investment manager and tax advisor see the same data simultaneously. At United Financial Planning Group, our CFP&reg; professionals and CPAs work on the same team, so harvesting decisions are made with full awareness of your current-year tax picture, your capital gains exposure elsewhere, and your state tax situation, not in isolation.</p>

<h3>Asset Location</h3>

<p>Asset location is the discipline of placing specific types of investments in the account type where they are most tax-efficient. High-dividend-yielding assets and taxable bond funds belong in tax-deferred accounts (traditional IRAs, 401(k)s) where their income is not taxed annually. Growth-oriented equity index funds, which generate minimal distributions, are well-suited for taxable accounts where gains can be deferred indefinitely and eventually stepped up at death. Tax-free municipal bonds belong in taxable accounts, not in IRAs where their tax-exempt status provides no incremental benefit.</p>

<h3>Roth Conversion Strategy</h3>

<p>For HNW investors approaching retirement, <a href="/blog/roth-conversion-strategy-pre-retirees">Roth conversion planning</a> during the pre-RMD window (the years between retirement and age 73, when Required Minimum Distributions begin) is a powerful complement to tax-efficient investing. Converting traditional IRA funds to Roth at today&#39;s rates, before RMDs and Social Security push income higher, reduces future mandatory distributions and builds a pool of tax-free assets for retirement income and estate planning. Sizing those conversions correctly requires real-time awareness of your IRMAA exposure, state tax position, and investment portfolio all at once.</p>

<h3>Municipal Bonds and Donor-Advised Funds</h3>

<p>For investors in top tax brackets, the after-tax yield on high-quality municipal bonds frequently exceeds taxable equivalents when adjusted for federal and state income tax rates. Donor-advised funds (DAFs) allow appreciated securities to be contributed at fair market value (avoiding capital gains tax), generating an immediate charitable deduction while allowing the funds to be granted to charities over time.</p>

<h2>5. Risk Management</h2>

<p>Risk management in a high-net-worth portfolio involves more than choosing a conservative asset allocation. It means identifying and mitigating several categories of risk that are specific to significant wealth.</p>

<h3>Market Risk and Volatility</h3>

<p>A broad, index-based approach naturally diversifies away stock-specific risk, leaving only market-level exposure that cannot be diversified away. The disciplined approach is to size that market exposure appropriately for the investor&#39;s time horizon and income needs, and to maintain it through volatility rather than reacting to short-term market moves. Attempting to time the market consistently, getting out before declines and back in before recoveries, is a return-destroying strategy at any wealth level.</p>

<h3>Concentration Risk</h3>

<p>Concentrated single-stock positions are among the most significant and underappreciated risks in HNW portfolios. Executives and long-tenure employees often accumulate employer stock through 401(k) contributions, stock purchase plans, restricted stock, and option exercises over decades. A portfolio with 30%, 50%, or more concentrated in a single name has dramatically higher volatility and downside risk than its overall size suggests.</p>

<p>Unwinding concentration requires a tax-aware plan. Selling a large position with a low cost basis can generate a substantial capital gains tax bill. The transition strategy might involve systematic annual sales sized to fill bracket space efficiently, gifting appreciated shares to a DAF, charitable remainder trusts, or exchange funds in appropriate situations. The right approach depends on your cost basis, your tax bracket, your time horizon, and your estate plan, which is exactly why this work requires coordination across financial planning, tax, and investment management simultaneously.</p>

<p>Executives with <a href="/services/equity-compensation">equity compensation</a> (RSUs, ISOs, NQSOs) face an additional layer: new shares vesting every year that add to existing concentration. Managing the interplay between vesting tax events, option exercise timing, and portfolio diversification requires a firm that understands equity compensation mechanics at the tax level, not just the financial planning level.</p>

<h3>Sequence-of-Returns Risk in the Distribution Phase</h3>

<p>As HNW investors approach and enter retirement, the risk profile of the portfolio changes. In the accumulation phase, a market decline is a buying opportunity. In the distribution phase, a major early decline combined with ongoing withdrawals can permanently impair the portfolio&#39;s ability to fund a 25- to 30-year retirement.</p>

<p>Managing sequence-of-returns risk typically involves maintaining a cash or short-duration buffer funded by expected near-term withdrawals, so equities never need to be sold at depressed prices to fund living expenses. Flexible withdrawal strategies (taking less during down markets if possible) and a deliberately calibrated equity allocation for early retirement years all reduce this risk.</p>

<h2>6. Wealth Preservation vs. Growth</h2>

<p>The balance between wealth preservation and growth is not a one-time allocation decision. It evolves continuously as life circumstances, tax situations, and market conditions change.</p>

<p>Earlier in the accumulation phase, growth takes priority. A longer time horizon absorbs volatility and compounds returns. As retirement approaches, the calculus shifts: the portfolio needs to reliably fund income for potentially 30 or more years while also growing fast enough to outpace inflation, not an easy combination to optimize.</p>

<p>For most HNW pre-retirees and retirees, the practical framework involves segmenting assets by purpose and time horizon. Near-term income needs (the next two to three years of living expenses) are funded by stable assets: short-duration bonds, money market instruments, and cash equivalents. Medium-term needs (years three through ten) are funded by a balanced mix of fixed income and moderate-growth equities. Long-term assets (ten-plus years) and legacy capital are invested more aggressively for growth, accepting short-term volatility in exchange for long-term compounding.</p>

<p>This segmented approach, sometimes called a \u201cbucket strategy,\u201d also provides behavioral discipline. Seeing a dedicated short-term income pool funded removes the anxiety of watching equity markets decline in retirement, because the money needed in the near term is not in equities at all.</p>

<p>On the preservation side, trusts can play an important role. Irrevocable trusts may remove assets from the taxable estate, protecting them from estate taxes and creditors. Charitable remainder trusts provide income during your lifetime and leave a residual legacy to charity. Dynasty trusts, available in certain jurisdictions, can extend wealth protection across multiple generations. These structures are part of the investment management conversation because they affect how assets are titled, invested, and eventually distributed.</p>

<h2>7. Multi-Generational Wealth Planning</h2>

<p>Effective <a href="/services/investment-management">investment management</a> at the high-net-worth level cannot be separated from estate and multi-generational planning. The investment decisions made today determine the tax efficiency of the wealth eventually transferred to the next generation, and the estate plan determines the structure within which investments are managed.</p>

<h3>Trust Structures and Investment Management</h3>

<p>Trusts are not just estate planning tools; they are investment vehicles. A revocable living trust holds assets that pass outside probate and remain under the grantor&#39;s control during their lifetime. An irrevocable trust removes assets from the taxable estate but requires its own investment policy and governance structure. Charitable remainder trusts invest a contributed asset pool and generate income for the grantor (or named beneficiaries) during their lifetime, with the remainder going to charity. Each structure has different investment constraints, tax treatment, and beneficiary considerations.</p>

<p>Managing these trust assets in coordination with the personal portfolio requires a firm that understands the tax treatment at the trust level (trusts are taxed at compressed rates, reaching the top federal bracket at just $15,200 of income under current law) and can integrate trust and personal accounts into a cohesive overall allocation.</p>

<h3>Step-Up in Basis and Estate Tax Planning</h3>

<p>One of the most valuable (and most commonly overlooked) tools in multi-generational wealth planning is the step-up in cost basis at death. When appreciated assets pass through an estate, the cost basis is reset to fair market value at the date of death. This eliminates the embedded capital gains tax on those assets entirely. For HNW families with substantial appreciated holdings, the decision of which assets to hold until death (to benefit from the step-up) versus which to sell during life (to fund current income or Roth conversions) is a significant after-tax wealth optimization lever.</p>

<p>Estate tax considerations add another layer. For estates above the current federal exemption thresholds, strategies including gifting programs, irrevocable life insurance trusts (ILITs), grantor retained annuity trusts (GRATs), and qualified personal residence trusts (QPRTs) may help reduce the estate tax burden. These strategies interact directly with the investment portfolio and require coordinated legal, tax, and financial planning to implement correctly.</p>

<h3>Family Governance</h3>

<p>For families with substantial wealth, formal governance structures, investment policy statements, family meetings, and the early financial education of the next generation, can be as important as the investment strategy itself. Wealth that is built over a generation and dissipated in the next is a common pattern. Developing shared values, financial literacy, and an articulated philosophy for the family&#39;s wealth purpose helps ensure that the investment and estate planning work translates into lasting benefit.</p>

<h2>Why Coordination Under One Roof Changes the Outcome</h2>

<p>Reading through these seven strategies, you may have noticed how frequently they intersect. Tax-loss harvesting requires knowing your capital gains picture. Roth conversion strategy requires knowing your projected income. Concentration risk management requires understanding your equity compensation vesting schedule. Multi-generational planning requires knowing your estate tax exposure. Every investment decision creates a tax ripple, and every tax decision affects the investment portfolio.</p>

<p>This is why the fragmented advisory model, a financial planner in one firm, an accountant in another, a broker managing the portfolio separately, reliably underdelivers for HNW investors. Critical coordination falls through the cracks not because any individual is incompetent, but because no one holds the full picture simultaneously.</p>

<p>United Financial Planning Group was built around a different model: <strong>CFP&reg; professionals, CPAs, and Enrolled Agents working together under one roof.</strong> As a <strong>fee-only, fiduciary firm</strong>, we are compensated entirely by our clients, with no commissions and no product-related incentives. Every recommendation is made in your interest, full stop.</p>

<p>That integrated structure means tax planning is not a separate annual engagement. It is embedded in how we manage your portfolio, coordinate your equity compensation, size your Roth conversions, and build your retirement income plan. Your investment decisions are informed by your real tax picture, and your tax decisions are informed by your investment allocation, updated and coordinated throughout the year, not reconciled once at tax time.</p>

<p>Learn more about our approach to <a href="/services/investment-management">investment management</a>, <a href="/services/tax-planning">tax planning</a>, and <a href="/services/financial-planning">financial planning</a>, or explore <a href="/why-united">why clients choose United Financial Planning Group</a>.</p>

<h2>Ready to Build a Coordinated Investment Strategy?</h2>

<p>If you are managing significant wealth, within five to ten years of retirement, dealing with equity compensation complexity, or simply recognizing that your current advisory model is not giving you the coordinated picture you need, we invite you to schedule a complimentary conversation with our team.</p>

<p>We serve clients in Hauppauge, Manhattan, Lake Success, and throughout New York, as well as clients nationwide who value the integrated planning approach.</p>

<p><a href="/contact">Contact United Financial Planning Group</a> to schedule your complimentary consultation. The right investment strategy is not just about the portfolio. It is about the entire financial picture, coordinated and working together.</p>

<h2 id="disclosures">Disclosures</h2>

<p>This article is provided for general educational and informational purposes only and does not constitute personalized financial, tax, investment, or legal advice. Investment management involves risks, including the possible loss of principal. Tax strategies, estate planning structures, and investment approaches should be evaluated based on your individual circumstances. Tax laws and regulations are subject to change. Examples and scenarios described are for illustrative purposes only. Please consult a qualified financial advisor and tax professional regarding your specific situation before making any decisions.</p>`,
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
    updatedDate: "2026-07-18",
    category: "Financial Planning",
    excerpt:
      "Most advisor interviews skip the questions that matter most. Start with two: how they're compensated, and how their firm is structured. Then, if you're an executive, engineer, or professional within a decade of retirement, add these targeted questions about tax coordination, equity compensation, and retirement sequencing, the areas where the right advisor separates from the rest.",
    author: "United Financial Planning Group",
    authorSlug: "gerry-barrasso",
    type: "blog",
    relatedServices: [
      "/services/financial-planning",
      "/services/investment-management",
      "/services/tax-planning",
      "/services/retirement-planning",
      "/services/equity-compensation",
    ],
    relatedSlugs: [
      "why-fee-only-fiduciary-financial-planner",
      "pre-retirement-tax-transition-managing-brackets-rmds",
      "roth-conversion-strategy-pre-retirees",
    ],
    faqs: [
      {
        question: "What questions should I ask a financial advisor about fees?",
        answer:
          "Ask three specific questions: (1) Are you fee-only, fee-based, or commission-based? (2) What is your all-in annual cost to me, including advisory fees, fund expense ratios, and any transaction costs? (3) Do you or your firm receive any compensation, including 12b-1 fees, referral fees, or revenue-sharing arrangements, from any product you recommend? A fee-only advisor should answer all three clearly and without hesitation. If you get vague answers or the advisor conflates \u201cfee-based\u201d with \u201cfee-only,\u201d that is a meaningful red flag.",
      },
      {
        question: "How do I know if a financial advisor is a fiduciary?",
        answer:
          "The clearest confirmation comes from the advisor\u2019s Form ADV Part 2A, which is a legally required disclosure document that must describe the advisor\u2019s fiduciary duty, conflicts of interest, and compensation. You can request it directly from the advisor or find it via the SEC\u2019s Investment Adviser Public Disclosure (IAPD) database at adviserinfo.sec.gov. Look for language stating the firm is a Registered Investment Adviser (RIA) and is held to a fiduciary standard at all times. Be cautious: some advisors claim to be fiduciaries only in certain contexts but revert to a \u201csuitability\u201d standard when selling products. A fee-only, RIA-registered advisor is the cleaner structure.",
      },
      {
        question: "What is the difference between fee-only and fee-based?",
        answer:
          "Fee-only means the advisor is compensated exclusively by you, through flat fees, hourly rates, or a percentage of assets under management, and never earns commissions or product-related compensation. Fee-based means the advisor charges you a fee AND can also earn commissions or other compensation from third parties for recommending certain products. The word \u201cbased\u201d is the tell. Fee-based advisors are held only to a suitability standard when in their broker-dealer capacity, not a fiduciary one. The distinction matters most when the advisor is recommending insurance products, annuities, or actively managed funds where commission payouts are significant.",
      },
      {
        question: "Should I ask a financial advisor about their credentials?",
        answer:
          "Yes, and look beyond the letters. The CFP\u00ae (Certified Financial Planner) designation requires completing a comprehensive curriculum, passing a rigorous exam, accumulating relevant experience, and maintaining ongoing continuing education; it is the most recognized standard for comprehensive financial planning. If tax planning is important to you, a CPA (Certified Public Accountant) or Enrolled Agent (EA) credential on the team is highly relevant, because those professionals can actually prepare your returns and model your tax picture with real-return-level precision, not just estimates. Ask where those professionals sit: on the same team or outsourced?",
      },
      {
        question: "What should I ask a financial advisor about their investment approach?",
        answer:
          "Ask how they construct portfolios, what funds or vehicles they typically use, and what their average all-in investment cost is per year. Ask whether they use proprietary products. Ask how they decide when to rebalance and how that interacts with your tax situation. Ask how they handled client portfolios during a major market drawdown. For pre-retirees in particular, ask about sequence-of-returns risk and how they would structure withdrawals if markets decline early in your retirement. The answer tells you a great deal about how integrated their investment and planning thinking actually is.",
      },
      {
        question: "How many questions should I ask when interviewing a financial advisor?",
        answer:
          "Focus on quality, not quantity. Two foundational questions, compensation model and firm structure, will reveal whether an advisor\u2019s incentives are aligned with yours. From there, three to five deeper questions tailored to your situation (equity compensation, tax coordination, retirement sequencing) will tell you whether the advisor has the specific expertise your plan requires. Most initial conversations run 30 to 45 minutes; a well-prepared advisor should be able to answer clearly without deflecting.",
      },
    ],
    content: `<h2>Why Most Advisor Interviews Start With the Wrong Questions</h2>

<p>When people interview a financial advisor for the first time, they usually ask about investment performance, market views, or how the advisor approaches retirement income. These are reasonable topics. But they are not the right starting point.</p>

<p>Before any conversation about strategy makes sense, you need to know two things: how the advisor gets paid, and what structure they operate under. Those two answers determine whether the advisor is working for you or for someone else, and they will shape every recommendation you ever receive from that person.</p>

<p>This post covers those two foundational questions, explains what a good answer looks like and what constitutes a red flag, and then adds the follow-up questions that matter most if you are an executive, engineer, or senior professional within ten years of retirement, the group that has the most to gain (or lose) from getting this decision right.</p>

<h2>The 2 Foundational Questions to Ask Any Financial Advisor</h2>

<h3>Question 1: What Is Your Compensation Model?</h3>

<p>This is the most important question you can ask, and the answer tells you everything about whose interests the advisor is structurally required to prioritize.</p>

<p>There are three compensation models in the industry, and they are not interchangeable.</p>

<h4>Commission-Based Advisors</h4>

<p>A commission-based advisor earns income when you buy a financial product: a mutual fund, annuity, life insurance policy, or other investment. The commission comes from the product manufacturer, not from you directly. This model creates a direct conflict of interest: the advisor has a financial incentive to recommend products that generate higher commissions, regardless of whether those products are the best fit for your situation.</p>

<p><strong>What a red flag looks like:</strong> An advisor who leads with annuity recommendations, proprietary mutual funds with high expense ratios, or whole life insurance early in the relationship, before they have a complete picture of your financial life, is likely operating in this model even if they do not disclose it upfront.</p>

<p><strong>What it costs you:</strong> Some products sold on commission carry front-load fees of up to 5%, meaning a $1 million investment immediately loses $50,000 at purchase. High-cost products also create a drag over time: an expense ratio of 1.5% versus 0.10% on a $1 million portfolio compounds to tens of thousands of dollars in reduced returns over a decade.</p>

<h4>Fee-Based Advisors</h4>

<p>A fee-based advisor charges you a fee (often a percentage of assets under management) AND can also earn commissions or other third-party compensation from product sales. This is a hybrid model, and the word &ldquo;based&rdquo; is the critical distinction from &ldquo;fee-only.&rdquo;</p>

<p>Fee-based advisors are held to a &ldquo;suitability&rdquo; standard when recommending products in their broker-dealer capacity. Suitability means the product must be a reasonable fit; it does not require the advisor to recommend the <em>best</em> available option. This is a materially weaker standard than a fiduciary obligation.</p>

<p><strong>What a red flag looks like:</strong> Hearing the phrase &ldquo;we are fee-based&rdquo; positioned as though it were equivalent to &ldquo;fee-only.&rdquo; The two are meaningfully different, and an advisor who blurs that distinction, intentionally or not, is worth scrutinizing further.</p>

<h4>Fee-Only Advisors</h4>

<p>A fee-only advisor is compensated exclusively by you. They do not earn commissions, referral fees, 12b-1 fees, or any other product-related compensation. Their only financial incentive is to do work that you value enough to continue paying for.</p>

<p>Fee-only advisors are held to the <strong>fiduciary standard</strong> at all times, a legal requirement to act in your best interests, disclose conflicts of interest, and recommend what is genuinely best for your situation, not what generates the most revenue for the advisor.</p>

<p><strong>What a good answer looks like:</strong> &ldquo;We are fee-only. We are compensated entirely by our clients. We do not accept commissions, referral fees, or any other third-party compensation. Our ADV Part 2A discloses this in detail.&rdquo; A confident, direct answer. No hedging, no qualifying language about &ldquo;in most circumstances.&rdquo;</p>

<p><strong>What a red flag looks like:</strong> A vague or evasive answer. Anything that sounds like &ldquo;we are primarily fee-based&rdquo; or &ldquo;we receive compensation in a variety of ways depending on the service.&rdquo; Transparency here should be effortless.</p>

<h3>Question 2: Under What Type of Business Structure Do You Operate?</h3>

<p>Compensation model and business structure are related but distinct. Understanding the structure tells you what regulatory framework governs the advisor&rsquo;s conduct, and whether there is an institutional interest in conflict with yours.</p>

<h4>Broker-Dealers</h4>

<p>Broker-dealers are typically larger firms, including wirehouses, regional broker-dealers, and banks offering investment products (think UBS, Ameriprise, Northwestern Mutual, or the investment arms of major banks). In a broker-dealer model, the firm creates product shelves, sales incentives, and internal pressure structures that can influence which products advisors recommend. Advisors may push proprietary products that carry higher margins for the firm or participate in revenue-sharing arrangements with fund companies.</p>

<p>The regulatory standard at a broker-dealer is &ldquo;best interest&rdquo; under Regulation Best Interest (Reg BI), an improvement over pure suitability but still meaningfully different from a true fiduciary obligation. Conflicts of interest are disclosed, but they are permitted to exist.</p>

<p><strong>What it costs you:</strong> Beyond explicit fees, clients at broker-dealers are often steered toward higher-cost investment vehicles. Some clients do not realize they are paying 1% or more annually in fund fees on top of the advisor fee, a total cost that, on a $2 million portfolio, can exceed $30,000 per year.</p>

<h4>Registered Investment Advisers (RIAs)</h4>

<p>A Registered Investment Adviser is a firm registered with the SEC (or state regulators for smaller firms) that is legally bound to act as a fiduciary for its clients at all times. RIAs do not have proprietary product shelves in the traditional sense, which eliminates one significant category of structural conflict.</p>

<p>That said, not all RIAs are equal. Some RIA firms are dually registered as broker-dealers, which means they can still sell products on commission through their broker-dealer license. The RIA registration alone does not guarantee fee-only practices, which is why the compensation model question (Question 1) is equally critical.</p>

<p><strong>What a good answer looks like:</strong> &ldquo;We operate as a Registered Investment Adviser. We are not affiliated with a broker-dealer, and we do not have a proprietary product shelf. Our Form ADV is publicly available on the SEC&rsquo;s IAPD database.&rdquo;</p>

<h4>How to Verify: Check the ADV</h4>

<p>Every RIA is required to file a Form ADV, which is publicly available at <a href="https://adviserinfo.sec.gov" target="_blank" rel="noopener noreferrer">adviserinfo.sec.gov</a>. Part 2A (the &ldquo;brochure&rdquo;) describes the firm&rsquo;s services, fees, business practices, and conflicts of interest in plain language. Look specifically for the compensation section and the conflicts of interest disclosure. A legitimate fee-only RIA will have straightforward language in both sections.</p>

<p>You can also verify fee-only status through professional membership organizations: <a href="https://www.napfa.org" target="_blank" rel="noopener noreferrer">NAPFA</a>, the Garrett Planning Network, and XYPN all require their members to maintain fee-only practices as a condition of membership.</p>

<h2>Additional Questions for Pre-Retirees: Executives, Engineers, and Professionals with Equity Compensation</h2>

<p>If you are an executive, senior engineer, or professional within five to ten years of retirement, particularly one with meaningful equity compensation in the form of RSUs, stock options, or a concentrated employer stock position, the two foundational questions are necessary but not sufficient. You need to probe for specific capabilities that most general financial advisors simply do not have.</p>

<p>The following questions are designed for that profile. They are not hypothetical edge cases; they are the planning intersections where the quality of your advisor&rsquo;s answer has a six-figure impact on your outcomes.</p>

<h3>Question 3: How Do You Coordinate Tax Planning with Investment and Retirement Decisions?</h3>

<p>This question has a right answer and a lot of wrong ones. The wrong answer sounds like: &ldquo;We work with your accountant and share information at year-end.&rdquo; That describes a fragmented approach where two professionals optimize their respective pieces without anyone holding the full picture simultaneously.</p>

<p>The right answer describes a coordinated process. For pre-retirees, the decisions that matter most, including Roth conversions, tax-loss harvesting, capital gains management, equity compensation timing, and RMD planning, require knowing your current-year AGI, your projected income for the next several years, your marginal state tax rate, and your investment allocation all at the same time. A financial planner who does not have direct access to your real tax data is estimating. An accountant who is not aware of the investment decisions being made is optimizing blindly for this year.</p>

<p><strong>What a good answer looks like:</strong> &ldquo;Our planning and tax work happen on the same team. We model your tax picture using actual return-level data and build multi-year projections that account for Roth conversion opportunities, IRMAA thresholds, and your equity compensation vesting schedule. The investment decisions we make are informed by that tax picture, and vice versa.&rdquo;</p>

<p><strong>What a red flag looks like:</strong> Any answer that positions tax planning as something handled by a separate firm, communicated annually, or addressed reactively at filing time. For pre-retirees, that approach leaves the most important planning windows, the years before RMDs begin at age 73, underused.</p>

<p>At United Financial Planning Group, our team includes <strong>CFP&reg; professionals, CPAs, and Enrolled Agents</strong> working together under one roof. Tax planning is not a separate engagement; it is embedded in how we build and manage your plan.</p>

<h3>Question 4: How Do You Handle RSUs, Stock Options, and Concentrated Stock Positions?</h3>

<p>Equity compensation is one of the most tax-complex areas in personal finance, and it is one where a general financial advisor without specific experience will frequently give you incomplete guidance.</p>

<p>The tax treatment differs substantially depending on the type of equity compensation: Restricted Stock Units (RSUs) are taxed as ordinary income at vesting; Incentive Stock Options (ISOs) trigger alternative minimum tax (AMT) exposure when exercised; Non-Qualified Stock Options (NQSOs) are taxed as ordinary income at exercise; and employer stock held in a 401(k) may qualify for Net Unrealized Appreciation (NUA) treatment at distribution. These are not interchangeable, and making the wrong decision, such as exercising ISOs in the wrong year or ignoring NUA, can cost tens of thousands of dollars in unnecessary taxes.</p>

<p><strong>What a good answer looks like:</strong> The advisor should walk you through the specific tax treatment for each type of equity compensation you hold, describe how they model vesting events against your other income sources, explain how they approach the timing of option exercises relative to your AMT exposure and regular income bracket, and outline a strategy for managing concentration risk in your employer stock without triggering an avoidable tax event.</p>

<p><strong>What a red flag looks like:</strong> Generic answers about &ldquo;diversification&rdquo; without a clear framework for the tax mechanics. If the advisor cannot distinguish between the tax treatment of RSUs versus ISOs, or does not mention AMT in the context of Incentive Stock Options, you are likely talking to someone without deep equity compensation experience. Ask specifically: &ldquo;Can you walk me through how you would handle the exercise of my ISOs given my projected income this year?&rdquo;</p>

<h3>Question 5: How Will You Sequence My Retirement Income and Manage the Years Before RMDs Begin?</h3>

<p>The years between your retirement date and age 73, when Required Minimum Distributions from traditional IRAs and 401(k)s become mandatory, are often the most consequential tax-planning window of your financial life. Income is temporarily lower, brackets are more forgiving, and every year of inaction narrows the opportunity.</p>

<p>This period is where decisions about Roth conversions, Social Security claiming age, account withdrawal sequencing, and capital gains realization are made. A well-coordinated strategy during this window can reduce your lifetime tax burden by hundreds of thousands of dollars. A reactive one can leave you in higher brackets at 73 than you needed to be, paying larger Medicare premium surcharges (IRMAA) and facing larger mandatory distributions than the ones you could have avoided.</p>

<p><strong>What a good answer looks like:</strong> The advisor should be able to describe, in concrete terms, how they model the pre-RMD window: what bracket space is available each year, how Roth conversion amounts are sized to stay below IRMAA thresholds, how Social Security claiming interacts with your conversion strategy, and how your investment portfolio is structured to fund living expenses during this window without forcing unnecessary taxable events.</p>

<p><strong>What a red flag looks like:</strong> An answer that treats Roth conversions as a binary yes/no decision, or that does not mention IRMAA. The IRMAA surcharge, Medicare&rsquo;s income-related premium adjustment, is one of the sharpest cliffs in pre-retirement planning. A Roth conversion that exceeds an IRMAA threshold by even $1 can trigger thousands of dollars in additional Medicare premiums two years later. Any advisor working with pre-retirees should be able to explain this without prompting.</p>

<h2>How to Evaluate the Answers You Receive</h2>

<p>A few principles for assessing what you hear in any advisor interview:</p>

<ul>
<li><strong>Specificity beats enthusiasm.</strong> An advisor who answers with concrete examples and frameworks knows the subject. An advisor who answers with warm language about &ldquo;holistic planning&rdquo; and &ldquo;your unique situation&rdquo; is stalling.</li>
<li><strong>Good advisors welcome scrutiny.</strong> If an advisor becomes defensive or vague when you ask about compensation or credentials, that is telling. A fee-only fiduciary has nothing to hide and should be able to answer your questions directly and without qualifications.</li>
<li><strong>Verify, do not just trust.</strong> Pull the Form ADV. Check the NAPFA directory. Confirm credentials at cfp.net for CFP&reg; certification, verify CPA licensure with the state board, and check EA status with the IRS directory. These checks take ten minutes and eliminate a significant amount of uncertainty.</li>
<li><strong>Assess the team, not just the individual.</strong> For complex financial situations, including equity compensation, pre-retirement tax planning, and coordinated investment and tax management, the quality of the team around the lead advisor matters as much as the advisor themselves. Find out who handles the tax work, whether those professionals are in-house or outsourced, and how frequently they coordinate.</li>
</ul>

<h2>What Integrated Planning Looks Like in Practice</h2>

<p>The advisors who do this work best are the ones who do not separate the questions. Your compensation structure, your equity vesting schedule, your Roth conversion window, and your Medicare premium exposure are not independent problems; they interact in ways that require a single coordinated view to optimize.</p>

<p>At United Financial Planning Group, we are <a href="/services/financial-planning">fee-only and fiduciary</a>: no commissions, no product sales, no outside compensation. Our team of <strong>CFP&reg; professionals, CPAs, and Enrolled Agents</strong> works together on the same plan, not in parallel at separate firms. That structure means the tax picture is never an afterthought, and the investment decisions we make are always informed by what they mean to your actual tax return.</p>

<p>If you are interviewing advisors and want a point of comparison, we are happy to have a straightforward conversation about how we work and whether it fits your situation.</p>

<p><a href="/contact">Schedule a complimentary conversation</a>, or learn more about our approach to <a href="/services/financial-planning">integrated financial planning</a>, <a href="/services/tax-planning">tax planning</a>, and <a href="/services/equity-compensation">equity compensation planning</a>.</p>

<h2 id="disclosures">Disclosures</h2>

<p>This article is provided for general educational and informational purposes only and does not constitute personalized financial, tax, investment, or legal advice. The descriptions of advisor compensation models and regulatory standards reflect general industry practices and are provided for informational purposes; always verify current regulatory requirements and individual firm disclosures directly. References to fee-only status, fiduciary obligations, and equity compensation tax treatment are general in nature and may not reflect recent regulatory changes. Consult a qualified financial advisor and tax professional regarding your specific circumstances before making any decisions.</p>`,
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
    slug: "pre-retirement-tax-transition-managing-brackets-rmds",
    title:
      "The Pre-Retirement Tax Transition: Managing Brackets Between Career and RMDs",
    date: "2026-06-29",
    category: "Tax Planning",
    excerpt:
      "The years between retirement and age 73&mdash;when Required Minimum Distributions begin&mdash;are a critical tax-planning window. Learn how tactical Roth conversions, IRMAA management, and Qualified Charitable Distributions can dramatically reduce your lifetime tax burden.",
    author: "United Financial Planning Group",
    authorSlug: "gerry-barrasso",
    type: "blog",
    relatedServices: [
      "/services/tax-planning",
      "/services/retirement-planning",
      "/services/financial-planning",
      "/services/investment-management",
    ],
    relatedSlugs: [
      "modern-guide-retirement-planning",
      "retirement-portfolio-strategies-market-downturns",
      "secure-retirement-investment-management",
    ],
    faqs: [
      {
        question: "When do Required Minimum Distributions begin?",
        answer:
          "Under the SECURE 2.0 Act, the age at which Required Minimum Distributions (RMDs) must begin is 73 for individuals who turn 72 after December 31, 2022. The RMD age is scheduled to increase to 75 for individuals who turn 74 after December 31, 2032. RMDs apply to traditional IRAs, SEP IRAs, SIMPLE IRAs, and most employer-sponsored plans including traditional 401(k)s and 403(b)s. Roth IRAs are not subject to RMDs during the account owner&rsquo;s lifetime.",
      },
      {
        question: "What is the tax gap and why is it a planning opportunity?",
        answer:
          "The \u201ctax gap\u201d refers to the period between when someone retires and when their Required Minimum Distributions begin at age 73. During this window, many retirees have significantly lower taxable income than they did during their working years. They are no longer receiving a salary, Social Security may not yet have begun, and RMDs have not started. This creates an opportunity to take advantage of lower tax brackets by doing Roth conversions, harvesting capital gains at preferential rates, or otherwise moving money out of tax-deferred accounts at relatively low tax cost.",
      },
      {
        question: "What is IRMAA and how does it affect Medicare premiums?",
        answer:
          "IRMAA stands for Income-Related Monthly Adjustment Amount. It is a surcharge added to Medicare Part B and Part D premiums for beneficiaries whose income exceeds certain thresholds. Medicare uses your income from two years prior (e.g., your 2024 income affects your 2026 Medicare premiums). The surcharges can be significant: at the highest income brackets, Part B premiums can more than triple compared to the base rate. Because IRMAA is calculated on Modified Adjusted Gross Income (MAGI), Roth conversions in the pre-retirement tax gap years can inadvertently trigger or increase IRMAA in retirement. This must be carefully modeled.",
      },
      {
        question: "What is a Qualified Charitable Distribution?",
        answer:
          "A Qualified Charitable Distribution (QCD) allows IRA owners who are age 70\u00bd or older to transfer up to $105,000 per year (indexed for inflation after 2023) directly from their IRA to a qualified charity. The QCD counts toward the IRA owner&rsquo;s RMD for the year but is excluded from their taxable income. This is more tax-efficient than taking an RMD and then donating cash, because the QCD exclusion reduces Adjusted Gross Income directly&mdash;which can lower Social Security taxation, reduce IRMAA exposure, and keep the donor in a lower tax bracket.",
      },
    ],
    content: `<h2>The Pre-Retirement Tax Window: The Most Important Planning Period Most People Ignore</h2>

<p>For most Americans, the years between retirement and age 73 represent the single most important&mdash;and most underutilized&mdash;tax planning opportunity of their financial lives.</p>

<p>During your working years, tax planning is largely reactive. Your salary is fixed, your employer withholds taxes automatically, and your ability to shift income between years is limited. In retirement, however, you gain a remarkable degree of control over your taxable income. But that control is time-limited. Once Required Minimum Distributions begin at age 73, the IRS dictates how much you must take out of your tax-deferred accounts each year&mdash;whether you need the money or not, and regardless of your tax bracket.</p>

<p>The window between retirement and age 73 is what financial planners call the <strong>pre-RMD tax gap</strong>. Used strategically, this period can permanently reduce your lifetime tax burden, lower your Medicare premiums, and leave more wealth to your heirs. Used passively, it becomes a missed opportunity that you cannot recover.</p>

<p>This article explains the three most powerful tools for managing this transition: tactical Roth conversions, IRMAA management, and Qualified Charitable Distributions.</p>

<h2>Understanding the Tax Gap</h2>

<p>Here is the fundamental dynamic: during your peak earning years, you likely contributed heavily to pre-tax retirement accounts&mdash;traditional 401(k)s, 403(b)s, traditional IRAs&mdash;because the tax deduction was valuable in your high bracket. These accounts grew tax-deferred for decades. Now, in the pre-RMD years of early retirement, your ordinary income may be relatively low. You are not earning a salary, you may have not yet claimed Social Security, and your portfolio withdrawals are at your discretion.</p>

<p>This temporary low-income window is your opportunity to <strong>convert tax-deferred wealth to tax-free wealth</strong> at a lower tax cost than you will ever have again.</p>

<p>Without intervention, the story typically plays out like this: your pre-tax accounts continue to grow through your 60s. At 73, the IRS requires you to take RMDs calculated on your entire account balance. By that point, those accounts may have grown substantially, pushing you into higher brackets. Your Social Security benefits become more taxable. Your IRMAA-driven Medicare premiums increase. And your estate leaves your heirs a large pre-tax inheritance that they must draw down over 10 years under the SECURE Act rules&mdash;potentially at high income tax rates of their own.</p>

<p>Proactive planning in the tax gap years can rewrite this outcome significantly.</p>

<h2>Strategy 1: Tactical Roth Conversions to Fill Lower Brackets</h2>

<p>A <strong>Roth conversion</strong> is the transfer of funds from a traditional IRA (or other pre-tax account) to a Roth IRA. The converted amount is included in your taxable income in the year of conversion, just as if you had taken a distribution. But unlike a regular withdrawal, the converted funds are now in a Roth account, where they grow tax-free and are never subject to RMDs during your lifetime.</p>

<h3>Why Convert During the Tax Gap?</h3>

<p>The calculus is straightforward: if you can convert pre-tax IRA funds at a 22% or 24% marginal rate today, but you would otherwise have been forced to take RMDs that push you into the 32% or 37% bracket in your 70s and 80s, you have permanently saved the difference on every converted dollar. Multiply that by hundreds of thousands of dollars in conversions, and the lifetime tax savings can be very large.</p>

<h3>How to Execute a Tactical Roth Conversion Strategy</h3>

<p>The goal is to <strong>fill your tax bracket</strong>&mdash;convert enough in each year to bring your taxable income up to, but not above, the top of your current bracket. The specific amount requires careful modeling:</p>

<ol>
<li><strong>Start with a baseline income projection:</strong> Estimate what your income will be in the conversion year from all sources&mdash;Social Security, pension, part-time work, capital gains, and portfolio distributions.</li>
<li><strong>Identify available bracket space:</strong> Calculate how much additional income you can recognize before crossing into the next bracket.</li>
<li><strong>Model future RMD projections:</strong> Project your pre-tax account balances forward using reasonable growth assumptions to estimate what your RMDs will be at age 73, 75, and 80. This shows you how large the future tax problem is without action.</li>
<li><strong>Run a break-even analysis:</strong> Determine the number of years required for the tax-free Roth growth to offset the upfront conversion tax. For most investors in their 60s, the break-even is typically reached within 5 to 10 years, well within their life expectancy.</li>
<li><strong>Coordinate with other income events:</strong> In years where you have large deductions (a major charitable gift, a business loss, medical expenses), you may be able to convert more than usual at lower net tax cost.</li>
</ol>

<h3>Roth Conversion Pitfalls to Avoid</h3>

<ul>
<li><strong>Converting too aggressively in a single year:</strong> Stacking too much income in one year can push you into a higher bracket, trigger IRMAA surcharges, increase Social Security taxation, and create a lumpy tax bill. Spreading conversions across multiple years is almost always superior.</li>
<li><strong>Ignoring state taxes:</strong> New York State taxes Roth conversions as ordinary income, and the benefits of conversion look different for a New York resident than for a resident of a no-income-tax state. The analysis must incorporate state-level taxes.</li>
<li><strong>Not having enough liquidity to pay the tax:</strong> The optimal approach is to pay the conversion tax from outside the IRA (using taxable brokerage funds), preserving the full converted amount in the Roth. If you must use IRA funds to pay the conversion tax, the benefit is reduced.</li>
</ul>

<h2>Strategy 2: Managing Income to Avoid Medicare IRMAA Surcharges</h2>

<p>Medicare premiums are not flat rates. Under the Income-Related Monthly Adjustment Amount (IRMAA) rules, your Part B and Part D premiums increase in steps based on your Modified Adjusted Gross Income (MAGI) from two years prior.</p>

<h3>How IRMAA Works</h3>

<p>For 2025, the standard Medicare Part B premium is approximately $185 per month. For a married couple filing jointly with MAGI above $394,000, the combined IRMAA surcharge can add over $7,000 per year to their total Medicare costs. These thresholds are adjusted annually for inflation, but the stair-step structure means a Roth conversion that nudges you just over an IRMAA tier can cost thousands in additional premiums.</p>

<p>Because Medicare uses a two-year lookback, income recognized in the pre-RMD years directly affects premiums two years later. This creates an important planning consideration: aggressive Roth conversions in your late 60s can trigger IRMAA surcharges in your early 70s. The question is whether the long-term Roth benefit outweighs the near-term premium increase&mdash;which is a calculation your advisor should run explicitly.</p>

<h3>IRMAA Mitigation Strategies</h3>

<ul>
<li><strong>Be precise about bracket boundaries:</strong> With careful income management, you may be able to stay just below an IRMAA threshold that would otherwise be crossed. Small differences in conversion amount can have outsized premium effects.</li>
<li><strong>Appeal IRMAA after life events:</strong> IRMAA can be appealed based on a &ldquo;life-changing event&rdquo; such as retirement, marriage, divorce, or death of a spouse. If your income in the lookback year was unusually high due to a one-time event, an appeal may successfully reduce your premium surcharge.</li>
<li><strong>Use QCDs to reduce MAGI:</strong> Qualified Charitable Distributions (discussed below) reduce your Adjusted Gross Income directly and can help keep your income below IRMAA thresholds.</li>
</ul>

<h2>Strategy 3: Qualified Charitable Distributions to Satisfy RMDs Tax-Free</h2>

<p>Once you reach age 70&frac12;, you are eligible to make <strong>Qualified Charitable Distributions (QCDs)</strong> directly from your IRA to qualifying charitable organizations. The annual limit is $105,000 per person (indexed for inflation after 2023, with rounding to the nearest $1,000).</p>

<h3>Why QCDs Are So Powerful</h3>

<p>The tax advantage of a QCD is subtle but significant. Unlike a regular charitable deduction, which reduces your taxable income only if you itemize deductions, a QCD reduces your <strong>Adjusted Gross Income</strong> directly&mdash;before the standard deduction calculation. This has cascading benefits:</p>

<ul>
<li><strong>Reduces taxable Social Security benefits:</strong> Social Security benefits become taxable when your &ldquo;combined income&rdquo; (AGI plus non-taxable interest plus half of Social Security) exceeds certain thresholds. A lower AGI means less Social Security income is subject to tax.</li>
<li><strong>Reduces IRMAA exposure:</strong> Lower MAGI may keep you below IRMAA surcharge thresholds, directly reducing Medicare premiums.</li>
<li><strong>Counts toward your RMD:</strong> A QCD satisfies your Required Minimum Distribution for the year, meaning you can meet your IRS obligation without recognizing taxable income.</li>
<li><strong>Allows charitable giving even without itemizing:</strong> Post-Tax Cuts and Jobs Act, the higher standard deduction means most retirees no longer itemize. A QCD provides a tax benefit for charitable giving even for non-itemizers.</li>
</ul>

<h3>QCD Best Practices</h3>

<ul>
<li><strong>Direct transfers only:</strong> The distribution must go directly from your IRA custodian to the qualifying charity. If you take the distribution and then write a personal check to the charity, it does not qualify as a QCD.</li>
<li><strong>Traditional IRAs only:</strong> QCDs are permitted from traditional IRAs (and SEP or SIMPLE IRAs, provided no active contributions are being made). They are not available from 401(k)s, 403(b)s, or other employer plans, though rolling those accounts into a traditional IRA first makes QCDs accessible.</li>
<li><strong>Plan the giving calendar early:</strong> QCDs must be completed by December 31 of the tax year. Waiting until late December can create custodian processing delays that disqualify the distribution.</li>
</ul>

<h2>Coordinating All Three Strategies in a Pre-Retirement Tax Plan</h2>

<p>The real power of pre-retirement tax planning comes from coordinating Roth conversions, IRMAA management, and QCDs as part of a single, multi-year plan rather than executing each in isolation.</p>

<p>Consider a hypothetical: a couple retires at age 62 with $2 million in traditional IRA assets. Without any planning, their projected RMDs beginning at age 73 would push them firmly into the 22% to 24% federal bracket, increase their Medicare premiums, and cause more of their Social Security to be taxable.</p>

<p>With a coordinated strategy: they execute $80,000 to $120,000 in Roth conversions per year from age 62 to 72, carefully modeled to fill their current bracket without crossing IRMAA thresholds. They direct $20,000 to $30,000 annually from their IRAs to charity via QCDs once they reach age 70&frac12;, satisfying part of their RMD tax-free. By age 73, their traditional IRA balance is meaningfully smaller, their RMDs are manageable within their target bracket, and they have a substantial Roth balance available tax-free for supplemental spending or inheritance.</p>

<p>The difference in lifetime taxes paid&mdash;and in wealth transferred to heirs&mdash;can be several hundred thousand dollars or more.</p>

<h2>Where to Start</h2>

<p>The pre-retirement tax gap is a time-limited opportunity. Every year of inaction narrows the window and reduces the potential benefit. The first step is a comprehensive tax projection that models your current trajectory&mdash;RMDs, Social Security, Medicare, and bracket exposure&mdash;against the outcomes achievable through coordinated planning.</p>

<p>At <strong>United Financial Planning Group</strong>, our team of CFP&reg; professionals, CPAs, and Enrolled Agents brings integrated tax planning and retirement planning under one roof. We build multi-year tax transition roadmaps tailored to your specific accounts, income sources, and goals.</p>

<p>If you are within 5 to 10 years of retirement&mdash;or have already retired&mdash;this is the right time to evaluate whether you are making the most of the pre-RMD window. <a href="/contact">Schedule a conversation with our team</a>, or learn more about our <a href="/services/tax-planning">tax planning services</a> and <a href="/services/retirement-planning">retirement planning services</a>.</p>

<h2 id="disclosures">Disclosures</h2>

<p>This article is provided for general educational and informational purposes only. It does not constitute investment, tax, legal, or accounting advice. Tax laws, Medicare premium schedules, and RMD rules are subject to change. The projections and examples used are for illustrative purposes only and should not be relied upon as a guarantee of future results. Consult a qualified financial, tax, and legal advisor before making decisions regarding your retirement or tax planning.</p>`,
  },
  {
    slug: "tax-efficient-diversification-unwind-concentrated-stock",
    title:
      "Tax-Efficient Diversification: How to Unwind a Concentrated Stock Position",
    date: "2026-06-29",
    category: "Investment Management",
    excerpt:
      "Holding more than 10-15% of your net worth in a single stock creates significant risk. Learn tax-aware strategies&mdash;10b5-1 plans, Donor-Advised Funds, exchange funds, and disciplined reinvestment&mdash;to de-risk a concentrated position without a catastrophic tax bill.",
    author: "United Financial Planning Group",
    authorSlug: "gerry-barrasso",
    type: "blog",
    relatedServices: [
      "/services/investment-management",
      "/services/tax-planning",
      "/services/equity-compensation",
      "/services/financial-planning",
    ],
    relatedSlugs: [
      "equity-compensation-isos-vs-nsos-ny-startup-employees",
      "investment-management-strategies-high-net-worth",
      "passive-income-hnw-investment-management",
    ],
    faqs: [
      {
        question: "What percentage of net worth in a single stock is considered too concentrated?",
        answer:
          "Most financial planning professionals use 10% to 15% of net worth as a general concentration threshold. Above that level, the idiosyncratic risk of a single company&mdash;the possibility that company-specific events, not broad market forces, drive a large loss&mdash;becomes a meaningful threat to your financial plan. Executives, founders, and long-tenured employees often have 40%, 60%, or even more of their net worth in a single employer, making proactive diversification planning essential.",
      },
      {
        question: "What is a 10b5-1 plan and who should use one?",
        answer:
          "A Rule 10b5-1 plan is a pre-arranged trading plan that allows corporate insiders&mdash;executives, directors, and employees with access to material non-public information&mdash;to sell company stock in a structured, scheduled manner. Because the plan is established when the insider is not aware of MNPI, sales under a properly structured 10b5-1 plan are generally protected from insider trading liability. These plans are ideal for corporate executives or large shareholders who need to diversify but are frequently inside trading windows.",
      },
      {
        question: "Can I donate appreciated stock to avoid capital gains taxes?",
        answer:
          "Yes. Donating long-term appreciated stock directly to a qualified charity or to a Donor-Advised Fund (DAF) allows you to claim a fair market value charitable deduction while permanently avoiding the capital gains tax that would have been owed if you sold the shares first. For a stock with a very low cost basis, this strategy can be far more tax-efficient than selling shares and donating cash proceeds.",
      },
      {
        question: "What is an exchange fund?",
        answer:
          "An exchange fund (sometimes called a swap fund) allows multiple investors, each with a different concentrated stock position, to pool their shares into a partnership or fund in exchange for a diversified interest in the combined pool. The exchange is generally structured to be tax-deferred under Section 721 of the Internal Revenue Code. Investors typically must hold their fund interest for at least seven years. Exchange funds are generally available only to accredited investors and carry complexity and fees; they are most appropriate for very large, very low-basis concentrated positions.",
      },
    ],
    content: `<h2>The Concentration Problem: When a Single Stock Becomes a Risk</h2>

<p>Concentrated stock positions are often a sign of success&mdash;a founder whose startup went public, an executive who held company stock through decades of appreciation, or a startup employee whose equity vested at exactly the right time. But what creates wealth can also destroy it if left unmanaged.</p>

<p>When a single stock represents more than <strong>10% to 15% of your total net worth</strong>, you are exposed to idiosyncratic risk: the possibility that events specific to that one company&mdash;an earnings miss, a regulatory change, executive misconduct, or a competitive disruption&mdash;can cause devastating losses that a well-diversified portfolio would have absorbed with far less damage.</p>

<p>The challenge is that unwinding a concentrated position is not simply a matter of selling shares. For most investors in this situation, those shares have appreciated significantly, and selling them outright would trigger a substantial capital gains tax bill. The cost of diversification, in the short term, can feel prohibitive.</p>

<p>At <strong>United Financial Planning Group</strong>, we help clients with concentrated positions think systematically about how to de-risk over time in a way that is tax-aware, aligned with their values, and integrated with their broader financial plan. Here is a comprehensive framework for thinking through the problem.</p>

<h2>Why Concentration Is a Genuine Risk</h2>

<p>Before outlining solutions, it is worth internalizing the risk. The data on individual stocks is sobering: a substantial percentage of individual stocks underperform the broader market over long periods, and a meaningful percentage eventually lose most or all of their value. The companies most people hold in concentrated positions&mdash;former high-fliers in technology, finance, or healthcare&mdash;are not immune to these dynamics.</p>

<p>Beyond return risk, concentrated positions can create:</p>

<ul>
<li><strong>Liquidity risk:</strong> If the position is in a private company, you may be unable to sell at all until a liquidity event that may never come.</li>
<li><strong>Retirement plan risk:</strong> If your retirement security depends on the continued value of a single stock, a sharp decline can compromise your ability to retire on schedule.</li>
<li><strong>Estate planning complications:</strong> A highly concentrated estate creates complexity for heirs and may trigger forced sales at inopportune times.</li>
<li><strong>Emotional anchoring:</strong> Investors frequently hold concentrated positions long past the point of prudence because of loyalty to an employer, fear of taxes, or anchoring to a prior peak price. These behavioral biases are not a strategy.</li>
</ul>

<h2>The Core Tax Challenge</h2>

<p>The primary obstacle to unwinding a concentrated position is usually the embedded capital gain. If you hold shares with a very low cost basis&mdash;common for founders, early employees, or long-tenured executives&mdash;selling those shares triggers a capital gains tax on the difference between your cost basis and the current market price.</p>

<p>Federal long-term capital gains rates top out at 20% for high earners, and the 3.8% Net Investment Income Tax may apply, bringing the federal rate to 23.8%. For New York residents, state and city taxes add another 10% to 14% on top of that. An investor with a $5 million position and a near-zero cost basis could face $1.5 million or more in combined taxes on a full outright sale&mdash;a real cost that must be weighed against the risk of remaining concentrated.</p>

<p>The goal of tax-efficient diversification is not to avoid taxes forever, but to <strong>manage the timing and pace of recognition</strong> in a way that makes economic sense and fits within a long-term plan.</p>

<h2>Strategy 1: Disciplined Systematic Sales</h2>

<p>The most straightforward approach is simply to sell a portion of the concentrated position each year, thoughtfully timed to manage your annual tax liability.</p>

<p>The key discipline is having a plan before you start. Decide in advance:</p>

<ul>
<li>What target allocation you want to reach (e.g., reduce from 60% of portfolio to under 15% over five years).</li>
<li>How much in capital gains taxes you are willing to recognize in each year.</li>
<li>Whether you want to accelerate sales in years where other deductions (charitable gifts, business losses) offset gains.</li>
</ul>

<p>Systematic selling works best when combined with other strategies below, particularly charitable giving, to reduce the net tax cost of each tranche sold.</p>

<h2>Strategy 2: Rule 10b5-1 Plans for Executives and Insiders</h2>

<p>Corporate insiders&mdash;executives, directors, and employees with regular access to material non-public information (MNPI)&mdash;face a specific obstacle: they are frequently prohibited from trading during blackout periods and may rarely be &ldquo;in the window&rdquo; to sell. This makes ad hoc selling nearly impossible.</p>

<p>A <strong>Rule 10b5-1 plan</strong>, established under SEC rules, solves this problem. The insider establishes a pre-arranged trading plan when they are not aware of MNPI. The plan specifies the amount, price, and timing of future sales. Once the plan is in place, the sales execute automatically according to the predetermined schedule, regardless of whether the insider is in a trading window or in possession of inside information.</p>

<p>Post-2023 SEC rule changes introduced a mandatory cooling-off period before the first sale can occur under a new 10b5-1 plan (typically 90 days for non-CEO/CFO insiders, and the later of 90 days or the next quarterly earnings release for CEOs and CFOs). These changes reinforce the importance of working with legal counsel and a financial advisor when establishing the plan.</p>

<h2>Strategy 3: Donating Appreciated Stock to a Donor-Advised Fund</h2>

<p>For investors with charitable intent, donating appreciated stock directly to a <strong>Donor-Advised Fund (DAF)</strong> is one of the most tax-efficient moves available. Here is why it is so powerful:</p>

<ul>
<li>You receive a <strong>charitable deduction equal to the fair market value</strong> of the shares (not your cost basis) in the year of donation, subject to applicable AGI limits.</li>
<li>You <strong>permanently avoid the capital gains tax</strong> you would have owed on a sale.</li>
<li>The DAF sells the shares and reinvests the proceeds in a diversified portfolio, which continues to grow tax-free inside the fund.</li>
<li>You can then recommend grants from the DAF to your chosen charities over time&mdash;immediately or over many years.</li>
</ul>

<p>Consider an example: you hold $200,000 in a stock with a $10,000 cost basis. If you sell, you pay capital gains taxes on $190,000 of gain. If instead you donate those shares to a DAF, you avoid the capital gains entirely, claim a $200,000 charitable deduction, and the full $200,000 is available to support your charitable goals. Replacing the donated shares in your portfolio with a diversified investment simultaneously reduces your concentration without selling.</p>

<p>DAF donations are a core tool in the annual tax planning process for any high-net-worth investor with significant unrealized gains and philanthropic intentions.</p>

<h2>Strategy 4: Exchange Funds</h2>

<p>An <strong>exchange fund</strong> (sometimes called a swap fund) is a sophisticated strategy for investors with very large, very low-basis concentrated positions who want to achieve diversification without immediately triggering capital gains.</p>

<p>The mechanics: multiple investors each contribute their different concentrated stock holdings into a limited partnership or limited liability company. Each investor receives a pro-rata interest in the combined, diversified pool. Under Section 721 of the Internal Revenue Code, this contribution is generally treated as a tax-deferred exchange rather than a taxable sale.</p>

<p>Important constraints:</p>

<ul>
<li>Investors must hold their fund interest for <strong>at least seven years</strong> before withdrawing, or the deferred gain becomes taxable.</li>
<li>At least 20% of the fund&rsquo;s assets must be in qualifying &ldquo;nonmarketable&rdquo; assets (typically real estate or other illiquid investments).</li>
<li>Exchange funds are generally available only to <strong>qualified purchasers</strong> (typically individuals with $5 million or more in investable assets).</li>
<li>Management fees and structural complexity are higher than standard investment accounts.</li>
</ul>

<p>Exchange funds are not a fit for everyone, but for an investor with a $10 million or $20 million position and a near-zero basis who wants diversification and can accept a seven-year lockup, they can be genuinely transformative.</p>

<h2>Building the Complementary Reinvestment Portfolio</h2>

<p>Diversification is not just about removing risk&mdash;it is about rebuilding it intelligently. As you reduce your concentrated position, the proceeds (whether from systematic sales, charitable replacement, or other strategies) need to be reinvested into a portfolio that is <strong>deliberately constructed to complement</strong> what you still hold.</p>

<p>This means:</p>

<ul>
<li><strong>Factor exposure:</strong> If your concentrated position is in a large-cap US technology company, your reinvestment portfolio should underweight large-cap US technology to avoid doubling down on the same risk factors.</li>
<li><strong>Asset class diversification:</strong> Adding exposure to international equities, small-cap, value, fixed income, and real assets that are lowly correlated with your concentrated position.</li>
<li><strong>Tax-loss harvesting opportunities:</strong> A well-managed diversified portfolio creates ongoing opportunities to harvest losses that can offset the gains recognized as you gradually sell the concentrated position.</li>
</ul>

<h2>Putting It All Together: An Integrated Approach</h2>

<p>No single strategy is optimal for every investor. The right plan depends on:</p>

<ul>
<li>The size of the position and the embedded gain.</li>
<li>Whether the stock is publicly traded (liquid) or private (illiquid).</li>
<li>Whether you are a corporate insider subject to trading restrictions.</li>
<li>Your charitable intentions and timeline.</li>
<li>Your overall tax situation, including other income and deductions.</li>
<li>Your estate planning goals&mdash;if you intend to leave the shares to heirs, a stepped-up cost basis at death eliminates the capital gains entirely.</li>
</ul>

<p>Most clients benefit from a combination of strategies deployed in a coordinated, multi-year plan. At <strong>United Financial Planning Group</strong>, our CFP&reg; professionals, CPAs, and investment managers work together to model these scenarios, stress-test your financial plan against adverse scenarios for the concentrated position, and execute a tax-aware diversification roadmap that makes sense for your specific situation.</p>

<p>If you hold a concentrated stock position and are unsure where to start, we would welcome a conversation. <a href="/contact">Contact us here</a> or learn more about our <a href="/services/investment-management">investment management services</a>.</p>

<h2 id="disclosures">Disclosures</h2>

<p>This article is provided for general educational and informational purposes only. It does not constitute investment, tax, legal, or accounting advice, and nothing here should be construed as a solicitation or recommendation to buy or sell any security. Tax laws are subject to change. Strategies involving charitable vehicles, exchange funds, and insider trading rules are complex and fact-specific. Readers should consult qualified legal, tax, and investment professionals before taking action.</p>`,
  },
  {
    slug: "equity-compensation-isos-vs-nsos-ny-startup-employees",
    title:
      "The Equity Compensation Strategy: ISOs vs. NSOs for NY Tech &amp; Startup Employees",
    date: "2026-06-29",
    category: "Equity Compensation",
    excerpt:
      "Understand the critical tax differences between ISOs and NSOs, the AMT risk unique to incentive options, and how New York State and NYC taxes affect your equity exercise strategy as a tech or startup employee.",
    author: "United Financial Planning Group",
    authorSlug: "gerry-barrasso",
    type: "blog",
    relatedServices: [
      "/services/equity-compensation",
      "/services/tax-planning",
      "/services/financial-planning",
    ],
    relatedSlugs: [
      "equity-compensation-planning-startup-employees",
      "investment-management-strategies-high-net-worth",
      "why-fee-only-fiduciary-financial-planner",
    ],
    faqs: [
      {
        question: "What is the difference between ISOs and NSOs?",
        answer:
          "Incentive Stock Options (ISOs) are a tax-advantaged form of equity granted only to employees. If holding period requirements are met, gains are taxed at long-term capital gains rates rather than ordinary income rates. Non-Qualified Stock Options (NSOs) can be granted to employees, contractors, and board members. The spread at exercise is taxed immediately as ordinary income, and the employer must withhold taxes. The key tradeoff is that ISOs carry Alternative Minimum Tax (AMT) risk at exercise, while NSOs trigger ordinary income tax at exercise but have no AMT exposure.",
      },
      {
        question: "How does AMT work when exercising ISOs?",
        answer:
          "When you exercise ISOs, the spread between the fair market value (FMV) and your strike price is an AMT preference item. This means it is not taxed for regular income tax purposes at exercise, but it is added to your Alternative Minimum Tax income calculation. If your AMT liability exceeds your regular tax liability, you owe the difference. For employees at New York tech companies where FMV has risen significantly above the strike price, this can create a substantial cash tax bill before you can even sell shares.",
      },
      {
        question: "Does New York City tax stock option income?",
        answer:
          "Yes. New York City residents pay city income tax on top of federal and New York State taxes. For NSO exercises, the ordinary income recognized is subject to NYC's resident income tax, which tops out near 3.876%. Combined with the top New York State rate of 10.9% and federal ordinary income rates, NYC residents can face a combined marginal rate exceeding 50% on NSO spread income. ISO qualifying dispositions receive long-term capital gains treatment federally, but New York State and NYC tax long-term capital gains as ordinary income, which meaningfully reduces the ISO advantage for state tax purposes.",
      },
      {
        question: "What is a qualifying vs. disqualifying disposition for ISOs?",
        answer:
          "A qualifying disposition occurs when you sell ISO shares at least two years after the grant date AND at least one year after the exercise date. The entire gain is taxed at long-term capital gains rates federally. A disqualifying disposition occurs when you sell before meeting both holding period requirements. In that case, the spread at exercise is taxed as ordinary income, and only appreciation beyond the FMV at exercise receives capital gains treatment.",
      },
    ],
    content: `<h2>ISOs vs. NSOs: Why the Distinction Matters Enormously for NY Tech Employees</h2>

<p>If you work at a New York technology company or startup, equity compensation is likely one of your most significant financial assets&mdash;and one of the most complex to manage. The difference between an Incentive Stock Option (ISO) and a Non-Qualified Stock Option (NSO) can translate into hundreds of thousands of dollars in tax liability depending on how and when you act.</p>

<p>Add in the Alternative Minimum Tax, New York State&rsquo;s top income tax rate of 10.9%, and New York City&rsquo;s resident income tax, and the stakes become even higher. This article walks through the mechanics of each option type, the specific risks and opportunities they create, and a disciplined framework for equity compensation planning as a startup employee.</p>

<h2>Understanding ISOs: The Tax-Advantaged Option With a Hidden Trap</h2>

<p>Incentive Stock Options are the more tax-favorable of the two option types at the federal level. ISOs can only be granted to employees (not contractors or board members) and must meet specific requirements under Section 422 of the Internal Revenue Code.</p>

<h3>The ISO Tax Advantage: Qualifying Dispositions</h3>

<p>If you satisfy the ISO holding period rules&mdash;holding shares for at least <strong>two years from the grant date</strong> and <strong>one year from the exercise date</strong>&mdash;your sale is treated as a &ldquo;qualifying disposition.&rdquo; The entire gain from your strike price to your sale price is taxed at the long-term capital gains rate, which tops out at 20% federally (plus the 3.8% Net Investment Income Tax for higher earners).</p>

<p>Compare this to ordinary income tax rates, which can reach 37% federally. The differential is dramatic, and for employees with significant ISO grants, structuring a qualifying disposition can save six figures in federal taxes.</p>

<h3>The ISO Trap: The Alternative Minimum Tax (AMT)</h3>

<p>Here is the catch that blindsides many startup employees: <strong>at the moment you exercise ISOs, the spread between the fair market value and your strike price becomes an AMT preference item</strong>&mdash;even if you do not sell the shares and receive no cash.</p>

<p>The AMT is a parallel tax system designed to ensure high-income taxpayers pay a minimum level of tax. It adds back certain deductions and preferences that reduce your regular tax liability and calculates tax at a flat rate (26% or 28%). If your AMT liability exceeds your regular income tax liability, you pay the difference.</p>

<p>For a startup employee with a large ISO grant, this can create a brutal situation: you exercise options, immediately owe AMT on the paper gain&mdash;sometimes hundreds of thousands of dollars&mdash;and yet hold illiquid private shares that you cannot sell to pay the bill. This scenario has forced some employees into financial hardship when companies decline in value after exercise.</p>

<h3>Strategies to Manage ISO AMT Risk</h3>

<ul>
<li><strong>Spread exercises across tax years:</strong> Rather than exercising all ISOs at once, spread them across multiple tax years to keep the AMT spread below your AMT exemption threshold each year.</li>
<li><strong>Calculate your AMT crossover point:</strong> Work with a CPA or fee-only advisor to determine exactly how many ISO shares you can exercise in a given year before triggering AMT. This is your &ldquo;safe exercise&rdquo; amount.</li>
<li><strong>Early exercise (83(b) election):</strong> Exercising ISOs shortly after grant when the FMV equals or is close to the strike price minimizes the AMT spread and starts the holding period clock early. However, this involves paying real money upfront for shares that may or may not be worth anything.</li>
<li><strong>AMT credit carryforward:</strong> Any AMT paid on ISO exercises generates an AMT credit that can offset future regular tax liability. This credit can eventually be recovered, but only if your regular tax exceeds AMT in future years&mdash;which may take time.</li>
</ul>

<h2>Understanding NSOs: Simpler, But Taxed More Aggressively</h2>

<p>Non-Qualified Stock Options are the more straightforward of the two types. They can be granted to employees, contractors, directors, and advisors. There are no IRS-mandated holding periods and no AMT at exercise.</p>

<h3>How NSOs Are Taxed</h3>

<p>When you exercise an NSO, the spread between the fair market value and your strike price is treated as <strong>ordinary income in the year of exercise</strong>. Your employer is required to withhold employment taxes (Social Security, Medicare) on this amount and will report it on your W-2 (for employees) or 1099-NEC (for non-employees).</p>

<p>Any appreciation <em>after</em> exercise is taxed as a capital gain when you sell&mdash;short-term if you held for a year or less, long-term if you held longer than a year.</p>

<h3>NSO Timing Strategies</h3>

<ul>
<li><strong>Exercise in a lower-income year:</strong> If you anticipate a year with reduced income (career transition, sabbatical, or early retirement), exercising NSOs in that year can reduce the ordinary income tax bite significantly.</li>
<li><strong>Exercise-and-hold for capital gains:</strong> If you believe the company stock will continue to appreciate, exercise NSOs and hold the shares for more than one year to convert future gains to long-term capital gains rates.</li>
<li><strong>Cashless exercises:</strong> In a public company context, same-day-sale exercises convert the entire spread to taxable income immediately but eliminate the risk of holding concentrated, illiquid shares.</li>
</ul>

<h2>The New York State and NYC Tax Dimension</h2>

<p>New York is one of the highest-tax states in the country, and its treatment of stock option income compounds the federal complexity for NYC tech employees.</p>

<h3>New York State Does Not Recognize ISO Preference Treatment on Capital Gains</h3>

<p>This is a critical distinction. While the federal government taxes ISO qualifying disposition gains at the preferential long-term capital gains rate, <strong>New York State taxes all capital gains as ordinary income</strong>. The top New York State income tax rate is <strong>10.9%</strong> for incomes above $25 million, but rates of 6.85% to 9.65% apply to incomes commonly earned by NYC tech professionals.</p>

<p>What this means in practice: even on a perfectly structured ISO qualifying disposition, you will owe New York State ordinary income tax on the gain. The federal advantage remains meaningful, but the combined rate for a New York City resident can still be substantial.</p>

<h3>New York City Resident Tax</h3>

<p>New York City residents pay an additional city resident income tax on their taxable income. The top NYC rate is approximately <strong>3.876%</strong>. This applies to both NSO ordinary income and ISO qualifying disposition gains (since NYC also does not recognize preferential capital gains treatment).</p>

<p>The combined marginal rate for a high-earning NYC resident&mdash;federal ordinary income, federal NIIT, New York State, and New York City&mdash;can exceed <strong>50%</strong> on NSO spread income. This makes the timing and structure of equity exercises extraordinarily consequential.</p>

<h3>Nonresident and Part-Year Resident Considerations</h3>

<p>If you worked for a New York company but relocated to another state before exercising your options, your New York tax exposure depends on the allocation of option income. New York State generally taxes option income allocated to the period when services were performed in New York, which can create complex apportionment calculations requiring professional guidance.</p>

<h2>A Strategic Exercise Framework for NY Startup Employees</h2>

<p>Given the complexity above, a disciplined equity exercise strategy should consider the following steps:</p>

<h3>Step 1: Know Exactly What You Hold</h3>

<p>Gather your option agreements and create a complete inventory: grant type (ISO vs. NSO), grant date, strike price, number of shares vested and unvested, current FMV (the 409A valuation for private companies), and expiration dates.</p>

<h3>Step 2: Model the Tax Scenarios</h3>

<p>Work with a CPA or fee-only financial advisor to model the tax impact of various exercise scenarios&mdash;exercising all options this year, spreading across multiple years, exercising enough ISOs to stay below your AMT crossover point, or waiting until a liquidity event for NSOs. The differences between scenarios can be enormous.</p>

<h3>Step 3: Manage Concentration Risk</h3>

<p>As your equity position grows, so does your concentration risk. If a single company represents a disproportionate share of your net worth, develop a diversification plan that is tax-aware. For public company employees, a <strong>Rule 10b5-1 plan</strong> allows scheduled sales during trading windows without running afoul of insider trading rules.</p>

<h3>Step 4: Plan for Liquidity Events</h3>

<p>An IPO or acquisition can trigger a cascade of tax events&mdash;RSU vesting, ISO holding period decisions, and NSO exercises&mdash;all in a compressed window. Preparing a &ldquo;liquidity event playbook&rdquo; in advance, with your advisor, ensures you can execute quickly rather than making rushed decisions under pressure.</p>

<h3>Step 5: Coordinate With Your Overall Financial Plan</h3>

<p>Equity compensation does not exist in isolation. The after-tax proceeds from a successful exercise must be integrated into a broader investment plan, tax plan, and retirement strategy. A fee-only, fiduciary advisor who understands both equity compensation and tax planning&mdash;and who does not earn commissions on investment products&mdash;is the most aligned partner for this work.</p>

<h2>How United Financial Planning Group Can Help</h2>

<p><strong>United Financial Planning Group</strong> brings together CFP&reg; professionals, CPAs, and Enrolled Agents under one roof, which means your equity compensation planning is coordinated with your tax returns, investment strategy, and overall financial plan&mdash;not siloed across three separate firms.</p>

<p>We work with technology professionals and startup employees throughout New York to model ISO and NSO exercise strategies, manage AMT exposure, and build tax-efficient plans for liquidity events. If you have equity compensation questions, we would welcome a conversation.</p>

<p><a href="/contact">Schedule a complimentary consultation</a> or learn more about our <a href="/services/equity-compensation">equity compensation planning services</a>.</p>

<h2 id="disclosures">Disclosures</h2>

<p>This article is provided for general educational and informational purposes only. It does not constitute investment, tax, legal, or accounting advice, and no portion of it should be construed as a solicitation or offer to buy or sell any security. Tax laws are subject to change, and individual circumstances vary significantly. Readers should consult a qualified tax professional or financial advisor before making any decisions regarding their equity compensation.</p>`,
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
  // Append a local-noon time so the date is never shifted by timezone offset
  // when parsed. Plain ISO date strings like "2026-07-16" are treated as UTC
  // midnight by the Date constructor, which causes the date to display one day
  // earlier in any timezone behind UTC (e.g. US/Eastern on a Node SSR server).
  const normalized = dateStr.includes("T") ? dateStr : `${dateStr}T12:00:00`;
  return new Date(normalized).toLocaleDateString("en-US", {
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
