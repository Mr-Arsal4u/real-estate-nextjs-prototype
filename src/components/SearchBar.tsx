"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (location) params.set("location", location);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    router.push(`/listings?${params.toString()}`);
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 rounded-xl border border-primary/40 bg-charcoal/70 p-4 shadow-lg backdrop-blur md:flex-row">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by keyword"
        className="w-full rounded border border-offwhite/20 bg-white/10 px-3 py-2 text-sm text-offwhite placeholder:text-offwhite/60 outline-none focus:border-primary"
      />
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="w-full rounded border border-offwhite/20 bg-white/10 px-3 py-2 text-sm text-offwhite placeholder:text-offwhite/60 outline-none focus:border-primary"
      />
      <input
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min Price"
        type="number"
        className="w-full rounded border border-offwhite/20 bg-white/10 px-3 py-2 text-sm text-offwhite placeholder:text-offwhite/60 outline-none focus:border-primary"
      />
      <input
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max Price"
        type="number"
        className="w-full rounded border border-offwhite/20 bg-white/10 px-3 py-2 text-sm text-offwhite placeholder:text-offwhite/60 outline-none focus:border-primary"
      />
      <button
        type="submit"
        className="whitespace-nowrap rounded-md bg-primary px-6 py-2 text-sm font-medium text-charcoal transition hover:bg-primary-600"
      >
        Search
      </button>
    </form>
  );
}
