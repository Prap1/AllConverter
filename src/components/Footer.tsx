import Link from "next/link";
import { Globe, Mail, Link as LinkIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-[hsl(var(--background))] py-8 md:py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <span className="font-bold tracking-tight text-lg mb-4 block text-[hsl(var(--foreground))]">
            AllConverter
          </span>
          <p className="text-[hsl(var(--muted-foreground))] text-sm max-w-sm">
            Your all-in-one suite for lightning fast, secure, and fully private file conversions.
            Built with modern web technologies.
          </p>
        </div>

        {/* Tools */}
        <div>
          <h3 className="font-semibold text-[hsl(var(--foreground))] mb-4">Tools</h3>
          <ul className="flex flex-col gap-2 text-sm text-[hsl(var(--muted-foreground))]">
            <li><Link href="/image-to-pdf" className="hover:text-[hsl(var(--primary))] transition-colors">Image to PDF</Link></li>
            <li><Link href="/png-to-jpg" className="hover:text-[hsl(var(--primary))] transition-colors">PNG to JPG</Link></li>
            <li><Link href="/jpg-to-png" className="hover:text-[hsl(var(--primary))] transition-colors">JPG to PNG</Link></li>
            <li><Link href="/passport-photo-maker" className="hover:text-[hsl(var(--primary))] transition-colors">Passport Photo</Link></li>
            <li><Link href="/favicon-generator" className="hover:text-[hsl(var(--primary))] transition-colors">Favicon Generator</Link></li>
            {/* <li><Link href="/doc-to-pdf" className="hover:text-[hsl(var(--primary))] transition-colors">DOC to PDF</Link></li> */}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-[hsl(var(--foreground))] mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-sm text-[hsl(var(--muted-foreground))]">
            <li><Link href="/about" className="hover:text-[hsl(var(--primary))] transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[hsl(var(--primary))] transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-[hsl(var(--primary))] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[hsl(var(--primary))] transition-colors">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-[hsl(var(--foreground))] mb-4">Connect</h3>
          <div className="flex gap-3 mb-4">
            <a href="#" className="p-2 bg-[hsl(var(--secondary))] rounded-md text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="mailto:praphoolkumar07@gmail.com" className="p-2 bg-[hsl(var(--secondary))] rounded-md text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-[hsl(var(--secondary))] rounded-md text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition-colors">
              <LinkIcon className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            praphoolkumar07@gmail.com
          </p>
          <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
            +91 6207982659
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 sm:px-8 mt-12 pt-8 border-t text-sm text-[hsl(var(--muted-foreground))] flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} AllConverter. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
