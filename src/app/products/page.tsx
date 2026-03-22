import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Warehousing Equipment, Spare Parts & Traction Batteries | Fazlerasheed & Co.",
  description:
    "Our battery operated warehousing equipment includes Power Pallets, Fork Lifters, Reach Trucks, Tow Trucks and Hand Pallets along with best services and spare parts.",
};

const equipmentTypes = [
  { label: "Forklifts", href: "/equipment/forklifts" },
  { label: "Reach Trucks", href: "/equipment/reach-trucks" },
  { label: "Power Pallets", href: "/equipment/power-pallets" },
  { label: "Tow Trucks", href: "/equipment/tow-trucks" },
  { label: "Order Pickers", href: "/equipment/order-pickers" },
  { label: "Stackers", href: "/equipment/stackers" },
  { label: "Hand Pallets", href: "/equipment/hand-pallets" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        {/* Background image */}
        <Image
          src="/images/hero.webp"
          alt="Fazlerasheed warehouse operations"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
          <h1 className="text-3xl font-bold leading-snug text-white font-heading md:text-4xl lg:text-[2.75rem]">
            Pakistan&apos;s leading{" "}
            <span className="relative inline-block pb-2">
              <span className="text-accent">battery operated</span>
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
            Warehousing Equipment &amp; Spare Parts provider
          </h1>

          {/* Frosted glass card */}
          <div className="mt-6 w-full rounded-xl border border-white/20 bg-white/15 px-5 py-4 text-center backdrop-blur-md lg:px-6 lg:py-5">
            <p className="text-sm leading-relaxed text-white/90 md:text-base">
              Our battery operated warehousing equipment includes Power Pallets,
              Fork Lifters, Reach Trucks, Tow Trucks and Hand Pallets along
              with best services and{" "}
              <Link
                href="/parts"
                className="font-semibold text-accent underline decoration-accent/50 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
              >
                spare parts
              </Link>
              . We have a fleet of over 170 machines available for both sale
              and rental.
            </p>
          </div>
        </div>
      </section>

      {/* Warehousing Equipment */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-light-blue to-primary-light/50 blur-2xl" />
                <Image
                  src="/images/products-equipment.png"
                  alt="Fazlerasheed and Company warehousing equipment"
                  width={500}
                  height={500}
                  className="relative rounded-2xl object-contain"
                />
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Sale &amp; Rental
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Warehousing Equipment
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted">
                To help you maximise your warehouse, we provide a wide range of
                industrial warehousing equipment and material handling products.
                Use battery-powered handling devices to improve process
                efficiency and move a range of items and products across the
                warehouse. This low-cost solution makes getting things from
                point A to point B and putting them on and off the shelves
                simple.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                Electric pallets, forklifts, reach trucks, order pickers, tow
                trucks, and hand pallets are among the battery-powered handling
                equipment available from us. We also offer spare parts combined
                with the finest possible maintenance service and customised
                solutions to business issues.
              </p>

              {/* Equipment type tags */}
              <div className="mb-8 flex flex-wrap gap-2">
                {equipmentTypes.map((type) => (
                  <Link
                    key={type.label}
                    href={type.href}
                    className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary-light hover:text-primary"
                  >
                    {type.label}
                  </Link>
                ))}
              </div>

              <Link
                href="https://shop.fazlerasheed.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-lg"
              >
                Browse All Machines
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spare Parts */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Genuine &amp; OEM
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Spare Parts
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted">
                Supply of spare parts within a reasonable time is an important
                part of our services. Our skilled team will respond to you
                straightforward and frankly to minimize stoppage in production.
                Our well-sorted stock, as well as the carefully selected network
                of suppliers, ensure short times of response with the
                well-known quality.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                We recommend specific spare parts packages for wearing parts
                that are individually adapted to the respective equipment. The
                needed components can be stored close to the material and shall
                ensure a smooth run of your production. Standard components are
                always kept in stock so that fast delivery is possible at all
                times.
              </p>

              <Link
                href="/parts"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-lg"
              >
                View Spare Parts
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary-light/50 to-light-blue blur-2xl" />
                <Image
                  src="/images/products-spareparts.webp"
                  alt="Fazlerasheed and Company spare parts"
                  width={500}
                  height={500}
                  className="relative rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Floor Crack Filler */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-light-blue to-primary-light/50 blur-2xl" />
                <Image
                  src="/images/products-crackfiller.png"
                  alt="Fazlerasheed and Company warehouse floor crack filler"
                  width={500}
                  height={500}
                  className="relative rounded-2xl object-contain"
                />
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Construction Product
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Warehouse Floor Crack Filler
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted">
                Our versatile construction product is ideal for a multitude of
                applications, including fixing starter bars both vertically and
                horizontally, bonding steel to concrete and concrete to
                concrete, ensuring strong adherence between old and new
                concrete, and fixing waterproofing and joint sealing tapes on
                expansion joints.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                This non-shrink product bonds perfectly after proper substrate
                preparation, is solvent-free for safe and easy use, and
                provides a flawless substrate for final paint coats
                post-sanding. With a long pot life, it&apos;s suitable for
                large area applications and is resistant to a broad spectrum of
                corrosive chemicals, solvent exposure, sudden temperature
                changes, and freeze-thaw cycles.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-lg"
              >
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white font-heading md:text-4xl">
            Need Help Choosing the Right Equipment?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-white/80 md:text-lg">
            Our experts will help you find the perfect machine for your
            warehouse needs. Whether you need to buy, rent, or get
            maintenance &mdash; we&apos;re here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-md transition-all hover:bg-gray-50 hover:shadow-lg"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            <a
              href="tel:+923336871970"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
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
