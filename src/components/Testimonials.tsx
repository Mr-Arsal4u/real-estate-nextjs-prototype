"use client";
import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Alex Morgan",
    title: "COO, Westview Logistics",
    quote:
      "Professional, proactive, and reliable. Reliance Realty delivered beyond expectations on a tight timeline.",
    rating: 5,
  },
  {
    name: "Priya Shah",
    title: "Founder, Nova Health",
    quote:
      "Their market insight and attention to detail helped us secure the perfect headquarters.",
    rating: 5,
  },
  {
    name: "Daniel Park",
    title: "Private Buyer",
    quote:
      "A premium experience from start to finish. The team made every step seamless.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const hasPrev = index > 0;
  const hasNext = index < TESTIMONIALS.length - 1;
  const t = TESTIMONIALS[index];

  function prev() {
    if (hasPrev) setIndex((i) => i - 1);
  }
  function next() {
    if (hasNext) setIndex((i) => i + 1);
  }

  return (
    <section className="mt-16 bg-charcoal py-16 text-offwhite">
      <div className="container">
        <h2 className="heading text-2xl font-semibold">What Clients Say</h2>
        <div className="relative mx-auto mt-8 max-w-3xl text-center">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-8 text-[96px] font-serif leading-none text-primary/70 select-none">
            “
          </div>
          <div className="mb-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <svg key={i} className={`h-5 w-5 ${i < t.rating ? 'text-primary' : 'text-offwhite/30'}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"/>
              </svg>
            ))}
          </div>
          <blockquote className="mx-auto px-4">
            <p className="text-xl italic leading-8 text-offwhite/95 md:text-2xl">
              {t.quote}
            </p>
          </blockquote>
          <div className="mx-auto mt-6 flex w-64 items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/60" />
            <div className="text-xs tracking-widest text-offwhite/80">
              {t.name.toUpperCase()}
            </div>
            <span className="h-px w-12 bg-primary/60" />
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-wide text-offwhite/60">
            {t.title}
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              disabled={!hasPrev}
              aria-label="Previous testimonial"
              className="rounded-full border border-offwhite/20 px-3 py-2 text-sm disabled:opacity-40"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={!hasNext}
              aria-label="Next testimonial"
              className="rounded-full border border-offwhite/20 px-3 py-2 text-sm disabled:opacity-40"
            >
              →
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-6 rounded-full ${i === index ? 'bg-primary' : 'bg-offwhite/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
