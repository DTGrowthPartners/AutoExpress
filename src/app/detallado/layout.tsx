import type { Metadata } from "next";
import { CENTERS } from "@/data/centers";

const center = CENTERS.detallado;

export const metadata: Metadata = {
  title: center.seo.title,
  description: center.seo.description,
  keywords: center.seo.keywords,
  openGraph: {
    title: center.seo.title,
    description: center.seo.description,
    url: "https://autoexpressas.com/detallado",
  },
};

export default function DetalladoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
