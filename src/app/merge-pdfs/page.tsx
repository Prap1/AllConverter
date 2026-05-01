import { Metadata } from "next";
import MergePdfsClient from "./MergePdfsClient";
import { FileText, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";
import { RelatedTools } from "@/components/RelatedTools";
import { FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Merge PDFs Online – Free, Private, No Upload Required | FileNexa",
  description:
    "Combine multiple PDF files into one document for free. All merging runs in your browser — your PDFs never leave your device. No account or software needed.",
};

const faqs = [
  {
    q: "Is there a limit to how many PDFs I can merge?",
    a: "There is no artificial limit. You can merge as many PDFs as your device's available memory allows. Most modern browsers can comfortably handle dozens of PDFs totalling hundreds of megabytes.",
  },
  {
    q: "Will the formatting and quality of my PDFs be preserved?",
    a: "Yes. Our tool combines PDFs at the file level using pdf-lib running in WebAssembly. All pages are merged exactly as they appear in the original files — fonts, images, layouts, and annotations are all preserved perfectly.",
  },
  {
    q: "Are my confidential documents secure?",
    a: "Absolutely. The entire merge process happens offline within your browser using WebAssembly technology. No files are ever uploaded to our servers or any external service. Your documents stay on your device at all times.",
  },
  {
    q: "Does the order of files matter when merging?",
    a: "Yes. The files are merged in the exact order you select them. Select your PDFs in the sequence you want them to appear in the final merged document.",
  },
  {
    q: "Can I merge password-protected PDFs?",
    a: "No — password-protected PDFs cannot be merged directly. You will need to remove the password protection first using your PDF viewer or an appropriate tool, and then use this merger.",
  },
  {
    q: "What browser works best for merging large PDFs?",
    a: "Chrome and Edge generally handle large PDFs best due to their V8 JavaScript engine and WebAssembly optimisations. Firefox also works well. If you're merging very large files (100 MB+), make sure your browser has sufficient memory available.",
  },
];

export default function MergePdfsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <FAQSchema faqs={faqs} />
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

      {/* How it Works */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <ListOrdered className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">How it Works</h2>
        </div>
        <ol className="space-y-4">
          {[
            { step: "1", title: "Select PDFs", desc: "Choose or drag & drop multiple PDF files you want to combine." },
            { step: "2", title: "Order Files", desc: "The files will be merged in the exact order you select them." },
            { step: "3", title: "Merge", desc: "Click the Merge button to stitch them together instantly." },
            { step: "4", title: "Download", desc: "Download your newly merged, combined PDF document." },
          ].map((s) => (
            <li key={s.step} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] font-bold text-sm flex items-center justify-center">
                {s.step}
              </span>
              <div>
                <p className="font-semibold text-[hsl(var(--foreground))] text-sm">{s.title}</p>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Common Use Cases */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">Common Use Cases</h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Combining chapters of an eBook or report",
            "Merging invoices or receipts for expenses",
            "Creating comprehensive portfolios",
            "Combining scanned documents into one file",
            "Compiling legal case files or records",
            "Preparing unified tax documents",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tips & Value-Added Info */}
      <div className="bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/20 rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">Tips & Value-Added Info</h2>
        </div>
        <ul className="space-y-2">
          {[
            { title: "Browser-powered", desc: "We use WebAssembly to merge PDFs directly in your browser without uploading them." },
            { title: "Order matters", desc: "Ensure you select your PDFs in the exact order you want them to appear in the merged file." },
            { title: "No size limits", desc: "You can merge as many documents as your device's memory allows." },
            { title: "Maintained quality", desc: "The original quality of your PDFs is fully preserved during the merge." },
          ].map((tip) => (
            <li key={tip.title} className="text-sm text-[hsl(var(--muted-foreground))]">
              <span className="font-semibold text-[hsl(var(--foreground))]">{tip.title}:</span>{" "}{tip.desc}
            </li>
          ))}
        </ul>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">Frequently Asked Questions</h2>
        </div>
        <dl className="space-y-5 divide-y divide-[hsl(var(--border))]">
          {faqs.map((faq) => (
            <div key={faq.q} className="pt-4 first:pt-0">
              <dt className="font-semibold text-[hsl(var(--foreground))] text-sm mb-1">{faq.q}</dt>
              <dd className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Related Tools */}
      <RelatedTools tools={[
        { href: "/watermark-pdf", title: "Watermark PDF", description: "Stamp diagonal text watermarks across all PDF pages." },
        { href: "/image-to-pdf", title: "Image to PDF", description: "Convert JPG/PNG images into a PDF document." },
        { href: "/compress-image", title: "Compress Image", description: "Reduce image file sizes without losing quality." },
        { href: "/add-watermark", title: "Watermark Image", description: "Add custom text watermarks to images." },
      ]} />
    </div>
  );
}
