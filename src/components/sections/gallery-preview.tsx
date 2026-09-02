"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function GalleryPreview() {
  const images = galleryImages.slice(0, 6);
  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="A Peek Inside" title="Life at Brew & Bean" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14">
          {images.map((img, i) => (
            <motion.div key={img.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="aspect-square rounded-2xl overflow-hidden card-lift">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/gallery" className="text-primary font-bold underline underline-offset-4 hover:text-accent">
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
