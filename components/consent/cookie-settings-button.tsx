"use client";

import { OPEN_PREFERENCES_EVENT } from "@/components/consent/visitor-consent-banner";

/** Footer control that reopens the consent sheet in any privacy mode — the opt-out
 *  path for visitors who never see the sheet automatically. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
    >
      Cookie Settings
    </button>
  );
}
