import { Metadata } from "next";
import CompressImageClient from "./CompressImageClient";
import { ImageIcon, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";
import { RelatedTools } from "@/components/RelatedTools";
import { FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Compress Image Online – Reduce JPG, PNG & WebP File Size Free | FileNexa",
  description:
    "Compress JPG, PNG, and WebP images for free online. Reduce file sizes by up to 90% with adjustable quality. Browser-based — your images never leave your device.",
};

const faqs = [
  {
    q: "How much can I compress my image?",
    a: "The reduction depends on the image content and the quality setting you choose. For photographs, you can typically achieve 50–80% size reduction at a quality setting of 75–85% with no visible quality loss. Images with lots of detail or fine patterns compress less efficiently.",
  },
  {
    q: "Does compression reduce the image dimensions (width and height)?",
    a: "No. Our image compressor only reduces the file size by optimizing the JPEG compression data. The actual pixel dimensions (width × height) of your image remain exactly the same.",
  },
  {
    q: "What is the best quality setting for web images?",
    a: "For most web use cases, a quality setting between 75% and 85% delivers the ideal balance of visual quality and file size. At 75%, images typically look indistinguishable from the original at normal screen sizes while being 4–6× smaller.",
  },
  {
    q: "Which image formats does this tool support?",
    a: "The compressor supports JPG/JPEG, PNG, and WebP formats. For PNG images, the output will be a high-quality JPEG file, which is typically much smaller than the original PNG.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "Never. All compression happens locally in your browser using the HTML5 Canvas API. Your images are never uploaded, stored, or processed by any external server, making it safe for personal and sensitive images.",
  },
  {
    q: "Can I compress multiple images at once?",
    a: "Yes. You can process multiple images by uploading them one at a time. Each compressed image is available for individual download immediately after processing.",
  },
];

export default function CompressImagePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <FAQSchema faqs={faqs} />
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Compress <span className="text-[hsl(var(--primary))]">Image</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Reduce JPG, PNG, and WebP file sizes instantly — no upload required, completely free.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <CompressImageClient />
      </div>

      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About Image Compression</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          Image compression reduces the file size of an image by encoding it more efficiently. Our tool uses <strong className="text-[hsl(var(--foreground))]">lossy JPEG compression</strong> — the same algorithm that powers billions of images on the web — with a user-controlled quality slider. By lowering the quality slightly (typically to 75–85%), you can achieve dramatic file size reductions that are imperceptible to the human eye.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          Images account for 50–80% of total page weight on most websites. Compressing images is the single most impactful optimization you can make for page load speed, which directly affects Google rankings through Core Web Vitals. Even for non-web use, smaller images mean faster email sending, less storage consumed, and quicker sharing.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          All compression happens <strong className="text-[hsl(var(--foreground))]">directly in your browser</strong> using the HTML5 Canvas API. Your images are never uploaded to any server, making this tool completely safe for private and sensitive photos.
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
            { step: "1", title: "Upload Image", desc: "Select a JPG, PNG, or WebP image you want to compress." },
            { step: "2", title: "Adjust Quality", desc: "Use the slider to set your desired compression level (lower quality means smaller file size)." },
            { step: "3", title: "Compress", desc: "Click compress to process the image and view the new file size." },
            { step: "4", title: "Download", desc: "Download the highly optimized image instantly." },
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
            "Optimize images for faster website loading",
            "Reduce file sizes for email attachments",
            "Save storage space on your device",
            "Meet file upload size limits",
            "Prepare photos for social media sharing",
            "Compress large camera shots",
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
            { title: "Find the sweet spot", desc: "A quality setting between 60% and 80% usually offers the best balance of visual quality and small file size." },
            { title: "Browser-based", desc: "Compression happens using your device's resources, ensuring your photos never leave your device." },
            { title: "Format conversion", desc: "You can compress PNGs to JPEGs or WebPs automatically if needed by using our other format converters first." },
            { title: "Preview sizes", desc: "Watch the file size drop in real-time as you adjust the quality slider." },
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
        { href: "/png-to-jpg", title: "PNG to JPG", description: "Convert lossless PNG to smaller JPG format." },
        { href: "/jpg-to-png", title: "JPG to PNG", description: "Convert JPG to lossless PNG for editing." },
        { href: "/image-to-pdf", title: "Image to PDF", description: "Bundle multiple images into a single PDF." },
        { href: "/add-watermark", title: "Watermark Image", description: "Protect your images with a custom text watermark." },
      ]} />
    </div>
  );
}

