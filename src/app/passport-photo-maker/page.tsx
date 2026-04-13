import PassportPhotoClient from "./PassportPhotoClient";
import { Metadata } from "next";
import { UserSquare, CheckCircle, Lightbulb, ListOrdered, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Passport Photo Maker - Free Online",
  description:
    "Create print-ready passport size photos online for free. Custom sizes, custom background colors, and easy print layouts.",
};

const faqs = [
  {
    q: "What size should a passport photo be for India?",
    a: "For Indian passports, the standard size is 35×45 mm (approximately 2×2 inches) with a white background and a plain, light-coloured backdrop.",
  },
  {
    q: "Can I use any photo from my phone?",
    a: "Yes. Upload a clear, front-facing portrait photo. The tool will let you crop and resize it to the correct dimensions.",
  },
  {
    q: "Will my photo be uploaded to a server?",
    a: "No. All processing happens in your browser. Your photo never leaves your device.",
  },
  {
    q: "How do I print the passport photo sheet?",
    a: "After generating, download the print-ready sheet image. Open it in any photo printing app or service and print at actual size (usually A4 or 4×6 inch photo paper).",
  },
  {
    q: "Can I change the background colour?",
    a: "Yes. You can select white, off-white, light blue, or other background colours to meet different country requirements.",
  },
  {
    q: "Is this tool free to use?",
    a: "Yes, fully free — no account needed, no watermarks, no charges.",
  },
];

export default function PassportPhotoMakerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl flex-grow flex flex-col space-y-8">
      {/* Header */}
      <div className="mb-2 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
          Passport Photo Maker
        </h1>
        <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
          Generate print-ready passport-sized photos in seconds. Create custom layouts perfectly aligned on a printable sheet.
        </p>
      </div>

      {/* Tool */}
      <div className="flex bg-[hsl(var(--card))] rounded-2xl p-4 md:p-8 shadow-sm border border-[hsl(var(--border))] flex-col items-center">
        <PassportPhotoClient />
      </div>

      {/* How it Works */}
      <div className="max-w-4xl mx-auto w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <ListOrdered className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">How it Works</h2>
        </div>
        <ol className="space-y-4">
          {[
            { step: "1", title: "Upload your photo", desc: "Select a clear, front-facing portrait photo from your device." },
            { step: "2", title: "Choose size & background", desc: "Pick the required passport photo size and background colour for your country." },
            { step: "3", title: "Crop & adjust", desc: "Use the crop tool to frame your face correctly within the photo boundaries." },
            { step: "4", title: "Download print sheet", desc: "Download the ready-to-print sheet with multiple copies arranged on A4." },
          ].map((s) => (
            <li key={s.step} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] font-bold text-sm flex items-center justify-center">
                {s.step}
              </span>
              <div>
                <p className="font-semibold text-[hsl(var(--foreground))] text-sm">{s.title}</p>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Explanation */}
      <div className="max-w-4xl mx-auto w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <UserSquare className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">What is a Passport Photo Maker?</h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          A passport photo maker helps you resize and format a portrait photo to meet the strict size, background, and print layout requirements of official documents — passports, visas, ID cards, and more. Different countries have specific requirements (e.g. 35×45 mm for India/UK, 2×2 inches for the USA).
        </p>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
          AllConverter's tool lets you pick the correct size, choose a background colour, and instantly generate a print-ready sheet — all{" "}
          <strong className="text-[hsl(var(--foreground))]">without leaving your browser</strong>.
        </p>
      </div>

      {/* Use Cases */}
      <div className="max-w-4xl mx-auto w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">Common Use Cases</h2>
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
            <li key={item} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Value-added Info */}
      <div className="max-w-4xl mx-auto w-full bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/20 rounded-2xl p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">Tips & Value-Added Info</h2>
        </div>
        <ul className="space-y-2">
          {[
            { title: "White background", desc: "Most passport photos require a plain white or off-white background. Use our background colour picker to match." },
            { title: "Print layout", desc: "The tool arranges multiple copies on a single A4 sheet — simply print and cut to save money at photo studios." },
            { title: "No upload needed", desc: "Your photo is processed entirely on your device, keeping it completely private." },
            { title: "Standard sizes included", desc: "Presets for Indian (25×35 mm, 35×45 mm), US (51×51 mm), and other global standards are built in." },
          ].map((tip) => (
            <li key={tip.title} className="text-sm text-[hsl(var(--muted-foreground))]">
              <span className="font-semibold text-[hsl(var(--foreground))]">{tip.title}:</span>{" "}{tip.desc}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">Frequently Asked Questions</h2>
        </div>
        <dl className="space-y-5 divide-y divide-[hsl(var(--border))]">
          {faqs.map((faq) => (
            <div key={faq.q} className="pt-4 first:pt-0">
              <dt className="font-semibold text-[hsl(var(--foreground))] text-sm mb-1">{faq.q}</dt>
              <dd className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
