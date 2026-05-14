import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { Card, CardTitle, CardDescription, Button } from "@/components/ui";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

const services = [
  {
    slug: "unternehmensbewertung",
    title: "Unternehmensbewertung",
    description:
      "Fundierte Bewertung Ihres Unternehmens nach anerkannten Methoden. Wir ermitteln den fairen Marktwert als Basis fuer erfolgreiche Verhandlungen.",
    features: [
      "DCF-Verfahren",
      "Multiplikatorverfahren",
      "Substanzwertermittlung",
      "Marktvergleichsanalyse",
    ],
    icon: "chart-bar",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "nachfolgersuche",
    title: "Kaeufer-/Nachfolgersuche",
    description:
      "Systematische Identifikation und diskrete Ansprache geeigneter Kaeufer aus unserem Netzwerk. Zielorientiert den passenden Nachfolger finden.",
    features: [
      "Kaeufer-Screening",
      "Diskrete Ansprache",
      "Interessentenqualifizierung",
      "Netzwerk-Zugang",
    ],
    icon: "search",
    image:
      "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "due-diligence",
    title: "Due Diligence",
    description:
      "Professionelle Vorbereitung und Begleitung der Pruefungsprozesse. Wir stellen sicher, dass alle Informationen richtig aufbereitet sind.",
    features: [
      "Financial Due Diligence",
      "Legal Due Diligence",
      "Tax Due Diligence",
      "Datenraum-Management",
    ],
    icon: "check-circle",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "vertragsverhandlung",
    title: "Vertragsverhandlung",
    description:
      "Erfahrene Verhandlungsfuehrung fuer optimale Konditionen. Wir vertreten Ihre Interessen professionell und zielorientiert.",
    features: [
      "Verhandlungsstrategie",
      "Term Sheet Erstellung",
      "Kaufpreisverhandlung",
      "Vertragsgestaltung",
    ],
    icon: "users",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "post-merger-integration",
    title: "Post-Merger Integration",
    description:
      "Begleitung der Integration nach erfolgreicher Transaktion. Wir sorgen fuer einen reibungslosen Uebergang und nachhaltige Wertschoepfung.",
    features: [
      "Integrationsplanung",
      "Change Management",
      "Synergieerfassung",
      "Stakeholder-Kommunikation",
    ],
    icon: "refresh",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
];

export const metadata = {
  title: "Leistungen | QANNA Unternehmensnachfolge",
  description:
    "Unsere Leistungen: Unternehmensbewertung, Kaeufersuche, Due Diligence, Vertragsverhandlung und Post-Merger Integration.",
};

export default function LeistungenPage() {
  return (
    <main>
      <Header />

      <Hero
        badge="UNSERE LEISTUNGEN"
        title="Ganzheitliche Nachfolgeberatung"
        subtitle="Von der ersten Bewertung bis zur erfolgreichen Uebergabe - wir begleiten Sie durch den gesamten Nachfolgeprozess."
        primaryCTA={{ text: "Erstgespraech vereinbaren", href: "/kontakt" }}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Unsere Nachfolge-Leistungen
            </h2>
            <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
              Wir unterstuetzen Sie mit Expertise und Erfahrung bei der
              erfolgreichen Uebergabe Ihres Unternehmens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.slug}
                variant="default"
                hover
                padding="none"
                className="overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name={service.icon} className="w-8 h-8 text-qanna-gold" />
                    <CardTitle>{service.title}</CardTitle>
                  </div>
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
                          className="w-4 h-4 mr-2 text-qanna-gold"
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
                    <Link href={`/leistungen/${service.slug}`}>
                      Mehr erfahren
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Unser Nachfolge-Prozess
            </h2>
            <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
              Strukturiert, transparent und ergebnisorientiert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Bewertung",
                description:
                  "Fundierte Ermittlung des Unternehmenswertes als Verhandlungsbasis.",
              },
              {
                step: "02",
                title: "Kaeufersuche",
                description:
                  "Diskrete Identifikation und Ansprache geeigneter Nachfolger.",
              },
              {
                step: "03",
                title: "Due Diligence",
                description:
                  "Professionelle Begleitung der Pruefungsprozesse.",
              },
              {
                step: "04",
                title: "Verhandlung",
                description:
                  "Erfahrene Fuehrung der Kaufpreisverhandlungen.",
              },
              {
                step: "05",
                title: "Integration",
                description:
                  "Begleitung der Uebergabe und Integration.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-qanna-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-qanna-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-qanna-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-qanna-navy">
        <div className="container-qanna text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit fuer Ihre Unternehmensnachfolge?
          </h2>
          <p className="text-xl text-qanna-gray-300 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie ein unverbindliches Erstgespraech und erfahren Sie,
            wie wir Sie bei Ihrer Nachfolge unterstuetzen koennen.
          </p>
          <Button variant="gold" size="lg">
            <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
