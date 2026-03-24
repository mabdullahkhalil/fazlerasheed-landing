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
  title: "Fazlerasheed and Company - Battery Operated Forklifts, Reach Trucks & MHE in Pakistan",
  description:
    "Fazlerasheed and Company deals in sale and rental of imported battery operated forklift, reach truck and material handling equipment in Pakistan. 10+ years experience, 200+ machines fleet.",
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
    title: "Fazlerasheed and Company - Battery Operated Forklifts, Reach Trucks & MHE in Pakistan",
    description:
      "We deal in battery operated forklifts, reach trucks and stackers in Pakistan. Sales, rental, maintenance, spare parts and traction batteries.",
    url: "https://fazlerasheed.com",
    siteName: "Fazlerasheed and Company",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/warehouse-team-forklift-pakistan.webp",
        width: 1200,
        height: 630,
        alt: "Fazlerasheed and Company - Forklift and warehousing solutions in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fazlerasheed and Company - Battery Operated Forklifts & MHE in Pakistan",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fazlerasheed and Company",
              url: "https://fazlerasheed.com",
              logo: "https://fazlerasheed.com/images/logo.png",
              description:
                "Leading importer and dealer of battery operated forklifts, reach trucks, and material handling equipment in Pakistan.",
              telephone: ["+923336871970", "+923424554488", "+923311141062"],
              email: "info@fazlerasheed.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Coca-Cola Stop, 12 KM Raiwind Road",
                addressLocality: "Lahore",
                addressCountry: "PK",
                postalCode: "54000",
              },
              sameAs: [
                "https://www.linkedin.com/company/fazl-e-rasheed-and-co/",
                "https://www.facebook.com/fazlerasheedco/",
              ],
              areaServed: {
                "@type": "Country",
                name: "Pakistan",
              },
            }),
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
