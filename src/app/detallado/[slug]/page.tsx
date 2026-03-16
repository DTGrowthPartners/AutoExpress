import type { Metadata } from "next";
import ServicePageContent from "@/components/service/ServicePageContent";
import { getServiceBySlug, DETALLADO_SERVICES } from "@/data/services";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return DETALLADO_SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug("detallado", params.slug);
  if (!service) return { title: "Servicio no encontrado" };

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `https://autoexpressas.com/detallado/${service.slug}`,
    },
  };
}

export default function DetalladoServicePage({ params }: Props) {
  return <ServicePageContent center="detallado" slug={params.slug} />;
}
