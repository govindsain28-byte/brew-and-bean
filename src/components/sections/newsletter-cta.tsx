"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="bg-primary text-cream rounded-3xl p-10 md:p-14 text-center noise-overlay">
          <h3 className="font-display text-2xl md:text-3xl font-bold">Join Our Newsletter</h3>
          <p className="text-cream/70 mt-2 max-w-md mx-auto text-sm">
            Get first access to new menu drops, events, and exclusive offers.
          </p>
          {sent ? (
            <p className="mt-6 text-accent font-semibold">Thanks for subscribing! 🎉</p>
          ) : (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-6">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-full px-5 py-3 text-ink text-sm outline-none"
              />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
