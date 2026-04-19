import { ArrowRight, Shield, MapPin } from "lucide-react";
import Link from "next/link";
import { type ReactNode } from "react";
import { LazyWebGLBackground } from "@/components/webgl-background-lazy";

export function LocalHero({
  headline,
  subtitle,
  badge,
  locationLabel,
}: {
  headline: string;
  subtitle: string;
  badge?: string;
  locationLabel: string;
}): ReactNode {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      <LazyWebGLBackground />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 sm:px-8">
        <div className="relative w-full max-w-270 lg:h-112 py-8 lg:py-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10" />

          <div className="absolute -left-0.75 -top-0.75 w-1.5 h-1.5 bg-white" />
          <div className="absolute -right-0.75 -top-0.75 w-1.5 h-1.5 bg-white" />
          <div className="absolute -left-0.75 -bottom-0.75 w-1.5 h-1.5 bg-white" />
          <div className="absolute -right-0.75 -bottom-0.75 w-1.5 h-1.5 bg-white" />

          <div className="absolute top-0 right-full h-px bg-white/10 w-screen" />
          <div className="absolute top-0 left-full h-px bg-white/10 w-screen" />
          <div className="absolute bottom-0 right-full h-px bg-white/10 w-screen" />
          <div className="absolute bottom-0 left-full h-px bg-white/10 w-screen" />

          <div className="absolute left-0 bottom-full w-px bg-white/10 h-screen" />
          <div className="absolute left-0 top-full w-px bg-white/10 h-screen" />
          <div className="absolute right-0 bottom-full w-px bg-white/10 h-screen" />
          <div className="absolute right-0 top-full w-px bg-white/10 h-screen" />

          <div className="relative w-full h-full flex flex-col items-start lg:items-center justify-center pointer-events-auto px-4 lg:px-6">
            <div className="flex items-center gap-2 pl-3 pr-4 py-1.5 bg-white rounded-full mb-6">
              <MapPin className="w-3.5 h-3.5 text-black" aria-hidden="true" />
              <span className="text-xs font-medium text-black">
                {badge ?? "Fee-Only · Fiduciary · No Exceptions"}
              </span>
            </div>

            <h1 className="w-full text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-white text-left lg:text-center leading-tighter tracking-tight max-w-4xl">
              {headline}
            </h1>

            <p className="mt-5 text-lg text-white/70 text-left lg:text-center max-w-2xl">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-10 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group h-12 px-6 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 active:scale-[0.97] transition-all duration-150 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Schedule a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="h-12 px-6 text-sm font-medium border border-white/20 text-white rounded-full hover:bg-white/10 active:scale-[0.97] transition-all duration-150 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Explore Our Services
              </Link>
            </div>

            <p className="flex items-center gap-2 mt-6 text-sm text-white/60">
              <Shield className="w-4 h-4" />
              {locationLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
