"use client";

import { motion } from "framer-motion";
import { Leaf, Award, Users, Coffee } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const REASONS = [
  { icon: Coffee, title: "Single-Origin Beans", desc: "Hand-selected, direct-trade beans from Chikmagalur's finest shade-grown estates." },
  { icon: Users, title: "Trained Baristas", desc: "Every barista completes weeks of hands-on training before serving a single cup." },
  { icon: Leaf, title: "Sustainable Practices", desc: "Compostable packaging and zero-waste initiatives across our operations." },
  { icon: Award, title: "Award Recognition", desc: "Recognised as one of Andhra Pradesh's top specialty cafés three years running." },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Why Brew & Bean" title="Crafted With Care, Every Time" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-lift bg-white rounded-2xl p-7 shadow-sm border border-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent-dark mb-4">
                <r.icon size={22} />
              </div>
              <h3 className="font-bold text-primary text-lg">{r.title}</h3>
              <p className="text-ink/60 text-sm mt-2 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
