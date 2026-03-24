import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { brands, partCategories, getCategoryBySlug } from "@/data/catalog";

export function generateStaticParams() {
  return partCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `Forklift ${category.name} in Pakistan | Fazlerasheed & Co.`,
    description: category.description,
    alternates: { canonical: `https://fazlerasheed.com/spare-parts/category/${category.slug}` },
  };
}

export default async function CategoryPartsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const supportedBrands = brands.filter((b) =>
    category.brands.includes(b.name),
  );

  const relatedCats = partCategories.filter((c) =>
    category.relatedCategories.includes(c.slug),
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fazlerasheed.com" },
      { "@type": "ListItem", position: 2, name: "Parts", item: "https://fazlerasheed.com/spare-parts" },
      { "@type": "ListItem", position: 3, name: category.name, item: `https://fazlerasheed.com/spare-parts/category/${category.slug}` },
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
            <Link href="/spare-parts" className="transition-colors hover:text-white/80">Spare Parts</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{category.name}</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            Forklift {category.name} in Pakistan
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            {category.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Request Parts
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

      {/* Category detail */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light to-light-blue p-8">
              <Image
                src={category.image}
                alt={category.alt}
                width={580}
                height={430}
                className="relative mx-auto rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                {category.name}
              </p>
              <h2 className="mb-5 text-2xl font-bold text-foreground font-heading md:text-3xl">
                About Our {category.name}
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted">
                {category.longDescription}
              </p>
              <div className="mb-6 grid grid-cols-2 gap-3">
                {["Genuine OEM Parts", "Fast Delivery", "Quality Checked", "Expert Support"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </div>
                  ),
                )}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands that use this part */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">02</span>
              <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Compatible Brands
            </p>
            <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
              {category.name} Available for These Brands
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {supportedBrands.map((b) => (
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
                  <div className="text-xs text-muted">{b.country}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related categories */}
      {relatedCats.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Related Parts
              </p>
              <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
                You May Also Need
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {relatedCats.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/parts/category/${cat.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-white transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
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
      )}

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white font-heading md:text-3xl">
            Can&apos;t Find the {category.name.replace(/s$/, "")} You Need?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Send us the part number or describe what you need. Our team will
            source it from our network of suppliers with fast delivery across Pakistan.
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
