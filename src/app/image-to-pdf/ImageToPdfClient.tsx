"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import { FileUploader } from "@/components/FileUploader";
import { Loader2, Download, AlertCircle } from "lucide-react";
import { useConversionAd } from "@/hooks/useConversionAd";
import { InterstitialAdModal } from "@/components/InterstitialAdModal";

export default function ImageToPdfClient() {
  const [files, setFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { handleConvertAction, isProcessingAd, showAdModal, handleAdFinished, handleCloseModal } = useConversionAd();

  const handleFilesSelected = (selected: File[]) => {
    setFiles(selected);
    setError(null);
  };

  const convertToPdf = async () => {
    if (files.length === 0) return;
    setIsConverting(true);
    setError(null);

    try {
      const pdf = new jsPDF("p", "mm", "a4");
      const a4Width = 210;
      const a4Height = 297;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Wait for image to load
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

        const imgWidth = imgElement.width;
        const imgHeight = imgElement.height;
        const ratio = Math.min(a4Width / imgWidth, a4Height / imgHeight);
        
        const pdfWidth = imgWidth * ratio;
        const pdfHeight = imgHeight * ratio;
        
        // Center the image
        const xOffset = (a4Width - pdfWidth) / 2;
        const yOffset = (a4Height - pdfHeight) / 2;

        if (i > 0) {
          pdf.addPage();
        }

        const ext = file.type === "image/png" ? "PNG" : "JPEG";
        pdf.addImage(imgElement, ext, xOffset, yOffset, pdfWidth, pdfHeight);
      }

      pdf.save("converted.pdf");
      
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
        accept={{
          "image/jpeg": [".jpg", ".jpeg"],
          "image/png": [".png"],
        }}
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
          onClick={() => handleConvertAction(convertToPdf)}
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
              Convert to PDF
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
