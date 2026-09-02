import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { menuItems, getItemBySlug } from "@/data/menu";
import { reviews } from "@/data/content";
import { ProductDetail } from "@/components/menu/product-detail";

export function generateStaticParams() {
  return menuItems.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getItemBySlug(params.slug);
  if (!item) return {};
  return {
    title: item.name,
    description: item.description,
    openGraph: { title: item.name, description: item.description, images: [{ url: item.image }] },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const item = getItemBySlug(params.slug);
  if (!item) notFound();
  const itemReviews = reviews.filter((r) => r.menuItemId === item.id);
  const related = menuItems.filter((i) => i.category === item.category && i.id !== item.id).slice(0, 4);
  return <ProductDetail item={item} reviews={itemReviews} related={related} />;
}
