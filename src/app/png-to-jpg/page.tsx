import { Metadata } from "next";
import PngToJpgClient from "./PngToJpgClient";

export const metadata: Metadata = {
  title: "Convert PNG to JPG | All-in-One Converter",
  description: "Instantly convert PNG files to JPG format for free online. Make your images smaller and more compatible in seconds.",
};

export default function PngToJpgPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          PNG to <span className="text-[hsl(var(--primary))]">JPG</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert your PNG pictures to JPG online for free.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <PngToJpgClient />
      </div>
    </div>
  );
}
