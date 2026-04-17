"use client";

import { useState } from "react";
import { FileUploader } from "@/components/FileUploader";
import { Loader2, Download, AlertCircle } from "lucide-react";
import { useConversionAd } from "@/hooks/useConversionAd";
import { InterstitialAdModal } from "@/components/InterstitialAdModal";

export default function JfifToPngClient() {
  const [files, setFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { handleConvertAction, isProcessingAd, showAdModal, handleAdFinished, handleCloseModal } = useConversionAd();

  const handleFilesSelected = (selected: File[]) => {
    setFiles(selected);
    setError(null);
  };

  const convertToPng = async () => {
    if (files.length === 0) return;
    setIsConverting(true);
    setError(null);

    try {
      for (const file of files) {
        if (!file.name.toLowerCase().endsWith(".jfif")) {
          throw new Error(`File ${file.name} is not a JFIF file.`);
        }

        const imgElement = await new Promise<HTMLImageElement>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error("Failed to load image"));
            img.src = e.target?.result as string;
          };
          reader.onerror = () => reject(new Error("Failed to read file"));
          reader.readAsDataURL(file);
        });

        const canvas = document.createElement("canvas");
        canvas.width = imgElement.width;
        canvas.height = imgElement.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Could not create canvas context.");
        
        ctx.drawImage(imgElement, 0, 0);

        const dataUrl = canvas.toDataURL("image/png");
        
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = file.name.replace(/\.jfif$/i, ".png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "An error occurred during conversion.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <FileUploader
        accept={{ "image/jpeg": [".jfif"] }}
        onFilesSelected={handleFilesSelected}
        isLoading={isConverting}
        multiple={true}
      />

      {error && (
        <div className="w-full max-w-2xl bg-[hsl(var(--destructive))]/10 border border-[hsl(var(--destructive))] text-[hsl(var(--destructive))] p-4 rounded-lg flex items-center gap-2 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {files.length > 0 && (
        <button
          onClick={() => handleConvertAction(convertToPng)}
          disabled={isConverting || isProcessingAd}
          className="w-full max-w-2xl text-lg font-semibold py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-xl hover:bg-[hsl(var(--primary))]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          {isConverting || isProcessingAd ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Convert to PNG
              <Download className="w-5 h-5" />
            </>
          )}
        </button>
      )}

      <InterstitialAdModal 
        isOpen={showAdModal} 
        onAdFinished={handleAdFinished} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}
