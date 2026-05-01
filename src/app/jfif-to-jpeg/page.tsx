import { Metadata } from "next";
import JfifToJpegClient from "./JfifToJpegClient";
import { ImageIcon, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";
import { RelatedTools } from "@/components/RelatedTools";
import { FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "JFIF to JPEG Converter – Free Online, No Upload Required | FileNexa",
  description:
    "Convert JFIF to JPEG instantly, free, and without uploading your files. Fix compatibility errors in seconds — works on Windows, Mac, and mobile browsers.",
};

const faqs = [
  {
    q: "What is the difference between JFIF and JPEG?",
    a: "Virtually nothing — at the image data level, they are identical. JFIF (JPEG File Interchange Format) is simply a JPEG file with a different file extension. The compressed image data inside is encoded with exactly the same JPEG algorithm. Converting between them involves zero quality loss.",
  },
  {
    q: "Why does Windows save images as .jfif instead of .jpg?",
    a: "This is a quirk in how Microsoft Edge (and older Internet Explorer) handles MIME type mapping. When a web server sends an image with the MIME type 'image/jpeg', Edge maps it to the .jfif extension based on a Windows registry entry. Chrome and Firefox always save as .jpg regardless.",
  },
  {
    q: "Will converting JFIF to JPEG reduce image quality?",
    a: "No — there is absolutely zero quality loss. Since JFIF and JPEG use the same underlying compression, the conversion is simply a file extension change with no re-encoding of image data.",
  },
  {
    q: "Are my files uploaded to a server?",
    a: "Never. All conversion happens entirely within your browser using the HTML5 Canvas API. Your images are processed on your own device and never sent to any server, which means complete privacy.",
  },
  {
    q: "Why can't some software open my JFIF file?",
    a: "Some older applications and website upload forms only accept files with .jpg or .jpeg extensions. They check the file extension rather than reading the actual file data. Converting to JPEG (which changes the extension) fixes this compatibility issue immediately.",
  },
  {
    q: "Can I convert multiple JFIF files at once?",
    a: "Yes. You can select multiple .jfif files and they will all be converted and made available for download individually. There are no limits on how many files you can convert.",
  },
];

export default function JfifToJpegPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <FAQSchema faqs={faqs} />
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          JFIF to <span className="text-[hsl(var(--primary))]">JPEG</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert JFIF files to universally accepted JPEG format — free, instant, and completely private.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <JfifToJpegClient />
      </div>

      {/* About */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">What Is JFIF to JPEG Conversion?</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          JFIF (JPEG File Interchange Format) is practically identical to JPEG — it is a JPEG file saved with a different extension. Despite being technically the same format, many applications, websites, and upload forms refuse to accept .jfif files because they only check the file extension rather than reading the actual image data.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          This tool converts your JFIF files to standard JPEG format with zero quality loss. The conversion happens <strong className="text-[hsl(var(--foreground))]">entirely within your browser</strong> — no files are ever uploaded, stored, or processed by any external server. This makes it safe for personal photos, confidential documents, and sensitive images.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          The most common cause of .jfif files is Microsoft Edge&apos;s behaviour when saving images from the web. Unlike Chrome and Firefox which always save images as .jpg, Edge historically mapped the JPEG MIME type to .jfif through a Windows registry entry. Converting these files to .jpeg resolves compatibility issues with virtually all software and services.
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
            { step: "1", title: "Upload your JFIF file", desc: "Select or drag & drop your .jfif file(s) into the upload area. You can convert multiple files at once." },
            { step: "2", title: "Automatic conversion", desc: "The browser decodes the JFIF image data using the HTML5 Canvas API and re-packages it as a standard JPEG file — all locally on your device." },
            { step: "3", title: "Preview and download", desc: "Preview your converted image and click the Download button to save your new .jpeg file to your device." },
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
            "Fixing images saved by Microsoft Edge on Windows 10/11",
            "Uploading images to websites that reject .jfif extension",
            "Opening files in older photo editing software",
            "Standardizing image formats across a project or folder",
            "Attaching images to emails where .jfif is blocked",
            "Ensuring cross-platform compatibility with all devices",
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
            { title: "Zero quality loss", desc: "Converting JFIF to JPEG does not re-encode the image, so there is absolutely no reduction in quality." },
            { title: "Simple fix for Edge users", desc: "If you regularly encounter .jfif files from saving images in Edge, consider switching to Chrome or Firefox which always save as .jpg." },
            { title: "Browser-based privacy", desc: "We convert the file directly on your device using the Canvas API, ensuring your images stay completely private." },
            { title: "Fast & unlimited", desc: "Convert as many JFIF files as you need, without limits, paywalls, or waiting for server queues." },
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
        { href: "/jfif-to-png", title: "JFIF to PNG", description: "Convert JFIF files to lossless PNG format for editing." },
        { href: "/jpeg-to-jfif", title: "JPEG to JFIF", description: "Convert standard JPEGs to JFIF format." },
        { href: "/jpg-to-png", title: "JPG to PNG", description: "Convert JPG images to lossless PNG format." },
        { href: "/compress-image", title: "Compress Image", description: "Reduce image file sizes without losing quality." },
      ]} />
    </div>
  );
}
