"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const metrics = [
  {
    name: "United FPG",
    score: 100,
    progress: 100,
    isHighlighted: true,
  },
  {
    name: "Separate Advisor & CPA",
    score: 55,
    progress: 55,
    isHighlighted: false,
  },
  {
    name: "Advisor Only",
    score: 30,
    progress: 30,
    isHighlighted: false,
  },
];

export default function Stats2() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-border rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 bg-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium font-serif text-foreground leading-tight">
                Retirement decisions coordinated across taxes, income, and
                Medicare
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                When your withdrawal plan, Roth conversions, and tax return are
                managed by the same team, every decision is modeled together.
                Separate advisors mean separate assumptions, and costly
                surprises in retirement.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-foreground hover:text-foreground/70 transition-colors duration-200 group underline"
              >
                Schedule a retirement conversation
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Right Column - Progress Rings */}
            <div className="flex items-center justify-start lg:justify-end gap-[min(2vw,2rem)]">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className="relative"
                    style={{
                      width: "min(20vw, 9rem)",
                      height: "min(20vw, 9rem)",
                    }}
                  >
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 100 100"
                      style={{ transform: "scaleY(-1)" }}
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-border"
                      />

                      {metric.progress > 0 && (
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          className={
                            metric.isHighlighted
                              ? "text-[#1e6eae]"
                              : "text-foreground/30"
                          }
                          initial={{ strokeDashoffset: 283 }}
                          whileInView={{
                            strokeDashoffset:
                              283 - (283 * metric.progress) / 100,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1 + 0.3,
                          }}
                          style={{
                            strokeDasharray: "283",
                          }}
                        />
                      )}
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`font-bold ${
                          metric.isHighlighted
                            ? "text-[#1e6eae]"
                            : "text-muted-foreground"
                        }`}
                        style={{ fontSize: "min(8vw, 2.5rem)" }}
                      >
                        {metric.score}%
                      </span>
                    </div>
                  </div>

                  <span
                    className={`font-medium text-center ${
                      metric.isHighlighted
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                    style={{ fontSize: "min(3vw, 0.875rem)" }}
                  >
                    {metric.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
