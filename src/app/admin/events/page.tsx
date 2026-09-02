"use client";

import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { events } from "@/data/content";

export default function AdminEventsPage() {
  return (
    <AdminShell>
      <DataTable title="Events" rows={events} columns={[{ key: "title", label: "Title" }, { key: "type", label: "Type" }, { key: "date", label: "Date" }, { key: "seatsLeft", label: "Seats Left" }]} />
    </AdminShell>
  );
}
