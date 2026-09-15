import type { Metadata } from "next";
import "./globals.css";
import "./mobile-refresh.css";
import "./human-images.css";
import "./official-refresh.css";
import "./branch-primary-whatsapp.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://laboratoriopakal.netlify.app";

const title = "Laboratorio Pakal | Análisis clínicos en Palenque, Chiapas";
const description =
  "Laboratorio de análisis clínicos en Palenque, Chiapas, con sucursal principal en Av. 5 de Mayo y sucursal en Av. Juárez. Consulta estudios, preparación, horarios, ubicación y atención por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Laboratorio Pakal",
  category: "salud",
  creator: "Laboratorio Pakal",
  publisher: "Laboratorio Pakal",
  keywords: [
    "laboratorio clínico Palenque",
    "análisis clínicos Palenque",
    "Laboratorio Pakal",
    "laboratorio Av. 5 de Mayo Palenque",
    "laboratorio Av. Juárez Palenque",
    "estudios de laboratorio Chiapas",
    "laboratorio cerca de mí Palenque",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "Laboratorio Pakal",
    images: [
      {
        url: "/og.webp",
        width: 1000,
        height: 667,
        alt: "Laboratorio Pakal, análisis clínicos en Palenque, Chiapas.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
