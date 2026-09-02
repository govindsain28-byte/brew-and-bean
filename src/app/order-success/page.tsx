"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrderSuccessPage() {
  const orderId = `BB${Math.floor(100000 + Math.random() * 900000)}`;
  return (
    <div className="mx-auto max-w-lg px-5 py-24 text-center">
      <CheckCircle2 size={64} className="mx-auto text-green-600" />
      <h1 className="font-display text-3xl font-bold text-primary mt-6">Order Placed!</h1>
      <p className="text-ink/60 mt-3">
        Your order <span className="font-bold text-primary">#{orderId}</span> has been confirmed. We&apos;ll have it ready soon.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
        <Link href="/menu"><Button variant="outline">Order More</Button></Link>
        <Link href="/account/orders"><Button>Track Order</Button></Link>
      </div>
    </div>
  );
}
