import { Metadata } from "next";
import PngToJpgClient from "./PngToJpgClient";
import { ImageIcon, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert PNG to JPG | All-in-One Converter",
  description:
    "Instantly convert PNG files to JPG format for free online. Make your images smaller and more compatible in seconds.",
};

const faqs = [
  {
    q: "What happens to transparent areas when converting PNG to JPG?",
    a: "JPG does not support transparency. Transparent areas in your PNG will be filled with a white background automatically.",
  },
  {
    q: "Will the image quality drop after conversion?",
    a: "JPG uses lossy compression, so there is a minor quality trade-off. Our converter uses a high quality setting to minimise any visible loss.",
  },
  {
    q: "Can I convert multiple PNG files at once?",
    a: "Yes, you can select multiple PNG files and convert them all in one go.",
  },
  {
    q: "Are my files uploaded to your servers?",
    a: "No. All conversion happens directly in your browser. Your files never leave your device.",
  },
  {
    q: "How much smaller will the JPG be compared to the PNG?",
    a: "Typically 5–10× smaller, depending on the image content. Photos compress especially well in JPG.",
  },
  {
    q: "Is this tool free?",
    a: "Yes — completely free, no sign-up required, no watermarks added.",
  },
];

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

      {/* How it Works */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <ListOrdered className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">How it Works</h2>
        </div>
        <ol className="space-y-4">
          {[
            { step: "1", title: "Upload your PNG", desc: "Drag & drop or click to select one or more PNG files from your device." },
            { step: "2", title: "Automatic conversion", desc: "The tool reads your PNG and re-encodes it as a high-quality JPG, entirely in your browser." },
            { step: "3", title: "Preview the result", desc: "Check the converted image preview before downloading." },
            { step: "4", title: "Download JPG", desc: "Click Download to save the JPG file to your device instantly." },
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

      {/* Explanation */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">What is PNG to JPG conversion?</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          PNG is a lossless image format that supports transparency. JPG is a compressed format optimised for photographs, producing much smaller file sizes with minimal visible quality loss. Converting PNG to JPG is useful when you need smaller files for the web, email attachments, or platforms that don't support PNG transparency.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          All conversion happens <strong className="text-[hsl(var(--foreground))]">in your browser</strong> — no uploads, no waiting, no privacy concerns.
        </p>
      </div>

      {/* Use Cases */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">Common Use Cases</h2>
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
            <li key={item} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Value-added Info */}
      <div className="bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/20 rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">Tips & Value-Added Info</h2>
        </div>
        <ul className="space-y-2">
          {[
            { title: "Transparency becomes white", desc: "PNG transparent areas are filled with white when converting to JPG since JPG doesn't support transparency." },
            { title: "Smaller file sizes", desc: "JPG files are typically 5–10× smaller than equivalent PNGs, making them ideal for web use." },
            { title: "Adjustable quality", desc: "Our converter preserves high visual quality while still reducing file size significantly." },
            { title: "Batch ready", desc: "Convert multiple PNGs at once and download them all instantly." },
          ].map((tip) => (
            <li key={tip.title} className="text-sm text-[hsl(var(--muted-foreground))]">
              <span className="font-semibold text-[hsl(var(--foreground))]">{tip.title}:</span>{" "}{tip.desc}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
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
    </div>
  );
}
