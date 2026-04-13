"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { FileUploader } from "@/components/FileUploader";
import { Download, LayoutGrid, Image as ImageIcon, FileText, Settings2, RefreshCw } from "lucide-react";
import jsPDF from "jspdf";

const PRESETS = [
  { id: "2x2in", label: "2x2 inch (US)", wPx: 600, hPx: 600, wMm: 51, hMm: 51 },
  { id: "3.5x4.5cm", label: "3.5x4.5 cm (UK/EU)", wPx: 413, hPx: 531, wMm: 35, hMm: 45 },
  { id: "custom", label: "Custom Size", wPx: 600, hPx: 600, wMm: 51, hMm: 51 },
];

export default function PassportPhotoClient() {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [preset, setPreset] = useState<string>("2x2in");
  const [zoom, setZoom] = useState<number>(1);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [copies, setCopies] = useState<number>(6);
  
  // Custom size state in arbitrary px, representing 300DPI sizing roughly
  const [customW, setCustomW] = useState(600);
  const [customH, setCustomH] = useState(600);

  const activePreset = PRESETS.find(p => p.id === preset) || PRESETS[0];
  const paperW = 2480; // A4 width 300dpi
  const paperH = 3508; // A4 height 300dpi

  const handleFilesSelected = (selected: File[]) => {
    if (selected.length > 0) {
      const f = selected[0];
      setFile(f);
      const url = URL.createObjectURL(f);
      const img = new Image();
      img.onload = () => {
        setImage(img);
        // auto-detect best zoom to cover
        const currentW = preset === "custom" ? customW : activePreset.wPx;
        const currentH = preset === "custom" ? customH : activePreset.hPx;
        
        const scaleX = currentW / img.width;
        const scaleY = currentH / img.height;
        setZoom(Math.max(scaleX, scaleY)); 
        setOffsetX(0);
        setOffsetY(0);
      };
      img.src = url;
    }
  };

  const drawSinglePhoto = useCallback((ctx: CanvasRenderingContext2D, targetW: number, targetH: number) => {
    if (!image) return;
    
    // Fill Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, targetW, targetH);
    
    // Draw Image
    const scaledW = image.width * zoom;
    const scaledH = image.height * zoom;
    
    const x = (targetW - scaledW) / 2 + offsetX;
    const y = (targetH - scaledH) / 2 + offsetY;
    
    ctx.drawImage(image, x, y, scaledW, scaledH);
  }, [image, zoom, offsetX, offsetY, bgColor]);

  const updatePreview = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    
    const w = preset === "custom" ? customW : activePreset.wPx;
    const h = preset === "custom" ? customH : activePreset.hPx;
    
    canvas.width = w;
    canvas.height = h;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    drawSinglePhoto(ctx, w, h);
  }, [image, preset, customW, customH, activePreset, drawSinglePhoto]);

  useEffect(() => {
    updatePreview();
  }, [updatePreview]);

  const handleDownloadSingle = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/jpeg", 1.0);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `passport-photo-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateSheetCanvas = () => {
    const canvas = document.createElement("canvas");
    canvas.width = paperW;
    canvas.height = paperH;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    
    // Fill white A4
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, paperW, paperH);
    
    const photoW = preset === "custom" ? customW : activePreset.wPx;
    const photoH = preset === "custom" ? customH : activePreset.hPx;
    
    // Margin and spacing
    const margin = 100;
    const spacing = 50;
    
    const cols = Math.floor((paperW - margin * 2) / (photoW + spacing));
    const startX = (paperW - (cols * photoW + (cols - 1) * spacing)) / 2;
    const startY = margin;
    
    // Create an offscreen canvas for the single photo to draw multiple times
    const singleCanvas = document.createElement("canvas");
    singleCanvas.width = photoW;
    singleCanvas.height = photoH;
    const singleCtx = singleCanvas.getContext("2d");
    if (singleCtx) {
      drawSinglePhoto(singleCtx, photoW, photoH);
      
      let count = 0;
      for (let row = 0; row < 100 && count < copies; row++) {     
        for (let col = 0; col < cols && count < copies; col++) {
          const x = startX + col * (photoW + spacing);
          const y = startY + row * (photoH + spacing);
          ctx.drawImage(singleCanvas, x, y);
          
          // Draw faint border for cutting
          ctx.strokeStyle = "#dddddd";
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y, photoW, photoH);
          
          count++;
        }
      }
    }
    return canvas;
  };

  const handleDownloadSheetImage = () => {
    const canvas = generateSheetCanvas();
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `passport-sheet-${copies}-copies.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPDF = () => {
     try {
        const canvas = generateSheetCanvas();
        if (!canvas) return;
        
        const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
        const doc = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4" // 210 x 297 mm
        });
        
        doc.addImage(dataUrl, "JPEG", 0, 0, 210, 297);
        doc.save(`passport-sheet-${copies}-copies.pdf`);
     } catch (err) {
       console.error("PDF generation failed", err);
       alert("Failed to generate PDF.");
     }
  };

  const reset = () => {
    setFile(null);
    setImage(null);
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
        <div className="w-full grid lg:grid-cols-12 gap-8 items-start">
          
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
                <label className="text-sm font-medium text-[hsl(var(--foreground))]">Size Preset</label>
                <select
                  value={preset}
                  onChange={(e) => setPreset(e.target.value)}
                  className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-lg p-2 text-sm focus:ring-2 focus:ring-[hsl(var(--primary))] outline-none"
                >
                  {PRESETS.map((p) => (
                    <option key={p.id} value={p.id}>{p.label}</option>
                  ))}
                </select>
              </div>

              {preset === "custom" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[hsl(var(--muted-foreground))]">Width (px @300dpi)</label>
                    <input
                      type="number"
                      value={customW}
                      onChange={(e) => setCustomW(Number(e.target.value))}
                      className="w-full bg-[hsl(var(--background))] border rounded-lg p-2 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[hsl(var(--muted-foreground))]">Height (px @300dpi)</label>
                    <input
                      type="number"
                      value={customH}
                      onChange={(e) => setCustomH(Number(e.target.value))}
                      className="w-full bg-[hsl(var(--background))] border rounded-lg p-2 text-sm"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1 pt-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-[hsl(var(--foreground))]">Zoom</label>
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">{(zoom * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="3"
                  step="0.01"
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full accent-[hsl(var(--primary))]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[hsl(var(--muted-foreground))]">Horizontal Offset</label>
                  <input
                    type="range"
                    min="-500"
                    max="500"
                    value={offsetX}
                    onChange={(e) => setOffsetX(Number(e.target.value))}
                    className="w-full accent-[hsl(var(--primary))]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[hsl(var(--muted-foreground))]">Vertical Offset</label>
                  <input
                    type="range"
                    min="-500"
                    max="500"
                    value={offsetY}
                    onChange={(e) => setOffsetY(Number(e.target.value))}
                    className="w-full accent-[hsl(var(--primary))]"
                  />
                </div>
              </div>

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

              <div className="space-y-1 pt-2 border-t mt-4">
                <label className="text-sm font-medium text-[hsl(var(--foreground))]">Number of Copies (Print Sheet)</label>
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={copies}
                  onChange={(e) => setCopies(Number(e.target.value))}
                  className="w-full bg-[hsl(var(--background))] border rounded-lg p-2 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-8 flex flex-col items-center justify-center space-y-6">
            <h3 className="text-lg font-medium text-[hsl(var(--muted-foreground))]">Live Preview</h3>
            
            <div className="bg-[hsl(var(--card))] shadow-sm border p-4 rounded-xl inline-block max-w-[100%] overflow-auto">
                <canvas 
                  ref={canvasRef} 
                  className="border border-dashed border-[hsl(var(--muted-foreground))]/50 max-h-[500px]"
                  style={{
                     width: preset === "custom" ? customW/3 : activePreset.wPx/3,
                     height: preset === "custom" ? customH/3 : activePreset.hPx/3,
                  }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
               <button
                 onClick={handleDownloadSingle}
                 className="flex flex-col items-center justify-center p-4 rounded-xl border border-[hsl(var(--border))] hover:bg-[hsl(var(--primary))]/10 hover:border-[hsl(var(--primary))]/50 transition-colors gap-2"
               >
                 <ImageIcon className="w-6 h-6 text-[hsl(var(--primary))]" />
                 <span className="font-semibold text-sm">Download Single (JPG)</span>
               </button>
               
               <button
                 onClick={handleDownloadSheetImage}
                 className="flex flex-col items-center justify-center p-4 rounded-xl border border-[hsl(var(--border))] hover:bg-[hsl(var(--primary))]/10 hover:border-[hsl(var(--primary))]/50 transition-colors gap-2"
               >
                 <LayoutGrid className="w-6 h-6 text-[hsl(var(--primary))]" />
                 <span className="font-semibold text-sm">Sheet of {copies} (JPG)</span>
               </button>
               
               <button
                 onClick={handleDownloadPDF}
                 className="flex flex-col items-center justify-center p-4 rounded-xl border border-transparent bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 shadow-md transition-opacity gap-2"
               >
                 <FileText className="w-6 h-6" />
                 <span className="font-semibold text-sm">Download Print PDF</span>
               </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
