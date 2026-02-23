"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function WealthtenderFirmReviews({
  firmId,
}: {
  firmId: string;
}): ReactNode {
  const MIN_HEIGHT = 400;
  const MAX_HEIGHT = 900;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [height, setHeight] = useState(MIN_HEIGHT);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !loaded) {
          iframe.src = `https://wealthtender.com/embed/?type=reviews&id=${firmId}&view=list`;
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(iframe);

    function handleMessage(event: MessageEvent) {
      if (
        event.origin === "https://wealthtender.com" &&
        Array.isArray(event.data) &&
        event.data.length > 1
      ) {
        const msgHeight = parseInt(event.data[1], 10);
        if (!isNaN(msgHeight)) {
          setHeight(Math.min(Math.max(msgHeight, MIN_HEIGHT), MAX_HEIGHT));
        }
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      observer.disconnect();
      window.removeEventListener("message", handleMessage);
    };
  }, [firmId, loaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto max-w-5xl overflow-auto rounded-xl"
      style={{ minHeight: MIN_HEIGHT, height }}
    >
      {/* Loading indicator */}
      {!iframeLoaded && loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-xl text-foreground/50 text-sm">
          Loading reviews...
        </div>
      )}

      <iframe
        ref={iframeRef}
        title="Wealthtender Financial Advisor Reviews"
        className="absolute inset-0 w-full h-full border-0 rounded-xl"
        loading="lazy"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        onLoad={() => setIframeLoaded(true)}
      />
    </div>
  );
}
