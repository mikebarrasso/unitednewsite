import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { TeamProfile } from "@/components/team-profile";
import { WealthtenderReviews } from "@/components/wealthtender-reviews";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Ryan Derousseau, CFP\u00AE, EA — United Financial Planning Group",
  description:
    "Ryan Derousseau is a Certified Financial Planner\u2122 and Enrolled Agent at United Financial Planning Group, specializing in working with growing families, career changers, therapists, and the self-employed.",
  path: "/team/ryan-derousseau",
});

export default function RyanDerousseauPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <TeamProfile
          name="Ryan Derousseau"
          credentials="CFP\u00AE, EA"
          title="Financial Advisor"
          initials="RD"
          summary="Ryan specializes in working with growing families, career changers, mid-to-late career professionals, therapists, private and group practitioners, and the self-employed \u2014 enabling them to thrive financially so they can focus on other life goals."
          location="Hauppauge & Huntington, NY (also serves clients virtually nationwide)"
          sections={[
            {
              title: "Approach",
              content: [
                "With the ability to work with families, professionals, therapists, and the self-employed across the country, Ryan listens, guides, and encourages clients to unlock the value of their finances. This builds better life-balance, wealth, and success, while your own goals, patients, or client experiences flourish.",
                "He\u2019s taken his years of experience working for himself and his deep knowledge of the financial space to build a process to help clients align their finances or business with their goals, family, and future at the forefront.",
              ],
            },
            {
              title: "Areas of Focus",
              content: [
                "Cash Flow Management \u2022 Goal Development \u2022 Ongoing Tax Optimization \u2022 Investment Strategy or Management \u2022 Wealth and Risk Management \u2022 Financial Independence or Retirement Planning \u2022 Succession Planning",
              ],
            },
            {
              title: "Published Work",
              content:
                "An active writer, Ryan has been read by millions, published in publications such as Fortune, Money, and Forbes, discussing personal finance, investing, and small business issues. You can find his most recent thoughts on the financial and planning space for therapists and the self-employed at PsychologyToday.com and Forbes.com.",
            },
            {
              title: "Personal",
              content:
                "Ryan lives in Huntington, NY with his wife, two kids, and two small dogs. You will often find him discussing movies or basketball when not delving into someone\u2019s financial picture or serving as a jungle gym for his children. When he\u2019s not in New York, he\u2019s often visiting family in the Dallas-Fort Worth area.",
            },
          ]}
          designations={[
            "CERTIFIED FINANCIAL PLANNER\u2122 (CFP\u00AE)",
            "Enrolled Agent (EA)",
          ]}
          education={[
            "Master\u2019s in Business and Economic Reporting \u2014 New York University",
            "Certificate of Financial Planning \u2014 Boston University",
          ]}
          extraTabs={[
            {
              label: "Reviews",
              content: <WealthtenderReviews profileId="41366" />,
            },
          ]}
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
