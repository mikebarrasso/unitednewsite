"use client";

import { type ReactNode, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    id: "tax",
    label: "Tax Planning & Preparation",
    short: "Tax",
    description:
      "Year-round strategies to reduce your lifetime tax burden — prepared by CPAs and Enrolled Agents who already know your full story.",
    angle: 0,
  },
  {
    id: "investment",
    label: "Investment Management",
    short: "Investing",
    description:
      "Tax-aware portfolio management where every trade, rebalance, and distribution is evaluated through your complete financial picture.",
    angle: 120,
  },
  {
    id: "financial",
    label: "Financial Planning",
    short: "Planning",
    description:
      "A roadmap built around your real life — retirement, education, estate, and risk — informed by deep tax expertise most planners don't have.",
    angle: 240,
  },
];

/* ─── Animated dots flowing along a path ─── */
function FlowBeam({
  pathD,
  delay = 0,
  duration = 3,
}: {
  pathD: string;
  delay?: number;
  duration?: number;
}): ReactNode {
  return (
    <>
      {/* Static path line */}
      <path
        d={pathD}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-[#1e6eae]/12"
      />
      {/* Three dots staggered along the path */}
      <circle r="3.5" fill="#1e6eae" opacity="0.8">
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={pathD}
        />
        <animate
          attributeName="opacity"
          values="0;0.8;0.8;0"
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
        />
      </circle>
      <circle r="2.5" fill="#1e6eae" opacity="0.5">
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay + duration * 0.33}s`}
          path={pathD}
        />
        <animate
          attributeName="opacity"
          values="0;0.5;0.5;0"
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay + duration * 0.33}s`}
        />
      </circle>
      <circle r="1.5" fill="#1e6eae" opacity="0.3">
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay + duration * 0.66}s`}
          path={pathD}
        />
        <animate
          attributeName="opacity"
          values="0;0.3;0.3;0"
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay + duration * 0.66}s`}
        />
      </circle>
    </>
  );
}

/* ─── The flow diagram ─── */
function ServiceFlow({
  activeId,
  onSelect,
}: {
  activeId: string | null;
  onSelect: (id: string | null) => void;
}): ReactNode {
  const cx = 200;
  const cy = 195;
  const orbitR = 120;
  const nodeR = 36;

  const nodes = services.map((s) => {
    const rad = ((s.angle - 90) * Math.PI) / 180;
    return {
      ...s,
      x: cx + orbitR * Math.cos(rad),
      y: cy + orbitR * Math.sin(rad),
    };
  });

  /* Label positions offset from the node */
  function labelPos(node: (typeof nodes)[0]) {
    const dx = node.x - cx;
    const dy = node.y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const nx = dx / dist;
    const ny = dy / dist;
    return {
      x: node.x + nx * (nodeR + 18),
      y: node.y + ny * (nodeR + 18),
      anchor: Math.abs(nx) < 0.3 ? "middle" : nx > 0 ? "start" : "end",
    };
  }

  /* Curved paths between each pair, bowing slightly outward */
  function curvePath(
    from: { x: number; y: number },
    to: { x: number; y: number },
  ) {
    const mx = (from.x + to.x) / 2;
    const my = (from.y + to.y) / 2;
    // Push control point toward center for a slight inward curve
    const cpx = mx + (cx - mx) * 0.45;
    const cpy = my + (cy - my) * 0.45;
    return `M ${from.x} ${from.y} Q ${cpx} ${cpy} ${to.x} ${to.y}`;
  }

  const pairs = [
    { from: nodes[0]!, to: nodes[1]! },
    { from: nodes[1]!, to: nodes[2]! },
    { from: nodes[2]!, to: nodes[0]! },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto select-none">
      <svg
        viewBox="-30 -30 460 460"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e6eae" stopOpacity="0.08" />
            <stop offset="70%" stopColor="#1e6eae" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#1e6eae" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient center glow */}
        <circle cx={cx} cy={cy} r={100} fill="url(#centerGlow)" />

        {/* Dashed orbital circle */}
        <circle
          cx={cx}
          cy={cy}
          r={orbitR}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 8"
          className="text-foreground/[0.06]"
        />

        {/* Connecting beams with flowing dots */}
        {pairs.map((p, i) => (
          <FlowBeam
            key={i}
            pathD={curvePath(p.from, p.to)}
            delay={i * 1.2}
            duration={4}
          />
        ))}

        {/* Center hub pulsing rings */}
        {[0, 1.5].map((beginDelay, i) => (
          <circle key={i} cx={cx} cy={cy} r={28} fill="none" stroke="#1e6eae" strokeWidth="1" opacity="0">
            <animate
              attributeName="r"
              from="28"
              to="55"
              dur="3s"
              begin={`${beginDelay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.3"
              to="0"
              dur="3s"
              begin={`${beginDelay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Center hub */}
        <circle
          cx={cx}
          cy={cy}
          r={28}
          fill="currentColor"
          className="text-background"
          stroke="#1e6eae"
          strokeWidth="1.5"
        />
        <text
          x={cx}
          y={cy - 5}
          textAnchor="middle"
          className="fill-foreground text-[9px] font-bold tracking-wide"
        >
          UNITED
        </text>
        <text
          x={cx}
          y={cy + 7}
          textAnchor="middle"
          className="fill-[#1e6eae] text-[8px] font-semibold tracking-wider"
        >
          FPG
        </text>

        {/* Service nodes */}
        {nodes.map((node) => {
          const isActive = activeId === node.id;
          const lp = labelPos(node);

          return (
            <g
              key={node.id}
              onMouseEnter={() => onSelect(node.id)}
              onMouseLeave={() => onSelect(null)}
              onClick={() =>
                onSelect(activeId === node.id ? null : node.id)
              }
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={node.label}
            >
              {/* Hit area (larger invisible circle) */}
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeR + 12}
                fill="transparent"
              />

              {/* Active glow */}
              {isActive && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeR + 4}
                  fill="none"
                  stroke="#1e6eae"
                  strokeWidth="1"
                  opacity="0.3"
                />
              )}

              {/* Node circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeR}
                fill="currentColor"
                className="text-background"
                stroke={isActive ? "#1e6eae" : "currentColor"}
                strokeWidth={isActive ? 2 : 1}
                style={{
                  filter: isActive ? "url(#nodeGlow)" : undefined,
                }}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeR}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className={isActive ? "text-[#1e6eae]" : "text-foreground/10"}
              />

              {/* Node inner label */}
              <text
                x={node.x}
                y={node.y + 1}
                textAnchor="middle"
                dominantBaseline="central"
                className={`text-[11px] font-semibold pointer-events-none transition-colors duration-300 ${
                  isActive ? "fill-[#1e6eae]" : "fill-foreground/60"
                }`}
              >
                {node.short}
              </text>

              {/* Outer label */}
              <text
                x={lp.x}
                y={lp.y}
                textAnchor={lp.anchor as "start" | "middle" | "end"}
                dominantBaseline="central"
                className={`text-[10px] font-medium pointer-events-none transition-colors duration-300 ${
                  isActive
                    ? "fill-[#1e6eae]"
                    : "fill-foreground/30"
                }`}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function FeatureHighlight(): ReactNode {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeService = services.find((s) => s.id === activeId);

  return (
    <section className="relative w-full bg-background pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground"
            >
              What Changes When{" "}
              <span className="italic">Everything Works Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mt-6 text-foreground/70 leading-relaxed max-w-lg"
            >
              Most advisory firms do one thing well and outsource the rest. At
              United Financial Planning Group, your investment decisions,
              retirement timeline, and tax planning reinforce each other —
              because the same team handles all three.
            </motion.p>

            {/* Interactive detail panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="mt-8 min-h-[120px]"
            >
              <AnimatePresence mode="wait">
                {activeService ? (
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-xl border border-[#1e6eae]/20 bg-[#1e6eae]/[0.04]"
                  >
                    <p className="text-sm font-semibold text-[#1e6eae]">
                      {activeService.label}
                    </p>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                      {activeService.description}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-xl border border-border bg-muted/30"
                  >
                    <p className="text-sm text-muted-foreground">
                      CFPs, CPAs, and Enrolled Agents work side by side — not
                      across town. Hover over a service to see how it connects
                      to your complete financial picture.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 mt-8 text-foreground font-medium hover:opacity-70 transition-opacity"
              >
                Explore how we work together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Interactive flow diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="flex items-center justify-center"
          >
            <ServiceFlow activeId={activeId} onSelect={setActiveId} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
