import { ToolCard } from "@/components/ToolCard";
import { FileImage, FileText, Image as ImageIcon, ArrowRightLeft, Sparkles } from "lucide-react";
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
    // {
    //   href: "/doc-to-pdf",
    //   title: "DOC to PDF",
    //   description: "Easily convert Microsoft Word documents (DOC/DOCX) to universally compatible PDF files.",
    //   icon: <FileText className="w-8 h-8" />,
    // },
    // {
    //   href: "/background-remover",
    //   title: "Background Remover",
    //   description: "Automatically remove image backgrounds with high precision AI right in your browser.",
    //   icon: <ImageIcon className="w-8 h-8" />,
    // },
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
