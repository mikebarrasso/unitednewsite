"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import {
  analyticsAllowed,
  CONSENT_COOKIE,
  CONSENT_MAX_AGE,
  MODE_COOKIE,
  readConsentCookie,
  type ConsentValue,
} from "@/lib/visitor-consent";

export function VisitorConsentBanner() {
  const [open, setOpen] = useState(false);
  const [optOut, setOptOut] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setOpen(!readConsentCookie(CONSENT_COOKIE));
      setOptOut(readConsentCookie(MODE_COOKIE) === "opt-out");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  function choose(value: ConsentValue) {
    document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(value)}; Max-Age=${CONSENT_MAX_AGE}; Path=/; Secure; SameSite=Lax`;
    window.dispatchEvent(new Event("wr:consent-changed"));
    setOpen(false);
    const mode = readConsentCookie(MODE_COOKIE) === "opt-out" ? "opt-out" : "opt-in";
    const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
    const src = siteConfig.visitors?.siteScriptUrl;
    if (analyticsAllowed(value, mode, gpc) && src && !document.getElementById("wr-site-script")) {
      const script = document.createElement("script");
      script.id = "wr-site-script";
      script.src = src;
      script.async = true;
      script.setAttribute("data-consent-category", "analytics");
      document.head.appendChild(script);
    } else if (value === "analytics:no" && document.getElementById("wr-site-script")) {
      // The vendor has no documented unload API. A reload removes its listeners.
      window.location.reload();
    }
  }

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="fixed bottom-2 left-2 z-40 bg-background text-foreground shadow-sm dark:bg-background"
        aria-expanded={open}
        aria-controls="visitor-consent-banner"
        onClick={() => setOpen(true)}
      >
        Privacy choices
      </Button>
      {open && (
        <section
          id="visitor-consent-banner"
          aria-label="Cookie preferences"
          aria-live="polite"
          className="fixed inset-x-0 bottom-0 z-60 border-t border-border bg-background p-5 text-foreground shadow-lg"
        >
          <div className="mx-auto max-w-270">
            <p className="text-sm leading-relaxed">
              {optOut
                ? "We use cookies to understand website visits. You can turn analytics off."
                : "May we use cookies to understand website visits?"}
            </p>
            <a
              href="/privacy-policy"
              className="rounded-sm text-sm underline underline-offset-4 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Privacy policy
            </a>
            <div className="mt-3 flex flex-wrap gap-3">
              <Button type="button" variant="outline" onClick={() => choose("analytics:no")}>
                Decline analytics
              </Button>
              <Button type="button" onClick={() => choose("analytics:yes")}>
                Allow analytics
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
