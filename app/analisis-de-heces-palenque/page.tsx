import type { Metadata } from "next";
import Link from "next/link";
import SeoPageShell from "../components/SeoPageShell";

const canonical = "https://laboratoriopakalpalenque.com/analisis-de-heces-palenque";

export const metadata: Metadata = {
  title: "Análisis de heces en Palenque | Laboratorio Pakal",
  description:
    "Consulta preparación, recolección, disponibilidad y precio de análisis de heces en Palenque. Envía tu orden por WhatsApp a Laboratorio Pakal.",
  alternates: { canonical },
  openGraph: {
    title: "Análisis de heces en Palenque | Laboratorio Pakal",
    description: "Confirma cómo recolectar tu muestra y cotiza tu estudio por WhatsApp.",
    url: canonical,
  },
};

export default function StoolStudiesPage() {
  return (
    <SeoPageShell
      eyebrow="Análisis de heces en Palenque"
      title="Pregunta cómo recolectar tu muestra antes de ir"
      intro="La forma de recolectar y entregar una muestra puede variar según el estudio. Envíanos tu orden por WhatsApp para confirmar preparación, disponibilidad y precio actual."
      whatsappMessage="Hola, Laboratorio Pakal. Quiero solicitar información y cotizar un análisis de heces. Te envío mi orden."
      whatsappLabel="Consultar análisis de heces"
      secondaryHref="/preparacion-estudios-laboratorio"
      secondaryLabel="Ver preparación"
    >
      <section className="seo-section">
        <div className="seo-grid">
          <article className="seo-card"><span className="seo-kicker">1</span><h3>Identifica el estudio</h3><p>Comparte el nombre exacto del estudio o una foto clara de tu orden médica.</p></article>
          <article className="seo-card"><span className="seo-kicker">2</span><h3>Confirma la recolección</h3><p>Pregunta cómo recolectar, conservar y entregar la muestra antes de hacerlo.</p></article>
          <article className="seo-card"><span className="seo-kicker">3</span><h3>Solicita la cotización</h3><p>Consulta el precio actual y el horario en que puedes entregar la muestra.</p></article>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-callout"><h2>Evita llevar una muestra sin confirmar las indicaciones</h2><p>Las condiciones de recolección pueden variar. Consultar antes de acudir ayuda a que lleves la muestra de la forma indicada para tu estudio.</p></div>
      </section>

      <section className="seo-section"><div className="seo-inline-links"><Link href="/estudios">Todos los estudios</Link><Link href="/analisis-de-orina-palenque">Análisis de orina</Link><Link href="/cotizar-estudios-laboratorio-palenque">Cotizar estudios</Link></div></section>
    </SeoPageShell>
  );
}
