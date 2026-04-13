import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – AllConverter",
  description:
    "Read the AllConverter Privacy Policy to understand how we handle your data — spoiler: we don't collect any.",
};

export default function PrivacyPage() {
  const lastUpdated = "April 13, 2026";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 border-b">
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -20%, hsl(var(--primary)), transparent)",
          }}
        />
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Privacy <span className="text-[hsl(var(--primary))]">Policy</span>
          </h1>
          <p className="text-[hsl(var(--muted-foreground))] text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl prose prose-neutral dark:prose-invert">
          <div className="space-y-10 text-[hsl(var(--muted-foreground))] text-base leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                1. Introduction
              </h2>
              <p>
                Welcome to <strong className="text-[hsl(var(--foreground))]">AllConverter</strong>.
                We respect your privacy and are committed to protecting it. This
                Privacy Policy explains how we collect, use, and safeguard
                information when you use our website and tools.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                2. Information We Do NOT Collect
              </h2>
              <p>
                AllConverter processes all files <strong className="text-[hsl(var(--foreground))]">
                locally in your browser
                </strong>. This means:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your files are never uploaded to our servers.</li>
                <li>We do not store, read, or transmit any file you process.</li>
                <li>No account or registration is required.</li>
                <li>We do not sell or share your data with any third party.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                3. Automatically Collected Data
              </h2>
              <p>
                Like most websites, our server may automatically log standard
                information such as your IP address, browser type, and the pages
                you visit. This data is used solely for operational purposes
                (e.g., monitoring server health) and is not linked to any
                personal identity.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                4. Cookies
              </h2>
              <p>
                We may use minimal, essential cookies to remember your
                preferences (e.g., dark/light mode). We do not use tracking
                cookies or third-party advertising cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                5. Third-Party Services
              </h2>
              <p>
                AllConverter may link to third-party websites. We are not
                responsible for the privacy practices of those sites. We
                encourage you to review their privacy policies independently.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                6. Children's Privacy
              </h2>
              <p>
                Our service is not directed to children under the age of 13. We
                do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be reflected on this page with an updated "Last updated"
                date. Continued use of AllConverter after changes constitutes
                your acceptance of the revised policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:praphoolkumar07@gmail.com"
                  className="text-[hsl(var(--primary))] hover:underline font-medium"
                >
                  praphoolkumar07@gmail.com
                </a>
                .
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
