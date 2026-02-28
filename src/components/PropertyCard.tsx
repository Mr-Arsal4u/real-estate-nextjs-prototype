import Image from "next/image";
import Link from "next/link";

export type Property = {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "House" | "Apartment" | "Condo" | "Townhouse" | "Villa";
  images: string[];
  cover?: string;
  amenities?: string[];
};

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function PropertyCard({ property }: { property: Property }) {
  const cover = property.cover ?? property.images[0];
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group rounded-lg border border-muted-2 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
        <Image
          src={cover}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
        <div className="absolute left-3 top-3 rounded bg-white/90 px-2 py-1 text-xs font-medium text-primary shadow">
          {property.type}
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="truncate text-base font-semibold text-offwhite drop-shadow">
            {property.title}
          </div>
        </div>
      </div>
      <div className="space-y-2 p-4">
        <p className="text-sm text-foreground/70">{property.location}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">
            {formatPrice(property.price)}
          </span>
          <div className="flex items-center gap-3 text-xs text-foreground/70">
            <span>{property.bedrooms} bd</span>
            <span>{property.bathrooms} ba</span>
            <span>{property.area} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
