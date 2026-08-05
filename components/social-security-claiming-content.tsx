import Link from "next/link";
import { type ReactNode } from "react";

export function SocialSecurityContent(): ReactNode {
  return (
    <section className="w-full bg-background py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg prose-united dark:prose-invert max-w-none">
          <p>
            Your Social Security claiming strategy is the decision of when
            to begin receiving retirement benefits, and how that timing fits
            with your broader income, tax, and Medicare plan. The right age
            to claim depends on your health, income needs, tax situation,
            and whether you are coordinating with a spouse.
          </p>
          <p className="text-sm text-muted-foreground not-prose mb-8">
            Last updated: August 2026
          </p>
          <h2>When Can You Claim Social Security? The Three Key Ages</h2>
          <p>
            Social Security gives you a range of ages at which to claim your
            retirement benefit, but three reference points anchor almost
            every conversation about the decision: age 62, your full
            retirement age, and age 70. Understanding what each one actually
            means is the starting point for a claiming strategy that fits
            your own situation, rather than a generic rule that may not apply
            to you.
          </p>

          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <caption className="text-left text-xs text-muted-foreground mb-2">
                General education only. Individual benefit amounts and
                reduction percentages depend on your birth year and earnings
                history.
              </caption>
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 border border-border font-semibold">
                    Claiming Age
                  </th>
                  <th className="text-left p-3 border border-border font-semibold">
                    What Happens
                  </th>
                  <th className="text-left p-3 border border-border font-semibold">
                    Key Consideration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-background even:bg-muted/30">
                  <td className="p-3 border border-border font-medium">
                    62
                  </td>
                  <td className="p-3 border border-border">
                    The earliest age at which you can claim retirement
                    benefits. Your monthly benefit is permanently reduced
                    compared to your full retirement age amount, by as much
                    as 30% depending on your birth year.
                  </td>
                  <td className="p-3 border border-border">
                    This reduction reflects a longer expected payout period.
                    It is not a penalty, but it is permanent and carries
                    through the rest of your life.
                  </td>
                </tr>
                <tr className="odd:bg-background even:bg-muted/30">
                  <td className="p-3 border border-border font-medium">
                    Full Retirement Age (FRA)
                  </td>
                  <td className="p-3 border border-border">
                    The age at which you receive 100% of your Primary
                    Insurance Amount (PIA), the baseline benefit calculated
                    from your earnings history. FRA is 67 for anyone born in
                    1960 or later.
                  </td>
                  <td className="p-3 border border-border">
                    FRA is a reference point, not automatically the right age
                    to claim. Whether it fits you depends on your income
                    needs, health, and overall plan.
                  </td>
                </tr>
                <tr className="odd:bg-background even:bg-muted/30">
                  <td className="p-3 border border-border font-medium">
                    70
                  </td>
                  <td className="p-3 border border-border">
                    The latest age at which delayed retirement credits
                    accrue. Benefits increase by roughly two-thirds of one
                    percent per month, about 8% per year, between FRA and age
                    70.
                  </td>
                  <td className="p-3 border border-border">
                    After age 70, there is no further benefit to delaying.
                    Waiting can raise your monthly benefit, but whether it is
                    worth it depends on your longevity, income needs, and
                    spousal situation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How Social Security Benefits Change Between Claiming Ages</h2>
          <p>
            Social Security benefits are not a binary choice at 62, full
            retirement age, or 70. You can claim at any month in between,
            and your benefit adjusts proportionally for each month you wait
            or claim early. Claiming at 64 results in a different reduction
            than claiming at 62. Claiming at 68 results in a different
            increase than waiting until 70.
          </p>
          <p>
            This granularity matters. The claiming decision is not really a
            choice among three options; it is a choice among dozens of
            possible months, each with a slightly different monthly benefit.
            The month that fits your circumstances depends on your health,
            your other income sources, your spouse&apos;s benefit, and how
            you plan to use the money, not a single formula that applies to
            everyone.
          </p>

          <h2>Working While Receiving Social Security: The Earnings Test</h2>
          <p>
            If you claim Social Security before your full retirement age and
            continue working, your benefits may be temporarily reduced if
            your earnings exceed an annual limit set by the Social Security
            Administration. After you reach full retirement age, the
            earnings test no longer applies. That limit is adjusted
            periodically, so it is worth checking the current figure
            directly with the Social Security Administration rather than
            relying on a figure you may have seen elsewhere.
          </p>
          <p>
            Regardless of how much you earn from work once you reach full
            retirement age, benefits withheld under the earnings test are not
            lost forever. The Social Security Administration credits them
            back starting at your full retirement age, which typically
            results in a higher monthly benefit going forward. That said,
            the timing still matters: a benefit withheld today and returned
            later is not the same as receiving it now, particularly if you
            need the income in the near term.
          </p>

          <h2>How Your Claiming Age Affects Your Taxes</h2>
          <p>
            Up to 85 percent of your Social Security benefits may be subject
            to federal income tax, depending on your combined income. Your
            claiming age affects how much taxable income you have in any
            given year, which in turn affects your tax bracket. Combined
            income is defined as your adjusted gross income plus any
            nontaxable interest plus half of your Social Security benefit.
          </p>
          <p>
            If your combined income is below $25,000 for single filers or
            $32,000 for married filing jointly, your benefits are generally
            not taxed. Above those thresholds, up to 50 percent of benefits
            may become taxable. At higher combined income levels, up to 85
            percent of benefits may be taxable. These thresholds are set by
            the IRS and apply regardless of the age at which you claim.
          </p>
          <p>
            Claiming earlier while you are still working, or while you are
            drawing heavily from tax-deferred accounts, can push your
            combined income higher and increase the portion of your benefit
            that is taxable. Claiming later may allow you to rely more on
            taxable accounts or Roth withdrawals in the interim, which can
            help keep combined income lower in the early years of
            retirement. Neither approach is automatically better; it depends
            on the size and mix of your other income sources and on how your
            tax bracket is likely to change over time.
          </p>
          <p>
            This is where a CPA&apos;s perspective matters. The tax
            consequences of a given claiming age are rarely obvious from a
            Social Security benefit estimate alone. They depend on modeling
            your specific income sources together, which is a different
            exercise than picking an age off a benefits chart.
          </p>

          <h2>How Social Security Affects Medicare IRMAA Premiums</h2>
          <p>
            Your Social Security claiming age can affect your Medicare
            premiums through IRMAA, the Income-Related Monthly Adjustment
            Amount, which sets Part B and Part D premium surcharges based on
            your modified adjusted gross income from two years prior. A
            higher income in a given year can mean a higher Medicare premium
            two years later.
          </p>
          <p>
            Claiming Social Security while simultaneously drawing from
            tax-deferred accounts, completing a large Roth conversion, or
            realizing a significant capital gain can all raise your modified
            adjusted gross income in the same year, which can push you into
            a higher IRMAA tier without your realizing it until the premium
            notice arrives. A coordinated claiming strategy considers your
            income in the years leading up to Medicare enrollment, not just
            the claiming decision in isolation, so you can see how the two
            interact ahead of time.
          </p>
          <p>
            This is a tax-and-benefits coordination problem more than a pure
            Social Security question, and it is exactly the kind of question
            a CFP® and a CPA working from the same set of facts are
            positioned to evaluate together.
          </p>

          <h2>How Claiming Age Affects Roth Conversion Windows</h2>
          <p>
            The gap between retirement and required minimum distributions
            can be a window for Roth conversions at lower tax rates. If you
            claim Social Security early, the added taxable income may
            shrink the low-income years that make those conversions
            efficient.
          </p>
          <p>
            The years between retirement and the start of Required Minimum
            Distributions, currently age 73, can be a window of lower
            taxable income that makes Roth conversions more tax-efficient
            than they might be later. Converting funds from a tax-deferred
            account to a Roth account during a lower-income year can reduce
            future required distributions and may lower lifetime taxes,
            though the benefit depends on your future tax bracket, your time
            horizon, and your ability to pay the conversion tax from outside
            the account.
          </p>
          <p>
            Delaying Social Security can preserve more of that window, but
            it also means you need other income sources, savings, part-time
            work, or portfolio withdrawals, to cover living expenses in the
            meantime.
          </p>
          <p>
            There is no fixed rule for balancing these two decisions. The
            right coordination depends on your total portfolio size, the mix
            of account types you hold, and how your tax bracket is likely to
            move over the years ahead, which is why claiming age and Roth
            conversion planning are best evaluated together rather than
            separately.
          </p>

          <h2>Spousal and Survivor Social Security Strategies</h2>
          <p>
            A spousal benefit can be up to 50 percent of the higher
            earner&apos;s full retirement age benefit, but coordination
            between spouses matters. If the higher earner claims early, the
            survivor&apos;s benefit is permanently reduced. For married
            couples, the claiming decision is rarely just about one
            person&apos;s benefit: the spousal benefit is available only
            once the higher earner has claimed, and survivor benefits are
            based on the deceased spouse&apos;s benefit amount rather than
            the survivor&apos;s own.
          </p>
          <p>
            Because of this, coordinating claiming ages between spouses is a
            joint decision, not two individual ones made independently. The
            right approach for a couple can differ meaningfully from what
            would make sense for either spouse claiming alone, particularly
            when there is a significant difference in the spouses&apos;
            benefit amounts or life expectancies. This page focuses
            primarily on the individual claiming decision and how it
            interacts with taxes, Medicare, and Roth conversion timing;
            spousal and survivor coordination adds another layer worth
            discussing directly with your planning team.
          </p>

          <h2>Why a Coordinated CFP and CPA Review Matters Before Claiming</h2>
          <p>
            The Social Security claiming decision sits at the intersection
            of benefits rules, tax law, Medicare premiums, and retirement
            income sequencing. Evaluating it in isolation, the way a
            benefits calculator or a single-discipline advisor might, can
            miss how one choice ripples into the others.
          </p>
          <p>
            At United Financial Planning Group, this is why we approach
            claiming age decisions as coordinated, not siloed. A CFP®
            professional who understands the planning questions and a CPA
            who understands the tax consequences, working from the same set
            of facts, can model scenarios that a single-discipline advisor
            might not have the full picture to see.
          </p>
          <p>
            This is not about identifying a single right age for everyone.
            It is about understanding how your claiming decision moves
            through the rest of your retirement plan, so the choice you make
            is an informed one, not a default.
          </p>
        </div>

        <div className="not-prose mt-12 p-6 sm:p-8 rounded-2xl border border-[#1e6eae]/20 bg-[#1e6eae]/[0.04] text-center">
          <p className="text-2xl sm:text-3xl font-serif font-medium text-foreground mb-3">
            Let&apos;s Start With a Conversation
          </p>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
            No sales pitch. No obligation. Just a clear conversation about how
            your Social Security claiming decision fits into your broader
            retirement, tax, and Medicare picture.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Schedule a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
