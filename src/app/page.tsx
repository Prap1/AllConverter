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
            FileNexa: The Ultimate Free Online File Converter
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))]">
            Experience fast, secure, and hassle-free online file conversion. We process most
            files entirely in your browser to guarantee your privacy. Convert, compress, and edit files for free!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>

        <AdBanner />

        <article className="max-w-4xl mx-auto mt-24 text-[hsl(var(--muted-foreground))] space-y-12 pb-12">
          <section>
            <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">What FileNexa Does</h2>
            <p className="leading-relaxed text-lg mb-4">
              Welcome to <strong>FileNexa</strong>, the premier online platform designed to handle all your file conversion and manipulation needs with unparalleled ease and speed. Whether you are a professional graphic designer needing to quickly change an image format, a student compiling research into a single PDF, or just someone trying to reduce a file size for an email attachment, FileNexa is your go-to solution.
            </p>
            <p className="leading-relaxed text-lg">
              At its core, FileNexa is a versatile, browser-based tool suite that allows you to transform files from one format to another seamlessly. We specialize in a wide array of document and image conversions, including but not limited to converting Images to PDF, PNG to JPG, JPG to PNG, and handling niche formats like JFIF. Beyond simple conversions, our platform offers advanced utilities such as PDF merging, image and PDF watermarking, image compression, and even passport photo generation. Our mission is to provide a robust, completely free, and highly accessible set of tools that streamline your digital workflow without the need to install any heavy, expensive software on your device.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">Core Features</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li><strong>Instant Upload & Processing:</strong> Drag and drop your files directly into the browser. With our cutting-edge client-side processing, your files are handled instantly without the wait times typical of server-based converters.</li>
              <li><strong>Uncompromised Security:</strong> Security is our top priority. The vast majority of our tools operate entirely within your browser (client-side). This means your sensitive documents and private photos never leave your device, ensuring complete data privacy and security.</li>
              <li><strong>Easy Sharing:</strong> Once your file is converted, merged, or compressed, you can download it instantly. Our clean output files are perfectly optimized for sharing via email, messaging apps, or cloud storage platforms.</li>
              <li><strong>Extensive Format Support:</strong> We support a comprehensive list of file formats. From standard JPEGs and PNGs to PDFs and JFIFs, our unified platform eliminates the need to use multiple different websites for different file types.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">The Benefits of Using FileNexa</h2>
            <p className="leading-relaxed text-lg mb-4">
              Choosing FileNexa brings a multitude of benefits that enhance both your productivity and peace of mind. First and foremost is <strong>convenience</strong>. Our user-friendly interface is designed to be intuitive, meaning you do not need any technical expertise to use our advanced tools. Everything is accessible with just a few clicks.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              Another significant benefit is <strong>cost-effectiveness</strong>. High-quality file conversion and editing software can be prohibitively expensive. FileNexa provides these premium features completely free of charge. You get professional-grade results without any hidden fees or subscription traps.
            </p>
            <p className="leading-relaxed text-lg">
              Furthermore, our commitment to <strong>client-side processing</strong> means you benefit from lightning-fast speeds. You are not reliant on our server bandwidth; the conversion happens as fast as your device can process it. This also translates to <strong>absolute privacy</strong>, making FileNexa the ideal choice for business professionals handling confidential documents or individuals managing personal photos.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">Common Use Cases</h2>
            <p className="leading-relaxed text-lg mb-4">
              FileNexa is incredibly versatile, catering to a diverse range of users and scenarios:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li><strong>Students and Educators:</strong> Combine multiple research papers, lecture notes, or assignments into a single, cohesive PDF document using our <em>Merge PDFs</em> tool. It makes submitting coursework and sharing study materials incredibly simple.</li>
              <li><strong>Web Developers and Designers:</strong> Optimize website load times by utilizing our <em>Compress Image</em> and format conversion tools (like PNG to JPG). Quickly generate necessary site assets with our <em>Favicon Generator</em>.</li>
              <li><strong>Business Professionals:</strong> Protect your proprietary documents and corporate presentations by applying custom text overlays using our <em>Watermark PDF</em> tool before distributing them to clients or stakeholders.</li>
              <li><strong>Photographers and Content Creators:</strong> Easily convert between high-quality formats (like JPG to PNG for transparency) or apply custom watermarks to your portfolio images using our <em>Watermark Image</em> feature to prevent unauthorized use.</li>
              <li><strong>Everyday Users:</strong> Quickly prepare documents for official applications by generating perfect, standard-sized photos with our <em>Passport Photo Maker</em>, or simply shrink a large photo album to share with family members via email.</li>
            </ul>
            <p className="leading-relaxed text-lg mt-6">
              Whatever your digital file requirements might be, FileNexa provides a fast, secure, and completely free platform to help you achieve your goals effortlessly. Start exploring our suite of tools today and experience the ultimate in online file conversion.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
