"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

type ServiceHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
  customVisual?: ReactNode;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  hasBreadcrumb?: boolean;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function ServiceHero({
  eyebrow = "Integrated Financial Guidance",
  title,
  subtitle,
  imageUrl,
  imageAlt = "",
  customVisual,
  primaryCtaHref = "/contact",
  primaryCtaLabel = "Schedule a Conversation",
  secondaryCtaHref = "/services",
  secondaryCtaLabel = "Explore Services",
  hasBreadcrumb = false,
}: ServiceHeroProps): ReactNode {
  return (
    <section className={`w-full flex items-start lg:items-center ${hasBreadcrumb ? "pt-6 pb-20 sm:pt-8 sm:pb-24" : "pt-32 pb-20 sm:pt-36 sm:pb-24"} px-4 sm:px-6 lg:px-8 bg-background`}>
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="flex items-center gap-2 sm:gap-3 rounded-full border border-border p-1 w-fit"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-medium">
                United
              </span>
              <span className="text-sm sm:text-base text-foreground/80 mr-2">
                {eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium font-serif text-foreground leading-[1.1]"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm sm:text-base hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                {primaryCtaLabel}
              </Link>
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm sm:text-base hover:bg-muted transition-colors w-full sm:w-auto"
              >
                {secondaryCtaLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="relative w-full h-auto"
          >
            {customVisual ? (
              <div className="relative w-full h-full min-h-[280px] sm:min-h-[520px] rounded-4xl bg-muted overflow-hidden border border-border/60 flex items-center justify-center">
                {customVisual}
              </div>
            ) : (
              <div className="relative w-full h-full min-h-[280px] sm:min-h-[520px] rounded-4xl bg-muted overflow-hidden border border-border/60">
                <Image
                  src={imageUrl ?? ""}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
