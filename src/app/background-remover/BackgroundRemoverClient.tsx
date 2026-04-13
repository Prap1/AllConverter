"use client";

import { useState, useRef, useEffect } from "react";
import { FileUploader } from "@/components/FileUploader";
import { Loader2, Download, AlertCircle, RefreshCw, Settings2 } from "lucide-react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";

let cachedModel: bodyPix.BodyPix | null = null;

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : { r: 255, g: 255, b: 255 };
}

export default function BackgroundRemoverClient() {
  const [file, setFile] = useState<File | null>(null);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Settings
  const [mode, setMode] = useState<"transparent" | "solid" | "blur">("transparent");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [blurAmount, setBlurAmount] = useState<number>(10);
  const [threshold, setThreshold] = useState<number>(0.7);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleFilesSelected = (selected: File[]) => {
    if (selected.length > 0) {
      const f = selected[0];
      setFile(f);
      setOriginalImageUrl(URL.createObjectURL(f));
      setProcessedImageUrl(null);
      setError(null);
    }
  };

  const processImage = async () => {
    if (!originalImageUrl) return;
    setIsProcessing(true);
    setError(null);

    try {
      setProgress("Loading AI Model (may take a moment the first time)...");
      if (!cachedModel) {
        await tf.ready();
        cachedModel = await bodyPix.load({
          architecture: "MobileNetV1",
          outputStride: 16,
          multiplier: 0.75,
          quantBytes: 2,
        });
      }

      setProgress("Preparing image...");

      const img = new Image();
      img.src = originalImageUrl;
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      // Constraints: resize to max 512px
      const MAX_WIDTH = 512;
      let targetW = img.width;
      let targetH = img.height;
      if (img.width > MAX_WIDTH) {
        targetW = MAX_WIDTH;
        targetH = (img.height * MAX_WIDTH) / img.width;
      } else if (img.height > MAX_WIDTH) {
        targetH = MAX_WIDTH;
        targetW = (img.width * MAX_WIDTH) / img.height;
      }

      // Draw to an offscreen canvas
      const offscreenCanvas = document.createElement("canvas");
      offscreenCanvas.width = targetW;
      offscreenCanvas.height = targetH;
      const ctx = offscreenCanvas.getContext("2d");
      if (!ctx) throw new Error("Could not create canvas context");
      ctx.drawImage(img, 0, 0, targetW, targetH);

      setProgress("Segmenting image...");
      const segmentation = await cachedModel.segmentPerson(offscreenCanvas, {
        internalResolution: "medium",
        segmentationThreshold: threshold,
      });

      if (mode === "blur") {
        // BodyPix handles blurring onto the canvas directly.
        bodyPix.drawBokehEffect(
          offscreenCanvas,
          offscreenCanvas, // ✅ FIXED
          segmentation,
          blurAmount,
          20
        );
      } else {
        const imgData = ctx.getImageData(0, 0, targetW, targetH);
        const rgb = hexToRgb(bgColor);

        for (let i = 0; i < segmentation.data.length; i++) {
          const isPerson = segmentation.data[i];
          const n = i * 4;

          if (!isPerson) {
            if (mode === "transparent") {
              imgData.data[n + 3] = 0; // Alpha
            } else if (mode === "solid") {
              imgData.data[n] = rgb.r;
              imgData.data[n + 1] = rgb.g;
              imgData.data[n + 2] = rgb.b;
              imgData.data[n + 3] = 255;
            }
          }
        }
        ctx.putImageData(imgData, 0, 0);
      }

      const dataUrl = offscreenCanvas.toDataURL(mode === "transparent" ? "image/png" : "image/jpeg", 0.95);
      setProcessedImageUrl(dataUrl);

    } catch (err: any) {
      console.error("TF BodyPix Error: ", err);
      setError(err?.message || "An error occurred during processing.");
    } finally {
      setIsProcessing(false);
      setProgress("");
    }
  };

  const handleDownload = () => {
    if (!processedImageUrl || !file) return;

    const link = document.createElement("a");
    link.href = processedImageUrl;
    const extension = mode === "transparent" ? "png" : "jpg";
    link.download = `processed-${file.name.replace(/\.[^/.]+$/, "")}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const reset = () => {
    setFile(null);
    setOriginalImageUrl(null);
    setProcessedImageUrl(null);
    setError(null);
    setProgress("");
  };


  return (
    <div className="w-full flex flex-col items-center gap-8">
      {!file ? (
        <FileUploader
          accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
          onFilesSelected={handleFilesSelected}
          multiple={false}
          maxFiles={1}
        />
      ) : (
        <div className="w-full grid lg:grid-cols-12 gap-8 items-start max-w-6xl">

          {/* Controls Panel */}
          <div className="lg:col-span-4 space-y-6 bg-[hsl(var(--secondary))]/30 p-6 rounded-2xl border border-[hsl(var(--border))]">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Settings2 className="w-5 h-5" /> Settings
              </h2>
              <button
                onClick={reset}
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                title="Start Over"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-[hsl(var(--foreground))]">Mode</label>
                <select
                  value={mode}
                  onChange={(e) => setMode(e.target.value as "transparent" | "solid" | "blur")}
                  className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-lg p-2 text-sm focus:ring-2 focus:ring-[hsl(var(--primary))] outline-none"
                >
                  <option value="transparent">Transparent Background</option>
                  <option value="solid">Solid Color Background</option>
                  <option value="blur">Blur Background</option>
                </select>
              </div>

              {mode === "blur" && (
                <div className="space-y-1 pt-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-[hsl(var(--foreground))]">Blur Amount</label>
                    <span className="text-xs text-[hsl(var(--muted-foreground))]">{blurAmount}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={blurAmount}
                    onChange={(e) => setBlurAmount(Number(e.target.value))}
                    className="w-full accent-[hsl(var(--primary))]"
                  />
                </div>
              )}

              {mode === "solid" && (
                <div className="space-y-1 pt-2">
                  <label className="text-sm font-medium text-[hsl(var(--foreground))]">Background Color</label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-10 h-10 border-0 rounded cursor-pointer p-0"
                    />
                    <div className="flex gap-2">
                      {["#ffffff", "#2196F3", "#F44336"].map((color) => (
                        <button
                          key={color}
                          onClick={() => setBgColor(color)}
                          className={`w-6 h-6 rounded-full border-2 ${bgColor === color ? 'border-black dark:border-white' : 'border-transparent'}`}
                          style={{ backgroundColor: color }}
                          title={`Set to ${color}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-1 pt-2 border-t mt-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-[hsl(var(--foreground))]">Segmentation Threshold</label>
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">{threshold.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="0.99"
                  step="0.01"
                  value={threshold}
                  onChange={(e) => setThreshold(Number(e.target.value))}
                  className="w-full accent-[hsl(var(--primary))]"
                />
                <p className="text-xs text-[hsl(var(--muted-foreground))]">
                  Lower values detect more, but might include background.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={processImage}
                  disabled={isProcessing}
                  className="w-full px-6 py-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                >
                  {isProcessing ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                  ) : (
                    "Process Image"
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-8 flex flex-col items-center gap-6">
            <h3 className="text-lg font-medium text-[hsl(var(--muted-foreground))]">Original vs Result</h3>

            <div className="grid md:grid-cols-2 gap-4 w-full">
              <div className="w-full aspect-square md:aspect-auto md:h-96 relative border border-[hsl(var(--border))] rounded-xl bg-black/5 flex items-center justify-center overflow-hidden p-2">
                {originalImageUrl && <img src={originalImageUrl} alt="Original" className="max-w-full max-h-full object-contain" />}
              </div>

              <div className={`w-full aspect-square md:aspect-auto md:h-96 relative border border-[hsl(var(--border))] rounded-xl flex items-center justify-center overflow-hidden p-2 ${mode === 'transparent' ? 'bg-[url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_checkerboard.png")]' : ''}`}>
                {isProcessing ? (
                  <div className="text-center px-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-black/10">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-[hsl(var(--primary))]" />
                    <p className="text-sm font-medium">{progress}</p>
                  </div>
                ) : processedImageUrl ? (
                  <img src={processedImageUrl} alt="Processed Result" className="max-w-full max-h-full object-contain" />
                ) : (
                  <p className="text-[hsl(var(--muted-foreground))] text-sm">Processed image will appear here.</p>
                )}
              </div>
            </div>

            {error && (
              <div className="w-full bg-[hsl(var(--destructive))]/10 border border-[hsl(var(--destructive))] text-[hsl(var(--destructive))] p-4 rounded-lg flex items-center gap-2 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>{error}</p>
              </div>
            )}

            {processedImageUrl && !isProcessing && (
              <div className="w-full flex justify-center mt-4">
                <button
                  onClick={handleDownload}
                  className="px-8 py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg"
                >
                  <Download className="w-6 h-6" /> Download {mode === "transparent" ? "PNG" : "JPG"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
