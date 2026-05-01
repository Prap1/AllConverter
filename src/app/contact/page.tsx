import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us – FileNexa",
  description:
    "Get in touch with the FileNexa team. We're happy to hear from you via email or social media.",
};

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "praphoolkumar07@gmail.com",
    href: "mailto:praphoolkumar07@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Vejalpur, Ahmedabad, Gujarat, India",
    href: "https://maps.google.com/?q=Vejalpur,Ahmedabad",
  },
];

export default function ContactPage() {
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
            <Mail className="w-4 h-4 text-[hsl(var(--primary))]" />
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Contact{" "}
            <span className="text-[hsl(var(--primary))]">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-xl mx-auto">
            Have a question, suggestion, or just want to say hello? Reach out —
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                  className="group bg-[hsl(var(--card))] border rounded-3xl p-8 flex flex-col items-center text-center gap-4 hover:border-[hsl(var(--primary))] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--primary))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                    <item.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-1">
                      {item.label}
                    </p>
                    <p className="font-bold text-[hsl(var(--foreground))] text-lg leading-snug">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-[hsl(var(--secondary))]/30 p-8 rounded-3xl border border-[hsl(var(--border))] text-center max-w-2xl mx-auto">
               <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">Response Time</h3>
               <p className="text-[hsl(var(--muted-foreground))] mb-4">
                 Our team typically responds to all inquiries within <span className="font-semibold text-[hsl(var(--foreground))]">24 hours</span> during business days (Monday - Friday).
               </p>
               <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[hsl(var(--foreground))]">
                 <span className="px-4 py-2 bg-[hsl(var(--card))] rounded-full border border-[hsl(var(--border))] shadow-sm">9 AM - 6 PM (IST)</span>
                 <span className="px-4 py-2 bg-[hsl(var(--card))] rounded-full border border-[hsl(var(--border))] shadow-sm">Snappy Support</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
