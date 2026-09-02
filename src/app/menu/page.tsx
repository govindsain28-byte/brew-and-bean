"use client";

import { useMemo, useState } from "react";
import { Search, Mic, SlidersHorizontal } from "lucide-react";
import { menuItems, categoryLabels, categoryOrder } from "@/data/menu";
import { ProductCard } from "@/components/menu/product-card";
import { MenuCategory } from "@/types";

const PAGE_SIZE = 12;

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<MenuCategory | "all">("all");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "nonveg">("all");
  const [sort, setSort] = useState<"popular" | "price-low" | "price-high" | "rating">("popular");
  const [page, setPage] = useState(1);
  const [listening, setListening] = useState(false);

  const filtered = useMemo(() => {
    let items = menuItems.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));
    if (category !== "all") items = items.filter((i) => i.category === category);
    if (dietFilter !== "all") items = items.filter((i) => (dietFilter === "veg" ? i.isVeg : !i.isVeg));
    items = [...items].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return Number(b.isBestSeller) - Number(a.isBestSeller);
    });
    return items;
  }, [query, category, dietFilter, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const startVoiceSearch = () => {
    type RecognitionCtor = new () => {
      lang: string;
      onstart: () => void;
      onend: () => void;
      onresult: (e: { results: { [key: number]: { [key: number]: { transcript: string } } } }) => void;
      start: () => void;
    };
    const w = window as unknown as { webkitSpeechRecognition?: RecognitionCtor; SpeechRecognition?: RecognitionCtor };
    const Ctor = w.webkitSpeechRecognition || w.SpeechRecognition;
    if (!Ctor) {
      alert("Voice search isn't supported in this browser.");
      return;
    }
    const recognition = new Ctor();
    recognition.lang = "en-IN";
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (e) => {
      setQuery(e.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-14">
      <h1 className="font-display text-4xl font-bold text-primary text-center">Our Menu</h1>
      <p className="text-ink/60 text-center mt-3 max-w-lg mx-auto">
        {menuItems.length} items across {categoryOrder.length} categories — coffee, food, and everything in between.
      </p>

      <div className="mt-10 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
        <div className="relative flex-1">
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search for coffee, pizza, dessert..."
            className="w-full rounded-full border border-primary/15 pl-11 pr-11 py-3 text-sm outline-none focus:border-accent"
          />
          <button
            onClick={startVoiceSearch}
            className={`absolute right-3 top-1/2 -translate-y-1/2 ${listening ? "text-red-500 animate-pulse" : "text-ink/40"}`}
            aria-label="Voice search"
          >
            <Mic size={17} />
          </button>
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as typeof sort)}
          className="rounded-full border border-primary/15 px-4 py-3 text-sm outline-none bg-white"
        >
          <option value="popular">Sort: Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>

        <div className="flex gap-2 items-center bg-white border border-primary/15 rounded-full px-3 py-1.5">
          <SlidersHorizontal size={14} className="text-ink/40" />
          {(["all", "veg", "nonveg"] as const).map((d) => (
            <button
              key={d}
              onClick={() => {
                setDietFilter(d);
                setPage(1);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${dietFilter === d ? "bg-primary text-cream" : "text-ink/60"}`}
            >
              {d === "all" ? "All" : d === "veg" ? "Veg" : "Non-Veg"}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mt-6">
        <button
          onClick={() => {
            setCategory("all");
            setPage(1);
          }}
          className={`px-4 py-2 rounded-full text-xs font-bold ${category === "all" ? "bg-primary text-cream" : "bg-white border border-primary/15 text-primary"}`}
        >
          All
        </button>
        {categoryOrder.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c);
              setPage(1);
            }}
            className={`px-4 py-2 rounded-full text-xs font-bold ${category === c ? "bg-primary text-cream" : "bg-white border border-primary/15 text-primary"}`}
          >
            {categoryLabels[c]}
          </button>
        ))}
      </div>

      {pageItems.length === 0 ? (
        <div className="text-center py-20 text-ink/50">No items match your search.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {pageItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-9 h-9 rounded-full text-sm font-bold ${page === i + 1 ? "bg-primary text-cream" : "bg-white border border-primary/15 text-primary"}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
