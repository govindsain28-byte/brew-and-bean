"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, User, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const { itemCount } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const toggleDark = () => {
    setDark((d) => !d);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-bold text-primary flex items-center gap-2">
          <span className="text-2xl">☕</span> Brew & Bean
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-accent",
                pathname === l.href ? "text-accent" : "text-primary"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggleDark} className="hidden md:flex p-2 rounded-full hover:bg-primary/10 text-primary" aria-label="Toggle dark mode">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href="/account" className="hidden md:flex p-2 rounded-full hover:bg-primary/10 text-primary" aria-label="Account">
            <User size={18} />
          </Link>
          <Link href="/cart" className="relative p-2 rounded-full hover:bg-primary/10 text-primary" aria-label="Cart">
            <ShoppingBag size={18} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-primary text-[10px] font-bold rounded-full w-4.5 h-4.5 min-w-[18px] min-h-[18px] flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <Link href="/reservations" className="hidden md:block">
            <Button size="sm">Reserve</Button>
          </Link>
          <button className="lg:hidden p-2 text-primary" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-primary font-semibold text-sm">
              {l.label}
            </Link>
          ))}
          <Link href="/reservations">
            <Button size="sm" className="w-full">Reserve a Table</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
