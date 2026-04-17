"use client";

import { useState } from "react";
import { FileUploader } from "@/components/FileUploader";
import { Loader2, Download, AlertCircle } from "lucide-react";
import { useConversionAd } from "@/hooks/useConversionAd";
import { InterstitialAdModal } from "@/components/InterstitialAdModal";

export default function AddWatermarkClient() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("Watermark");
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { handleConvertAction, isProcessingAd, showAdModal, handleAdFinished, handleCloseModal } = useConversionAd();

  const handleFilesSelected = (selected: File[]) => {
    if (selected.length > 0) {
      setFile(selected[0]);
      setError(null);
    }
  };

  const addWatermarkToImage = async () => {
    if (!file || !text) return;
    setIsConverting(true);
    setError(null);

    try {
      const isJpegOrJpg = file.type === "image/jpeg" || file.type === "image/jpg";
      const format = isJpegOrJpg ? "image/jpeg" : "image/png";
      
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

      // Add watermark text to bottom right corner
      ctx.font = `bold ${Math.max(20, Math.floor(canvas.width / 15))}px Arial`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)"; // White with opacity
      ctx.textAlign = "right";
      ctx.textBaseline = "bottom";
      
      const padding = Math.floor(canvas.width * 0.05);
      
      // Draw shadow/outline for readability
      ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
      ctx.lineWidth = Math.max(1, Math.floor(canvas.width / 300));
      ctx.strokeText(text, canvas.width - padding, canvas.height - padding);
      ctx.fillText(text, canvas.width - padding, canvas.height - padding);

      const dataUrl = canvas.toDataURL(format);
      
      const link = document.createElement("a");
      link.href = dataUrl;
      const extension = isJpegOrJpg ? ".jpeg" : ".png";
      link.download = `watermarked_${file.name.split('.')[0]}${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err: any) {
      console.error(err);
      setError(err?.message || "An error occurred while adding the watermark.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <FileUploader
        accept={{ "image/jpeg": [".jpg", ".jpeg"], "image/png": [".png"], "image/webp": [".webp"] }}
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
          <div className="p-6 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl shadow-sm space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[hsl(var(--foreground))]">Watermark Text</label>
              <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Enter watermark text..."
                className="w-full p-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] focus:ring-2 focus:ring-[hsl(var(--primary))] outline-none"
              />
              <p className="text-xs text-[hsl(var(--muted-foreground))]">
                Text will be placed in the bottom-right corner of the image automatically.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleConvertAction(addWatermarkToImage)}
            disabled={isConverting || isProcessingAd || !text}
            className="w-full text-lg font-semibold py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-xl hover:bg-[hsl(var(--primary))]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            {isConverting || isProcessingAd ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Add Watermark
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
