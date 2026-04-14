import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FileNexa - Fast, Secure & Free",
  description: "Convert images and documents online with ease. Enjoy lightning fast, private, and high-quality conversions entirely in your browser. Supports PDF, JPG, PNG, and more.",
  keywords: "file converter, image to pdf, png to jpg, jpg to png, doc to pdf, free file conversion, secure converter",
  openGraph: {
    title: "FileNexa",
    description: "Lightning fast, secure, and fully private file conversions.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
