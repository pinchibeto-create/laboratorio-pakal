import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol =
    forwardedProtocol ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title =
    "Laboratorio Pakal | Análisis clínicos en Palenque, Chiapas";
  const description =
    "Consulta información sobre estudios, horarios, ubicación y preparación en Laboratorio Pakal, en Palenque, Chiapas.";

  return {
    title,
    description,
    keywords: [
      "laboratorio clínico Palenque",
      "análisis clínicos Palenque",
      "Laboratorio Pakal",
      "estudios de laboratorio Chiapas",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "es_MX",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 1024,
          alt: "Laboratorio Pakal, análisis clínicos en Palenque, Chiapas.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
