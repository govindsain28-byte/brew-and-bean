"use client";

import { teamMembers } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Award } from "lucide-react";

const AWARDS = ["Best Specialty Café — Andhra Pradesh Hospitality Awards, 2024", "Top 10 Cafés in South India — Foodie Circuit, 2025", "Sustainable Business of the Year — Vijayawada Chamber of Commerce, 2025"];

export default function AboutPage() {
  return (
    <div>
      <section className="py-16 bg-cream-dark text-center">
        <div className="mx-auto max-w-3xl px-5">
          <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Our Story</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mt-4">Where Every Cup Begins With Purpose</h1>
          <p className="text-ink/70 mt-5 leading-relaxed">
            Brew & Bean was founded in 2021 by Priya Menon, a former specialty coffee roaster in Bengaluru, with one goal — bring a genuinely world-class café experience to Vijayawada. What began with a single espresso machine has grown into the city&apos;s most-loved gathering place for coffee lovers, remote workers, and weekend explorers alike.
          </p>
        </div>
      </section>

      <section className="py-20 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Meet the Team" title="The People Behind Brew & Bean" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {teamMembers.map((m) => (
            <div key={m.id} className="text-center">
              <img src={m.image} alt={m.name} className="w-32 h-32 rounded-full object-cover mx-auto shadow-premium" />
              <h3 className="font-bold text-primary mt-4">{m.name}</h3>
              <p className="text-accent-dark text-xs font-semibold">{m.role}</p>
              <p className="text-ink/60 text-sm mt-2 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-primary text-cream">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHeading eyebrow="Recognition" title="Awards & Accolades" align="center" />
          <div className="space-y-4 mt-10">
            {AWARDS.map((a) => (
              <div key={a} className="flex items-start gap-3 bg-cream/5 rounded-xl p-4">
                <Award size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-cream/80 text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
