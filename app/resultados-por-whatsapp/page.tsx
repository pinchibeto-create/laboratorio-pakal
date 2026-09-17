import type { Metadata } from "next";
import Link from "next/link";
import SeoPageShell from "../components/SeoPageShell";

const canonical = "https://laboratoriopakalpalenque.com/resultados-por-whatsapp";

export const metadata: Metadata = {
  title: "Resultados de laboratorio por WhatsApp | Pakal Palenque",
  description:
    "En Laboratorio Pakal puedes recibir tus resultados por WhatsApp una vez que estén listos y validados. Consulta tiempos según tu estudio.",
  alternates: { canonical },
  openGraph: {
    title: "Resultados de laboratorio por WhatsApp | Pakal Palenque",
    description: "Consulta cómo recibir tus resultados directamente en tu celular.",
    url: canonical,
  },
};

export default function WhatsAppResultsPage() {
  return (
    <SeoPageShell
      eyebrow="Resultados por WhatsApp"
      title="Recibe tus resultados directamente en tu celular"
      intro="Una vez que tus estudios estén listos y validados, Laboratorio Pakal puede enviarte tus resultados por WhatsApp para que no tengas que regresar únicamente a recogerlos."
      whatsappMessage="Hola, Laboratorio Pakal. Quiero solicitar información sobre la entrega de mis resultados por WhatsApp."
      whatsappLabel="Preguntar por mis resultados"
      secondaryHref="/cotizar-estudios-laboratorio-palenque"
      secondaryLabel="Cotizar estudios"
    >
      <section className="seo-section">
        <div className="seo-section-head"><h2>Una forma más práctica de recibirlos</h2><p className="seo-section-lead">El tiempo de procesamiento cambia según el estudio. Al realizar tus análisis, pregunta cuál es el tiempo estimado correspondiente.</p></div>
        <div className="seo-grid">
          <article className="seo-card"><span className="seo-kicker">1</span><h3>Realiza tus estudios</h3><p>Acude con las indicaciones correspondientes al estudio que te solicitaron.</p></article>
          <article className="seo-card"><span className="seo-kicker">2</span><h3>Espera la validación</h3><p>El laboratorio procesa y valida los resultados según el tipo de análisis realizado.</p></article>
          <article className="seo-card"><span className="seo-kicker">3</span><h3>Recíbelos por WhatsApp</h3><p>Cuando estén listos, pueden enviarse directamente a tu celular.</p></article>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-callout"><h2>Sin promesas de tiempos que no dependen del laboratorio</h2><p>El tiempo de entrega varía según cada estudio. Por eso Pakal comunica el tiempo estimado correspondiente al momento de realizar tus análisis.</p></div>
      </section>

      <section className="seo-section">
        <div className="seo-section-head"><h2>Preguntas frecuentes</h2></div>
        <div className="seo-faq">
          <details><summary>¿Todos los resultados tardan lo mismo?</summary><p>No. El tiempo depende del estudio realizado. Consulta el tiempo estimado cuando realices tus análisis.</p></details>
          <details><summary>¿Tengo que regresar al laboratorio a recogerlos?</summary><p>Si tus resultados pueden enviarse por WhatsApp, no necesitas regresar únicamente para recogerlos.</p></details>
          <details><summary>¿Puedo preguntar si mis resultados ya están listos?</summary><p>Sí. Puedes comunicarte por WhatsApp para solicitar información sobre la entrega de tus resultados.</p></details>
        </div>
      </section>

      <section className="seo-section"><div className="seo-inline-links"><Link href="/cotizar-estudios-laboratorio-palenque">Cotizar estudios</Link><Link href="/preparacion-estudios-laboratorio">Preparación</Link><Link href="/sucursales/5-de-mayo">Sucursal principal</Link></div></section>
    </SeoPageShell>
  );
}
