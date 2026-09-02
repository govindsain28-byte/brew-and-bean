"use client";

import { FormEvent, useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-14">
      <h1 className="font-display text-4xl font-bold text-primary text-center">Get in Touch</h1>
      <p className="text-ink/60 text-center mt-3">We&apos;d love to hear from you.</p>

      <div className="grid md:grid-cols-2 gap-10 mt-14">
        <div>
          <div className="rounded-2xl overflow-hidden aspect-video bg-primary/10 flex items-center justify-center text-primary/40 map-box">
            <iframe
              title="Brew & Bean location map"
              className="w-full h-full border-0"
              loading="lazy"
              src="https://maps.google.com/maps?q=Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
          <div className="space-y-4 mt-6 text-sm text-ink/70">
            <div className="flex gap-3"><MapPin size={18} className="text-accent-dark shrink-0" /> MG Road, Governorpet, Vijayawada, Andhra Pradesh 520002</div>
            <div className="flex gap-3"><Phone size={18} className="text-accent-dark shrink-0" /> +91 866 123 4567</div>
            <div className="flex gap-3"><Mail size={18} className="text-accent-dark shrink-0" /> hello@brewandbean.in</div>
            <div className="flex gap-3"><Clock size={18} className="text-accent-dark shrink-0" /> Open daily, 7:00 AM – 11:00 PM</div>
          </div>
          <a href="https://wa.me/918661234567" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
            <Button variant="secondary">Chat on WhatsApp</Button>
          </a>
        </div>

        <div className="bg-white rounded-2xl border border-primary/5 p-6 md:p-8">
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 size={48} className="mx-auto text-green-600" />
              <p className="font-bold text-primary mt-4">Thanks! We&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <input required placeholder="Your Name" className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
              <input required type="email" placeholder="Email Address" className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
              <input placeholder="Phone Number" className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
              <textarea required rows={5} placeholder="Your Message" className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
