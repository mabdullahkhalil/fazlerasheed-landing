import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Sales and Rental of Forklifts",
    description:
      "Our extensive range includes battery-operated machines ranging from 1 ton to 5.5 tons, with electric machines that come with various attachments to enhance their functionality.",
    href: "/products",
    image: "/images/forklift-sales-rental-pakistan.png",
    imageAlt: "Battery operated forklift sales and rental in Pakistan",
  },
  {
    title: "Traction Batteries in Pakistan",
    description:
      "Fazlerasheed & Co. provides traction batteries, semi traction batteries, backup batteries from European suppliers. We deal in market leading brands including Hawker, Eternity, Sunlight and Trojan.",
    href: "/batteries",
    image: "/images/traction-batteries-pakistan.png",
    imageAlt: "Traction batteries for forklifts in Pakistan - Hawker Eternity Trojan",
  },
  {
    title: "Forklift Spare Parts",
    description:
      "We provide the best quality genuine spare parts of all brands including original, OEM parts, wheels, and solid tires. We are the distributors of world top parts supplier i.e. TVH.",
    href: "/parts",
    image: "/images/forklift-spare-parts-pakistan.png",
    imageAlt: "Genuine OEM forklift spare parts supplier in Pakistan",
  },
  {
    title: "FR Care and Maintenance",
    description:
      "We boast cutting-edge equipment that facilitates the maintenance of all types of machines. Our clients entrust us with their malfunctioning machines, which we expertly refurbish and recondition.",
    href: "/services",
    image: "/images/forklift-maintenance-service.png",
    imageAlt: "Forklift care maintenance and reconditioning service",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Our Expertise
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-foreground font-heading md:text-4xl">
            Let Your Warehouse Operations Run up to{" "}
            <span className="text-primary">500% Faster</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-surface transition-all duration-300 hover:border-primary/15 hover:shadow-lg hover:shadow-primary/[0.04] sm:flex-row"
            >
              {/* Image */}
              <div className={`flex shrink-0 items-center justify-center bg-gradient-to-br from-light-blue to-white p-6 sm:w-48 md:w-52 ${i % 2 === 1 ? "sm:order-2" : ""}`}>
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={180}
                  height={180}
                  className="h-36 w-36 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-40 sm:w-40"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                <h3 className="mb-3 text-lg font-bold text-foreground font-heading">
                  {feature.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
