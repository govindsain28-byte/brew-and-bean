"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState<"credentials" | "otp">("credentials");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const submitCredentials = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStep("otp");
  };

  const verifyOtp = (e: FormEvent) => {
    e.preventDefault();
    login(email);
    router.push("/account");
  };

  return (
    <div className="mx-auto max-w-sm px-5 py-24">
      <h1 className="font-display text-3xl font-bold text-primary text-center">Welcome Back</h1>
      <p className="text-ink/50 text-center text-sm mt-2">Log in to your Brew & Bean account</p>

      <div className="bg-white rounded-2xl border border-primary/5 p-6 mt-8">
        {step === "credentials" ? (
          <>
            <form onSubmit={submitCredentials} className="space-y-4">
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
              <input required type="password" placeholder="Password" className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm outline-none focus:border-accent" />
              <Button type="submit" className="w-full">Continue</Button>
            </form>
            <div className="flex items-center gap-3 my-5">
              <div className="h-px bg-primary/10 flex-1" /><span className="text-xs text-ink/40">OR</span><div className="h-px bg-primary/10 flex-1" />
            </div>
            <button className="w-full border border-primary/15 rounded-full py-3 text-sm font-semibold text-primary flex items-center justify-center gap-2">
              Continue with Google
            </button>
          </>
        ) : (
          <form onSubmit={verifyOtp} className="space-y-4">
            <p className="text-sm text-ink/60">We sent a one-time code to <strong>{email}</strong> (demo: enter any 4 digits).</p>
            <input required value={otp} onChange={(e) => setOtp(e.target.value)} maxLength={4} placeholder="0000" className="w-full rounded-xl border border-primary/15 px-4 py-3 text-center text-lg tracking-[0.5em] outline-none focus:border-accent" />
            <Button type="submit" className="w-full">Verify & Log In</Button>
          </form>
        )}
        <p className="text-center text-sm text-ink/50 mt-6">
          New here? <Link href="/account/signup" className="text-primary font-bold">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
