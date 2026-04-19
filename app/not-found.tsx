import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist or has been moved.",
  noIndex: true,
});

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound(): ReactNode {
  return (
    <>
      <main
        id="main-content"
        className="flex-1 flex items-center justify-center bg-background py-24 sm:py-32"
      >
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            404
          </p>
          <h1 className="text-4xl sm:text-5xl font-medium font-serif text-foreground leading-tight mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The page you are looking for does not exist or may have been moved.
            Use the links below to find what you need.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
