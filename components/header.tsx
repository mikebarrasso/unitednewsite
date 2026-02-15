"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type NavItem = {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  items?: { label: string; description: string; href: string }[];
};

const navLinks: NavItem[] = [
  {
    label: "Services",
    hasDropdown: true,
    items: [
      {
        label: "Financial Planning",
        description: "Comprehensive planning built around your actual goals",
        href: "/services/financial-planning",
      },
      {
        label: "Retirement Planning",
        description: "Turn decades of accumulation into sustainable income",
        href: "/services/retirement-planning",
      },
      {
        label: "Investment Management",
        description: "Tax-aware portfolio management for your full picture",
        href: "/services/investment-management",
      },
      {
        label: "Tax Planning",
        description: "Proactive strategies to reduce your lifetime tax burden",
        href: "/services/tax-planning",
      },
      {
        label: "Tax Preparation",
        description: "Returns prepared by professionals who know your story",
        href: "/services/tax-preparation",
      },
      {
        label: "Equity Compensation",
        description: "Stock options and equity comp planning with tax coordination",
        href: "/services/equity-compensation",
      },
    ],
  },
  {
    label: "About",
    hasDropdown: true,
    items: [
      {
        label: "Why United",
        description: "What sets us apart as your financial partner",
        href: "/why-united",
      },
      {
        label: "About Us",
        description: "Our story, team, and approach",
        href: "/about",
      },
      {
        label: "Meet The Team",
        description: "The people behind your financial plan",
        href: "/team",
      },
    ],
  },
  {
    label: "Client Testimonials",
    href: "/testimonials",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

function HamburgerIcon({
  isOpen,
  color = "white",
}: {
  isOpen: boolean;
  color?: string;
}): ReactNode {
  return (
    <div className="w-6 h-4 relative flex flex-col justify-between cursor-pointer">
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full"
        style={{ backgroundColor: color }}
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease }}
      />
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full"
        style={{ backgroundColor: color }}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full"
        style={{ backgroundColor: color }}
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease }}
      />
    </div>
  );
}

function DesktopDropdown({
  label,
  items,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  items: { label: string; description: string; href: string }[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}): ReactNode {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  useLayoutEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom,
        left: rect.left + rect.width / 2,
      });
    } else if (!isOpen) {
      setPosition(null);
    }
  }, [isOpen]);

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        ref={buttonRef}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease }}
        >
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </motion.div>
      </button>
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && position && (
              <div
                className="fixed pt-2 z-2000"
                style={{
                  top: position.top,
                  left: position.left,
                  transform: "translateX(-50%)",
                }}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease }}
                  className="bg-background border border-border rounded-2xl shadow-lg overflow-hidden p-2 min-w-72"
                >
                  {items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-4 rounded-xl hover:bg-muted transition-colors"
                    >
                      <div className="text-sm font-medium text-foreground">
                        {item.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}

function MobileExpandable({
  label,
  items,
  isExpanded,
  onToggle,
  onClose,
}: {
  label: string;
  items: { label: string; description: string; href: string }[];
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}): ReactNode {
  return (
    <div className="border-b border-foreground/10">
      <button
        className="flex items-center justify-between py-4 w-full text-base font-medium text-foreground"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        {label}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown
            className="w-5 h-5 text-muted-foreground"
            aria-hidden="true"
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-2 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-sm text-foreground/80 hover:text-foreground"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header(): ReactNode {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  const handleMenuOpen = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(label);
  };

  const handleMenuClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-25 z-1001 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          maskImage: "linear-gradient(black 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(black 0%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <header className="hidden lg:block fixed top-0 left-0 right-0 z-1003">
        <div className="mx-auto flex h-20 w-full items-center justify-between px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Home"
            >
              <Image
                src="/logo.webp"
                alt="United Financial Planning Group"
                width={121}
                height={63}
                className="h-10 w-auto brightness-0 invert"
                priority
              />
            </Link>
          </motion.div>

          <motion.nav
            className="flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
            aria-label="Main navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            {navLinks.map((link) =>
              link.hasDropdown && link.items ? (
                <DesktopDropdown
                  key={link.label}
                  label={link.label}
                  items={link.items}
                  isOpen={activeMenu === link.label}
                  onOpen={() => handleMenuOpen(link.label)}
                  onClose={handleMenuClose}
                />
              ) : (
                <Link
                  key={link.label}
                  href={link.href ?? "#"}
                  className="px-4 py-2 text-sm font-semibold tracking-tight text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
          </motion.nav>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-tight text-black bg-white rounded-full hover:bg-white/90 transition-colors"
            >
              Schedule a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </header>

      <header className="lg:hidden fixed top-0 left-0 right-0 z-1003">
        <div className="mx-auto flex h-16 w-full items-center justify-between px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Home"
            >
              <Image
                src="/logo.webp"
                alt="United Financial Planning Group"
                width={121}
                height={63}
                className="h-9 w-auto brightness-0 invert"
                priority
              />
            </Link>
          </motion.div>
          <motion.button
            className="p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            <HamburgerIcon isOpen={false} color="white" />
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-0 left-0 right-0 z-1004 bg-background"
          >
            <div className="flex h-16 w-full items-center justify-between px-6 sm:px-8">
              <Link
                href="/"
                className="flex items-center gap-2"
                aria-label="Home"
                onClick={closeMobileMenu}
              >
                <Image
                  src="/logo.webp"
                  alt="United Financial Planning Group"
                  width={121}
                  height={63}
                  className="h-9 w-auto"
                />
              </Link>
              <button
                className="p-2 -mr-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <HamburgerIcon isOpen={true} color="currentColor" />
              </button>
            </div>

            <nav
              className="px-6 py-4 overflow-y-auto max-h-[calc(100vh-4rem)]"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) =>
                link.hasDropdown && link.items ? (
                  <MobileExpandable
                    key={link.label}
                    label={link.label}
                    items={link.items}
                    isExpanded={mobileExpanded === link.label}
                    onToggle={() =>
                      setMobileExpanded(
                        mobileExpanded === link.label ? null : link.label,
                      )
                    }
                    onClose={closeMobileMenu}
                  />
                ) : (
                  <Link
                    key={link.label}
                    href={link.href ?? "#"}
                    className="block py-4 text-base font-medium text-foreground border-b border-border"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                ),
              )}

              <div className="flex flex-col gap-3 pt-6">
                <Link
                  href="/contact"
                  className="w-full py-3 text-center text-sm font-medium tracking-tight text-background bg-foreground rounded-full hover:bg-foreground/90 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Schedule a Conversation
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
