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

function createWhatsAppUrl(message: string) {
  return `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const services = [
  {
    icon: "blood" as const,
    title: "Análisis de sangre",
    text: "Información sobre estudios realizados a partir de una muestra sanguínea.",
    message: "Hola, quiero solicitar información sobre análisis de sangre.",
  },
  {
    icon: "urine" as const,
    title: "Análisis de orina",
    text: "Consulta disponibilidad y preparación para estudios realizados con muestras de orina.",
    message: "Hola, quiero solicitar información sobre análisis de orina.",
  },
  {
    icon: "sample" as const,
    title: "Análisis de heces",
    text: "Orientación sobre recolección, preparación y disponibilidad de estudios de heces.",
    message: "Hola, quiero solicitar información sobre análisis de heces.",
  },
  {
    icon: "special" as const,
    title: "Pruebas especiales",
    text: "Consulta directamente con el laboratorio la disponibilidad y requisitos de estudios especiales.",
    message: "Hola, quiero saber si realizan una prueba especial.",
  },
  {
    icon: "profile" as const,
    title: "Perfiles de salud",
    text: "Conjuntos de estudios relacionados con distintas necesidades de evaluación y seguimiento.",
    message: "Hola, quiero solicitar información sobre sus perfiles de salud.",
  },
  {
    icon: "tube" as const,
    title: "Toma de muestras",
    text: "Recibe orientación sobre horarios, requisitos y preparación antes de acudir.",
    message: "Hola, quiero solicitar información sobre la toma de muestras.",
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
    text: "Una vez listos y validados, te los enviamos por WhatsApp. El tiempo depende de cada estudio.",
  },
];

const preparationCards = [
  {
    icon: "clock" as const,
    title: "Ayuno",
    text: "Algunos estudios pueden requerir ayuno. Confirma las indicaciones antes de acudir.",
    image: "/pakal/preparacion.webp",
    alt: "Profesional orientando a un paciente antes de un estudio",
  },
  {
    icon: "activity" as const,
    title: "Evita ejercicio intenso",
    text: "Ciertos estudios pueden requerir evitar actividad física antes de la toma de muestra.",
    image: "/hero-laboratorio-pakal.webp",
    alt: "Profesional preparando cuidadosamente una muestra de laboratorio",
  },
  {
    icon: "medicine" as const,
    title: "Informa sobre medicamentos",
    text: "Comunica al personal si tomas medicamentos o suplementos. No los suspendas sin indicación médica.",
    image: "/pakal/equipo.webp",
    alt: "Equipo profesional de Laboratorio Pakal",
  },
  {
    icon: "cup" as const,
    title: "Evita cafeína y alcohol",
    text: "Pregunta si tu estudio requiere evitar ciertas bebidas o alimentos previamente.",
    image: "/pakal/proceso.webp",
    alt: "Procesamiento conceptual de muestras en el laboratorio",
  },
  {
    icon: "instructions" as const,
    title: "Sigue las indicaciones específicas",
    text: "Los requisitos cambian según el estudio. Solicita orientación por WhatsApp.",
    image: "/pakal/interior.webp",
    alt: "Interior conceptual de Laboratorio Pakal",
  },
];

const reasons = [
  "Atención cercana",
  "Comunicación clara",
  "Horarios accesibles",
  "Ubicación céntrica",
  "Orientación por WhatsApp",
];

type IconName =
  | "clock"
  | "pin"
  | "chat"
  | "arrow"
  | "check"
  | "blood"
  | "urine"
  | "sample"
  | "special"
  | "profile"
  | "tube"
  | "activity"
  | "medicine"
  | "cup"
  | "instructions"
  | "document"
  | "phone";

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

  if (name === "blood") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5s6 6.4 6 10.6a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5Z" />
        <path d="M9.2 14.4a3 3 0 0 0 2.8 2" />
      </svg>
    );
  }

  if (name === "urine") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4.5h8M7 7h10l-1 12H8L7 7Z" />
        <path d="M9.2 12.5h5.6" />
      </svg>
    );
  }

  if (name === "sample") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 5.5h9v3h-9zM8.5 8.5h7v10h-7z" />
        <path d="M10 14.5h4" />
      </svg>
    );
  }

  if (name === "special") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 4.5h6M10 4.5v5l-4 7a2 2 0 0 0 1.8 3h8.4a2 2 0 0 0 1.8-3l-4-7v-5" />
        <path d="M8.2 15h7.6M19 4v3M17.5 5.5h3" />
      </svg>
    );
  }

  if (name === "profile") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8.5" cy="8" r="3" />
        <path d="M3.8 18a4.7 4.7 0 0 1 9.4 0M15.5 16.5l2-2 1.5 1.2 2-3.2" />
      </svg>
    );
  }

  if (name === "tube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4h8M9.5 4v11.5a4 4 0 0 0 5 3.9 4 4 0 0 0 3-3.9V4" />
        <path d="M9.5 13h8" />
      </svg>
    );
  }

  if (name === "activity") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12h4l2-4 3.2 8 2.2-4H21" />
      </svg>
    );
  }

  if (name === "medicine") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 17 8.8-8.8a3 3 0 1 0-4.2-4.2L3.8 12.8A3 3 0 1 0 8 17Z" />
        <path d="m8.3 8.3 7.4 7.4" />
      </svg>
    );
  }

  if (name === "cup") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7h12v7a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V7Z" />
        <path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17M8 4.5v-2M12 4.5v-2" />
      </svg>
    );
  }

  if (name === "instructions" || name === "document") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4.5h10a2 2 0 0 1 2 2v13H5v-13a2 2 0 0 1 2-2Z" />
        <path d="M9 3h6v3H9zM8.5 11h7M8.5 15h5" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="2.8" width="10" height="18.4" rx="2" />
        <path d="M10 6h4M11 18h2" />
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
        src="/pakal/logo-pakal.webp"
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
  message,
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
}) {
  return (
    <a
      className={className}
      href={message ? createWhatsAppUrl(message) : whatsappUrl}
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
            <h1>
              <span>Resultados confiables</span>
              <span>para cuidar tu salud</span>
            </h1>
            <p className="hero-lead">
              <span className="hero-lead-desktop">
                Análisis clínicos con atención profesional y un servicio cercano.
                Una vez que tus resultados estén listos y validados, te los
                enviamos directamente por WhatsApp.
              </span>
              <span className="hero-lead-mobile">
                Atención profesional en Palenque y entrega de resultados
                directamente por WhatsApp.
              </span>
            </p>

            <div className="hero-actions hero-actions--desktop">
              <WhatsAppLink className="button button--whatsapp button--large">
                Cotizar por WhatsApp
                <Icon name="arrow" />
              </WhatsAppLink>
              <a
                className="button button--outline button--large"
                href="#estudios"
              >
                Consultar servicios
                <Icon name="arrow" />
              </a>
            </div>

            <div className="hero-benefit hero-benefit--desktop">
              <span className="hero-benefit-icon">
                <Icon name="chat" />
              </span>
              <p>
                <strong>Resultados enviados directamente por WhatsApp</strong>
                <small>El tiempo de entrega depende de cada estudio.</small>
              </p>
            </div>
          </div>

          <div className="hero-visual reveal reveal--two">
            <div className="hero-orbit hero-orbit--large" aria-hidden="true" />
            <div className="hero-orbit hero-orbit--small" aria-hidden="true" />
            <div className="hero-image">
              <Image
                src="/pakal/recepcion.webp"
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
              <p className="hero-card-copy hero-card-copy--desktop">
                <strong>¿Tienes una orden médica?</strong>
                Envíala por WhatsApp para solicitar información.
              </p>
              <p className="hero-card-copy hero-card-copy--mobile">
                <strong>Resultados por WhatsApp</strong>
                Directamente en tu celular
              </p>
            </div>
            <span className="image-label">Imagen conceptual temporal</span>
          </div>

          <div className="hero-mobile-actions">
            <WhatsAppLink className="button button--whatsapp button--large">
              Cotizar por WhatsApp
              <Icon name="arrow" />
            </WhatsAppLink>
            <a className="hero-studies-link" href="#estudios">
              Ver estudios <span aria-hidden="true">→</span>
            </a>
            <p className="hero-mobile-note">
              <span className="hero-mobile-note-icon" aria-hidden="true">
                <Icon name="document" />
              </span>
              Te enviamos tus resultados por WhatsApp una vez que estén listos y
              validados. El tiempo depende de cada estudio.
            </p>
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
              <p className="micro-label">Horario de atención</p>
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
              <a
                className="quick-link"
                href={siteData.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Abrir mapa
              </a>
            </div>
          </article>
          <article>
            <span className="line-icon">
              <Icon name="chat" />
            </span>
            <div>
              <p className="micro-label">Resultados por WhatsApp</p>
              <strong>Recibe tus resultados sin regresar a recogerlos</strong>
              <span>
                Te los enviamos por WhatsApp una vez que estén listos y validados.
              </span>
            </div>
          </article>
          <article>
            <span className="line-icon">
              <Icon name="check" />
            </span>
            <div>
              <p className="micro-label">Atención cercana</p>
              <strong>Orientación clara y atención profesional</strong>
              <span>
                Consulta disponibilidad, preparación y costo de tus estudios.
              </span>
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
          <div className="section-title-centered">
            <p className="eyebrow">Estudios de laboratorio</p>
            <h2>Nuestros servicios</h2>
            <span className="title-rule" aria-hidden="true" />
          </div>

          <div className="service-compact-grid">
            {services.map((service) => (
              <article className="service-compact-card" key={service.title}>
                <span className="service-icon">
                  <Icon name={service.icon} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <WhatsAppLink
                  className="service-link"
                  message={service.message}
                >
                  Solicitar información
                  <Icon name="arrow" />
                </WhatsAppLink>
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
              src="/pakal/preparacion.webp"
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

      <section className="section preparation preparation-cards-section" id="preparacion">
        <div className="container">
          <div className="section-title-centered">
            <p className="eyebrow">Antes de acudir</p>
            <h2>Preparación para estudios</h2>
            <span className="title-rule" aria-hidden="true" />
          </div>

          <div className="preparation-card-grid">
            {preparationCards.map((card) => (
              <article className="preparation-card" key={card.title}>
                <div className="preparation-card-image">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1120px) 33vw, 20vw"
                  />
                </div>
                <span className="preparation-card-icon">
                  <Icon name={card.icon} />
                </span>
                <div className="preparation-card-copy">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="preparation-action">
            <WhatsAppLink
              className="button button--blue button--large"
              message="Hola, quiero confirmar cómo debo prepararme para mis estudios."
            >
              Consultar preparación por WhatsApp
              <Icon name="arrow" />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="results" id="resultados">
        <div className="results-pattern" aria-hidden="true" />
        <div className="container results-grid">
          <div className="results-copy">
            <p className="eyebrow eyebrow--light">Entrega de resultados</p>
            <h2>Tus resultados directamente en WhatsApp</h2>
            <p>
              Una vez que tus estudios estén listos y validados, te los enviamos
              directamente por WhatsApp para que puedas consultarlos sin regresar
              únicamente a recogerlos.
            </p>
            <p className="results-note">
              El tiempo de entrega varía según el tipo de análisis. Al realizar tu
              estudio, consulta el tiempo estimado correspondiente.
            </p>
            <WhatsAppLink
              className="button button--whatsapp button--large"
              message="Hola, quiero solicitar información sobre la entrega de mis resultados."
            >
              Preguntar por mis resultados
              <Icon name="arrow" />
            </WhatsAppLink>
          </div>
          <div className="results-visual" aria-label="Ilustración de un resultado recibido en el celular">
            <div className="results-phone">
              <span className="results-phone-top">
                <Icon name="phone" />
                WhatsApp
              </span>
              <div className="results-message">
                <span>
                  <Icon name="document" />
                </span>
                <div>
                  <strong>Resultados validados</strong>
                  <small>Documento recibido en tu celular</small>
                </div>
              </div>
              <span className="results-check">
                <Icon name="check" />
                Listo para consultar
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="nosotros">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-shape" aria-hidden="true" />
            <div className="about-image">
              <Image
                src="/pakal/equipo.webp"
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
                  src="/pakal/interior.webp"
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
            <p className="eyebrow eyebrow--light">Atención por WhatsApp</p>
            <h2>Cotiza tus estudios y recibe orientación por WhatsApp</h2>
            <p>
              Envíanos el nombre de tus estudios o una fotografía de tu orden
              médica. Te informaremos sobre disponibilidad, preparación, costo y
              forma de entrega de resultados.
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
              src="/pakal/recepcion.webp"
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
