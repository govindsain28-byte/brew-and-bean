"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const MILESTONES = [
  { year: "2021", title: "Founded", desc: "Brew & Bean opens its doors on MG Road with a single espresso machine and a big dream." },
  { year: "2022", title: "First Expansion", desc: "Added the courtyard stage, launching our now-famous Thursday open mic nights." },
  { year: "2023", title: "Direct-Trade Sourcing", desc: "Partnered directly with three Chikmagalur estates for fully traceable, single-origin coffee." },
  { year: "2024", title: "Regional Recognition", desc: "Named one of Andhra Pradesh's top specialty cafés." },
  { year: "2025", title: "Full Menu Relaunch", desc: "Expanded to 14 categories and 50+ items across coffee, food, and desserts." },
  { year: "2026", title: "Today", desc: "Serving Vijayawada daily, from sunrise filter coffee to late-night mocktails." },
];

export function JourneyTimeline() {
  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading eyebrow="Our Journey" title="Milestones Along the Way" />
        <div className="relative mt-16 pl-8 border-l-2 border-accent/30 space-y-10">
          {MILESTONES.map((m, i) => (
            <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative">
              <span className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full bg-accent border-4 border-cream-dark" />
              <span className="text-accent-dark font-bold text-sm">{m.year}</span>
              <h3 className="font-display text-xl font-bold text-primary mt-1">{m.title}</h3>
              <p className="text-ink/60 text-sm mt-1">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
