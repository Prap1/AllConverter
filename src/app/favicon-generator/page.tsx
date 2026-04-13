import FaviconGeneratorClient from "./FaviconGeneratorClient";
import { Metadata } from "next";
import { Globe, CheckCircle, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Favicon Generator - Free Online ICO Converter",
  description:
    "Create standard favicon.ico, PNG favicons, and Apple Touch icons perfectly suited for all web browsers with padding and styling options.",
};

export default function FaviconMakerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl flex-grow flex flex-col space-y-8">
      {/* Header */}
      <div className="mb-2 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
          Favicon Generator
        </h1>
        <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
          Instantly convert any image into standard favicon.ico, PNG web
          favicons, and Apple touch icons. Download them individually or as a
          complete bundle.
        </p>
      </div>

      {/* Tool */}
      <div className="flex flex-col bg-[hsl(var(--card))] rounded-2xl p-4 md:p-8 shadow-sm border border-[hsl(var(--border))] items-center">
        <FaviconGeneratorClient />
      </div>

      {/* Explanation */}
      <div className="max-w-4xl mx-auto w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <Globe className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">
            What is a Favicon?
          </h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          A favicon (short for "favourite icon") is the small icon displayed in
          a browser tab, bookmarks bar, and search results next to your
          website's name. It plays a key role in brand recognition and user
          experience. The standard format is <strong className="text-[hsl(var(--foreground))]">favicon.ico</strong>,
          but modern browsers also support PNG and SVG favicons at various sizes.
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          AllConverter generates all the necessary sizes — 16×16, 32×32, 48×48,
          and 180×180 (Apple Touch Icon) — from a single image,{" "}
          <strong className="text-[hsl(var(--foreground))]">right in your browser</strong>.
        </p>
      </div>

      {/* Use Cases */}
      <div className="max-w-4xl mx-auto w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">
            Common Use Cases
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Add a branded tab icon to your website",
            "Create an Apple Touch Icon for iOS home screens",
            "Generate favicons for Next.js / React apps",
            "Create browser bookmarks icon for web apps",
            "Generate multi-size favicon bundles for WordPress",
            "Convert your logo PNG into a favicon quickly",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]"
            >
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Value-added Info */}
      <div className="max-w-4xl mx-auto w-full bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/20 rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">
            Tips & Value-Added Info
          </h2>
        </div>
        <ul className="space-y-2">
          {[
            { title: "Use a square image", desc: "Start with a square image (1:1 aspect ratio) for the best result — the generator will resize it correctly." },
            { title: "Simple designs work best", desc: "Favicons are tiny — bold, simple logos with high contrast are more recognisable at 16×16 px." },
            { title: "All sizes in one click", desc: "Download a ZIP bundle containing all standard favicon sizes ready to drop into your project." },
            { title: "Apple Touch Icon", desc: "The 180×180 PNG is required for your site to display a proper icon when added to an iPhone home screen." },
          ].map((tip) => (
            <li key={tip.title} className="text-sm text-[hsl(var(--muted-foreground))]">
              <span className="font-semibold text-[hsl(var(--foreground))]">{tip.title}:</span>{" "}
              {tip.desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
