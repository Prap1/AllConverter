"use client";

import { useCallback, useState } from "react";
import { useDropzone, type Accept } from "react-dropzone";
import { UploadCloud, File as FileIcon, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
  accept?: Accept;
  maxFiles?: number;
  multiple?: boolean;
  isLoading?: boolean;
  maxSize?: number;
}

const humanFileSize = (size: number) => {
  const i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) +
    " " +
    ["B", "kB", "MB", "GB", "TB"][i]
  );
};

export function FileUploader({
  onFilesSelected,
  accept,
  maxFiles = 0, // 0 means unlimited in dropzone API, but we'll enforce via config if passed > 0
  multiple = true,
  isLoading = false,
  maxSize = 25 * 1024 * 1024, // 25MB default
}: FileUploaderProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setErrorMsg(null);
      let newFiles = [...(multiple ? selectedFiles : []), ...acceptedFiles];
      if (maxFiles > 0 && newFiles.length > maxFiles) {
        newFiles = newFiles.slice(0, maxFiles);
      }
      setSelectedFiles(newFiles);
      onFilesSelected(newFiles);
    },
    [selectedFiles, onFilesSelected, maxFiles, multiple]
  );

  const onDropRejected = useCallback((rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      if (rejectedFiles[0].errors[0].code === "file-too-large") {
        setErrorMsg(`File is too large. Max size is ${humanFileSize(maxSize)}.`);
      } else {
        setErrorMsg(rejectedFiles[0].errors[0].message);
      }
    }
  }, [maxSize]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept,
    multiple,
    maxSize,
    maxFiles: maxFiles > 0 ? maxFiles : undefined,
    disabled: isLoading,
  });

  const removeFile = (indexToRemove: number) => {
    const remainingFiles = selectedFiles.filter((_, idx) => idx !== indexToRemove);
    setSelectedFiles(remainingFiles);
    onFilesSelected(remainingFiles);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div
        {...getRootProps()}
        className={cn(
          "w-full p-12 text-center rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-4 bg-[hsl(var(--card))]",
          isDragActive
            ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5"
            : "border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50 hover:bg-[hsl(var(--secondary))]/20",
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        )}
      >
        <input {...getInputProps()} />
        <div className="p-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-full">
          {isLoading ? (
            <Loader2 className="w-8 h-8 animate-spin" />
          ) : (
            <UploadCloud className="w-8 h-8" />
          )}
        </div>
        <div className="space-y-1">
          <p className="font-medium text-lg text-[hsl(var(--foreground))] text-balance">
            {isDragActive
              ? "Drop files here..."
              : "Drag & drop files here, or click to select"}
          </p>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            {multiple ? "You can select multiple files." : "Maximum 1 file allowed."}
          </p>
        </div>
      </div>
      
      {errorMsg && (
        <div className="text-center text-sm font-medium text-[hsl(var(--destructive))]">
          {errorMsg}
        </div>
      )}

      {selectedFiles.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-[hsl(var(--foreground))]">
            Selected Files ({selectedFiles.length})
          </h4>
          <div className="grid gap-2">
            {selectedFiles.map((file, idx) => (
              <div
                key={`${file.name}-${idx}`}
                className="flex items-center justify-between p-3 bg-[hsl(var(--secondary))]/50 border rounded-lg animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 bg-[hsl(var(--background))] border rounded-md">
                    <FileIcon className="w-4 h-4 text-[hsl(var(--primary))]" />
                  </div>
                  <div className="truncate">
                    <p className="text-sm font-medium text-[hsl(var(--foreground))] truncate max-w-[200px] sm:max-w-xs">
                      {file.name}
                    </p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      {humanFileSize(file.size)}
                    </p>
                  </div>
                </div>
                {!isLoading && (
                  <button
                    onClick={() => removeFile(idx)}
                    className="p-1.5 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--destructive))] hover:bg-[hsl(var(--destructive))]/10 rounded-md transition-colors"
                    aria-label="Remove file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
