"use client";

import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";

const RESERVATIONS = [
  { id: 1, name: "Meera Suresh", guests: 4, date: "2026-06-30", time: "7:00 PM", seating: "Courtyard" },
  { id: 2, name: "Karthik Iyer", guests: 2, date: "2026-06-30", time: "8:00 PM", seating: "Window Booth" },
  { id: 3, name: "Priya Menon", guests: 6, date: "2026-07-01", time: "12:00 PM", seating: "Private Dining" },
];

export default function AdminReservationsPage() {
  return (
    <AdminShell>
      <DataTable title="Reservations" rows={RESERVATIONS} columns={[{ key: "name", label: "Name" }, { key: "guests", label: "Guests" }, { key: "date", label: "Date" }, { key: "time", label: "Time" }, { key: "seating", label: "Seating" }]} />
    </AdminShell>
  );
}
