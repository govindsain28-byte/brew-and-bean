"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, UtensilsCrossed, ShoppingCart, CalendarDays, Newspaper, PartyPopper, Image as ImageIcon, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/menu", label: "Menu", icon: UtensilsCrossed },
  { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { href: "/admin/reservations", label: "Reservations", icon: CalendarDays },
  { href: "/admin/blog", label: "Blog", icon: Newspaper },
  { href: "/admin/events", label: "Events", icon: PartyPopper },
  { href: "/admin/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/admin/coupons", label: "Coupons", icon: Tag },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 grid md:grid-cols-[220px_1fr] gap-8">
      <aside className="space-y-1">
        <h2 className="font-display text-lg font-bold text-primary mb-4 px-3">Admin Panel</h2>
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors",
              pathname === n.href ? "bg-primary text-cream" : "text-ink/60 hover:bg-primary/5"
            )}
          >
            <n.icon size={16} /> {n.label}
          </Link>
        ))}
      </aside>
      <main>{children}</main>
    </div>
  );
}
