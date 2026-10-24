"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const logoTone = "w-auto grayscale opacity-70 dark:brightness-200";

type LogoImage = {
  name: string;
  src: string;
  width: number;
  height: number;
  sizeClass: string;
};

/**
 * Publications that have a matching article on /in-the-media.
 * Logos are used where the site has an asset; the rest render as text.
 */
const featuredLogos: LogoImage[] = [
  {
    name: "The Wall Street Journal",
    src: "/WSJ-LOGO-300x200.webp",
    width: 120,
    height: 80,
    sizeClass: "h-10 sm:h-12",
  },
  {
    name: "Fortune",
    src: "/Fortune_magazine_logo_2016.webp",
    width: 120,
    height: 36,
    sizeClass: "h-7 sm:h-8",
  },
];

const featuredNames: string[] = ["GOBankingRates", "NAPFA Advisor Magazine"];

/** Professional memberships listed in the firm profile. */
const memberships: LogoImage[] = [
  {
    name: "NAPFA",
    src: "/napfa-logo-3.webp",
    width: 120,
    height: 36,
    sizeClass: "h-8 sm:h-10",
  },
  {
    name: "AICPA",
    src: "/AltColorLarge1000x240-1.webp",
    width: 160,
    height: 36,
    sizeClass: "h-8 sm:h-10",
  },
  {
    name: "Garrett Planning Network",
    src: "/Garrett-Planning-Network-logo-med.webp",
    width: 140,
    height: 36,
    sizeClass: "h-8 sm:h-10",
  },
  {
    name: "Fee Only Network",
    src: "/Logo_1200x630.webp",
    width: 140,
    height: 36,
    sizeClass: "h-8 sm:h-10",
  },
];

function LogoGroupLabel({ children }: { children: ReactNode }): ReactNode {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/50">
      {children}
    </p>
  );
}

export function TrustedBy(): ReactNode {
  return (
    <section className="relative w-full bg-background pt-6 pb-12 sm:pt-8 sm:pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-center gap-5">
            <LogoGroupLabel>Featured in</LogoGroupLabel>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {featuredLogos.map((logo) => (
                <li key={logo.name}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className={`${logo.sizeClass} ${logoTone}`}
                  />
                </li>
              ))}
              {featuredNames.map((name) => (
                <li
                  key={name}
                  className="font-serif text-base font-medium text-foreground/60 sm:text-lg"
                >
                  {name}
                </li>
              ))}
            </ul>
            <p className="max-w-md text-center text-xs leading-relaxed text-foreground/50">
              Press mentions of our team. They are not ratings or endorsements
              of our services.{" "}
              <Link
                href="/in-the-media"
                className="underline underline-offset-2 hover:text-foreground/70 transition-colors"
              >
                See the articles
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <LogoGroupLabel>Professional memberships</LogoGroupLabel>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {memberships.map((logo) => (
                <li key={logo.name}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className={`${logo.sizeClass} ${logoTone}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
