import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { SkipToContent } from "@/components/skip-to-content";
import { ThemeSwitch } from "@/components/theme-switch";
import { baseMetadata } from "@/lib/metadata";
import { getWealthReachConfig } from "@/lib/config";
import { WealthReachHead } from "@wealthreach/site-kit/a11y";
import { PageTracker } from "@wealthreach/site-kit/analytics";
import {
  ConsentBanner,
  ConsentGate,
  ConsentProvider,
} from "@wealthreach/site-kit/consent";
import type { Metadata, Viewport } from "next";
import { geistSans, geistMono } from "./google-fonts";
import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1a2e" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode {
  const wrConfig = getWealthReachConfig();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <WealthReachHead config={wrConfig} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <Providers>
          <ConsentProvider config={wrConfig}>
            <SkipToContent />
            <Header />
            <ThemeSwitch />
            {children}
            <ConsentBanner />
            <PageTracker />
            {!wrConfig.visitors?.enabled && (
              <ConsentGate>
                <Analytics />
              </ConsentGate>
            )}
          </ConsentProvider>
        </Providers>
      </body>
    </html>
  );
}
