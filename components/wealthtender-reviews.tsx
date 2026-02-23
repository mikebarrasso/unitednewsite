"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function WealthtenderReviews({
  profileId,
}: {
  profileId: string;
}): ReactNode {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [height, setHeight] = useState(400);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting && !loaded) {
        iframe.src = `https://wealthtender.com/embed/?type=reviews-block&id=${profileId}`;
        setLoaded(true);
        observer.disconnect();
      }
    });

    observer.observe(iframe);

    function handleMessage(event: MessageEvent) {
      if (event.origin === "https://wealthtender.com") {
        const msgHeight = parseInt(event.data[1], 10);
        if (!isNaN(msgHeight)) {
          const maxHeight = Math.min(600, window.innerHeight * 0.8);
          setHeight(Math.min(msgHeight, maxHeight));
        }
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      observer.disconnect();
      window.removeEventListener("message", handleMessage);
    };
  }, [profileId, loaded]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-auto rounded-xl"
      style={{ maxHeight: 600 }}
    >
      <iframe
        ref={iframeRef}
        title="Wealthtender Reviews"
        className="w-full border-0 rounded-xl"
        style={{ height }}
      />
    </div>
  );
}
