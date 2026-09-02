"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { events } from "@/data/content";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function EventsPreview() {
  const upcoming = events.filter((e) => e.date !== "Flexible").slice(0, 3);
  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Don't Miss Out" title="Upcoming Events" />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {upcoming.map((e, i) => (
            <motion.div key={e.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-lift bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5">
              <div className="relative aspect-video">
                <img src={e.image} alt={e.title} className="w-full h-full object-cover" />
                <Badge variant="accent" className="absolute top-3 left-3">{e.type}</Badge>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-primary">{e.title}</h3>
                <p className="text-ink/50 text-xs mt-1">{formatDate(e.date)} · {e.time}</p>
                <p className="text-ink/60 text-sm mt-2 line-clamp-2">{e.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/events" className="text-primary font-bold underline underline-offset-4 hover:text-accent">
            See All Events →
          </Link>
        </div>
      </div>
    </section>
  );
}
