import { ChevronDown, List } from "lucide-react";
import type { ReactNode } from "react";
import type { TocItem } from "@/lib/blog";

type ArticleTocProps = {
  items: TocItem[];
};

export function ArticleToc({ items }: ArticleTocProps): ReactNode {
  if (items.length < 3) return null;

  return (
    <details
      open
      className="group mb-10 rounded-xl border border-border bg-muted/30 p-5 not-prose"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground">
        <span className="flex items-center gap-2">
          <List className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          In this article
        </span>
        <ChevronDown
          className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <nav aria-label="Table of contents" className="mt-4">
        <ol className="space-y-2 text-sm">
          {items.map((item, idx) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex gap-3 text-foreground/70 transition-colors hover:text-foreground"
              >
                <span className="tabular-nums text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}
