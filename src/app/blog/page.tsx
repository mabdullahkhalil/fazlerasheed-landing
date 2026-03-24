import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Fazlerasheed & Co.",
  description:
    "Expert insights on forklifts, batteries, warehouse operations and material handling equipment in Pakistan. Buying guides, maintenance tips and industry news.",
  alternates: { canonical: "https://fazlerasheed.com/blog" },
};

const categoryLabels: Record<string, string> = {
  "buying-guides": "Buying Guides",
  comparisons: "Comparisons",
  "maintenance-tips": "Maintenance Tips",
  "industry-insights": "Industry Insights",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fazlerasheed.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://fazlerasheed.com/blog" },
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
            <span className="text-white/80">Blog</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            Insights & Guides
          </h1>
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            Expert advice on forklifts, batteries, warehouse operations and
            material handling equipment in Pakistan.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-muted">No blog posts yet. Check back soon!</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border/50 bg-white transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                    <Image
                      src={post.coverImage}
                      alt={post.coverImageAlt}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                        {categoryLabels[post.category] ?? post.category}
                      </span>
                      <span className="text-xs text-muted">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="mb-2 text-lg font-bold text-foreground font-heading leading-snug">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed text-muted line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted">By {post.author}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white font-heading md:text-3xl">
            Need Expert Help?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Our team has 10+ years of experience in material handling equipment.
            Contact us for personalized advice on forklifts, batteries and warehouse solutions.
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
