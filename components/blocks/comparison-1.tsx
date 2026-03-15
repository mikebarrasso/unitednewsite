"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import Link from "next/link";

const features = [
  { name: "No commissions on products sold", feeOnly: true, feeBased: false, commission: false },
  { name: "No revenue sharing or 12b-1 fees", feeOnly: true, feeBased: false, commission: false },
  { name: "Fiduciary obligation 100% of the time", feeOnly: true, feeBased: false, commission: false },
  { name: "Low-cost index fund portfolios", feeOnly: true, feeBased: "sometimes", commission: false },
  { name: "No proprietary products", feeOnly: true, feeBased: false, commission: false },
  { name: "Transparent, client-only compensation", feeOnly: true, feeBased: false, commission: false },
  { name: "Financial planning included", feeOnly: true, feeBased: true, commission: false },
  { name: "Tax preparation in-house", feeOnly: true, feeBased: false, commission: false },
];

const columns = [
  { key: "feeOnly" as const, label: "Fee-Only", sublabel: "United FPG", highlighted: true },
  { key: "feeBased" as const, label: "Fee-Based", sublabel: "Hybrid model", highlighted: false },
  { key: "commission" as const, label: "Commission", sublabel: "Product sales", highlighted: false },
];

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary">
        <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
      </div>
    );
  }
  if (value === "sometimes") {
    return (
      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
        Sometimes
      </span>
    );
  }
  return (
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-border">
      <X className="h-3.5 w-3.5 text-muted-foreground/40" strokeWidth={2.5} />
    </div>
  );
}

export default function Comparison1() {
  return (
    <section className="relative w-full bg-background px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Header */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm text-[#1e6eae] font-medium mb-4"
          >
            Fee Structure
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground mb-6"
          >
            How Your Advisor Gets Paid Changes What They Recommend
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8"
          >
            Not all financial advisors are compensated the same way, and the
            difference directly affects what ends up in your portfolio. United is
            fee-only: we don&apos;t earn commissions, sell products, or receive
            referral fees. The only people who pay us are our clients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Learn How We Work
            </Link>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-border rounded-2xl overflow-hidden bg-card"
        >
          {/* Column Headers */}
          <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] border-b border-border">
            <div className="p-4 sm:p-6" />
            {columns.map((col, i) => (
              <div
                key={col.key}
                className={`p-4 sm:p-6 text-center ${
                  col.highlighted
                    ? "bg-[#1e6eae]/[0.06]"
                    : ""
                } ${i < columns.length - 1 ? "border-r border-border" : ""}`}
              >
                <p
                  className={`text-base sm:text-lg font-semibold ${
                    col.highlighted ? "text-[#1e6eae]" : "text-foreground"
                  }`}
                >
                  {col.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {col.sublabel}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className={`grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] ${
                index < features.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center p-4 sm:p-5">
                <span className="text-sm sm:text-base font-medium text-foreground">
                  {feature.name}
                </span>
              </div>
              {columns.map((col, i) => (
                <div
                  key={col.key}
                  className={`flex items-center justify-center p-4 sm:p-5 ${
                    col.highlighted ? "bg-[#1e6eae]/[0.03]" : ""
                  } ${i < columns.length - 1 ? "border-r border-border" : ""}`}
                >
                  <CellIcon value={feature[col.key]} />
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#1e6eae]/[0.04] border border-[#1e6eae]/20"
        >
          <p className="text-foreground leading-relaxed text-center text-base sm:text-lg">
            Over a 20- or 30-year retirement, the difference in fees alone may
            amount to{" "}
            <strong>hundreds of thousands of dollars</strong> that either stay in
            your portfolio or quietly disappear into someone else&apos;s.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
