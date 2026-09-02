"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/content";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="From the Journal" title="Stories & Guides" />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {posts.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link href={`/blog/${p.slug}`} className="card-lift block bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5">
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="text-accent-dark text-xs font-bold uppercase tracking-wide">{p.category}</span>
                  <h3 className="font-bold text-primary mt-2 leading-snug">{p.title}</h3>
                  <p className="text-ink/50 text-xs mt-2">{formatDate(p.publishedAt)} · {p.readTimeMinutes} min read</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
