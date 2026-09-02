import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Blog", description: "Stories, brewing guides, and news from Brew & Bean." };

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-14">
      <h1 className="font-display text-4xl font-bold text-primary text-center">The Journal</h1>
      <p className="text-ink/60 text-center mt-3">Brewing guides, sourcing stories, and life at Brew & Bean.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-14">
        {blogPosts.map((p) => (
          <Link key={p.id} href={`/blog/${p.slug}`} className="card-lift block bg-white rounded-2xl overflow-hidden border border-primary/5">
            <div className="aspect-video overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="text-accent-dark text-xs font-bold uppercase tracking-wide">{p.category}</span>
              <h2 className="font-display text-xl font-bold text-primary mt-2">{p.title}</h2>
              <p className="text-ink/60 text-sm mt-2 line-clamp-2">{p.excerpt}</p>
              <div className="flex items-center gap-3 mt-4">
                <img src={p.author.avatar} alt={p.author.name} className="w-8 h-8 rounded-full object-cover" />
                <div className="text-xs text-ink/50">
                  <div className="font-semibold text-ink/70">{p.author.name}</div>
                  {formatDate(p.publishedAt)} · {p.readTimeMinutes} min read
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
