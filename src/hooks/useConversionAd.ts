import { useState, useCallback, useEffect } from "react";

const CONVERSION_COUNT_KEY = "filenexa_conversion_count";

export function useConversionAd() {
  const [isProcessingAd, setIsProcessingAd] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);
  
  // Provide a callback when ad finishes so the component can proceed
  const [onAdCallback, setOnAdCallback] = useState<(() => void) | null>(null);

  // Read initial count from local storage
  const getConversionCount = (): number => {
    if (typeof window === "undefined") return 0;
    const count = localStorage.getItem(CONVERSION_COUNT_KEY);
    return count ? parseInt(count, 10) : 0;
  };

  const incrementConversionCount = () => {
    if (typeof window === "undefined") return;
    const count = getConversionCount();
    localStorage.setItem(CONVERSION_COUNT_KEY, (count + 1).toString());
  };

  const handleConvertAction = useCallback((actualConvertFn: () => void | Promise<void>) => {
    const currentCount = getConversionCount();

    if (currentCount < 2) {
      // First 2 times: just show a loader for some time, no popup Ad
      setIsProcessingAd(true);
      incrementConversionCount();
      
      setTimeout(() => {
        setIsProcessingAd(false);
        actualConvertFn();
      }, 1500); // 1.5 seconds dummy loader delay
    } else {
      // More than 2 times: show Ad modal
      // We do NOT increment here if we want them to see an ad on EVERY subsequent conversion.
      // If we incremented, it would just keep growing. Which is fine.
      incrementConversionCount();
      
      setOnAdCallback(() => () => {
        setShowAdModal(false);
        setIsProcessingAd(false); // remove the global loading state if any
        actualConvertFn(); // run actual conversion after ad finishes
      });
      setShowAdModal(true);
    }
  }, []);

  const handleAdFinished = useCallback(() => {
    if (onAdCallback) {
      onAdCallback();
      setOnAdCallback(null);
    } else {
      setShowAdModal(false);
    }
  }, [onAdCallback]);

  return {
    handleConvertAction,
    isProcessingAd,
    showAdModal,
    handleAdFinished,
    handleCloseModal: handleAdFinished, // user skipped ad
  };
}
