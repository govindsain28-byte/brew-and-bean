"use client";

import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { coupons } from "@/data/content";

const rows = coupons.map((c, i) => ({ id: i, ...c }));

export default function AdminCouponsPage() {
  return (
    <AdminShell>
      <DataTable title="Coupons" rows={rows} columns={[{ key: "code", label: "Code" }, { key: "description", label: "Description" }, { key: "discountPercent", label: "Discount %" }, { key: "minOrderValue", label: "Min Order" }, { key: "expiresAt", label: "Expires" }]} />
    </AdminShell>
  );
}
