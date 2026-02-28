import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { PROPERTIES } from "@/data/properties";

export default function Home() {
  const featured = PROPERTIES.slice(0, 6);
  return (
    <div>
      <section className="relative h-[88vh] min-h-[520px]">
        <Image
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury property"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="container relative z-10 flex h-full flex-col justify-center">
          <h1 className="heading max-w-3xl text-4xl font-semibold leading-tight text-offwhite md:text-6xl">
            Premium properties, tailored guidance, exceptional outcomes.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-offwhite/90">
            Discover curated listings and work with seasoned advisors who deliver with precision.
          </p>
          <div className="mt-8 max-w-3xl">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="container mt-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="heading text-xl font-semibold text-foreground">Featured listings</h2>
          <Link href="/listings" className="text-sm font-medium text-primary hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>

      <Services />
      <Testimonials />
      <Stats />

      <section className="container mt-16">
        <div className="flex flex-col items-start justify-between gap-4 rounded-lg border border-muted-2 bg-white p-8 shadow md:flex-row md:items-center">
          <div>
            <div className="text-lg font-semibold text-foreground">Ready to get started?</div>
            <p className="mt-1 text-sm text-foreground/70">
              Speak with a senior advisor to discuss your goals today.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-600"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
