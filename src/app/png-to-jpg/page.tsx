import { Metadata } from "next";
import PngToJpgClient from "./PngToJpgClient";
import { ImageIcon, CheckCircle, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert PNG to JPG | All-in-One Converter",
  description:
    "Instantly convert PNG files to JPG format for free online. Make your images smaller and more compatible in seconds.",
};

export default function PngToJpgPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          PNG to <span className="text-[hsl(var(--primary))]">JPG</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert your PNG pictures to JPG online for free.
        </p>
      </div>

      {/* Tool */}
      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <PngToJpgClient />
      </div>

      {/* Explanation */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <ImageIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">
            What is PNG to JPG conversion?
          </h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          PNG (Portable Network Graphics) is a lossless image format that
          supports transparency. JPG (JPEG) is a compressed format optimised for
          photographs, producing much smaller file sizes with minimal visible
          quality loss. Converting PNG to JPG is useful when you need smaller
          files for the web, email attachments, or platforms that don't support
          PNG transparency.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          All conversion happens <strong className="text-[hsl(var(--foreground))]">in your browser</strong> — 
          no uploads, no waiting, no privacy concerns.
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
            "Reduce image file size for faster website loading",
            "Share images via email where PNG is too large",
            "Upload profile pictures on platforms requiring JPG",
            "Optimise images for social media posts",
            "Print photos — most printers prefer JPG format",
            "Convert screenshots before attaching to documents",
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
            { title: "Transparency becomes white", desc: "PNG transparent areas are filled with white when converting to JPG since JPG doesn't support transparency." },
            { title: "Smaller file sizes", desc: "JPG files are typically 5–10× smaller than equivalent PNGs, making them ideal for web use." },
            { title: "Adjustable quality", desc: "Our converter preserves high visual quality while still reducing file size significantly." },
            { title: "Batch ready", desc: "Convert multiple PNGs at once and download them all instantly." },
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
