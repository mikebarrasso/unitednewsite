"use client";

import { motion } from "motion/react";
import {
  HandCoins,
  Target,
  ShieldCheck,
  HeartPulse,
  Heart,
  TrendingDown,
} from "lucide-react";
import { useEffect, useRef } from "react";

export function Features3() {
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  const howWeWork = [
    {
      icon: HandCoins,
      title: "Wealth Coordination",
      description:
        "Map income, assets, and liquidity across every account so you can see the full picture, and so every dollar has a purpose.",
    },
    {
      icon: Target,
      title: "Goal & Milestone Tracking",
      description:
        "Set measurable benchmarks and adjust as life changes, not just once a year during a review meeting.",
    },
    {
      icon: ShieldCheck,
      title: "Risk & Insurance Review",
      description:
        "Identify coverage gaps and eliminate unnecessary premiums across your policies.",
    },
    {
      icon: HeartPulse,
      title: "Social Security & Medicare Strategy",
      description:
        "Model claiming strategies, IRMAA surcharge avoidance, and healthcare cost projections so retirement income decisions don't trigger expensive surprises.",
    },
    {
      icon: Heart,
      title: "Charitable Giving Planning",
      description:
        "Donor-advised funds, qualified charitable distributions, and timing strategies designed to maximize both your impact and your tax benefit.",
    },
    {
      icon: TrendingDown,
      title: "Concentrated Position & Diversification",
      description:
        "For those with significant holdings in a single stock: thoughtful, tax-aware diversification on your timeline.",
    },
  ];

  const images = [
    {
      name: "Financial review session",
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop",
    },
    {
      name: "Family financial planning",
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1740&auto=format&fit=crop",
    },
    {
      name: "Retirement discussion",
      url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1740&auto=format&fit=crop",
    },
    {
      name: "Estate planning documents",
      url: "https://images.unsplash.com/photo-1450101499163-c8848e66ad02?q=80&w=1740&auto=format&fit=crop",
    },
    {
      name: "Investment strategy meeting",
      url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1740&auto=format&fit=crop",
    },
    {
      name: "Tax review workspace",
      url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1740&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const marquee1 = marquee1Ref.current;
    const marquee2 = marquee2Ref.current;

    if (!marquee1 || !marquee2) return;

    let animation1: number;
    let progress1 = 0;
    let progress2 = 50;

    const animate = () => {
      progress1 += 0.03;
      if (progress1 >= 50) {
        progress1 = 0;
      }
      marquee1.style.transform = `translateY(-${progress1}%)`;

      progress2 -= 0.03;
      if (progress2 <= 0) {
        progress2 = 50;
      }
      marquee2.style.transform = `translateY(-${progress2}%)`;

      animation1 = requestAnimationFrame(animate);
    };

    animation1 = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animation1);
    };
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-sm sm:text-base text-[#1e6eae] font-medium mb-4"
              >
                How We Work
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6"
              >
                The Planning Process Behind the Plan
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-base sm:text-lg text-muted-foreground max-w-2xl"
              >
                A plan is only as good as the process that supports it. Here are
                the capabilities we bring to every client relationship.
              </motion.p>
            </div>

            {/* How We Work Grid - 2x3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {howWeWork.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-border bg-background flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-[#1e6eae]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Marquees */}
          <div className="lg:col-span-1 relative h-[200px] lg:h-[700px]">
            <div className="grid grid-cols-2 gap-4 h-full relative overflow-hidden rounded-2xl">
              {/* Gradient Overlays */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-background to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
              </div>

              {/* Marquee 1 */}
              <div className="relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  ref={marquee1Ref}
                  className="flex flex-col gap-4"
                >
                  {[...images, ...images].map((image, index) => (
                    <div
                      key={`marquee1-${index}`}
                      className="w-full aspect-square rounded-xl bg-muted border border-border flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Marquee 2 */}
              <div className="relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  ref={marquee2Ref}
                  className="flex flex-col gap-4"
                >
                  {[...images, ...images].map((image, index) => (
                    <div
                      key={`marquee2-${index}`}
                      className="w-full aspect-square rounded-xl bg-muted border border-border flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
