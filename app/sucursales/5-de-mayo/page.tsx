import type { Metadata } from "next";
import Link from "next/link";
import SeoPageShell from "../../components/SeoPageShell";

const canonical = "https://laboratoriopakalpalenque.com/sucursales/5-de-mayo";

export const metadata: Metadata = {
  title: "Laboratorio Pakal 5 de Mayo | Sucursal principal en Palenque",
  description:
    "Sucursal principal de Laboratorio Pakal en Av. 5 de Mayo, entre Aldama y Abasolo, Palenque. Cotiza estudios y consulta preparación por WhatsApp.",
  alternates: { canonical },
  openGraph: {
    title: "Laboratorio Pakal 5 de Mayo | Sucursal principal en Palenque",
    description: "Consulta dirección, horario, estudios y cotización de la sucursal 5 de Mayo.",
    url: canonical,
  },
};

export default function CincoDeMayoPage() {
  return (
    <SeoPageShell
      eyebrow="Sucursal principal · Palenque"
      title="Laboratorio Pakal · Av. 5 de Mayo"
      intro="Nuestra sucursal principal está en Av. 5 de Mayo, entre Aldama y Abasolo, Palenque, Chiapas. Puedes cotizar tus estudios por WhatsApp antes de acudir."
      whatsappMessage="Hola, Laboratorio Pakal. Quiero cotizar unos estudios y acudir a la sucursal de Av. 5 de Mayo."
      whatsappLabel="Cotizar para 5 de Mayo"
      secondaryHref="/estudios"
      secondaryLabel="Ver estudios"
    >
      <section className="seo-section">
        <div className="seo-location">
          <article className="seo-card">
            <h2>Dirección</h2>
            <address>
              Av. 5 de Mayo, entre Aldama y Abasolo,<br />
              Palenque, Chiapas, C.P. 29960.
            </address>
            <p className="seo-section-lead">Esta es la sucursal que Laboratorio Pakal identifica como principal.</p>
          </article>
          <div className="seo-location-meta">
            <div className="seo-meta-row"><strong>Lunes a sábado</strong><br />6:30 a.m. a 8:00 p.m.</div>
            <div className="seo-meta-row"><strong>Domingo</strong><br />7:00 a.m. a 1:00 p.m.</div>
            <div className="seo-meta-row"><strong>WhatsApp</strong><br />Cotización, preparación y resultados.</div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-section-head"><h2>Antes de venir</h2></div>
        <div className="seo-grid">
          <article className="seo-card"><h3>Trae o envía tu orden</h3><p>Puedes mandar una foto por WhatsApp para cotizar antes de trasladarte.</p></article>
          <article className="seo-card"><h3>Confirma la preparación</h3><p>Pregunta si tus estudios requieren alguna indicación específica antes de la toma de muestra.</p></article>
          <article className="seo-card"><h3>Pregunta por tus resultados</h3><p>Una vez listos y validados, pueden enviarse por WhatsApp. El tiempo depende del estudio.</p></article>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-callout"><h2>¿Ya tienes una cotización de otro laboratorio?</h2><p>Envíala por WhatsApp y solicita el precio actual de tus estudios en Pakal antes de decidir dónde realizarlos.</p></div>
      </section>

      <section className="seo-section"><div className="seo-inline-links"><Link href="/cotizar-estudios-laboratorio-palenque">Cotizar estudios</Link><Link href="/preparacion-estudios-laboratorio">Preparación</Link><Link href="/sucursales/juarez">Ver sucursal Av. Juárez</Link></div></section>
    </SeoPageShell>
  );
}
