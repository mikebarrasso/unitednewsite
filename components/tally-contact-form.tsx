"use client";

import Script from "next/script";
import { useEffect, useRef, type ReactNode } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export function TallyContactForm(): ReactNode {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function loadEmbeds() {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      } else {
        document
          .querySelectorAll('iframe[data-tally-src]:not([src])')
          .forEach((el) => {
            const iframe = el as HTMLIFrameElement;
            if (iframe.dataset.tallySrc) {
              iframe.src = iframe.dataset.tallySrc;
            }
          });
      }
    }

    loadEmbeds();
  }, []);

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window.Tally !== "undefined") {
            window.Tally.loadEmbeds();
          }
        }}
      />
      <iframe
        ref={iframeRef}
        data-tally-src="https://tally.so/embed/npzjWy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="695"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact Us"
        className="min-h-[400px]"
      />
    </>
  );
}
