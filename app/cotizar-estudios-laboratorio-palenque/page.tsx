import type { Metadata } from "next";
import Link from "next/link";
import SeoPageShell from "../components/SeoPageShell";

const canonical = "https://laboratoriopakalpalenque.com/cotizar-estudios-laboratorio-palenque";

export const metadata: Metadata = {
  title: "Cotiza tus estudios de laboratorio en Palenque | Pakal",
  description:
    "¿Tienes una orden médica o una cotización? Envíala por WhatsApp y solicita el precio actual de tus estudios en Laboratorio Pakal, Palenque.",
  alternates: { canonical },
  openGraph: {
    title: "Cotiza tus estudios de laboratorio en Palenque | Pakal",
    description:
      "Manda una foto de tu orden o cotización por WhatsApp y solicita precio, preparación y sucursal.",
    url: canonical,
  },
};

export default function QuoteStudiesPage() {
  return (
    <SeoPageShell
      eyebrow="Cotización de estudios en Palenque"
      title="¿Ya tienes una orden médica? Cotiza tus estudios por WhatsApp"
      intro="Envíanos una foto de tu orden médica o de una cotización que ya tengas. Te informamos el precio actual en Laboratorio Pakal, la preparación necesaria y en qué sucursal puedes acudir."
      whatsappMessage="Hola, Laboratorio Pakal. Quiero cotizar unos estudios. Te envío una foto de mi orden médica o cotización."
      whatsappLabel="Enviar mi orden por WhatsApp"
      secondaryHref="/sucursales/5-de-mayo"
      secondaryLabel="Ver sucursal principal"
    >
      <section className="seo-section">
        <div className="seo-section-head">
          <h2>Antes de decidir, cotiza con nosotros</h2>
          <p className="seo-section-lead">
            Si ya sabes qué estudios necesitas, no tienes que escribirlos uno por uno. Una fotografía clara de tu orden o cotización nos permite orientarte más rápido.
          </p>
        </div>
        <div className="seo-grid seo-steps">
          <article className="seo-card seo-step">
            <h3>Manda una foto</h3>
            <p>Fotografía tu orden médica o la cotización que ya tengas y envíala por WhatsApp.</p>
          </article>
          <article className="seo-card seo-step">
            <h3>Solicita el precio actual</h3>
            <p>Te indicamos cuánto cuestan tus estudios en Pakal y resolvemos dudas sobre preparación.</p>
          </article>
          <article className="seo-card seo-step">
            <h3>Elige dónde acudir</h3>
            <p>Te orientamos sobre la sucursal y el horario disponibles para realizar tus estudios.</p>
          </article>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-callout">
          <h2>¿Ya cotizaste en otro laboratorio?</h2>
          <p>
            También puedes enviarnos esa cotización y solicitar nuestro precio actual antes de tomar una decisión. Los precios dependen de los estudios solicitados, por lo que la cotización se confirma directamente por WhatsApp.
          </p>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-section-head">
          <h2>Lo que puedes consultar por WhatsApp</h2>
        </div>
        <div className="seo-grid">
          <article className="seo-card"><span className="seo-kicker">$</span><h3>Precio de tus estudios</h3><p>Solicita una cotización actual con los estudios que aparecen en tu orden.</p></article>
          <article className="seo-card"><span className="seo-kicker">✓</span><h3>Preparación</h3><p>Pregunta si tus estudios requieren ayuno u otra indicación antes de acudir.</p></article>
          <article className="seo-card"><span className="seo-kicker">↗</span><h3>Sucursal y horario</h3><p>Confirma dónde puedes realizar tus estudios y el horario de atención.</p></article>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-section-head"><h2>Preguntas frecuentes</h2></div>
        <div className="seo-faq">
          <details><summary>¿Puedo mandar una foto de mi orden médica?</summary><p>Sí. Procura que la fotografía sea clara y que se puedan leer todos los estudios solicitados.</p></details>
          <details><summary>¿Puedo mandar una cotización de otro laboratorio?</summary><p>Sí. Puedes enviarla para solicitar nuestra cotización actual y comparar antes de decidir.</p></details>
          <details><summary>¿El precio que me dan por WhatsApp es el precio actual?</summary><p>La cotización se realiza con la información disponible al momento de tu consulta. Si existe alguna condición particular del estudio, el personal te lo indicará.</p></details>
          <details><summary>¿También puedo preguntar cómo debo prepararme?</summary><p>Sí. Como los requisitos cambian según el estudio, te recomendamos confirmar tu preparación antes de acudir.</p></details>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-inline-links">
          <Link href="/estudios">Ver estudios</Link>
          <Link href="/preparacion-estudios-laboratorio">Preparación para estudios</Link>
          <Link href="/resultados-por-whatsapp">Resultados por WhatsApp</Link>
        </div>
      </section>
    </SeoPageShell>
  );
}
