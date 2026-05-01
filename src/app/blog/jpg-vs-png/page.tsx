import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "JPG vs PNG: Which Image Format Should You Use? – FileNexa Blog",
  description:
    "A complete comparison of JPG and PNG image formats. Learn about compression, transparency, file size, quality, and when to use each format for photos, logos, and web graphics.",
};

export default function JpgVsPngPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl py-12 md:py-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10 px-3 py-1 rounded-full">Image Formats</span>
            <span className="flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))]"><Clock className="w-3 h-3" /> 6 min read</span>
            <span className="flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))]"><Calendar className="w-3 h-3" /> April 28, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-tight mb-4">
            JPG vs PNG: Which Image Format Should You Use?
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Choosing the wrong image format can mean bloated file sizes, lost transparency, or degraded quality. Here&apos;s everything you need to know to make the right call every time.
          </p>
        </header>

        <article className="space-y-8 text-[hsl(var(--muted-foreground))] text-base leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">What is JPG?</h2>
            <p>JPG (also written as JPEG) is the world&apos;s most widely used image format. It uses <strong className="text-[hsl(var(--foreground))]">lossy compression</strong>, permanently discarding some visual data to achieve dramatically smaller file sizes. The clever part is that the data JPG discards is the least noticeable to the human eye, so a well-compressed JPG can look nearly identical to the original while being 5–20× smaller.</p>
            <p>JPG is the dominant format for photographs because real-world scenes contain gradual colour transitions that compress extremely efficiently. A 10 MB camera photo might become a 600 KB JPG with no visible degradation at typical screen sizes.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">What is PNG?</h2>
            <p>PNG (Portable Network Graphics) was created as an open, free format. Unlike JPG, PNG uses <strong className="text-[hsl(var(--foreground))]">lossless compression</strong> — it reduces file size without ever discarding pixel data. Every time you save a PNG, it is byte-for-byte identical to the original.</p>
            <p>PNG&apos;s killer feature is <strong className="text-[hsl(var(--foreground))]">alpha channel transparency</strong>. Each pixel can be fully opaque, fully transparent, or anywhere in between. This makes PNG the go-to format for logos, icons, and UI elements that need to sit on different backgrounds.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Key Differences</h2>
            <div className="overflow-x-auto rounded-xl border border-[hsl(var(--border))]">
              <table className="w-full text-sm">
                <thead className="bg-[hsl(var(--secondary))]/50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-[hsl(var(--foreground))]">Feature</th>
                    <th className="text-left px-4 py-3 font-semibold text-[hsl(var(--foreground))]">JPG</th>
                    <th className="text-left px-4 py-3 font-semibold text-[hsl(var(--foreground))]">PNG</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[hsl(var(--border))]">
                  {[
                    ["Compression type", "Lossy", "Lossless"],
                    ["Transparency support", "No", "Yes (alpha channel)"],
                    ["File size", "Smaller (5–20×)", "Larger"],
                    ["Best for", "Photographs", "Logos, icons, graphics"],
                    ["Re-save quality loss", "Yes", "No"],
                    ["Browser support", "Universal", "Universal"],
                  ].map(([feature, jpg, png]) => (
                    <tr key={feature} className="hover:bg-[hsl(var(--secondary))]/20">
                      <td className="px-4 py-3 font-medium text-[hsl(var(--foreground))]">{feature}</td>
                      <td className="px-4 py-3">{jpg}</td>
                      <td className="px-4 py-3">{png}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">When to Use JPG</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-[hsl(var(--foreground))]">Photographs and realistic imagery</strong> — Real-world scenes with smooth colour gradients compress beautifully.</li>
              <li><strong className="text-[hsl(var(--foreground))]">Social media uploads</strong> — Most platforms re-compress uploads anyway; starting with JPG keeps file sizes manageable.</li>
              <li><strong className="text-[hsl(var(--foreground))]">Web background images</strong> — Full-width hero images should be JPGs for faster page load times.</li>
              <li><strong className="text-[hsl(var(--foreground))]">Email attachments</strong> — When you need to send photos without huge file sizes, JPG is the right choice.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">When to Use PNG</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-[hsl(var(--foreground))]">Logos and brand assets</strong> — Logos need crisp edges and transparent backgrounds. PNG is the only choice.</li>
              <li><strong className="text-[hsl(var(--foreground))]">Images with text</strong> — Text in JPG becomes blurry due to compression artifacts. PNG keeps text razor-sharp.</li>
              <li><strong className="text-[hsl(var(--foreground))]">Images you will continue editing</strong> — Work in PNG to avoid accumulation of quality loss from repeated saves.</li>
              <li><strong className="text-[hsl(var(--foreground))]">Screenshots</strong> — Screenshots contain sharp edges and solid colours that PNG handles much better than JPG.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">The Re-Save Problem</h2>
            <p>Each time you open a JPG, make a change, and save it again, the compression algorithm runs again — discarding more data each time. After just a handful of edit-save cycles, visible quality degradation appears. This is why professional workflows use PNG as the working format and only export to JPG at the very end.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Quick Decision Guide</h2>
            <div className="bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/20 rounded-xl p-6 space-y-3 text-sm">
              <p>📸 <strong className="text-[hsl(var(--foreground))]">Is it a photograph?</strong> → Use <strong className="text-[hsl(var(--primary))]">JPG</strong></p>
              <p>🎨 <strong className="text-[hsl(var(--foreground))]">Does it need a transparent background?</strong> → Use <strong className="text-[hsl(var(--primary))]">PNG</strong></p>
              <p>✏️ <strong className="text-[hsl(var(--foreground))]">Does it contain text or sharp lines?</strong> → Use <strong className="text-[hsl(var(--primary))]">PNG</strong></p>
              <p>💾 <strong className="text-[hsl(var(--foreground))]">Will you keep editing it?</strong> → Use <strong className="text-[hsl(var(--primary))]">PNG</strong>, export JPG at the end</p>
              <p>🌐 <strong className="text-[hsl(var(--foreground))]">Is it a hero/background for a website?</strong> → Use <strong className="text-[hsl(var(--primary))]">JPG</strong></p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Convert Between Formats</h2>
            <p>Need to switch formats? FileNexa makes it free and instant — all processing runs locally in your browser, so your files never get uploaded anywhere.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { href: "/png-to-jpg", label: "Convert PNG to JPG →" },
                { href: "/jpg-to-png", label: "Convert JPG to PNG →" },
                { href: "/compress-image", label: "Compress Images →" },
                { href: "/image-to-pdf", label: "Images to PDF →" },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} className="block p-3 border border-[hsl(var(--border))] rounded-lg text-sm font-medium text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 hover:border-[hsl(var(--primary))] transition-all">
                  {tool.label}
                </Link>
              ))}
            </div>
          </section>
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
