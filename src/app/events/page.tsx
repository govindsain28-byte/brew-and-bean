import Link from "next/link";
import type { Metadata } from "next";
import { events } from "@/data/content";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Events", description: "Live music, open mics, workshops and private event packages at Brew & Bean." };

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-14">
      <h1 className="font-display text-4xl font-bold text-primary text-center">Events</h1>
      <p className="text-ink/60 text-center mt-3">Live music, open mics, workshops, and private celebrations.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-14">
        {events.map((e) => (
          <div key={e.id} className="card-lift bg-white rounded-2xl overflow-hidden border border-primary/5 flex flex-col sm:flex-row">
            <img src={e.image} alt={e.title} className="w-full sm:w-40 h-40 object-cover shrink-0" />
            <div className="p-5 flex-1">
              <Badge variant="accent">{e.type}</Badge>
              <h3 className="font-bold text-primary mt-2">{e.title}</h3>
              <p className="text-ink/50 text-xs mt-1">{e.date === "Flexible" ? "Flexible scheduling" : formatDate(e.date)} · {e.time}</p>
              <p className="text-ink/60 text-sm mt-2 line-clamp-2">{e.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-primary text-sm">{e.price === 0 ? "Free" : `₹${e.price}`}</span>
                <Link href="/reservations"><Button size="sm">Reserve Spot</Button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
