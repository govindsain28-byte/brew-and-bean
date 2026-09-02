"use client";

import { useAuth } from "@/context/auth-context";
import { Coffee, Gift, Star } from "lucide-react";

const TIERS = [
  { name: "Bronze", min: 0, perk: "5% off on your birthday" },
  { name: "Silver", min: 500, perk: "10% off + free size upgrade" },
  { name: "Gold", min: 1500, perk: "15% off + priority reservations + free dessert monthly" },
];

export default function LoyaltyPage() {
  const { user } = useAuth();
  const points = user?.points ?? 0;
  const tier = user?.tier ?? "Bronze";
  const nextTier = TIERS.find((t) => t.min > points);
  const progress = nextTier ? Math.min(100, (points / nextTier.min) * 100) : 100;

  return (
    <div className="mx-auto max-w-2xl px-5 md:px-8 py-14">
      <h1 className="font-display text-3xl font-bold text-primary mb-2">Loyalty Rewards</h1>
      <p className="text-ink/60 mb-8">Earn 1 point for every ₹10 spent. Redeem points for free drinks and food.</p>

      <div className="bg-primary text-cream rounded-2xl p-7 noise-overlay">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-wide">{tier} Member</span>
            <div className="text-3xl font-display font-bold mt-1">{points} pts</div>
          </div>
          <Star size={40} className="text-accent" />
        </div>
        {nextTier && (
          <>
            <div className="h-2 bg-cream/20 rounded-full mt-5 overflow-hidden">
              <div className="h-full bg-accent rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-cream/60 text-xs mt-2">{nextTier.min - points} points to {nextTier.name}</p>
          </>
        )}
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        {TIERS.map((t) => (
          <div key={t.name} className={`rounded-2xl p-5 border-2 ${tier === t.name ? "border-accent bg-accent/10" : "border-primary/10 bg-white"}`}>
            <Gift size={20} className="text-accent-dark" />
            <h3 className="font-bold text-primary mt-2">{t.name}</h3>
            <p className="text-ink/50 text-xs mt-1">{t.min}+ points</p>
            <p className="text-ink/60 text-xs mt-2">{t.perk}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-8 text-sm text-ink/50">
        <Coffee size={16} /> Redeem 200 points for a free filter coffee.
      </div>
    </div>
  );
}
