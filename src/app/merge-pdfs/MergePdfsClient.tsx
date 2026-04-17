"use client";

import { useState } from "react";
import { FileUploader } from "@/components/FileUploader";
import { Loader2, Download, AlertCircle } from "lucide-react";
import { useConversionAd } from "@/hooks/useConversionAd";
import { InterstitialAdModal } from "@/components/InterstitialAdModal";
import { PDFDocument } from "pdf-lib";

export default function MergePdfsClient() {
  const [files, setFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { handleConvertAction, isProcessingAd, showAdModal, handleAdFinished, handleCloseModal } = useConversionAd();

  const handleFilesSelected = (selected: File[]) => {
    // Append instead of replace if they upload multiple times?
    // We replace for simplicity.
    setFiles(selected);
    setError(null);
  };

  const mergePdfs = async () => {
    if (files.length < 2) {
      setError("Please select at least 2 PDF files to merge.");
      return;
    }
    setIsConverting(true);
    setError(null);

    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        if (file.type !== "application/pdf") {
          throw new Error(`File ${file.name} is not a PDF file.`);
        }

        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = `merged_${Date.now()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "An error occurred while merging PDFs.");
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
        multiple={true}
      />

      {error && (
        <div className="w-full max-w-2xl bg-[hsl(var(--destructive))]/10 border border-[hsl(var(--destructive))] text-[hsl(var(--destructive))] p-4 rounded-lg flex items-center gap-2 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {files.length > 0 && (
        <div className="w-full max-w-2xl flex flex-col gap-4">
          <p className="text-sm text-[hsl(var(--muted-foreground))] text-center">
            {files.length} {files.length === 1 ? 'file' : 'files'} selected for merging (in order).
          </p>
          <button
            onClick={() => handleConvertAction(mergePdfs)}
            disabled={isConverting || isProcessingAd || files.length < 2}
            className="w-full text-lg font-semibold py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-xl hover:bg-[hsl(var(--primary))]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            {isConverting || isProcessingAd ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Merging PDFs...
              </>
            ) : (
              <>
                Merge PDFs
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
