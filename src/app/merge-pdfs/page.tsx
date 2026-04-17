import { Metadata } from "next";
import MergePdfsClient from "./MergePdfsClient";
import { FileText, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Merge PDFs | All-in-One Converter",
  description: "Combine multiple PDF documents into a single PDF file securely in your browser.",
};

export default function MergePdfsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Merge <span className="text-[hsl(var(--primary))]">PDFs</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Combine and merge multiple PDF documents into one.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <MergePdfsClient />
      </div>

      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About this tool</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          Select multiple PDF files from your device and click "Merge PDFs" to stitch them together into a single master document. They will be ordered in the sequence you select them. All processing uses advanced processing running directly inside your browser so it imposes no load on our servers and guarantees your privacy!
        </p>
      </div>
    </div>
  );
}
