import { Metadata } from "next";
import CompressImageClient from "./CompressImageClient";
import { ImageIcon, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Compress Image | All-in-One Converter",
  description: "Reduce image file sizes for free online. Make your JPG or PNG files smaller without losing significant quality.",
};

export default function CompressImagePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Compress <span className="text-[hsl(var(--primary))]">Image</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Reduce the file size of your images instantly in the browser.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <CompressImageClient />
      </div>

      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About this tool</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          Easily compress JPG, PNG, and WebP images by adjusting the compression slider. Lower the quality slightly to drastically decrease the storage size required for the image, making it perfect for efficient web distribution and saving bandwidth!
        </p>
      </div>
    </div>
  );
}
