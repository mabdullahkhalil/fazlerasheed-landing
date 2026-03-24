"use client";

import Image from "next/image";

const brands = [
  { src: "/images/brands/toyota.png", alt: "Toyota Material Handling forklift brand", width: 120 },
  { src: "/images/brands/linde.jpeg", alt: "Linde Material Handling forklift brand", width: 100 },
  { src: "/images/brands/jungheinrich.png", alt: "Jungheinrich warehouse equipment brand", width: 110 },
  { src: "/images/brands/still.jpeg", alt: "Still forklift and warehouse equipment brand", width: 100 },
  { src: "/images/brands/bt.png", alt: "BT by Toyota material handling brand", width: 80 },
  { src: "/images/brands/hawker.png", alt: "Hawker traction batteries brand", width: 110 },
  { src: "/images/brands/eternity.png", alt: "Eternity Technologies industrial batteries brand", width: 100 },
];

function BrandSet() {
  return (
    <div className="flex shrink-0 items-center gap-14">
      {brands.map((brand) => (
        <div
          key={brand.alt}
          className="flex shrink-0 items-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
        >
          <Image
            src={brand.src}
            alt={brand.alt}
            width={brand.width}
            height={40}
            className="h-8 w-auto object-contain md:h-10"
          />
        </div>
      ))}
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="border-y border-border/50 bg-white py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted">
          Authorized Dealer of Premium Brands
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

        {/* Two identical sets side by side, animate the wrapper */}
        <div className="flex w-max animate-[ticker_6s_linear_infinite] gap-14 hover:[animation-play-state:paused]">
          <BrandSet />
          <BrandSet />
        </div>
      </div>
    </section>
  );
}
