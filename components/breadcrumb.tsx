import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { type ReactNode } from "react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps): ReactNode {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-0 max-w-[1400px] mx-auto w-full"
    >
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link
            href="/"
            className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight
              className="w-3 h-3 text-foreground/25 shrink-0"
              aria-hidden="true"
            />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-xs text-foreground/60"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
