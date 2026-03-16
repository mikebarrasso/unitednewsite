import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { PersonSchema } from "@/components/person-schema";
import { TeamProfile } from "@/components/team-profile";
import { WealthtenderReviews } from "@/components/wealthtender-reviews";
import { Breadcrumb } from "@/components/breadcrumb";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Gerry Barrasso, CFP®, CPA, PFS",
  description:
    "Gerry Barrasso is the Founder and President of United Financial Planning Group, with over 30 years of experience in comprehensive wealth management, financial planning, and tax services.",
  path: "/team/gerry-barrasso",
});

export default function GerryBarrassoPage(): ReactNode {
  return (
    <>
      <PersonSchema
        name="Gerry Barrasso"
        jobTitle="President & Founder"
        description="Founder and President of United Financial Planning Group, with over 30 years of experience in comprehensive wealth management, financial planning, and tax services."
        image="/240710_AJ3385-scaled%20(2).jpg"
        credentials={["CFP®", "CPA", "PFS"]}
        url="/team/gerry-barrasso"
        linkedIn="https://www.linkedin.com/in/gerrybarrasso/"
        alumniOf={["Hofstra University", "St. John\u2019s University", "Fordham University"]}
        knowsAbout={[
          "Wealth Management",
          "Financial Planning",
          "Tax Planning",
          "Tax Preparation",
          "Retirement Planning",
          "Investment Management",
        ]}
      />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Team", href: "/team" },
            { label: "Gerry Barrasso" },
          ]}
        />
        <TeamProfile
          name="Gerry Barrasso"
          hasBreadcrumb
          credentials="CFP®, CPA, PFS"
          title="President & Founder"
          initials="GB"
          image="/240710_AJ3385-scaled%20(2).jpg"
          summary="Founder and President of United Financial Planning Group, a fee-only Registered Investment Advisory (RIA) firm. With over 30 years of finance experience, Gerry specializes in providing comprehensive wealth management, integrated financial planning, and advanced tax planning and preparation services."
          location="Smithtown, NY"
          linkedIn="https://www.linkedin.com/in/gerrybarrasso/"
          sections={[
            {
              title: "Background",
              content: [
                "Gerry began his career in 1991 as a CPA with Price Waterhouse, where he developed extensive expertise in corporate finance, taxation, SEC reporting, and investing, particularly within the technology sector. His experience includes helping take several startups public and serving as Corporate Controller for a prominent publicly traded company on Long Island.",
                "Driven by his passion for transparency and fiduciary responsibility, Gerry founded United Financial Planning Group to create a firm fully aligned with client interests.",
              ],
            },
            {
              title: "Approach",
              content: [
                "As a CPA, he emphasizes an integrated approach, uniquely combining financial planning, wealth management, and sophisticated tax strategies, distinguishing himself from many advisors who outsource tax due to complexity.",
                "His goal is to serve as a trusted, comprehensive financial resource for retirees, those nearing retirement, small business owners, high-net-worth individuals and families, and high-earning professionals nationwide.",
              ],
            },
            {
              title: "Community & Personal",
              content:
                "Outside of work, Gerry actively participates in community charitable organizations such as Big Brothers Big Sisters of Long Island and St. Jude\u2019s Children\u2019s Hospital, and enjoys outdoor activities including tennis, triathlons, and spending time with his family.",
            },
          ]}
          designations={[
            "Certified Public Accountant (CPA)",
            "CERTIFIED FINANCIAL PLANNER® (CFP®)",
            "Personal Financial Specialist (PFS)",
          ]}
          education={[
            "BBA in Finance \u2014 Hofstra University",
            "MBA in Accounting \u2014 St. John\u2019s University",
            "Certificate in Financial Planning \u2014 Fordham University",
          ]}
          extraTabs={[
            {
              label: "Reviews",
              content: <WealthtenderReviews profileId="35442" />,
            },
          ]}
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
