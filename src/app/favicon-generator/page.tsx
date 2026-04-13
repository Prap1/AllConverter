import FaviconGeneratorClient from "./FaviconGeneratorClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favicon Generator - Free Online ICO Converter",
  description: "Create standard favicon.ico, PNG favicons, and Apple Touch icons perfectly suited for all web browsers with padding and styling options.",
};

export default function FaviconMakerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl flex-grow flex flex-col">
      <div className="mb-8 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
          Favicon Generator
        </h1>
        <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
          Instantly convert any image into standard `favicon.ico`, PNG web favicons, and Apple touch icons. Download them individually or as a complete bundle.
        </p>
      </div>
      
      <div className="flex flex-col bg-[hsl(var(--card))] rounded-2xl p-4 md:p-8 shadow-sm border border-[hsl(var(--border))] items-center">
        <FaviconGeneratorClient />
      </div>
    </div>
  );
}
