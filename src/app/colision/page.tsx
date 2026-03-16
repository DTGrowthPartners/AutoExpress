import MainLayout from "@/components/layout/MainLayout";
import CentroHero from "@/components/centro/CentroHero";
import CertificationBadge from "@/components/centro/CertificationBadge";
import InsurancePartners from "@/components/centro/InsurancePartners";
import ServiceGrid from "@/components/centro/ServiceGrid";
import Process from "@/components/Process";
import FAQAccordion from "@/components/centro/FAQAccordion";
import CenterCTA from "@/components/centro/CenterCTA";
import { CENTERS } from "@/data/centers";

export default function ColisionPage() {
  return (
    <MainLayout activeCenter="colision">
      <CentroHero center={CENTERS.colision} />
      <CertificationBadge />
      <InsurancePartners />
      <ServiceGrid center="colision" />
      <Process />
      <FAQAccordion center="colision" />
      <CenterCTA center={CENTERS.colision} otherCenter={CENTERS.detallado} />
    </MainLayout>
  );
}
