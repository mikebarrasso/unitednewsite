"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

// SSR fallback: a CSS gradient that matches the brand palette used in the
// WebGL shader. Keeps the hero looking right before/while the canvas loads.
function StaticBrandGradient(): ReactNode {
  return (
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 100%, rgba(30,110,174,0.55) 0%, rgba(11,26,46,0.95) 55%, #050b16 100%)",
      }}
    />
  );
}

const WebGLBackground = dynamic(
  () => import("@/components/webgl-background").then((m) => m.WebGLBackground),
  {
    ssr: false,
    loading: () => <StaticBrandGradient />,
  },
);

export function LazyWebGLBackground(): ReactNode {
  return <WebGLBackground />;
}
