"use client";

import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";

const ORDERS = [
  { id: "BB482913", customer: "Sneha Reddy", total: "₹278", status: "Delivered", date: "2026-06-28" },
  { id: "BB471205", customer: "Vikram Chowdary", total: "₹608", status: "Preparing", date: "2026-06-29" },
  { id: "BB458812", customer: "Ananya Krishnan", total: "₹578", status: "Delivered", date: "2026-05-30" },
  { id: "BB447701", customer: "Rahul Varma", total: "₹349", status: "Out for Delivery", date: "2026-06-29" },
];

export default function AdminOrdersPage() {
  return (
    <AdminShell>
      <DataTable title="Orders" rows={ORDERS} columns={[{ key: "id", label: "Order ID" }, { key: "customer", label: "Customer" }, { key: "total", label: "Total" }, { key: "status", label: "Status" }, { key: "date", label: "Date" }]} />
    </AdminShell>
  );
}
