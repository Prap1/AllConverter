"use client";

import { useState } from "react";
import { FileUploader } from "@/components/FileUploader";
import { Loader2, Download, AlertCircle } from "lucide-react";

export default function DocToPdfClient() {
  const [files, setFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (selected: File[]) => {
    setFiles(selected);
    setError(null);
  };

  const convertToPdf = async () => {
    if (files.length === 0) return;
    setIsConverting(true);
    setError(null);

    try {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);

      // Call our API route
      const response = await fetch("/api/convert/doc-to-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to convert document.");
      }

      // Download the PDF stream
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name.replace(/\.(doc|docx)$/i, ".pdf");
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      link.remove();
      window.URL.revokeObjectURL(url);
      
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
          "application/msword": [".doc"],
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
        }}
        onFilesSelected={handleFilesSelected}
        isLoading={isConverting}
        maxFiles={1}
        multiple={false}
      />

      {error && (
        <div className="w-full max-w-2xl bg-[hsl(var(--destructive))]/10 border border-[hsl(var(--destructive))] text-[hsl(var(--destructive))] p-4 rounded-lg flex items-center gap-2 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {files.length > 0 && (
        <button
          onClick={convertToPdf}
          disabled={isConverting}
          className="w-full max-w-2xl text-lg font-semibold py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-xl hover:bg-[hsl(var(--primary))]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          {isConverting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing on server...
            </>
          ) : (
            <>
              Convert to PDF
              <Download className="w-5 h-5" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
