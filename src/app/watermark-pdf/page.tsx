import { Metadata } from "next";
import WatermarkPdfClient from "./WatermarkPdfClient";
import { FileText, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Add Watermark to PDF | All-in-One Converter",
  description: "Securely embed diagonal text watermarks onto all pages of your PDF document.",
};

export default function WatermarkPdfPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Watermark <span className="text-[hsl(var(--primary))]">PDF</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Stamp text across your PDF pages quickly and privately.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <WatermarkPdfClient />
      </div>

      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About this tool</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          Upload a PDF file and type your desired text (like "CONFIDENTIAL" or "DRAFT"). This tool will permanently embed that text diagonally across the center of every single page. Since we process the file 100% locally using javascript, it exerts no load on the server and is extremely secure!
        </p>
      </div>
    </div>
  );
}
