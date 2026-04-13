import PassportPhotoClient from "./PassportPhotoClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passport Photo Maker - Free Online",
  description: "Create print-ready passport size photos online for free. Custom sizes, custom background colors, and easy print layouts.",
};

export default function PassportPhotoMakerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl flex-grow flex flex-col">
      <div className="mb-8 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
          Passport Photo Maker
        </h1>
        <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
          Generate print-ready passport-sized photos in seconds. Create custom layouts perfectly aligned on a printable sheet.
        </p>
      </div>
      
      <div className="flex bg-[hsl(var(--card))] rounded-2xl p-4 md:p-8 shadow-sm border border-[hsl(var(--border))] flex-col items-center">
        <PassportPhotoClient />
      </div>
    </div>
  );
}
