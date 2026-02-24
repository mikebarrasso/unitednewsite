import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { TeamCard } from "@/components/team-card";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Meet The Team — United Financial Planning Group",
  description:
    "Meet the team of CFPs, CPAs, and Enrolled Agents at United Financial Planning Group. Every discipline under one roof.",
  path: "/team",
});

const teamMembers = [
  {
    name: "Gerry Barrasso",
    credentials: "CFP®, CPA, PFS",
    title: "President & Founder",
    bio: "With over 30 years of experience as both a CPA and CFP®, Gerry built United around a simple idea: financial planning, investments, and taxes shouldn't live in separate offices with professionals who never compare notes.",
    initials: "GB",
    accentColor: "oklch(0.524 0.125 247.8)",
    href: "/team/gerry-barrasso",
    image: "/240710_AJ3385-scaled%20(2).jpg",
  },
  {
    name: "Michael Barrasso",
    credentials: "",
    title: "Director of Business Development",
    bio: "Michael drives the growth and strategic direction of United, building relationships and ensuring prospective clients find the integrated financial guidance they\u2019ve been looking for.",
    initials: "MB",
    accentColor: "oklch(0.618 0.120 244.3)",
    href: "/team/michael-barrasso",
    image: "/SHOT_04_051-scaled%20(4).jpg",
  },
  {
    name: "Ryan Derousseau",
    credentials: "CFP®, EA",
    title: "Financial Advisor",
    bio: "As both a Certified Financial Planner™ and Enrolled Agent, Ryan brings a rare dual perspective — aligning your financial plan with tax-efficient strategies that work in practice, not just on paper.",
    initials: "RD",
    accentColor: "oklch(0.524 0.125 247.8)",
    href: "/team/ryan-derousseau",
    image: "/SHOT_02_003-scaled.jpg",
  },
  {
    name: "Jose Vivero",
    credentials: "CFP®, ChFC®, CLU®, RICP®",
    title: "Financial Advisor",
    bio: "Jose's deep roster of designations reflects his commitment to mastering every dimension of financial planning — from retirement income strategies to insurance and estate coordination.",
    initials: "JV",
    accentColor: "oklch(0.618 0.120 244.3)",
    href: "/team/jose-vivero",
    image: "/1600274056286.jpeg",
  },
  {
    name: "Diana David",
    credentials: "",
    title: "Client Services Manager",
    bio: "Diana is the connective tissue of the firm. She ensures every client interaction is seamless, every question gets answered, and every detail is handled with care and precision.",
    initials: "DD",
    accentColor: "oklch(0.524 0.125 247.8)",
    image: "/Diana_David_6J2A2747L-1024x1024.jpg",
  },
  {
    name: "Petr Perecinsky",
    credentials: "EA",
    title: "Tax Preparer",
    bio: "As an Enrolled Agent, Petr brings specialized tax expertise to the team — preparing returns with the full context of each client's financial picture, not just the numbers on a form.",
    initials: "PP",
    accentColor: "oklch(0.618 0.120 244.3)",
    image: "/SHOT_03_006-1024x1024.jpg",
  },
  {
    name: "Christine Backel",
    credentials: "CPA, CFP®",
    title: "Consultant",
    bio: "Christine combines CPA and CFP® expertise as a consultant, providing targeted guidance on complex tax and financial planning questions that require both disciplines working together.",
    initials: "CB",
    accentColor: "oklch(0.524 0.125 247.8)",
    image: "/240710_AJ4473-1024x1024.jpg",
  },
];

export default function TeamPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative w-full bg-muted pt-40 pb-24 sm:pb-32">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-foreground leading-tight">
              Meet The Team
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              CFPs, CPAs, and Enrolled Agents working together under one roof
              &mdash; so every aspect of your financial life is understood,
              coordinated, and optimized.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="relative w-full bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h2 className="sr-only">Our Advisory Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
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
