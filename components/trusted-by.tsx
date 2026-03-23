"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { LogoLoop, type LogoItem } from "@/components/logo-loop";

const ease = [0.16, 1, 0.3, 1] as const;

const logos: LogoItem[] = [
  {
    node: (
      <Image
        src="/forbes.svg"
        alt="Forbes"
        width={120}
        height={36}
        className="h-7 sm:h-8 w-auto grayscale opacity-70 dark:brightness-200"
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
        className="h-7 sm:h-8 w-auto grayscale opacity-70 dark:brightness-200"
      />
    ),
  },
  {
    node: (
      <Image
        src="/MarketWatch-Logo-PNG-Grayscale.webp"
        alt="MarketWatch"
        width={160}
        height={36}
        className="h-6 sm:h-7 w-auto grayscale opacity-70 dark:brightness-200"
      />
    ),
  },
  {
    node: (
      <Image
        src="/napfa-logo-3.webp"
        alt="NAPFA"
        width={120}
        height={36}
        className="h-8 sm:h-10 w-auto grayscale opacity-70 dark:brightness-200"
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
        className="h-8 sm:h-10 w-auto grayscale opacity-70 dark:brightness-200"
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
        className="h-8 sm:h-10 w-auto grayscale opacity-70 dark:brightness-200"
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
        className="h-8 sm:h-10 w-auto grayscale opacity-70 dark:brightness-200"
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
          <LogoLoop logos={logos} speed={40} logoHeight={40} gap={80} />
        </motion.div>
      </div>
    </section>
  );
}
