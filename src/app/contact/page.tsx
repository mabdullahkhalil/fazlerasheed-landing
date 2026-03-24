import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Fazlerasheed & Co. | Get in Touch",
  description:
    "Contact Fazlerasheed & Co. for forklift rental, spare parts, traction batteries, and maintenance services in Pakistan. Call +92 333 6871970 or email us.",
  alternates: { canonical: "https://fazlerasheed.com/contact" },
};

const contacts = [
  {
    name: "Khalil Ahmad",
    phone: "+92 333 6871970",
    href: "tel:+923336871970",
  },
  {
    name: "Muhammad Abdullah",
    phone: "+92 342 4554488",
    href: "tel:+923424554488",
  },
  {
    name: "Muhammad Ibrahim",
    phone: "+92 331 1141062",
    href: "tel:+923311141062",
  },
];

const emails = [
  "khalil@fazlerasheed.com",
  "info@fazlerasheed.com",
  "sales@fazlerasheed.com",
];

const locations = [
  {
    label: "Head Office",
    address: "328/3 W Block, Street 25, Phase 3, DHA Lahore Cantt. Pakistan, 54810",
  },
  {
    label: "Site Office",
    address: "Coca-Cola Stop, 12 KM Raiwind Road, Lahore, Pakistan",
  },
  {
    label: "Retail Shop",
    address: "Shop #29, Ground Floor, Mehboob Auto Market, Near Punjab Bank, Badami Bagh, Lahore",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
          <nav className="mb-4 text-center text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white/80">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Contact Us</span>
          </nav>
          <h1 className="mx-auto mb-4 max-w-3xl text-center text-3xl font-bold leading-snug text-white font-heading md:text-4xl">
            Contact Us for{" "}
            Forklift Solutions
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
            Have a question about our equipment, need a rental quote, or
            want to schedule maintenance? Our team is ready to help you
            find the right solution.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+923336871970"
              data-fast-goal="contact_phone_clicked"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Call +92 333 6871970
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </a>
            <a
              href="mailto:info@fazlerasheed.com"
              data-fast-goal="contact_email_clicked"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Send a Message
              </p>
              <h2 className="mb-8 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Email Us Today
              </h2>

              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="text-4xl font-bold text-foreground/10 font-heading">02</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Direct Contact
              </p>
              <h2 className="mb-8 text-3xl font-bold text-foreground font-heading md:text-4xl">
                Contact Info
              </h2>

              {/* Phone Numbers */}
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
                  Phone
                </h3>
                <div className="space-y-3">
                  {contacts.map((c) => (
                    <a
                      key={c.phone}
                      href={c.href}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-all hover:border-primary/20 hover:shadow-sm"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{c.name}</div>
                        <div className="text-sm text-muted">{c.phone}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Emails */}
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
                  Email
                </h3>
                <div className="space-y-2">
                  {emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-all hover:border-primary/20 hover:shadow-sm"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-muted transition-colors group-hover:text-primary">{email}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/fazlerasheed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all hover:border-primary/30 hover:bg-primary hover:text-white"
                    aria-label="Fazlerasheed LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/fazlerasheedandco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all hover:border-primary/30 hover:bg-primary hover:text-white"
                    aria-label="Fazlerasheed Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@fazlerasheedandcompany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all hover:border-primary/30 hover:bg-primary hover:text-white"
                    aria-label="Fazlerasheed YouTube"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations + Map */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Our Locations
            </p>
            <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold text-foreground font-heading md:text-4xl">
              Visit Us in Lahore
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((loc) => (
              <div
                key={loc.label}
                className="group rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground font-heading">
                  {loc.label}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{loc.address}</p>
              </div>
            ))}
          </div>

          {/* Google Map */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Fazlerasheed%20%26%20Co.%20raiwind%20road&t=m&z=15&output=embed&iwloc=near"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fazlerasheed &amp; Co. location on Google Maps"
            />
          </div>
        </div>
      </section>
    </>
  );
}
