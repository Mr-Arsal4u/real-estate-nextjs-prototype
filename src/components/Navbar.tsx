"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    function onScroll() {
      setSolid(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${solid ? "border-b border-muted-2 bg-charcoal/95 backdrop-blur" : "bg-transparent"}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-primary text-charcoal">
            <span className="text-lg font-semibold">RR</span>
          </div>
          <span className={`text-lg font-semibold ${solid ? "text-offwhite" : "text-offwhite"}`}>Reliance Realty</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link className="text-sm tracking-[0.08em] text-offwhite/90 hover:text-primary" href="/listings">
            Listings
          </Link>
          <Link className="text-sm tracking-[0.08em] text-offwhite/90 hover:text-primary" href="/agents">
            Agents
          </Link>
          <Link className="text-sm tracking-[0.08em] text-offwhite/90 hover:text-primary" href="/about">
            About
          </Link>
          <Link className="text-sm tracking-[0.08em] text-offwhite/90 hover:text-primary" href="/contact">
            Contact
          </Link>
        </nav>
        <Link
          href="/contact"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-charcoal shadow-sm transition hover:bg-primary-600"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
