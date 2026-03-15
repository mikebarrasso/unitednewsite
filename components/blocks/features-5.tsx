"use client";

import { motion } from "motion/react";
import {
  HandCoins,
  ChartLine,
  FileSpreadsheet,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

export function Features5() {
  const features = [
    {
      icon: HandCoins,
      title: "Withdrawal Sequencing & Income Strategy",
      description:
        "Which accounts do you draw from first, and when do you switch? We design a withdrawal plan across taxable, tax-deferred, and tax-free accounts that minimizes your lifetime tax burden, not just this year's bracket.",
    },
    {
      icon: ChartLine,
      title: "Social Security Optimization",
      description:
        "The difference between the best and worst claiming strategy for a married couple can be six figures over a lifetime. We model your specific situation (factoring in your tax picture, your other income sources, and your longevity assumptions) so you make this irreversible decision with confidence.",
    },
    {
      icon: FileSpreadsheet,
      title: "Roth Conversion Planning",
      description:
        "There's often a window (especially in the years between retirement and RMDs) where strategic Roth conversions can dramatically reduce your future tax burden. We identify those windows and size the conversions to stay within optimal brackets year by year.",
    },
    {
      icon: HeartPulse,
      title: "Medicare & Healthcare Cost Planning",
      description:
        "IRMAA surcharges can quietly add thousands to your annual healthcare costs if your income crosses certain thresholds. We model retirement income decisions with Medicare brackets in mind, so a smart tax move in one year doesn't become an expensive healthcare surprise two years later.",
    },
    {
      icon: ShieldCheck,
      title: "RMD Management",
      description:
        "Required minimum distributions force taxable income whether you need it or not. We build strategies to reduce the impact of RMDs before they begin (through Roth conversions, charitable giving, and bracket management) and manage them tax-efficiently once they start.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
      {/* Dashed background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(30, 110, 174, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30, 110, 174, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 100% 100% at 100% 0%, #000 24%, transparent 82%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 100% 100% at 100% 0%, #000 24%, transparent 82%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl tracking-tight sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6 max-w-4xl"
          >
            Core Areas We Manage in Retirement Planning
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base tracking-tight sm:text-lg text-muted-foreground mb-2 max-w-3xl"
          >
            Five interconnected decisions that determine how long your money
            lasts, and how much you keep after taxes.
          </motion.p>
        </div>

        {/* Features Grid - bordered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border rounded-2xl overflow-hidden">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-8 md:p-10 bg-card
                  ${index !== features.length - 1 ? "border-b border-border" : ""}
                  ${index % 2 === 0 && index !== features.length - 1 ? "md:border-r md:border-border" : ""}
                  ${(index + 1) % 3 !== 0 ? "lg:border-r lg:border-border" : ""}
                  ${index < 3 ? "lg:border-b lg:border-border" : ""}
                `}
              >
                {/* Icon - Centered */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <Icon
                      className="w-full h-full text-[#1e6eae]"
                      strokeWidth={0.5}
                    />
                  </div>
                </div>

                <h3 className="text-lg tracking-tight sm:text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm tracking-tight sm:text-base text-muted-foreground leading-normal">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
