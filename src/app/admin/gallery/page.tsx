"use client";

import { AdminShell } from "@/components/admin/admin-shell";
import { galleryImages } from "@/data/content";

export default function AdminGalleryPage() {
  return (
    <AdminShell>
      <h1 className="font-display text-2xl font-bold text-primary mb-6">Gallery</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {galleryImages.map((img) => (
          <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden group">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            <button
              onClick={() => alert("This would remove the image in a full backend build.")}
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-bold transition-opacity"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
