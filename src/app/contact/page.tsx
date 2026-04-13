import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us – AllConverter",
  description:
    "Get in touch with the AllConverter team. We're happy to hear from you.",
};

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "praphoolkumar07@gmail.com",
    href: "mailto:praphoolkumar07@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6207982659",
    href: "tel:+916207982659",
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
            we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Address" ? "_blank" : undefined}
                rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                className="group bg-[hsl(var(--card))] border rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:border-[hsl(var(--primary))] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--primary))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[hsl(var(--primary))]" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-1">
                    {item.label}
                  </p>
                  <p className="font-semibold text-[hsl(var(--foreground))] text-sm leading-snug break-all">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Extra note */}
          <p className="text-center text-sm text-[hsl(var(--muted-foreground))] mt-12">
            We typically respond within{" "}
            <span className="font-medium text-[hsl(var(--foreground))]">
              24 hours
            </span>{" "}
            on business days.
          </p>
        </div>
      </section>
    </div>
  );
}
