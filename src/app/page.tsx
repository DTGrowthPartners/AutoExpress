import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import BigCTA from "@/components/BigCTA";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButtonSticky from "@/components/WhatsAppButtonSticky";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <BeforeAfter />
        <WhyUs />
        <Process />
        <BigCTA />
      </main>
      <ContactFooter />
      <WhatsAppButtonSticky />
    </>
  );
}
