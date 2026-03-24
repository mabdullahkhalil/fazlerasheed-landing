import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Forklift Spare Parts - Genuine & OEM | Fazlerasheed & Co.",
  description:
    "We supply genuine and OEM forklift spare parts for Jungheinrich, Still, Clark, Linde, Crown, Toyota, BT, Yale and more across Pakistan.",
};

const brands = [
  "Jungheinrich",
  "Still",
  "Clark",
  "Linde",
  "Crown",
  "Toyota",
  "BT",
  "Yale",
];

const partCategories = [
  {
    name: "Hydraulic Parts",
    image: "/images/parts/parts-hydraulic.jpg",
    href: "https://shop.fazlerasheed.com",
  },
  {
    name: "Tires & Wheels",
    image: "/images/parts/parts-tires.jpg",
    href: "https://shop.fazlerasheed.com",
  },
  {
    name: "Steering Parts",
    image: "/images/parts/parts-steering.jpg",
    href: "https://shop.fazlerasheed.com",
  },
  {
    name: "Transmission Parts",
    image: "/images/parts/parts-transmission.jpg",
    href: "https://shop.fazlerasheed.com",
  },
  {
    name: "Brake Parts",
    image: "/images/parts/parts-brake.jpg",
    href: "https://shop.fazlerasheed.com",
  },
  {
    name: "Filters",
    image: "/images/parts/parts-filters.jpg",
    href: "https://shop.fazlerasheed.com",
  },
  {
    name: "Engine Parts",
    image: "/images/parts/parts-engine.jpg",
    href: "https://shop.fazlerasheed.com",
  },
  {
    name: "Electrical Parts",
    image: "/images/parts/parts-electrical.jpg",
    href: "https://shop.fazlerasheed.com",
  },
  {
    name: "Chassis Parts",
    image: "/images/parts/parts-chassis.jpg",
    href: "https://shop.fazlerasheed.com",
  },
  {
    name: "Cooling Parts",
    image: "/images/parts/parts-cooling.jpg",
    href: "https://shop.fazlerasheed.com",
  },
  {
    name: "Attachments",
    image: "/images/parts/parts-attachments.jpg",
    href: "https://shop.fazlerasheed.com",
  },
  {
    name: "Fuel Parts",
    image: "/images/parts/parts-fuel.jpg",
    href: "https://shop.fazlerasheed.com",
  },
];

export default function PartsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <Image
          src="/images/hero.webp"
          alt="Fazlerasheed spare parts warehouse"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
          <h1 className="text-3xl font-bold leading-snug text-white font-heading md:text-4xl lg:text-[2.75rem]">
            Genuine &amp; OEM{" "}
            <span className="relative inline-block pb-2">
              <span className="text-accent">Forklift Spare Parts</span>
              <svg
                className="absolute bottom-0 left-0 h-2.5 w-full text-accent"
                viewBox="0 0 120 8"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5.5C8 2 14 8 20 5.5S32 2 38 5.5 50 2 56 5.5 68 2 74 5.5 86 2 92 5.5 104 2 110 5.5 116 4 118 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Delivered Across Pakistan
          </h1>

          <div className="mt-6 w-full rounded-xl border border-white/20 bg-white/15 px-5 py-4 text-center backdrop-blur-md lg:px-6 lg:py-5">
            <p className="text-sm leading-relaxed text-white/90 md:text-base">
              Fazl-e-Rasheed and Company is one of the major forklift parts
              suppliers in Pakistan, providing genuine and OEM parts for
              Jungheinrich, Still, Clark, Linde, Crown, Toyota, BT, Yale and
              more.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <section className="border-b border-border bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <p className="mr-2 text-xs font-semibold uppercase tracking-widest text-muted">
              Brands We Supply
            </p>
            <div className="hidden h-5 w-px bg-border sm:block" />
            {brands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-primary/15 bg-primary-light px-3.5 py-1 text-xs font-semibold text-primary"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + Hero Image */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light to-light-blue p-8 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
              <Image
                src="/images/parts/parts-hero.jpeg"
                alt="Forklift spare parts collection"
                width={580}
                height={530}
                className="relative mx-auto rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-4xl font-bold text-primary/15 font-heading">
                  12+
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Part Categories
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Everything Your Fleet Needs
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                Supply of spare parts within a reasonable time is an important
                part of our services. Our skilled team will respond to you
                straightforward and frankly to minimise stoppage in production.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                Our well-sorted stock, combined with a carefully selected
                network of suppliers, ensures short response times with
                well-known quality. Standard components are always kept in
                stock so that fast delivery is possible at all times.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                {[
                  "Genuine OEM Parts",
                  "Fast Delivery",
                  "Well-Sorted Stock",
                  "Expert Guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="https://shop.fazlerasheed.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
              >
                Browse All Parts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover/btn:translate-x-0.5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Category Grid */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Browse by Category
            </p>
            <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold text-foreground font-heading md:text-4xl">
              Spare Parts We Deal In
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted">
              From hydraulic systems to electrical components &mdash; we stock
              everything to keep your material handling equipment running.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {partCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-border bg-white transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="flex items-center justify-between px-4 py-3.5">
                  <h3 className="text-sm font-bold text-foreground font-heading">
                    {cat.name}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-primary"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 lg:py-24">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white font-heading md:text-4xl">
            Can&apos;t Find the Part You Need?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Send us the part number or describe what you need. Our team will
            source it for you from our network of global suppliers with fast
            delivery across Pakistan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl hover:shadow-black/10"
            >
              Request a Part
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover/btn:translate-x-0.5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            <a
              href="tel:+923336871970"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +92 333 6871970
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
