import type { Metadata } from "next";
import Link from "next/link";
import SeoPageShell from "../components/SeoPageShell";

const canonical = "https://laboratoriopakalpalenque.com/estudios";

export const metadata: Metadata = {
  title: "Estudios de laboratorio en Palenque | Laboratorio Pakal",
  description:
    "Consulta categorías de estudios de laboratorio en Palenque, preparación, disponibilidad y cotización por WhatsApp en Laboratorio Pakal.",
  alternates: { canonical },
  openGraph: {
    title: "Estudios de laboratorio en Palenque | Laboratorio Pakal",
    description:
      "Consulta estudios, preparación y cotización por WhatsApp en Laboratorio Pakal.",
    url: canonical,
  },
};

const categories = [
  {
    title: "Análisis de sangre",
    text: "Información sobre estudios que utilizan una muestra sanguínea. Confirma disponibilidad, preparación y costo antes de acudir.",
    href: "/analisis-de-sangre-palenque",
  },
  {
    title: "Análisis de orina",
    text: "Consulta requisitos de recolección, disponibilidad y preparación para estudios con muestra de orina.",
    href: "/analisis-de-orina-palenque",
  },
  {
    title: "Análisis de heces",
    text: "Pregunta por la forma correcta de recolectar y entregar tu muestra según el estudio solicitado.",
    href: "/analisis-de-heces-palenque",
  },
  {
    title: "Pruebas especiales",
    text: "Si tu orden incluye un estudio específico, envíanos una foto para confirmar disponibilidad y requisitos.",
    href: "/cotizar-estudios-laboratorio-palenque",
  },
  {
    title: "Perfiles de salud",
    text: "Consulta directamente los perfiles disponibles y las indicaciones correspondientes antes de acudir.",
    href: "/cotizar-estudios-laboratorio-palenque",
  },
  {
    title: "Toma de muestras",
    text: "Recibe orientación sobre horario, preparación y requisitos de tu muestra antes de presentarte.",
    href: "/preparacion-estudios-laboratorio",
  },
];

export default function StudiesPage() {
  return (
    <SeoPageShell
      eyebrow="Estudios de laboratorio en Palenque"
      title="Encuentra información sobre tus estudios antes de acudir"
      intro="Consulta las principales categorías de estudios y, si ya tienes una orden médica, envíanos una foto por WhatsApp para confirmar disponibilidad, preparación y precio actual."
      whatsappMessage="Hola, Laboratorio Pakal. Quiero saber si realizan los estudios de mi orden. Te envío una foto."
      whatsappLabel="Consultar mis estudios"
      secondaryHref="/cotizar-estudios-laboratorio-palenque"
      secondaryLabel="Cotizar una orden"
    >
      <section className="seo-section">
        <div className="seo-section-head">
          <h2>Estudios para distintas necesidades</h2>
          <p className="seo-section-lead">
            Estas categorías te ayudan a ubicar la información general. La disponibilidad y los requisitos exactos dependen del estudio indicado en tu orden.
          </p>
        </div>
        <div className="seo-grid">
          {categories.map((item, index) => (
            <article className="seo-card" key={item.title}>
              <span className="seo-kicker">{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link href={item.href}>Ver información →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-callout">
          <h2>¿No sabes a qué categoría pertenece tu estudio?</h2>
          <p>
            No pasa nada. Envíanos una fotografía clara de tu orden médica por WhatsApp y te orientamos con la información necesaria para cotizar y prepararte.
          </p>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-section-head"><h2>También te puede servir</h2></div>
        <div className="seo-inline-links">
          <Link href="/preparacion-estudios-laboratorio">Cómo prepararte</Link>
          <Link href="/resultados-por-whatsapp">Entrega de resultados</Link>
          <Link href="/sucursales/5-de-mayo">Sucursal 5 de Mayo</Link>
          <Link href="/sucursales/juarez">Sucursal Av. Juárez</Link>
        </div>
      </section>
    </SeoPageShell>
  );
}
