import Image from "next/image";

const clientLogos = [
  { src: "/images/clients/Untitled-design-23.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-20.jpg", alt: "Client" },
  { src: "/images/clients/Capture-9.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-19.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-17.jpg", alt: "Client" },
  { src: "/images/clients/Capture-10.jpg", alt: "Client" },
  { src: "/images/clients/Capture-4.jpg", alt: "Client" },
  { src: "/images/clients/Capture-11.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-15.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-11.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-22.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-9.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-8.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-21.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-6.jpg", alt: "Client" },
  { src: "/images/clients/Capture-2.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-24.jpg", alt: "Client" },
  { src: "/images/clients/Capture-7.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-7.jpg", alt: "Client" },
  { src: "/images/clients/Untitled-design-10.jpg", alt: "Client" },
];

export default function ClientLogos() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Our Clients
          </p>
          <h2 className="text-3xl font-bold text-foreground font-heading md:text-4xl">
            Proudly Serving the{" "}
            <span className="text-primary">Market Leaders</span> of Pakistan
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {clientLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center overflow-hidden rounded-xl border border-border/40 bg-white p-3 transition-all duration-200 hover:border-primary/20 hover:shadow-md hover:shadow-primary/[0.03]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={75}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
