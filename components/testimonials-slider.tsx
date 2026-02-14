"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;
const AUTO_SCROLL_INTERVAL = 5000;
const TRANSITION_DURATION = 600;
const CLONE_COUNT = 3;
const GAP_PX = 24;

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Margaret T.",
    role: "Retired Executive",
    quote:
      "For years I had a financial advisor and a separate CPA who never spoke to each other. United changed everything — my Roth conversion strategy alone saved us six figures.",
  },
  {
    name: "David & Karen L.",
    role: "Pre-Retirees",
    quote:
      "We were five years from retirement and had no idea if we were on track. United gave us a plan that connected our investments, Social Security timing, and tax strategy. We finally feel confident.",
  },
  {
    name: "Brian S.",
    role: "Business Owner",
    quote:
      "Between my S-corp, personal taxes, and investment accounts, I needed someone who could see the whole picture. United's team handles all of it — and they actually talk to each other.",
  },
  {
    name: "Jennifer M.",
    role: "Tech Executive, RSUs & ISOs",
    quote:
      "My equity compensation was incredibly complex. United modeled every scenario for exercising my options and saved me tens of thousands in taxes I didn't know I could avoid.",
  },
  {
    name: "Robert & Susan K.",
    role: "High-Net-Worth Couple",
    quote:
      "We've worked with several advisory firms over the years. United is the only one that truly integrates everything — investments, taxes, estate planning — into one coordinated strategy.",
  },
];

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visibleCount;
}

export function TestimonialsSlider(): ReactNode {
  const visibleCount = useVisibleCount();
  const itemCount = testimonials.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const extendedTestimonials = [
    ...testimonials.slice(-CLONE_COUNT),
    ...testimonials,
    ...testimonials.slice(0, CLONE_COUNT),
  ];

  const [currentIndex, setCurrentIndex] = useState(CLONE_COUNT);
  const [isPaused, setIsPaused] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);
  const isResettingRef = useRef(false);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prevVisibleCountRef = useRef(visibleCount);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useLayoutEffect(() => {
    if (prevVisibleCountRef.current !== visibleCount) {
      prevVisibleCountRef.current = visibleCount;
      queueMicrotask(() => {
        setEnableTransition(false);
        setCurrentIndex(CLONE_COUNT);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setEnableTransition(true));
        });
      });
    }
  }, [visibleCount]);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayTimeoutRef.current) clearInterval(autoPlayTimeoutRef.current);
    if (!isPaused) {
      autoPlayTimeoutRef.current = setInterval(() => {
        if (!isResettingRef.current) {
          setEnableTransition(true);
          setCurrentIndex((prev) => prev + 1);
        }
      }, AUTO_SCROLL_INTERVAL);
    }
  }, [isPaused]);

  const goToNext = useCallback(() => {
    if (isResettingRef.current) return;
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
    resetAutoPlay();
  }, [resetAutoPlay]);

  const goToPrev = useCallback(() => {
    if (isResettingRef.current) return;
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
    resetAutoPlay();
  }, [resetAutoPlay]);

  useEffect(() => {
    const minIndex = CLONE_COUNT;
    const maxIndex = CLONE_COUNT + itemCount - 1;

    if (currentIndex > maxIndex || currentIndex < minIndex) {
      isResettingRef.current = true;
      setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(currentIndex > maxIndex ? minIndex : maxIndex);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            isResettingRef.current = false;
          });
        });
      }, TRANSITION_DURATION);
    }
  }, [currentIndex, itemCount]);

  useEffect(() => {
    if (isPaused) {
      if (autoPlayTimeoutRef.current) {
        clearInterval(autoPlayTimeoutRef.current);
        autoPlayTimeoutRef.current = null;
      }
      return;
    }

    autoPlayTimeoutRef.current = setInterval(() => {
      if (!isResettingRef.current) {
        setEnableTransition(true);
        setCurrentIndex((prev) => prev + 1);
      }
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      if (autoPlayTimeoutRef.current)
        clearInterval(autoPlayTimeoutRef.current);
    };
  }, [isPaused]);

  const totalGapPx = GAP_PX * (visibleCount - 1);
  const cardWidthPx =
    containerWidth > 0 ? (containerWidth - totalGapPx) / visibleCount : 0;
  const cardWidth =
    cardWidthPx > 0
      ? `${cardWidthPx}px`
      : `calc((100% - ${totalGapPx}px) / ${visibleCount})`;

  const offsetPx =
    containerWidth > 0
      ? containerWidth / 2 -
        cardWidthPx / 2 -
        currentIndex * (cardWidthPx + GAP_PX)
      : 0;
  const transform =
    containerWidth > 0 ? `translateX(${offsetPx}px)` : "translateX(0)";

  const maskStyle =
    visibleCount === 1
      ? { maskImage: "none", WebkitMaskImage: "none" }
      : {
          maskImage:
            "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
        };

  return (
    <section
      className="relative w-full bg-background py-24 sm:py-32 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative mx-auto max-w-270 px-6 sm:px-8">
        <div className="px-4 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif leading-tight text-foreground text-center mb-16"
          >
            What Our Clients Say
          </motion.h2>

          <div className="relative">
            <div
              ref={containerRef}
              className="overflow-hidden"
              style={maskStyle}
            >
              <div
                className="flex gap-6"
                style={{
                  transform,
                  transition: enableTransition
                    ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)`
                    : "none",
                  willChange: "transform",
                }}
              >
                {extendedTestimonials.map((testimonial, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <div
                      key={`${testimonial.name}-${index}`}
                      className="shrink-0 transition-all duration-500"
                      style={{
                        width: cardWidth,
                        opacity: isActive ? 1 : 0.6,
                      }}
                    >
                      <div className="flex flex-col p-8 bg-muted/50 border border-border rounded-sm h-full">
                        <Quote className="w-8 h-8 text-foreground/15 mb-4" />
                        <p className="text-foreground/80 leading-relaxed flex-1 text-sm">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div className="mt-6 pt-4 border-t border-border">
                          <p className="text-sm font-medium text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-foreground/50 mt-0.5">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="flex items-center justify-center gap-2 mt-12"
          >
            <button
              type="button"
              onClick={goToPrev}
              className="w-12 h-12 flex items-center justify-center bg-foreground rounded-full hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-background" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="w-12 h-12 flex items-center justify-center bg-foreground rounded-full hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-background" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
