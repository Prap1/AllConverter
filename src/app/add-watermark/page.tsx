import { Metadata } from "next";
import AddWatermarkClient from "./AddWatermarkClient";
import { Copy, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";
import { RelatedTools } from "@/components/RelatedTools";
import { FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Add Watermark to Image – Free Online, No Upload Required | FileNexa",
  description:
    "Protect your images with custom text watermarks for free online. Add copyright notices, branding, or confidentiality marks. Browser-based — images never leave your device.",
};

const faqs = [
  {
    q: "Are my images uploaded to your servers?",
    a: "No. All watermarking happens entirely in your browser using the HTML5 Canvas API. We never see, store, or transmit your images. Your files stay on your device throughout the entire process.",
  },
  {
    q: "Can I choose where the watermark is placed?",
    a: "Currently, watermarks are automatically placed in the bottom-right corner, which is the most standard and visually appealing position for copyright and branding watermarks.",
  },
  {
    q: "What image formats are supported?",
    a: "You can watermark JPG, JPEG, PNG, and WebP images. The watermarked output is saved as a PNG file to ensure the text overlay is rendered with perfect quality.",
  },
  {
    q: "Can I watermark multiple images at once?",
    a: "Yes. You can upload multiple images and apply the same watermark text to each one. Each watermarked image is available for individual download.",
  },
  {
    q: "Will the watermark affect the original image quality?",
    a: "The original image quality is fully preserved. The watermark text is rendered on top of the image data without altering the underlying pixels — only the watermark layer is added.",
  },
  {
    q: "What is the best watermark text to use?",
    a: "For copyright protection, use your name or © YourName YEAR. For branding, use your website domain or company name. For document marking, use CONFIDENTIAL, DRAFT, or SAMPLE — whatever best communicates the status of the image.",
  },
];

export default function AddWatermarkPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <FAQSchema faqs={faqs} />
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Add Watermark to <span className="text-[hsl(var(--primary))]">Image</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Protect your images by stamping them with custom text.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <AddWatermarkClient />
      </div>

      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <Copy className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">About this tool</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          Upload an image, type in your desired text, and the tool will automatically stamp it into the bottom-right corner. It uses a high-contrast style combining a semi-transparent white fill with a dark outline, ensuring readability on both light and dark backgrounds.
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
            { step: "1", title: "Select your image", desc: "Upload the image you want to watermark." },
            { step: "2", title: "Enter watermark text", desc: "Type the text you want to appear as a watermark." },
            { step: "3", title: "Apply Watermark", desc: "Click the apply button to instantly generate your watermarked image." },
            { step: "4", title: "Download", desc: "Download your newly watermarked image securely." },
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
            "Protect original photography",
            "Brand images for social media",
            "Prevent unauthorized use of artwork",
            "Mark documents as confidential or draft",
            "Add copyright notices to portfolios",
            "Personalize images before sharing",
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
            { title: "High-contrast style", desc: "Our watermarks use a semi-transparent white fill with a dark outline to remain visible on both light and dark backgrounds." },
            { title: "Instant processing", desc: "The watermark is applied directly in your browser without uploading to any server." },
            { title: "No quality loss", desc: "Your original image quality is preserved during the process." },
            { title: "100% Secure", desc: "Since everything runs locally, your images stay completely private." },
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
        { href: "/watermark-pdf", title: "Watermark PDF", description: "Add diagonal text watermarks to all pages of a PDF." },
        { href: "/compress-image", title: "Compress Image", description: "Reduce image file sizes without losing quality." },
        { href: "/png-to-jpg", title: "PNG to JPG", description: "Convert PNG images to smaller JPG format." },
        { href: "/image-to-pdf", title: "Image to PDF", description: "Convert JPG/PNG images into a PDF document." },
      ]} />
    </div>
  );
}
