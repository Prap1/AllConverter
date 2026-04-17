"use client";

import { useState } from "react";
import { FileUploader } from "@/components/FileUploader";
import { Loader2, Download, AlertCircle } from "lucide-react";
import { useConversionAd } from "@/hooks/useConversionAd";
import { InterstitialAdModal } from "@/components/InterstitialAdModal";

export default function CompressImageClient() {
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quality, setQuality] = useState<number>(80);

  const { handleConvertAction, isProcessingAd, showAdModal, handleAdFinished, handleCloseModal } = useConversionAd();

  const handleFilesSelected = (selected: File[]) => {
    if (selected.length > 0) {
      setFile(selected[0]);
      setError(null);
    }
  };

  const compressImage = async () => {
    if (!file) return;
    setIsConverting(true);
    setError(null);

    try {
      const isJpegOrJpg = file.type === "image/jpeg" || file.type === "image/jpg";
      const format = isJpegOrJpg ? "image/jpeg" : "image/webp"; // Fallback to webp to support compression for PNGs if needed.
      
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
      
      // Fill with white background in case of transparent png converted to jpeg format
      if (format === "image/jpeg") {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(imgElement, 0, 0);

      // Compress
      const dataUrl = canvas.toDataURL(format, quality / 100);
      
      const link = document.createElement("a");
      link.href = dataUrl;
      const extension = isJpegOrJpg ? ".jpeg" : ".webp";
      link.download = `compressed_${file.name.split('.')[0]}${extension}`; // Name logic
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err: any) {
      console.error(err);
      setError(err?.message || "An error occurred during compression.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <FileUploader
        accept={{ "image/jpeg": [".jpg", ".jpeg", ".jfif"], "image/png": [".png"], "image/webp": [".webp"] }}
        onFilesSelected={handleFilesSelected}
        isLoading={isConverting}
        multiple={false}
      />

      {error && (
        <div className="w-full max-w-2xl bg-[hsl(var(--destructive))]/10 border border-[hsl(var(--destructive))] text-[hsl(var(--destructive))] p-4 rounded-lg flex items-center gap-2 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {file && (
        <div className="w-full max-w-2xl flex flex-col gap-6">
          <p className="text-sm text-[hsl(var(--muted-foreground))] text-center">
            Selected: <span className="font-medium text-[hsl(var(--foreground))]">{file.name}</span>
          </p>

          <div className="p-6 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl shadow-sm space-y-4">
            <div className="flex justify-between items-center text-sm font-medium">
              <label>Compression Level (Quality)</label>
              <span>{quality}%</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="100" 
              value={quality} 
              onChange={(e) => setQuality(Number(e.target.value))} 
              className="w-full accent-[hsl(var(--primary))]" 
            />
            <p className="text-xs text-[hsl(var(--muted-foreground))] text-center">
              Lower quality means smaller file size but visually worse image.
            </p>
          </div>

          <button
            onClick={() => handleConvertAction(compressImage)}
            disabled={isConverting || isProcessingAd}
            className="w-full text-lg font-semibold py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-xl hover:bg-[hsl(var(--primary))]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            {isConverting || isProcessingAd ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Compressing...
              </>
            ) : (
              <>
                Compress & Download
                <Download className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      )}

      <InterstitialAdModal 
        isOpen={showAdModal} 
        onAdFinished={handleAdFinished} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}
