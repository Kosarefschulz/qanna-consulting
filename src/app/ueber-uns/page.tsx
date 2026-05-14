import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { Card, Button } from "@/components/ui";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

const values = [
  {
    icon: "target",
    title: "Ergebnisorientierung",
    description:
      "Wir messen unseren Erfolg am Erfolg Ihrer Nachfolge. Jedes Projekt hat klare Ziele und messbare Ergebnisse.",
  },
  {
    icon: "users",
    title: "Persoenliche Betreuung",
    description:
      "Ihre Nachfolge ist einzigartig. Wir begleiten Sie persoenlich durch den gesamten Prozess.",
  },
  {
    icon: "shield",
    title: "Diskretion",
    description:
      "Absolute Vertraulichkeit ist die Basis unserer Arbeit. Ihre sensiblen Informationen sind bei uns sicher.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    description:
      "Wir nutzen modernste KI-Technologien fuer praezise Bewertungen und effizientes Kaeufer-Matching.",
  },
];

const stats = [
  { value: "100%", label: "Diskretion garantiert" },
  { value: "24h", label: "Reaktionszeit" },
  { value: "KI", label: "Gestuetzte Analyse" },
  { value: "1:1", label: "Persoenliche Betreuung" },
];

export const metadata = {
  title: "Ueber uns | QANNA Unternehmensnachfolge",
  description:
    "Lernen Sie QANNA Unternehmensnachfolge kennen - Ihr Partner fuer erfolgreiche Unternehmensnachfolge und M&A-Transaktionen.",
};

export default function UeberUnsPage() {
  return (
    <main>
      <Header />

      <Hero
        badge="UEBER UNS"
        title="Ihr Lebenswerk sicher uebergeben"
        subtitle="Wir begleiten Unternehmer bei einer der wichtigsten Entscheidungen ihres Lebens. Mit Expertise, Diskretion und modernster Technologie."
        primaryCTA={{ text: "Team kennenlernen", href: "/ueber-uns/team" }}
        secondaryCTA={{ text: "Kontakt aufnehmen", href: "/kontakt" }}
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
                UNSERE MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-6">
                Ihr Lebenswerk sicher uebergeben
              </h2>
              <p className="text-lg text-qanna-gray-600 mb-6 leading-relaxed">
                Wir glauben, dass jedes erfolgreiche Unternehmen eine
                erfolgreiche Zukunft verdient - unabhaengig davon, ob der
                Gruender in den Ruhestand geht, das Unternehmen an die naechste
                Generation uebergibt oder einen strategischen Kaeufer sucht.
              </p>
              <p className="text-lg text-qanna-gray-600 mb-6 leading-relaxed">
                Unsere Mission ist es, diese Uebergaenge so zu gestalten, dass
                alle Beteiligten - Verkaeufer, Kaeufer, Mitarbeiter und
                Geschaeftspartner - von einer klaren, fairen und nachhaltigen
                Loesung profitieren.
              </p>
              <Button variant="primary">
                <Link href="/leistungen">Unsere Leistungen</Link>
              </Button>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Team bei der Arbeit"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-qanna-navy text-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-qanna-gold text-3xl font-bold mb-2">
                  &ldquo;
                </p>
                <p className="text-sm italic">
                  Jede Nachfolge ist einzigartig. Unser Anspruch ist es, fuer
                  jede Situation die optimale Loesung zu finden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-qanna-navy">
        <div className="container-qanna">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-qanna-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Values Preview */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
              UNSERE WERTE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Was uns antreibt
            </h2>
            <p className="text-lg text-qanna-gray-600 max-w-2xl mx-auto">
              Vier Grundprinzipien leiten unser Handeln - bei jeder Nachfolge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                variant="default"
                padding="lg"
                hover
                className="text-center"
              >
                <div className="w-16 h-16 bg-qanna-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} className="w-8 h-8 text-qanna-gold" />
                </div>
                <h3 className="text-xl font-semibold text-qanna-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-qanna-gray-600 text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding bg-qanna-navy">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
              UNSER TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Erfahrung trifft Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Unser Team vereint M&A-Erfahrung mit modernster KI-Expertise.
            </p>
          </div>

          <div className="text-center">
            <Button variant="gold" size="lg">
              <Link href="/ueber-uns/team">Das Team kennenlernen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
            Lassen Sie uns ins Gespraech kommen
          </h2>
          <p className="text-xl text-qanna-gray-600 mb-8 max-w-2xl mx-auto">
            Ob Unternehmensbewertung, Kaeufersuche oder strategische Beratung -
            wir freuen uns auf Ihre Anfrage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/leistungen">Unsere Leistungen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
