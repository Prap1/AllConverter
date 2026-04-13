import PassportPhotoClient from "./PassportPhotoClient";
import { Metadata } from "next";
import { UserSquare, CheckCircle, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Passport Photo Maker - Free Online",
  description:
    "Create print-ready passport size photos online for free. Custom sizes, custom background colors, and easy print layouts.",
};

export default function PassportPhotoMakerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl flex-grow flex flex-col space-y-8">
      {/* Header */}
      <div className="mb-2 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
          Passport Photo Maker
        </h1>
        <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
          Generate print-ready passport-sized photos in seconds. Create custom
          layouts perfectly aligned on a printable sheet.
        </p>
      </div>

      {/* Tool */}
      <div className="flex bg-[hsl(var(--card))] rounded-2xl p-4 md:p-8 shadow-sm border border-[hsl(var(--border))] flex-col items-center">
        <PassportPhotoClient />
      </div>

      {/* Explanation */}
      <div className="max-w-4xl mx-auto w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <UserSquare className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">
            What is a Passport Photo Maker?
          </h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          A passport photo maker helps you resize and format a portrait photo to
          meet the strict size, background, and print layout requirements of
          official documents — passports, visas, ID cards, and more. Different
          countries have specific requirements (e.g. 35×45 mm for India/UK,
          2×2 inches for the USA).
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          AllConverter's tool lets you pick the correct size, choose a
          background colour, and instantly generate a print-ready sheet — all{" "}
          <strong className="text-[hsl(var(--foreground))]">
            without leaving your browser
          </strong>
          .
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
            "Indian passport or Aadhaar card photo preparation",
            "UK/US visa photo creation at home",
            "School or college ID card photos",
            "Employee ID badge preparation",
            "Driving licence application photos",
            "Online form photo upload (correct size & format)",
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
            { title: "White background", desc: "Most passport photos require a plain white or off-white background. Use our background colour picker to match." },
            { title: "Print layout", desc: "The tool arranges multiple copies on a single A4 sheet — simply print and cut to save money at photo studios." },
            { title: "No upload needed", desc: "Your photo is processed entirely on your device, keeping it completely private." },
            { title: "Standard sizes included", desc: "Presets for Indian (25×35 mm, 35×45 mm), US (51×51 mm), and other global standards are built in." },
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
