"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { CartItem, MenuItem } from "@/types";

interface CartContextValue {
  items: CartItem[];
  wishlist: string[];
  addToCart: (item: MenuItem, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (itemId: string) => void;
  isWishlisted: (itemId: string) => boolean;
  subtotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("bb-cart");
      const rawWish = sessionStorage.getItem("bb-wishlist");
      if (raw) setItems(JSON.parse(raw));
      if (rawWish) setWishlist(JSON.parse(rawWish));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    sessionStorage.setItem("bb-cart", JSON.stringify(items));
  }, [items, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    sessionStorage.setItem("bb-wishlist", JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const addToCart = (item: MenuItem, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id && ci.selectedCustomizations.length === 0);
      if (existing) {
        return prev.map((ci) => (ci.id === existing.id ? { ...ci, quantity: ci.quantity + quantity } : ci));
      }
      return [
        ...prev,
        { id: `${item.id}-${Date.now()}`, menuItem: item, quantity, selectedCustomizations: [] },
      ];
    });
  };

  const removeFromCart = (cartItemId: string) => setItems((prev) => prev.filter((ci) => ci.id !== cartItemId));

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) return removeFromCart(cartItemId);
    setItems((prev) => prev.map((ci) => (ci.id === cartItemId ? { ...ci, quantity } : ci)));
  };

  const clearCart = () => setItems([]);

  const toggleWishlist = (itemId: string) =>
    setWishlist((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]));

  const isWishlisted = (itemId: string) => wishlist.includes(itemId);

  const subtotal = useMemo(
    () => items.reduce((sum, ci) => sum + ci.menuItem.price * ci.quantity, 0),
    [items]
  );
  const itemCount = useMemo(() => items.reduce((sum, ci) => sum + ci.quantity, 0), [items]);

  return (
    <CartContext.Provider
      value={{ items, wishlist, addToCart, removeFromCart, updateQuantity, clearCart, toggleWishlist, isWishlisted, subtotal, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
