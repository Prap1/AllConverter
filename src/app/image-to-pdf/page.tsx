import { Metadata } from "next";
import ImageToPdfClient from "./ImageToPdfClient";
import { FileImage, CheckCircle, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert Image to PDF | All-in-One Converter",
  description:
    "Easily convert JPG, PNG images to PDF for free online. Combine multiple images securely within your browser.",
};

export default function ImageToPdfPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Image to <span className="text-[hsl(var(--primary))]">PDF</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert your JPG, PNG images to PDF online for free.
        </p>
      </div>

      {/* Tool */}
      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <ImageToPdfClient />
      </div>

      {/* Explanation */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <FileImage className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">
            What is Image to PDF?
          </h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          Image to PDF conversion lets you bundle one or more raster images
          (JPG, JPEG, PNG, WebP, etc.) into a single, shareable PDF document.
          PDFs are universally supported, maintain their layout across all
          devices and operating systems, and are the preferred format for
          sending documents professionally.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          AllConverter does this entirely <strong className="text-[hsl(var(--foreground))]">inside your browser</strong> — 
          no file is ever uploaded to a server, so your images stay 100% private.
        </p>
      </div>

      {/* Use Cases */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">
            Common Use Cases
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Scan receipts or bills and save as PDF",
            "Compile multiple photos into a single report",
            "Submit scanned ID or documents as PDF",
            "Create a PDF portfolio from design screenshots",
            "Convert WhatsApp images to a PDF for record keeping",
            "Merge product photos into a single catalogue PDF",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]"
            >
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Value-added Info */}
      <div className="bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/20 rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">
            Tips & Value-Added Info
          </h2>
        </div>
        <ul className="space-y-2">
          {[
            { title: "Multiple images", desc: "Select multiple images at once — they'll be combined into one PDF in the order you add them." },
            { title: "No quality loss", desc: "Your images are embedded at their original resolution inside the PDF." },
            { title: "No file size limits", desc: "Unlike most online tools, AllConverter imposes no artificial file size cap." },
            { title: "Completely private", desc: "Everything runs locally — no data ever leaves your device." },
          ].map((tip) => (
            <li key={tip.title} className="text-sm text-[hsl(var(--muted-foreground))]">
              <span className="font-semibold text-[hsl(var(--foreground))]">{tip.title}:</span>{" "}
              {tip.desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
