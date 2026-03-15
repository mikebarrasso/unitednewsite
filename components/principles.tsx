"use client";

import { type ReactNode } from "react";
import { Clock, Building2, BarChart3, Gem } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

type AudienceCard = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
};

const audiences: AudienceCard[] = [
  {
    icon: <Clock className="w-10 h-10" strokeWidth={1} />,
    title: "Approaching or in Retirement",
    description:
      "We coordinate your Social Security timing, Roth conversion strategies, required minimum distributions, and estate considerations into one cohesive plan.",
    href: "/services/retirement-planning",
  },
  {
    icon: <Building2 className="w-10 h-10" strokeWidth={1} />,
    title: "Business Owners",
    description:
      "Between personal finances, business cash flow, entity structuring, and your eventual exit, we see the whole board: succession planning, tax-efficient compensation, and personal wealth building.",
    href: "/services/tax-planning",
  },
  {
    icon: <BarChart3 className="w-10 h-10" strokeWidth={1} />,
    title: "Executives with Equity Compensation",
    description:
      "ISOs, NSOs, RSUs, ESPP shares: each with different tax treatment and timing decisions. We build exercise and diversification strategies that align with your broader financial picture.",
    href: "/services/investment-management",
  },
  {
    icon: <Gem className="w-10 h-10" strokeWidth={1} />,
    title: "High-Net-Worth Individuals",
    description:
      "Whether navigating a liquidity event, managing concentrated stock positions, or preserving significant wealth, you need advice that accounts for complexity, not a cookie-cutter model.",
    href: "/services/financial-planning",
  },
];

export function Principles(): ReactNode {
  return (
    <section className="relative w-full bg-muted text-foreground py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight max-w-3xl"
          >
            Built for Financial Lives That{" "}
            <span className="italic">Don&apos;t Fit in a Template</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease }}
            >
              <Link
                href={audience.href}
                className="group flex flex-col p-8 bg-background border border-border rounded-sm hover:border-foreground/20 hover:shadow-lg transition-all h-full"
              >
                <div className="mb-4 text-foreground/70">
                  {audience.icon}
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {audience.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
