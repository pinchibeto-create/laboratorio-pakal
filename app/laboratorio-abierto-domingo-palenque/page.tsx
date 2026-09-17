import type { Metadata } from "next";
import Link from "next/link";
import SeoPageShell from "../components/SeoPageShell";

const canonical = "https://laboratoriopakalpalenque.com/laboratorio-abierto-domingo-palenque";

export const metadata: Metadata = {
  title: "Laboratorio abierto en domingo en Palenque | Pakal",
  description:
    "Laboratorio Pakal tiene atención los domingos de 7:00 a.m. a 1:00 p.m. en Palenque. Cotiza tus estudios y confirma preparación por WhatsApp.",
  alternates: { canonical },
  openGraph: {
    title: "Laboratorio abierto en domingo en Palenque | Pakal",
    description: "Consulta horario dominical, sucursales y cotización por WhatsApp.",
    url: canonical,
  },
};

export default function SundayLabPage() {
  return (
    <SeoPageShell
      eyebrow="Horario dominical en Palenque"
      title="Laboratorio Pakal abre los domingos"
      intro="Atendemos los domingos de 7:00 a.m. a 1:00 p.m. en Palenque. Antes de acudir, puedes enviar tu orden por WhatsApp para cotizar y confirmar la preparación de tus estudios."
      whatsappMessage="Hola, Laboratorio Pakal. Quiero realizarme unos estudios el domingo. ¿Me ayudan a cotizar y confirmar la preparación?"
      whatsappLabel="Consultar para el domingo"
      secondaryHref="/sucursales/5-de-mayo"
      secondaryLabel="Ver sucursal principal"
    >
      <section className="seo-section">
        <div className="seo-section-head"><h2>Horario de atención</h2></div>
        <div className="seo-grid seo-grid-2">
          <article className="seo-card"><span className="seo-kicker">D</span><h3>Domingo</h3><p>7:00 a.m. a 1:00 p.m.</p></article>
          <article className="seo-card"><span className="seo-kicker">L-S</span><h3>Lunes a sábado</h3><p>6:30 a.m. a 8:00 p.m.</p></article>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-section-head"><h2>Antes de acudir el domingo</h2></div>
        <ul className="seo-list">
          <li>Envía tu orden por WhatsApp para solicitar el precio actual.</li>
          <li>Confirma si tus estudios requieren alguna preparación específica.</li>
          <li>Pregunta en qué sucursal puedes realizar tus estudios.</li>
          <li>Consulta el tiempo estimado de entrega correspondiente a tus análisis.</li>
        </ul>
      </section>

      <section className="seo-section"><div className="seo-inline-links"><Link href="/sucursales/5-de-mayo">Sucursal 5 de Mayo</Link><Link href="/sucursales/juarez">Sucursal Av. Juárez</Link><Link href="/cotizar-estudios-laboratorio-palenque">Cotizar estudios</Link></div></section>
    </SeoPageShell>
  );
}
