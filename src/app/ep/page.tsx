import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EP Green Lithium-Ion Forklifts & MHE in Pakistan | Fazlerasheed & Co.",
  description:
    "Fazlerasheed & Co. is the authorized distributor of EP Green lithium-ion forklifts, reach trucks, stackers and power pallets in Pakistan. Zero emissions, low maintenance.",
  alternates: { canonical: "https://fazlerasheed.com/ep" },
};

type Machine = {
  model: string;
  name: string;
  capacity: string;
  battery: string;
  liftHeight: string;
  speed: string;
  image: string;
  href: string;
};

const machineCategories: {
  name: string;
  slug: string;
  description: string;
  machines: Machine[];
}[] = [
  {
    name: "Forklifts",
    slug: "forklifts",
    description: "Lithium-ion and electric counterbalance forklifts from 1 to 3 tons for indoor and outdoor warehouse operations.",
    machines: [
      {
        model: "TCL101",
        name: "EP Forklift 1 Ton",
        capacity: "1,000 kg",
        battery: "80V Li-ion (50/100Ah)",
        liftHeight: "2,500 – 4,500 mm",
        speed: "PMSM controller",
        image: "/images/ep-machines/forklift-1t.webp",
        href: "https://shop.fazlerasheed.com/products/ep-forklift-1-ton",
      },
      {
        model: "CTL 15",
        name: "EP Forklift 1.5 Ton",
        capacity: "1,500 kg",
        battery: "48V / 560Ah",
        liftHeight: "Up to 7,695 mm",
        speed: "10 – 10.5 km/h",
        image: "/images/ep-machines/forklift-1-5t.webp",
        href: "https://shop.fazlerasheed.com/products/ep-forklift-1-5-ton",
      },
      {
        model: "EFL302B3",
        name: "EP Forklift 3 Ton",
        capacity: "3,000 kg",
        battery: "80V Li-ion (205/280Ah)",
        liftHeight: "2,700 – 6,000 mm",
        speed: "AC technology",
        image: "/images/ep-machines/forklift-3t.webp",
        href: "https://shop.fazlerasheed.com/products/ep-forklift-3-ton",
      },
      {
        model: "EFXZ-301-H",
        name: "EP Forklift 3 Ton (4-Wheel)",
        capacity: "3,000 kg",
        battery: "80V / 280Ah Li-ion",
        liftHeight: "Up to 6,000 mm",
        speed: "11 – 12 km/h",
        image: "/images/ep-machines/forklift-3t-v2.webp",
        href: "https://shop.fazlerasheed.com/products/ep-forklift-3-ton-08ec93dc-dcac-4b70-87b3-40b1a4825d4c",
      },
    ],
  },
  {
    name: "Power Pallets",
    slug: "power-pallets",
    description: "Electric pallet trucks for efficient horizontal transport in warehouses, distribution centers and retail facilities.",
    machines: [
      {
        model: "EPT20-15ET9",
        name: "EP Power Pallet 1.5 Ton",
        capacity: "1,500 kg",
        battery: "24V / 72Ah AGM",
        liftHeight: "Fork: 1,150 mm",
        speed: "4.0 – 4.5 km/h",
        image: "/images/ep-machines/power-pallet-1-5t.webp",
        href: "https://shop.fazlerasheed.com/products/ep-power-pallet-1-5-ton",
      },
      {
        model: "ETR151",
        name: "EP Power Pallet 1.5 Ton (Li-ion)",
        capacity: "1,500 kg",
        battery: "48V / 40Ah Li-ion",
        liftHeight: "Fork: 1,150 mm",
        speed: "5.5 – 6.0 km/h",
        image: "/images/ep-machines/power-pallet-1-5t-li.webp",
        href: "https://shop.fazlerasheed.com/products/ep-power-pallet-1-5-ton-li-ion-battery",
      },
      {
        model: "ETR151",
        name: "EP Power Pallet 1.5 Ton (Lead Acid)",
        capacity: "1,500 kg",
        battery: "48V / 65Ah Lead Acid",
        liftHeight: "Fork: 1,150 mm",
        speed: "5.5 – 6.0 km/h",
        image: "/images/ep-machines/power-pallet-1-5t-la.webp",
        href: "https://shop.fazlerasheed.com/products/ep-power-pallet-1-5-ton-lead-acid-battery",
      },
      {
        model: "EPT15/20-EZ",
        name: "EP Power Pallet 2 Ton",
        capacity: "1,500 – 2,000 kg",
        battery: "24V Li-ion (removable)",
        liftHeight: "Fork: 1,150 mm",
        speed: "4.0 – 4.5 km/h",
        image: "/images/ep-machines/power-pallet-2t.webp",
        href: "https://shop.fazlerasheed.com/products/ep-power-pallet-2-ton",
      },
    ],
  },
  {
    name: "Stackers",
    slug: "stackers",
    description: "Electric stackers and counter-balance stackers for vertical pallet handling and high-rack storage operations.",
    machines: [
      {
        model: "ESR151",
        name: "EP Stacker 1.5 Ton",
        capacity: "1,500 kg",
        battery: "24V / 105Ah AGM",
        liftHeight: "2,516 – 3,316 mm",
        speed: "DC controller",
        image: "/images/ep-machines/stacker-1-5t.webp",
        href: "https://shop.fazlerasheed.com/products/ep-electric-stacker-1-5-ton",
      },
      {
        model: "DS3",
        name: "EP Stacker 1.5 Ton (Li-ion)",
        capacity: "1,500 kg",
        battery: "24V / 40Ah Li-ion",
        liftHeight: "2,518 – 3,918 mm",
        speed: "Integrated charger",
        image: "/images/ep-machines/stacker-1-5t-li.webp",
        href: "https://shop.fazlerasheed.com/products/ep-electric-stacker-1-5-ton-li-ion-battery",
      },
      {
        model: "DS3",
        name: "EP Stacker 1.5 Ton (Lead Acid)",
        capacity: "1,500 kg",
        battery: "24V / 80Ah Lead Acid",
        liftHeight: "2,518 – 3,918 mm",
        speed: "Heavy-duty frame",
        image: "/images/ep-machines/stacker-1-5t-la.webp",
        href: "https://shop.fazlerasheed.com/products/ep-electric-stacker-1-5-ton-lead-acid-battery",
      },
      {
        model: "RSC101",
        name: "EP Counter Balance Stacker 1.5 Ton",
        capacity: "1,500 kg",
        battery: "48V Lead Acid (85–125Ah)",
        liftHeight: "2,480 – 3,580 mm",
        speed: "DC controller",
        image: "/images/ep-machines/stacker-cb-1-5t.webp",
        href: "https://shop.fazlerasheed.com/products/ep-counter-balance-stacker-1-5-ton-lead-acid-battery",
      },
    ],
  },
  {
    name: "Reach Trucks",
    slug: "reach-trucks",
    description: "Electric reach trucks for narrow-aisle warehousing and high racking systems requiring precision and compact maneuverability.",
    machines: [
      {
        model: "EQA151",
        name: "EP Reach Truck 1.5 Ton (Li-ion)",
        capacity: "1,500 kg",
        battery: "48V / 125Ah Li-ion",
        liftHeight: "2,490 – 3,590 mm",
        speed: "Fast charging",
        image: "/images/ep-machines/reach-1-5t-li.webp",
        href: "https://shop.fazlerasheed.com/products/ep-reach-truck-1-5-ton-li-ion-battery",
      },
      {
        model: "EQA151",
        name: "EP Reach Truck 1.5 Ton (Lead Acid)",
        capacity: "1,500 kg",
        battery: "48V Lead Acid (105/125Ah)",
        liftHeight: "2,490 – 3,590 mm",
        speed: "Low noise operation",
        image: "/images/ep-machines/reach-1-5t-la.webp",
        href: "https://shop.fazlerasheed.com/products/ep-reach-truck-1-5-ton-lead-acid-battery",
      },
    ],
  },
];

const lithiumBenefits = [
  {
    title: "Zero Emissions",
    description: "Clean operation with no harmful fumes, ideal for indoor warehouse environments and food-grade facilities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22 16 8" /><path d="m3.47 12.53 5 5" /><path d="m5 21 1.5-1.5" /><path d="m8 18 1.5-1.5" /><path d="m11 15 1.5-1.5" /><path d="m2 22 2-2" /><circle cx="18" cy="4" r="2" /><path d="M20 6s2.63.84 3 4c.24 2.05-.63 3.88-3 4" /></svg>
    ),
  },
  {
    title: "Fast Charging",
    description: "Lithium-ion batteries charge in 1-2 hours with opportunity charging, eliminating battery swap downtime.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>
    ),
  },
  {
    title: "Low Maintenance",
    description: "No watering, no acid spills, no equalizing charges. Virtually zero daily maintenance required.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
    ),
  },
  {
    title: "Longer Lifespan",
    description: "Up to 3,000+ charge cycles with consistent performance, lasting 2-3x longer than lead-acid batteries.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
  },
];

export default function EPGreenPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fazlerasheed.com" },
      { "@type": "ListItem", position: 2, name: "EP Green Partnership", item: "https://fazlerasheed.com/ep" },
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
            <span className="text-white/80">EP Green Partnership</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            EP Green Lithium-Ion Forklifts & MHE in Pakistan
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            Fazlerasheed & Co. is the authorized distributor of EP Green in
            Pakistan, bringing cutting-edge lithium-ion material handling
            equipment for zero-emission, high-efficiency warehouse operations.
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
              href="https://shop.fazlerasheed.com/t/brands/ep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              Browse EP Shop
            </Link>
          </div>
        </div>
      </section>

      {/* About EP Green */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                About EP Green
              </p>
              <h2 className="mb-5 text-2xl font-bold text-foreground font-heading md:text-3xl">
                The Future of Warehouse Operations is Lithium-Ion
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                EP Green is a global leader in lithium-ion powered material
                handling equipment, specializing in electric forklifts, reach
                trucks, stackers and power pallets designed for modern warehouse
                operations. Their machines combine advanced lithium-ion battery
                technology with robust construction for demanding industrial
                environments.
              </p>
              <p className="mb-6 text-base leading-relaxed text-muted">
                As the authorized distributor of EP Green in Pakistan,
                Fazlerasheed & Co. brings their complete range of lithium-ion
                MHE to the local market, backed by our 10+ years of material
                handling expertise, nationwide service network and dedicated
                after-sales support.
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">14</div>
                  <div className="text-xs text-muted">Machines</div>
                </div>
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">4</div>
                  <div className="text-xs text-muted">Equipment Types</div>
                </div>
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">Li-Ion</div>
                  <div className="text-xs text-muted">Technology</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/ep-partnership.webp"
                alt="EP Green lithium-ion forklift - authorized distributor Fazlerasheed Pakistan"
                width={648}
                height={500}
                className="w-full rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Machine Catalog */}
      {machineCategories.map((cat, catIdx) => (
        <section key={cat.slug} className={catIdx % 2 === 0 ? "bg-surface py-16 lg:py-20" : "bg-white py-16 lg:py-20"}>
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
                    EP {cat.name}
                  </p>
                  <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
                    EP Green {cat.name} in Pakistan
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {cat.description}
                  </p>
                </div>
                <Link
                  href={`/products/${cat.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                >
                  View all {cat.name.toLowerCase()}
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cat.machines.map((machine) => (
                <a
                  key={machine.href}
                  href={machine.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-border/50 bg-white transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                    <Image
                      src={machine.image}
                      alt={`${machine.name} - EP Green ${cat.name.slice(0, -1).toLowerCase()} in Pakistan`}
                      width={800}
                      height={420}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-1 text-xs font-semibold text-primary">{machine.model}</div>
                    <h3 className="mb-3 text-base font-bold text-foreground font-heading">
                      {machine.name}
                    </h3>
                    <div className="space-y-1.5 text-xs text-muted">
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
                      <div className="flex justify-between">
                        <span>Feature</span>
                        <span className="font-semibold text-foreground">{machine.speed}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Lithium-Ion */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">06</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Lithium-Ion Advantage
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Why Choose Lithium-Ion Forklifts?
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {lithiumBenefits.map((benefit) => (
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
              { name: "Reach Trucks", href: "/products/reach-trucks" },
              { name: "Stackers", href: "/products/stackers" },
              { name: "Power Pallets", href: "/products/power-pallets" },
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
            <Link href="/batteries" className="font-semibold text-primary hover:underline">Traction Batteries</Link>
            <span className="text-border">|</span>
            <Link href="/services" className="font-semibold text-primary hover:underline">Maintenance Services</Link>
            <span className="text-border">|</span>
            <Link href="/parts" className="font-semibold text-primary hover:underline">Spare Parts</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white font-heading md:text-3xl">
            Ready for Lithium-Ion MHE?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Contact us to learn more about EP Green lithium-ion forklifts and
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
