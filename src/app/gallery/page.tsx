"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { galleryImages } from "@/data/content";
import { GalleryImage } from "@/types";

const CATEGORIES: (GalleryImage["category"] | "all")[] = ["all", "interior", "coffee", "food", "events", "people"];

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryImage["category"] | "all">("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const filtered = filter === "all" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-14">
      <h1 className="font-display text-4xl font-bold text-primary text-center">Gallery</h1>
      <p className="text-ink/60 text-center mt-3">A look inside the café, our coffee, and our community.</p>

      <div className="flex justify-center gap-2 flex-wrap mt-8">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-xs font-bold capitalize ${filter === c ? "bg-primary text-cream" : "bg-white border border-primary/15 text-primary"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 gap-4 mt-10 [column-fill:_balance]">
        {filtered.map((img) => (
          <button key={img.id} onClick={() => setLightbox(img)} className="mb-4 block w-full rounded-2xl overflow-hidden card-lift">
            <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={28} />
          </button>
          <img src={lightbox.src} alt={lightbox.alt} className="max-h-[85vh] max-w-full rounded-2xl object-contain" />
        </div>
      )}
    </div>
  );
}
