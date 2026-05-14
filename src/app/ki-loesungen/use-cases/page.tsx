import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { Card, CardTitle, CardDescription, Button } from "@/components/ui";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

const useCases = [
  {
    title: "Automatisierte Due Diligence",
    icon: "document",
    description:
      "Unsere KI analysiert Tausende von Dokumenten in Stunden statt Wochen. Sie erkennt Risiken, Anomalien und wichtige Vertragsklauseln automatisch.",
    benefits: [
      "80% schnellere Dokumentenanalyse",
      "Automatische Risikobewertung",
      "Konsistente Prüfungsqualität",
      "Reduzierte Fehlerquote",
    ],
    stats: { value: "10.000+", label: "Dokumente pro Projekt" },
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Intelligente Marktanalyse",
    icon: "chart-bar",
    description:
      "Echtzeit-Analysen von Markttrends, Wettbewerbern und Branchenentwicklungen. Fundierte Entscheidungen basierend auf aktuellen Daten.",
    benefits: [
      "Automatisches Wettbewerber-Monitoring",
      "Branchentrend-Erkennung",
      "Preis- und Bewertungsvergleiche",
      "Predictive Market Intelligence",
    ],
    stats: { value: "50+", label: "Datenpunkte pro Analyse" },
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Käufer-Matching",
    icon: "target",
    description:
      "Unser Algorithmus identifiziert die am besten passenden Käufer aus unserer Datenbank und dem Markt – basierend auf strategischen und finanziellen Kriterien.",
    benefits: [
      "Präzise Käuferprofile",
      "Synergieberechnung",
      "Wahrscheinlichkeits-Scoring",
      "Automatische Long-List-Erstellung",
    ],
    stats: { value: "95%", label: "Matching-Genauigkeit" },
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Predictive Analytics",
    icon: "sparkles",
    description:
      "Vorhersagen zu Unternehmensentwicklung, Marktbewertungen und Transaktionswahrscheinlichkeiten. Datengestützte Prognosen für bessere Entscheidungen.",
    benefits: [
      "EBIT-Prognosen",
      "Bewertungstrend-Vorhersagen",
      "Deal-Wahrscheinlichkeits-Analyse",
      "Risiko-Früherkennung",
    ],
    stats: { value: "85%", label: "Prognosegenauigkeit" },
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dokumenten-Automatisierung",
    icon: "document-text",
    description:
      "Automatische Erstellung von NDAs, LOIs, Info-Memoranden und anderen Transaktionsdokumenten auf Basis von Templates und Projektdaten.",
    benefits: [
      "Schnellere Dokumentenerstellung",
      "Konsistente Formatierung",
      "Automatische Datenübernahme",
      "Mehrsprachige Dokumente",
    ],
    stats: { value: "70%", label: "Zeitersparnis" },
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Financial Modeling",
    icon: "trending-up",
    description:
      "KI-gestützte Finanzmodelle für Unternehmensbewertung, Szenarioanalysen und Sensitivitätsberechnungen – schnell und präzise.",
    benefits: [
      "Multiple Bewertungsmethoden",
      "Szenario-Analysen",
      "Monte-Carlo-Simulationen",
      "Automatische Sensitivitäts-Tests",
    ],
    stats: { value: "1.000+", label: "Szenarien pro Modell" },
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
];

const process = [
  {
    step: "01",
    title: "Datenerfassung",
    description:
      "Sie laden Ihre Dokumente hoch oder verbinden Ihre Systeme. Unsere KI beginnt sofort mit der Analyse.",
    icon: "upload",
  },
  {
    step: "02",
    title: "KI-Verarbeitung",
    description:
      "Machine-Learning-Algorithmen extrahieren, klassifizieren und analysieren die Informationen.",
    icon: "chip",
  },
  {
    step: "03",
    title: "Qualitätsprüfung",
    description:
      "Unsere Experten prüfen die Ergebnisse und ergänzen ihre Einschätzungen und Erfahrungswerte.",
    icon: "check-circle",
  },
  {
    step: "04",
    title: "Ergebnislieferung",
    description:
      "Sie erhalten aufbereitete Berichte, Dashboards und konkrete Handlungsempfehlungen.",
    icon: "chart-bar",
  },
];

export const metadata = {
  title: "KI Use Cases | QANNA Consulting",
  description:
    "Entdecken Sie unsere KI-Anwendungsfälle: Due Diligence Automatisierung, Marktanalyse, Käufer-Matching, Predictive Analytics und mehr.",
};

export default function UseCasesPage() {
  return (
    <main>
      <Header />

      <Hero
        badge="KI USE CASES"
        title="KI in der Beratungspraxis"
        subtitle="Entdecken Sie, wie wir künstliche Intelligenz einsetzen, um bessere Ergebnisse schneller zu liefern. Konkrete Anwendungsfälle aus unserer täglichen Arbeit."
        primaryCTA={{ text: "Demo vereinbaren", href: "/kontakt" }}
        secondaryCTA={{ text: "KI-Assistent testen", href: "/ki-loesungen/chat-demo" }}
        backgroundImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Use Cases Grid */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
              ANWENDUNGSFÄLLE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Wie wir KI einsetzen
            </h2>
            <p className="text-lg text-qanna-gray-600 max-w-2xl mx-auto">
              Konkrete Beispiele, wie künstliche Intelligenz unsere Beratungsarbeit
              verbessert und beschleunigt.
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 items-center`}
              >
                <div className="flex-1">
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-qanna-navy text-white px-6 py-3 rounded-xl shadow-lg">
                      <p className="text-2xl font-bold text-qanna-gold">
                        {useCase.stats.value}
                      </p>
                      <p className="text-sm">{useCase.stats.label}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name={useCase.icon} className="w-10 h-10 text-qanna-gold" />
                    <h3 className="text-2xl md:text-3xl font-bold text-qanna-navy">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-lg text-qanna-gray-700 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {useCase.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center text-qanna-gray-600"
                      >
                        <svg
                          className="w-5 h-5 mr-3 text-qanna-gold flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-qanna-navy">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
              DER PROZESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              So arbeitet unsere KI
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ein transparenter Prozess von der Dateneingabe bis zum Ergebnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-qanna-gold/50" />
                )}
                <div className="w-16 h-16 bg-qanna-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm text-qanna-gold font-semibold mb-2">
                  SCHRITT {step.step}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-qanna-navy/10 text-qanna-navy text-sm font-semibold rounded-full mb-4">
                TECHNOLOGIE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-6">
                Modernste KI-Technologie
              </h2>
              <p className="text-lg text-qanna-gray-600 mb-6 leading-relaxed">
                Wir nutzen die neuesten Entwicklungen im Bereich Machine Learning
                und Natural Language Processing. Unsere Modelle werden
                kontinuierlich trainiert und verbessert.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Large Language Models",
                    desc: "GPT-4, Claude und spezialisierte Finanz-Modelle",
                  },
                  {
                    title: "Document AI",
                    desc: "OCR, Layoutanalyse und Entitätserkennung",
                  },
                  {
                    title: "Predictive Models",
                    desc: "Gradient Boosting, Neural Networks, Ensemble Methods",
                  },
                  {
                    title: "Datensicherheit",
                    desc: "Verschlüsselung, lokale Verarbeitung, DSGVO-konform",
                  },
                ].map((tech) => (
                  <li key={tech.title} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-qanna-gold flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-semibold text-qanna-navy">
                        {tech.title}:
                      </span>{" "}
                      <span className="text-qanna-gray-600">{tech.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "<1s", label: "Antwortzeit" },
                { value: "256-bit", label: "Verschlüsselung" },
                { value: "DSGVO", label: "Konform" },
              ].map((stat) => (
                <Card key={stat.label} variant="default" padding="lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-qanna-gold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-qanna-gray-600">{stat.label}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-qanna-navy-dark">
        <div className="container-qanna text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Überzeugen Sie sich selbst
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie eine Demo und erleben Sie, wie unsere KI-Tools Ihre
            M&A-Projekte beschleunigen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              <Link href="/kontakt">Demo vereinbaren</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-qanna-navy"
            >
              <Link href="/ki-loesungen/chat-demo">KI-Assistent testen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
