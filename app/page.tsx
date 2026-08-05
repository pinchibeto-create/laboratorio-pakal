import Image from "next/image";

const siteData = {
  name: "Laboratorio Pakal",
  phoneDisplay: "916 102 0613",
  whatsappNumber: "529161020613",
  email: "laboratoriopakal@gmail.com",
  address:
    "Av. Juárez S/N, altos, arriba de COMEX, Palenque, Chiapas.",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Laboratorio+Pakal+Av.+Juarez+Palenque+Chiapas",
  facebookUrl: "https://www.facebook.com/LaboratorioPakal/",
  hours: {
    weekdays: "Lunes a sábado · 6:30 a.m. a 8:00 p.m.",
    sunday: "Domingo · 7:00 a.m. a 1:00 p.m.",
  },
};

const whatsappMessage =
  "Hola, Laboratorio Pakal. Quisiera cotizar unos estudios y recibir información sobre su preparación.";
const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const services = [
  {
    number: "01",
    title: "Análisis clínicos",
    text: "Estudios realizados a partir de muestras biológicas para apoyar la evaluación y el seguimiento de la salud.",
    image: "/pakal/proceso.png",
    alt: "Procesamiento conceptual de una muestra dentro de un laboratorio clínico",
  },
  {
    number: "02",
    title: "Estudios de rutina",
    text: "Opciones para chequeos generales, seguimiento médico y evaluaciones periódicas.",
    image: "/pakal/precision.png",
    alt: "Microscopio y muestras en una imagen conceptual de Laboratorio Pakal",
  },
  {
    number: "03",
    title: "Perfiles de laboratorio",
    text: "Conjuntos de estudios relacionados con distintas necesidades de prevención y seguimiento.",
    image: "/pakal/interior.png",
    alt: "Interior conceptual de un laboratorio clínico organizado y luminoso",
  },
  {
    number: "04",
    title: "Toma de muestras",
    text: "Orientación sobre requisitos, horarios y preparación antes de acudir al laboratorio.",
    image: "/hero-laboratorio-pakal.png",
    alt: "Profesional de laboratorio preparando una muestra en un espacio clínico local",
  },
];

const steps = [
  {
    number: "01",
    title: "Envíanos tu solicitud",
    text: "Comparte por WhatsApp el nombre de los estudios o una fotografía de tu orden médica.",
  },
  {
    number: "02",
    title: "Recibe orientación",
    text: "El laboratorio te informa sobre disponibilidad, costo y preparación.",
  },
  {
    number: "03",
    title: "Acude al laboratorio",
    text: "Preséntate en el horario indicado y sigue las recomendaciones correspondientes.",
  },
  {
    number: "04",
    title: "Recibe tus resultados",
    text: "El personal te informará el medio y tiempo de entrega correspondiente.",
  },
];

const preparationQuestions = [
  "¿Necesito acudir en ayunas?",
  "¿Puedo tomar agua?",
  "¿Debo suspender medicamentos?",
  "¿Qué documentos debo llevar?",
  "¿A qué hora debo acudir?",
  "¿Cómo recolecto una muestra?",
];

const reasons = [
  "Atención cercana",
  "Comunicación clara",
  "Horarios accesibles",
  "Ubicación céntrica",
  "Orientación por WhatsApp",
];

type IconName = "clock" | "pin" | "chat" | "arrow" | "check";

function Icon({ name }: { name: IconName }) {
  if (name === "clock") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5v5l3.2 2" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    );
  }

  if (name === "chat") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 5h13A2.5 2.5 0 0 1 21 7.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-5 3v-3.5A2.5 2.5 0 0 1 3 14V7.5A2.5 2.5 0 0 1 5.5 5Z" />
        <path d="M7.5 10.8h9" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6.5 12.5 3.4 3.4 7.6-8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M14 7l5 5-5 5" />
    </svg>
  );
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand-logo${inverse ? " brand-logo--inverse" : ""}`}>
      <Image
        src="/pakal/logo-pakal.png"
        alt="Laboratorio Pakal"
        width={560}
        height={160}
        priority
      />
    </span>
  );
}

function WhatsAppLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteData.name,
    areaServed: {
      "@type": "City",
      name: "Palenque",
      containedInPlace: {
        "@type": "State",
        name: "Chiapas",
      },
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="site-header">
        <div className="container header-inner">
          <a className="header-brand" href="#inicio" aria-label="Ir al inicio">
            <Logo />
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="#estudios">Estudios</a>
            <a href="#preparacion">Preparación</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#resultados">Resultados</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <WhatsAppLink className="button button--whatsapp header-cta">
            Cotizar por WhatsApp
            <Icon name="arrow" />
          </WhatsAppLink>

          <details className="mobile-menu">
            <summary aria-label="Abrir menú de navegación">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Navegación móvil">
              <a href="#inicio">Inicio</a>
              <a href="#estudios">Estudios</a>
              <a href="#preparacion">Preparación</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#resultados">Resultados</a>
              <a href="#contacto">Contacto</a>
              <WhatsAppLink className="button button--whatsapp">
                Cotizar por WhatsApp
              </WhatsAppLink>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="local-pattern" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy reveal reveal--one">
            <p className="eyebrow">Laboratorio clínico en Palenque, Chiapas</p>
            <h1>Información clara para cuidar tu salud</h1>
            <p className="hero-lead">
              En Laboratorio Pakal te orientamos para que conozcas los estudios
              disponibles, su preparación y la forma de recibir tus resultados.
            </p>

            <div className="hero-actions">
              <WhatsAppLink className="button button--whatsapp button--large">
                Cotizar por WhatsApp
                <Icon name="arrow" />
              </WhatsAppLink>
              <a
                className="button button--outline button--large"
                href={siteData.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Cómo llegar
                <Icon name="pin" />
              </a>
            </div>

            <div className="hero-highlights" aria-label="Datos destacados">
              <span>Atención desde las 6:30 a.m.</span>
              <span>Ubicación en Palenque</span>
              <span>Atención de lunes a domingo</span>
            </div>
          </div>

          <div className="hero-visual reveal reveal--two">
            <div className="hero-orbit hero-orbit--large" aria-hidden="true" />
            <div className="hero-orbit hero-orbit--small" aria-hidden="true" />
            <div className="hero-image">
              <Image
                src="/pakal/recepcion.png"
                alt="Imagen conceptual de una profesional de Laboratorio Pakal atendiendo amablemente a una paciente"
                fill
                sizes="(max-width: 850px) 100vw, 52vw"
                priority
              />
            </div>
            <div className="hero-card">
              <span className="hero-card-icon">
                <Icon name="chat" />
              </span>
              <p>
                <strong>¿Tienes una orden médica?</strong>
                Envíala por WhatsApp para solicitar información.
              </p>
            </div>
            <span className="image-label">Imagen conceptual temporal</span>
          </div>
        </div>
      </section>

      <section className="quick-info" aria-label="Información rápida">
        <div className="container quick-grid">
          <article>
            <span className="line-icon">
              <Icon name="clock" />
            </span>
            <div>
              <p className="micro-label">Horario</p>
              <strong>{siteData.hours.weekdays}</strong>
              <span>{siteData.hours.sunday}</span>
            </div>
          </article>
          <article>
            <span className="line-icon">
              <Icon name="pin" />
            </span>
            <div>
              <p className="micro-label">Ubicación</p>
              <strong>{siteData.address}</strong>
            </div>
          </article>
          <article>
            <span className="line-icon">
              <Icon name="chat" />
            </span>
            <div>
              <p className="micro-label">Atención</p>
              <strong>
                Consulta disponibilidad, preparación y costo de tus estudios.
              </strong>
            </div>
          </article>
        </div>
        <p className="data-note">
          Horarios y datos de contacto preliminares: confirmar con el laboratorio
          antes de la publicación definitiva.
        </p>
      </section>

      <section className="section studies" id="estudios">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Información de estudios</p>
              <h2>Estudios para cada necesidad</h2>
            </div>
            <p>
              Consulta las diferentes categorías de estudios y comunícate con el
              laboratorio para confirmar disponibilidad, precio y preparación.
            </p>
          </div>

          <div className="service-editorial">
            {services.map((service, index) => (
              <article
                className={`service-card${index === 0 || index === 3 ? " service-card--wide" : ""}`}
                key={service.number}
              >
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                  <span>{service.number}</span>
                </div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <WhatsAppLink className="text-link">
                    Solicitar información
                    <Icon name="arrow" />
                  </WhatsAppLink>
                </div>
              </article>
            ))}
          </div>

          <p className="section-disclaimer">
            Las categorías son informativas. El catálogo real de estudios se
            integrará cuando sea proporcionado y confirmado por el laboratorio.
          </p>
        </div>
      </section>

      <section className="order-cta">
        <div className="container order-grid">
          <div className="order-copy">
            <p className="eyebrow eyebrow--light">Cotización sencilla</p>
            <h2>¿Tienes una orden médica?</h2>
            <p>
              Envíanos una fotografía por WhatsApp para solicitar información
              sobre disponibilidad, costo y preparación de tus estudios.
            </p>
            <WhatsAppLink className="button button--whatsapp button--large">
              Enviar orden por WhatsApp
              <Icon name="arrow" />
            </WhatsAppLink>
            <small>
              Evita compartir datos personales en publicaciones o comentarios de
              redes sociales.
            </small>
          </div>
          <div className="order-visual">
            <Image
              src="/pakal/preparacion.png"
              alt="Imagen conceptual de una profesional explicando una orden médica a un paciente"
              fill
              sizes="(max-width: 850px) 100vw, 48vw"
            />
            <span>Imagen conceptual temporal</span>
          </div>
        </div>
      </section>

      <section className="section process" aria-labelledby="process-title">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <div>
              <p className="eyebrow">Una atención sencilla</p>
              <h2 id="process-title">Así puedes solicitar información</h2>
            </div>
          </div>

          <div className="process-grid">
            {steps.map((step) => (
              <article className="process-step" key={step.number}>
                <span>{step.number}</span>
                <div className="process-line" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <p className="process-note">
            Los requisitos y tiempos pueden variar según el estudio.
          </p>
        </div>
      </section>

      <section className="section preparation" id="preparacion">
        <div className="container preparation-grid">
          <div className="preparation-intro">
            <p className="eyebrow">Antes de acudir</p>
            <h2>Prepárate para tu estudio</h2>
            <p>
              Una preparación adecuada ayuda a que la toma de muestra se realice
              correctamente. Consulta siempre las indicaciones específicas de tu
              estudio.
            </p>
            <div className="preparation-image">
              <Image
                src="/hero-laboratorio-pakal.png"
                alt="Profesional de laboratorio preparando cuidadosamente una muestra"
                fill
                sizes="(max-width: 850px) 100vw, 42vw"
              />
            </div>
          </div>

          <div className="accordion">
            {preparationQuestions.map((question, index) => (
              <details key={question} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {question}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>
                  Las indicaciones dependen del estudio. Comunícate con Laboratorio
                  Pakal para recibir orientación.
                </p>
              </details>
            ))}
            <WhatsAppLink className="button button--blue preparation-button">
              Consultar mi preparación
              <Icon name="arrow" />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="section about" id="nosotros">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-shape" aria-hidden="true" />
            <div className="about-image">
              <Image
                src="/pakal/equipo.png"
                alt="Imagen conceptual del equipo de atención de Laboratorio Pakal"
                fill
                sizes="(max-width: 850px) 100vw, 50vw"
              />
            </div>
            <span className="image-label">Imagen conceptual temporal</span>
          </div>

          <div className="about-copy">
            <p className="eyebrow">Por qué elegir Laboratorio Pakal</p>
            <h2>Atención cercana en Palenque</h2>
            <p>
              Queremos que cada persona reciba información clara y un trato
              respetuoso desde que solicita una cotización hasta que recibe sus
              resultados.
            </p>
            <ul>
              {reasons.map((reason) => (
                <li key={reason}>
                  <span>
                    <Icon name="check" />
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
            <WhatsAppLink className="text-link text-link--large">
              Hablar con el laboratorio
              <Icon name="arrow" />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="results" id="resultados">
        <div className="results-pattern" aria-hidden="true" />
        <div className="container results-grid">
          <div className="results-copy">
            <p className="eyebrow eyebrow--light">Entrega de estudios</p>
            <h2>Información sobre tus resultados</h2>
            <p>
              Comunícate con el laboratorio para conocer el medio y tiempo de
              entrega de tus estudios.
            </p>
            <WhatsAppLink className="button button--light button--large">
              Preguntar por mis resultados
              <Icon name="arrow" />
            </WhatsAppLink>
          </div>
          <div className="future-panel">
            <span className="future-tag">Integración futura</span>
            <h3>Acceso a resultados</h3>
            <p>
              Este espacio está preparado para conectar una plataforma, folio,
              enlace externo o instrucciones de descarga cuando el laboratorio lo
              confirme.
            </p>
            <div className="future-fields" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <small>No es un portal activo.</small>
          </div>
        </div>
      </section>

      <section className="section location" id="contacto">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Ubicación y horarios</p>
              <h2>Visítanos en Palenque</h2>
            </div>
            <p>
              Estamos en una zona céntrica. Revisa la referencia y abre la ruta en
              Google Maps antes de acudir.
            </p>
          </div>

          <div className="location-layout">
            <div className="map-card">
              <iframe
                title="Mapa de ubicación de Laboratorio Pakal en Palenque"
                loading="lazy"
                src="https://www.google.com/maps?q=Laboratorio+Pakal+Palenque+Chiapas&output=embed"
              />
              <a
                className="button button--light map-button"
                href={siteData.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Google Maps
                <Icon name="arrow" />
              </a>
            </div>

            <div className="location-details">
              <div className="location-photo">
                <Image
                  src="/pakal/interior.png"
                  alt="Imagen conceptual temporal de las instalaciones de Laboratorio Pakal"
                  fill
                  sizes="(max-width: 850px) 100vw, 40vw"
                />
                <span>Reemplazar por fotografía real de la fachada</span>
              </div>
              <div className="location-contact">
                <article>
                  <span className="line-icon">
                    <Icon name="pin" />
                  </span>
                  <div>
                    <small>Dirección preliminar</small>
                    <strong>{siteData.address}</strong>
                    <p>Referencia: altos, arriba de COMEX.</p>
                  </div>
                </article>
                <article>
                  <span className="line-icon">
                    <Icon name="clock" />
                  </span>
                  <div>
                    <small>Horario preliminar</small>
                    <strong>{siteData.hours.weekdays}</strong>
                    <p>{siteData.hours.sunday}</p>
                  </div>
                </article>
                <article>
                  <span className="line-icon">
                    <Icon name="chat" />
                  </span>
                  <div>
                    <small>Teléfono y WhatsApp</small>
                    <strong>{siteData.phoneDisplay}</strong>
                    <WhatsAppLink>Escribir por WhatsApp</WhatsAppLink>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-shape" aria-hidden="true" />
        <div className="container final-grid">
          <div>
            <p className="eyebrow eyebrow--light">Antes de tu visita</p>
            <h2>Resuelve tus dudas antes de acudir</h2>
            <p>
              Escríbenos para consultar disponibilidad, precio y preparación de tus
              estudios.
            </p>
            <div className="final-actions">
              <WhatsAppLink className="button button--whatsapp button--large">
                Cotizar por WhatsApp
                <Icon name="arrow" />
              </WhatsAppLink>
              <a
                className="button button--outline-light button--large"
                href={siteData.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Cómo llegar
                <Icon name="pin" />
              </a>
            </div>
          </div>
          <div className="final-image">
            <Image
              src="/pakal/recepcion.png"
              alt="Imagen conceptual de atención cercana en la recepción de Laboratorio Pakal"
              fill
              sizes="(max-width: 850px) 100vw, 44vw"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#inicio" aria-label="Volver al inicio">
              <Logo inverse />
            </a>
            <p>
              Información clara sobre estudios, preparación, horarios y ubicación
              en Palenque, Chiapas.
            </p>
          </div>
          <div>
            <small>Navegación</small>
            <a href="#estudios">Estudios</a>
            <a href="#preparacion">Preparación</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#resultados">Resultados</a>
          </div>
          <div>
            <small>Contacto</small>
            <WhatsAppLink>WhatsApp · {siteData.phoneDisplay}</WhatsAppLink>
            <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
            <a href={siteData.facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
          <div>
            <small>Visítanos</small>
            <p>{siteData.address}</p>
            <p>{siteData.hours.weekdays}</p>
            <p>{siteData.hours.sunday}</p>
          </div>
        </div>
        <div className="container privacy-note" id="privacidad">
          <p>
            Aviso de privacidad: integrar el documento oficial proporcionado por el
            laboratorio antes de publicar.
          </p>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Laboratorio Pakal</span>
          <span>Sitio informativo · No sustituye una consulta médica.</span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>

      <WhatsAppLink className="whatsapp-float">
        <span>
          <Icon name="chat" />
        </span>
        <small>Cotizar</small>
      </WhatsAppLink>
    </main>
  );
}
