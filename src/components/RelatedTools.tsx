import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedTool {
  href: string;
  title: string;
  description: string;
}

interface RelatedToolsProps {
  tools: RelatedTool[];
}

export function RelatedTools({ tools }: RelatedToolsProps) {
  if (!tools || tools.length === 0) return null;

  return (
    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-8 space-y-4">
      <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">Related Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group flex items-start gap-3 p-4 rounded-xl border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 transition-all duration-200"
          >
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                {tool.title}
              </p>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5 leading-relaxed">
                {tool.description}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] flex-shrink-0 mt-0.5 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
