"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground))]">Contact Information</h2>
                <p className="text-[hsl(var(--muted-foreground))] mb-8">
                  Feel free to contact us via email or phone. Our team is available to assist you with any technical issues or feature requests.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Address" ? "_blank" : undefined}
                    rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                    className="group bg-[hsl(var(--card))] border rounded-2xl p-6 flex items-center gap-4 hover:border-[hsl(var(--primary))] hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                      <item.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <p className="text-[hsl(var(--foreground))] font-semibold">{item.label}</p>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-[hsl(var(--secondary))]/30 p-6 rounded-2xl border border-[hsl(var(--border))]">
                 <h4 className="font-semibold text-[hsl(var(--foreground))] mb-2">Business Hours</h4>
                 <p className="text-sm text-[hsl(var(--muted-foreground))]">Monday - Friday: 9 AM - 6 PM (IST)</p>
                 <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">Typical response time: Under 24 hours</p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-3xl p-8 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--foreground))]">Message Sent!</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-xl font-medium hover:opacity-90 transition-opacity"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[hsl(var(--foreground))]">Your Name</label>
                      <input 
                        id="name" 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 bg-[hsl(var(--secondary))]/50 border border-[hsl(var(--border))] rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-[hsl(var(--foreground))]">Email Address</label>
                      <input 
                        id="email" 
                        type="email" 
                        required 
                        className="w-full px-4 py-3 bg-[hsl(var(--secondary))]/50 border border-[hsl(var(--border))] rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-[hsl(var(--foreground))]">Subject</label>
                    <input 
                      id="subject" 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 bg-[hsl(var(--secondary))]/50 border border-[hsl(var(--border))] rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-[hsl(var(--foreground))]">Message</label>
                    <textarea 
                      id="message" 
                      required 
                      rows={5}
                      className="w-full px-4 py-3 bg-[hsl(var(--secondary))]/50 border border-[hsl(var(--border))] rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
