import type { Metadata } from "next";
import { Monitor, Zap, Shield, Globe, Cpu, Layers, HelpCircle, Code } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – FileNexa | Our Mission and Technology",
  description:
    "Discover the story behind FileNexa, our privacy-first mission, and the modern web technologies like WebAssembly and Canvas API that power our local file conversion tools.",
};

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "All conversions happen right in your browser using modern Web APIs — no uploads, no waiting, no server round-trips.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description:
      "Your files never leave your device. We have zero access to the documents or images you process.",
  },
  {
    icon: Globe,
    title: "Always Free",
    description:
      "FileNexa is and will always be free to use. No subscriptions, no hidden costs, no watermarks.",
  },
  {
    icon: Monitor,
    title: "Works Everywhere",
    description:
      "Whether you're on a phone, tablet, or desktop — FileNexa adapts beautifully to any screen size.",
  },
];

const toolsList = [
  { name: "Image to PDF", desc: "Convert multiple JPG/PNG images into a single PDF document." },
  { name: "PNG to JPG", desc: "Convert lossless PNG images to smaller JPEG format." },
  { name: "JPG to PNG", desc: "Convert JPEG photos to lossless PNG for high-quality editing." },
  { name: "JFIF to JPEG", desc: "Fix Windows save issues by converting .jfif to .jpg." },
  { name: "Compress Image", desc: "Shrink image file sizes without losing visual quality." },
  { name: "Merge PDFs", desc: "Combine multiple PDF files into one organized document." },
  { name: "Watermark PDF", desc: "Add diagonal text watermarks to every page of your PDF." },
  { name: "Passport Photo Maker", desc: "Generate professional-grade passport photo sheets." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -20%, hsl(var(--primary)), transparent)",
          }}
        />
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Monitor className="w-4 h-4 text-[hsl(var(--primary))]" />
            About FileNexa
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Built for{" "}
            <span className="text-[hsl(var(--primary))]">everyone</span>
            <br />
            who works with files
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed">
            FileNexa is a free, browser-based toolbox that makes converting
            and processing files effortless — with privacy and speed at its
            core.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 border-t">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Our Mission
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg leading-relaxed mb-4">
            We believe that powerful file conversion tools should be accessible
            to everyone — not locked behind expensive subscriptions or cluttered
            with ads. That&apos;s why we built FileNexa: a clean, fast, and
            completely free suite of tools that runs entirely in your browser.
          </p>
          <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg leading-relaxed">
            From converting images and documents to generating favicons and
            passport photos, our goal is to handle your everyday file tasks
            without ever compromising your privacy or your time.
          </p>
        </div>
      </section>

      {/* How it Works - Technical Depth */}
      <section className="py-16 bg-[hsl(var(--primary))]/5 border-y">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-6 h-6 text-[hsl(var(--primary))]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))]">
              How FileNexa Works
            </h2>
          </div>
          <div className="space-y-6 text-[hsl(var(--muted-foreground))]">
            <p className="text-base md:text-lg leading-relaxed">
              Unlike traditional online converters that upload your files to remote servers, FileNexa utilizes <strong className="text-[hsl(var(--foreground))]">client-side processing</strong>. This means the heavy lifting happens right on your device.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[hsl(var(--card))] p-5 rounded-xl border border-[hsl(var(--border))]">
                <div className="flex items-center gap-2 mb-2 font-semibold text-[hsl(var(--foreground))]">
                  <Layers className="w-4 h-4 text-[hsl(var(--primary))]" />
                  HTML5 Canvas API
                </div>
                <p className="text-sm">We use the browser&apos;s native graphics engine to decode, resize, and re-encode images with zero server interaction.</p>
              </div>
              <div className="bg-[hsl(var(--card))] p-5 rounded-xl border border-[hsl(var(--border))]">
                <div className="flex items-center gap-2 mb-2 font-semibold text-[hsl(var(--foreground))]">
                  <Code className="w-4 h-4 text-[hsl(var(--primary))]" />
                  WebAssembly (WASM)
                </div>
                <p className="text-sm">For complex tasks like PDF merging and watermarking, we run high-performance C++ and Rust code directly in your browser.</p>
              </div>
            </div>
            <p className="text-sm italic">
              Result: Instant processing, lower carbon footprint, and absolute data privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Features / Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[hsl(var(--foreground))]">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[hsl(var(--card))] border rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="font-semibold text-[hsl(var(--foreground))]">
                  {f.title}
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Offer */}
      <section className="py-16 bg-[hsl(var(--secondary))]/30 border-t">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">
              Our Professional Suite
            </h2>
            <p className="text-[hsl(var(--muted-foreground))]">
              We offer a growing list of tools designed for speed and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {toolsList.map((tool) => (
              <div key={tool.name} className="p-4 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg">
                <h4 className="font-bold text-sm text-[hsl(var(--foreground))] mb-1">{tool.name}</h4>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">{tool.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
             <Link href="/" className="text-[hsl(var(--primary))] font-semibold hover:underline flex items-center justify-center gap-2">
               Explore All Tools <Globe className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 border-t">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Our Story
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg leading-relaxed mb-4">
            FileNexa started as a personal project by a group of developers who were frustrated with the state of online file tools. Most &quot;free&quot; converters were either slow, forced users to wait in queues, or were cluttered with intrusive advertisements that made the experience painful.
          </p>
          <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg leading-relaxed mb-4">
            We wanted to build something different: a platform that respected the user. By leveraging the latest advancements in web technology like WebAssembly and the Canvas API, we realized we could move the entire conversion logic into the client&apos;s browser.
          </p>
          <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg leading-relaxed">
            Today, FileNexa serves users worldwide, providing high-quality tools for photographers, students, and professionals alike. We remain committed to keeping our platform free, private, and lightning-fast.
          </p>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 border-t bg-[hsl(var(--primary))]/5">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl text-center">
          <HelpCircle className="w-12 h-12 text-[hsl(var(--primary))] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Why Trust FileNexa?
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed">
            Because we literally <strong className="text-[hsl(var(--foreground))]">cannot</strong> see your files. Since our logic runs locally on your computer, your data never reaches our servers. This &quot;Privacy by Design&quot; approach ensures that your sensitive documents, personal photos, and business assets remain entirely your own.
          </p>
        </div>
      </section>
    </div>
  );
}
