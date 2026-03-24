import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { brands, partCategories, equipmentTypes, getBrandBySlug } from "@/data/catalog";

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};
  return {
    title: `${brand.name} Forklift Spare Parts in Pakistan | Fazlerasheed & Co.`,
    description: brand.description,
    alternates: { canonical: `https://fazlerasheed.com/parts/${brand.slug}` },
  };
}

export default async function BrandPartsPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const categories = partCategories.filter((c) =>
    brand.partCategories.includes(c.name),
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fazlerasheed.com" },
      { "@type": "ListItem", position: 2, name: "Parts", item: "https://fazlerasheed.com/parts" },
      { "@type": "ListItem", position: 3, name: `${brand.name} Parts`, item: `https://fazlerasheed.com/parts/${brand.slug}` },
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
            <Link href="/parts" className="transition-colors hover:text-white/80">Spare Parts</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{brand.name}</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            {brand.name} Forklift Spare Parts in Pakistan
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            {brand.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Request {brand.name} Parts
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link
              href="https://shop.fazlerasheed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              Browse Shop
            </Link>
          </div>
        </div>
      </section>

      {/* About this brand */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                About {brand.name}
              </p>
              <h2 className="mb-5 text-2xl font-bold text-foreground font-heading md:text-3xl">
                Why Choose {brand.name} Parts from Fazlerasheed?
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted">
                {brand.longDescription}
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
                alt={`${brand.name} forklift and material handling equipment`}
                width={500}
                height={500}
                className="rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment types served */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Equipment We Cover
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              {brand.name} Equipment Types
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {brand.equipmentTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-primary/15 bg-white px-5 py-2 text-sm font-semibold text-primary shadow-sm"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Part categories grid */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">02</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Browse by Category
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              {brand.name} Spare Parts Categories
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
                    alt={`${cat.name} for ${brand.name} forklifts`}
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

      {/* Other brands */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Also Available
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Parts for Other Brands
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {brands
              .filter((b) => b.slug !== brand.slug)
              .map((b) => (
                <Link
                  key={b.slug}
                  href={`/parts/${b.slug}`}
                  className="rounded-full border border-border bg-white px-5 py-2 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/30 hover:text-primary"
                >
                  {b.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Equipment types for this brand */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              {brand.name} Equipment
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              Equipment Types by {brand.name}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {equipmentTypes
              .filter((eq) => eq.brands.includes(brand.name))
              .map((eq) => (
                <Link
                  key={eq.slug}
                  href={brand.equipmentTypes.includes(eq.name) ? `/products/${brand.slug}/${eq.slug}` : `/products/${eq.slug}`}
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
            <span className="text-muted">Related:</span>
            <Link href="/batteries" className="font-semibold text-primary hover:underline">Traction Batteries</Link>
            <span className="text-border">|</span>
            <Link href="/services" className="font-semibold text-primary hover:underline">Maintenance Services</Link>
            <span className="text-border">|</span>
            <Link href="/products" className="font-semibold text-primary hover:underline">All Equipment</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white font-heading md:text-3xl">
            Need {brand.name} Parts?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Send us the part number or describe what you need. Our team will
            source it from our {brand.name} parts inventory with fast delivery across Pakistan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Request a Part
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
