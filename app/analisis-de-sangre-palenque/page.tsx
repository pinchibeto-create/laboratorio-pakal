import type { Metadata } from "next";
import Link from "next/link";
import SeoPageShell from "../components/SeoPageShell";

const canonical = "https://laboratoriopakalpalenque.com/analisis-de-sangre-palenque";

export const metadata: Metadata = {
  title: "Análisis de sangre en Palenque | Laboratorio Pakal",
  description:
    "Consulta disponibilidad, preparación y precio de análisis de sangre en Palenque. Envía tu orden por WhatsApp a Laboratorio Pakal.",
  alternates: { canonical },
  openGraph: {
    title: "Análisis de sangre en Palenque | Laboratorio Pakal",
    description: "Cotiza tus análisis de sangre y confirma preparación por WhatsApp.",
    url: canonical,
  },
};

export default function BloodStudiesPage() {
  return (
    <SeoPageShell
      eyebrow="Análisis de sangre en Palenque"
      title="Consulta tus estudios de sangre antes de acudir"
      intro="Si tu orden médica incluye estudios realizados con muestra sanguínea, envíanos una foto por WhatsApp para confirmar disponibilidad, precio actual y preparación."
      whatsappMessage="Hola, Laboratorio Pakal. Quiero solicitar información y cotizar unos análisis de sangre. Te envío mi orden."
      whatsappLabel="Cotizar análisis de sangre"
      secondaryHref="/preparacion-estudios-laboratorio"
      secondaryLabel="Ver preparación"
    >
      <section className="seo-section">
        <div className="seo-section-head">
          <h2>Antes de ir al laboratorio</h2>
          <p className="seo-section-lead">Los requisitos cambian según el estudio, por eso conviene confirmar las indicaciones específicas antes de presentarte.</p>
        </div>
        <div className="seo-grid">
          <article className="seo-card"><span className="seo-kicker">1</span><h3>Confirma el estudio</h3><p>Envíanos el nombre del estudio o una fotografía clara de tu orden médica.</p></article>
          <article className="seo-card"><span className="seo-kicker">2</span><h3>Pregunta por preparación</h3><p>Te indicamos si existe alguna instrucción específica antes de la toma de muestra.</p></article>
          <article className="seo-card"><span className="seo-kicker">3</span><h3>Solicita el precio</h3><p>Pide la cotización actual antes de acudir a cualquiera de nuestras sucursales.</p></article>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-callout"><h2>¿Ya tienes tu orden?</h2><p>La forma más sencilla de saber disponibilidad, preparación y costo es mandar una foto por WhatsApp. Así no tienes que transcribir todos los estudios.</p></div>
      </section>

      <section className="seo-section">
        <div className="seo-section-head"><h2>Preguntas frecuentes</h2></div>
        <div className="seo-faq">
          <details><summary>¿Todos los análisis de sangre requieren ayuno?</summary><p>No necesariamente. Los requisitos dependen del estudio solicitado, así que confirma las indicaciones de tu orden antes de acudir.</p></details>
          <details><summary>¿Puedo cotizar antes de ir?</summary><p>Sí. Envíanos tu orden por WhatsApp para solicitar el precio actual de los estudios indicados.</p></details>
          <details><summary>¿Me envían los resultados por WhatsApp?</summary><p>Una vez que tus resultados estén listos y validados, pueden enviarse por WhatsApp. El tiempo de entrega depende de cada estudio.</p></details>
        </div>
      </section>

      <section className="seo-section"><div className="seo-inline-links"><Link href="/estudios">Todos los estudios</Link><Link href="/analisis-de-orina-palenque">Análisis de orina</Link><Link href="/resultados-por-whatsapp">Resultados por WhatsApp</Link></div></section>
    </SeoPageShell>
  );
}
