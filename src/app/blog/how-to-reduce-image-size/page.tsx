import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { BlogSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "How to Reduce Image File Size Without Losing Quality – FileNexa Blog",
  description:
    "Learn proven techniques to compress and reduce image file sizes without visible quality loss. Covers compression settings, format choices, web optimization, and free browser tools.",
};

export default function HowToReduceImageSizePage() {
  return (
    <div className="min-h-screen">
      <BlogSchema 
        title="How to Reduce Image File Size Without Losing Quality"
        description="Learn 6 expert techniques to compress images without losing quality. Discover how to optimize JPG, PNG, and WebP files for faster web performance."
        date="2026-04-29"
        url="https://file-nexa.vercel.app/blog/how-to-reduce-image-size"
      />
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl py-12 md:py-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10 px-3 py-1 rounded-full">Optimization</span>
            <span className="flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))]"><Clock className="w-3 h-3" /> 7 min read</span>
            <span className="flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))]"><Calendar className="w-3 h-3" /> April 25, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-tight mb-4">
            How to Reduce Image File Size Without Losing Quality
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Whether you&apos;re building a website, sending email attachments, or just freeing up storage space, large images are a constant problem. Here&apos;s exactly how to fix that.
          </p>
        </header>

        <article className="space-y-8 text-[hsl(var(--muted-foreground))] text-base leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Why Image File Size Matters</h2>
            <p>Images typically account for 50–80% of the total data transferred when loading a webpage. Google&apos;s Core Web Vitals — the metrics that directly affect your search ranking — include page speed, and oversized images are one of the biggest culprits of slow load times.</p>
            <p>For email, most providers cap attachments between 10–25 MB. A single unoptimised burst of photos from a modern smartphone can easily exceed that. And on mobile data, every extra megabyte costs your users real money.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Understanding Compression: Lossy vs Lossless</h2>
            <p>There are two fundamentally different ways to make an image file smaller:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-[hsl(var(--foreground))]">Lossy compression</strong> permanently removes some image data to achieve smaller sizes. JPG and WebP use lossy compression. At high quality settings (80–90%), the loss is invisible to the naked eye. At low quality settings, you&apos;ll see blocky artifacts and colour banding.</li>
              <li><strong className="text-[hsl(var(--foreground))]">Lossless compression</strong> reorganises the data more efficiently without discarding anything. PNG uses lossless compression. The resulting file is larger than lossy alternatives, but every pixel is preserved exactly.</li>
            </ul>
            <p>The key insight is that for photographs, lossy compression at 75–85% quality is virtually indistinguishable from lossless — but the file can be 10× smaller. For logos, text, and graphics with sharp edges, lossless PNG is usually the better choice.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Technique 1: Choose the Right Format</h2>
            <p>Before compressing anything, make sure you&apos;re using the right format:</p>
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-5 space-y-3 text-sm">
              <p>📷 <strong className="text-[hsl(var(--foreground))]">Photos and realistic images</strong> → Use <strong className="text-[hsl(var(--primary))]">JPG</strong> or <strong className="text-[hsl(var(--primary))]">WebP</strong></p>
              <p>🎨 <strong className="text-[hsl(var(--foreground))]">Logos, icons, illustrations</strong> → Use <strong className="text-[hsl(var(--primary))]">PNG</strong> or <strong className="text-[hsl(var(--primary))]">SVG</strong></p>
              <p>🌐 <strong className="text-[hsl(var(--foreground))]">Web images (any type)</strong> → Consider <strong className="text-[hsl(var(--primary))]">WebP</strong> (25–35% smaller than JPG/PNG)</p>
              <p>🖼️ <strong className="text-[hsl(var(--foreground))]">Screenshots with text</strong> → Use <strong className="text-[hsl(var(--primary))]">PNG</strong></p>
            </div>
            <p>If you have a photo saved as PNG, simply converting it to JPG can reduce the file size by 70–80% with no visible quality difference. Use FileNexa&apos;s <Link href="/png-to-jpg" className="text-[hsl(var(--primary))] hover:underline font-medium">PNG to JPG converter</Link> to do this instantly in your browser.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Technique 2: Adjust the Quality Setting</h2>
            <p>Most image editors and converters let you control the compression quality from 0 to 100. Here&apos;s a practical guide:</p>
            <div className="overflow-x-auto rounded-xl border border-[hsl(var(--border))]">
              <table className="w-full text-sm">
                <thead className="bg-[hsl(var(--secondary))]/50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-[hsl(var(--foreground))]">Quality Range</th>
                    <th className="text-left px-4 py-3 font-semibold text-[hsl(var(--foreground))]">Use Case</th>
                    <th className="text-left px-4 py-3 font-semibold text-[hsl(var(--foreground))]">Typical Size Reduction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[hsl(var(--border))]">
                  {[
                    ["90–100%", "Print-quality images", "10–30%"],
                    ["75–90%", "Web photos, social media", "40–60%"],
                    ["60–75%", "Thumbnails, email previews", "65–80%"],
                    ["Below 60%", "Tiny previews only", "80–95% (visible artifacts)"],
                  ].map(([range, use, reduction]) => (
                    <tr key={range} className="hover:bg-[hsl(var(--secondary))]/20">
                      <td className="px-4 py-3 font-medium text-[hsl(var(--foreground))]">{range}</td>
                      <td className="px-4 py-3">{use}</td>
                      <td className="px-4 py-3 text-[hsl(var(--primary))] font-medium">{reduction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>For most web use cases, a quality setting of <strong className="text-[hsl(var(--foreground))]">75–80%</strong> delivers the ideal balance of visual quality and small file size. You can experiment with this using FileNexa&apos;s <Link href="/compress-image" className="text-[hsl(var(--primary))] hover:underline font-medium">Image Compressor</Link>.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Technique 3: Resize the Image Dimensions</h2>
            <p>File size is directly proportional to the number of pixels. A 4000×3000 image has 12 million pixels. A 1920×1440 image has 2.76 million — less than a quarter as many, and the file will be proportionally smaller.</p>
            <p>Before compressing, ask: does this image really need to be displayed at 4000px wide? For a standard website column, 800–1200px wide is usually more than enough. For thumbnails, 400px is plenty. Resizing down before compression multiplies your savings.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Technique 4: Strip Unnecessary Metadata</h2>
            <p>Images often contain hidden metadata — GPS coordinates from your phone, camera settings (EXIF data), copyright information, colour profiles, and thumbnail previews. This metadata can add 10–50 KB to a single image file.</p>
            <p>Most image optimisers strip this data automatically. This is safe for web images — browsers don&apos;t need EXIF data to display photos correctly.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Technique 5: Use a Free Browser-Based Tool</h2>
            <p>You don&apos;t need expensive software. FileNexa&apos;s <Link href="/compress-image" className="text-[hsl(var(--primary))] hover:underline font-medium">Compress Image tool</Link> lets you compress JPG, PNG, and WebP images directly in your browser — no uploads, no account required, completely free. Just upload your image, move the quality slider, and download the optimised result.</p>
            <p>For batch needs, you can process images one at a time and the whole workflow takes seconds per image.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Summary: Your Image Optimisation Checklist</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use JPG for photos, PNG for graphics with transparency or text</li>
              <li>Set JPG quality to 75–80% for web use</li>
              <li>Resize image dimensions to the actual display size needed</li>
              <li>Strip EXIF metadata for web images</li>
              <li>Consider WebP for modern web projects</li>
              <li>Use a browser-based tool to avoid uploading sensitive images</li>
            </ul>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            {[
              { href: "/compress-image", label: "Compress Image →" },
              { href: "/png-to-jpg", label: "Convert PNG to JPG →" },
              { href: "/jpg-to-png", label: "Convert JPG to PNG →" },
              { href: "/image-to-pdf", label: "Images to PDF →" },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="block p-3 border border-[hsl(var(--border))] rounded-lg text-sm font-medium text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 hover:border-[hsl(var(--primary))] transition-all">
                {tool.label}
              </Link>
            ))}
          </div>
        </article>

        <div className="mt-12 pt-8 border-t">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary))] hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to all guides
          </Link>
        </div>
      </div>
    </div>
  );
}
