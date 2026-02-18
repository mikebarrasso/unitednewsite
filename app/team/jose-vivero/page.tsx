import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { PersonSchema } from "@/components/person-schema";
import { TeamProfile } from "@/components/team-profile";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title:
    "Jose Vivero, CFP®, ChFC®, CLU®, RICP® — United Financial Planning Group",
  description:
    "Jose Vivero is a Financial Advisor at United Financial Planning Group with over a decade of experience and multiple advanced designations in financial planning.",
  path: "/team/jose-vivero",
});

export default function JoseViveroPage(): ReactNode {
  return (
    <>
      <PersonSchema
        name="Jose Vivero"
        jobTitle="Financial Advisor"
        description="Financial Advisor at United Financial Planning Group with over a decade of experience and multiple advanced designations in financial planning."
        image="/1600274056286.jpeg"
        credentials={["CFP®", "ChFC®", "CLU®", "RICP®"]}
        url="/team/jose-vivero"
        alumniOf={["Western Connecticut State University"]}
        knowsAbout={[
          "Financial Planning",
          "Retirement Income Planning",
          "Insurance Planning",
          "Estate Coordination",
          "Wealth Management",
        ]}
      />
      <main id="main-content" className="flex-1">
        <TeamProfile
          name="Jose Vivero"
          credentials="CFP®, ChFC®, CLU®, RICP®"
          title="Financial Advisor"
          initials="JV"
          image="/1600274056286.jpeg"
          summary="A dedicated financial professional with over a decade of experience, committed to helping clients achieve their financial goals. Originally from Quito, Ecuador, Jose is a first-generation immigrant who came to the United States to pursue his education and career."
          location="Norwalk, CT"
          sections={[
            {
              title: "Background",
              content: [
                "After a year of studying abroad in Paris in 2012, Jose earned his Bachelor\u2019s degree in Finance from Western Connecticut State University, marking the beginning of his journey in financial services.",
                "Since then, he\u2019s had the privilege of working closely with clients, guiding them through various financial landscapes. He believes in continuous learning and has invested in expanding his expertise to better serve their diverse needs.",
              ],
            },
            {
              title: "Commitment to Excellence",
              content:
                "In 2022, Jose earned his CERTIFIED FINANCIAL PLANNER™ (CFP®) certification, a testament to his commitment to upholding the highest standards in financial planning. He also holds multiple designations from the American College of Financial Services, reflecting the depth and breadth of his financial expertise.",
            },
            {
              title: "Personal",
              content:
                "When not in the office, Jose can be found enjoying a round of golf, catching a tennis match, or cheering on his favorite soccer team. He also loves exploring new destinations and trying out new restaurants. He lives in Norwalk, CT, with his wife, Paula.",
            },
          ]}
          designations={[
            "CERTIFIED FINANCIAL PLANNER™ (CFP®)",
            "Chartered Financial Consultant® (ChFC®)",
            "Chartered Life Underwriter® (CLU®)",
            "Retirement Income Certified Professional® (RICP®)",
          ]}
          education={[
            "Bachelor\u2019s in Finance \u2014 Western Connecticut State University",
            "Study Abroad \u2014 Paris, 2012",
          ]}
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
