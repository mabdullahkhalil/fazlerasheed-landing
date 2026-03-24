import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - Rental, Maintenance, Battery Regeneration | Fazlerasheed & Co.",
  description:
    "Fazlerasheed offers forklift rental services, planned maintenance, battery regeneration, wheel retreading, and golf cart maintenance across Pakistan.",
  alternates: { canonical: "https://fazlerasheed.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
          <nav className="mb-4 text-center text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white/80">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Services</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            Comprehensive Services for Your{" "}
Warehouse
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            From equipment rental and planned maintenance to battery
            regeneration and wheel retreading &mdash; we keep your operations
            running at peak efficiency with minimal downtime.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Schedule a Service
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <a
              href="tel:+923336871970"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview Cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Rental", icon: "M9 17H7A5 5 0 0 1 7 7h2m6 0h2a5 5 0 0 1 0 10h-2M8 12h8" },
              { label: "Maintenance", icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" },
              { label: "Battery Regen", icon: "M6 7h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM7 7v8M11 7v8" },
              { label: "Retreading", icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" },
              { label: "Golf Carts", icon: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2M7 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM13 17h2" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-all hover:border-primary/20 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light to-light-blue p-8 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
              <Image
                src="/images/forklift-rental-service-pakistan.webp"
                alt="Battery operated forklift and reach truck rental services in Pakistan"
                width={580}
                height={332}
                className="relative mx-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Short-Term &amp; Long-Term
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Rental Services
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                Battery-operated equipment rental by Fazlerasheed &amp; Co.
                is an industry-leading service providing a diverse range of
                machinery. Catering to food, paper, board, textile,
                pharmaceutical, and individual consumers, we offer versatile
                solutions from short-term to long-term needs.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                We offer{" "}
                <Link href="/products/forklifts" className="font-semibold text-primary hover:underline">Fork Lifters</Link>,{" "}
                <Link href="/products/reach-trucks" className="font-semibold text-primary hover:underline">Reach Trucks</Link>,{" "}
                <Link href="/products/power-pallets" className="font-semibold text-primary hover:underline">Power Pallets</Link>,{" "}
                <Link href="/products/stackers" className="font-semibold text-primary hover:underline">Stackers</Link>,{" "}
                <Link href="/products/tow-trucks" className="font-semibold text-primary hover:underline">Tow Trucks</Link>, and{" "}
                <Link href="/products/order-pickers" className="font-semibold text-primary hover:underline">Order Pickers</Link>.
                Our flexible rental options support seasonal peaks, stock-takes,
                backlogs, and special projects.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                {["900–3000 kg Capacity", "Up to 7m Lift Height", "Flexible Durations", "All Equipment Types"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
              >
                Get Rental Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-0.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">02</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Planned &amp; Full Maintenance
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Maintenance Services
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                We offer a variety of forklift service options through our team
                of trained professionals. We believe it is important to provide
                quality service with trained engineers, quality{" "}
                <Link href="/parts" className="font-semibold text-primary hover:underline">spare parts</Link>,
                first-call fix rate and fast response time.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                Our planned and full maintenance programs provide ongoing,
                consistent upkeep of your forklifts and help detect problems
                before they turn into something significant. Planned maintenance
                covers labor, while full maintenance covers both parts and
                labor.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                {["Trained Engineers", "Quality Spare Parts", "Fast Response Time", "First-Call Fix Rate"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
              >
                Schedule Maintenance
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-0.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="group order-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-light-blue to-primary-light p-8 lg:order-2 lg:p-12">
              <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              <Image
                src="/images/forklift-maintenance-repair.webp"
                alt="Forklift planned maintenance and repair service in Pakistan"
                width={580}
                height={332}
                className="relative mx-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Battery Regeneration */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light to-light-blue p-8 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
              <Image
                src="/images/battery-regeneration-refurbishment.webp"
                alt="Forklift battery regeneration and refurbishment service in Pakistan"
                width={580}
                height={580}
                className="relative mx-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">03</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Restore Up to 80% Capacity
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Battery Regeneration
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                Battery refurbishment removes sulphation through electrical high
                frequency pulsation, restoring{" "}
                <Link href="/batteries" className="font-semibold text-primary hover:underline">battery</Link>{" "}
                capacity up to 80% and enabling the reuse of old and sulphated batteries.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                Annual preventative maintenance is strongly recommended to
                prolong battery lifespan to the standard 5&ndash;7 years. As
                many as 70&ndash;80% of lead-acid batteries are replaced
                prematurely due to sulfate buildup &mdash; regeneration can
                save significant costs.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                {["Up to 80% Restored", "5–7 Year Lifespan", "Cost-Effective", "All Battery Types"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
              >
                Enquire Now
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-0.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wheel Retreading */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">04</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Wheels, Castors &amp; Rollers
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Retreading Service
              </h2>
              <p className="mb-8 text-base leading-relaxed text-muted">
                We provide professional retreading services for wheels, castors,
                and rollers used in forklifts, hand pallets, and reach trucks.
                Our retreading process restores worn wheels to like-new
                condition, extending their usable life and reducing replacement
                costs for your fleet.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                {["Forklift Wheels", "Hand Pallet Wheels", "Reach Truck Castors", "Industrial Rollers"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
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

            <div className="group order-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-light-blue to-primary-light p-8 lg:order-2 lg:p-12">
              <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              <Image
                src="/images/wheel-castor-retreading-service.webp"
                alt="Forklift wheel castor and roller retreading service"
                width={580}
                height={332}
                className="relative mx-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Golf Cart Maintenance */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light to-light-blue p-8 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
              <Image
                src="/images/golf-cart-maintenance-repair.webp"
                alt="Golf cart battery replacement parts and maintenance service"
                width={580}
                height={332}
                className="relative mx-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">05</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Batteries, Parts &amp; Service
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Golf Cart Maintenance
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                Golf carts and electric buggies for multi-purpose use &mdash;
                golf courses, hotels, parks, and factory movement. We are
                competent in electric golf carts and similar vehicles.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                We provide{" "}
                <Link href="/batteries" className="font-semibold text-primary hover:underline">Trojan and Eternity semi-traction batteries</Link>{" "}
                for these carts. We contract regular maintenance, supply all{" "}
                <Link href="/parts" className="font-semibold text-primary hover:underline">parts</Link>,
                motors, and electronic components. We use imported
                European parts for all battery-powered machines.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                {["Trojan & Eternity Batteries", "Regular Maintenance", "All Parts & Motors", "European Import Parts"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
              >
                Enquire Now
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-0.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="border-t border-border bg-surface py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-muted">Explore more:</span>
            <Link href="/products" className="font-semibold text-primary hover:underline">All Equipment</Link>
            <span className="text-border">|</span>
            <Link href="/batteries" className="font-semibold text-primary hover:underline">Traction Batteries</Link>
            <span className="text-border">|</span>
            <Link href="/parts" className="font-semibold text-primary hover:underline">Spare Parts</Link>
            <span className="text-border">|</span>
            <Link href="/parts/category/tires-wheels" className="font-semibold text-primary hover:underline">Tires & Wheels</Link>
            <span className="text-border">|</span>
            <Link href="/parts/category/electrical-parts" className="font-semibold text-primary hover:underline">Electrical Parts</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 lg:py-24">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white font-heading md:text-4xl">
            Keep Your Operations Running Smoothly
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Whether you need to rent equipment, schedule maintenance, or
            regenerate your batteries &mdash; our team is ready to help you
            minimise downtime and maximise efficiency.
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
