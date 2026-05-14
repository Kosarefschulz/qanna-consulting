import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { Card, CardTitle, CardDescription, Button } from "@/components/ui";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

const kiServices = [
  {
    slug: "bewertungsrechner",
    title: "Unternehmensbewertungsrechner",
    description:
      "Erhalten Sie eine erste Einschaetzung zum Wert Ihres Unternehmens. Basierend auf bewaehrten Bewertungsmethoden und aktuellen Marktdaten.",
    icon: "chart-bar",
    features: [
      "Schnelle Erstbewertung in Minuten",
      "Basiert auf EBIT-Multiplikatoren",
      "Branchenspezifische Anpassungen",
      "Detaillierte Ergebnisanalyse",
    ],
    cta: "Bewertung starten",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "kaeufer-matching",
    title: "KI-gestuetztes Kaeufer-Matching",
    description:
      "Unser Algorithmus analysiert potenzielle Kaeufer und findet die besten Matches fuer Ihr Unternehmen - diskret und effizient.",
    icon: "users",
    features: [
      "Analyse von Kaeufer-Profilen",
      "Strategische und finanzielle Passung",
      "Diskrete Vorauswahl",
      "Priorisierte Kaeufer-Shortlist",
    ],
    cta: "Mehr erfahren",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "due-diligence",
    title: "KI-gestuetzte Due Diligence",
    description:
      "Automatisierte Dokumentenanalyse und Risikobewertung beschleunigen den Due Diligence Prozess erheblich.",
    icon: "document-search",
    features: [
      "Automatische Dokumentenanalyse",
      "Risiko-Identifikation",
      "Vertragsanalyse mit KI",
      "Strukturierte Ergebnisberichte",
    ],
    cta: "Mehr erfahren",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
];

const benefits = [
  {
    icon: "lightning",
    title: "Schnellere Prozesse",
    description:
      "KI-gestuetzte Analysen liefern in Minuten, was frueher Tage dauerte.",
  },
  {
    icon: "target",
    title: "Hoehere Praezision",
    description:
      "Datengestuetzte Bewertungen reduzieren Risiken und verbessern Ergebnisse.",
  },
  {
    icon: "lightbulb",
    title: "Bessere Matches",
    description:
      "Algorithmen finden Kaeufer-Verkaeufer-Kombinationen, die sonst verborgen blieben.",
  },
  {
    icon: "shield",
    title: "Maximale Vertraulichkeit",
    description:
      "Alle Daten werden sicher verarbeitet und niemals an Dritte weitergegeben.",
  },
];

const stats = [
  { value: "60%", label: "Schnellere Due Diligence" },
  { value: "95%", label: "Matching-Trefferquote" },
  { value: "100%", label: "Diskretion garantiert" },
  { value: "24h", label: "Reaktionszeit" },
];

export const metadata = {
  title: "KI-Loesungen | QANNA Unternehmensnachfolge",
  description:
    "KI-gestuetzte Tools fuer Ihre Unternehmensnachfolge: Bewertungsrechner, Kaeufer-Matching und intelligente Due Diligence.",
};

export default function KILoesungenPage() {
  return (
    <main>
      <Header />

      <Hero
        badge="KI-INNOVATION"
        title="KI-Technologie fuer Ihre Nachfolge"
        subtitle="Wir kombinieren M&A-Erfahrung mit modernster KI-Technologie. Erleben Sie, wie intelligente Algorithmen Ihre Unternehmensnachfolge unterstuetzen."
        primaryCTA={{ text: "Bewertung starten", href: "/ki-loesungen/bewertungsrechner" }}
        secondaryCTA={{ text: "Kontakt aufnehmen", href: "/kontakt" }}
        backgroundImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80"
      />

      {/* KI Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
              UNSERE KI-TOOLS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Intelligente Werkzeuge fuer Ihre Nachfolge
            </h2>
            <p className="text-lg text-qanna-gray-600 max-w-2xl mx-auto">
              Nutzen Sie unsere KI-gestuetzten Tools fuer fundierte
              Entscheidungsgrundlagen bei Ihrer Unternehmensnachfolge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {kiServices.map((service) => (
              <Card
                key={service.slug}
                variant="default"
                hover
                padding="none"
                className="overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-qanna-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon name={service.icon} className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="mb-3">{service.title}</CardTitle>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-qanna-gray-600"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-qanna-gold flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="w-full">
                    <Link href={`/ki-loesungen/${service.slug}`}>
                      {service.cta}
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-qanna-navy">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
              IHRE VORTEILE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Warum KI-gestuetzte Nachfolgeberatung?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Die Kombination aus M&A-Expertise und kuenstlicher
              Intelligenz schafft einzigartige Mehrwerte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-qanna-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-qanna-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-qanna-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-qanna-navy/10 text-qanna-navy text-sm font-semibold rounded-full mb-4">
              SO FUNKTIONIERT&apos;S
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              KI und Mensch - das perfekte Team
            </h2>
            <p className="text-lg text-qanna-gray-600 max-w-2xl mx-auto">
              Unsere KI-Tools ersetzen keine Berater - sie machen sie besser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-qanna-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-qanna-navy mb-3">
                Daten eingeben
              </h3>
              <p className="text-qanna-gray-600">
                Sie geben Ihre Unternehmensdaten ein - Umsatz, EBIT, Branche
                und weitere relevante Informationen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-qanna-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-qanna-navy mb-3">
                KI analysiert
              </h3>
              <p className="text-qanna-gray-600">
                Unsere Algorithmen verarbeiten die Informationen und generieren
                erste Bewertungen und Kaeufer-Matches.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-qanna-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-qanna-navy mb-3">
                Experten verfeinern
              </h3>
              <p className="text-qanna-gray-600">
                Unsere M&A-Berater pruefen die Ergebnisse und ergaenzen sie durch ihre
                Erfahrung und Marktkenntnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-qanna-navy-dark">
        <div className="container-qanna text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit fuer eine erste Einschaetzung?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Starten Sie jetzt mit unserem Bewertungsrechner und erhalten Sie
            eine erste Einschaetzung zum Wert Ihres Unternehmens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              <Link href="/ki-loesungen/bewertungsrechner">Bewertung starten</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-qanna-navy"
            >
              <Link href="/kontakt">
                Persoenliche Beratung
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
