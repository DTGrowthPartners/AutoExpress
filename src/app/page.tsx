import MainLayout from "@/components/layout/MainLayout";
import HomeHero from "@/components/home/HomeHero";
import SocialProof from "@/components/SocialProof";
import CentroSwitcher from "@/components/home/CentroSwitcher";
import PromiseSection from "@/components/home/PromiseSection";
import Reviews from "@/components/Reviews";
import HomeFAQLinks from "@/components/home/HomeFAQLinks";
import BigCTA from "@/components/BigCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Express Cartagena | Centro de Colisión & Detallado Automotriz",
  description:
    "Dos centros especializados en Cartagena: Centro de Colisión y Centro de Detallado Automotriz. Reparación, pintura, protección y embellecimiento profesional.",
};

export default function Home() {
  return (
    <MainLayout>
      <HomeHero />
      <SocialProof />
      <CentroSwitcher />
      <PromiseSection />
      <Reviews />
      <HomeFAQLinks />
      <BigCTA showCenterLinks />
    </MainLayout>
  );
}
