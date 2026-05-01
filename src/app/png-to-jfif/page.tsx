import { Metadata } from "next";
import PngToJfifClient from "./PngToJfifClient";
import { ImageIcon, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";
import { RelatedTools } from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "PNG to JFIF Converter – Free Online, No Upload Required | FileNexa",
  description:
    "Convert PNG to JFIF format free online. Transparent areas are filled with white automatically. Browser-based and private — your files never leave your device.",
};

const faqs = [
  {
    q: "What happens to transparent areas in my PNG when converting to JFIF?",
    a: "JFIF (like all JPEG formats) does not support transparency. Any transparent or semi-transparent areas in your PNG will be automatically filled with a solid white background during conversion. If you need a different background colour, consider using an image editor to set the background before converting.",
  },
  {
    q: "Will the JFIF file be smaller than my PNG?",
    a: "In most cases, yes — significantly smaller. JFIF uses JPEG's lossy compression, which produces much smaller files than PNG's lossless compression. For a typical photo or graphic, the JFIF version may be 3–10× smaller than the original PNG.",
  },
  {
    q: "Is there a quality loss when converting PNG to JFIF?",
    a: "There is some quality reduction because JFIF uses lossy JPEG compression, whereas PNG is lossless. However, our converter uses a high quality setting that minimises visible artifacts. For photographs, the difference is typically imperceptible at normal viewing distances.",
  },
  {
    q: "Why would I ever want a .jfif file instead of a .jpg?",
    a: "Some applications — particularly on Windows or in embedded systems — specifically look for the .jfif extension. If you're encountering an error that your image must be in JFIF format, this converter fixes that instantly without any other software.",
  },
  {
    q: "Are my files uploaded to a server?",
    a: "No. All conversion runs locally inside your browser using the HTML5 Canvas API. Your images are processed entirely on your device and never sent anywhere.",
  },
  {
    q: "Can I convert multiple PNGs at once?",
    a: "Yes. Select multiple PNG files and they will each be converted and made available for download individually. There are no limits on the number of conversions.",
  },
];

export default function PngToJfifPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          PNG to <span className="text-[hsl(var(--primary))]">JFIF</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert PNG images to JFIF format instantly — free, private, and completely browser-based.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <PngToJfifClient />
      </div>

      {/* About */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About PNG to JFIF Conversion</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          PNG is a lossless image format that supports transparency and is widely used for logos, icons, and graphics. JFIF is the formal name for the JPEG file interchange format — essentially a JPEG image with the .jfif extension. Converting from PNG to JFIF is useful when a system, application, or upload form specifically requires the .jfif extension.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          The key difference to understand is that JFIF uses <strong className="text-[hsl(var(--foreground))]">lossy JPEG compression</strong>, while PNG is lossless. This means the JFIF file will be significantly smaller than the PNG, but some very fine image details may be slightly affected. For photographic content and general imagery this is rarely noticeable; for graphics with sharp text or hard edges at very small sizes it may be more visible.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          Importantly, any transparent areas in your PNG will be filled with a white background in the resulting JFIF file, since JPEG does not support the alpha channel. The entire conversion runs <strong className="text-[hsl(var(--foreground))]">locally in your browser</strong> — nothing is uploaded.
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
            { step: "1", title: "Upload your PNG file", desc: "Select or drag & drop your .png file(s). Multiple files are supported." },
            { step: "2", title: "Transparency is handled", desc: "Any transparent areas are filled with a solid white background, since JFIF does not support the alpha channel." },
            { step: "3", title: "Encoded as JFIF/JPEG", desc: "The image is encoded using JPEG compression and saved with the .jfif extension." },
            { step: "4", title: "Download your JFIF", desc: "Save the converted file to your device. The result is a fully compatible .jfif image." },
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
            "Uploading to platforms that specifically require JFIF format",
            "Reducing file sizes of large, high-resolution PNGs",
            "Removing alpha transparency for print or display",
            "Preparing files for legacy or embedded imaging applications",
            "Batch standardizing a folder of mixed image formats",
            "Resolving upload errors caused by extension requirements",
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
            { title: "Transparency becomes white", desc: "Transparent sections of your PNG will become a solid white background. Set your background colour before converting if you need a different colour." },
            { title: "Smaller file sizes", desc: "JFIF files are typically 3–10× smaller than equivalent PNGs, which can save significant storage and bandwidth." },
            { title: "Browser-based & private", desc: "We convert directly in your browser using the Canvas API. No file data is ever sent to a server." },
            { title: "Good for photos", desc: "For photographic PNG images, the JFIF output quality is very high and the size reduction is dramatic." },
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
        { href: "/jfif-to-png", title: "JFIF to PNG", description: "Convert JFIF files back to PNG format." },
        { href: "/png-to-jpg", title: "PNG to JPG", description: "Convert PNG files to the smaller JPG format." },
        { href: "/jpeg-to-jfif", title: "JPEG to JFIF", description: "Convert JPEG files to JFIF format." },
        { href: "/compress-image", title: "Compress Image", description: "Reduce image file sizes with quality control." },
      ]} />
    </div>
  );
}
