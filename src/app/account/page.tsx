"use client";

import Link from "next/link";
import { User, Package, Heart, Gift, LogOut } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";

export default function AccountPage() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-5 py-24 text-center">
        <User size={48} className="mx-auto text-primary/30" />
        <h1 className="font-display text-2xl font-bold text-primary mt-6">You&apos;re not signed in</h1>
        <p className="text-ink/50 mt-2">Log in to view your account, orders, and rewards.</p>
        <div className="flex gap-3 justify-center mt-6">
          <Link href="/account/login"><Button>Log In</Button></Link>
          <Link href="/account/signup"><Button variant="outline">Sign Up</Button></Link>
        </div>
      </div>
    );
  }

  const links = [
    { href: "/account/orders", label: "Order History", icon: Package },
    { href: "/account/wishlist", label: "Wishlist", icon: Heart },
    { href: "/account/loyalty", label: "Loyalty Rewards", icon: Gift },
  ];

  return (
    <div className="mx-auto max-w-3xl px-5 md:px-8 py-14">
      <div className="bg-white rounded-2xl border border-primary/5 p-6 flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-primary text-cream flex items-center justify-center font-bold text-xl">
          {user.name.charAt(0)}
        </div>
        <div>
          <h1 className="font-display text-xl font-bold text-primary">{user.name}</h1>
          <p className="text-ink/50 text-sm">{user.email}</p>
          <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-accent/20 text-accent-dark text-[11px] font-bold">{user.tier} Member · {user.points} pts</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="card-lift bg-white rounded-2xl border border-primary/5 p-6 flex flex-col items-center text-center gap-2">
            <l.icon size={24} className="text-accent-dark" />
            <span className="font-semibold text-primary text-sm">{l.label}</span>
          </Link>
        ))}
      </div>

      <button onClick={logout} className="flex items-center gap-2 text-red-500 font-semibold text-sm mt-8">
        <LogOut size={16} /> Log Out
      </button>
    </div>
  );
}
