import { Metadata } from "next";
import PngToJfifClient from "./PngToJfifClient";
import { ImageIcon, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert PNG to JFIF | All-in-One Converter",
  description: "Instantly convert PNG files to JFIF format for free online.",
};

export default function PngToJfifPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          PNG to <span className="text-[hsl(var(--primary))]">JFIF</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert your PNG pictures to JFIF online for free.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <PngToJfifClient />
      </div>

      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About this tool</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          Convert your PNGs into the JFIF format rapidly and with high quality. Note that any transparent areas will automatically be filled with a solid white background in the resulting JFIF file. All conversion takes place securely in your browsers.
        </p>
      </div>
    </div>
  );
}
