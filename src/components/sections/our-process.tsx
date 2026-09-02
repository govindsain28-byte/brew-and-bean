"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const STEPS = [
  { n: "01", title: "Source", desc: "Direct-trade beans hand-selected from shade-grown Chikmagalur estates." },
  { n: "02", title: "Roast", desc: "Small-batch roasted in-house weekly for peak freshness." },
  { n: "03", title: "Brew", desc: "Precision brewed to order by trained baristas, cup by cup." },
  { n: "04", title: "Serve", desc: "Delivered with care — in the café, for pickup, or straight to your door." },
];

export function OurProcess() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="From Farm to Cup" title="Our Process" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {STEPS.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="font-display text-5xl font-bold text-accent/30 mb-3">{s.n}</div>
              <h3 className="font-bold text-primary text-lg">{s.title}</h3>
              <p className="text-ink/60 text-sm mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
