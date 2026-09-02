import { MetadataRoute } from "next";
import { menuItems } from "@/data/menu";
import { blogPosts } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://brewandbean.in";
  const staticRoutes = [
    "", "/about", "/menu", "/gallery", "/reservations", "/events", "/blog", "/contact",
    "/cart", "/account", "/account/login", "/account/signup",
  ].map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));

  const menuRoutes = menuItems.map((item) => ({ url: `${base}/menu/${item.slug}`, lastModified: new Date() }));
  const blogRoutes = blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.publishedAt) }));

  return [...staticRoutes, ...menuRoutes, ...blogRoutes];
}
