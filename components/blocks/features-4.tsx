"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Clock, BarChart3, Briefcase, Building2 } from "lucide-react";

interface Features4Props {
  autoPlay?: boolean;
  autoPlayDelay?: number;
}

export function Features4({
  autoPlay = true,
  autoPlayDelay = 5000,
}: Features4Props) {
  const [activeTab, setActiveTab] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const tabs = [
    {
      icon: Clock,
      title: "Retirement & Income Strategy",
      description:
        "Coordinate withdrawal sequencing, Social Security timing, Roth conversions, and portfolio decisions into one cohesive blueprint, modeled against your actual tax situation, not rules of thumb.",
      features: [
        "Tax-aware withdrawal sequencing across account types",
        "Social Security claiming scenario modeling",
        "Roth conversion window analysis",
        "Medicare IRMAA surcharge avoidance planning",
      ],
    },
    {
      icon: BarChart3,
      title: "Tax-Integrated Investment Planning",
      description:
        "Your portfolio shouldn't be managed in isolation from your tax return. We build investment strategies that account for asset location, capital gains timing, and bracket management, because after-tax returns are the only returns that matter.",
      features: [
        "Asset location optimization across taxable, IRA, and Roth accounts",
        "Capital gains timing coordinated with your tax bracket",
        "Tax-loss harvesting tied to your actual tax situation",
        "Rebalancing decisions that consider the tax cost first",
      ],
    },
    {
      icon: Briefcase,
      title: "Equity Compensation & Complex Assets",
      description:
        "ISOs, NSOs, RSUs, ESPP shares, concentrated positions: each one carries different tax treatment and timing risk. We model strategies across your full financial picture so nothing is decided in a vacuum.",
      features: [
        "ISO/NSO exercise timing and AMT impact modeling",
        "RSU vesting tax strategy and withholding adjustments",
        "Concentrated position diversification on your timeline",
        "ESPP optimization and holding period analysis",
      ],
    },
    {
      icon: Building2,
      title: "Business Owner Planning",
      description:
        "When you own a business, your personal finances and your business finances are inseparable. We handle business bookkeeping, business tax returns, and personal tax returns under one roof, so your financial plan accounts for both sides of your life as one connected strategy.",
      features: [
        "Business and personal tax returns prepared together",
        "Entity structure and compensation optimization",
        "Cash flow coordination between business and personal accounts",
        "Retirement plan design for owners and key employees",
      ],
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % tabs.length);
      }, autoPlayDelay);
    };

    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, autoPlayDelay, tabs.length]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    if (autoPlay && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % tabs.length);
      }, autoPlayDelay);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-foreground mb-4"
          >
            Core Planning Areas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Every area of your financial life, coordinated by one team that sees
            the full picture.
          </motion.p>
        </div>

        {/* Tabbed Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Tab Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;

              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => handleTabClick(index)}
                  className={`w-full text-left p-4 md:p-6 rounded-2xl transition-[border-color,background-color] duration-200 flex-1 flex items-start ${
                    isActive
                      ? "bg-[#1e6eae]/[0.07] border border-[#1e6eae]/20"
                      : "bg-muted/40 border border-border hover:bg-muted/70"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-base md:text-lg font-semibold mb-1 ${
                          isActive
                            ? "text-foreground"
                            : "text-foreground/80"
                        }`}
                      >
                        {tab.title}
                      </h3>
                      <p
                        className={`text-sm line-clamp-2 ${
                          isActive
                            ? "text-muted-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {tab.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-8 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-border bg-background p-6 md:p-8 lg:p-10 flex-1"
              >
                {/* Content Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1e6eae]/[0.08] mb-6">
                    {(() => {
                      const Icon = tabs[activeTab]?.icon;
                      if (!Icon) return null;
                      return (
                        <Icon className="w-8 h-8 text-[#1e6eae]" />
                      );
                    })()}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                    {tabs[activeTab]?.title}
                  </h3>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {tabs[activeTab]?.description}
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  {tabs[activeTab]?.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-muted/40"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                        <svg
                          className="w-4 h-4 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-foreground/80 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
