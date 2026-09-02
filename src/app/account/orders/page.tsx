"use client";

import { Package } from "lucide-react";
import { formatINR } from "@/lib/utils";

const MOCK_ORDERS = [
  { id: "BB482913", date: "2026-06-28", items: "Classic Filter Coffee, Butter Croissant", total: 278, status: "Delivered" },
  { id: "BB471205", date: "2026-06-15", items: "Margherita Pizza, Iced Caramel Macchiato", total: 608, status: "Delivered" },
  { id: "BB458812", date: "2026-05-30", items: "Mediterranean Buddha Bowl, Cold Brew", total: 578, status: "Delivered" },
];

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 md:px-8 py-14">
      <h1 className="font-display text-3xl font-bold text-primary mb-8">Order History</h1>
      <div className="space-y-4">
        {MOCK_ORDERS.map((o) => (
          <div key={o.id} className="bg-white rounded-2xl border border-primary/5 p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Package size={18} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-bold text-primary text-sm">#{o.id}</span>
                <span className="text-xs font-bold text-green-600">{o.status}</span>
              </div>
              <p className="text-ink/50 text-xs mt-1">{o.date}</p>
              <p className="text-ink/60 text-sm mt-1">{o.items}</p>
            </div>
            <span className="font-bold text-primary">{formatINR(o.total)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
