"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export function AdBanner({ className }: { className?: string }) {
  const adInit = useRef(false);

  useEffect(() => {
    if (!adInit.current && typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error", e);
      }
      adInit.current = true;
    }
  }, []);

  return (
    <div className={cn("w-full", className)}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5314962273762361"
        data-ad-slot="1894745219"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
