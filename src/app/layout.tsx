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
    title: "Fazl-E-Rasheed And Company - Battery Operated Forklifts, Reach Trucks And Stackers",
    description:
      "We deal in battery operated forklifts, reach trucks and stackers in Pakistan. Sales, rental, maintenance, spare parts and traction batteries.",
    url: "https://fazlerasheed.com",
    siteName: "Fazlerasheed and Company",
    locale: "en_US",
    type: "website",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
