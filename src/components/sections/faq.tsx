"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const FAQS = [
  { q: "Do you take table reservations?", a: "Yes! You can reserve a table online through our Reservations page, choosing your date, time, guest count and seating preference." },
  { q: "Do you offer home delivery?", a: "Yes, we deliver across Vijayawada. You can choose delivery or pickup at checkout." },
  { q: "Are there vegetarian and vegan options?", a: "Absolutely — every item on our menu is clearly marked veg or non-veg, and several dishes (like our Mediterranean Buddha Bowl) are vegan-friendly." },
  { q: "Can I host a private event at Brew & Bean?", a: "Yes, we offer corporate offsite packages and birthday celebration packages with private dining space — see our Events page." },
  { q: "What payment methods do you accept?", a: "We accept Razorpay, Stripe, and Cash on Delivery at checkout." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="bg-white rounded-xl border border-primary/10 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-primary text-sm"
              >
                {f.q}
                <ChevronDown size={18} className={`shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && <div className="px-5 pb-4 text-ink/60 text-sm leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
