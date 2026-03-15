"use client";

import { motion } from "motion/react";
import { Layers, ShieldCheck, TrendingDown } from "lucide-react";
import { type ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const bars = [0.32, 0.38, 0.42, 0.48, 0.44, 0.55, 0.52, 0.62, 0.58, 0.68, 0.72, 0.78, 0.74, 0.82, 0.88, 0.92];

const allocations = [
  { label: "US Equity Index", pct: 42, color: "bg-[#1e6eae]" },
  { label: "Intl Equity Index", pct: 24, color: "bg-[#1e6eae]/70" },
  { label: "Fixed Income", pct: 20, color: "bg-[#1e6eae]/40" },
  { label: "Alternatives", pct: 14, color: "bg-[#1e6eae]/20" },
];

const principles = [
  { icon: TrendingDown, label: "Low-Cost Index Funds", sub: "Avg expense ratio 0.06%" },
  { icon: ShieldCheck, label: "Tax-Efficient Structure", sub: "Asset location optimized" },
  { icon: Layers, label: "Plan-Driven Allocation", sub: "Built from your financial plan" },
];

export function PortfolioVisual(): ReactNode {
  return (
    <div className="w-full h-full flex flex-col justify-center p-6 sm:p-8 lg:p-10 gap-6">
      {/* Top principles row */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease }}
        className="grid grid-cols-3 gap-3"
      >
        {principles.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.label}
              className="p-3 rounded-xl bg-background border border-border"
            >
              <Icon className="w-4 h-4 text-[#1e6eae] mb-1.5" />
              <p className="text-xs sm:text-sm font-semibold text-foreground leading-tight">
                {p.label}
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">
                {p.sub}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* Chart section - fee savings over time */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease }}
        className="p-4 rounded-xl bg-background border border-border"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-foreground">
            Tax-Efficient Growth Over Time
          </span>
          <span className="text-[10px] text-[#1e6eae] font-medium bg-[#1e6eae]/10 px-2 py-0.5 rounded-full">
            More kept after taxes
          </span>
        </div>
        <div className="flex items-end justify-between gap-1 h-28 sm:h-36">
          {bars.map((height, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t origin-bottom"
              style={{
                height: `${height * 100}%`,
                background: `linear-gradient(to top, #1e6eae, rgba(30, 110, 174, 0.3))`,
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.03, ease }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[10px] text-muted-foreground">Year 1</span>
          <span className="text-[10px] text-muted-foreground">Year 20+</span>
        </div>
      </motion.div>

      {/* Allocation breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease }}
        className="p-4 rounded-xl bg-background border border-border"
      >
        <p className="text-xs font-medium text-foreground mb-3">
          Tax-Optimized Allocation
        </p>

        {/* Stacked bar */}
        <div className="flex h-3 rounded-full overflow-hidden mb-3">
          {allocations.map((a, i) => (
            <motion.div
              key={a.label}
              className={`${a.color} first:rounded-l-full last:rounded-r-full`}
              initial={{ width: 0 }}
              animate={{ width: `${a.pct}%` }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease }}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {allocations.map((a) => (
            <div key={a.label} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${a.color}`} />
              <span className="text-[10px] sm:text-xs text-muted-foreground">
                {a.label}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-foreground ml-auto">
                {a.pct}%
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
