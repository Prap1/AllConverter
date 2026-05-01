import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FileNexa: Free Online File Converter - Fast, Secure & Private",
  description: "Use FileNexa, the ultimate free online file converter. Seamlessly convert, merge, compress, and edit images and PDFs securely in your browser. Fast, private, and no signup required.",
  keywords: "free online file converter, image to pdf, png to jpg converter, jpg to png, secure file conversion, merge pdfs online, compress image online, watermark pdf, jfif to jpg, web converter",
  openGraph: {
    title: "FileNexa: Free Online File Converter",
    description: "Lightning fast, secure, and fully private file conversions. Convert, merge, and compress files directly in your browser.",
    type: "website",
  },
  verification: {
    google: "EuT9zaepGwE4qmiaKm7smPYaTOcT-5XkEIvmIUSgYhE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5314962273762361"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
