"use client";
import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  function prev() {
    if (hasPrev) setIndex((i) => i - 1);
  }
  function next() {
    if (hasNext) setIndex((i) => i + 1);
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-muted-2 bg-white shadow">
      <div className="relative h-[420px] w-full">
        <Image
          src={images[index]}
          alt={`Image ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      </div>
      <button
        onClick={prev}
        aria-label="Previous image"
        disabled={!hasPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded bg-white/90 px-3 py-2 text-sm font-medium shadow disabled:opacity-50"
      >
        Prev
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        disabled={!hasNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-white/90 px-3 py-2 text-sm font-medium shadow disabled:opacity-50"
      >
        Next
      </button>
      <div className="flex items-center gap-2 p-3">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-primary" : "bg-muted-2"}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
