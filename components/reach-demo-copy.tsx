"use client";

import { useSearchParams } from "next/navigation";
import { type ReactNode, useSyncExternalStore } from "react";

function subscribeToFrameState(): () => void {
  return () => {};
}

function getFrameState(): boolean {
  return window.self !== window.parent;
}

function getServerFrameState(): boolean {
  return false;
}

function useReachDemoReview(): boolean {
  const searchParams = useSearchParams();
  const isFramed = useSyncExternalStore(
    subscribeToFrameState,
    getFrameState,
    getServerFrameState,
  );

  return isFramed && searchParams.get("wr_demo") === "review";
}

function HeroCopy({ demoReview }: { demoReview: boolean }): ReactNode {
  return (
    <>
      <h1 className="leading-tighter w-full max-w-4xl text-left font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-center">
        {demoReview ? (
          <>
            Retire with a plan you understand &mdash; and a team that answers.
          </>
        ) : (
          <>Integrated Financial Planning, Wealth Management &amp; Tax</>
        )}
      </h1>

      <p className="mt-5 max-w-2xl text-left text-lg text-white/70 lg:text-center">
        {demoReview ? (
          <>
            Independent, fiduciary advice for families who want clarity, not
            jargon.
          </>
        ) : (
          <>
            United Financial Planning Group brings financial planning,
            investment management, tax planning, and tax preparation together
            under one roof, so every decision works in concert, not in conflict.
          </>
        )}
      </p>
    </>
  );
}

export function BaselineHeroCopy(): ReactNode {
  return <HeroCopy demoReview={false} />;
}

export function ReachDemoHeroCopy(): ReactNode {
  return <HeroCopy demoReview={useReachDemoReview()} />;
}

function GerryBio({ demoReview }: { demoReview: boolean }): ReactNode {
  return (
    <p>
      {demoReview ? (
        <>
          Gerry has spent more than three decades helping families coordinate
          investments, taxes, and retirement decisions with confidence. He
          started his career as a tax preparer, sitting across the table from
          clients, reviewing their returns, and getting an unusually complete
          view of their financial lives. That work brought him into regular
          contact with the investment advisors those same clients were working
          with, and what he saw troubled him.
        </>
      ) : (
        <>
          Gerry started his career as a tax preparer, sitting across the table
          from clients, reviewing their returns, and getting an unusually
          complete view of their financial lives. That work brought him into
          regular contact with the investment advisors those same clients were
          working with, and what he saw troubled him.
        </>
      )}
    </p>
  );
}

export function BaselineGerryBio(): ReactNode {
  return <GerryBio demoReview={false} />;
}

export function ReachDemoGerryBio(): ReactNode {
  return <GerryBio demoReview={useReachDemoReview()} />;
}
