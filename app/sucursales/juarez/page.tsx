import type { Metadata } from "next";
import Link from "next/link";
import SeoPageShell from "../../components/SeoPageShell";

const canonical = "https://laboratoriopakalpalenque.com/sucursales/juarez";

export const metadata: Metadata = {
  title: "Laboratorio Pakal Av. Juárez | Palenque, Chiapas",
  description:
    "Sucursal de Laboratorio Pakal en Av. Juárez, arriba de COMEX, Palenque. Consulta estudios, preparación, horarios y cotización por WhatsApp.",
  alternates: { canonical },
  openGraph: {
    title: "Laboratorio Pakal Av. Juárez | Palenque, Chiapas",
    description: "Consulta dirección, horario, estudios y cotización de la sucursal Av. Juárez.",
    url: canonical,
  },
};

export default function JuarezPage() {
  return (
    <SeoPageShell
      eyebrow="Sucursal en Palenque"
      title="Laboratorio Pakal · Av. Juárez"
      intro="Sucursal ubicada en Av. Juárez S/N, altos, arriba de COMEX, Barrio San José, Palenque, Chiapas. Puedes cotizar tus estudios por WhatsApp antes de acudir."
      whatsappMessage="Hola, Laboratorio Pakal. Quiero cotizar unos estudios y acudir a la sucursal de Av. Juárez."
      whatsappLabel="Cotizar para Av. Juárez"
      secondaryHref="/estudios"
      secondaryLabel="Ver estudios"
    >
      <section className="seo-section">
        <div className="seo-location">
          <article className="seo-card">
            <h2>Dirección</h2>
            <address>
              Av. Juárez S/N, altos, arriba de COMEX,<br />
              Barrio San José, Palenque, Chiapas, C.P. 29960.
            </address>
            <p className="seo-section-lead">Referencia: arriba de COMEX, entre COMEX y Agroveterinaria.</p>
          </article>
          <div className="seo-location-meta">
            <div className="seo-meta-row"><strong>Lunes a sábado</strong><br />6:30 a.m. a 8:00 p.m.</div>
            <div className="seo-meta-row"><strong>Domingo</strong><br />7:00 a.m. a 1:00 p.m.</div>
            <div className="seo-meta-row"><strong>WhatsApp</strong><br />Cotización, preparación y resultados.</div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-grid">
          <article className="seo-card"><h3>Cotiza antes de acudir</h3><p>Envía una foto de tu orden médica o cotización por WhatsApp para solicitar el precio actual.</p></article>
          <article className="seo-card"><h3>Confirma tu preparación</h3><p>Pregunta las indicaciones específicas de tus estudios antes de presentarte.</p></article>
          <article className="seo-card"><h3>Resultados por WhatsApp</h3><p>Cuando estén listos y validados, pueden enviarse directamente a tu celular.</p></article>
        </div>
      </section>

      <section className="seo-section"><div className="seo-inline-links"><Link href="/cotizar-estudios-laboratorio-palenque">Cotizar estudios</Link><Link href="/preparacion-estudios-laboratorio">Preparación</Link><Link href="/sucursales/5-de-mayo">Ver sucursal principal 5 de Mayo</Link></div></section>
    </SeoPageShell>
  );
}
