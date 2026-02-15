"use client";

import { motion } from "motion/react";
import { ShieldCheck, TrendingDown, Calendar } from "lucide-react";
import { type ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const strategies = [
  { strategy: "Roth Conversion", savings: "$42,000", status: "Executed", highlight: true },
  { strategy: "Tax-Loss Harvest", savings: "$18,500", status: "Executed", highlight: true },
  { strategy: "Charitable QCD", savings: "$12,000", status: "Planned", highlight: false },
  { strategy: "ESPP Timing", savings: "$8,200", status: "Monitoring", highlight: false },
  { strategy: "Bracket Management", savings: "$6,400", status: "Executed", highlight: true },
];

const metrics = [
  { icon: TrendingDown, label: "Lifetime Tax Reduction", value: "Proactive" },
  { icon: ShieldCheck, label: "Strategies Active", value: "5 of 5" },
  { icon: Calendar, label: "Next Review", value: "This Quarter" },
];

export function TaxPlanningVisual(): ReactNode {
  return (
    <div className="w-full h-full flex flex-col justify-center p-6 sm:p-8 lg:p-10 gap-4">
      {/* Top metrics */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease }}
        className="grid grid-cols-3 gap-3"
      >
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className="p-3 rounded-xl bg-background border border-border">
              <Icon className="w-4 h-4 text-[#1e6eae] mb-1.5" />
              <p className="text-xs sm:text-sm font-semibold text-foreground leading-tight">
                {m.value}
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">
                {m.label}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* Strategy table */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease }}
        className="p-4 sm:p-5 rounded-xl bg-background border border-border"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-foreground">
            Tax Strategies — Current Year
          </span>
          <span className="text-[10px] text-[#1e6eae] font-medium bg-[#1e6eae]/10 px-2 py-0.5 rounded-full">
            Year-round
          </span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground pb-2 border-b border-border">
          <span>Strategy</span>
          <div className="flex gap-6 sm:gap-8">
            <span>Savings</span>
            <span className="w-16 text-right">Status</span>
          </div>
        </div>

        {/* Rows */}
        {strategies.map((row, i) => (
          <motion.div
            key={row.strategy}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.08, ease }}
            className={`flex items-center justify-between py-2.5 text-sm ${
              i < strategies.length - 1 ? "border-b border-border/50" : ""
            }`}
          >
            <span
              className={
                row.highlight
                  ? "text-foreground font-medium text-xs sm:text-sm"
                  : "text-muted-foreground text-xs sm:text-sm"
              }
            >
              {row.strategy}
            </span>
            <div className="flex gap-6 sm:gap-8 items-center">
              <span className="text-foreground font-semibold tabular-nums text-xs sm:text-sm">
                {row.savings}
              </span>
              <span
                className={`w-16 text-right text-[10px] sm:text-xs font-medium ${
                  row.status === "Executed"
                    ? "text-[#1e6eae]"
                    : row.status === "Planned"
                      ? "text-amber-500"
                      : "text-muted-foreground"
                }`}
              >
                {row.status}
              </span>
            </div>
          </motion.div>
        ))}

        {/* Total */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0, ease }}
          className="flex items-center justify-between pt-3 mt-1 border-t border-foreground/10"
        >
          <span className="text-sm font-semibold text-foreground">
            Total Projected
          </span>
          <span className="text-sm sm:text-base font-bold text-foreground tabular-nums">
            $87,100
          </span>
        </motion.div>
      </motion.div>

    </div>
  );
}
