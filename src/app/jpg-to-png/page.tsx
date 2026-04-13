import { Metadata } from "next";
import JpgToPngClient from "./JpgToPngClient";

export const metadata: Metadata = {
  title: "Convert JPG to PNG | All-in-One Converter",
  description: "Instantly convert JPG files to PNG format for free online. Save images with a transparent background or higher quality.",
};

export default function JpgToPngPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          JPG to <span className="text-[hsl(var(--primary))]">PNG</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert your JPG pictures to PNG online for free.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <JpgToPngClient />
      </div>
    </div>
  );
}
