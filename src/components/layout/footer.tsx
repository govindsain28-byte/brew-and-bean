import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-cream mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl font-bold mb-4">☕ Brew & Bean</div>
          <p className="text-cream/70 text-sm leading-relaxed mb-4">
            Vijayawada&apos;s premium specialty coffee house. Every cup tells a story.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-accent">Explore</h4>
          <ul className="space-y-2.5 text-sm text-cream/70">
            {[["Menu", "/menu"], ["Gallery", "/gallery"], ["Events", "/events"], ["Blog", "/blog"], ["Reservations", "/reservations"]].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-accent transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-accent">Company</h4>
          <ul className="space-y-2.5 text-sm text-cream/70">
            {[["About Us", "/about"], ["Contact", "/contact"], ["Careers", "/about"], ["Policies", "/policies"]].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-accent transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-accent">Visit Us</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex gap-2"><MapPin size={16} className="shrink-0 mt-0.5" /> MG Road, Governorpet, Vijayawada</li>
            <li className="flex gap-2"><Phone size={16} className="shrink-0 mt-0.5" /> +91 866 123 4567</li>
            <li className="flex gap-2"><Mail size={16} className="shrink-0 mt-0.5" /> hello@brewandbean.in</li>
            <li className="flex gap-2"><Clock size={16} className="shrink-0 mt-0.5" /> 7:00 AM – 11:00 PM, Daily</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Brew & Bean Cafe. All rights reserved.
      </div>
    </footer>
  );
}
