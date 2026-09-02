"use client";

import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { blogPosts } from "@/data/content";

export default function AdminBlogPage() {
  return (
    <AdminShell>
      <DataTable title="Blog Posts" rows={blogPosts} columns={[{ key: "title", label: "Title" }, { key: "category", label: "Category" }, { key: "publishedAt", label: "Published" }, { key: "readTimeMinutes", label: "Read Time" }]} />
    </AdminShell>
  );
}
