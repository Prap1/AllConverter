import { Metadata } from "next";
import ImageToPdfClient from "./ImageToPdfClient";

export const metadata: Metadata = {
  title: "Convert Image to PDF | All-in-One Converter",
  description: "Easily convert JPG, PNG images to PDF for free online. Combine multiple images securely within your browser.",
};

export default function ImageToPdfPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Image to <span className="text-[hsl(var(--primary))]">PDF</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert your JPG, PNG images to PDF online for free.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <ImageToPdfClient />
      </div>
    </div>
  );
}
