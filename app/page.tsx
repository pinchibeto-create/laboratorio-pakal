import Image from "next/image";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://laboratoriopakal.netlify.app";

const siteData = {
  name: "Laboratorio Pakal",
  fullName: "Laboratorio de Análisis Clínicos Pakal",
  phoneDisplay: "916 102 0613",
  phoneHref: "+529161020613",
  whatsappNumber: "529161020613",
  email: "laboratoriopakal@gmail.com",
  facebookUrl: "https://www.facebook.com/LaboratorioPakal/",
  hours: {
    weekdays: "Lunes a sábado · 6:30 a.m. a 8:00 p.m.",
    sunday: "Domingo · 7:00 a.m. a 1:00 p.m.",
  },
  branches: [
    {
      id: "juarez",
      name: "Sucursal Av. Juárez",
      shortName: "Av. Juárez",
      address:
        "Av. Juárez S/N, altos, arriba de COMEX, Barrio San José, Palenque, Chiapas, C.P. 29960.",
      reference: "Arriba de COMEX, entre COMEX y Agroveterinaria.",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Laboratorio+Pakal+Av.+Juarez+Palenque+Chiapas",
      mapEmbed:
        "https://www.google.com/maps?q=Laboratorio+Pakal+Av.+Juarez+Palenque+Chiapas&output=embed",
    },
    {
      id: "cinco-mayo",
      name: "Sucursal Av. 5 de Mayo",
      shortName: "Av. 5 de Mayo",
      address:
        "Av. 5 de Mayo, entre Aldama y Abasolo, Palenque, Chiapas, C.P. 29960.",
      reference: "Entre Aldama y Abasolo.",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Laboratorio+Pakal+Avenida+5+de+Mayo+entre+Aldama+y+Abasolo+Palenque+Chiapas",
      mapEmbed:
        "https://www.google.com/maps?q=Laboratorio+Pakal+Avenida+5+de+Mayo+entre+Aldama+y+Abasolo+Palenque+Chiapas&output=embed",
    },
  ],
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
    text: "Consulta información sobre estudios realizados a partir de una muestra sanguínea.",
    message: "Hola, quiero solicitar información sobre análisis de sangre.",
  },
  {
    icon: "urine" as const,
    title: "Análisis de orina",
    text: "Pregunta por disponibilidad y preparación para estudios con muestras de orina.",
    message: "Hola, quiero solicitar información sobre análisis de orina.",
  },
  {
    icon: "sample" as const,
    title: "Análisis de heces",
    text: "Recibe orientación sobre recolección, preparación y entrega de muestras.",
    message: "Hola, quiero solicitar información sobre análisis de heces.",
  },
  {
    icon: "special" as const,
    title: "Pruebas especiales",
    text: "Consulta directamente con el laboratorio la disponibilidad y requisitos de tu estudio.",
    message: "Hola, quiero saber si realizan una prueba especial.",
  },
  {
    icon: "profile" as const,
    title: "Perfiles de salud",
    text: "Solicita información sobre conjuntos de estudios y sus indicaciones de preparación.",
    message: "Hola, quiero solicitar información sobre sus perfiles de salud.",
  },
  {
    icon: "tube" as const,
    title: "Toma de muestras",
    text: "Recibe orientación sobre horario, requisitos y preparación antes de acudir.",
    message: "Hola, quiero solicitar información sobre la toma de muestras.",
  },
];

const preparationFaqs = [
  {
    title: "¿Necesito ayuno?",
    text: "Algunos estudios requieren ayuno y otros no. Confirma las indicaciones específicas de tus estudios antes de acudir.",
  },
  {
    title: "¿Puedo tomar mis medicamentos?",
    text: "Informa al personal si tomas medicamentos o suplementos. No los suspendas sin indicación de tu profesional de salud.",
  },
  {
    title: "¿Debo evitar ejercicio antes del estudio?",
    text: "Ciertos estudios pueden requerir evitar actividad física intensa previamente. Pregunta por las indicaciones correspondientes.",
  },
  {
    title: "¿Cómo debo llevar una muestra?",
    text: "La forma de recolección depende del estudio. Solicita instrucciones antes de recolectar o trasladar cualquier muestra.",
  },
  {
    title: "Tengo otra duda sobre mi preparación",
    text: "Escríbenos por WhatsApp con el nombre de tus estudios y te orientamos antes de acudir.",
  },
];

const reasons = [
  "Atención cercana",
  "Comunicación clara",
  "Dos sucursales en Palenque",
  "Horarios accesibles",
  "Orientación y resultados por WhatsApp",
];

type IconName =
  | "home"
  | "clock"
  | "pin"
  | "chat"
  | "whatsapp"
  | "arrow"
  | "check"
  | "blood"
  | "urine"
  | "sample"
  | "special"
  | "profile"
  | "tube"
  | "document"
  | "phone";

function Icon({ name }: { name: IconName }) {
  if (name === "home") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4 10 8-6 8 6v9H5v-9" />
        <path d="M9.5 19v-5h5v5" />
      </svg>
    );
  }

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

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4a8.2 8.2 0 1 1 15.1-4.3Z" />
        <path d="M8.3 8.1c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.5.9 1.2 1.6 2.1 2.1.3.2.5.2.7 0l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.3.5.5 0 .3-.2 1.4-.9 2-.5.5-1.2.8-2 .8-.6 0-1.4-.2-2.4-.6-2.5-1.1-4.2-3.6-4.3-3.8-.1-.2-1-1.4-1-2.6 0-.7.2-1.2.5-1.6Z" />
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

  if (name === "document") {
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
        <path d="M7.4 4.5 5.7 6.2c-.8.8-.8 2.1-.3 3.2 1.7 3.8 4.6 6.7 8.4 8.4 1.1.5 2.4.5 3.2-.3l1.7-1.7-3.1-3.1-1.8 1.3c-.3.2-.7.2-1 0a13 13 0 0 1-3.7-3.7c-.2-.3-.2-.7 0-1l1.3-1.8-3-3Z" />
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
  ariaLabel,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
  ariaLabel?: string;
  title?: string;
}) {
  return (
    <a
      className={className}
      href={message ? createWhatsAppUrl(message) : whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const openingHoursSpecification = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "06:30",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "07:00",
      closes: "13:00",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteData.fullName,
        alternateName: siteData.name,
        url: siteUrl,
        logo: `${siteUrl}/pakal/logo-pakal.webp`,
        image: `${siteUrl}/pakal/recepcion.webp`,
        telephone: siteData.phoneHref,
        email: siteData.email,
        sameAs: [siteData.facebookUrl],
        slogan: "Resultados confiables para cuidar tu salud",
        areaServed: {
          "@type": "City",
          name: "Palenque",
          containedInPlace: {
            "@type": "State",
            name: "Chiapas",
          },
        },
        department: siteData.branches.map((branch) => ({
          "@id": `${siteUrl}/#sucursal-${branch.id}`,
        })),
      },
      ...siteData.branches.map((branch) => ({
        "@type": ["MedicalBusiness", "DiagnosticLab"],
        "@id": `${siteUrl}/#sucursal-${branch.id}`,
        name: `${siteData.name} · ${branch.name}`,
        url: `${siteUrl}/#sucursal-${branch.id}`,
        parentOrganization: {
          "@id": `${siteUrl}/#organization`,
        },
        image: `${siteUrl}/pakal/recepcion.webp`,
        logo: `${siteUrl}/pakal/logo-pakal.webp`,
        telephone: siteData.phoneHref,
        email: siteData.email,
        hasMap: branch.mapsUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: branch.address,
          addressLocality: "Palenque",
          addressRegion: "Chiapas",
          postalCode: "29960",
          addressCountry: "MX",
        },
        openingHoursSpecification,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteData.phoneHref,
          contactType: "customer service",
          availableLanguage: "Spanish",
        },
        areaServed: {
          "@type": "City",
          name: "Palenque",
        },
        availableTest: services.map((service) => ({
          "@type": "MedicalTest",
          name: service.title,
        })),
      })),
    ],
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
            <a href="#resultados">Resultados</a>
            <a href="#sucursales">Sucursales</a>
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
              <a href="#resultados">Resultados</a>
              <a href="#sucursales">Sucursales</a>
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
                Análisis clínicos con atención cercana en dos sucursales de
                Palenque. Cotiza por WhatsApp y recibe tus resultados directamente
                en tu celular cuando estén listos y validados.
              </span>
              <span className="hero-lead-mobile">
                Dos sucursales en Palenque, orientación por WhatsApp y resultados
                directamente en tu celular.
              </span>
            </p>

            <div className="hero-actions hero-actions--desktop">
              <WhatsAppLink className="button button--whatsapp button--large">
                Cotizar por WhatsApp
                <Icon name="arrow" />
              </WhatsAppLink>
              <a className="button button--outline button--large" href="#sucursales">
                Ver sucursales
                <Icon name="pin" />
              </a>
            </div>

            <div className="hero-benefit hero-benefit--desktop">
              <span className="hero-benefit-icon">
                <Icon name="whatsapp" />
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
                alt="Atención cercana en Laboratorio Pakal"
                fill
                sizes="(max-width: 850px) 100vw, 52vw"
                priority
              />
            </div>
            <div className="hero-card">
              <span className="hero-card-icon">
                <Icon name="document" />
              </span>
              <p>
                <strong>¿Tienes una orden médica?</strong>
                Envíala por WhatsApp para solicitar información.
              </p>
            </div>
          </div>

          <div className="hero-mobile-actions">
            <WhatsAppLink className="button button--whatsapp button--large">
              Cotizar por WhatsApp
              <Icon name="whatsapp" />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="task-hub" aria-label="Accesos rápidos">
        <div className="container">
          <div className="task-grid">
            <a className="task-card" href="#estudios">
              <span className="task-card-icon">
                <Icon name="blood" />
              </span>
              <span className="task-card-copy">
                <strong>Estudios</strong>
                <small>Consulta nuestros servicios</small>
              </span>
              <Icon name="arrow" />
            </a>

            <WhatsAppLink
              className="task-card"
              message="Hola, Laboratorio Pakal. Tengo una orden médica y quiero cotizar los estudios."
            >
              <span className="task-card-icon">
                <Icon name="document" />
              </span>
              <span className="task-card-copy">
                <strong>Cotizar orden</strong>
                <small>Envíanos una fotografía</small>
              </span>
              <Icon name="arrow" />
            </WhatsAppLink>

            <a className="task-card" href="#resultados">
              <span className="task-card-icon">
                <Icon name="phone" />
              </span>
              <span className="task-card-copy">
                <strong>Resultados</strong>
                <small>Información de entrega</small>
              </span>
              <Icon name="arrow" />
            </a>

            <a className="task-card" href="#sucursales">
              <span className="task-card-icon">
                <Icon name="pin" />
              </span>
              <span className="task-card-copy">
                <strong>Sucursales</strong>
                <small>Elige la más conveniente</small>
              </span>
              <Icon name="arrow" />
            </a>
          </div>

          <div className="visit-strip visit-strip--official">
            <div>
              <span className="visit-strip-icon">
                <Icon name="clock" />
              </span>
              <p>
                <small>Horario en ambas sucursales</small>
                <strong>{siteData.hours.weekdays}</strong>
                <span>{siteData.hours.sunday}</span>
              </p>
            </div>
            <div>
              <span className="visit-strip-icon">
                <Icon name="pin" />
              </span>
              <p>
                <small>Dos ubicaciones</small>
                <strong>Av. Juárez y Av. 5 de Mayo</strong>
                <span>Palenque, Chiapas</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="human-gallery-section" aria-label="Atención en Laboratorio Pakal">
        <div className="container human-gallery">
          <div className="human-gallery-item human-gallery-item--wide">
            <Image
              src="/pakal/equipo.webp"
              alt="Atención profesional en Laboratorio Pakal"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
          <div className="human-gallery-item">
            <Image
              src="/pakal/preparacion.webp"
              alt="Orientación para estudios de laboratorio"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
          </div>
          <div className="human-gallery-item">
            <Image
              src="/pakal/interior.webp"
              alt="Espacio de atención de laboratorio"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      <section className="order-cta order-cta--streamlined" id="cotizar">
        <div className="container order-grid">
          <div className="order-copy">
            <p className="eyebrow eyebrow--light">Cotización sencilla</p>
            <h2>¿Tienes una orden médica?</h2>
            <p>
              Envíanos una fotografía por WhatsApp. Te orientamos sobre
              disponibilidad, preparación y costo de los estudios solicitados.
            </p>
            <WhatsAppLink
              className="button button--whatsapp button--large"
              message="Hola, Laboratorio Pakal. Tengo una orden médica y quiero cotizar mis estudios."
            >
              Enviar mi orden por WhatsApp
              <Icon name="whatsapp" />
            </WhatsAppLink>
            <small>
              Comparte información de salud únicamente mediante los canales directos
              del laboratorio.
            </small>
          </div>
          <div className="order-visual">
            <Image
              src="/pakal/preparacion.webp"
              alt="Orientación sobre una orden médica"
              fill
              sizes="(max-width: 850px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className="section studies" id="estudios">
        <div className="container">
          <div className="section-title-centered">
            <p className="eyebrow">Estudios de laboratorio</p>
            <h2>¿Qué necesitas consultar?</h2>
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
                <WhatsAppLink className="service-link" message={service.message}>
                  Solicitar información
                  <Icon name="arrow" />
                </WhatsAppLink>
              </article>
            ))}
          </div>

          <div className="studies-help">
            <span className="studies-help-icon">
              <Icon name="document" />
            </span>
            <p>
              <strong>¿No encuentras el estudio que necesitas?</strong>
              Envíanos el nombre o una fotografía de tu orden médica y te ayudamos.
            </p>
            <WhatsAppLink
              className="text-link"
              message="Hola, tengo una orden médica y quiero saber si realizan estos estudios."
            >
              Consultar por WhatsApp <Icon name="arrow" />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="section preparation preparation-simple" id="preparacion">
        <div className="container preparation-grid">
          <div className="preparation-intro">
            <p className="eyebrow">Antes de acudir</p>
            <h2>Preparación sin complicaciones</h2>
            <p>
              Los requisitos cambian según cada estudio. Revisa las dudas más
              frecuentes y confirma las indicaciones de tus análisis antes de acudir.
            </p>
            <div className="preparation-image">
              <Image
                src="/pakal/preparacion.webp"
                alt="Orientación previa a un estudio de laboratorio"
                fill
                sizes="(max-width: 850px) 100vw, 42vw"
              />
            </div>
          </div>

          <div>
            <div className="accordion">
              {preparationFaqs.map((item, index) => (
                <details key={item.title}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.title}
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{item.text}</p>
                </details>
              ))}
            </div>
            <WhatsAppLink
              className="button button--blue button--large preparation-button"
              message="Hola, quiero confirmar cómo debo prepararme para mis estudios."
            >
              Consultar preparación
              <Icon name="whatsapp" />
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
              El tiempo de entrega varía según el tipo de análisis. Consulta el
              tiempo estimado correspondiente al realizar tu estudio.
            </p>
            <WhatsAppLink
              className="button button--whatsapp button--large"
              message="Hola, quiero solicitar información sobre la entrega de mis resultados."
            >
              Consultar mis resultados
              <Icon name="whatsapp" />
            </WhatsAppLink>
          </div>

          <div className="results-visual" aria-label="Resultado recibido en el celular">
            <div className="results-phone">
              <span className="results-phone-top">
                <Icon name="whatsapp" />
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
                alt="Equipo y atención de Laboratorio Pakal"
                fill
                sizes="(max-width: 850px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow">Por qué elegir Laboratorio Pakal</p>
            <h2>Atención cercana en Palenque</h2>
            <p>
              Información clara y un trato respetuoso desde que solicitas una
              cotización hasta que recibes tus resultados.
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

      <section className="section branches-section" id="sucursales">
        <div className="container">
          <div className="section-heading branches-heading">
            <div>
              <p className="eyebrow">Dos sucursales en Palenque</p>
              <h2>Elige la ubicación que te quede mejor</h2>
            </div>
            <p>
              Ambas sucursales manejan el mismo horario de atención. Abre la ruta
              de cada ubicación directamente en Google Maps.
            </p>
          </div>

          <div className="branches-grid">
            {siteData.branches.map((branch) => (
              <article className="branch-card" id={`sucursal-${branch.id}`} key={branch.id}>
                <div className="branch-map">
                  <iframe
                    title={`Mapa de ${branch.name} de Laboratorio Pakal`}
                    loading="lazy"
                    src={branch.mapEmbed}
                  />
                </div>
                <div className="branch-content">
                  <div className="branch-title-row">
                    <span className="branch-pin">
                      <Icon name="pin" />
                    </span>
                    <div>
                      <small>Laboratorio Pakal</small>
                      <h3>{branch.name}</h3>
                    </div>
                  </div>

                  <p className="branch-address">{branch.address}</p>
                  <p className="branch-reference">{branch.reference}</p>

                  <div className="branch-hours">
                    <Icon name="clock" />
                    <div>
                      <strong>{siteData.hours.weekdays}</strong>
                      <span>{siteData.hours.sunday}</span>
                    </div>
                  </div>

                  <div className="branch-actions">
                    <a
                      className="button button--blue branch-map-button"
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cómo llegar
                      <Icon name="arrow" />
                    </a>

                    <div className="branch-contact-icons" aria-label="Contacto">
                      <a
                        className="branch-icon-link branch-icon-call"
                        href={`tel:${siteData.phoneHref}`}
                        aria-label={`Llamar a ${branch.name}`}
                        title="Llamar"
                      >
                        <Icon name="phone" />
                      </a>
                      <WhatsAppLink
                        className="branch-icon-link branch-icon-whatsapp"
                        message={`Hola, Laboratorio Pakal. Quisiera información para acudir a la ${branch.name}.`}
                        ariaLabel={`Enviar WhatsApp a ${branch.name}`}
                        title="WhatsApp"
                      >
                        <Icon name="whatsapp" />
                      </WhatsAppLink>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-shape" aria-hidden="true" />
        <div className="container final-grid">
          <div>
            <p className="eyebrow eyebrow--light">Atención por WhatsApp</p>
            <h2>Cotiza tus estudios antes de acudir</h2>
            <p>
              Envíanos el nombre de tus estudios o una fotografía de tu orden
              médica. Te orientamos sobre preparación, costo y la sucursal que te
              resulte más conveniente.
            </p>
            <div className="final-actions">
              <WhatsAppLink className="button button--whatsapp button--large">
                Escribir por WhatsApp
                <Icon name="whatsapp" />
              </WhatsAppLink>
              <a className="button button--outline-light button--large" href="#sucursales">
                Ver sucursales
                <Icon name="pin" />
              </a>
            </div>
          </div>
          <div className="final-image">
            <Image
              src="/pakal/recepcion.webp"
              alt="Atención en Laboratorio Pakal"
              fill
              sizes="(max-width: 850px) 100vw, 44vw"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid footer-grid--official">
          <div className="footer-brand">
            <a href="#inicio" aria-label="Volver al inicio">
              <Logo inverse />
            </a>
            <p>
              Análisis clínicos en Palenque, Chiapas, con atención cercana,
              orientación y entrega de resultados por WhatsApp.
            </p>
          </div>

          <div>
            <small>Navegación</small>
            <a href="#estudios">Estudios</a>
            <a href="#preparacion">Preparación</a>
            <a href="#resultados">Resultados</a>
            <a href="#sucursales">Sucursales</a>
          </div>

          <div>
            <small>Contacto</small>
            <a href={`tel:${siteData.phoneHref}`}>Llamar · {siteData.phoneDisplay}</a>
            <WhatsAppLink>WhatsApp · {siteData.phoneDisplay}</WhatsAppLink>
            <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
            <a href={siteData.facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>

          <div className="footer-branches">
            <small>Sucursales</small>
            {siteData.branches.map((branch) => (
              <div className="footer-branch" key={branch.id}>
                <strong>{branch.shortName}</strong>
                <p>{branch.address}</p>
                <p>{siteData.hours.weekdays}</p>
                <p>{siteData.hours.sunday}</p>
                <a href={branch.mapsUrl} target="_blank" rel="noreferrer">
                  Cómo llegar ↗
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="container footer-bottom footer-bottom--official">
          <span>© {new Date().getFullYear()} Laboratorio Pakal</span>
          <span>Sitio informativo · No sustituye una consulta médica.</span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>

      <div className="floating-contact" aria-label="Contacto rápido">
        <a
          className="floating-contact-item floating-call"
          href={`tel:${siteData.phoneHref}`}
          aria-label={`Llamar a Laboratorio Pakal al ${siteData.phoneDisplay}`}
          title="Llamar"
        >
          <Icon name="phone" />
        </a>
        <WhatsAppLink
          className="floating-contact-item floating-whatsapp"
          message="Hola, Laboratorio Pakal. Quisiera información sobre estudios, preparación y sucursales."
          ariaLabel="Escribir a Laboratorio Pakal por WhatsApp"
          title="WhatsApp"
        >
          <Icon name="whatsapp" />
        </WhatsAppLink>
      </div>

      <nav className="mobile-bottom-nav mobile-bottom-nav--official" aria-label="Accesos rápidos móviles">
        <a href="#inicio">
          <Icon name="home" />
          <span>Inicio</span>
        </a>
        <a href="#estudios">
          <Icon name="blood" />
          <span>Estudios</span>
        </a>
        <a href="#sucursales">
          <Icon name="pin" />
          <span>Sucursales</span>
        </a>
      </nav>
    </main>
  );
}
