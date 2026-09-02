import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "veg" | "nonveg" | "new";
  className?: string;
}) {
  const variants = {
    default: "bg-primary/10 text-primary",
    accent: "bg-accent text-primary",
    veg: "bg-green-100 text-green-700 border border-green-600",
    nonveg: "bg-red-100 text-red-700 border border-red-600",
    new: "bg-blue-100 text-blue-700",
  };
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide", variants[variant], className)}>
      {children}
    </span>
  );
}
