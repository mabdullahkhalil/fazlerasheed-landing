import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://fazlerasheed.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
      authors: [post.author],
      images: [{ url: post.coverImage, alt: post.coverImageAlt }],
    },
  };
}

const categoryLabels: Record<string, string> = {
  "buying-guides": "Buying Guides",
  comparisons: "Comparisons",
  "maintenance-tips": "Maintenance Tips",
  "industry-insights": "Industry Insights",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== post.slug);
  const related = allPosts.slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fazlerasheed.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://fazlerasheed.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://fazlerasheed.com/blog/${post.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `https://fazlerasheed.com${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Fazlerasheed & Co.",
      url: "https://fazlerasheed.com",
    },
    mainEntityOfPage: `https://fazlerasheed.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, articleSchema]) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="mx-auto max-w-4xl px-4 py-10 lg:px-8 lg:py-14">
          <nav className="mb-4 text-center text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white/80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="transition-colors hover:text-white/80">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80 line-clamp-1">{post.title}</span>
          </nav>
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
              {categoryLabels[post.category] ?? post.category}
            </span>
            <span className="text-xs text-white/60">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-2xl font-bold leading-snug text-white font-heading md:text-4xl">
            {post.title}
          </h1>
          <p className="text-center text-sm text-white/60">
            By {post.author}
            {post.updatedAt && post.updatedAt !== post.date && (
              <> &middot; Updated {new Date(post.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</>
            )}
          </p>
        </div>
      </section>

      {/* Cover Image */}
      <div className="mx-auto -mt-1 max-w-4xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            width={1200}
            height={630}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white py-12 lg:py-16">
        <div
          className="prose mx-auto max-w-3xl px-4 lg:px-8"
          dangerouslySetInnerHTML={{ __html: post.html! }}
        />

        {/* Inline CTA */}
        <div className="mx-auto mt-12 max-w-3xl px-4 lg:px-8">
          <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary-light to-white p-8 text-center md:p-10">
            <h3 className="mb-2 text-xl font-bold text-foreground font-heading md:text-2xl">
              Looking for Forklifts or Parts?
            </h3>
            <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-muted md:text-base">
              Fazlerasheed & Co. supplies reconditioned forklifts, genuine spare
              parts, and traction batteries across Pakistan. Get a free quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
              >
                Get a Free Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-primary-light"
              >
                Browse Equipment
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Tags */}
      <section className="border-t border-border bg-white pb-12">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-surface py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Keep Reading
              </p>
              <h2 className="text-2xl font-bold text-foreground font-heading md:text-3xl">
                More Articles
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border/50 bg-white transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                    <Image
                      src={r.coverImage}
                      alt={r.coverImageAlt}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-base font-bold text-foreground font-heading leading-snug">
                      {r.title}
                    </h3>
                    <span className="text-xs text-muted">
                      {new Date(r.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back + CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white font-heading md:text-3xl">
            Need Expert Advice?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Our team has over 10 years of experience in material handling
            equipment. Get in touch for personalized guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
