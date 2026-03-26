import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "RoyPow LiFePO4 Forklift Batteries in Pakistan",
  description:
    "Fazlerasheed & Co. is the authorized distributor of RoyPow LiFePO4 lithium forklift batteries in Pakistan. 3,500+ cycle life, zero maintenance, 5-year warranty.",
  alternates: { canonical: "https://fazlerasheed.com/batteries/roypow" },
};

type Battery = {
  model: string;
  name: string;
  voltage: string;
  capacity: string;
  feature: string;
  image: string;
  href: string;
};

const batteryCategories: {
  voltage: string;
  description: string;
  image: string;
  batteries: Battery[];
}[] = [
  {
    voltage: "24V",
    description: "Compact lithium batteries for pallet trucks, stackers and light-duty warehouse equipment. Available from 100Ah to 560Ah.",
    image: "/images/roypow-batteries/f24560l.jpg",
    batteries: [
      {
        model: "F24100",
        name: "24V 100Ah LiFePO4 Battery",
        voltage: "24V",
        capacity: "100Ah",
        feature: "Ultra-compact for light-duty pallet jacks",
        image: "/images/roypow-batteries/f24560l.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F24150",
        name: "24V 150Ah LiFePO4 Battery",
        voltage: "24V",
        capacity: "150Ah",
        feature: "For small stackers and walkie pallet trucks",
        image: "/images/roypow-batteries/f24560l.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F24280",
        name: "24V 280Ah LiFePO4 Battery",
        voltage: "24V",
        capacity: "280Ah",
        feature: "Mid-range capacity for electric stackers",
        image: "/images/roypow-batteries/f24560l.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F24560L",
        name: "24V 560Ah LiFePO4 Battery",
        voltage: "24V",
        capacity: "560Ah",
        feature: "High-capacity for heavy-use pallet equipment",
        image: "/images/roypow-batteries/f24560l.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
    ],
  },
  {
    voltage: "36V",
    description: "Mid-voltage lithium batteries for stackers, tow tractors and medium-duty material handling equipment.",
    image: "/images/roypow-batteries/f36690bc.jpg",
    batteries: [
      {
        model: "F36690BC",
        name: "36V 690Ah LiFePO4 Battery",
        voltage: "36V",
        capacity: "690Ah",
        feature: "High-capacity for heavy-duty stackers and tow tractors",
        image: "/images/roypow-batteries/f36690bc.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
    ],
  },
  {
    voltage: "48V",
    description: "Versatile lithium batteries for reach trucks, counterbalance forklifts and high-throughput warehouse operations. Available from 210Ah to 690Ah.",
    image: "/images/roypow-batteries/f48690bd.jpg",
    batteries: [
      {
        model: "F48210",
        name: "48V 210Ah LiFePO4 Battery",
        voltage: "48V",
        capacity: "210Ah",
        feature: "Compact power for light-duty forklifts",
        image: "/images/roypow-batteries/f48690bd.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F48280",
        name: "48V 280Ah LiFePO4 Battery",
        voltage: "48V",
        capacity: "280Ah",
        feature: "For reach trucks and narrow-aisle equipment",
        image: "/images/roypow-batteries/f48690bd.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F48400",
        name: "48V 400Ah LiFePO4 Battery",
        voltage: "48V",
        capacity: "400Ah",
        feature: "Multi-shift capability for busy warehouses",
        image: "/images/roypow-batteries/f48690bd.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F48420",
        name: "48V 420Ah LiFePO4 Battery",
        voltage: "48V",
        capacity: "420Ah",
        feature: "Extended runtime for demanding applications",
        image: "/images/roypow-batteries/f48690bd.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F48560",
        name: "48V 560Ah LiFePO4 Battery",
        voltage: "48V",
        capacity: "560Ah",
        feature: "High-capacity for counterbalance forklifts",
        image: "/images/roypow-batteries/f48690bd.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F48628",
        name: "48V 628Ah LiFePO4 Battery",
        voltage: "48V",
        capacity: "628Ah",
        feature: "Premium capacity for high-throughput operations",
        image: "/images/roypow-batteries/f48690bd.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F48690BD",
        name: "48V 690Ah LiFePO4 Battery",
        voltage: "48V",
        capacity: "690Ah",
        feature: "Maximum capacity for heavy-duty forklifts",
        image: "/images/roypow-batteries/f48690bd.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
    ],
  },
  {
    voltage: "80V",
    description: "Heavy-duty lithium batteries for large counterbalance forklifts and high-capacity material handling equipment.",
    image: "/images/roypow-batteries/f80690k.jpg",
    batteries: [
      {
        model: "F80400",
        name: "80V 400Ah LiFePO4 Battery",
        voltage: "80V",
        capacity: "400Ah",
        feature: "For mid-range counterbalance forklifts",
        image: "/images/roypow-batteries/f80690k.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F80420",
        name: "80V 420Ah LiFePO4 Battery",
        voltage: "80V",
        capacity: "420Ah",
        feature: "Extended runtime for 3-5 ton forklifts",
        image: "/images/roypow-batteries/f80690k.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F80460",
        name: "80V 460Ah LiFePO4 Battery",
        voltage: "80V",
        capacity: "460Ah",
        feature: "Heavy-duty power for demanding environments",
        image: "/images/roypow-batteries/f80690k.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
      {
        model: "F80690K",
        name: "80V 690Ah LiFePO4 Battery",
        voltage: "80V",
        capacity: "690Ah",
        feature: "Maximum capacity for large counterbalance forklifts",
        image: "/images/roypow-batteries/f80690k.jpg",
        href: "https://shop.fazlerasheed.com/t/categories/battery/forklift-batteries",
      },
    ],
  },
];

const specialtyProducts: {
  name: string;
  description: string;
  image: string;
}[] = [
  {
    name: "Explosion-Proof LiFePO4 Battery",
    description:
      "ATEX-rated lithium batteries designed for hazardous environments including chemical plants, refineries, and grain handling facilities.",
    image: "/images/roypow-batteries/explosion-proof.jpg",
  },
  {
    name: "Anti-Freeze LiFePO4 Battery",
    description:
      "Cold-rated lithium batteries that operate reliably down to -4°F (-20°C) for cold storage warehouses and freezer environments.",
    image: "/images/roypow-batteries/anti-freeze.jpg",
  },
  {
    name: "Forklift Battery Charger",
    description:
      "Intelligent chargers compatible with all RoyPow LiFePO4 batteries. Fast-charging capability with built-in safety protections.",
    image: "/images/roypow-batteries/charger.jpg",
  },
  {
    name: "CHA20-110-200 Charger",
    description:
      "Industrial-grade 200A charger for high-capacity battery packs. CAN bus communication with real-time monitoring and diagnostics.",
    image: "/images/roypow-batteries/charger-cha20.jpg",
  },
];

const lifepoBenefits = [
  {
    title: "Long Life & 5-Year Warranty",
    description: "10+ year design life with over 3,500 charge cycles — more than 3x the lifespan of lead-acid batteries. Backed by a 5-year warranty for peace of mind.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
  },
  {
    title: "Zero Maintenance",
    description: "No acid spills, corrosion, sulfation or distilled water refills. Save on labor costs, reduce downtime and improve productivity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
    ),
  },
  {
    title: "Consistent Power",
    description: "Flat discharge curve delivers high sustained voltage throughout the full charge. Forklifts run faster on each charge without getting sluggish toward end of shift.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
    ),
  },
  {
    title: "Multi-Shift Operation",
    description: "One lithium battery powers one forklift across all shifts. Maximize productivity and enable 24/7 fleet operations with opportunity charging.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /><polyline points="21 3 21 9 15 9" /></svg>
    ),
  },
  {
    title: "Built-in BMS",
    description: "Real-time monitoring and communication via CAN bus. Continuous cell balancing, remote diagnostics and over-the-air software upgrades ensure peak performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
    ),
  },
  {
    title: "Real-Time Display",
    description: "On-board display shows all critical battery data in real-time — charge level, temperature, energy consumption, remaining charge time and fault alarms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
    ),
  },
  {
    title: "No Battery Exchange",
    description: "Eliminate risks of physical damage during swaps. No exchange equipment needed — saving cost, space and improving workplace safety.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>
    ),
  },
  {
    title: "Ultra Safe",
    description: "LiFePO4 chemistry offers high thermal and chemical stability. Multiple built-in protections against overcharge, over-discharge, overheating and short circuits. Sealed, zero-emission design.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
    ),
  },
];

const compatibleBrands = [
  "Toyota", "Linde", "Jungheinrich", "Still", "Yale",
  "Hyster", "BT", "Clark", "Doosan", "Hyundai", "TCM", "EP",
];

export default function RoyPowPage() {
  const totalBatteries = batteryCategories.reduce((sum, cat) => sum + cat.batteries.length, 0);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fazlerasheed.com" },
      { "@type": "ListItem", position: 2, name: "Batteries", item: "https://fazlerasheed.com/batteries" },
      { "@type": "ListItem", position: 3, name: "RoyPow Partnership", item: "https://fazlerasheed.com/batteries/roypow" },
    ],
  };

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
            <Link href="/batteries" className="transition-colors hover:text-white/80">Batteries</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">RoyPow Partnership</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            RoyPow LiFePO4 Forklift Batteries in Pakistan
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            Fazlerasheed & Co. is the authorized distributor of RoyPow lithium
            iron phosphate batteries in Pakistan — delivering zero-maintenance,
            long-life power solutions for electric forklifts and warehouse
            equipment.
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
              href="/batteries"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              View All Batteries
            </Link>
          </div>
        </div>
      </section>

      {/* About RoyPow */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                About RoyPow
              </p>
              <h2 className="mb-5 text-2xl font-bold text-foreground font-heading md:text-3xl">
                Next-Generation LiFePO4 Power for Your Fleet
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                RoyPow is a leading manufacturer of LiFePO4 (lithium iron
                phosphate) batteries for material handling equipment. Their
                forklift batteries deliver up to 10 years of service life with
                3,500+ charge cycles, built-in Battery Management Systems and
                UL/CE certification — all in drop-in form factors that fit
                standard BCI and DIN battery compartments.
              </p>
              <p className="mb-6 text-base leading-relaxed text-muted">
                As the authorized distributor of RoyPow in Pakistan,
                Fazlerasheed & Co. provides their complete range of lithium
                forklift batteries from 24V to 80V, backed by our 10+ years of
                material handling expertise and nationwide after-sales support.
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">{totalBatteries}</div>
                  <div className="text-xs text-muted">Battery Models</div>
                </div>
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">3,500+</div>
                  <div className="text-xs text-muted">Cycle Life</div>
                </div>
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">LiFePO4</div>
                  <div className="text-xs text-muted">Chemistry</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/roypow-partnership.webp"
                alt="RoyPow LiFePO4 lithium forklift battery - authorized distributor Fazlerasheed Pakistan"
                width={648}
                height={500}
                className="w-full rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Battery Catalog by Voltage */}
      {batteryCategories.map((cat, catIdx) => (
        <section key={cat.voltage} className={catIdx % 2 === 0 ? "bg-surface py-16 lg:py-20" : "bg-white py-16 lg:py-20"}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10">
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">
                  {String(catIdx + 2).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                {cat.voltage} Batteries
              </p>
              <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
                RoyPow {cat.voltage} LiFePO4 Forklift Batteries
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {cat.description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cat.batteries.map((battery) => (
                <a
                  key={battery.model}
                  href={battery.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-border/50 bg-white transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-square overflow-hidden bg-surface">
                    <Image
                      src={battery.image}
                      alt={`${battery.name} - RoyPow LiFePO4 forklift battery in Pakistan`}
                      width={480}
                      height={480}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-1 text-xs font-semibold text-primary">{battery.model}</div>
                    <h3 className="mb-3 text-base font-bold text-foreground font-heading">
                      {battery.name}
                    </h3>
                    <div className="space-y-1.5 text-xs text-muted">
                      <div className="flex justify-between">
                        <span>Voltage</span>
                        <span className="font-semibold text-foreground">{battery.voltage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Capacity</span>
                        <span className="font-semibold text-foreground">{battery.capacity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Chemistry</span>
                        <span className="font-semibold text-foreground">LiFePO4</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Warranty</span>
                        <span className="font-semibold text-foreground">5 Years</span>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted">
                      {battery.feature}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                      View in Shop
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Specialty Products & Chargers */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">06</span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Specialty Products
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Specialty Batteries & Chargers
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              Purpose-built solutions for demanding environments — from
              explosion-proof batteries for hazardous areas to anti-freeze
              batteries for cold storage, plus intelligent charging systems.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specialtyProducts.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-2xl border border-border/50 bg-white transition-all duration-300 hover:border-primary/15 hover:shadow-lg hover:shadow-primary/[0.04]"
              >
                <div className="relative aspect-square overflow-hidden bg-surface">
                  <Image
                    src={product.image}
                    alt={`${product.name} - RoyPow forklift battery product`}
                    width={480}
                    height={480}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-base font-bold text-foreground font-heading">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LiFePO4 */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">07</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              LiFePO4 Advantage
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Why Switch to LiFePO4 Batteries?
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {lifepoBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border/50 bg-surface p-6 transition-all hover:border-primary/15 hover:shadow-lg hover:shadow-primary/[0.04]"
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

      {/* Compatible Brands */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">08</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Universal Compatibility
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Compatible with All Major Forklift Brands
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              RoyPow batteries use standard BCI and DIN form factors, making
              them a direct drop-in replacement for lead-acid batteries across
              all major forklift manufacturers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {compatibleBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground"
              >
                {brand}
              </span>
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
              Explore More Material Handling Solutions
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "All Batteries", href: "/batteries" },
              { name: "Forklifts", href: "/products/forklifts" },
              { name: "EP Green MHE", href: "/ep" },
              { name: "Spare Parts", href: "/spare-parts" },
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
            <Link href="/services" className="font-semibold text-primary hover:underline">Maintenance Services</Link>
            <span className="text-border">|</span>
            <Link href="/spare-parts" className="font-semibold text-primary hover:underline">Spare Parts</Link>
            <span className="text-border">|</span>
            <Link href="/contact" className="font-semibold text-primary hover:underline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white font-heading md:text-3xl">
            Ready to Switch to Lithium?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Contact us to learn more about RoyPow LiFePO4 forklift batteries.
            Our team will help you find the right battery for your fleet
            and calculate the cost savings of switching from lead-acid.
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
