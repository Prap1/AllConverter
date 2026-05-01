import { Metadata } from "next";
import JfifToPngClient from "./JfifToPngClient";
import { ImageIcon, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";
import { RelatedTools } from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "JFIF to PNG Converter – Free, Private, No Upload | FileNexa",
  description:
    "Convert JFIF files to lossless PNG format free online. All processing runs in your browser — your images never leave your device. Perfect for editing and design work.",
};

const faqs = [
  {
    q: "Why would I convert JFIF to PNG instead of JPEG?",
    a: "PNG is a lossless format, making it ideal if you plan to edit the image further. Once you convert to PNG and continue editing, your image quality is preserved with no additional degradation on subsequent saves — unlike JPEG which loses quality every time it is saved.",
  },
  {
    q: "Will converting JFIF to PNG improve the image quality?",
    a: "No — converting from a lossy format (JFIF/JPEG) to a lossless format (PNG) cannot restore data that was already lost during the original JPEG compression. However, it prevents further quality loss during future edits and saves.",
  },
  {
    q: "Will the PNG file be larger than the JFIF file?",
    a: "Yes — PNG files are significantly larger than their JFIF/JPEG counterparts because PNG uses lossless compression that preserves all pixel data. For a typical photo, the PNG version may be 3–5× the size of the JFIF file.",
  },
  {
    q: "Does PNG support transparency? Will my converted image have transparency?",
    a: "PNG supports transparency, but converting from JFIF does not add transparency — JFIF does not have an alpha channel, so the resulting PNG will be fully opaque. To add transparency, use a background remover tool after converting.",
  },
  {
    q: "Are my files uploaded anywhere?",
    a: "Never. All conversion runs locally inside your browser using the HTML5 Canvas API. Your JFIF files are never uploaded to any server, making this tool completely private and secure for sensitive images.",
  },
  {
    q: "Is there a file size or quantity limit?",
    a: "There are no artificial limits. You can convert multiple JFIF files at once, and the only constraint is your browser's available memory for very large images.",
  },
];

export default function JfifToPngPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          JFIF to <span className="text-[hsl(var(--primary))]">PNG</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert JFIF files to high-quality, lossless PNG format — free and completely private.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <JfifToPngClient />
      </div>

      {/* About */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About JFIF to PNG Conversion</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          JFIF is a less common file extension for standard JPEG images — most commonly produced when saving images in Microsoft Edge on Windows 10 or 11. While JFIF is technically a JPEG, some applications only accept .png files, making conversion necessary.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          Converting to PNG gives you a universally compatible, lossless image file. This is particularly useful for designers and developers who need to use the image in a tool that requires PNG format, or who plan to do further editing. Because PNG uses lossless compression, all pixel data is preserved exactly, preventing any further quality degradation during future edits.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          All conversion is performed <strong className="text-[hsl(var(--foreground))]">directly in your browser</strong> — no files are uploaded, no account required, and no data ever leaves your device.
        </p>
      </div>

      {/* How it Works */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <ListOrdered className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">How It Works</h2>
        </div>
        <ol className="space-y-4">
          {[
            { step: "1", title: "Upload your JFIF file", desc: "Select or drag & drop your .jfif file(s) into the upload area. Multiple files are supported." },
            { step: "2", title: "Browser decodes the image", desc: "Your browser reads the JFIF file and decodes the JPEG image data into raw pixel information using the HTML5 Canvas API." },
            { step: "3", title: "Re-encoded as PNG", desc: "The raw pixel data is re-encoded using PNG's lossless compression algorithm, producing a standard .png file." },
            { step: "4", title: "Download your PNG", desc: "Click the Download button to save the converted PNG file to your device. No sign-in required." },
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
            "Preparing images for lossless editing in Photoshop or GIMP",
            "Converting Windows-downloaded images to standard PNG",
            "Uploading to websites and tools that only accept PNG",
            "Creating web assets that require PNG format",
            "Preserving image quality before multiple rounds of editing",
            "Ensuring compatibility with design tools like Figma and Canva",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tips */}
      <div className="bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/20 rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">Tips & Value-Added Info</h2>
        </div>
        <ul className="space-y-2">
          {[
            { title: "Lossless future editing", desc: "PNG preserves every pixel exactly. Once you convert, subsequent saves won't degrade the image." },
            { title: "Expect larger files", desc: "PNG files are larger than JFIF — this is normal and expected. PNG trades file size for perfect quality retention." },
            { title: "Wide compatibility", desc: "PNG is universally recognized by all browsers, operating systems, design tools, and creative software." },
            { title: "Browser-based & private", desc: "Your images are processed securely within your own device. No data ever leaves your browser." },
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

      {/* Related Tools */}
      <RelatedTools tools={[
        { href: "/jfif-to-jpeg", title: "JFIF to JPEG", description: "Convert JFIF files to universally accepted JPEG format." },
        { href: "/jpg-to-png", title: "JPG to PNG", description: "Convert JPG images to lossless PNG format." },
        { href: "/png-to-jpg", title: "PNG to JPG", description: "Convert PNG files to smaller JPG format." },
        { href: "/compress-image", title: "Compress Image", description: "Reduce large PNG/JPG file sizes without quality loss." },
      ]} />
    </div>
  );
}
