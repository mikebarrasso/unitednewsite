"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import {
  analyticsAllowed,
  CONSENT_COOKIE,
  CONSENT_MAX_AGE,
  MODE_COOKIE,
  readConsentCookie,
  type ConsentValue,
  type PrivacyMode,
} from "@/lib/visitor-consent";

/** Fired by the footer "Cookie Settings" control; reopens the sheet in any privacy mode. */
export const OPEN_PREFERENCES_EVENT = "wr:open-consent-preferences";

function hasGpcSignal(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

function loadSiteScript() {
  const src = siteConfig.visitors?.siteScriptUrl;
  if (!src || document.getElementById("wr-site-script")) return;
  const script = document.createElement("script");
  script.id = "wr-site-script";
  script.src = src;
  script.async = true;
  script.setAttribute("data-consent-category", "analytics");
  document.head.appendChild(script);
}

export function VisitorConsentBanner() {
  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [mode, setMode] = useState<PrivacyMode | null>(null);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const openedViaPreferences = useRef(false);

  useEffect(() => {
    // Cookies are read after paint (not during hydration) so the server and client
    // markup agree; the sheet only interrupts where prior consent is required and
    // none is stored. Opt-out visitors (most of the US) never see it unless they
    // ask via the footer "Cookie Settings" control.
    const frame = requestAnimationFrame(() => {
      const stored = readConsentCookie(CONSENT_COOKIE);
      const storedConsent: ConsentValue | null =
        stored === "analytics:yes" || stored === "analytics:no" ? stored : null;
      const modeValue = readConsentCookie(MODE_COOKIE);
      const privacyMode: PrivacyMode | null =
        modeValue === "opt-in" || modeValue === "opt-out" ? modeValue : null;
      setConsent(storedConsent);
      setMode(privacyMode);
      setOpen(storedConsent === null && privacyMode === "opt-in");
    });

    const openPreferences = () => {
      openedViaPreferences.current = true;
      setOpen(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    };
  }, []);

  // Move focus into the sheet only when the visitor asked for it; the first-visit
  // prompt must not steal focus from the page.
  useEffect(() => {
    if (open && openedViaPreferences.current) dialogRef.current?.focus();
  }, [open]);

  const dismissible = consent !== null || mode !== "opt-in";

  useEffect(() => {
    if (!open || !dismissible) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismissible]);

  function choose(value: ConsentValue) {
    document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(value)}; Max-Age=${CONSENT_MAX_AGE}; Path=/; Secure; SameSite=Lax`;
    const scriptWasActive = Boolean(document.getElementById("wr-site-script"));
    setConsent(value);
    setOpen(false);
    window.dispatchEvent(new Event("wr:consent-changed"));
    if (analyticsAllowed(value, mode ?? "opt-in", hasGpcSignal())) {
      loadSiteScript();
    } else if (scriptWasActive) {
      // The vendor has no documented unload API. A reload removes its listeners.
      window.location.reload();
    }
  }

  if (!open) return null;

  return (
    <section
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-60 border-t border-border bg-background p-5 text-foreground shadow-lg outline-none sm:p-6"
    >
      <div className="mx-auto flex max-w-270 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed">
          {mode === "opt-in"
            ? "May we use cookies to understand website visits? You can change your choice at any time."
            : "We use cookies to understand website visits. You can turn analytics off at any time."}{" "}
          <Link
            href="/privacy-policy"
            className="rounded-sm underline underline-offset-4 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Button type="button" variant="outline" onClick={() => choose("analytics:no")}>
            Decline analytics
          </Button>
          <Button type="button" onClick={() => choose("analytics:yes")}>
            Allow analytics
          </Button>
          {dismissible && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="Close cookie preferences"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true" className="text-lg leading-none">×</span>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
