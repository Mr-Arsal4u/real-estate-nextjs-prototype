"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const types = ["House", "Apartment", "Condo", "Townhouse", "Villa"];

export default function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [location, setLocation] = useState(searchParams.get("location") ?? "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") ?? "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") ?? "");
  const [bedrooms, setBedrooms] = useState(searchParams.get("bedrooms") ?? "");
  const [type, setType] = useState(searchParams.get("type") ?? "");

  useEffect(() => {
    setLocation(searchParams.get("location") ?? "");
    setMinPrice(searchParams.get("minPrice") ?? "");
    setMaxPrice(searchParams.get("maxPrice") ?? "");
    setBedrooms(searchParams.get("bedrooms") ?? "");
    setType(searchParams.get("type") ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.toString()]);

  function updateParams(k: string, v: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (!v) params.delete(k);
    else params.set(k, v);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="rounded-lg border border-muted-2 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
        <input
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            updateParams("location", e.target.value);
          }}
          placeholder="Location"
          className="w-full rounded border border-muted-2 px-3 py-2 text-sm outline-none focus:border-primary"
        />
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            updateParams("type", e.target.value);
          }}
          className="w-full rounded border border-muted-2 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
        >
          <option value="">Property type</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select
          value={bedrooms}
          onChange={(e) => {
            setBedrooms(e.target.value);
            updateParams("bedrooms", e.target.value);
          }}
          className="w-full rounded border border-muted-2 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
        >
          <option value="">Bedrooms</option>
          {Array.from({ length: 6 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={String(n)}>
              {n}+
            </option>
          ))}
        </select>
        <input
          value={minPrice}
          onChange={(e) => {
            setMinPrice(e.target.value);
            updateParams("minPrice", e.target.value);
          }}
          placeholder="Min price"
          type="number"
          className="w-full rounded border border-muted-2 px-3 py-2 text-sm outline-none focus:border-primary"
        />
        <input
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(e.target.value);
            updateParams("maxPrice", e.target.value);
          }}
          placeholder="Max price"
          type="number"
          className="w-full rounded border border-muted-2 px-3 py-2 text-sm outline-none focus:border-primary"
        />
      </div>
    </div>
  );
}
