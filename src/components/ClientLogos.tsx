import Image from "next/image";

const clientLogos = [
  { src: "/images/clients/cocacola.png", alt: "Coca-Cola logo - Fazlerasheed client" },
  { src: "/images/clients/pepsico-pakistan.jpg", alt: "PepsiCo Pakistan logo - Fazlerasheed client" },
  { src: "/images/clients/nestle-pakistan.jpg", alt: "Nestle Pakistan logo - Fazlerasheed client" },
  { src: "/images/clients/unilever.png", alt: "Unilever logo - Fazlerasheed client" },
  { src: "/images/clients/colgate.png", alt: "Colgate-Palmolive logo - Fazlerasheed client" },
  { src: "/images/clients/Philip-Morris-Logo.png", alt: "Philip Morris logo - Fazlerasheed client" },
  { src: "/images/clients/tetra-pak.jpg", alt: "Tetra Pak logo - Fazlerasheed client" },
  { src: "/images/clients/maersk.png", alt: "Maersk logo - Fazlerasheed client" },
  { src: "/images/clients/engro-foods.jpg", alt: "Engro Foods logo - Fazlerasheed client" },
  { src: "/images/clients/nishat-group.jpg", alt: "Nishat Group logo - Fazlerasheed client" },
  { src: "/images/clients/tcs-logistics.jpg", alt: "TCS Logistics logo - Fazlerasheed client" },
  { src: "/images/clients/interloop.png", alt: "Interloop Limited logo - Fazlerasheed client" },
  { src: "/images/clients/packages-limited.jpg", alt: "Packages Limited logo - Fazlerasheed client" },
  { src: "/images/clients/style-textile.jpg", alt: "Style Textile logo - Fazlerasheed client" },
  { src: "/images/clients/hayat-group.jpg", alt: "Hayat Group logo - Fazlerasheed client" },
  { src: "/images/clients/expeditors-international.jpg", alt: "Expeditors International logo - Fazlerasheed client" },
  { src: "/images/clients/emirates-logistics.jpg", alt: "Emirates Logistics logo - Fazlerasheed client" },
  { src: "/images/clients/bulleh-shah-packaging.jpg", alt: "Bulleh Shah Packaging logo - Fazlerasheed client" },
  { src: "/images/clients/big-bird-foods.jpg", alt: "Big Bird Foods logo - Fazlerasheed client" },
  { src: "/images/clients/nimir-industrial-chemicals.jpg", alt: "Nimir Industrial Chemicals logo - Fazlerasheed client" },
  { src: "/images/clients/sovereign-group.jpg", alt: "Sovereign Group logo - Fazlerasheed client" },
  { src: "/images/clients/riaz-textile-mills.jpg", alt: "Riaz Textile Mills logo - Fazlerasheed client" },
  { src: "/images/clients/raaziq-logistics.jpg", alt: "Raaziq Logistics logo - Fazlerasheed client" },
  { src: "/images/clients/star-laboratories.jpg", alt: "Star Laboratories logo - Fazlerasheed client" },
  { src: "/images/clients/revive-pharmakon.jpg", alt: "Revive Pharmakon logo - Fazlerasheed client" },
];

export default function ClientLogos() {
  return (
    <section data-fast-scroll="scroll_to_clients" className="bg-surface py-20">
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
