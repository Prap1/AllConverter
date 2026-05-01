import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-[hsl(var(--background))] py-8 md:py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-85 transition-opacity w-fit">
            <div className="relative h-10 w-10 overflow-hidden rounded-md">
              <Image src="/logo.png" alt="FileNexa logo" fill sizes="40px" className="object-cover" />
            </div>
            <span className="font-bold tracking-tight text-xl text-[hsl(var(--foreground))]">
              FileNexa
            </span>
          </Link>
          <p className="text-[hsl(var(--muted-foreground))] text-sm max-w-sm">
            Your all-in-one suite for lightning fast, secure, and fully private file conversions.
            Built with modern web technologies.
          </p>
        </div>

        {/* Tools */}
        <div className="sm:col-span-2 lg:col-span-2">
          <h3 className="font-semibold text-[hsl(var(--foreground))] mb-4">Tools</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-[hsl(var(--muted-foreground))]">
            <li><Link href="/image-to-pdf" className="hover:text-[hsl(var(--primary))] transition-colors">Image to PDF</Link></li>
            <li><Link href="/png-to-jpg" className="hover:text-[hsl(var(--primary))] transition-colors">PNG to JPG</Link></li>
            <li><Link href="/jpg-to-png" className="hover:text-[hsl(var(--primary))] transition-colors">JPG to PNG</Link></li>
            <li><Link href="/jfif-to-jpeg" className="hover:text-[hsl(var(--primary))] transition-colors">JFIF to JPEG</Link></li>
            <li><Link href="/jfif-to-png" className="hover:text-[hsl(var(--primary))] transition-colors">JFIF to PNG</Link></li>
            <li><Link href="/jpeg-to-jfif" className="hover:text-[hsl(var(--primary))] transition-colors">JPEG to JFIF</Link></li>
            <li><Link href="/png-to-jfif" className="hover:text-[hsl(var(--primary))] transition-colors">PNG to JFIF</Link></li>
            <li><Link href="/compress-image" className="hover:text-[hsl(var(--primary))] transition-colors">Compress Image</Link></li>
            <li><Link href="/add-watermark" className="hover:text-[hsl(var(--primary))] transition-colors">Watermark Image</Link></li>
            <li><Link href="/watermark-pdf" className="hover:text-[hsl(var(--primary))] transition-colors">Watermark PDF</Link></li>
            <li><Link href="/merge-pdfs" className="hover:text-[hsl(var(--primary))] transition-colors">Merge PDFs</Link></li>
            <li><Link href="/passport-photo-maker" className="hover:text-[hsl(var(--primary))] transition-colors">Passport Photo</Link></li>
            <li><Link href="/favicon-generator" className="hover:text-[hsl(var(--primary))] transition-colors">Favicon Generator</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-[hsl(var(--foreground))] mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-sm text-[hsl(var(--muted-foreground))]">
            <li><Link href="/about" className="hover:text-[hsl(var(--primary))] transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-[hsl(var(--primary))] transition-colors">Blog & Guides</Link></li>
            <li><Link href="/contact" className="hover:text-[hsl(var(--primary))] transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-[hsl(var(--primary))] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[hsl(var(--primary))] transition-colors">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-[hsl(var(--foreground))] mb-4">Connect</h3>
          <div className="flex gap-3 mb-4">
            <a href="mailto:praphoolkumar07@gmail.com" className="p-2 bg-[hsl(var(--secondary))] rounded-md text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition-colors" title="Email Us">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/praphool.programmer/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[hsl(var(--secondary))] rounded-md text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition-colors" title="Follow us on Instagram">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.facebook.com/share/14f3wZ6moh6/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[hsl(var(--secondary))] rounded-md text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition-colors" title="Follow us on Facebook">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            praphoolkumar07@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 sm:px-8 mt-12 pt-8 border-t text-sm text-[hsl(var(--muted-foreground))] flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} FileNexa. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
