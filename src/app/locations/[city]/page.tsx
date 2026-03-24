import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, cities, equipmentTypes, getCityBySlug } from "@/data/catalog";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `Forklift Rental & Spare Parts in ${city.name} | Fazlerasheed & Co.`,
    description: city.description,
    alternates: { canonical: `https://fazlerasheed.com/locations/${city.slug}` },
  };
}

const services = [
  {
    title: "Sales & Rental",
    href: "/products",
    description:
      "New and imported battery-operated forklifts, reach trucks, stackers, and pallet trucks available for outright purchase or flexible rental.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2" /><path d="M4 12h16" /><path d="M12 4v16" /></svg>
    ),
  },
  {
    title: "Spare Parts",
    href: "/spare-parts",
    description:
      "Genuine and aftermarket spare parts for all major forklift brands with fast delivery and expert part identification support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4" /><path d="m6.8 15-3.5 2" /><path d="m20.7 17-3.5-2" /><path d="M6.8 9 3.3 7" /><path d="m20.7 7-3.5 2" /><path d="m12 22 0-4" /><circle cx="12" cy="12" r="4" /></svg>
    ),
  },
  {
    title: "Traction Batteries",
    href: "/batteries",
    description:
      "Industrial traction batteries for electric forklifts and warehouse equipment with installation, charging solutions, and maintenance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="10" x="4" y="7" rx="2" /><path d="M10 7V5a2 2 0 0 1 4 0v2" /><line x1="8" x2="8" y1="11" y2="13" /><line x1="16" x2="16" y1="11" y2="13" /></svg>
    ),
  },
  {
    title: "Maintenance",
    href: "/services",
    description:
      "Preventive maintenance programs, on-site repairs, and annual service contracts to maximize uptime and extend equipment life.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
    ),
  },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const otherCities = cities.filter((c) => c.slug !== city.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fazlerasheed.com" },
      { "@type": "ListItem", position: 2, name: "Locations" },
      { "@type": "ListItem", position: 3, name: city.name, item: `https://fazlerasheed.com/locations/${city.slug}` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Fazlerasheed & Co. - ${city.name}`,
    description: city.description,
    url: `https://fazlerasheed.com/locations/${city.slug}`,
    telephone: "+923336871970",
    email: "info@fazlerasheed.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.province,
      addressCountry: "PK",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    parentOrganization: {
      "@id": "https://fazlerasheed.com/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, localBusinessSchema]) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
          <nav className="mb-4 text-center text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white/80">Home</Link>
            <span className="mx-2">/</span>
            <span className="transition-colors hover:text-white/80">Locations</span>
            <span className="mx-2">/</span>
            <span className="text-white/80">{city.name}</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            Forklift Solutions in {city.name}, {city.province}
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            {city.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Get a Quote in {city.name}
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

      {/* About this city */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">01</span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              {city.name}, {city.province}
            </p>
            <h2 className="mb-5 text-2xl font-bold text-foreground font-heading md:text-3xl">
              Forklift Services in {city.name}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted">
              {city.longDescription}
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                <div className="text-lg font-bold text-primary font-heading">{city.province}</div>
                <div className="text-xs text-muted">Province</div>
              </div>
              <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                <div className="text-lg font-bold text-primary font-heading">{city.industries.length}</div>
                <div className="text-xs text-muted">Industries Served</div>
              </div>
              <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                <div className="text-lg font-bold text-primary font-heading">{city.landmarks.length}</div>
                <div className="text-xs text-muted">Industrial Zones</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">02</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              What We Offer
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Services in {city.name}
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-sm font-bold text-foreground font-heading">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5"><path d="m9 18 6-6-6-6" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">03</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Local Expertise
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Industries We Serve in {city.name}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {city.industries.map((industry) => (
              <div
                key={industry}
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{industry}</div>
                  <div className="text-xs text-muted">{city.name}, {city.province}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Industrial landmarks */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {city.landmarks.map((landmark) => (
              <span
                key={landmark}
                className="rounded-full border border-primary/15 bg-primary-light px-5 py-2 text-xs font-semibold text-primary shadow-sm"
              >
                {landmark}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Available */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">04</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Trusted Brands
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Brands Available in {city.name}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/parts/${b.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{b.name}</div>
                  <div className="text-xs text-muted">{b.country} &middot; Parts &amp; Equipment</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Available */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">05</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Equipment Types
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Equipment Available in {city.name}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {equipmentTypes.map((eq) => (
              <Link
                key={eq.slug}
                href={`/products/${eq.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </div>
                <span className="text-sm font-bold text-foreground">{eq.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Nationwide Coverage
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Other Locations
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="group rounded-xl border border-border bg-surface px-5 py-4 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <h3 className="mb-1 text-sm font-bold text-foreground font-heading transition-colors group-hover:text-primary">
                  {c.name}, {c.province}
                </h3>
                <p className="text-xs leading-relaxed text-muted line-clamp-2">
                  {c.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white font-heading md:text-3xl">
            Need Forklifts in {city.name}?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Whether you need to buy, rent, or service forklifts in {city.name},
            our team is ready to help. Get in touch for competitive pricing
            and fast delivery across {city.province}.
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
