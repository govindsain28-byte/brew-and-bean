"use client";

import { ButtonHTMLAttributes, forwardRef, MouseEvent, useState } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", onClick, children, ...props }, ref) => {
    const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const id = Date.now();
      setRipples((r) => [...r, { id, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size }]);
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
      onClick?.(e);
    };

    const variants = {
      primary: "bg-primary text-cream hover:bg-primary-dark shadow-premium",
      secondary: "bg-accent text-primary hover:bg-accent-dark",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-cream",
      ghost: "text-primary hover:bg-primary/10",
    };
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-[15px]",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "ripple-container relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
        {ripples.map((r) => (
          <span key={r.id} className="ripple" style={{ left: r.x, top: r.y, width: r.size, height: r.size }} />
        ))}
      </button>
    );
  }
);
Button.displayName = "Button";
