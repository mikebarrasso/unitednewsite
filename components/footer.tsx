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
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  offices: {
    title: "Offices",
    links: [
      { label: "Hauppauge, NY (HQ)", href: "/contact" },
      { label: "Manhattan, NY", href: "/contact" },
      { label: "Lake Success, NY", href: "/contact" },
    ],
  },
};

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Form ADV", href: "#" },
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
                    src="/logo.webp"
                    alt="United Financial Planning Group"
                    width={160}
                    height={45}
                    className="h-9 w-auto"
                  />
                </Link>
                <p className="mt-4 text-sm text-foreground/50 max-w-xs leading-relaxed">
                  Fee-only financial planning, investment management, tax
                  planning, and tax preparation — integrated under one roof for
                  clients nationwide.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
                {Object.values(footerLinks).map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-5">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
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
              <p className="text-sm text-foreground/50">
                © {new Date().getFullYear()} United Financial Planning Group.
                All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-foreground/50 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
