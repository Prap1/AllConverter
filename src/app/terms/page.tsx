import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions – AllConverter",
  description:
    "Read the AllConverter Terms & Conditions. By using our tools you agree to these terms.",
};

export default function TermsPage() {
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
            Terms &amp;{" "}
            <span className="text-[hsl(var(--primary))]">Conditions</span>
          </h1>
          <p className="text-[hsl(var(--muted-foreground))] text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <div className="space-y-10 text-[hsl(var(--muted-foreground))] text-base leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using{" "}
                <strong className="text-[hsl(var(--foreground))]">
                  AllConverter
                </strong>{" "}
                ("the Service"), you agree to be bound by these Terms &
                Conditions. If you do not agree with any part of these terms,
                please do not use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                2. Use of the Service
              </h2>
              <p>You agree to use AllConverter only for lawful purposes. You must not:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Use the Service for any illegal or unauthorized purpose.</li>
                <li>
                  Attempt to interfere with or disrupt the Service or its
                  infrastructure.
                </li>
                <li>
                  Reproduce, duplicate, or resell any part of the Service
                  without written permission.
                </li>
                <li>
                  Upload or process files that infringe on any third party's
                  intellectual property rights.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                3. Intellectual Property
              </h2>
              <p>
                All content, design, code, and trademarks associated with
                AllConverter are the exclusive property of AllConverter and its
                creators. You may not copy, modify, or distribute any part of
                the Service without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                4. Disclaimer of Warranties
              </h2>
              <p>
                AllConverter is provided on an{" "}
                <strong className="text-[hsl(var(--foreground))]">
                  "as is" and "as available"
                </strong>{" "}
                basis. We make no warranties, expressed or implied, regarding
                the reliability, accuracy, or availability of the Service. Use
                it at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                5. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, AllConverter and its
                creators shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your
                use of the Service, including but not limited to loss of data or
                files.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                6. File Processing
              </h2>
              <p>
                All file processing occurs locally in your browser. You are
                solely responsible for the content of files you process using
                AllConverter. We disclaim all responsibility for any file
                content processed through the Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                7. Modifications to the Service
              </h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any
                part of the Service at any time without notice. We shall not be
                liable to you or any third party for any such modification,
                suspension, or discontinuance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                8. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of India. Any disputes arising under these Terms
                shall be subject to the exclusive jurisdiction of the courts
                located in Ahmedabad, Gujarat.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                9. Changes to These Terms
              </h2>
              <p>
                We may revise these Terms from time to time. The most current
                version will always be posted on this page. Continued use of
                AllConverter after changes constitutes your acceptance of the
                new terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms & Conditions, please
                contact us at{" "}
                <a
                  href="mailto:praphoolkumar07@gmail.com"
                  className="text-[hsl(var(--primary))] hover:underline font-medium"
                >
                  praphoolkumar07@gmail.com
                </a>{" "}
                or call us at{" "}
                <a
                  href="tel:+916207982659"
                  className="text-[hsl(var(--primary))] hover:underline font-medium"
                >
                  +91 6207982659
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
