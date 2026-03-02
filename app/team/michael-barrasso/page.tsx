import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { PersonSchema } from "@/components/person-schema";
import { TeamProfile } from "@/components/team-profile";
import { Breadcrumb } from "@/components/breadcrumb";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Michael Barrasso",
  description:
    "Michael Barrasso is the Director of Business Development at United Financial Planning Group, specializing in strategic growth initiatives and operational excellence.",
  path: "/team/michael-barrasso",
});

export default function MichaelBarrassoPage(): ReactNode {
  return (
    <>
      <PersonSchema
        name="Michael Barrasso"
        jobTitle="Director of Business Development"
        description="Director of Business Development at United Financial Planning Group, specializing in strategic growth initiatives and operational excellence."
        image="/SHOT_04_051-scaled%20(4).jpg"
        url="/team/michael-barrasso"
        alumniOf={["Providence College"]}
        knowsAbout={[
          "Business Development",
          "Strategic Growth",
          "Financial Services",
          "Client Relationship Management",
        ]}
      />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          items={[
            { label: "Team", href: "/team" },
            { label: "Michael Barrasso" },
          ]}
        />
        <TeamProfile
          name="Michael Barrasso"
          hasBreadcrumb
          title="Director of Business Development"
          initials="MB"
          image="/SHOT_04_051-scaled%20(4).jpg"
          summary="Director of Business Development at United Financial Planning Group, specializing in strategic growth initiatives and optimizing the firm\u2019s operations to support this growth. In his first year, Michael contributed to the firm\u2019s most successful year yet, supporting the addition of $50M in net new assets under management while streamlining operations to enhance efficiency and client service."
          sections={[
            {
              title: "Background",
              content: [
                "Prior to joining United Financial Planning Group, Michael built his career in Boston\u2019s competitive SaaS sales sector, working at high-growth startups. Starting as a Business Development Representative, he quickly distinguished himself through exceptional cold outreach and relationship-building skills, achieving an outstanding 290% of quota and breaking company records. His performance earned him a rapid promotion to Account Executive.",
                "During Michael\u2019s tenure as an Account Executive on one of Boston\u2019s most elite sales teams, he focused on closing highly complex deals with executives of mid to large sized companies. Michael had the opportunity to witness and contribute to the company\u2019s significant growth from $20M to $50M in Annual Recurring Revenue.",
              ],
            },
            {
              title: "Approach",
              content:
                "Michael brings valuable insights from high-growth SaaS environments to the family business, focusing on strategic sales practices and relationship-building to drive sustainable growth and operational excellence.",
            },
            {
              title: "Personal",
              content:
                "In his free time, Michael enjoys traveling, rooting for the Providence Friars, cars, and building computers.",
            },
          ]}
          education={[
            "Bachelor of Science in Finance \u2014 Providence College, 2021",
          ]}
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
