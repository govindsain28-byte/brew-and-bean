"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { menuItems } from "@/data/menu";
import { formatINR } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function TodaysSpecial() {
  const special = menuItems.find((i) => i.slug === "classic-filter-coffee") ?? menuItems[0];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark bg-primary text-cream rounded-3xl p-8 md:p-14 grid md:grid-cols-[1fr_auto] gap-8 items-center overflow-hidden relative noise-overlay"
        >
          <div>
            <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Today&apos;s Special</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold mt-3">{special.name}</h3>
            <p className="text-cream/70 mt-3 max-w-md">{special.description}</p>
            <div className="flex items-center gap-4 mt-6">
              <span className="text-2xl font-bold text-accent">{formatINR(special.price)}</span>
              <Link href={`/menu/${special.slug}`}><Button variant="secondary">Order Now</Button></Link>
            </div>
          </div>
          <img src={special.image} alt={special.name} className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-glow shrink-0 mx-auto animate-spin-slow" style={{ animationDuration: "20s" }} />
        </motion.div>
      </div>
    </section>
  );
}
