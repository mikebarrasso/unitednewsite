/**
 * ============================================================================
 * SITE CONFIGURATION
 * ============================================================================
 *
 * United Financial Planning Group — brand configuration
 */

export const siteConfig = {
  name: "United Financial Planning Group",
  tagline: "Financial Planning, Tax, & Investment Management Under One Roof",
  description:
    "United Financial Planning Group is a fee-only advisory firm with CFPs, CPAs, and Enrolled Agents under one roof. Financial planning, investment management, and tax services — integrated for clients nationwide.",
  url: "https://unitedfpg.com",
  twitter: "@unitedfpg",

  nav: {
    cta: {
      text: "Schedule a Conversation",
      href: "/contact",
    },
  },
} as const;

export const heroConfig = {
  headline: "Your Financial Life Is Complex. Your Advisory Team Shouldn't Make It Harder.",
  description:
    "United Financial Planning Group brings financial planning, investment management, tax planning, and tax preparation together under one roof — so every decision works in concert, not in conflict.",
  cta: {
    primary: {
      text: "Schedule a Conversation",
      href: "/contact",
    },
    secondary: {
      text: "Explore Our Services",
      href: "/services",
    },
  },
} as const;

export const trustedByConfig = {
  title: "As seen in",
} as const;

export const featureCardsConfig = {
  title: "Sound Familiar?",
} as const;

export const principlesConfig = {
  title: "Built for Financial Lives That Don't Fit in a Template",
} as const;

export const statsConfig = {
  stats: [
    { value: 30, suffix: "+", label: "Years of integrated experience" },
    { value: 3, suffix: "", label: "Disciplines under one roof" },
    { value: 50, suffix: "+", prefix: "", label: "States served nationwide" },
  ],
} as const;

export const testimonialsConfig = {
  title: "What Our Clients Say",
} as const;

export const faqConfig = {
  title: "Questions We Hear Often",
  contact: {
    text: "Still have questions?",
    cta: {
      text: "Get in Touch",
      href: "/contact",
    },
  },
} as const;

export const finalCtaConfig = {
  headline: "Ready to Stop Coordinating Between Advisors?",
  description:
    "Schedule a no-pressure conversation. We'll listen to what's going on in your financial life, answer your questions, and help you decide if working together makes sense.",
  cta: {
    text: "Book Your Complimentary Consultation",
    href: "/contact",
  },
} as const;

export const footerConfig = {
  description:
    "The fee-only advisory firm with CFPs, CPAs, and Enrolled Agents under one roof. Financial planning, investment management, tax planning, and tax preparation — integrated for clients nationwide.",
  cta: {
    text: "Schedule a Conversation",
    href: "/contact",
  },
  links: {
    services: [
      { label: "Financial Planning", href: "/services/financial-planning" },
      { label: "Retirement Planning", href: "/services/retirement-planning" },
      { label: "Investment Management", href: "/services/investment-management" },
      { label: "Tax Planning", href: "/services/tax-planning" },
      { label: "Tax Preparation", href: "/services/tax-preparation" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Form ADV", href: "#" },
    ],
  },
  offices: [
    {
      name: "Hauppauge, NY (Headquarters)",
      address: "350 Motor Parkway, Suite 105\nHauppauge, NY 11788",
    },
    {
      name: "Manhattan, NY",
      address: "14 Penn Plaza\nNew York, NY 10122",
    },
    {
      name: "Lake Success, NY",
      address: "1979 Marcus Avenue, Suite 210\nLake Success, NY 11042",
    },
  ],
  copyright: `© ${new Date().getFullYear()} United Financial Planning Group. All rights reserved.`,
} as const;

/**
 * ============================================================================
 * FEATURE FLAGS
 * ============================================================================
 */
export const features = {
  smoothScroll: true,
  darkMode: true,
  statsSection: true,
  blogSection: false,
  testimonialsSection: true,
} as const;

/**
 * ============================================================================
 * THEME CONFIGURATION
 * ============================================================================
 */
export const themeConfig = {
  defaultTheme: "system" as "light" | "dark" | "system",
  enableSystemTheme: true,
} as const;
