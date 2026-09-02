"use client";

import { testimonials } from "@/data/content";
import { RatingStars } from "@/components/ui/rating-stars";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="What People Say" title="Loved by Our Regulars" />
        <div className="overflow-hidden mt-14 relative">
          <div className="flex gap-6 animate-marquee w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-80 shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-primary/5">
                <RatingStars rating={t.rating} />
                <p className="text-ink/70 text-sm mt-3 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-5">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-primary text-sm">{t.name}</div>
                    <div className="text-ink/50 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
