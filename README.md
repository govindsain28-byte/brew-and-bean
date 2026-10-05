# Brew & Bean-Premium Café Website

A complete, production-ready Next.js 15 website for **Brew & Bean**, a premium specialty coffee café in Vijayawada, India. Built with the App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15** (App Router, Server Components, `generateStaticParams`, `generateMetadata`)
- **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS 3** with a custom premium design system (primary `#3E2723`, accent `#C89B3C`, cream `#F8F4EE`, dark `#1A1A1A`)
- **Framer Motion** for scroll reveals, page transitions, and micro-interactions
- **Lucide React** icons
- SEO: per-page metadata, Open Graph, JSON-LD structured data, `sitemap.ts`, `robots.ts`
- PWA-ready manifest (`public/manifest.json`)

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build
npm run start   # production server
```

This project builds cleanly with `npm run build` (verified) and deploys to Vercel with zero configuration — just connect the repo and deploy.

## What's Included

**Public site:** Home (hero, best sellers, today's special, about, why-us, journey timeline, process, gallery preview, testimonials, Instagram feed, upcoming events, blog preview, FAQ, newsletter), full Menu with search/filter/sort/pagination across 14 categories and 51 items, individual product pages with customizations and reviews, Cart, Checkout (delivery/pickup, coupon codes, Razorpay/Stripe/COD selection), Order Success, Table Reservations (date/time/guests/seating), About (founder story, timeline, team, awards), Gallery (masonry + lightbox, category filters), Blog (list + article pages), Events, Contact (map, hours, WhatsApp).

**Account area:** Login (email/password + OTP step + Google button), Signup, Forgot Password, Account Overview, Order History, Wishlist, Loyalty Rewards (Bronze/Silver/Gold tiers, points redemption).

**Admin panel:** Analytics dashboard, Menu management, Orders, Reservations, Blog, Events, Gallery, Coupons — all with working add/edit/delete UI backed by mock data.

**Extras:** Floating WhatsApp button, AI-style chatbot widget (rule-based FAQ assistant), voice search on the Menu page (Web Speech API), scroll progress bar, back-to-top button, dark mode toggle, ripple button effects, glassmorphism navbar, noise-texture overlays.

## Data Layer

All content (menu items, blog posts, gallery images, events, testimonials, team, coupons, reviews) lives in `src/data/*.ts` as strongly-typed mock data using real Unsplash imagery. This makes the site fully functional and deployable today. To connect a real backend:

1. Create Supabase tables mirroring the TypeScript interfaces in `src/types/index.ts` (`MenuItem`, `BlogPost`, `EventItem`, `Review`, `Coupon`, etc.)
2. Replace the functions in `src/data/menu.ts` and `src/data/content.ts` with Supabase queries (`src/lib/supabase.ts` — add your client here)
3. Wire the Cart/Checkout flow in `src/app/checkout/page.tsx` to real Razorpay/Stripe order-creation API routes under `src/app/api/`
4. Replace `src/context/auth-context.tsx` with real authentication (Supabase Auth, NextAuth, or Clerk)

See `.env.example` for the environment variables needed for a full backend integration.

## Fonts

This build uses a system-font stack (`Georgia`/`ui-serif` for display, native OS sans-serif) so it renders identically in any environment, including fully offline. For the premium editorial look shown in the original design brief, swap in Google Fonts via `next/font/google`:

```tsx
import { Fraunces, Manrope } from "next/font/google";
```

and apply the returned `variable` classNames on the `<html>` tag in `src/app/layout.tsx` — the Tailwind config already references `--font-fraunces` / `--font-manrope`.

## Folder Structure

```
src/
  app/                 route segments (App Router)
  components/
    layout/            navbar, footer
    sections/           home page sections
    menu/               product card, product detail, menu browser
    reservations/        reservation form
    gallery/, blog/, contact/, account/, admin/
    shared/             chatbot, whatsapp button, newsletter, scroll progress
    ui/                 button, badge, rating stars, section heading
  context/             cart-context, auth-context
  data/                menu.ts, content.ts (all mock content)
  lib/                 utils.ts (cn, formatINR, slugify, formatDate)
  types/               shared TypeScript interfaces
```

## Notes on Scope

This is a frontend-complete, deploy-ready Next.js application using mock/local data instead of a live database or payment gateway — cart, checkout, reservations, and admin actions all work end-to-end in the browser session but don't persist to a server. This was a deliberate scope choice to deliver a fully working, polished UI across every requested page in one build. Wiring Supabase, Razorpay/Stripe, and real auth is a follow-up step (see "Data Layer" above) and is a much smaller lift now that every UI surface already exists.
