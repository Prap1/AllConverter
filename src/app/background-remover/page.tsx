import BackgroundRemoverClient from "./BackgroundRemoverClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Background Remover - Free & Fast",
  description: "Remove the background from any image instantly using AI. Processed entirely in your browser for 100% privacy.",
};

export default function BackgroundRemoverPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl flex-grow flex flex-col">
      <div className="mb-8 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
          AI Background Remover
        </h1>
        <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
          Automatically remove image backgrounds with high precision. Files are processed locally in your browser for 100% privacy.
        </p>
      </div>
      
      <div className="flex bg-[hsl(var(--card))] rounded-2xl p-6 md:p-8 shadow-sm border border-[hsl(var(--border))] flex-col items-center">
        <BackgroundRemoverClient />
      </div>
    </div>
  );
}
