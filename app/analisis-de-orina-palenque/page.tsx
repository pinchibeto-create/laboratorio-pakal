import type { Metadata } from "next";
import Link from "next/link";
import SeoPageShell from "../components/SeoPageShell";

const canonical = "https://laboratoriopakalpalenque.com/analisis-de-orina-palenque";

export const metadata: Metadata = {
  title: "Análisis de orina en Palenque | Laboratorio Pakal",
  description:
    "Consulta disponibilidad, preparación, recolección y precio de análisis de orina en Palenque. Envía tu orden por WhatsApp a Laboratorio Pakal.",
  alternates: { canonical },
  openGraph: {
    title: "Análisis de orina en Palenque | Laboratorio Pakal",
    description: "Cotiza tus estudios y confirma cómo recolectar la muestra antes de acudir.",
    url: canonical,
  },
};

export default function UrineStudiesPage() {
  return (
    <SeoPageShell
      eyebrow="Análisis de orina en Palenque"
      title="Confirma cómo llevar tu muestra antes de acudir"
      intro="Si tu orden incluye un estudio con muestra de orina, envíanos una foto por WhatsApp para confirmar disponibilidad, preparación, forma de recolección y precio actual."
      whatsappMessage="Hola, Laboratorio Pakal. Quiero solicitar información y cotizar un análisis de orina. Te envío mi orden."
      whatsappLabel="Consultar análisis de orina"
      secondaryHref="/preparacion-estudios-laboratorio"
      secondaryLabel="Ver preparación"
    >
      <section className="seo-section">
        <div className="seo-section-head"><h2>Qué conviene confirmar</h2></div>
        <div className="seo-grid">
          <article className="seo-card"><span className="seo-kicker">1</span><h3>Tipo de estudio</h3><p>Comparte el nombre del estudio o una fotografía de tu orden para identificar exactamente lo solicitado.</p></article>
          <article className="seo-card"><span className="seo-kicker">2</span><h3>Recolección de la muestra</h3><p>La forma de recolectar y trasladar la muestra puede cambiar según el estudio. Confirma las indicaciones antes de hacerlo.</p></article>
          <article className="seo-card"><span className="seo-kicker">3</span><h3>Precio y horario</h3><p>Solicita la cotización actual y confirma en qué horario puedes entregar o tomar la muestra.</p></article>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-faq">
          <details><summary>¿Debo llevar la muestra desde casa?</summary><p>Depende del estudio. Pregunta antes de recolectarla para evitar tener que repetir el proceso.</p></details>
          <details><summary>¿Necesito un recipiente especial?</summary><p>El recipiente y las condiciones dependen del estudio. El laboratorio puede orientarte antes de acudir.</p></details>
          <details><summary>¿Puedo pedir el precio por WhatsApp?</summary><p>Sí. Envía tu orden o el nombre del estudio para solicitar la cotización actual.</p></details>
        </div>
      </section>

      <section className="seo-section"><div className="seo-inline-links"><Link href="/estudios">Todos los estudios</Link><Link href="/analisis-de-sangre-palenque">Análisis de sangre</Link><Link href="/analisis-de-heces-palenque">Análisis de heces</Link></div></section>
    </SeoPageShell>
  );
}
