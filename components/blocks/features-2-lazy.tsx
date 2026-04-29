"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

// Same outer dimensions/spacing as Features2 to avoid layout shift while
// the heavier interactive carousel chunk loads.
function Features2Placeholder(): ReactNode {
  return (
    <section
      aria-hidden="true"
      className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          <div className="lg:min-h-[650px]" />
          <div className="relative">
            <div className="relative w-full aspect-[3/4] rounded-3xl bg-muted max-h-[650px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

const Features2 = dynamic(
  () => import("@/components/blocks/features-2").then((m) => m.Features2),
  {
    loading: () => <Features2Placeholder />,
  },
);

export function LazyFeatures2(): ReactNode {
  return <Features2 />;
}
