import Link from "next/link";
import Image from "next/image";

const businessLinks = [
  { label: "Products", href: "/products" },
  { label: "Batteries", href: "/batteries" },
  { label: "Services", href: "/services" },
  { label: "Spare Parts", href: "/parts" },
  { label: "Contact Us", href: "/contact" },
  { label: "Shop", href: "https://shop.fazlerasheed.com" },
];

const serviceLinks = [
  { label: "Sales & Rental", href: "/services" },
  { label: "Maintenance", href: "/services" },
  { label: "Battery Regeneration", href: "/services" },
  { label: "Wheel Retreading", href: "/services" },
];

const phones = [
  { display: "+92 333 6871970", href: "tel:+923336871970" },
  { display: "+92 342 4554488", href: "tel:+923424554488" },
  { display: "+92 331 1141062", href: "tel:+923311141062" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Company */}
          <div>
            <Link href="/" className="mb-5 inline-block">
              <Image
                src="/images/logo.png"
                alt="Fazlerasheed and Company"
                width={250}
                height={42}
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              We are going global for business of electric fork lifters
              reconditioning / trade and all material handling solution with the
              aim to help our customers achieve efficient operations and reduced
              downtimes.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/fazl-e-rasheed-and-co/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-primary/30 hover:bg-primary-light hover:text-primary"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/fazlerasheedco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-primary/30 hover:bg-primary-light hover:text-primary"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-primary/30 hover:bg-primary-light hover:text-primary"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Our Business */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground font-heading">
              Our Business
            </h3>
            <ul className="space-y-2.5">
              {businessLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground font-heading">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground font-heading">
              Contact Info
            </h3>
            <ul className="mb-5 space-y-2">
              {phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary/60">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-4 text-sm text-muted">
              <div>
                <h5 className="mb-0.5 font-semibold text-foreground">Head Office</h5>
                <p>328/3 W Block, Street 25, Phase 3, DHA Lahore Cantt. Pakistan, 54810</p>
              </div>
              <div>
                <h5 className="mb-0.5 font-semibold text-foreground">Site</h5>
                <p>Coca-Cola Stop, 12 KM Raiwind Road, Lahore, Pakistan</p>
              </div>
              <div>
                <h5 className="mb-0.5 font-semibold text-foreground">Retail Shop</h5>
                <p>Shop # 29, Ground Floor Mehboob Auto Market, Near Punjab Bank Badami Bagh, Lahore</p>
              </div>
            </div>

            <div className="mt-5 space-y-1.5">
              <a href="mailto:info@fazlerasheed.com" className="block text-sm text-muted hover:text-primary">
                info@fazlerasheed.com
              </a>
              <a href="mailto:sales@fazlerasheed.com" className="block text-sm text-muted hover:text-primary">
                sales@fazlerasheed.com
              </a>
              <a href="mailto:rent@fazlerasheed.com" className="block text-sm text-muted hover:text-primary">
                rent@fazlerasheed.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} Fazlerasheed and Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
