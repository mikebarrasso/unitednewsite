import localFont from "next/font/local";
import "./google-fonts/google-fonts.css";

// The site's Google Fonts, self-hosted: the exact files, subsets, weights,
// preloads and size-adjusted fallbacks next/font/google fetched from Google
// at build time, copied into the repo so a build never depends on
// fonts.googleapis.com (vercel/next.js#99114: Google sometimes answers with
// URLs next/font cannot parse, and the build fails). Visitors get the same
// bytes and the same CSS as before.
//
// Each localFont() below is one of Google's unicode-range subsets; together
// they emit the family's @font-face rules. The exported objects are what the
// layout used before; their classes are in google-fonts/google-fonts.css.

const geistSansFaces1 = localFont({
  src: [
    { path: "./google-fonts/geist-fef07dbb0973bf53-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Geist'" },
    { prop: "unicode-range", value: "U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F" },
  ],
});

const geistSansFaces2 = localFont({
  src: [
    { path: "./google-fonts/geist-8a480f0b521d4e75-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Geist'" },
    { prop: "unicode-range", value: "U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116" },
  ],
});

const geistSansFaces3 = localFont({
  src: [
    { path: "./google-fonts/geist-53b9e256198e5412-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Geist'" },
    { prop: "unicode-range", value: "U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB" },
  ],
});

const geistSansFaces4 = localFont({
  src: [
    { path: "./google-fonts/geist-7178b3e590c64307-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Geist'" },
    { prop: "unicode-range", value: "U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF" },
  ],
});

const geistSansFaces5 = localFont({
  src: [
    { path: "./google-fonts/geist-caa3a2e1cccd8315-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Geist'" },
    { prop: "unicode-range", value: "U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" },
  ],
});

const geistMonoFaces1 = localFont({
  src: [
    { path: "./google-fonts/geist-mono-5ce348bf30bf5439-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Geist Mono'" },
    { prop: "unicode-range", value: "U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F" },
  ],
});

const geistMonoFaces2 = localFont({
  src: [
    { path: "./google-fonts/geist-mono-4fa387ec64143e14-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Geist Mono'" },
    { prop: "unicode-range", value: "U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116" },
  ],
});

const geistMonoFaces3 = localFont({
  src: [
    { path: "./google-fonts/geist-mono-6306c77e7c8268e4-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Geist Mono'" },
    { prop: "unicode-range", value: "U+2000-2001,U+2004-2008,U+200A,U+23B8-23BD,U+2500-259F" },
  ],
});

const geistMonoFaces4 = localFont({
  src: [
    { path: "./google-fonts/geist-mono-7d817b4c03b0c5f1-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Geist Mono'" },
    { prop: "unicode-range", value: "U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB" },
  ],
});

const geistMonoFaces5 = localFont({
  src: [
    { path: "./google-fonts/geist-mono-bbc41e54d2fcbd21-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Geist Mono'" },
    { prop: "unicode-range", value: "U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF" },
  ],
});

const geistMonoFaces6 = localFont({
  src: [
    { path: "./google-fonts/geist-mono-797e433ab948586e-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Geist Mono'" },
    { prop: "unicode-range", value: "U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" },
  ],
});

/** Geist: what next/font/google returned for it. */
export const geistSans = {
  className: "google-font-geist",
  variable: "google-font-geist-variable",
  style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: "normal" },
  faces: [geistSansFaces1, geistSansFaces2, geistSansFaces3, geistSansFaces4, geistSansFaces5],
} as const;

/** Geist Mono: what next/font/google returned for it. */
export const geistMono = {
  className: "google-font-geist-mono",
  variable: "google-font-geist-mono-variable",
  style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: "normal" },
  faces: [geistMonoFaces1, geistMonoFaces2, geistMonoFaces3, geistMonoFaces4, geistMonoFaces5, geistMonoFaces6],
} as const;
