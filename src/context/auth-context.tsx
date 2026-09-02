"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface AuthUser {
  name: string;
  email: string;
  phone: string;
  tier: "Bronze" | "Silver" | "Gold";
  points: number;
}

interface AuthContextValue {
  user: AuthUser | null;
  login: (email: string) => void;
  signup: (name: string, email: string, phone: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const DEFAULT_USER: AuthUser = { name: "Aditi Sharma", email: "aditi@example.com", phone: "+91 98765 43210", tier: "Silver", points: 1240 };

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("bb-user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const persist = (u: AuthUser | null) => {
    setUser(u);
    if (u) localStorage.setItem("bb-user", JSON.stringify(u));
    else localStorage.removeItem("bb-user");
  };

  const login = (email: string) => persist({ ...DEFAULT_USER, email });
  const signup = (name: string, email: string, phone: string) => persist({ name, email, phone, tier: "Bronze", points: 0 });
  const logout = () => persist(null);

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
