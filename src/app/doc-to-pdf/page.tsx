import { Metadata } from "next";
import DocToPdfClient from "./DocToPdfClient";

export const metadata: Metadata = {
  title: "Convert DOC to PDF | All-in-One Converter",
  description: "Convert Word documents (DOC, DOCX) to PDF online for free. Fast, secure, and reliable conversion.",
};

export default function DocToPdfPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl space-y-8 flex-1 flex flex-col">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          DOC to <span className="text-[hsl(var(--primary))]">PDF</span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Convert your Word documents to PDF online securely.
        </p>
      </div>

      <div className="flex-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-12 shadow-sm">
        <DocToPdfClient />
      </div>
    </div>
  );
}
