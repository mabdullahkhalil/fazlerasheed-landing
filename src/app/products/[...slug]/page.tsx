import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  brands,
  equipmentTypes,
  partCategories,
  getBrandBySlug,
  getEquipmentBySlug,
  getBrandEquipmentCombos,
} from "@/data/catalog";

/* ── Static params: generate both /products/[type] and /products/[brand]/[type] ── */

export function generateStaticParams() {
  const single = equipmentTypes.map((e) => ({ slug: [e.slug] }));
  const combo = getBrandEquipmentCombos().map(({ brand, equipment }) => ({
    slug: [brand.slug, equipment.slug],
  }));
  return [...single, ...combo];
}

/* ── Metadata ── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug.length === 1) {
    const equipment = getEquipmentBySlug(slug[0]);
    if (!equipment) return {};
    return {
      title: `${equipment.name} for Sale & Rental in Pakistan | Fazlerasheed & Co.`,
      description: equipment.description,
      alternates: { canonical: `https://fazlerasheed.com/products/${equipment.slug}` },
    };
  }

  if (slug.length === 2) {
    const brand = getBrandBySlug(slug[0]);
    const equipment = getEquipmentBySlug(slug[1]);
    if (!brand || !equipment) return {};
    return {
      title: `${brand.name} ${equipment.name} for Sale & Rental in Pakistan | Fazlerasheed & Co.`,
      description: `Buy or rent ${brand.name} ${equipment.name.toLowerCase()} in Pakistan. ${equipment.description}`,
      alternates: {
        canonical: `https://fazlerasheed.com/products/${brand.slug}/${equipment.slug}`,
      },
    };
  }

  return {};
}

/* ── Page ── */

export default async function ProductsSlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug.length === 1) return <EquipmentTypePage typeSlug={slug[0]} />;
  if (slug.length === 2) return <BrandEquipmentPage brandSlug={slug[0]} typeSlug={slug[1]} />;
  notFound();
}

/* ═══════════════════════════════════════════════════════════════
   EQUIPMENT TYPE PAGE  — /products/[type]
   ═══════════════════════════════════════════════════════════════ */

function EquipmentTypePage({ typeSlug }: { typeSlug: string }) {
  const equipment = getEquipmentBySlug(typeSlug);
  if (!equipment) notFound();

  const supportedBrands = brands.filter((b) =>
    equipment.brands.includes(b.name),
  );
  const otherEquipment = equipmentTypes.filter((e) => e.slug !== equipment.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fazlerasheed.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://fazlerasheed.com/products" },
      { "@type": "ListItem", position: 3, name: equipment.name, item: `https://fazlerasheed.com/products/${equipment.slug}` },
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
            <Link href="/products" className="transition-colors hover:text-white/80">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{equipment.name}</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            {equipment.name}{" "}for Sale &amp; Rental in Pakistan
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            {equipment.description}
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
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* About + Specs */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-4xl font-bold text-primary/15 font-heading">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Overview
              </p>
              <h2 className="mb-5 text-2xl font-bold text-foreground font-heading md:text-3xl">
                About Our {equipment.name}
              </h2>
              <p className="mb-8 text-base leading-relaxed text-muted">
                {equipment.longDescription}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {equipment.specs.map((spec) => (
                  <div key={spec.label} className="rounded-xl border border-border bg-surface px-5 py-4">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">{spec.label}</div>
                    <div className="text-lg font-bold text-foreground font-heading">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Image src={equipment.image} alt={equipment.alt} width={500} height={500} className="rounded-2xl border border-border shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Available brands */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl font-bold text-primary/15 font-heading">02</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Available Brands</p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              {equipment.name} Brands We Deal In
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {supportedBrands.map((b) => (
              <Link
                key={b.slug}
                href={`/products/${b.slug}/${equipment.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{b.name}</div>
                  <div className="text-xs text-muted">{b.country} &middot; Parts available</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other equipment types */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">More Equipment</p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Explore Other Equipment Types
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {otherEquipment.map((eq) => (
              <Link
                key={eq.slug}
                href={`/products/${eq.slug}`}
                className="group rounded-xl border border-border bg-surface px-5 py-4 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <h3 className="mb-1 text-sm font-bold text-foreground font-heading transition-colors group-hover:text-primary">{eq.name}</h3>
                <p className="text-xs leading-relaxed text-muted line-clamp-2">{eq.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="border-t border-border bg-surface py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-muted">Related:</span>
            <Link href="/batteries" className="font-semibold text-primary hover:underline">Traction Batteries</Link>
            <span className="text-border">|</span>
            <Link href="/services" className="font-semibold text-primary hover:underline">Rental &amp; Maintenance</Link>
            <span className="text-border">|</span>
            <Link href="/parts" className="font-semibold text-primary hover:underline">Spare Parts</Link>
            <span className="text-border">|</span>
            <Link href="/parts/category/tires-wheels" className="font-semibold text-primary hover:underline">Tires &amp; Wheels</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white font-heading md:text-3xl">
            Interested in {equipment.name}?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Whether you need to buy or rent, our team will help you find the
            right {equipment.name.toLowerCase()} for your operations with competitive pricing
            and full after-sales support.
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

/* ═══════════════════════════════════════════════════════════════
   BRAND + EQUIPMENT PAGE  — /products/[brand]/[type]
   ═══════════════════════════════════════════════════════════════ */

function BrandEquipmentPage({ brandSlug, typeSlug }: { brandSlug: string; typeSlug: string }) {
  const brand = getBrandBySlug(brandSlug);
  const equipment = getEquipmentBySlug(typeSlug);
  if (!brand || !equipment) notFound();
  if (!brand.equipmentTypes.includes(equipment.name)) notFound();

  const categories = partCategories.filter((c) =>
    brand.partCategories.includes(c.name),
  );

  const otherBrands = brands.filter(
    (b) => b.slug !== brand.slug && b.equipmentTypes.includes(equipment.name),
  );

  const otherEquipment = brand.equipmentTypes
    .filter((name) => name !== equipment.name)
    .map((name) => equipmentTypes.find((e) => e.name === name))
    .filter(Boolean) as typeof equipmentTypes;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fazlerasheed.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://fazlerasheed.com/products" },
      { "@type": "ListItem", position: 3, name: equipment.name, item: `https://fazlerasheed.com/products/${equipment.slug}` },
      { "@type": "ListItem", position: 4, name: `${brand.name} ${equipment.name}`, item: `https://fazlerasheed.com/products/${brand.slug}/${equipment.slug}` },
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
            <Link href="/products" className="transition-colors hover:text-white/80">Products</Link>
            <span className="mx-2">/</span>
            <Link href={`/products/${equipment.slug}`} className="transition-colors hover:text-white/80">{equipment.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{brand.name}</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            {brand.name} {equipment.name} {" "} for Sale &amp; Rental in Pakistan
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            Buy or rent {brand.name} {equipment.name.toLowerCase()} in Pakistan
            with full after-sales support from Fazlerasheed &amp; Co.{" "}
            {equipment.description}
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
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-4xl font-bold text-primary/15 font-heading">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                About {brand.name} {equipment.name}
              </p>
              <h2 className="mb-5 text-2xl font-bold text-foreground font-heading md:text-3xl">
                Why Choose {brand.name} {equipment.name} from Fazlerasheed?
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted">
                {brand.longDescription}
              </p>
              <p className="mb-6 text-base leading-relaxed text-muted">
                {equipment.longDescription}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">{brand.country}</div>
                  <div className="text-xs text-muted">Origin</div>
                </div>
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">{brand.equipmentTypes.length}</div>
                  <div className="text-xs text-muted">Equipment Types</div>
                </div>
                <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
                  <div className="text-lg font-bold text-primary font-heading">{brand.partCategories.length}</div>
                  <div className="text-xs text-muted">Part Categories</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={brand.image}
                alt={`${brand.name} ${equipment.name.toLowerCase()} for sale in Pakistan`}
                width={500}
                height={500}
                className="rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl font-bold text-primary/15 font-heading">02</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Specifications</p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              {brand.name} {equipment.name} Specs
            </h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {equipment.specs.map((spec) => (
              <div key={spec.label} className="rounded-xl border border-border bg-white px-5 py-4">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">{spec.label}</div>
                <div className="text-lg font-bold text-foreground font-heading">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part Categories */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl font-bold text-primary/15 font-heading">03</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Spare Parts</p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              {brand.name} {equipment.name} Spare Parts
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/parts/category/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <Image
                    src={cat.image}
                    alt={`${cat.name} for ${brand.name} ${equipment.name.toLowerCase()}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="flex items-center justify-between px-4 py-3.5">
                  <h3 className="text-sm font-bold text-foreground font-heading">{cat.name}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-primary"><path d="m9 18 6-6-6-6" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Brands for this Equipment */}
      {otherBrands.length > 0 && (
        <section className="bg-surface py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Also Available</p>
              <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
                Other {equipment.name} Brands
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {otherBrands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/products/${b.slug}/${equipment.slug}`}
                  className="rounded-full border border-border bg-white px-5 py-2 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/30 hover:text-primary"
                >
                  {b.name} {equipment.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Equipment by this Brand */}
      {otherEquipment.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">More {brand.name} Equipment</p>
              <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
                {brand.name} Equipment Range
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {otherEquipment.map((eq) => (
                <Link
                  key={eq.slug}
                  href={`/products/${brand.slug}/${eq.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </div>
                  <span className="text-sm font-bold text-foreground">{brand.name} {eq.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Links */}
      <section className="border-t border-border bg-surface py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-muted">Related:</span>
            <Link href={`/parts/${brand.slug}`} className="font-semibold text-primary hover:underline">{brand.name} Parts</Link>
            <span className="text-border">|</span>
            <Link href={`/products/${equipment.slug}`} className="font-semibold text-primary hover:underline">All {equipment.name}</Link>
            <span className="text-border">|</span>
            <Link href="/batteries" className="font-semibold text-primary hover:underline">Traction Batteries</Link>
            <span className="text-border">|</span>
            <Link href="/services" className="font-semibold text-primary hover:underline">Rental &amp; Maintenance</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white font-heading md:text-3xl">
            Need a {brand.name} {equipment.name.charAt(0).toUpperCase() + equipment.name.slice(1).toLowerCase()}?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Whether you need to buy or rent, our team will help you find the
            right {brand.name} {equipment.name.toLowerCase()} for your
            operations with competitive pricing and full after-sales support
            across Pakistan.
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
