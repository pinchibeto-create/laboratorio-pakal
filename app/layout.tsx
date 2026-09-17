import type { Metadata } from "next";
import "./globals.css";
import "./mobile-refresh.css";
import "./human-images.css";
import "./official-refresh.css";
import "./branch-primary-whatsapp.css";
import "./whatsapp-clean.css";

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

const primaryBranchScript = `
(() => {
  const primaryMapsUrl = "https://maps.app.goo.gl/ZLTyyf2BdJSRh7Tn7";
  const primaryMapEmbed = "https://www.google.com/maps?q=Laboratorio+Pakal+Avenida+5+de+Mayo+entre+Aldama+y+Abasolo+Palenque+Chiapas&output=embed";

  const applyPrimaryBranch = () => {
    const primaryCard = document.getElementById("sucursal-cinco-mayo");

    if (primaryCard) {
      const mapButton = primaryCard.querySelector(".branch-map-button");
      const mapFrame = primaryCard.querySelector(".branch-map iframe");
      const branchLabel = primaryCard.querySelector(".branch-title-row small");

      if (mapButton) mapButton.setAttribute("href", primaryMapsUrl);
      if (mapFrame) mapFrame.setAttribute("src", primaryMapEmbed);
      if (branchLabel) branchLabel.textContent = "Laboratorio Pakal · Sucursal principal";
    }

    document.querySelectorAll(".footer-branch").forEach((branch) => {
      const branchName = branch.querySelector("strong")?.textContent ?? "";
      if (branchName.includes("5 de Mayo")) {
        const link = branch.querySelector("a");
        if (link) link.setAttribute("href", primaryMapsUrl);
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyPrimaryBranch, { once: true });
  } else {
    applyPrimaryBranch();
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: primaryBranchScript }} />
      </body>
    </html>
  );
}
