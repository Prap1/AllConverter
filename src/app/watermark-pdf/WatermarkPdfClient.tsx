"use client";

import { useState } from "react";
import { FileUploader } from "@/components/FileUploader";
import { Loader2, Download, AlertCircle } from "lucide-react";
import { useConversionAd } from "@/hooks/useConversionAd";
import { InterstitialAdModal } from "@/components/InterstitialAdModal";
import { PDFDocument, rgb, degrees } from "pdf-lib";

export default function WatermarkPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("CONFIDENTIAL");
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { handleConvertAction, isProcessingAd, showAdModal, handleAdFinished, handleCloseModal } = useConversionAd();

  const handleFilesSelected = (selected: File[]) => {
    if (selected.length > 0) {
      setFile(selected[0]);
      setError(null);
    }
  };

  const addWatermarkToPdf = async () => {
    if (!file || !text) return;
    setIsConverting(true);
    setError(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pages = pdfDoc.getPages();

      for (const page of pages) {
        const { width, height } = page.getSize();
        
        page.drawText(text, {
          x: width / 4,
          y: height / 2,
          size: 60,
          color: rgb(0.75, 0.75, 0.75),
          opacity: 0.4,
          rotate: degrees(45),
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = `watermarked_${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
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
        accept={{ "application/pdf": [".pdf"] }}
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
                Text will be stamped diagonally across every page of the document.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleConvertAction(addWatermarkToPdf)}
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
                Watermark PDF
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
