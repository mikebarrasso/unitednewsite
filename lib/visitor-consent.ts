/** Contract 3.7 consent. Absent visitors settings leave the integration dormant. */
export const CONSENT_COOKIE = "wr_consent";
export const MODE_COOKIE = "privacy_mode";
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
export type PrivacyMode = "opt-in" | "opt-out";
export type ConsentValue = "analytics:yes" | "analytics:no";

const OPT_IN = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
]);

export function privacyModeForLocation(country: string | null, region: string | null): PrivacyMode {
  if (!country || OPT_IN.has(country.toUpperCase()) || (country.toUpperCase() === "US" && region?.toUpperCase() === "CA")) {
    return "opt-in";
  }
  return "opt-out";
}

export function analyticsAllowed(consent: ConsentValue | null, mode: PrivacyMode, gpc: boolean) {
  if (consent === "analytics:yes") return true;
  if (consent === "analytics:no") return false;
  return mode === "opt-out" && !gpc;
}

export function readConsentCookie(name: string): string | null {
  try {
    const entry = document.cookie.split("; ").find(value => value.startsWith(`${name}=`));
    return entry ? decodeURIComponent(entry.slice(name.length + 1)) : null;
  } catch {
    return null;
  }
}

export function visitorConsentBootstrap(src: string): string {
  return `(function(){try{var g=function(n){var p=document.cookie.split('; ').find(function(v){return v.indexOf(n+'=')===0});return p?decodeURIComponent(p.slice(n.length+1)):null};var c=g('${CONSENT_COOKIE}');if(c==='analytics:no')return;if(c!=='analytics:yes'&&!(g('${MODE_COOKIE}')==='opt-out'&&navigator.globalPrivacyControl!==true))return;if(document.getElementById('wr-site-script'))return;var s=document.createElement('script');s.id='wr-site-script';s.async=true;s.src=${JSON.stringify(src).replace(/</g,"\\u003c")};s.setAttribute('data-consent-category','analytics');document.head.appendChild(s)}catch(e){}})();`;
}
