import { Metadata } from "next";
import JpgToPngClient from "./JpgToPngClient";
import { ImageIcon, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert JPG to PNG | All-in-One Converter",
  description:
    "Instantly convert JPG files to PNG format for free online. Save images with a transparent background or higher quality.",
};

const faqs = [
  {
    q: "Why would I convert JPG to PNG?",
    a: "PNG is a lossless format — great for logos, icons, and designs where you need crisp edges, transparency support, or plan to do further editing without quality loss.",
  },
  {
    q: "Will the converted PNG support transparency?",
    a: "The PNG file format supports transparency, but converting from JPG won't add transparency — the original JPG areas will remain solid. Use a background remover tool after conversion to achieve transparency.",
  },
  {
    q: "Will the file size increase?",
    a: "Yes — PNG files are larger than JPG because they use lossless compression. This is normal and expected.",
  },
  {
    q: "Is there any quality improvement when converting JPG to PNG?",
    a: "The existing JPG compression artifacts cannot be removed, but no new quality loss occurs. Going forward, saving as PNG will preserve quality perfectly.",
  },
  {
    q: "Can I convert multiple JPGs at once?",
    a: "Yes, select multiple JPG files and they will all be converted and available for download.",
  },
  {
    q: "Are my files sent to a server?",
    a: "No. Everything happens in your browser. Your images are never uploaded anywhere.",
  },
];

export default function JpgToPngPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          JPG to <span className="text-[hsl(var(--primary))]">PNG</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert your JPG pictures to PNG online for free.
        </p>
      </div>

      {/* Tool */}
      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <JpgToPngClient />
      </div>

      {/* How it Works */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <ListOrdered className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">How it Works</h2>
        </div>
        <ol className="space-y-4">
          {[
            { step: "1", title: "Upload your JPG", desc: "Click or drag & drop your JPG/JPEG image(s) into the upload area." },
            { step: "2", title: "Instant conversion", desc: "The image is decoded and re-encoded as a lossless PNG file — all within your browser." },
            { step: "3", title: "Preview the PNG", desc: "See a live preview of the converted image before saving." },
            { step: "4", title: "Download PNG", desc: "Click Download and your PNG file is saved to your device immediately." },
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
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">What is JPG to PNG conversion?</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          JPG is a compressed format optimised for photographs. PNG is a lossless format that supports transparency and retains every pixel exactly as saved — perfect for logos, icons, and designs where crisp edges matter. Converting JPG to PNG gives you a higher-fidelity image with no further compression artifacts.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          All conversion happens{" "}
          <strong className="text-[hsl(var(--foreground))]">directly in your browser</strong> — your images never leave your device.
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
            "Convert a JPG logo to PNG for transparent background editing",
            "Improve quality before editing in design tools like Figma",
            "Use as a web graphic where transparency is required",
            "Preserve quality when re-editing and re-saving an image",
            "Prepare images for apps that require PNG format",
            "Convert product photos for e-commerce platforms",
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
            { title: "Lossless output", desc: "PNG uses lossless compression — once converted, no further quality is lost on re-save." },
            { title: "Larger file size", desc: "PNG files are larger than JPGs. Use PNG when quality and transparency matter more than size." },
            { title: "Great for editing", desc: "Always work in PNG when doing multi-step editing to avoid cumulative JPG compression loss." },
            { title: "Supports transparency", desc: "Once in PNG format, you can use a background-remover to make parts transparent." },
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
