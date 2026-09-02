"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream noise-overlay pt-10 pb-20 md:pt-16 md:pb-28">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=60')] bg-cover bg-center" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Vijayawada&apos;s Premium Café</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary leading-[1.05] mt-4">
            Every Cup <span className="text-gradient-gold">Tells a Story</span>
          </h1>
          <p className="text-ink/70 mt-6 text-base md:text-lg max-w-md leading-relaxed">
            Single-origin coffee, artisan bakes, and curated dining — crafted daily in the heart of the city.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/menu"><Button size="lg">Explore Menu</Button></Link>
            <Link href="/reservations"><Button size="lg" variant="outline">Reserve a Table</Button></Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative aspect-square rounded-full overflow-hidden shadow-premium mx-auto max-w-md animate-float"
        >
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80" alt="Signature coffee at Brew & Bean" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
