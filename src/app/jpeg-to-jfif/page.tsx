import { Metadata } from "next";
import JpegToJfifClient from "./JpegToJfifClient";
import { ImageIcon, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";
import { RelatedTools } from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "JPEG to JFIF Converter – Free Online, Browser-Based | FileNexa",
  description:
    "Convert JPEG to JFIF format free online. Instantly change .jpg or .jpeg files to .jfif for apps or platforms that require this specific extension. No uploads, fully private.",
};

const faqs = [
  {
    q: "Why would I need to convert JPEG to JFIF?",
    a: "Some legacy software, embedded systems, or specialized applications specifically require files with the .jfif extension. While JFIF and JPEG are essentially the same format, certain programs validate file extensions rather than reading the actual file data, so converting ensures compatibility.",
  },
  {
    q: "Is there any difference in image quality?",
    a: "No — there is zero quality difference. JFIF is not a different compression algorithm; it is the same JPEG compression with a different file extension. The conversion is effectively just a rename of the file container.",
  },
  {
    q: "Will the resulting .jfif file open in standard image viewers?",
    a: "Yes. Modern image viewers on Windows, Mac, and Linux all support .jfif files. Windows Photos, macOS Preview, and most browsers handle them natively. Older software may have issues, but any application that opens .jpg will also open .jfif.",
  },
  {
    q: "Are my images uploaded to any server?",
    a: "Absolutely not. All processing happens locally in your browser. We use the HTML5 Canvas API to handle the conversion on your device. No image data ever leaves your computer.",
  },
  {
    q: "How is JFIF different from JPEG technically?",
    a: "JFIF (JPEG File Interchange Format) is a specification that defines how JPEG compressed data should be stored in a file. It specifies the file header, colour space (YCbCr), and how aspect ratio information is embedded. Most JPEG files you encounter already comply with the JFIF specification — the only practical difference is the file extension.",
  },
  {
    q: "Can I convert multiple JPEG files to JFIF at once?",
    a: "Yes. You can select multiple .jpg or .jpeg files and they will all be converted and made individually available for download. There is no limit on the number of files.",
  },
];

export default function JpegToJfifPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          JPEG to <span className="text-[hsl(var(--primary))]">JFIF</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert standard JPEG images to JFIF format instantly — free and completely browser-based.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <JpegToJfifClient />
      </div>

      {/* About */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About JPEG to JFIF Conversion</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          JFIF (JPEG File Interchange Format) is the formal specification that defines how JPEG image data is stored in a file. Despite sounding like a distinct format, it is technically a JPEG file — the same compression algorithm, the same image data, just with a .jfif extension instead of .jpg or .jpeg.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          The need to convert from JPEG to JFIF typically arises when working with legacy or specialized software that explicitly checks for the .jfif extension. Certain embedded imaging systems, older document management platforms, and niche applications may require this specific file extension to function correctly.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          This tool handles the conversion <strong className="text-[hsl(var(--foreground))]">entirely within your browser</strong>. No files are uploaded. Your images never leave your device. The processing uses the browser&apos;s built-in Canvas API, making it fast, secure, and completely private.
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
            { step: "1", title: "Select your JPEG file", desc: "Upload one or more .jpg or .jpeg files by clicking the upload area or dragging & dropping them in." },
            { step: "2", title: "Browser processes the image", desc: "The browser decodes and re-encodes the JPEG image data with the JFIF-compatible file header, all within your device's memory." },
            { step: "3", title: "Download the .jfif file", desc: "Click download to save your converted .jfif file. The image is identical to the original — just with the new extension." },
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
            "Meeting specific legacy software requirements",
            "Testing image compatibility across different platforms",
            "Preparing files for older document management systems",
            "Resolving upload errors on systems requiring .jfif extension",
            "Ensuring precise metadata format compliance",
            "Batch standardizing image extensions in a media workflow",
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
            { title: "No quality loss", desc: "Since JFIF uses identical compression to JPEG, converting between them is lossless — no image data is changed." },
            { title: "Simple rename works too", desc: "In many cases you can just rename a .jpg file to .jfif in your file manager. This tool is useful when you need proper file header compliance." },
            { title: "Fully private", desc: "All conversions happen on your local machine using browser APIs. No data leaves your device." },
            { title: "Fast & unlimited", desc: "Convert as many files as you need with no daily limits or rate restrictions." },
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
        { href: "/jfif-to-jpeg", title: "JFIF to JPEG", description: "Convert JFIF files back to standard JPEG format." },
        { href: "/jfif-to-png", title: "JFIF to PNG", description: "Convert JFIF files to lossless PNG format." },
        { href: "/png-to-jfif", title: "PNG to JFIF", description: "Convert PNG images to JFIF format." },
        { href: "/jpg-to-png", title: "JPG to PNG", description: "Convert JPG images to lossless PNG." },
      ]} />
    </div>
  );
}
