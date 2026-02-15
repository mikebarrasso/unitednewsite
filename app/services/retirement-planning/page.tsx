import { Features5 } from "@/components/blocks/features-5";
import Stats2 from "@/components/blocks/stats-2";
import { Footer } from "@/components/footer";
import {
  ProblemSection,
  ApproachSection,
  DifferentiatorSection,
  RetirementCTA,
} from "@/components/retirement-planning-content";
import { ServiceHero } from "@/components/service-hero";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Retirement Planning — United Financial Planning Group",
  description:
    "Most retirement plans ignore the single biggest variable: taxes. Ours is built around it — because the difference between a good retirement and a great one is often what you keep, not what you earn.",
  path: "/services/retirement-planning",
});

export default function RetirementPlanningPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <ServiceHero
          eyebrow="Retirement Planning"
          title="You've Spent Decades Building Wealth. The Next Chapter Is About Making It Last."
          subtitle="Most retirement plans ignore the single biggest variable: taxes. Ours is built around it — because the difference between a good retirement and a great one is often what you keep, not what you earn."
          imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1740&auto=format&fit=crop"
          imageAlt="Couple reviewing retirement plan together"
        />

        <ProblemSection />

        <Stats2 />

        <ApproachSection />

        <Features5 />

        <DifferentiatorSection />

        <RetirementCTA />
      </main>
      <Footer />
    </>
  );
}
