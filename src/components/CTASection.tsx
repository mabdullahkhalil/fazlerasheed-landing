import Link from "next/link";

export default function CTASection() {
  return (
    <section data-fast-scroll="scroll_to_cta" className="bg-gradient-to-br from-primary to-primary-dark py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-white font-heading md:text-4xl">
          Ready to Optimize Your Warehouse?
        </h2>
        <p className="mb-8 text-base leading-relaxed text-white/80 md:text-lg">
          Get in touch with our experts to find the perfect material handling
          solution for your business. Sales, rental, maintenance &mdash; we
          have you covered.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            data-fast-goal="cta_contact_clicked"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-md transition-all hover:bg-gray-50 hover:shadow-lg"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
          <a
            href="tel:+923336871970"
            data-fast-goal="cta_phone_clicked"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +92 333 6871970
          </a>
        </div>
      </div>
    </section>
  );
}
