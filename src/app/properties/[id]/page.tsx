import Gallery from "@/components/Gallery";
import MapSection from "@/components/MapSection";
import AgentCard from "@/components/AgentCard";
import { PROPERTIES } from "@/data/properties";
import { AGENTS } from "@/data/agents";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Params = { id: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  const property = PROPERTIES.find((p) => p.id === params.id);
  return {
    title: property ? property.title : "Property",
    description: property ? `${property.bedrooms} bd · ${property.bathrooms} ba · ${property.area} sqft` : undefined,
  };
}

export default function PropertyDetail({ params }: { params: Params }) {
  const property = PROPERTIES.find((p) => p.id === params.id);
  if (!property) {
    return (
      <div className="container py-16">
        <div className="rounded-lg border border-muted-2 bg-white p-10 text-center shadow">
          <h1 className="text-2xl font-semibold text-foreground">Property not found</h1>
          <p className="mt-2 text-sm text-foreground/70">Please return to listings and try again.</p>
          <Link href="/listings" className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-charcoal hover:bg-primary-600">
            Back to listings
          </Link>
        </div>
      </div>
    );
  }
  const agent = AGENTS[(property.id.length + property.price) % AGENTS.length] ?? AGENTS[0];

  const priceFmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const price = priceFmt.format(property.price);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: property.title,
    address: property.location,
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.area,
      unitCode: "FTK",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: property.price,
    },
  };

  const cover = property.images[0];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative h-[52vh] min-h-[360px]">
        <Image src={cover} alt={property.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="container relative z-10 flex h-full flex-col justify-end pb-8">
          <div className="mb-2 text-sm text-offwhite/80">
            <Link className="hover:text-primary" href="/">Home</Link>
            <span className="mx-2 text-offwhite/40">/</span>
            <Link className="hover:text-primary" href="/listings">Listings</Link>
          </div>
          <h1 className="heading max-w-4xl text-4xl font-semibold text-offwhite md:text-5xl">
            {property.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <span className="rounded bg-primary px-3 py-1 text-sm font-medium text-charcoal">{price}</span>
            <span className="text-offwhite/90">{property.location}</span>
            <div className="flex items-center gap-4 text-offwhite/80">
              <span>{property.bedrooms} bd</span>
              <span>{property.bathrooms} ba</span>
              <span>{property.area} sqft</span>
              <span>{property.type}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Gallery images={property.images} />
          <div className="mt-6 rounded-lg border border-muted-2 bg-white p-6 shadow">
            <div className="text-base font-semibold text-foreground">Details</div>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-foreground/80 md:grid-cols-3">
              <li>
                <span className="font-medium">Bedrooms:</span> {property.bedrooms}
              </li>
              <li>
                <span className="font-medium">Bathrooms:</span> {property.bathrooms}
              </li>
              <li>
                <span className="font-medium">Area:</span> {property.area} sqft
              </li>
              <li>
                <span className="font-medium">Type:</span> {property.type}
              </li>
              <li>
                <span className="font-medium">Price:</span> {price}
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <MapSection address={property.location} />
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border border-muted-2 bg-white p-6 shadow">
            <div className="text-base font-semibold text-foreground">Your agent</div>
            <div className="mt-3">
              <AgentCard agent={agent} />
            </div>
            <a
              href="/contact"
              className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-charcoal transition hover:bg-primary-600"
            >
              Request details
            </a>
          </div>
          <div className="rounded-lg border border-muted-2 bg-offwhite p-6 text-sm text-foreground/80 shadow">
            <div className="text-base font-semibold text-foreground">Why this home</div>
            <p className="mt-2 leading-6">
              Premium finishes, thoughtful layout, and a location that balances access and privacy.
              Schedule a consultation for a tailored walkthrough and market perspective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
