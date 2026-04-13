import Link from "next/link";
import { MoveRight } from "lucide-react";
import { type ReactNode } from "react";

interface ToolCardProps {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export function ToolCard({ href, title, description, icon }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-4 p-6 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-[hsl(var(--primary))]/50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-center justify-between z-10">
        <div className="p-3 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-lg">
          {icon}
        </div>
        <MoveRight className="w-5 h-5 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] group-hover:translate-x-1 transition-all duration-300" />
      </div>
      <div className="space-y-2 z-10">
        <h3 className="font-semibold text-lg text-[hsl(var(--card-foreground))] tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          {description}
        </p>
      </div>
    </Link>
  );
}
