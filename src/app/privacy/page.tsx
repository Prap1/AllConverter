import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – FileNexa",
  description:
    "Read the FileNexa Privacy Policy to understand how we handle your data — spoiler: we barely collect any.",
};

export default function PrivacyPage() {
  const lastUpdated = "May 4, 2026";

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

            {/* 1. Introduction */}
            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                1. Introduction
              </h2>
              <p>
                Welcome to{" "}
                <strong className="text-[hsl(var(--foreground))]">FileNexa</strong>.
                We respect your privacy and are committed to protecting it. This
                Privacy Policy explains how we handle information when you use
                our website and mobile application.
              </p>
            </div>

            {/* 2. Information We Do NOT Collect */}
            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                2. Information We Do NOT Collect
              </h2>
              <p>
                FileNexa processes files{" "}
                <strong className="text-[hsl(var(--foreground))]">
                  locally on your device or browser
                </strong>
                . This means:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your files are never uploaded to our servers.</li>
                <li>We do not store, read, or share your files.</li>
                <li>No account or registration is required.</li>
              </ul>
            </div>

            {/* 3. Automatically Collected Information */}
            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                3. Automatically Collected Information
              </h2>
              <p>
                We may collect limited non-personal information such as:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Device type and operating system</li>
                <li>Browser type</li>
                <li>IP address</li>
                <li>Pages visited and usage data</li>
              </ul>
              <p className="mt-3">
                This information is used only for improving performance and user
                experience.
              </p>
            </div>

            {/* 4. Advertising */}
            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                4. Advertising (Google AdSense &amp; AdMob)
              </h2>
              <p>
                We use third-party advertising services — specifically{" "}
                <strong className="text-[hsl(var(--foreground))]">
                  Google AdSense
                </strong>{" "}
                (for our website) and{" "}
                <strong className="text-[hsl(var(--foreground))]">
                  Google AdMob
                </strong>{" "}
                (for our mobile app). These services may collect and use
                information such as:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Device information</li>
                <li>IP address</li>
                <li>Advertising identifiers</li>
                <li>User interaction with ads</li>
              </ul>
              <p className="mt-3">
                This helps serve personalized or non-personalized ads.
              </p>
              <p className="mt-3">
                Learn more about how Google uses data:{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--primary))] hover:underline font-medium"
                >
                  policies.google.com/technologies/ads
                </a>
              </p>
              <p className="mt-2">
                Opt out of personalized advertising:{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--primary))] hover:underline font-medium"
                >
                  google.com/settings/ads
                </a>
              </p>
            </div>

            {/* 5. Cookies and Tracking Technologies */}
            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                5. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar technologies for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Essential functionality</li>
                <li>Remembering your preferences</li>
                <li>Serving advertisements</li>
              </ul>
              <p className="mt-3">
                Third-party vendors, including Google, may use cookies to serve
                ads based on your prior visits to our site or other sites on the
                internet.
              </p>
            </div>

            {/* 6. Third-Party Services */}
            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                6. Third-Party Services
              </h2>
              <p>
                We use third-party services such as Google AdSense and AdMob.
                These services operate under their own privacy policies. We
                encourage you to review them independently.
              </p>
            </div>

            {/* 7. Children's Privacy */}
            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                7. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not intended for children under the age of 13.
                We do not knowingly collect personal information from children.
              </p>
            </div>

            {/* 8. Data Security */}
            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                8. Data Security
              </h2>
              <p>
                We take reasonable measures to protect information. However, no
                method of transmission over the internet is completely secure,
                and we cannot guarantee absolute security.
              </p>
            </div>

            {/* 9. Changes to This Policy */}
            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated &ldquo;Last
                updated&rdquo; date. Continued use of FileNexa after changes
                constitutes your acceptance of the revised policy.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                10. Contact Us
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