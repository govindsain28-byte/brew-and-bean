"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getBestSellers } from "@/data/menu";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/menu/product-card";

export function BestSellers() {
  const items = getBestSellers(8);
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Fan Favourites" title="Our Best Sellers" subtitle="The dishes and drinks our regulars can't stop ordering." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
          {items.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <ProductCard item={item} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/menu" className="text-primary font-bold underline underline-offset-4 hover:text-accent">
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
