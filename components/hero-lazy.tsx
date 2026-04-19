import { Hero } from "@/components/hero";
import type { ReactNode } from "react";

// Kept as a thin re-export for backwards compatibility with imports that used
// the old client-only "lazy" wrapper. The Hero is now SSR-safe; only the
// WebGL canvas is dynamically loaded inside it.
export function LazyHero(): ReactNode {
  return <Hero />;
}
