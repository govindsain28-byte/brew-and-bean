"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "text-center max-w-2xl mx-auto" : "text-left max-w-2xl"}
    >
      {eyebrow && (
        <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase mb-3 inline-block">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight">
        {title}
      </h2>
      {subtitle && <p className="text-muted mt-4 text-[15px] md:text-base text-ink/70 leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
