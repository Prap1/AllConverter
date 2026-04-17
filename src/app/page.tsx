import { ToolCard } from "@/components/ToolCard";
import { FileImage, FileText, Image as ImageIcon, ArrowRightLeft, Sparkles, Sliders, Type, Copy, PlusSquare } from "lucide-react";
import { AdBanner } from "@/components/AdBanner";

export default function Home() {
  const tools = [
    {
      href: "/image-to-pdf",
      title: "Image to PDF",
      description: "Convert multiple JPG or PNG images into a single, beautifully aligned PDF document.",
      icon: <FileImage className="w-8 h-8" />,
    },
    {
      href: "/png-to-jpg",
      title: "PNG to JPG",
      description: "Instantly convert PNG files to JPG format while preserving excellent image quality.",
      icon: <ArrowRightLeft className="w-8 h-8" />,
    },
    {
      href: "/jpg-to-png",
      title: "JPG to PNG",
      description: "Quickly convert your JPG pictures to PNG format for transparency and better quality.",
      icon: <ImageIcon className="w-8 h-8" />,
    },
    {
      href: "/jfif-to-png",
      title: "JFIF to PNG",
      description: "Instantly convert JFIF files to standard PNG format for better compatibility.",
      icon: <ImageIcon className="w-8 h-8" />,
    },
    {
      href: "/png-to-jfif",
      title: "PNG to JFIF",
      description: "Quickly convert PNG files to JFIF image sequences for specific application requirements.",
      icon: <ArrowRightLeft className="w-8 h-8" />,
    },
    {
      href: "/jfif-to-jpeg",
      title: "JFIF to JPEG",
      description: "Turn less-common JFIF files into universally accepted JPEG formats.",
      icon: <ArrowRightLeft className="w-8 h-8" />,
    },
    {
      href: "/jpeg-to-jfif",
      title: "JPEG to JFIF",
      description: "Convert standard JPEGs to JFIFs instantly in your browser securely.",
      icon: <ArrowRightLeft className="w-8 h-8" />,
    },
    {
      href: "/merge-pdfs",
      title: "Merge PDFs",
      description: "Combine multiple PDF documents into a single PDF file securely in your browser.",
      icon: <PlusSquare className="w-8 h-8" />,
    },
    {
      href: "/add-watermark",
      title: "Watermark Image",
      description: "Protect your images by stamping them with custom text overlays.",
      icon: <Copy className="w-8 h-8" />,
    },
    {
      href: "/watermark-pdf",
      title: "Watermark PDF",
      description: "Securely embed diagonal text watermarks onto all pages of your PDF document.",
      icon: <Type className="w-8 h-8" />,
    },
    {
      href: "/compress-image",
      title: "Compress Image",
      description: "Reduce image file sizes for free online. Make JPG, PNG, or WebP smaller.",
      icon: <Sliders className="w-8 h-8" />,
    },
    {
      href: "/favicon-generator",
      title: "Favicon Generator",
      description: "Create standard favicon.ico and high-res web icons from any image.",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      href: "/passport-photo-maker",
      title: "Passport Photo Maker",
      description: "Generate print-ready passport size photos with custom sizes and backgrounds.",
      icon: <FileImage className="w-8 h-8" />,
    },
  ];

  return (
    <div className="flex-1 w-full bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 sm:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
            Every File Converter You Need,
            <span className="text-[hsl(var(--primary))] block">All in One Place.</span>
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))]">
            Fast, secure, and hassle-free online file conversion. We process most
            files entirely in your browser to guarantee your privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>

        <AdBanner />
      </div>
    </div>
  );
}
