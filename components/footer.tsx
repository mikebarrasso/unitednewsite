"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { label: "Financial Planning", href: "/services/financial-planning" },
      { label: "Retirement Planning", href: "/services/retirement-planning" },
      { label: "Investment Management", href: "/services/investment-management" },
      { label: "Tax Planning", href: "/services/tax-planning" },
      { label: "Tax Preparation", href: "/services/tax-preparation" },
      { label: "Equity Compensation", href: "/services/equity-compensation" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Meet The Team", href: "/team" },
      { label: "Client Testimonials", href: "/testimonials" },
      { label: "Blog", href: "/blog" },
      { label: "In The Media", href: "/in-the-media" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
  offices: {
    title: "Offices",
    links: [
      { label: "All Locations", href: "/locations" },
      { label: "Hauppauge, NY (HQ)", href: "/locations/hauppauge-ny" },
      { label: "Manhattan, NY", href: "/locations/manhattan-ny" },
      { label: "Lake Success, NY", href: "/locations/lake-success-ny" },
    ],
  },
};

const legalLinks = [
  { label: "Privacy Policy", href: "/2021-UFPG-PRIVACY-POLICY.pdf" },
  { label: "Form ADV Part 2A", href: "/2025-03-21-UFPG-Form-ADV-Part-2A-1.pdf" },
  { label: "Form ADV Part 2B", href: "/2025-03-21-UFPG-Form-ADV-Part-2B-1.pdf" },
  { label: "Form CRS", href: "/2023-08-17-UFPG-Form-CRS-1.pdf" },
];

export function Footer(): ReactNode {
  return (
    <footer className="relative w-full bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 pointer-events-none">
        <div className="relative w-full max-w-270 h-full">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-foreground/10" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-foreground/10" />
          <div className="absolute left-0 top-full w-px bg-foreground/10 h-screen" />
          <div className="absolute right-0 top-full w-px bg-foreground/10 h-screen" />
        </div>
      </div>

      <div className="relative flex items-center justify-center px-6 sm:px-8 pt-16">
        <div className="relative w-full max-w-270">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/10" />
          <div className="absolute bottom-0 right-full h-px bg-foreground/10 w-screen" />
          <div className="absolute bottom-0 left-full h-px bg-foreground/10 w-screen" />
          <div className="absolute -left-0.75 -bottom-0.75 w-1.5 h-1.5 bg-foreground" />
          <div className="absolute -right-0.75 -bottom-0.75 w-1.5 h-1.5 bg-foreground" />
          <div className="relative w-full px-8 sm:px-12 py-12">
            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
              <div className="lg:max-w-xs">
                <Link href="/" className="inline-block">
                  <Image
                    src="/logo-black-cropped.png"
                    alt="United Financial Planning Group"
                    width={160}
                    height={45}
                    className="h-14 w-auto dark:hidden"
                  />
                  <Image
                    src="/logo-white-cropped.png"
                    alt="United Financial Planning Group"
                    width={160}
                    height={45}
                    className="h-14 w-auto hidden dark:block"
                  />
                </Link>
                <p className="mt-4 text-sm text-foreground/50 dark:text-white max-w-xs leading-relaxed">
                  Fee-only financial planning, investment management, tax
                  planning, and tax preparation, integrated under one roof for
                  clients nationwide.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
                {Object.values(footerLinks).map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-foreground/40 dark:text-white mb-5">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm text-foreground/70 dark:text-white hover:text-foreground dark:hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center px-6 sm:px-8 pb-12">
        <div className="relative w-full max-w-270">
          <div className="pt-8 px-8 sm:px-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-sm text-foreground/50 dark:text-white">
                © {new Date().getFullYear()} United Financial Planning Group.
                All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-foreground/50 dark:text-white hover:text-foreground dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <p className="mt-6 text-[11px] text-foreground/30 dark:text-white leading-relaxed max-w-4xl">
              United Financial Planning Group is a registered investment advisor
              with the U.S. Securities and Exchange Commission (SEC).
              Registration does not imply a certain level of skill or training.
              Information presented on this website is for educational purposes
              and does not constitute investment advice, a solicitation, or a
              recommendation to buy or sell any security. Past performance is
              not indicative of future results. All investing involves risk,
              including the potential loss of principal. Please review our{" "}
              <Link
                href="/2025-03-21-UFPG-Form-ADV-Part-2A-1.pdf"
                className="underline hover:text-foreground/50 dark:hover:text-white transition-colors"
              >
                Form ADV Part 2A
              </Link>{" "}
              for important disclosures.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
