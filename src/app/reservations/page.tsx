"use client";

import { FormEvent, useState } from "react";
import { CalendarDays, Clock, Users, Armchair, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SEATING = ["Indoor", "Courtyard", "Private Dining", "Window Booth"];
const TIMES = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM", "9:30 PM"];

export default function ReservationsPage() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ date: "", time: "", guests: 2, seating: SEATING[0], name: "", phone: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.date || !form.time || !form.name || !form.phone) return;
    setDone(true);
  };

  if (done) {
    return (
      <div className="mx-auto max-w-lg px-5 py-24 text-center">
        <CheckCircle2 size={64} className="mx-auto text-green-600" />
        <h1 className="font-display text-3xl font-bold text-primary mt-6">Table Reserved!</h1>
        <p className="text-ink/60 mt-3">
          We&apos;ll see you on {form.date} at {form.time} for {form.guests} guest{form.guests > 1 ? "s" : ""} — {form.seating} seating.
        </p>
        <Button className="mt-8" onClick={() => setDone(false)}>Make Another Reservation</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-5 md:px-8 py-14">
      <h1 className="font-display text-3xl font-bold text-primary text-center">Reserve a Table</h1>
      <p className="text-ink/60 text-center mt-2">We&apos;ll hold your table so you don&apos;t have to wait.</p>

      <form onSubmit={submit} className="mt-10 bg-white rounded-2xl border border-primary/5 p-6 md:p-8 space-y-6">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-bold text-primary flex items-center gap-2 mb-2"><CalendarDays size={15} /> Date</label>
            <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
          </div>
          <div>
            <label className="text-sm font-bold text-primary flex items-center gap-2 mb-2"><Clock size={15} /> Time</label>
            <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent bg-white">
              <option value="">Select a time</option>
              {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-primary flex items-center gap-2 mb-2"><Users size={15} /> Guests</label>
          <div className="flex items-center gap-4">
            <button type="button" onClick={() => setForm({ ...form, guests: Math.max(1, form.guests - 1) })} className="w-10 h-10 rounded-full border border-primary/20 text-primary font-bold">−</button>
            <span className="font-bold text-lg w-8 text-center">{form.guests}</span>
            <button type="button" onClick={() => setForm({ ...form, guests: form.guests + 1 })} className="w-10 h-10 rounded-full border border-primary/20 text-primary font-bold">+</button>
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-primary flex items-center gap-2 mb-2"><Armchair size={15} /> Seating Preference</label>
          <div className="flex flex-wrap gap-2">
            {SEATING.map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => setForm({ ...form, seating: s })}
                className={`px-4 py-2 rounded-full text-xs font-bold border ${form.seating === s ? "bg-primary text-cream border-primary" : "border-primary/20 text-primary"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-bold text-primary mb-2 block">Full Name</label>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
          </div>
          <div>
            <label className="text-sm font-bold text-primary mb-2 block">Phone Number</label>
            <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
          </div>
        </div>

        <Button type="submit" className="w-full" size="lg">Confirm Reservation</Button>
      </form>
    </div>
  );
}
