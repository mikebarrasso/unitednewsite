"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { LogoLoop, type LogoItem } from "@/components/logo-loop";

const ease = [0.16, 1, 0.3, 1] as const;

const logoTone = "w-auto grayscale opacity-70 dark:brightness-200";

/**
 * Press logos need a matching article on /in-the-media.
 * Membership logos come from the firm profile.
 */
const logos: LogoItem[] = [
  {
    node: (
      <Image
        src="/WSJ-LOGO-300x200.webp"
        alt="The Wall Street Journal"
        width={120}
        height={80}
        className={`h-10 sm:h-12 ${logoTone}`}
      />
    ),
  },
  {
    node: (
      <Image
        src="/Fortune_magazine_logo_2016.webp"
        alt="Fortune"
        width={120}
        height={36}
        className={`h-7 sm:h-8 ${logoTone}`}
      />
    ),
  },
  {
    node: (
      <span className="font-serif text-lg font-medium text-foreground/60 whitespace-nowrap">
        GOBankingRates
      </span>
    ),
  },
  {
    node: (
      <Image
        src="/napfa-logo-3.webp"
        alt="NAPFA"
        width={120}
        height={36}
        className={`h-8 sm:h-10 ${logoTone}`}
      />
    ),
  },
  {
    node: (
      <Image
        src="/AltColorLarge1000x240-1.webp"
        alt="AICPA"
        width={160}
        height={36}
        className={`h-8 sm:h-10 ${logoTone}`}
      />
    ),
  },
  {
    node: (
      <Image
        src="/Garrett-Planning-Network-logo-med.webp"
        alt="Garrett Planning Network"
        width={140}
        height={36}
        className={`h-8 sm:h-10 ${logoTone}`}
      />
    ),
  },
  {
    node: (
      <Image
        src="/Logo_1200x630.webp"
        alt="Fee Only Network"
        width={140}
        height={36}
        className={`h-8 sm:h-10 ${logoTone}`}
      />
    ),
  },
];

export function TrustedBy(): ReactNode {
  return (
    <section className="relative w-full bg-background pt-6 pb-12 sm:pt-8 sm:pb-16">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="w-full"
        >
          <p className="mb-6 px-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-foreground/50">
            Press mentions and professional memberships
          </p>
          <LogoLoop logos={logos} speed={40} logoHeight={40} gap={80} />
          <p className="mx-auto mt-6 max-w-xl px-6 text-center text-xs leading-relaxed text-foreground/50">
            Press logos reflect mentions of our team and are not ratings or
            endorsements of our services.{" "}
            <Link
              href="/in-the-media"
              className="underline underline-offset-2 hover:text-foreground/70 transition-colors"
            >
              See the articles
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
