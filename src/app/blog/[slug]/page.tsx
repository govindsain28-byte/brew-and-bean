import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/content";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, images: [{ url: post.image }] } };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-5 md:px-8 py-14">
      <span className="text-accent-dark text-xs font-bold uppercase tracking-wide">{post.category}</span>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2">{post.title}</h1>
      <div className="flex items-center gap-3 mt-5">
        <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
        <div className="text-sm text-ink/60">
          <div className="font-semibold text-ink/80">{post.author.name} · {post.author.role}</div>
          {formatDate(post.publishedAt)} · {post.readTimeMinutes} min read
        </div>
      </div>
      <img src={post.image} alt={post.title} className="w-full rounded-2xl object-cover aspect-video mt-8" />
      <p className="text-ink/70 leading-relaxed mt-8 text-[15px]">{post.content}</p>

      <div className="flex gap-2 flex-wrap mt-8">
        {post.tags.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold">#{t}</span>
        ))}
      </div>

      {more.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-xl font-bold text-primary mb-4">More Stories</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {more.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="block bg-white rounded-xl overflow-hidden border border-primary/5 card-lift">
                <img src={p.image} alt={p.title} className="w-full aspect-video object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-primary text-sm">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <Link href="/blog" className="text-primary font-bold underline underline-offset-4">← Back to Journal</Link>
      </div>
    </div>
  );
}
