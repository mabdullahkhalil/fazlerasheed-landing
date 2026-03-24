import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fazlerasheed & Co. - Battery Operated Forklifts, Reach Trucks & MHE in Pakistan",
  description:
    "Fazlerasheed & Co. deals in sale and rental of imported battery operated forklift, reach truck and material handling equipment in Pakistan. 10+ years experience, 200+ machines fleet.",
  metadataBase: new URL("https://fazlerasheed.com"),
  icons: {
    icon: [
      { url: "/images/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/favicons/favicon.ico",
    apple: "/images/favicons/apple-touch-icon.png",
  },
  manifest: "/images/favicons/site.webmanifest",
  openGraph: {
    title: "Fazlerasheed & Co. - Battery Operated Forklifts, Reach Trucks & MHE in Pakistan",
    description:
      "We deal in battery operated forklifts, reach trucks and stackers in Pakistan. Sales, rental, maintenance, spare parts and traction batteries.",
    url: "https://fazlerasheed.com",
    siteName: "Fazlerasheed & Co.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/warehouse-team-forklift-pakistan.webp",
        width: 1200,
        height: 630,
        alt: "Fazlerasheed & Co. - Forklift and warehousing solutions in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fazlerasheed & Co. - Battery Operated Forklifts & MHE in Pakistan",
    description:
      "Sale and rental of imported battery operated forklifts, reach trucks, and material handling equipment in Pakistan.",
    images: ["/images/warehouse-team-forklift-pakistan.webp"],
  },
  alternates: {
    canonical: "https://fazlerasheed.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["Organization", "LocalBusiness"],
                "@id": "https://fazlerasheed.com/#organization",
                name: "Fazlerasheed & Co.",
                url: "https://fazlerasheed.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://fazlerasheed.com/images/logo.png",
                  width: 250,
                  height: 42,
                },
                image: "https://fazlerasheed.com/images/warehouse-team-forklift-pakistan.webp",
                description:
                  "Leading importer and dealer of battery operated forklifts, reach trucks, and material handling equipment in Pakistan. Sales, rental, maintenance, spare parts and traction batteries.",
                telephone: ["+923336871970", "+923424554488", "+923311141062"],
                email: "info@fazlerasheed.com",
                address: [
                  {
                    "@type": "PostalAddress",
                    name: "Head Office",
                    streetAddress: "328/3 W Block, Street 25, Phase 3, DHA Lahore Cantt.",
                    addressLocality: "Lahore",
                    addressRegion: "Punjab",
                    addressCountry: "PK",
                    postalCode: "54810",
                  },
                  {
                    "@type": "PostalAddress",
                    name: "Site Office",
                    streetAddress: "Coca-Cola Stop, 12 KM Raiwind Road",
                    addressLocality: "Lahore",
                    addressRegion: "Punjab",
                    addressCountry: "PK",
                    postalCode: "54000",
                  },
                ],
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 31.3782,
                  longitude: 74.2096,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "$$",
                currenciesAccepted: "PKR",
                paymentAccepted: "Cash, Bank Transfer",
                sameAs: [
                  "https://www.linkedin.com/company/fazl-e-rasheed-and-co/",
                  "https://www.facebook.com/fazlerasheedco/",
                  "https://www.youtube.com/@fazlerasheedandcompany",
                ],
                areaServed: {
                  "@type": "Country",
                  name: "Pakistan",
                },
                knowsAbout: [
                  "Forklift Sales",
                  "Forklift Rental",
                  "Forklift Maintenance",
                  "Material Handling Equipment",
                  "Traction Batteries",
                  "Forklift Spare Parts",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://fazlerasheed.com/#website",
                name: "Fazlerasheed & Co.",
                url: "https://fazlerasheed.com",
                publisher: { "@id": "https://fazlerasheed.com/#organization" },
              },
            ]),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
