import Image from "next/image";
import Link from "next/link";

export default function Partnership() {
  return (
    <>

      {/* BYD Partnership */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex items-center justify-center rounded-2xl border border-border bg-surface p-12 shadow-lg lg:order-2">
              <Image
                src="/images/brands/byd.png"
                alt="BYD electric forklift brand - Fazlerasheed partnership in Pakistan"
                width={400}
                height={200}
                className="w-full max-w-sm object-contain"
              />
            </div>

            <div className="lg:order-1">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Strategic Partnership
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                BYD Electric Forklifts &mdash;{" "}
                <span className="text-primary">LiFePO4</span> Powered MHE
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                Fazlerasheed & Co. has partnered with BYD, the world&apos;s largest
                rechargeable battery manufacturer, to bring their complete range
                of LiFePO4-powered electric forklifts to Pakistan. BYD forklifts
                deliver zero emissions, 90-minute fast charging and 15+ hours of
                runtime on a single charge.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                With 16 models across counterbalance, cushion tire, pallet truck
                and tow tractor categories, BYD offers a complete electric MHE
                solution backed by an industry-best 10-year battery warranty.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/byd"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
                >
                  View BYD Forklifts
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-primary/20 px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EP Green Partnership */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex justify-center lg:order-1">
              <Image
                src="/images/ep-partnership.webp"
                alt="EP Green lithium-ion forklift - Fazlerasheed partnership in Pakistan"
                width={648}
                height={500}
                className="w-full rounded-2xl border border-border shadow-lg"
              />
            </div>

            <div className="lg:order-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Strategic Partnership
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Introducing EP Green &mdash;{" "}
                <span className="text-primary">Lithium-Ion</span> Material
                Handling in Pakistan
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                Fazlerasheed & Co. has partnered with EP Green to become their
                authorized distributor for lithium-ion forklifts, reach trucks,
                stackers and power pallets in Pakistan. EP Green machines deliver
                zero emissions, rapid charging and significantly lower maintenance
                costs compared to traditional lead-acid equipment.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                With 14 machines across 4 equipment categories, EP Green offers a
                complete lithium-ion MHE solution for warehouses looking to reduce
                their environmental footprint while boosting operational
                efficiency.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/ep"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
                >
                  View EP Green Machines
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-primary/20 px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RoyPow Partnership */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex justify-center lg:order-2">
              <Image
                src="/images/roypow-partnership.webp"
                alt="RoyPow LiFePO4 lithium forklift battery - Fazlerasheed partnership in Pakistan"
                width={648}
                height={500}
                className="w-full rounded-2xl border border-border shadow-lg"
              />
            </div>

            <div className="lg:order-1">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Battery Partnership
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground font-heading md:text-4xl">
                RoyPow <span className="text-primary">LiFePO4</span> Forklift
                Batteries in Pakistan
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                Fazlerasheed & Co. is the authorized distributor of RoyPow
                lithium iron phosphate batteries in Pakistan. RoyPow batteries
                deliver up to 10 years of service life, 3,500+ charge cycles
                and zero daily maintenance — a smarter alternative to
                traditional lead-acid power.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                Available from 24V to 80V with built-in Battery Management
                Systems, RoyPow batteries are a direct drop-in replacement for
                lead-acid batteries across all major forklift brands including
                Toyota, Linde, Jungheinrich and Still.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/batteries/roypow"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
                >
                  View RoyPow Batteries
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-primary/20 px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
