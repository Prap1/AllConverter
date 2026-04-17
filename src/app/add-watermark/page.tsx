import { Metadata } from "next";
import AddWatermarkClient from "./AddWatermarkClient";
import { Copy, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Add Watermark to Image | All-in-One Converter",
  description: "Securely add text watermarks to your pictures.",
};

export default function AddWatermarkPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Add Watermark to <span className="text-[hsl(var(--primary))]">Image</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Protect your images by stamping them with custom text.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <AddWatermarkClient />
      </div>

      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <Copy className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About this tool</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          Upload an image, type in your desired text, and the tool will automatically stamp it into the bottom-right corner. It uses a high-contrast style combining a semi-transparent white fill with a dark outline, ensuring readability on both light and dark backgrounds.
        </p>
      </div>
    </div>
  );
}
