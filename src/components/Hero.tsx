import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-light-blue via-white to-primary-light">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 -z-0 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute -left-20 bottom-0 -z-0 h-[300px] w-[300px] rounded-full bg-accent/[0.05] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Text */}
        <div className="max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-primary shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            TRUSTED BY PAKISTAN&apos;S TOP 1% COMPANIES
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-[1.15] tracking-tight text-foreground font-heading md:text-5xl lg:text-[3.25rem]">
            Leaders in Imported{" "}
            <span className="text-primary">Electric Forklifts</span> in Pakistan
          </h1>
          <p className="mb-8 text-base leading-relaxed text-muted md:text-lg">
            Elevate your warehouse operations with a leading partner that has
            your back &ndash; comprehensive services, after-sales support,
            rental and sales solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            <a
              href="tel:+923424554488"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/30 hover:bg-primary-light"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-10 border-t border-border/60 pt-8">
            <div>
              <div className="text-3xl font-bold text-primary font-heading">200+</div>
              <div className="mt-1 text-sm text-muted">Machines in Fleet</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary font-heading">10+</div>
              <div className="mt-1 text-sm text-muted">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary font-heading">8+</div>
              <div className="mt-1 text-sm text-muted">Premium Brands</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
            <Image
              src="/images/hero.webp"
              alt="Fazlerasheed and Company team in warehouse with battery operated forklifts"
              width={600}
              height={400}
              priority
              className="relative rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
