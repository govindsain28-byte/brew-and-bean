"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const { signup } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    signup(form.name, form.email, form.phone);
    router.push("/account");
  };

  return (
    <div className="mx-auto max-w-sm px-5 py-24">
      <h1 className="font-display text-3xl font-bold text-primary text-center">Create Account</h1>
      <p className="text-ink/50 text-center text-sm mt-2">Join Brew & Bean Rewards and start earning points</p>

      <form onSubmit={submit} className="bg-white rounded-2xl border border-primary/5 p-6 mt-8 space-y-4">
        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email Address" className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
        <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number" className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
        <input required type="password" placeholder="Password" className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
        <Button type="submit" className="w-full">Create Account</Button>
      </form>
      <p className="text-center text-sm text-ink/50 mt-6">
        Already have an account? <Link href="/account/login" className="text-primary font-bold">Log in</Link>
      </p>
    </div>
  );
}
