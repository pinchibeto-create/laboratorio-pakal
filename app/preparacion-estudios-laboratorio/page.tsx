import type { Metadata } from "next";
import Link from "next/link";
import SeoPageShell from "../components/SeoPageShell";

const canonical = "https://laboratoriopakalpalenque.com/preparacion-estudios-laboratorio";

export const metadata: Metadata = {
  title: "Preparación para estudios de laboratorio | Pakal Palenque",
  description:
    "Consulta cómo prepararte para tus estudios de laboratorio en Palenque. Confirma ayuno, medicamentos, ejercicio y recolección por WhatsApp.",
  alternates: { canonical },
  openGraph: {
    title: "Preparación para estudios de laboratorio | Pakal Palenque",
    description: "Confirma las indicaciones específicas de tus estudios antes de acudir.",
    url: canonical,
  },
};

export default function PreparationPage() {
  return (
    <SeoPageShell
      eyebrow="Preparación para estudios"
      title="Confirma cómo prepararte antes de acudir al laboratorio"
      intro="No todos los estudios requieren las mismas indicaciones. Envíanos una foto de tu orden por WhatsApp para confirmar si necesitas ayuno, alguna condición de recolección u otra preparación específica."
      whatsappMessage="Hola, Laboratorio Pakal. Quiero confirmar cómo debo prepararme para mis estudios. Te envío mi orden."
      whatsappLabel="Consultar preparación"
      secondaryHref="/estudios"
      secondaryLabel="Ver estudios"
    >
      <section className="seo-section">
        <div className="seo-section-head"><h2>Dudas frecuentes antes de un estudio</h2><p className="seo-section-lead">Estas recomendaciones son generales. La indicación correcta depende del estudio que aparece en tu orden.</p></div>
        <div className="seo-grid">
          <article className="seo-card"><span className="seo-kicker">A</span><h3>Ayuno</h3><p>Algunos estudios pueden requerir ayuno y otros no. Confirma el requisito específico antes de acudir.</p></article>
          <article className="seo-card"><span className="seo-kicker">M</span><h3>Medicamentos</h3><p>Informa al personal si tomas medicamentos o suplementos. No suspendas un tratamiento sin indicación de tu profesional de salud.</p></article>
          <article className="seo-card"><span className="seo-kicker">E</span><h3>Ejercicio</h3><p>Ciertos estudios pueden requerir evitar actividad física intensa previamente. Pregunta si aplica en tu caso.</p></article>
          <article className="seo-card"><span className="seo-kicker">O</span><h3>Muestra de orina</h3><p>Confirma si debes llevar la muestra desde casa y qué recipiente o condiciones requiere tu estudio.</p></article>
          <article className="seo-card"><span className="seo-kicker">H</span><h3>Muestra de heces</h3><p>Pregunta cómo recolectar, conservar y entregar la muestra antes de hacerlo.</p></article>
          <article className="seo-card"><span className="seo-kicker">?</span><h3>Otra indicación</h3><p>Si tu orden tiene instrucciones particulares, envíanos una foto para orientarte antes de acudir.</p></article>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-callout"><h2>La preparación correcta depende de tu estudio</h2><p>Evita asumir que todos los análisis requieren lo mismo. Lo más práctico es compartir tu orden y confirmar las indicaciones correspondientes.</p></div>
      </section>

      <section className="seo-section">
        <div className="seo-section-head"><h2>Preguntas frecuentes</h2></div>
        <div className="seo-faq">
          <details><summary>¿Todos los estudios requieren ayuno?</summary><p>No. El requisito depende del estudio. Confirma las indicaciones específicas antes de presentarte.</p></details>
          <details><summary>¿Puedo tomar agua?</summary><p>Depende de las indicaciones asociadas a tus estudios. Consulta antes de acudir si tienes dudas.</p></details>
          <details><summary>¿Debo suspender mis medicamentos?</summary><p>No suspendas medicamentos por tu cuenta. Informa al personal sobre lo que tomas y sigue las indicaciones de tu profesional de salud.</p></details>
          <details><summary>¿Puedo preguntar por WhatsApp antes de ir?</summary><p>Sí. Puedes enviar tu orden y solicitar orientación sobre la preparación correspondiente.</p></details>
        </div>
      </section>

      <section className="seo-section"><div className="seo-inline-links"><Link href="/analisis-de-sangre-palenque">Análisis de sangre</Link><Link href="/analisis-de-orina-palenque">Análisis de orina</Link><Link href="/analisis-de-heces-palenque">Análisis de heces</Link></div></section>
    </SeoPageShell>
  );
}
