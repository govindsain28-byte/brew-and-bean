import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { AuthProvider } from "@/context/auth-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";
import { BackToTop } from "@/components/shared/back-to-top";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { ChatbotWidget } from "@/components/shared/chatbot-widget";

export const metadata: Metadata = {
  metadataBase: new URL("https://brewandbean.in"),
  title: {
    default: "Brew & Bean | Premium Café in Vijayawada",
    template: "%s | Brew & Bean",
  },
  description:
    "Brew & Bean is Vijayawada's premium specialty coffee house — single-origin coffee, artisan bakes, curated dining, and live events in the heart of the city.",
  keywords: ["café in Vijayawada", "coffee shop Vijayawada", "specialty coffee", "premium café", "Brew & Bean"],
  openGraph: {
    title: "Brew & Bean | Premium Café in Vijayawada",
    description: "Every cup tells a story. Vijayawada's premium specialty coffee house.",
    url: "https://brewandbean.in",
    siteName: "Brew & Bean",
    images: [{ url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brew & Bean | Premium Café in Vijayawada",
    description: "Every cup tells a story. Vijayawada's premium specialty coffee house.",
    images: ["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80"],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "Brew & Bean",
              image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
              "@id": "https://brewandbean.in",
              url: "https://brewandbean.in",
              telephone: "+91-866-123-4567",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: "MG Road, Governorpet",
                addressLocality: "Vijayawada",
                addressRegion: "Andhra Pradesh",
                postalCode: "520002",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "07:00", closes: "23:00" },
              ],
            }),
          }}
        />
        <AuthProvider>
        <CartProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <BackToTop />
          <ChatbotWidget />
        </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
