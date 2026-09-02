"use client";

import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Column<T> {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
}

export function DataTable<T extends { id: string | number }>({
  title,
  columns,
  rows: initialRows,
}: {
  title: string;
  columns: Column<T>[];
  rows: T[];
}) {
  const [rows, setRows] = useState(initialRows);

  const remove = (id: T["id"]) => setRows((r) => r.filter((row) => row.id !== id));

  return (
    <div className="bg-white rounded-2xl border border-primary/5 overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-primary/5">
        <h2 className="font-display text-xl font-bold text-primary">{title}</h2>
        <Button size="sm" onClick={() => alert("This would open an add-new form in a full backend build.")}>
          <Plus size={14} /> Add New
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-ink/40 text-xs uppercase tracking-wide">
              {columns.map((c) => (
                <th key={String(c.key)} className="px-5 py-3 font-semibold">{c.label}</th>
              ))}
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-primary/5">
                {columns.map((c) => (
                  <td key={String(c.key)} className="px-5 py-3.5 text-ink/70">
                    {c.render ? c.render(row) : String(row[c.key])}
                  </td>
                ))}
                <td className="px-5 py-3.5">
                  <div className="flex gap-2 justify-end">
                    <button onClick={() => alert("This would open an edit form in a full backend build.")} className="text-primary/60 hover:text-primary" aria-label="Edit">
                      <Pencil size={15} />
                    </button>
                    <button onClick={() => remove(row.id)} className="text-red-400 hover:text-red-600" aria-label="Delete">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr><td colSpan={columns.length + 1} className="px-5 py-8 text-center text-ink/40">No records.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
