import Link from "next/link";

const services = [
  {
    title: "Services",
    description:
      "Checkout details of our rental, maintenance, battery regeneration and retreading services.",
    href: "/services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Spare Parts",
    description:
      "Get best quality genuine spare parts, branded and OEM, at the best prices.",
    href: "/spare-parts",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: "Products",
    description:
      "Manage your warehouse operations by choosing suitable machines from our fleet of 200+ MHEs.",
    href: "/products",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

export default function ServiceCards() {
  return (
    <section data-fast-scroll="scroll_to_services" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold text-foreground font-heading md:text-4xl">
            Complete Warehousing Solutions
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04]"
            >
              <div className="mb-6 inline-flex rounded-xl bg-primary-light p-3.5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground font-heading">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
