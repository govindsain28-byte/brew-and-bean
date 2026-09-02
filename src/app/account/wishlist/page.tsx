"use client";

import { useCart } from "@/context/cart-context";
import { menuItems } from "@/data/menu";
import { ProductCard } from "@/components/menu/product-card";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  const { wishlist } = useCart();
  const items = menuItems.filter((i) => wishlist.includes(i.id));

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-14">
      <h1 className="font-display text-3xl font-bold text-primary mb-8">Your Wishlist</h1>
      {items.length === 0 ? (
        <div className="text-center py-16">
          <Heart size={40} className="mx-auto text-primary/30" />
          <p className="text-ink/50 mt-4">Nothing here yet — tap the heart icon on any item to save it.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {items.map((i) => <ProductCard key={i.id} item={i} />)}
        </div>
      )}
    </div>
  );
}
