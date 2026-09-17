import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const WHATSAPP_NUMBER = "529161020613";

function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function SeoPageShell({
  eyebrow,
  title,
  intro,
  whatsappMessage,
  whatsappLabel = "Cotizar por WhatsApp",
  secondaryHref = "/estudios",
  secondaryLabel = "Ver estudios",
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  whatsappMessage: string;
  whatsappLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children: ReactNode;
}) {
  const whatsapp = whatsappUrl(whatsappMessage);

  return (
    <div className="seo-page">
      <header className="seo-header">
        <div className="seo-header-inner">
          <Link className="seo-brand" href="/" aria-label="Laboratorio Pakal, inicio">
            <Image
              src="/pakal/logo-pakal.webp"
              alt="Laboratorio Pakal"
              width={560}
              height={160}
              priority
            />
          </Link>
          <nav className="seo-nav" aria-label="Navegación principal">
            <Link href="/estudios">Estudios</Link>
            <Link href="/preparacion-estudios-laboratorio">Preparación</Link>
            <Link href="/sucursales/5-de-mayo">Sucursales</Link>
            <a className="seo-nav-cta" href={whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <section className="seo-hero">
        <div className="seo-hero-inner">
          <p className="seo-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="seo-intro">{intro}</p>
          <div className="seo-actions">
            <a className="seo-btn seo-btn-primary" href={whatsapp} target="_blank" rel="noreferrer">
              {whatsappLabel}
            </a>
            <Link className="seo-btn seo-btn-secondary" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </section>

      <main className="seo-main">
        {children}

        <section className="seo-bottom-cta" aria-label="Cotizar por WhatsApp">
          <h2>¿Tienes una orden o una cotización?</h2>
          <p>
            Envíanos una foto por WhatsApp. Te informamos el costo actual, la preparación necesaria y la sucursal donde puedes acudir.
          </p>
          <div className="seo-actions">
            <a className="seo-btn seo-btn-primary" href={whatsapp} target="_blank" rel="noreferrer">
              Enviar mi orden por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="seo-footer">
        <div className="seo-footer-inner">
          <p>
            Laboratorio de Análisis Clínicos Pakal · Palenque, Chiapas.<br />
            Resultados por WhatsApp una vez que estén listos y validados.
          </p>
          <div className="seo-footer-links">
            <Link href="/cotizar-estudios-laboratorio-palenque">Cotizar estudios</Link>
            <Link href="/resultados-por-whatsapp">Resultados por WhatsApp</Link>
            <Link href="/sucursales/5-de-mayo">5 de Mayo</Link>
            <Link href="/sucursales/juarez">Av. Juárez</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
