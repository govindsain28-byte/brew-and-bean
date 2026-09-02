import { Star } from "lucide-react";

export function RatingStars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? "fill-accent text-accent" : "fill-transparent text-accent/40"}
        />
      ))}
    </span>
  );
}
