import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { Card, CardTitle, CardDescription, Button } from "@/components/ui";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import { notFound } from "next/navigation";

// Service data - komplett neu fuer Nachfolge
const servicesData = {
  unternehmensbewertung: {
    title: "Unternehmensbewertung",
    badge: "BEWERTUNG",
    subtitle:
      "Fundierte Bewertung Ihres Unternehmens nach anerkannten Methoden. Die Basis fuer erfolgreiche Verhandlungen.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80",
    description: `
      Der Unternehmenswert ist die zentrale Groesse bei jeder Nachfolge. Eine fundierte Bewertung
      schafft Transparenz und ist die Grundlage fuer faire Verhandlungen.

      Wir nutzen mehrere Bewertungsverfahren parallel und gleichen die Ergebnisse mit aktuellen
      Marktdaten ab, um einen realistischen und durchsetzbaren Wert zu ermitteln.
    `,
    services: [
      {
        title: "DCF-Verfahren",
        description:
          "Discounted Cash Flow Bewertung basierend auf zukuenftigen Zahlungsstroemen.",
        icon: "chart-bar",
      },
      {
        title: "Multiplikatorverfahren",
        description:
          "EBIT- und Umsatz-Multiplikatoren basierend auf vergleichbaren Transaktionen.",
        icon: "currency",
      },
      {
        title: "Substanzwertermittlung",
        description:
          "Bewertung der materiellen und immateriellen Vermoegenswerte.",
        icon: "building",
      },
      {
        title: "Marktvergleichsanalyse",
        description:
          "Vergleich mit aehnlichen Unternehmen und aktuellen Transaktionen.",
        icon: "search",
      },
      {
        title: "Ertragswertverfahren",
        description:
          "Klassisches Verfahren nach IDW S1 Standard.",
        icon: "document",
      },
      {
        title: "Sensitivitaetsanalyse",
        description:
          "Bewertung verschiedener Szenarien und Einflussfaktoren.",
        icon: "chart-down",
      },
    ],
    benefits: [
      "Mehrere Bewertungsmethoden parallel",
      "Aktuelle Marktdaten und Branchenmultiplikatoren",
      "IDW-konforme Bewertungsgutachten",
      "Verhandlungssichere Dokumentation",
      "Steuerliche Optimierungsberatung",
      "Schnelle Erstergebnisse moeglich",
    ],
    process: [
      {
        step: "1",
        title: "Datenerhebung",
        description: "Sammlung aller relevanten Unternehmensdaten",
      },
      {
        step: "2",
        title: "Analyse",
        description: "Detaillierte Auswertung und Bereinigung",
      },
      {
        step: "3",
        title: "Bewertung",
        description: "Anwendung mehrerer Bewertungsmethoden",
      },
      {
        step: "4",
        title: "Validierung",
        description: "Abgleich mit Marktdaten und Transaktionen",
      },
      {
        step: "5",
        title: "Report",
        description: "Erstellung des Bewertungsberichts",
      },
    ],
  },
  nachfolgersuche: {
    title: "Kaeufer-/Nachfolgersuche",
    badge: "NACHFOLGERSUCHE",
    subtitle:
      "Systematische Identifikation und diskrete Ansprache geeigneter Kaeufer aus unserem Netzwerk.",
    heroImage:
      "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=2000&q=80",
    description: `
      Die Suche nach dem richtigen Nachfolger ist entscheidend fuer den Erfolg der Transaktion.
      Wir identifizieren systematisch geeignete Kaeufer und sprechen diese diskret an.

      Unser Netzwerk umfasst strategische Investoren, Private Equity, Family Offices und
      Management-Teams, die aktiv nach Uebernahmezielen suchen.
    `,
    services: [
      {
        title: "Kaeufer-Screening",
        description:
          "Systematische Identifikation potenzieller Kaeufer nach definierten Kriterien.",
        icon: "search",
      },
      {
        title: "Diskrete Ansprache",
        description:
          "Vertrauliche Kontaktaufnahme ohne Offenlegung des Unternehmensnamens.",
        icon: "shield",
      },
      {
        title: "Interessentenqualifizierung",
        description:
          "Pruefung der Serositaet, Finanzierungsfaehigkeit und strategischen Passung.",
        icon: "check-circle",
      },
      {
        title: "Teaser & Information Memorandum",
        description:
          "Erstellung professioneller Verkaufsunterlagen.",
        icon: "document",
      },
      {
        title: "Bieterverfahren",
        description:
          "Strukturierte Durchfuehrung eines wettbewerblichen Prozesses.",
        icon: "users",
      },
      {
        title: "Netzwerk-Zugang",
        description:
          "Zugriff auf unser Netzwerk aus Investoren und Strategen.",
        icon: "globe",
      },
    ],
    benefits: [
      "Breites Kaeufer-Netzwerk",
      "Hoechste Diskretion garantiert",
      "Professionelle Verkaufsunterlagen",
      "Strukturierter Prozess",
      "Wettbewerbliche Spannung erzeugen",
      "Maximaler Verkaufspreis",
    ],
    process: [
      {
        step: "1",
        title: "Profilerstellung",
        description: "Definition des idealen Kaeuferprofils",
      },
      {
        step: "2",
        title: "Long List",
        description: "Identifikation potenzieller Interessenten",
      },
      {
        step: "3",
        title: "Ansprache",
        description: "Diskrete Kontaktaufnahme",
      },
      {
        step: "4",
        title: "Qualifizierung",
        description: "Pruefung der Interessenten",
      },
      {
        step: "5",
        title: "Short List",
        description: "Auswahl der besten Kandidaten",
      },
    ],
  },
  "due-diligence": {
    title: "Due Diligence",
    badge: "DUE DILIGENCE",
    subtitle:
      "Professionelle Vorbereitung und Begleitung der Pruefungsprozesse auf Kaeufer- und Verkaeuferseite.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80",
    description: `
      Die Due Diligence ist ein kritischer Meilenstein im M&A-Prozess. Eine gute Vorbereitung
      minimiert Risiken und beschleunigt den Prozess erheblich.

      Wir unterstuetzen Sie bei der Erstellung eines professionellen Datenraums und begleiten
      Sie durch den gesamten Pruefungsprozess.
    `,
    services: [
      {
        title: "Vendor Due Diligence",
        description:
          "Proaktive Erstellung einer Verkaeufer-Due-Diligence zur Prozessbeschleunigung.",
        icon: "document-text",
      },
      {
        title: "Financial Due Diligence",
        description:
          "Begleitung der finanziellen Pruefung und Beantwortung von Fragen.",
        icon: "chart-bar",
      },
      {
        title: "Datenraum-Management",
        description:
          "Aufbau und Pflege eines professionellen virtuellen Datenraums.",
        icon: "folder",
      },
      {
        title: "Q&A Management",
        description:
          "Koordination und Beantwortung von Fragen der Kaeuferseite.",
        icon: "chat",
      },
      {
        title: "Red Flag Report",
        description:
          "Identifikation kritischer Themen und Vorbereitung von Loesungen.",
        icon: "flag",
      },
      {
        title: "Management Presentation",
        description:
          "Vorbereitung und Begleitung der Management-Praesentation.",
        icon: "users",
      },
    ],
    benefits: [
      "Professioneller Datenraum",
      "Beschleunigte Prozesse",
      "Minimierte Deal-Breaker",
      "Erfahrenes Q&A Management",
      "Koordination aller Berater",
      "Verhandlungsstarke Position",
    ],
    process: [
      {
        step: "1",
        title: "Vorbereitung",
        description: "Sammlung und Aufbereitung aller Dokumente",
      },
      {
        step: "2",
        title: "Datenraum",
        description: "Einrichtung des virtuellen Datenraums",
      },
      {
        step: "3",
        title: "Pruefung",
        description: "Begleitung der Due Diligence Phase",
      },
      {
        step: "4",
        title: "Q&A",
        description: "Management der Fragen und Antworten",
      },
      {
        step: "5",
        title: "Abschluss",
        description: "Finalisierung und Findings-Besprechung",
      },
    ],
  },
  vertragsverhandlung: {
    title: "Vertragsverhandlung",
    badge: "VERHANDLUNG",
    subtitle:
      "Erfahrene Verhandlungsfuehrung fuer optimale Konditionen bei Kaufpreis und Vertragsbedingungen.",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80",
    description: `
      Die Vertragsverhandlung entscheidet ueber den wirtschaftlichen Erfolg der Transaktion.
      Wir vertreten Ihre Interessen professionell und ergebnisorientiert.

      Mit unserer Erfahrung aus zahlreichen Transaktionen kennen wir die marktublichen Standards
      und setzen Ihre Interessen optimal durch.
    `,
    services: [
      {
        title: "Verhandlungsstrategie",
        description:
          "Entwicklung einer massgeschneiderten Verhandlungsstrategie.",
        icon: "target",
      },
      {
        title: "Letter of Intent",
        description:
          "Verhandlung und Abschluss der Absichtserklaerung.",
        icon: "document",
      },
      {
        title: "Kaufpreisverhandlung",
        description:
          "Professionelle Verhandlung des Kaufpreises und der Zahlungsmodalitaeten.",
        icon: "currency",
      },
      {
        title: "SPA Verhandlung",
        description:
          "Verhandlung des Unternehmenskaufvertrags und aller Nebenabreden.",
        icon: "scale",
      },
      {
        title: "Garantien & Gewaehrleistungen",
        description:
          "Verhandlung von Garantiekatalogen und Haftungsgrenzen.",
        icon: "shield",
      },
      {
        title: "Signing & Closing",
        description:
          "Begleitung bis zum erfolgreichen Abschluss der Transaktion.",
        icon: "check-circle",
      },
    ],
    benefits: [
      "Erfahrene Verhandlungsfuehrer",
      "Marktuebliche Standards bekannt",
      "Optimale Interessenvertretung",
      "Strukturierte Verhandlungsfuehrung",
      "Koordination aller Berater",
      "Erfolgreicher Abschluss",
    ],
    process: [
      {
        step: "1",
        title: "Strategie",
        description: "Entwicklung der Verhandlungsstrategie",
      },
      {
        step: "2",
        title: "LOI",
        description: "Verhandlung der Absichtserklaerung",
      },
      {
        step: "3",
        title: "SPA",
        description: "Verhandlung des Kaufvertrags",
      },
      {
        step: "4",
        title: "Signing",
        description: "Unterzeichnung aller Vertraege",
      },
      {
        step: "5",
        title: "Closing",
        description: "Vollzug der Transaktion",
      },
    ],
  },
  "post-merger-integration": {
    title: "Post-Merger Integration",
    badge: "INTEGRATION",
    subtitle:
      "Begleitung der Integration nach erfolgreicher Transaktion fuer nachhaltige Wertschoepfung.",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80",
    description: `
      Mit dem Closing beginnt die eigentliche Arbeit. Die Integration entscheidet darueber,
      ob der erwartete Wert auch realisiert wird.

      Wir begleiten den Uebergabeprozess und sorgen fuer eine reibungslose Transition
      von Wissen, Verantwortung und Beziehungen.
    `,
    services: [
      {
        title: "Integrationsplanung",
        description:
          "Entwicklung eines detaillierten Integrationsplans mit klaren Meilensteinen.",
        icon: "document",
      },
      {
        title: "Day 1 Readiness",
        description:
          "Vorbereitung aller notwendigen Massnahmen fuer den ersten Tag.",
        icon: "lightning",
      },
      {
        title: "Stakeholder-Kommunikation",
        description:
          "Professionelle Kommunikation mit Mitarbeitern, Kunden und Lieferanten.",
        icon: "users",
      },
      {
        title: "Wissensuebertragung",
        description:
          "Strukturierte Uebergabe von Wissen und Verantwortlichkeiten.",
        icon: "academic",
      },
      {
        title: "Synergieerfassung",
        description:
          "Identifikation und Realisierung von Synergiepotenzialen.",
        icon: "trending-up",
      },
      {
        title: "100-Tage-Programm",
        description:
          "Strukturiertes Programm fuer die ersten 100 Tage nach Closing.",
        icon: "calendar",
      },
    ],
    benefits: [
      "Reibungslose Uebergabe",
      "Minimierte Stoerungen",
      "Erhalt von Kundenbeziehungen",
      "Mitarbeiterbindung",
      "Synergierealisation",
      "Nachhaltige Wertschoepfung",
    ],
    process: [
      {
        step: "1",
        title: "Planung",
        description: "Entwicklung des Integrationsplans",
      },
      {
        step: "2",
        title: "Day 1",
        description: "Umsetzung der Day-1-Massnahmen",
      },
      {
        step: "3",
        title: "Transition",
        description: "Strukturierte Uebergabephase",
      },
      {
        step: "4",
        title: "Integration",
        description: "Umsetzung der Integrationsmassnahmen",
      },
      {
        step: "5",
        title: "Review",
        description: "Erfolgskontrolle und Nachsteuerung",
      },
    ],
  },
};

type ServiceSlug = keyof typeof servicesData;

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];

  if (!service) {
    return {
      title: "Leistung nicht gefunden | QANNA Unternehmensnachfolge",
    };
  }

  return {
    title: `${service.title} | QANNA Unternehmensnachfolge`,
    description: service.subtitle,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Header />

      <Hero
        badge={service.badge}
        title={service.title}
        subtitle={service.subtitle}
        primaryCTA={{ text: "Erstgespraech vereinbaren", href: "/kontakt" }}
        secondaryCTA={{ text: "Alle Leistungen", href: "/leistungen" }}
        backgroundImage={service.heroImage}
      />

      {/* Description */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-qanna-gray-600 leading-relaxed whitespace-pre-line">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Unsere Leistungen im Detail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.services.map((item) => (
              <Card key={item.title} variant="default" hover padding="lg">
                <Icon name={item.icon} className="w-10 h-10 text-qanna-gold mb-4" />
                <CardTitle className="mb-3">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Unser Vorgehen
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {service.process.map((step, index) => (
              <div key={step.step} className="flex-1 text-center relative">
                <div className="w-12 h-12 bg-qanna-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-qanna-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-qanna-gray-600">{step.description}</p>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-qanna-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-qanna-navy">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ihre Vorteile
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-qanna-gold flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-qanna-gray-100">
        <div className="container-qanna text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
            Bereit fuer den naechsten Schritt?
          </h2>
          <p className="text-lg text-qanna-gray-600 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie ein unverbindliches Erstgespraech und erfahren Sie,
            wie wir Sie im Bereich {service.title} unterstuetzen koennen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              <Link href="/kontakt">Erstgespraech vereinbaren</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/leistungen">Alle Leistungen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
