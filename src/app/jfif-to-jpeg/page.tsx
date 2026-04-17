import { Metadata } from "next";
import JfifToJpegClient from "./JfifToJpegClient";
import { ImageIcon, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert JFIF to JPEG | All-in-One Converter",
  description: "Instantly convert JFIF files to standard JPEG format for free online.",
};

export default function JfifToJpegPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          JFIF to <span className="text-[hsl(var(--primary))]">JPEG</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert your JFIF pictures to standard JPEG online for free.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <JfifToJpegClient />
      </div>

      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About this tool</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          JFIF is practically identical to JPEG, but some applications or websites don't recognise the .jfif extension. Use this tool to convert it to a universally accepted .jpeg format. The conversion happens instantly in your browser!
        </p>
      </div>
    </div>
  );
}
