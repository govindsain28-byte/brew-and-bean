"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Truck, Store, Tag, CreditCard, Wallet, Banknote } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatINR } from "@/lib/utils";
import { coupons } from "@/data/content";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
  const [payment, setPayment] = useState<"razorpay" | "stripe" | "cod">("razorpay");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<(typeof coupons)[number] | null>(null);
  const [couponMsg, setCouponMsg] = useState("");
  const [placing, setPlacing] = useState(false);

  const delivery = mode === "pickup" ? 0 : subtotal > 500 ? 0 : 49;
  const discount = appliedCoupon ? Math.round((subtotal * appliedCoupon.discountPercent) / 100) : 0;
  const tax = Math.round((subtotal - discount) * 0.05);
  const total = Math.max(0, subtotal - discount + delivery + tax);

  const applyCoupon = () => {
    const found = coupons.find((c) => c.code.toLowerCase() === couponCode.trim().toLowerCase());
    if (!found) {
      setCouponMsg("Invalid coupon code.");
      setAppliedCoupon(null);
      return;
    }
    if (subtotal < found.minOrderValue) {
      setCouponMsg(`Minimum order of ${formatINR(found.minOrderValue)} required.`);
      setAppliedCoupon(null);
      return;
    }
    setAppliedCoupon(found);
    setCouponMsg(`Applied — ${found.description}`);
  };

  const placeOrder = () => {
    if (items.length === 0) return;
    setPlacing(true);
    setTimeout(() => {
      clearCart();
      router.push("/order-success");
    }, 1200);
  };

  if (items.length === 0) {
    return <div className="mx-auto max-w-2xl px-5 py-24 text-center text-ink/50">Your cart is empty — add something from the menu first.</div>;
  }

  return (
    <div className="mx-auto max-w-5xl px-5 md:px-8 py-14">
      <h1 className="font-display text-3xl font-bold text-primary mb-8">Checkout</h1>
      <div className="grid md:grid-cols-[1fr_320px] gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-primary mb-3">Delivery Method</h3>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setMode("delivery")} className={`flex items-center gap-2 justify-center rounded-xl border-2 py-4 font-semibold text-sm ${mode === "delivery" ? "border-primary bg-primary/5 text-primary" : "border-primary/15 text-ink/50"}`}>
                <Truck size={17} /> Delivery
              </button>
              <button onClick={() => setMode("pickup")} className={`flex items-center gap-2 justify-center rounded-xl border-2 py-4 font-semibold text-sm ${mode === "pickup" ? "border-primary bg-primary/5 text-primary" : "border-primary/15 text-ink/50"}`}>
                <Store size={17} /> Pickup
              </button>
            </div>
          </div>

          {mode === "delivery" && (
            <div>
              <h3 className="font-bold text-primary mb-3">Delivery Address</h3>
              <textarea rows={3} placeholder="Flat / House no, Street, Landmark, Vijayawada" className="w-full rounded-xl border border-primary/15 p-4 text-sm outline-none focus:border-accent" />
            </div>
          )}

          <div>
            <h3 className="font-bold text-primary mb-3">Coupon Code</h3>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Tag size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
                <input
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Try WELCOME50"
                  className="w-full rounded-full border border-primary/15 pl-10 pr-4 py-3 text-sm outline-none focus:border-accent"
                />
              </div>
              <Button variant="outline" onClick={applyCoupon}>Apply</Button>
            </div>
            {couponMsg && <p className={`text-xs mt-2 ${appliedCoupon ? "text-green-600" : "text-red-500"}`}>{couponMsg}</p>}
          </div>

          <div>
            <h3 className="font-bold text-primary mb-3">Payment Method</h3>
            <div className="space-y-2">
              {[
                { id: "razorpay", label: "Razorpay (UPI / Cards / Netbanking)", icon: CreditCard },
                { id: "stripe", label: "Stripe (International Cards)", icon: Wallet },
                { id: "cod", label: "Cash on Delivery", icon: Banknote },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPayment(p.id as typeof payment)}
                  className={`w-full flex items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-sm font-semibold ${payment === p.id ? "border-primary bg-primary/5 text-primary" : "border-primary/15 text-ink/60"}`}
                >
                  <p.icon size={17} /> {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-primary/5 h-fit sticky top-24">
          <h3 className="font-bold text-primary mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm text-ink/60 max-h-48 overflow-y-auto">
            {items.map((ci) => (
              <div key={ci.id} className="flex justify-between">
                <span>{ci.menuItem.name} × {ci.quantity}</span>
                <span>{formatINR(ci.menuItem.price * ci.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-primary/10 mt-4 pt-4 space-y-2 text-sm text-ink/60">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
            {discount > 0 && <div className="flex justify-between text-green-600"><span>Discount</span><span>-{formatINR(discount)}</span></div>}
            <div className="flex justify-between"><span>Delivery</span><span>{delivery === 0 ? "Free" : formatINR(delivery)}</span></div>
            <div className="flex justify-between"><span>Tax</span><span>{formatINR(tax)}</span></div>
          </div>
          <div className="border-t border-primary/10 mt-4 pt-4 flex justify-between font-bold text-primary text-lg">
            <span>Total</span><span>{formatINR(total)}</span>
          </div>
          <Button className="w-full mt-6" onClick={placeOrder} disabled={placing}>
            {placing ? "Placing Order..." : `Pay ${formatINR(total)}`}
          </Button>
        </div>
      </div>
    </div>
  );
}
