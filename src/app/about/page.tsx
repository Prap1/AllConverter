import type { Metadata } from "next";
import { Monitor, Zap, Shield, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – AllConverter",
  description:
    "Learn about AllConverter — our mission, values, and the team behind the fastest, most secure file conversion tool on the web.",
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
      "AllConverter is and will always be free to use. No subscriptions, no hidden costs, no watermarks.",
  },
  {
    icon: Monitor,
    title: "Works Everywhere",
    description:
      "Whether you're on a phone, tablet, or desktop — AllConverter adapts beautifully to any screen size.",
  },
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
            About AllConverter
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Built for{" "}
            <span className="text-[hsl(var(--primary))]">everyone</span>
            <br />
            who works with files
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed">
            AllConverter is a free, browser-based toolbox that makes converting
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
            with ads. That's why we built AllConverter: a clean, fast, and
            completely free suite of tools that runs entirely in your browser.
          </p>
          <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg leading-relaxed">
            From converting images and documents to generating favicons and
            passport photos, our goal is to handle your everyday file tasks
            without ever compromising your privacy or your time.
          </p>
        </div>
      </section>

      {/* Features / Values */}
      <section className="py-16 bg-[hsl(var(--secondary))]/30">
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

      {/* Story */}
      <section className="py-16 border-t">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Our Story
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg leading-relaxed mb-4">
            AllConverter started as a personal side project — born out of
            frustration with clunky, ad-heavy file conversion websites. We
            wanted something that just worked: snappy, honest, and respectful of
            the user's privacy.
          </p>
          <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg leading-relaxed">
            Today, AllConverter supports a growing list of conversion and
            processing tools, all running client-side thanks to modern browser
            technologies. We're constantly adding new tools based on community
            feedback and our own day-to-day needs.
          </p>
        </div>
      </section>
    </div>
  );
}
