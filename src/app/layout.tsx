import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "Fazlerasheed & Co. - Battery Operated Forklifts, Reach Trucks & MHE in Pakistan",
    template: "%s | Fazlerasheed & Co.",
  },
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
    url: "https://fazlerasheed.com",
    siteName: "Fazlerasheed & Co.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/fr-logo.png",
        width: 500,
        height: 500,
        alt: "Fazlerasheed & Co. logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/fr-logo.png"],
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
                  "https://www.facebook.com/fazlerasheedandco/",
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
        <Script
          src="https://datafa.st/js/script.js"
          data-website-id="dfid_g2ojbeIQME0i1UQ8TRicK"
          data-domain="fazlerasheed.com"
          strategy="afterInteractive"
        />
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69394aea235b7f002117b7e3"})},document.head.appendChild(o)}initApollo();`}
        </Script>
        <Script id="apollo-inbound" strategy="afterInteractive">
          {`(function initApolloInbound(){var TIMEOUT_MS=15000;var timeoutId;var style=document.createElement('style');style.id='apollo-form-prehide-css';style.textContent='form:has(input[type="email" i]),form:has(input[name="email" i]),.hs-form-iframe{position:relative!important}form:has(input[type="email" i])::before,form:has(input[name="email" i])::before,.hs-form-iframe::before{content:"";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;width:50px;height:50px;margin:auto;border:2.5px solid #e1e1e1;border-top:2.5px solid #9ea3a6;border-radius:50%;animation:spin 1s linear infinite;background-color:transparent;pointer-events:auto;z-index:999999;opacity:1}form:has(input[type="email" i]) *,form:has(input[name="email" i]) *,.hs-form-iframe *{opacity:0!important;user-select:none!important;pointer-events:none!important}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}';(document.head || document.documentElement).appendChild(style);function cleanup(){var styleEl=document.getElementById('apollo-form-prehide-css');if(styleEl)styleEl.remove();if(timeoutId)clearTimeout(timeoutId);}timeoutId=setTimeout(function(){console.warn('[Apollo] Form enrichment timeout after 5s - revealing forms. Check network and console for errors.');cleanup();},TIMEOUT_MS);var nocache=Math.random().toString(36).substring(7);var script=document.createElement('script');script.src='https://assets.apollo.io/js/apollo-inbound.js?nocache=' + nocache;script.defer=true;script.onerror=function(){console.error('[Apollo] Failed to load form enrichment script');cleanup();};script.onload=function(){try{window.ApolloInbound.formEnrichment.init({appId: '6a2bfea421aac60010ca96d0',onReady: function(){cleanup();},onError: function(err){console.error('[Apollo] Form enrichment init error:',err);cleanup();}});}catch(err){console.error('[Apollo] Error initializing form enrichment:',err);cleanup();}};document.head.appendChild(script);})();`}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
