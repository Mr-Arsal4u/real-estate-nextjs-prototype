import Filters from "@/components/Filters";
import PropertyCard from "@/components/PropertyCard";
import { searchAndFilter } from "@/data/properties";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Listings",
  description: "Browse premium real estate listings with advanced filters.",
};

export default function ListingsPage({
  searchParams,
}: {
  searchParams: {
    q?: string;
    location?: string;
    minPrice?: string;
    maxPrice?: string;
    type?: string;
    bedrooms?: string;
  };
}) {
  const results = searchAndFilter(searchParams);
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold text-foreground">Property listings</h1>
      <p className="mt-1 text-sm text-foreground/70">
        Use filters to refine your search across our curated selection.
      </p>
      <div className="mt-6">
        <Suspense fallback={<div className="text-sm text-foreground/70">Loading filters…</div>}>
          <Filters />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {results.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>

      {results.length === 0 && (
        <div className="mt-12 rounded-lg border border-muted-2 bg-white p-8 text-center text-sm text-foreground/70">
          No properties match your criteria. Adjust filters to see more results.
        </div>
      )}
    </div>
  );
}
