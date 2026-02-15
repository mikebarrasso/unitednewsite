"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Clock, Building2, BarChart3, Gem } from "lucide-react";

export function Features2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const features = [
    {
      title: "Approaching or in Retirement",
      icon: Clock,
      description:
        "We coordinate your Social Security timing, Roth conversion strategies, required minimum distributions, and estate considerations into one cohesive plan.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
      card: {
        title: "Retirement Coordination",
        items: [
          {
            label: "Social Security timing optimized",
            status: "Complete",
            detail: "Claiming at 67 — $4,200/mo",
          },
          {
            label: "Roth conversion strategy",
            status: "In Progress",
            detail: "$85K converted in low-bracket year",
          },
          {
            label: "RMD pre-planning active",
            status: "On Track",
            detail: "Projected savings: $142K",
          },
        ],
      },
    },
    {
      title: "Business Owners",
      icon: Building2,
      description:
        "Between personal finances, business cash flow, entity structuring, and your eventual exit, we see the whole board — succession planning, tax-efficient compensation, and personal wealth building.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
      card: {
        title: "Business & Personal Integration",
        items: [
          {
            label: "Entity structure reviewed",
            status: "Optimized",
            detail: "S-Corp election saving $38K/yr",
          },
          {
            label: "Succession plan drafted",
            status: "In Review",
            detail: "Buy-sell agreement funded",
          },
          {
            label: "Owner compensation strategy",
            status: "Active",
            detail: "Salary/distribution split optimized",
          },
        ],
      },
    },
    {
      title: "Executives with Equity Compensation",
      icon: BarChart3,
      description:
        "ISOs, NSOs, RSUs, ESPP shares — each with different tax treatment and timing decisions. We build exercise and diversification strategies that align with your broader financial picture.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
      card: {
        title: "Equity Comp Strategy",
        items: [
          {
            label: "ISO exercise plan modeled",
            status: "Ready",
            detail: "AMT impact: $12K vs $47K naive",
          },
          {
            label: "RSU vesting tax strategy",
            status: "Active",
            detail: "Withholding adjusted for bracket",
          },
          {
            label: "Concentration risk managed",
            status: "Monitoring",
            detail: "Single-stock down to 18% of NW",
          },
        ],
      },
    },
    {
      title: "High-Net-Worth Individuals",
      icon: Gem,
      description:
        "Whether navigating a liquidity event, managing concentrated stock positions, or preserving significant wealth, you need advice that accounts for complexity — not a cookie-cutter model.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      card: {
        title: "Wealth Preservation",
        items: [
          {
            label: "Charitable giving strategy",
            status: "Executing",
            detail: "DAF funded — $250K tax benefit",
          },
          {
            label: "Estate plan coordinated",
            status: "Current",
            detail: "Trust structures reviewed 2026",
          },
          {
            label: "Multi-generational planning",
            status: "Active",
            detail: "529s & gifting strategy aligned",
          },
        ],
      },
    },
  ];

  useEffect(() => {
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [features.length]);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 5000);
    }
  };

  const statusColor = (status: string) => {
    switch (status) {
      case "Complete":
      case "Optimized":
      case "Current":
        return "bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-400";
      case "In Progress":
      case "In Review":
      case "Active":
      case "Executing":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400";
      case "On Track":
      case "Ready":
      case "Monitoring":
        return "bg-slate-100 dark:bg-slate-800/30 text-slate-700 dark:text-slate-400";
      default:
        return "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400";
    }
  };

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left Column */}
          <div className="flex flex-col lg:pr-12 xl:pr-16">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6 leading-tight"
              >
                Built for Financial Lives That{" "}
                <span className="italic">Don&apos;t Fit in a Template</span>
              </motion.h2>
            </div>

            {/* Separator */}
            <div className="w-full lg:w-[calc(100%+3rem)] xl:w-[calc(100%+4rem)] h-px bg-border mb-8" />

            {/* Feature List */}
            <div className="space-y-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    onClick={() => handleFeatureClick(index)}
                    className={`w-full text-left flex items-start gap-3 py-3 px-4 rounded-lg transition-[background-color] duration-200 cursor-pointer ${
                      isActive
                        ? "bg-muted"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 mt-0.5 shrink-0 transition-colors duration-200 ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    />
                    <div>
                      <span
                        className={`text-base sm:text-lg font-medium transition-colors duration-200 block ${
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {feature.title}
                      </span>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-muted-foreground leading-relaxed mt-1 overflow-hidden"
                          >
                            {feature.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image with Overlay Card */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-muted max-h-[650px]"
            >
              {/* Background Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-30"
                />
              </AnimatePresence>

              {/* Overlay Card */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-2.5 flex items-center justify-center">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={activeIndex}
                      initial={{ y: "250%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-250%" }}
                      transition={{
                        duration: 1.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="w-full max-w-md absolute mx-auto"
                    >
                      <div className="bg-background/80 backdrop-blur-md rounded-2xl p-1 shadow-lg">
                        <div className="bg-background rounded-xl p-6">
                          <h3 className="text-lg font-semibold text-foreground mb-4">
                            {features[activeIndex].card.title}
                          </h3>

                          <div className="space-y-3">
                            {features[activeIndex].card.items.map(
                              (item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start justify-between gap-3 py-2"
                                >
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm text-foreground font-medium mb-1">
                                      {item.label}
                                    </p>
                                    <div className="flex items-center gap-2">
                                      <span
                                        className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${statusColor(item.status)}`}
                                      >
                                        {item.status}
                                      </span>
                                      <span className="text-xs text-muted-foreground">
                                        {item.detail}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
