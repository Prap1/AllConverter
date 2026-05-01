import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Guides – FileNexa | File Conversion Tips & Tutorials",
  description:
    "Learn about image formats, PDF tools, file compression, and more. In-depth guides and tutorials from the FileNexa team to help you work smarter with files.",
};

const posts = [
  {
    href: "/blog/jpg-vs-png",
    title: "JPG vs PNG: Which Image Format Should You Use?",
    excerpt:
      "A deep dive into the differences between JPG and PNG. Learn when to use each format, how they handle compression and transparency, and which is best for your project.",
    readTime: "6 min read",
    category: "Image Formats",
    date: "April 28, 2026",
  },
  {
    href: "/blog/how-to-reduce-image-size",
    title: "How to Reduce Image File Size Without Losing Quality",
    excerpt:
      "Large images slow down your website and fill up your storage. Learn the best techniques for shrinking image file sizes while keeping them visually sharp.",
    readTime: "7 min read",
    category: "Optimization",
    date: "April 25, 2026",
  },
  {
    href: "/blog/what-is-jfif",
    title: "What Is a JFIF File? Why Windows Saves Images as JFIF",
    excerpt:
      "Ever downloaded an image from the web and found it saved as a .jfif file? Find out what JFIF actually is, why Windows uses it, and how to easily convert it.",
    readTime: "5 min read",
    category: "File Formats",
    date: "April 22, 2026",
  },
  {
    href: "/blog/how-to-merge-pdfs",
    title: "How to Merge PDF Files for Free in 2026",
    excerpt:
      "Need to combine multiple PDFs into one document? This complete guide walks you through the best free methods — including how to do it directly in your browser.",
    readTime: "5 min read",
    category: "PDF Tools",
    date: "April 19, 2026",
  },
];

export default function BlogPage() {
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
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 text-[hsl(var(--primary))]" />
            Guides & Tutorials
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            FileNexa{" "}
            <span className="text-[hsl(var(--primary))]">Blog</span>
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            In-depth guides on image formats, PDF tools, file compression, and everything in between. Written to help you work smarter with files.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 flex flex-col gap-4 hover:border-[hsl(var(--primary))] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))]">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-bold text-[hsl(var(--foreground))] leading-snug mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[hsl(var(--border))]">
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">{post.date}</span>
                  <span className="flex items-center gap-1 text-sm font-medium text-[hsl(var(--primary))]">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
