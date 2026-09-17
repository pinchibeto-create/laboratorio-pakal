import type { Metadata } from "next";
import "./globals.css";
import "./mobile-refresh.css";
import "./human-images.css";
import "./official-refresh.css";
import "./branch-primary-whatsapp.css";
import "./whatsapp-clean.css";
import "./seo-pages.css";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://laboratoriopakalpalenque.com"
).replace(/\/$/, "");

const title = "Laboratorio clínico en Palenque | Cotiza tus estudios | Pakal";
const description =
  "¿Tienes una orden médica? Envíala por WhatsApp y cotiza tus estudios de laboratorio en Palenque. Consulta preparación, horarios, sucursales y recibe tus resultados por WhatsApp.";

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
    "cotizar estudios laboratorio Palenque",
    "precios laboratorio Palenque",
    "estudios de laboratorio Palenque",
    "laboratorio cerca de mí Palenque",
    "laboratorio abierto domingo Palenque",
    "resultados de laboratorio por WhatsApp",
    "laboratorio Av. 5 de Mayo Palenque",
    "laboratorio Av. Juárez Palenque",
  ],
  alternates: {
    canonical: siteUrl,
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
    url: siteUrl,
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
      <body>
        {children}
        <script src="/pakal-fixes.js" defer />
      </body>
    </html>
  );
}
