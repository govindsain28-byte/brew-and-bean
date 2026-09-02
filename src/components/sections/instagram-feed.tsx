"use client";

import { galleryImages } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Instagram } from "lucide-react";

export function InstagramFeed() {
  const images = galleryImages.slice(6, 12);
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Follow Along" title="@brewandbean.vij" />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-10">
          {images.map((img) => (
            <a key={img.id} href="#" className="relative aspect-square rounded-lg overflow-hidden group">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                <Instagram size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
