"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80" alt="Café interior" className="rounded-2xl object-cover w-full h-48 md:h-64 card-lift" />
          <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80" alt="Seating area" className="rounded-2xl object-cover w-full h-48 md:h-64 mt-8 card-lift" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Our Story</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-3 leading-tight">
            Vijayawada deserved a café that matched the world&apos;s best
          </h2>
          <p className="text-ink/70 mt-5 leading-relaxed">
            Founded in 2021 by Priya Menon, Brew & Bean set out to bring direct-trade, single-origin coffee culture to the heart of Andhra Pradesh — pairing world-class beans with a warm, design-forward space built for lingering.
          </p>
          <Link href="/about" className="inline-block mt-7"><Button variant="outline">Our Full Story</Button></Link>
        </motion.div>
      </div>
    </section>
  );
}
