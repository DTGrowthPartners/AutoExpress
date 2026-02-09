import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Express Cartagena | Links",
  description:
    "Todos nuestros enlaces y servicios en un solo lugar. Cotiza colisión, pintura, protecciones y detailing por WhatsApp.",
  openGraph: {
    title: "Auto Express Cartagena | Links",
    description:
      "Todos nuestros enlaces y servicios en un solo lugar.",
    url: "https://autoexpressas.com/link",
    siteName: "Auto Express Cartagena",
    locale: "es_CO",
    type: "website",
  },
};

export default function LinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
