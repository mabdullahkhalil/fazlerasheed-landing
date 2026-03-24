import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Warehousing Equipment, Spare Parts & Traction Batteries | Fazlerasheed & Co.",
  description:
    "Our battery operated warehousing equipment includes Power Pallets, Fork Lifters, Reach Trucks, Tow Trucks and Hand Pallets along with best services and spare parts.",
  alternates: { canonical: "https://fazlerasheed.com/products" },
};

const equipmentTypes = [
  { label: "Forklifts", href: "/products/forklifts" },
  { label: "Reach Trucks", href: "/products/reach-trucks" },
  { label: "Power Pallets", href: "/products/power-pallets" },
  { label: "Tow Trucks", href: "/products/tow-trucks" },
  { label: "Order Pickers", href: "/products/order-pickers" },
  { label: "Stackers", href: "/products/stackers" },
  { label: "Hand Pallets", href: "/products/hand-pallets" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
          <nav className="mb-4 text-center text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white/80">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Products</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            Pakistan&apos;s Leading{" "}
Battery Operated{" "}
            Warehousing Equipment Provider
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            Power Pallets, Fork Lifters, Reach Trucks, Tow Trucks and Hand
            Pallets &mdash; with best-in-class spare parts and after-sales
            support for sale and rental.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Get a Quote
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link
              href="https://shop.fazlerasheed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              Browse Machines
            </Link>
          </div>
        </div>
      </section>

      {/* Warehousing Equipment */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light to-light-blue p-8 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
              <Image
                src="/images/battery-operated-warehousing-equipment.webp"
                alt="Battery operated warehousing equipment for sale and rental in Pakistan"
                width={480}
                height={480}
                className="relative mx-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-4xl font-bold text-primary/15 font-heading">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Sale &amp; Rental
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Warehousing Equipment
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                To help you maximise your warehouse, we provide a wide range of
                industrial warehousing equipment and material handling products.
                Use battery-powered handling devices to improve process
                efficiency and move a range of items and products across the
                warehouse.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                Electric pallets, forklifts, reach trucks, order pickers, tow
                trucks, and hand pallets are among the battery-powered handling
                equipment available from us. We also offer spare parts combined
                with the finest possible maintenance service.
              </p>

              {/* Equipment type tags */}
              <div className="mb-8 flex flex-wrap gap-2">
                {equipmentTypes.map((type) => (
                  <Link
                    key={type.label}
                    href={type.href}
                    className="rounded-full border border-primary/15 bg-primary-light px-4 py-1.5 text-sm font-medium text-primary transition-all hover:border-primary/40 hover:bg-primary hover:text-white"
                  >
                    {type.label}
                  </Link>
                ))}
              </div>

              <Link
                href="https://shop.fazlerasheed.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
              >
                Browse All Machines
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-0.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spare Parts */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-4xl font-bold text-primary/15 font-heading">02</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Genuine &amp; OEM
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Spare Parts
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                Supply of spare parts within a reasonable time is an important
                part of our services. Our skilled team will respond to you
                straightforward and frankly to minimize stoppage in production.
                Our well-sorted stock ensures short response times with
                well-known quality.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                We recommend specific spare parts packages for wearing parts
                individually adapted to the respective equipment. Standard
                components are always kept in stock so that fast delivery is
                possible at all times.
              </p>

              {/* Key benefits */}
              <div className="mb-8 grid grid-cols-2 gap-3">
                {["Fast Delivery", "OEM Quality", "Wide Stock", "Expert Support"].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {benefit}
                  </div>
                ))}
              </div>

              <Link
                href="/parts"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
              >
                View Spare Parts
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-0.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>

            {/* Image card */}
            <div className="group order-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-light-blue to-primary-light p-8 lg:order-2 lg:p-12">
              <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              <Image
                src="/images/genuine-forklift-spare-parts.webp"
                alt="Genuine and OEM forklift spare parts in Pakistan"
                width={480}
                height={480}
                className="relative mx-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Floor Crack Filler */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light to-light-blue p-8 lg:p-12">
              <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
              <Image
                src="/images/warehouse-floor-crack-filler.webp"
                alt="Warehouse floor crack filler epoxy construction product"
                width={480}
                height={480}
                className="relative mx-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-4xl font-bold text-primary/15 font-heading">03</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Construction Product
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Warehouse Floor Crack Filler
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                Our versatile construction product is ideal for a multitude of
                applications, including fixing starter bars both vertically and
                horizontally, bonding steel to concrete and concrete to
                concrete, and fixing waterproofing and joint sealing tapes on
                expansion joints.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                This non-shrink, solvent-free product bonds perfectly after
                proper substrate preparation. With a long pot life, it&apos;s
                suitable for large area applications and resistant to corrosive
                chemicals, sudden temperature changes, and freeze-thaw cycles.
              </p>

              {/* Key benefits */}
              <div className="mb-8 grid grid-cols-2 gap-3">
                {["Non-Shrink Formula", "Solvent-Free", "Chemical Resistant", "Long Pot Life"].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {benefit}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
              >
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-0.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 lg:py-24">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white font-heading md:text-4xl">
            Need Help Choosing the Right Equipment?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Our experts will help you find the perfect machine for your
            warehouse needs. Whether you need to buy, rent, or get
            maintenance &mdash; we&apos;re here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl hover:shadow-black/10"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-0.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            <a
              href="tel:+923336871970"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
