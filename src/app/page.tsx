import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCards from "@/components/ServiceCards";
import Features from "@/components/Features";
import ClientLogos from "@/components/ClientLogos";
import Partnership from "@/components/Partnership";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "https://fazlerasheed.com" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServiceCards />
      <Partnership />
      
      <Features />
      <ClientLogos />
      <CTASection />
    </>
  );
}
