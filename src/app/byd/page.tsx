import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BYD Electric Forklifts - LiFePO4 Powered MHE in Pakistan",
  description:
    "Fazlerasheed & Co. is the authorized distributor of BYD electric forklifts in Pakistan. LiFePO4 battery powered, zero emissions, 10-year battery warranty. Counterbalance, cushion tire, pallet trucks & tow tractors.",
  alternates: { canonical: "https://fazlerasheed.com/byd" },
};

type Machine = {
  model: string;
  name: string;
  capacity: string;
  battery: string;
  liftHeight: string;
  feature: string;
  image: string;
};

const machineCategories: {
  name: string;
  slug: string;
  description: string;
  machines: Machine[];
}[] = [
  {
    name: "3-Wheel Counterbalance Forklifts",
    slug: "forklifts",
    description:
      "Compact three-wheel electric forklifts with tight turning radius for maximum maneuverability in narrow aisles and confined warehouse spaces.",
    machines: [
      {
        model: "ECB16",
        name: "BYD 3-Wheel Forklift 1.6T",
        capacity: "1,600 kg (3,527 lbs)",
        battery: "80V LiFePO4",
        liftHeight: "Up to 6,500 mm",
        feature: "Compact 3-wheel design",
        image: "/images/byd-machines/ecb18-3wheel.jpg",
      },
      {
        model: "ECB18",
        name: "BYD 3-Wheel Forklift 1.8T",
        capacity: "1,800 kg (3,968 lbs)",
        battery: "80V LiFePO4",
        liftHeight: "Up to 6,500 mm",
        feature: "IFOY 2016 Winner",
        image: "/images/byd-machines/ecb18-3wheel.jpg",
      },
      {
        model: "ECB20S",
        name: "BYD 3-Wheel Forklift 2.0T",
        capacity: "2,000 kg (4,409 lbs)",
        battery: "80V LiFePO4",
        liftHeight: "Up to 6,500 mm",
        feature: "Enhanced stability",
        image: "/images/byd-machines/ecb18-alt.jpg",
      },
    ],
  },
  {
    name: "4-Wheel Counterbalance Forklifts",
    slug: "forklifts",
    description:
      "Heavy-duty four-wheel electric forklifts for demanding indoor and outdoor applications. Designed for high throughput warehouse and manufacturing operations.",
    machines: [
      {
        model: "ECB25",
        name: "BYD 4-Wheel Forklift 2.5T",
        capacity: "2,500 kg (5,512 lbs)",
        battery: "80V LiFePO4",
        liftHeight: "Up to 6,500 mm",
        feature: "24/7 single battery operation",
        image: "/images/byd-machines/ecb25-4wheel.jpg",
      },
      {
        model: "ECB27",
        name: "BYD 4-Wheel Forklift 2.7T",
        capacity: "2,700 kg (5,952 lbs)",
        battery: "80V LiFePO4",
        liftHeight: "Up to 6,500 mm",
        feature: "Dual drive motor option",
        image: "/images/byd-machines/ecb25-4wheel.jpg",
      },
      {
        model: "ECB30",
        name: "BYD 4-Wheel Forklift 3.0T",
        capacity: "3,000 kg (6,614 lbs)",
        battery: "80V LiFePO4",
        liftHeight: "Up to 6,000 mm",
        feature: "Dual battery size options",
        image: "/images/byd-machines/ecb35-heavy.jpg",
      },
      {
        model: "ECB35",
        name: "BYD 4-Wheel Forklift 3.5T",
        capacity: "3,500 kg (7,716 lbs)",
        battery: "80V LiFePO4",
        liftHeight: "Up to 6,000 mm",
        feature: "High-capacity operations",
        image: "/images/byd-machines/ecb35-alt.jpg",
      },
      {
        model: "ECB50",
        name: "BYD 4-Wheel Forklift 5.0T",
        capacity: "5,000 kg (11,023 lbs)",
        battery: "80V LiFePO4",
        liftHeight: "Up to 6,000 mm",
        feature: "Heavy-duty industrial",
        image: "/images/byd-machines/ecb50-heavy.jpg",
      },
    ],
  },
  {
    name: "Cushion Tire Forklifts",
    slug: "forklifts",
    description:
      "Indoor-optimized cushion tire forklifts with smooth tires for maximum performance on solid warehouse floors. Lower profile for better stability.",
    machines: [
      {
        model: "ECC22",
        name: "BYD Cushion Forklift 2.2T",
        capacity: "2,200 kg (4,851 lbs)",
        battery: "80V LiFePO4",
        liftHeight: "Up to 6,000 mm",
        feature: "Narrow aisle indoor use",
        image: "/images/byd-machines/ecc22-cushion.png",
      },
      {
        model: "ECC27",
        name: "BYD Cushion Forklift 2.7T",
        capacity: "2,700 kg (6,000 lbs)",
        battery: "80V LiFePO4",
        liftHeight: "Up to 6,500 mm",
        feature: "Ground-up LiFePO4 design",
        image: "/images/byd-machines/ecc27-cushion.jpg",
      },
      {
        model: "ECC32",
        name: "BYD Cushion Forklift 3.2T",
        capacity: "3,200 kg (7,055 lbs)",
        battery: "80V LiFePO4",
        liftHeight: "Up to 6,000 mm",
        feature: "Short wheelbase, any attachment",
        image: "/images/byd-machines/ecc32-cushion.png",
      },
    ],
  },
  {
    name: "Pallet Trucks",
    slug: "power-pallets",
    description:
      "Electric pallet trucks for efficient horizontal transport in warehouses and distribution centers. Lithium-powered for long shifts without swapping batteries.",
    machines: [
      {
        model: "PMW20",
        name: "BYD Walkie Pallet Truck 2.0T",
        capacity: "2,000 kg (4,400 lbs)",
        battery: "24V LiFePO4",
        liftHeight: "Fork: 200 mm",
        feature: "Compact walkie design",
        image: "/images/byd-machines/pmw20-walkie.jpg",
      },
      {
        model: "PMR27",
        name: "BYD Rider Pallet Truck 2.7T",
        capacity: "2,700 kg (5,952 lbs)",
        battery: "24V LiFePO4",
        liftHeight: "Fork: 150 mm",
        feature: "Rider platform",
        image: "/images/byd-machines/pmr27-pallet.jpg",
      },
      {
        model: "PMR36",
        name: "BYD Rider Pallet Truck 3.6T",
        capacity: "3,600 kg (7,937 lbs)",
        battery: "24V LiFePO4",
        liftHeight: "Fork: 150 mm",
        feature: "Heavy-load transport",
        image: "/images/byd-machines/pmr27-pallet.jpg",
      },
    ],
  },
  {
    name: "Tow Tractors",
    slug: "tow-trucks",
    description:
      "Electric tow tractors for pulling heavy loads across warehouses, manufacturing plants, airports and logistics facilities.",
    machines: [
      {
        model: "T50",
        name: "BYD Tow Tractor 5.0T",
        capacity: "5,000 kg (11,023 lbs) tow",
        battery: "48V LiFePO4",
        liftHeight: "N/A",
        feature: "High towing capacity",
        image: "/images/byd-machines/t50-tow.jpg",
      },
    ],
  },
];

const bydBenefits = [
  {
    title: "LiFePO4 Battery Pioneer",
    description:
      "BYD is the world's largest rechargeable battery manufacturer. Their forklifts use the same proven LiFePO4 chemistry trusted in BYD electric vehicles worldwide.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="10" x="2" y="7" rx="2" /><line x1="22" x2="22" y1="11" y2="13" /><line x1="6" x2="6" y1="11" y2="14" /><line x1="10" x2="10" y1="11" y2="14" /><line x1="14" x2="14" y1="11" y2="14" /></svg>
    ),
  },
  {
    title: "10-Year Battery Warranty",
    description:
      "Industry-best 10-year battery warranty. BYD's maintenance-free LiFePO4 batteries never need watering or equalizing — guaranteed long-term performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
    ),
  },
  {
    title: "90-Minute Fast Charge",
    description:
      "Full charge in under 90 minutes with 15+ hours of runtime. BYD's 110V charger plugs into any standard wall outlet — no special high-voltage wiring needed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>
    ),
  },
  {
    title: "Zero Emissions",
    description:
      "100% electric operation with no fumes, no exhaust and no noise pollution. Ideal for food-grade facilities, cold storage and indoor warehouse environments.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22 16 8" /><path d="m3.47 12.53 5 5" /><path d="m5 21 1.5-1.5" /><path d="m8 18 1.5-1.5" /><path d="m11 15 1.5-1.5" /><path d="m2 22 2-2" /><circle cx="18" cy="4" r="2" /><path d="M20 6s2.63.84 3 4c.24 2.05-.63 3.88-3 4" /></svg>
    ),
  },
  {
    title: "24/7 Single Battery",
    description:
      "One battery handles all shifts with opportunity charging. No battery swaps, no spare batteries, no exchange equipment — lower total cost of ownership.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
  },
  {
    title: "IFOY Award Winning",
    description:
      "BYD ECB18 won the 2016 International Forklift of the Year (IFOY) award. The ECB40-50 series was a 2018 IFOY grand finalist — recognized for innovation worldwide.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
    ),
  },
];

export default function BYDPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fazlerasheed.com" },
      { "@type": "ListItem", position: 2, name: "BYD Electric Forklifts", item: "https://fazlerasheed.com/byd" },
    ],
  };

  const totalMachines = machineCategories.reduce((sum, cat) => sum + cat.machines.length, 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
          <nav className="mb-4 text-center text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white/80">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">BYD Electric Forklifts</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            BYD Electric Forklifts &mdash; LiFePO4 Powered MHE in Pakistan
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            Fazlerasheed & Co. is the authorized distributor of BYD electric
            forklifts in Pakistan. Powered by BYD&apos;s world-leading lithium iron
            phosphate battery technology with an industry-best 10-year warranty.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Get a Quote
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <a
              href="tel:+923336871970"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              +92 333 6871970
            </a>
          </div>
        </div>
      </section>

      {/* About BYD */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                About BYD Forklifts
              </p>
              <h2 className="mb-5 text-2xl font-bold text-foreground font-heading md:text-3xl">
                World&apos;s Largest Battery Maker, Now Powering Your Warehouse
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                BYD (Build Your Dreams) is the world&apos;s largest manufacturer of
                rechargeable batteries and a global leader in electric vehicles.
                Their forklift division leverages the same proven lithium iron
                phosphate (LiFePO4) battery technology used across millions of BYD
                electric cars, buses and trucks worldwide.
              </p>
              <p className="mb-6 text-base leading-relaxed text-muted">
                As the authorized distributor of BYD forklifts in Pakistan,
                Fazlerasheed & Co. brings their complete range of electric material
                handling equipment to the local market, backed by our 10+ years of
                MHE expertise and nationwide service network.
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">{totalMachines}</div>
                  <div className="text-xs text-muted">Models</div>
                </div>
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">5</div>
                  <div className="text-xs text-muted">Categories</div>
                </div>
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">10yr</div>
                  <div className="text-xs text-muted">Battery Warranty</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-border bg-surface p-12 shadow-lg">
              <Image
                src="/images/brands/byd.png"
                alt="BYD electric forklift brand - authorized distributor Fazlerasheed Pakistan"
                width={400}
                height={200}
                className="w-full max-w-sm object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Machine Catalog */}
      {machineCategories.map((cat, catIdx) => (
        <section key={cat.name} className={catIdx % 2 === 0 ? "bg-surface py-16 lg:py-20" : "bg-white py-16 lg:py-20"}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10">
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">
                  {String(catIdx + 2).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    BYD {cat.name}
                  </p>
                  <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
                    BYD {cat.name} in Pakistan
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {cat.description}
                  </p>
                </div>
                <Link
                  href={`/products/${cat.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                >
                  View all {cat.slug.replace("-", " ")}
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.machines.map((machine) => (
                <div
                  key={machine.model}
                  className="group overflow-hidden rounded-2xl border border-border/50 bg-white transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <Image
                      src={machine.image}
                      alt={`${machine.name} - BYD electric forklift in Pakistan`}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-white shadow-md">
                      {machine.model}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="mb-1 text-xs font-medium text-primary">{machine.feature}</div>
                    <h3 className="mb-3 text-base font-bold text-foreground font-heading">
                      {machine.name}
                    </h3>
                    <div className="space-y-2 text-xs text-muted">
                      <div className="flex justify-between">
                        <span>Capacity</span>
                        <span className="font-semibold text-foreground">{machine.capacity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Battery</span>
                        <span className="font-semibold text-foreground">{machine.battery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lift Height</span>
                        <span className="font-semibold text-foreground">{machine.liftHeight}</span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                    >
                      Request Quote
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why BYD LiFePO4 */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">07</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              BYD Advantage
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Why Choose BYD Electric Forklifts?
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bydBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border/50 bg-white p-6 transition-all hover:border-primary/15 hover:shadow-lg hover:shadow-primary/[0.04]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground font-heading">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Equipment */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Related Equipment
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Explore More Material Handling Equipment
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Forklifts", href: "/products/forklifts" },
              { name: "Power Pallets", href: "/products/power-pallets" },
              { name: "Tow Trucks", href: "/products/tow-trucks" },
              { name: "Stackers", href: "/products/stackers" },
            ].map((eq) => (
              <Link
                key={eq.name}
                href={eq.href}
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </div>
                <span className="text-sm font-bold text-foreground">{eq.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-muted">Also see:</span>
            <Link href="/ep" className="font-semibold text-primary hover:underline">EP Green Forklifts</Link>
            <span className="text-border">|</span>
            <Link href="/batteries/roypow" className="font-semibold text-primary hover:underline">RoyPow Batteries</Link>
            <span className="text-border">|</span>
            <Link href="/batteries" className="font-semibold text-primary hover:underline">Traction Batteries</Link>
            <span className="text-border">|</span>
            <Link href="/spare-parts" className="font-semibold text-primary hover:underline">Spare Parts</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white font-heading md:text-3xl">
            Ready for BYD Electric Forklifts?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Contact us to learn more about BYD LiFePO4 electric forklifts and
            material handling equipment. Our team will help you find the right
            machine for your warehouse operations in Pakistan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <a
              href="tel:+923336871970"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              +92 333 6871970
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
