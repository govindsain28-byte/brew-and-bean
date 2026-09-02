import { AdminShell } from "@/components/admin/admin-shell";
import { menuItems } from "@/data/menu";
import { blogPosts, events, galleryImages } from "@/data/content";
import { TrendingUp, ShoppingBag, Users, Star } from "lucide-react";

const STATS = [
  { label: "Total Orders (30d)", value: "1,284", icon: ShoppingBag, delta: "+12.4%" },
  { label: "Revenue (30d)", value: "₹4,86,920", icon: TrendingUp, delta: "+8.1%" },
  { label: "Active Customers", value: "3,940", icon: Users, delta: "+5.6%" },
  { label: "Avg. Rating", value: "4.8 / 5", icon: Star, delta: "+0.1" },
];

export default function AdminDashboard() {
  return (
    <AdminShell>
      <h1 className="font-display text-2xl font-bold text-primary mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-primary/5 p-5">
            <div className="flex items-center justify-between">
              <s.icon size={20} className="text-accent-dark" />
              <span className="text-green-600 text-xs font-bold">{s.delta}</span>
            </div>
            <div className="font-display text-2xl font-bold text-primary mt-3">{s.value}</div>
            <div className="text-ink/50 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <div className="bg-white rounded-2xl border border-primary/5 p-5">
          <h3 className="font-bold text-primary text-sm mb-2">Menu Items</h3>
          <p className="text-3xl font-display font-bold text-primary">{menuItems.length}</p>
        </div>
        <div className="bg-white rounded-2xl border border-primary/5 p-5">
          <h3 className="font-bold text-primary text-sm mb-2">Blog Posts</h3>
          <p className="text-3xl font-display font-bold text-primary">{blogPosts.length}</p>
        </div>
        <div className="bg-white rounded-2xl border border-primary/5 p-5">
          <h3 className="font-bold text-primary text-sm mb-2">Upcoming Events</h3>
          <p className="text-3xl font-display font-bold text-primary">{events.length}</p>
        </div>
      </div>

      <p className="text-ink/40 text-xs mt-8">Gallery holds {galleryImages.length} images. This dashboard uses mock data — see the README for wiring a real backend.</p>
    </AdminShell>
  );
}
