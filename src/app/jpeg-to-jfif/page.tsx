import { Metadata } from "next";
import JpegToJfifClient from "./JpegToJfifClient";
import { ImageIcon, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert JPEG to JFIF | All-in-One Converter",
  description: "Instantly convert JPEG files to JFIF format for free online.",
};

export default function JpegToJfifPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          JPEG to <span className="text-[hsl(var(--primary))]">JFIF</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert your standard JPEG pictures to JFIF online for free.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <JpegToJfifClient />
      </div>

      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About this tool</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          If an application requires the specific .jfif extension instead of standard .jpeg or .jpg, use this tool. It runs entirely locally in your browser securely and without losing image data.
        </p>
      </div>
    </div>
  );
}
