import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCards from "@/components/ServiceCards";
import Features from "@/components/Features";
import ClientLogos from "@/components/ClientLogos";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServiceCards />
      <Features />
      <ClientLogos />
      <CTASection />
    </>
  );
}
