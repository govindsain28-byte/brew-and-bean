"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { MenuItem } from "@/types";
import { formatINR } from "@/lib/utils";
import { RatingStars } from "@/components/ui/rating-stars";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";

export function ProductCard({ item }: { item: MenuItem }) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(item.id);

  return (
    <div className="card-lift group bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 flex flex-col">
      <Link href={`/menu/${item.slug}`} className="relative block aspect-square overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(item.id);
          }}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center"
          aria-label="Toggle wishlist"
        >
          <Heart size={15} className={wishlisted ? "fill-red-500 text-red-500" : "text-primary"} />
        </button>
        {item.isNew && <Badge variant="new" className="absolute top-2 left-2">New</Badge>}
        {item.isBestSeller && !item.isNew && <Badge variant="accent" className="absolute top-2 left-2">Bestseller</Badge>}
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-1">
          <span className={`w-3 h-3 border-2 rounded-sm flex items-center justify-center ${item.isVeg ? "border-green-600" : "border-red-600"}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? "bg-green-600" : "bg-red-600"}`} />
          </span>
          <RatingStars rating={item.rating} size={11} />
          <span className="text-[11px] text-ink/50">({item.reviewCount})</span>
        </div>
        <Link href={`/menu/${item.slug}`}>
          <h3 className="font-bold text-primary text-sm leading-snug hover:text-accent-dark transition-colors line-clamp-1">{item.name}</h3>
        </Link>
        <p className="text-ink/50 text-xs mt-1 line-clamp-2 flex-1">{item.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-primary">{formatINR(item.price)}</span>
          <Button size="sm" className="!px-3 !py-1.5 !text-xs" onClick={() => addToCart(item)}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
