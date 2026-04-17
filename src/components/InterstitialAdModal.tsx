"use client";

import { useEffect, useState } from "react";
import { Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface InterstitialAdModalProps {
  isOpen: boolean;
  onAdFinished: () => void;
  onClose: () => void;
}

export function InterstitialAdModal({ isOpen, onAdFinished, onClose }: InterstitialAdModalProps) {
  const [countdown, setCountdown] = useState(5); // Show "Skip Ad" after 5 seconds or auto-proceed
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(5);
      setCanSkip(false);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanSkip(true);
          // If no ads load, we might want to auto proceed. Let's auto proceed for the sake of the placeholder requirement.
          // Wait 2 more seconds then auto-finish.
          setTimeout(() => {
            onAdFinished();
          }, 2000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onAdFinished]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[hsl(var(--background))]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-[hsl(var(--border))] flex justify-between items-center">
          <span className="text-sm font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
            Advertisement
          </span>
          <button
            onClick={canSkip ? onClose : undefined}
            disabled={!canSkip}
            className={cn(
              "text-sm font-medium p-2 rounded-md transition-colors",
              canSkip
                ? "text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]"
                : "text-[hsl(var(--muted-foreground))] opacity-50 cursor-not-allowed"
            )}
          >
            {canSkip ? <X className="w-5 h-5" /> : `Skip in ${countdown}s`}
          </button>
        </div>

        <div className="p-8 aspect-video flex flex-col items-center justify-center bg-[hsl(var(--muted))]/20 relative">
           {/* Loader indicating "If no ads then show loader for some times" */}
          <Loader2 className="w-10 h-10 animate-spin text-[hsl(var(--primary))] mb-4 opacity-50" />
          
          <div className="text-center space-y-2">
            <h3 className="font-bold text-lg text-[hsl(var(--foreground))]">Placeholder Advertisement</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Loading ad from global networks...
            </p>
          </div>

          {/* TODO: Insert real Interstitial/Popup Ad network code here */}
        </div>
      </div>
    </div>
  );
}
