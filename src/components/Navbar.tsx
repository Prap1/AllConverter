"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "/image-to-pdf", label: "Image to PDF" },
    { href: "/png-to-jpg", label: "PNG to JPG" },
    { href: "/jpg-to-png", label: "JPG to PNG" },
    { href: "/jfif-to-jpeg", label: "JFIF to JPEG" },
    { href: "/jfif-to-png", label: "JFIF to PNG" },
    { href: "/jpeg-to-jfif", label: "JPEG to JFIF" },
    { href: "/png-to-jfif", label: "PNG to JFIF" },
    { href: "/compress-image", label: "Compress Image" },
    { href: "/add-watermark", label: "Watermark Image" },
    { href: "/watermark-pdf", label: "Watermark PDF" },
    { href: "/merge-pdfs", label: "Merge PDFs" },
    { href: "/passport-photo-maker", label: "Passport Photo" },
    { href: "/favicon-generator", label: "Favicon Maker" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-[hsl(var(--background))]/80">
      <div className="container mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity">
            <div className="relative h-10 w-10 overflow-hidden rounded-md">
              <Image src="/logo.png" alt="FileNexa logo" fill sizes="40px" className="object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight text-[hsl(var(--foreground))]">
              FileNexa
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium rounded-md text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]/50 transition-colors flex items-center gap-1">
                All Tools
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-xl shadow-xl w-[400px] p-3 grid grid-cols-2 gap-1">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-3 py-2 text-sm font-medium rounded-md transition-colors text-left",
                        pathname === link.href
                          ? "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]"
                          : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]/50"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === "/about"
                  ? "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]"
                  : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]/50"
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === "/contact"
                  ? "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]"
                  : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]/50"
              )}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-[hsl(var(--secondary))] transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}

          <button
            className="md:hidden p-2 rounded-md hover:bg-[hsl(var(--secondary))] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t bg-[hsl(var(--background))] p-4 shadow-lg absolute w-full left-0 z-40">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "px-3 py-3 text-sm font-medium rounded-md transition-colors",
                  pathname === link.href
                    ? "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]"
                    : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
