import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About — United Financial Planning Group",
  description:
    "Founded by Gerry Barrasso, CFP®, CPA, United Financial Planning Group brings 30+ years of integrated financial planning and tax expertise to clients nationwide.",
  path: "/about",
});

const beliefs = [
  {
    title: "Integration over fragmentation.",
    description:
      "Your investments affect your taxes. Your taxes affect your retirement timeline. Your retirement timeline affects your estate plan. We treat your financial life as one interconnected system — because that's what it is.",
  },
  {
    title: "Transparency over complexity.",
    description:
      "You should always know what you're paying, why we're recommending something, and what the alternatives are. No jargon to hide behind. No fine print to discover later.",
  },
  {
    title: "Alignment over salesmanship.",
    description:
      "As a fee-only fiduciary, we earn our living by giving good advice — not by selling financial products. Our incentives are simple: when you do well, we do well.",
  },
];

const capabilities = [
  "Certified Financial Planners (CFP®) for comprehensive financial and retirement planning",
  "Certified Public Accountants (CPA) for advanced tax planning and preparation",
  "Enrolled Agents (EA) for tax representation and specialized tax guidance",
  "Personal Financial Specialist (PFS) designation combining accounting and financial planning expertise",
];

const affiliations = [
  "NAPFA (National Association of Personal Financial Advisors)",
  "AICPA (American Institute of Certified Public Accountants)",
  "Fee Only Network",
  "Garrett Planning Network",
  "XY Planning Network",
];

export default function AboutPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative w-full bg-muted pt-40 pb-24 sm:pb-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              One Firm. Every Discipline.{" "}
              <span className="italic">Thirty Years of Doing It Differently.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              United Financial Planning Group was founded on a simple conviction:
              the best financial advice can&apos;t happen in a silo.
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-medium font-serif text-foreground mb-8">
              Meet Gerry Barrasso, CFP®, CPA, PFS
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Most financial advisors chose one lane early in their career —
                investments or taxes. Gerry chose both.
              </p>
              <p>
                With over 30 years of experience, Gerry Barrasso built United
                Financial Planning Group around an idea the industry still
                hasn&apos;t fully embraced: that financial planning, investment
                management, tax planning, and tax preparation shouldn&apos;t live
                in separate offices with separate professionals who never compare
                notes.
              </p>
              <p>
                As both a Certified Financial Planner™ and Certified Public
                Accountant, Gerry saw firsthand how disconnected advice costs
                people money. The retirement plan that triggers an unexpected tax
                bill. The investment portfolio built without considering the
                owner&apos;s bracket. The tax return filed by someone who has no
                idea what the client&apos;s financial goals are.
              </p>
              <p className="font-medium text-foreground">
                He built United to eliminate those gaps.
              </p>
              <p>
                Today, Gerry leads a team of CFPs, CPAs, and Enrolled Agents who
                share a single mission: give clients one place where every aspect
                of their financial life is understood, coordinated, and
                optimized.
              </p>
            </div>
            <blockquote className="mt-12 p-8 bg-muted/50 border border-border rounded-sm">
              <p className="text-lg text-foreground/80 italic leading-relaxed">
                &ldquo;I&apos;ve spent my career watching brilliant people lose
                money not because they made bad decisions, but because the people
                advising them never talked to each other. We built United to fix
                that.&rdquo;
              </p>
              <cite className="block mt-4 text-sm font-medium text-foreground not-italic">
                — Gerry Barrasso, CFP®, CPA, PFS
              </cite>
            </blockquote>
          </div>
        </section>

        {/* What We Believe */}
        <section className="relative w-full bg-muted py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-medium font-serif text-foreground mb-12">
              What We Believe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {beliefs.map((belief) => (
                <div key={belief.title} className="flex flex-col">
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {belief.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-medium font-serif text-foreground mb-4">
              A Team Built for Complexity
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-8 max-w-2xl">
              United isn&apos;t a financial planning firm that happens to do
              taxes, or an accounting firm that dabbles in investments. We
              deliberately built a team with deep expertise across every
              discipline your financial life touches.
            </p>
            <h3 className="text-sm font-medium uppercase tracking-wider text-foreground/40 mb-4">
              In-house capabilities
            </h3>
            <ul className="space-y-3 mb-12">
              {capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-3 text-foreground/70"
                >
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30" />
                  <span className="text-sm leading-relaxed">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Affiliations */}
        <section className="relative w-full bg-muted py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-medium font-serif text-foreground mb-4">
              Held to the Highest Standards
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-8 max-w-2xl">
              United Financial Planning Group is a proud member of NAPFA, the
              nation&apos;s leading organization of fee-only financial planners.
              We also maintain active memberships with:
            </p>
            <div className="flex flex-wrap gap-3">
              {affiliations.map((aff) => (
                <span
                  key={aff}
                  className="px-4 py-2 text-sm bg-background border border-border rounded-full text-foreground/70"
                >
                  {aff}
                </span>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
