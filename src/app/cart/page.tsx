"use client";

import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatINR } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <ShoppingBag size={48} className="mx-auto text-primary/30" />
        <h1 className="font-display text-2xl font-bold text-primary mt-6">Your cart is empty</h1>
        <p className="text-ink/50 mt-2">Looks like you haven&apos;t added anything yet.</p>
        <Link href="/menu" className="inline-block mt-6"><Button>Browse Menu</Button></Link>
      </div>
    );
  }

  const delivery = subtotal > 500 ? 0 : 49;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;

  return (
    <div className="mx-auto max-w-5xl px-5 md:px-8 py-14">
      <h1 className="font-display text-3xl font-bold text-primary mb-8">Your Cart</h1>
      <div className="grid md:grid-cols-[1fr_320px] gap-10">
        <div className="space-y-4">
          {items.map((ci) => (
            <div key={ci.id} className="bg-white rounded-2xl p-4 border border-primary/5 flex gap-4">
              <img src={ci.menuItem.image} alt={ci.menuItem.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-bold text-primary text-sm">{ci.menuItem.name}</h3>
                  <button onClick={() => removeFromCart(ci.id)} className="text-ink/30 hover:text-red-500" aria-label="Remove">
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-ink/50 text-xs mt-1">{formatINR(ci.menuItem.price)} each</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-primary/20 rounded-full">
                    <button onClick={() => updateQuantity(ci.id, ci.quantity - 1)} className="w-7 h-7 flex items-center justify-center text-primary"><Minus size={13} /></button>
                    <span className="w-7 text-center text-sm font-bold">{ci.quantity}</span>
                    <button onClick={() => updateQuantity(ci.id, ci.quantity + 1)} className="w-7 h-7 flex items-center justify-center text-primary"><Plus size={13} /></button>
                  </div>
                  <span className="font-bold text-primary">{formatINR(ci.menuItem.price * ci.quantity)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 border border-primary/5 h-fit sticky top-24">
          <h3 className="font-bold text-primary mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm text-ink/60">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>{delivery === 0 ? "Free" : formatINR(delivery)}</span></div>
            <div className="flex justify-between"><span>Tax (5%)</span><span>{formatINR(tax)}</span></div>
          </div>
          <div className="border-t border-primary/10 mt-4 pt-4 flex justify-between font-bold text-primary text-lg">
            <span>Total</span><span>{formatINR(total)}</span>
          </div>
          <Link href="/checkout" className="block mt-6"><Button className="w-full">Proceed to Checkout</Button></Link>
        </div>
      </div>
    </div>
  );
}
