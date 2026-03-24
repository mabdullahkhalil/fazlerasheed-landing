import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Traction Batteries - Eternity & Trojan | Fazlerasheed & Co.",
  description:
    "We supply Eternity and Trojan traction batteries for forklifts, reach trucks, and all material handling equipment in Pakistan. Low maintenance, long life, deep-cycle batteries.",
  alternates: { canonical: "https://fazlerasheed.com/batteries" },
};

const batteryBrands = [
  { name: "Eternity", logo: "/images/brands/eternity.png", alt: "Eternity Technologies industrial batteries brand" },
  { name: "Hawker", logo: "/images/brands/hawker.png", alt: "Hawker traction batteries brand" },
];

const eternityApplications = [
  "Forklift Trucks",
  "Electric Vehicles",
  "Telecoms & UPS",
  "Emergency Lighting",
  "Solar & Wind Power",
  "Floor Cleaning Machines",
];

const trojanApplications = [
  "MEWPs (Boom & Scissor Lifts)",
  "Floor-Cleaning Machines",
  "Golf Carts & Marine Vehicles",
  "Forklifts & Reach Trucks",
  "Renewable Energy Systems",
  "Recreational Vehicles",
];

export default function BatteriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
          <nav className="mb-4 text-center text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white/80">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Batteries</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            Industrial Traction Batteries for Material Handling Equipment
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            Premium low-maintenance, long-life, and maintenance-free batteries
            from globally trusted brands for forklifts, reach trucks, and all
            warehousing equipment in Pakistan.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Enquire Now
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

      {/* Brand Logos Strip */}
      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-12 px-4 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Brands We Supply
          </p>
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-10">
            {batteryBrands.map((brand) => (
              <Image
                key={brand.name}
                src={brand.logo}
                alt={brand.alt}
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Eternity Batteries */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light to-light-blue p-8 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
              <Image
                src="/images/eternity-traction-batteries-pakistan.webp"
                alt="Eternity traction batteries for forklifts and warehousing equipment in Pakistan"
                width={580}
                height={400}
                className="relative mx-auto rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Premium Partner
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Eternity Batteries
              </h2>
              <p className="mb-8 text-base leading-relaxed text-muted">
                Eternity Technologies offer an extensive range of products for
                the global industrial market. Supporting applications such as
                forklift trucks, electric vehicles, telecoms, UPS systems,
                emergency lighting and solar/wind power stations. We offer low
                maintenance, long life and maintenance-free batteries.
              </p>

              {/* Applications grid */}
              <div className="mb-8 grid grid-cols-2 gap-3">
                {eternityApplications.map((app) => (
                  <div key={app} className="flex items-center gap-2 text-sm text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {app}
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

      {/* Trojan Batteries */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">02</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                World Leader in Deep-Cycle
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Trojan Batteries
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                With nearly 100 years of experience powering business and
                industry, Trojan is the world&apos;s leading supplier of
                deep-cycle batteries. Trojan batteries are synonymous with high
                performance, reliability, durability and a long lifespan.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                At Fazl-e-Rasheed &amp; Co, we know you need to count on your
                batteries at all times. That&apos;s why we recommend Trojan
                batteries. We offer a broad range of high-quality batteries to
                suit any need: Trojan lithium-ion batteries, deep-cycle flooded
                batteries, AGM and gel batteries.
              </p>

              {/* Applications grid */}
              <div className="mb-8 grid grid-cols-2 gap-3">
                {trojanApplications.map((app) => (
                  <div key={app} className="flex items-center gap-2 text-sm text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {app}
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

            {/* Image card */}
            <div className="group order-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-light-blue to-primary-light p-8 lg:order-2 lg:p-12">
              <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              <Image
                src="/images/trojan-deep-cycle-batteries.jpeg"
                alt="Trojan deep-cycle batteries for forklifts and industrial equipment"
                width={580}
                height={400}
                className="relative mx-auto rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Battery Types Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Battery Types
            </p>
            <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold text-foreground font-heading md:text-4xl">
              Find the Right Battery for Your Application
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted">
              We supply a comprehensive range of battery technologies to match
              every requirement and budget.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Lithium-Ion",
                desc: "Zero maintenance, fast charging, longer cycle life. Ideal for high-throughput multi-shift operations.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10H7z" />
                    <path d="M7 2v5M17 2v5M7 17v5M17 17v5M2 7h5M2 17h5M17 7h5M17 17h5" />
                  </svg>
                ),
              },
              {
                title: "Deep-Cycle Flooded",
                desc: "Proven reliability for everyday use. Cost-effective with excellent performance across a wide range of applications.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="6" width="18" height="12" rx="2" />
                    <path d="M23 13v-2" />
                    <path d="M11 6v12M7 6v12" />
                  </svg>
                ),
              },
              {
                title: "AGM Batteries",
                desc: "Sealed and maintenance-free with excellent vibration resistance. Perfect for demanding environments.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 7h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
                    <path d="M8 7v8M12 7v8" />
                  </svg>
                ),
              },
              {
                title: "Gel Batteries",
                desc: "Spill-proof, deep-discharge tolerant, and long-lasting. Best for sensitive indoor environments.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 7h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
                    <path d="M7 11h9" />
                  </svg>
                ),
              },
            ].map((type) => (
              <div
                key={type.title}
                className="group rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {type.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground font-heading">
                  {type.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Related Links */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Compatible Equipment
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Equipment Powered by Our Batteries
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { label: "Forklifts", href: "/products/forklifts" },
              { label: "Reach Trucks", href: "/products/reach-trucks" },
              { label: "Power Pallets", href: "/products/power-pallets" },
              { label: "Stackers", href: "/products/stackers" },
              { label: "Tow Trucks", href: "/products/tow-trucks" },
              { label: "Order Pickers", href: "/products/order-pickers" },
              { label: "Lithium Batteries", href: "/products/lithium-batteries" },
              { label: "Lead Acid Batteries", href: "/products/lead-acid-batteries" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </div>
                <span className="text-sm font-bold text-foreground">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-muted">Related:</span>
            <Link href="/services" className="font-semibold text-primary hover:underline">Battery Regeneration Service</Link>
            <span className="text-border">|</span>
            <Link href="/products" className="font-semibold text-primary hover:underline">All Equipment</Link>
            <span className="text-border">|</span>
            <Link href="/spare-parts" className="font-semibold text-primary hover:underline">Spare Parts</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 lg:py-24">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white font-heading md:text-4xl">
            Need a Battery Replacement or Consultation?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Our team will help you select the right traction battery for your
            equipment. We offer competitive pricing, fast delivery, and expert
            installation support.
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
