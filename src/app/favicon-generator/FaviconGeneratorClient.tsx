"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { FileUploader } from "@/components/FileUploader";
import { Download, Archive, RefreshCw, Settings2, Image as ImageIcon } from "lucide-react";
import JSZip from "jszip";

const SIZES = [16, 32, 48, 64, 128];
const EXTRA_SIZES = [
  { w: 180, name: "apple-touch-icon.png" },
  { w: 192, name: "android-chrome-192x192.png" },
  { w: 512, name: "android-chrome-512x512.png" },
];

export default function FaviconGeneratorClient() {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  
  // Settings
  const [bgColor, setBgColor] = useState<string>("transparent");
  const [colorHex, setColorHex] = useState<string>("#ffffff");
  const [paddingMode, setPaddingMode] = useState<boolean>(false);
  const [padding, setPadding] = useState<number>(10);
  const [borderRadius, setBorderRadius] = useState<number>(0);
  
  // Results
  const [canvases, setCanvases] = useState<{size: number, canvas: HTMLCanvasElement}[]>([]);
  const [dataUrls, setDataUrls] = useState<Record<number, string>>({});
  
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFilesSelected = (selected: File[]) => {
    if (selected.length > 0) {
      const f = selected[0];
      setFile(f);
      const url = URL.createObjectURL(f);
      const img = new Image();
      img.onload = () => {
        setImage(img);
      };
      img.src = url;
    }
  };

  const drawScaledImage = useCallback((size: number) => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx || !image) return canvas;

    ctx.clearRect(0, 0, size, size);

    // Apply Background & Border Radius
    if (borderRadius > 0) {
      ctx.beginPath();
      // approximate radius scaled to current resolution
      const scaledRadius = (borderRadius / 100) * (size / 2);
      ctx.roundRect(0, 0, size, size, scaledRadius);
      ctx.clip();
    }
    
    if (bgColor === "solid") {
      ctx.fillStyle = colorHex;
      ctx.fillRect(0, 0, size, size);
    }
    
    // Calculate size after padding
    const activePadding = paddingMode ? (padding / 100) * size : 0;
    const availableSize = size - activePadding * 2;
    
    // Scale preserving aspect ratio within bounding box
    const scale = Math.min(availableSize / image.width, availableSize / image.height);
    const scaledW = image.width * scale;
    const scaledH = image.height * scale;
    const x = (size - scaledW) / 2;
    const y = (size - scaledH) / 2;

    ctx.drawImage(image, x, y, scaledW, scaledH);
    return canvas;
  }, [image, bgColor, colorHex, paddingMode, padding, borderRadius]);

  const generateFavicons = useCallback(() => {
    if (!image) return;
    
    const generated: {size: number, canvas: HTMLCanvasElement}[] = [];
    const urls: Record<number, string> = {};
    
    for (const size of SIZES) {
      const c = drawScaledImage(size);
      generated.push({ size, canvas: c });
      urls[size] = c.toDataURL("image/png", 1.0);
    }
    
    setCanvases(generated);
    setDataUrls(urls);
  }, [image, drawScaledImage]);

  useEffect(() => {
    if (image) {
      generateFavicons();
    }
  }, [image, bgColor, colorHex, paddingMode, padding, borderRadius, generateFavicons]);

  const getCanvasBlob = (canvas: HTMLCanvasElement): Promise<Blob> => {
    return new Promise((resolve) => {
      canvas.toBlob((b) => {
        if (b) resolve(b);
      }, "image/png");
    });
  };

  const buildICO = async (): Promise<Blob> => {
    const blobs = await Promise.all(canvases.map(c => getCanvasBlob(c.canvas)));
    const arrayBuffers = await Promise.all(blobs.map(b => b.arrayBuffer()));
    
    // Build ICO header (6 bytes)
    const header = new ArrayBuffer(6);
    const headerView = new DataView(header);
    headerView.setUint16(0, 0, true); // reserved
    headerView.setUint16(2, 1, true); // type ico
    headerView.setUint16(4, arrayBuffers.length, true); // num images
    
    // Image directories (16 bytes each)
    let directoryBytes = new Uint8Array(arrayBuffers.length * 16);
    let offset = 6 + arrayBuffers.length * 16;
    
    const dataBytesArray: Uint8Array[] = [];
    
    for (let i = 0; i < arrayBuffers.length; i++) {
        const size = canvases[i].size;
        const ab = arrayBuffers[i];
        const dataBytes = new Uint8Array(ab);
        dataBytesArray.push(dataBytes);
        
        const dirView = new DataView(directoryBytes.buffer);
        const dirOffset = i * 16;
        
        // 0: width, 1: height, 2: colors, 3: reserved...
        dirView.setUint8(dirOffset + 0, size === 256 ? 0 : size); // width
        dirView.setUint8(dirOffset + 1, size === 256 ? 0 : size); // height
        dirView.setUint8(dirOffset + 2, 0); // color palette
        dirView.setUint8(dirOffset + 3, 0); // reserved
        dirView.setUint16(dirOffset + 4, 1, true); // color planes
        dirView.setUint16(dirOffset + 6, 32, true); // bits per pixel
        dirView.setUint32(dirOffset + 8, dataBytes.length, true); // byte size
        dirView.setUint32(dirOffset + 12, offset, true); // offset
        
        offset += dataBytes.length;
    }
    
    // Combine everything
    let finalBuffer = new Uint8Array(offset);
    finalBuffer.set(new Uint8Array(header), 0);
    finalBuffer.set(directoryBytes, 6);
    
    let currentDataOffset = 6 + directoryBytes.length;
    for (let i = 0; i < dataBytesArray.length; i++) {
        finalBuffer.set(dataBytesArray[i], currentDataOffset);
        currentDataOffset += dataBytesArray[i].length;
    }
    
    return new Blob([finalBuffer], { type: "image/vnd.microsoft.icon" });
  };

  const downloadIco = async () => {
    if (canvases.length === 0) return;
    try {
      const icoBlob = await buildICO();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(icoBlob);
      link.download = "favicon.ico";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch(err) {
      console.error(err);
      alert("Failed to build ICO");
    }
  };

  const downloadZip = async () => {
    if (canvases.length === 0) return;
    try {
      const zip = new JSZip();
      
      // 1. Add ICO
      const icoBlob = await buildICO();
      zip.file("favicon.ico", icoBlob);
      
      // 2. Add Standard sizes
      const standardBlobs = await Promise.all(canvases.map(c => getCanvasBlob(c.canvas)));
      standardBlobs.forEach((b, i) => {
         zip.file(`favicon-${canvases[i].size}x${canvases[i].size}.png`, b);
      });
      
      // 3. Add Apple touch / Android
      for (const extra of EXTRA_SIZES) {
         const extraCanvas = drawScaledImage(extra.w);
         const ablob = await getCanvasBlob(extraCanvas);
         zip.file(extra.name, ablob);
      }
      
      const zipBlob = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(zipBlob);
      link.download = "favicon-package.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch(err) {
      console.error(err);
      alert("Failed to create ZIP");
    }
  };

  const reset = () => {
    setFile(null);
    setImage(null);
    setDataUrls({});
    setCanvases([]);
  };

  // Safe accessor to prevent flickering undefined
  const faviconUrl16 = dataUrls[16] || "";
  const faviconUrl32 = dataUrls[32] || "";

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {!file ? (
        <FileUploader
          accept={{ "image/*": [".png", ".jpg", ".jpeg", ".svg"] }}
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
                <Settings2 className="w-5 h-5" /> Tweaks
              </h2>
              <button
                onClick={reset}
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                title="Start Over"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              
              <div className="space-y-3">
                <label className="text-sm font-medium text-[hsl(var(--foreground))]">Background Style</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="bgColor"
                      value="transparent"
                      checked={bgColor === "transparent"}
                      onChange={() => setBgColor("transparent")}
                      className="accent-[hsl(var(--primary))]"
                    />
                    Transparent
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="bgColor"
                      value="solid"
                      checked={bgColor === "solid"}
                      onChange={() => setBgColor("solid")}
                      className="accent-[hsl(var(--primary))]"
                    />
                    Solid Color
                  </label>
                </div>
                {bgColor === "solid" && (
                  <div className="flex items-center gap-2 pt-2 animate-in fade-in">
                    <input
                      type="color"
                      value={colorHex}
                      onChange={(e) => setColorHex(e.target.value)}
                      className="w-8 h-8 rounded border-0 p-0 cursor-pointer"
                    />
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">{colorHex}</span>
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-2">
                 <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                   <input
                     type="checkbox"
                     checked={paddingMode}
                     onChange={(e) => setPaddingMode(e.target.checked)}
                     className="accent-[hsl(var(--primary))] w-4 h-4 rounded"
                   />
                   Add Outer Padding
                 </label>
                 
                 {paddingMode && (
                   <div className="space-y-1 animate-in fade-in pt-1">
                     <div className="flex justify-between">
                       <span className="text-xs text-[hsl(var(--muted-foreground))]">Amount</span>
                       <span className="text-xs text-[hsl(var(--muted-foreground))]">{padding}%</span>
                     </div>
                     <input
                       type="range"
                       min="0"
                       max="40"
                       value={padding}
                       onChange={(e) => setPadding(Number(e.target.value))}
                       className="w-full accent-[hsl(var(--primary))]"
                     />
                   </div>
                 )}
              </div>

              <div className="space-y-1 pt-2">
                 <div className="flex justify-between">
                   <label className="text-sm font-medium text-[hsl(var(--foreground))]">Corner Radius</label>
                   <span className="text-xs text-[hsl(var(--muted-foreground))]">{borderRadius}%</span>
                 </div>
                 <input
                   type="range"
                   min="0"
                   max="50"
                   value={borderRadius}
                   onChange={(e) => setBorderRadius(Number(e.target.value))}
                   className="w-full accent-[hsl(var(--primary))]"
                 />
                 <p className="text-xs text-[hsl(var(--muted-foreground))]">Set to 50% for circular icons (if background is solid)</p>
              </div>
            </div>
            
            <div className="pt-4 border-t space-y-3">
               <button
                 onClick={downloadIco}
                 className="w-full px-6 py-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm"
               >
                 <Download className="w-5 h-5" /> Download .ico
               </button>
               <button
                 onClick={downloadZip}
                 className="w-full px-6 py-3 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] border border-[hsl(var(--border))] font-semibold rounded-lg hover:bg-[hsl(var(--secondary))]/70 transition-opacity flex items-center justify-center gap-2 shadow-sm"
               >
                 <Archive className="w-5 h-5" /> Download All (.zip)
               </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-8 flex flex-col space-y-8" ref={containerRef}>
            
            <div className="bg-[hsl(var(--card))] border rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gradient-to-b from-[#e5e7eb] to-[#f3f4f6] dark:from-[#1a1b1e] dark:to-[#25262b] p-3 flex items-center gap-2 border-b">
                   <div className="flex gap-1.5 px-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="bg-white dark:bg-[#35363c] border dark:border-[#42434a] rounded-t-lg ml-2 px-3 py-1.5 flex items-center gap-2 min-w-[180px] shadow-sm transform translate-y-[2px]">
                      {faviconUrl16 ? (
                         <img src={faviconUrl16} alt="fav" className="w-4 h-4 object-contain pixelated" style={{imageRendering: 'pixelated'}} />
                      ) : (
                         <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-sm"></div>
                      )}
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">My Website</span>
                   </div>
                </div>
                <div className="bg-white dark:bg-[#35363c] p-6 h-32 flex items-center justify-center">
                   <p className="text-sm text-[hsl(var(--muted-foreground))]">Browser Tab Preview</p>
                </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mb-4 border-b pb-2">Generated Favicon Sizes</h3>
              
              <div className="flex flex-wrap items-end justify-center sm:justify-start gap-8 px-4">
                 {SIZES.map((size) => (
                   <div key={size} className="flex flex-col items-center gap-3">
                     <div className="flex items-center justify-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_checkerboard.png')] shadow-sm border border-[hsl(var(--border))] rounded-md overflow-hidden">
                       {dataUrls[size] && (
                          <img 
                            src={dataUrls[size]} 
                            alt={`${size}x${size}`} 
                            style={{ width: size, height: size, imageRendering: size < 48 ? 'pixelated' : 'auto' }} 
                            className="bg-transparent"
                          />
                       )}
                     </div>
                     <span className="text-xs font-mono text-[hsl(var(--muted-foreground))]">{size}x{size}</span>
                   </div>
                 ))}
                 
                 <div className="flex flex-col items-center gap-3 ml-auto opacity-50 hidden sm:flex">
                     <div className="flex items-center justify-center p-4">
                         <ImageIcon className="w-8 h-8" />
                     </div>
                     <p className="text-xs text-balance text-center max-w-[150px]">
                       Download All (ZIP) includes High-Res 180x180 & 512x512 icons automatically.
                     </p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
