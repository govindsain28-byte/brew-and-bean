"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Flame, Clock, Heart } from "lucide-react";
import { MenuItem, Review } from "@/types";
import { formatINR, formatDate } from "@/lib/utils";
import { RatingStars } from "@/components/ui/rating-stars";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/menu/product-card";
import { useCart } from "@/context/cart-context";

export function ProductDetail({ item, reviews, related }: { item: MenuItem; reviews: Review[]; related: MenuItem[] }) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [qty, setQty] = useState(1);

  const priceDelta = useMemo(() => {
    let delta = 0;
    item.customizations.forEach((c) => {
      const chosen = selected[c.id] || [];
      c.options.forEach((o) => {
        if (chosen.includes(o.id)) delta += o.priceDelta;
      });
    });
    return delta;
  }, [selected, item.customizations]);

  const totalPrice = (item.price + priceDelta) * qty;

  const toggleOption = (custId: string, optId: string, type: "single" | "multiple") => {
    setSelected((prev) => {
      const current = prev[custId] || [];
      if (type === "single") return { ...prev, [custId]: [optId] };
      const next = current.includes(optId) ? current.filter((o) => o !== optId) : [...current, optId];
      return { ...prev, [custId]: next };
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-14">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="rounded-3xl overflow-hidden aspect-square">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            {item.isBestSeller && <Badge variant="accent">Bestseller</Badge>}
            {item.isNew && <Badge variant="new">New</Badge>}
            {item.isSignature && <Badge variant="default">Signature</Badge>}
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary">{item.name}</h1>
          <div className="flex items-center gap-3 mt-3">
            <RatingStars rating={item.rating} />
            <span className="text-ink/50 text-sm">{item.rating} ({item.reviewCount} reviews)</span>
          </div>
          <p className="text-ink/70 mt-5 leading-relaxed">{item.longDescription}</p>

          <div className="flex items-center gap-5 mt-5 text-sm text-ink/60">
            <span className="flex items-center gap-1.5"><Clock size={15} /> {item.prepTimeMinutes} min</span>
            <span>{item.calories} kcal</span>
            {item.spiceLevel ? <span className="flex items-center gap-1"><Flame size={15} className="text-red-500" /> {"🌶️".repeat(item.spiceLevel)}</span> : null}
          </div>

          {item.customizations.length > 0 && (
            <div className="mt-8 space-y-6">
              {item.customizations.map((c) => (
                <div key={c.id}>
                  <h4 className="font-bold text-primary text-sm mb-2">{c.name} {c.required && <span className="text-red-500">*</span>}</h4>
                  <div className="flex flex-wrap gap-2">
                    {c.options.map((o) => {
                      const active = (selected[c.id] || []).includes(o.id);
                      return (
                        <button
                          key={o.id}
                          onClick={() => toggleOption(c.id, o.id, c.type)}
                          className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-colors ${active ? "bg-primary text-cream border-primary" : "border-primary/20 text-primary"}`}
                        >
                          {o.label} {o.priceDelta > 0 && `+${formatINR(o.priceDelta)}`}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center border border-primary/20 rounded-full">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-9 h-9 text-primary font-bold">−</button>
              <span className="w-8 text-center font-bold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="w-9 h-9 text-primary font-bold">+</button>
            </div>
            <span className="font-display text-2xl font-bold text-primary">{formatINR(totalPrice)}</span>
          </div>

          <div className="flex gap-3 mt-6">
            <Button size="lg" className="flex-1" onClick={() => addToCart(item, qty)}>Add to Cart</Button>
            <button
              onClick={() => toggleWishlist(item.id)}
              className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center shrink-0"
              aria-label="Wishlist"
            >
              <Heart size={18} className={isWishlisted(item.id) ? "fill-red-500 text-red-500" : "text-primary"} />
            </button>
          </div>

          {item.allergens.length > 0 && (
            <p className="text-xs text-ink/40 mt-5">Allergens: {item.allergens.join(", ")}</p>
          )}
        </div>
      </div>

      {reviews.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-primary mb-6">Reviews</h2>
          <div className="space-y-4">
            {reviews.map((r) => (
              <div key={r.id} className="bg-white rounded-2xl p-5 border border-primary/5 flex gap-4">
                <img src={r.avatar} alt={r.userName} className="w-10 h-10 rounded-full object-cover shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary text-sm">{r.userName}</span>
                    {r.verified && <Badge variant="default">Verified</Badge>}
                  </div>
                  <RatingStars rating={r.rating} size={12} />
                  <p className="text-ink/60 text-sm mt-1">{r.comment}</p>
                  <p className="text-ink/30 text-xs mt-1">{formatDate(r.date)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-primary mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((r) => (
              <ProductCard key={r.id} item={r} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <Link href="/menu" className="text-primary font-bold underline underline-offset-4">← Back to Menu</Link>
      </div>
    </div>
  );
}
