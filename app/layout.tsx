import { Header } from "@/components/header";
import { VisitorConsentBanner } from "@/components/consent/visitor-consent-banner";
import { Providers } from "@/components/providers";
import { SkipToContent } from "@/components/skip-to-content";
import { ThemeSwitch } from "@/components/theme-switch";
import { baseMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";
import { visitorConsentBootstrap } from "@/lib/visitor-consent";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {siteConfig.visitors?.enabled && (
          <script
            dangerouslySetInnerHTML={{
              __html: visitorConsentBootstrap(siteConfig.visitors.siteScriptUrl),
            }}
          />
        )}
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GN2NWJH73H"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GN2NWJH73H');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <Providers>
          <SkipToContent />
          <Header />
          <ThemeSwitch />
          {children}
          {siteConfig.visitors?.enabled && <VisitorConsentBanner />}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
