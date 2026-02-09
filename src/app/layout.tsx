import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autoexpressas.com"),
  title: "Auto Express Cartagena | Colisión, Pintura y Detailing Profesional",
  description:
    "Taller especializado en reparación de colisión, pintura automotriz, protecciones y detailing en Cartagena. Resultados visibles, procesos claros y entrega responsable.",
  keywords: [
    "taller automotriz Cartagena",
    "reparación colisión Cartagena",
    "pintura automotriz Cartagena",
    "detailing Cartagena",
    "PPF Cartagena",
    "ceramic coating Cartagena",
    "Auto Express",
  ],
  openGraph: {
    title: "Auto Express Cartagena | Colisión, Pintura y Detailing Profesional",
    description:
      "Taller especializado en reparación de colisión, pintura automotriz, protecciones y detailing en Cartagena.",
    url: "https://autoexpressas.com",
    siteName: "Auto Express Cartagena",
    images: [
      {
        url: "/assets/og/og.jpg", // TODO: reemplazar imagen OG
        width: 1200,
        height: 630,
        alt: "Auto Express Cartagena — Taller Automotriz Profesional",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Express Cartagena | Colisión, Pintura y Detailing Profesional",
    description:
      "Taller especializado en reparación de colisión, pintura y detailing en Cartagena.",
    images: ["/assets/og/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicons/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicons/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicons/favicon-180x180.png" />

        {/* TODO: integrar Meta Pixel */}
        {/* <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s){...}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'TU_PIXEL_ID');
          fbq('track', 'PageView');
        ` }} /> */}

        {/* TODO: integrar Google Analytics */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=TU_GA_ID" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'TU_GA_ID');
        ` }} /> */}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
