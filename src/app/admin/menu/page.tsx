"use client";

import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { menuItems, categoryLabels } from "@/data/menu";
import { formatINR } from "@/lib/utils";

export default function AdminMenuPage() {
  return (
    <AdminShell>
      <DataTable
        title="Menu Items"
        rows={menuItems}
        columns={[
          { key: "name", label: "Name" },
          { key: "category", label: "Category", render: (r) => categoryLabels[r.category] },
          { key: "price", label: "Price", render: (r) => formatINR(r.price) },
          { key: "rating", label: "Rating" },
          { key: "isVeg", label: "Diet", render: (r) => (r.isVeg ? "Veg" : "Non-Veg") },
        ]}
      />
    </AdminShell>
  );
}
