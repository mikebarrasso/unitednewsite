import Link from "next/link";
import { type ReactNode } from "react";

export function SocialSecurityContent(): ReactNode {
  return (
    <section className="w-full bg-background py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg prose-united dark:prose-invert max-w-none">
          <h2>The Three Claiming Ages Explained</h2>
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

          <h2>How Benefits Scale Between Ages</h2>
          <p>
            Claiming is not a binary choice between three fixed points. You
            can file for benefits in any month between age 62 and age 70, and
            your benefit amount adjusts proportionally to the exact month you
            claim, not just the calendar year. Claiming at 64 results in a
            different reduction than claiming at 62. Claiming at 68 results
            in a different increase than waiting until 70.
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

          <h2>Claiming Age and Continued Earnings</h2>
          <p>
            If you claim Social Security before your full retirement age and
            continue to work, the Social Security earnings test may apply.
            Under this rule, if your earnings from work exceed an annual
            limit set by the Social Security Administration, a portion of
            your benefit may be withheld. That limit is adjusted
            periodically, so it is worth checking the current figure
            directly with the Social Security Administration rather than
            relying on a figure you may have seen elsewhere.
          </p>
          <p>
            Once you reach full retirement age, the earnings test no longer
            applies, regardless of how much you earn from work. It is also
            worth knowing that benefits withheld under the earnings test are
            not lost forever. The Social Security Administration credits
            them back starting at your full retirement age, which typically
            results in a higher monthly benefit going forward. That said,
            the timing still matters: a benefit withheld today and returned
            later is not the same as receiving it now, particularly if you
            need the income in the near term.
          </p>

          <h2>Claiming Age and Your Tax Picture</h2>
          <p>
            Social Security benefits are not automatically tax-free.
            Depending on your combined income, defined as your adjusted
            gross income plus any nontaxable interest plus half of your
            Social Security benefit, up to 85% of your benefit may be
            subject to federal income tax. Where you land on that scale
            depends heavily on when you claim and what other income you are
            drawing at the same time.
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

          <h2>IRMAA and Medicare Premiums</h2>
          <p>
            Medicare Part B and Part D premiums are not flat amounts for
            everyone. Under the Income-Related Monthly Adjustment Amount, or
            IRMAA, your premiums are based on your modified adjusted gross
            income from two years prior. A higher income in a given year can
            mean a higher Medicare premium two years later.
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

          <h2>Social Security and Roth Conversion Windows</h2>
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
            Claiming Social Security early adds taxable income during those
            years, which can shrink or eliminate the low-income window that
            makes conversions attractive. Delaying Social Security can
            preserve more of that window, but it also means you need other
            income sources, savings, part-time work, or portfolio
            withdrawals, to cover living expenses in the meantime.
          </p>
          <p>
            There is no fixed rule for balancing these two decisions. The
            right coordination depends on your total portfolio size, the mix
            of account types you hold, and how your tax bracket is likely to
            move over the years ahead, which is why claiming age and Roth
            conversion planning are best evaluated together rather than
            separately.
          </p>

          <h2>Spousal and Survivor Considerations</h2>
          <p>
            For married couples, the claiming decision is rarely just about
            one person&apos;s benefit. A spousal benefit can be worth up to
            50% of the higher earner&apos;s Primary Insurance Amount, but
            only once the higher earner has claimed. Survivor benefits work
            differently: they are based on the deceased spouse&apos;s benefit
            amount, and if the higher earner claims early, the
            survivor&apos;s future benefit is permanently reduced as a
            result.
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

          <h2>Why a Coordinated Review Matters</h2>
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
