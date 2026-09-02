import type { Metadata } from "next";

export const metadata: Metadata = { title: "Policies", description: "Privacy policy, terms of service, and refund policy for Brew & Bean." };

export default function PoliciesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 md:px-8 py-14 prose-sm">
      <h1 className="font-display text-3xl font-bold text-primary mb-8">Policies</h1>

      <section className="mb-10">
        <h2 className="font-bold text-primary text-lg mb-2">Privacy Policy</h2>
        <p className="text-ink/60 text-sm leading-relaxed">
          We collect only the information needed to process your orders and reservations — name, contact details, and delivery address. We never sell your data to third parties. Payment details are processed securely through Razorpay and Stripe and are never stored on our servers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-bold text-primary text-lg mb-2">Terms of Service</h2>
        <p className="text-ink/60 text-sm leading-relaxed">
          By placing an order or reservation with Brew & Bean, you agree to provide accurate information and to honour scheduled reservations. We reserve the right to cancel orders in cases of unavailability, with a full refund issued.
        </p>
      </section>

      <section>
        <h2 className="font-bold text-primary text-lg mb-2">Refund Policy</h2>
        <p className="text-ink/60 text-sm leading-relaxed">
          Refunds for cancelled or unavailable orders are processed within 5-7 business days to the original payment method. For quality issues, please contact us within 24 hours of your order at hello@brewandbean.in.
        </p>
      </section>
    </div>
  );
}
