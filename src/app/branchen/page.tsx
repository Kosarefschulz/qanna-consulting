import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { Card, CardTitle, CardDescription, Button } from "@/components/ui";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

const industries = [
  {
    slug: "industrie",
    title: "Industrie & Handwerk",
    description:
      "Von Maschinenbau bis Handwerksbetrieb - wir begleiten produzierende Unternehmen bei der erfolgreichen Nachfolge.",
    icon: "factory",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    stats: "Spezialisiert",
  },
  {
    slug: "handel",
    title: "Handel & Einzelhandel",
    description:
      "Einzelhandel, Grosshandel oder E-Commerce - wir kennen die besonderen Herausforderungen der Handelsbranche.",
    icon: "shopping",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    stats: "Spezialisiert",
  },
  {
    slug: "dienstleistungen",
    title: "Dienstleistungen",
    description:
      "IT-Dienstleister, Beratungen und Engineering-Unternehmen - wir verstehen wissensintensive Unternehmen.",
    icon: "briefcase",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    stats: "Spezialisiert",
  },
  {
    slug: "gesundheitswesen",
    title: "Gesundheitswesen",
    description:
      "Arztpraxen, Pflegeeinrichtungen und Medizintechnik - regulierte Branchen erfordern spezielle Expertise.",
    icon: "medical",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
    stats: "Spezialisiert",
  },
  {
    slug: "gastronomie",
    title: "Gastronomie & Hotel",
    description:
      "Restaurants, Hotels und Catering-Unternehmen - wir kennen die Hospitality-Branche und ihre Investoren.",
    icon: "building-office",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    stats: "Spezialisiert",
  },
];

export const metadata = {
  title: "Branchen | QANNA Unternehmensnachfolge",
  description:
    "Branchenexpertise fuer Ihre Unternehmensnachfolge: Industrie, Handel, Dienstleistungen, Gesundheitswesen und Gastronomie.",
};

export default function BranchenPage() {
  return (
    <main>
      <Header />

      <Hero
        badge="BRANCHENEXPERTISE"
        title="Nachfolge in Ihrer Branche"
        subtitle="Jede Branche hat ihre Besonderheiten. Wir kennen die spezifischen Herausforderungen und finden die passenden Kaeufer."
        primaryCTA={{ text: "Erstgespraech vereinbaren", href: "/kontakt" }}
        backgroundImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Unsere Branchenschwerpunkte
            </h2>
            <p className="text-lg text-qanna-gray-500 max-w-2xl mx-auto">
              Spezialisiert auf mittelstaendische Unternehmen in verschiedenen Sektoren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Card
                key={industry.slug}
                variant="default"
                hover
                padding="none"
                className="overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-qanna-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center">
                    <Icon name={industry.icon} className="w-8 h-8 text-white" />
                    <span className="ml-2 text-xs font-semibold text-qanna-gold bg-qanna-navy/50 px-2 py-1 rounded">
                      {industry.stats}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="mb-3">{industry.title}</CardTitle>
                  <CardDescription className="mb-4">
                    {industry.description}
                  </CardDescription>
                  <Link
                    href={`/branchen/${industry.slug}`}
                    className="inline-flex items-center text-qanna-gold font-medium hover:underline"
                  >
                    Mehr erfahren
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Experience */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-6">
                Branchenuebergreifende Expertise
              </h2>
              <p className="text-lg text-qanna-gray-600 mb-6 leading-relaxed">
                Neben unseren Branchenschwerpunkten profitieren Sie von unserer
                uebergreifenden Erfahrung in der Unternehmensnachfolge. Wir kennen
                die wichtigsten Kaeufergruppen und Investoren.
              </p>
              <ul className="space-y-4">
                {[
                  "Zugang zu strategischen Investoren",
                  "Netzwerk zu Private Equity und Family Offices",
                  "Erfahrung mit Management-Buyouts",
                  "Internationale Kaeufer-Kontakte",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
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
                    <span className="text-qanna-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "Diskretion" },
                { value: "5", label: "Branchen" },
                { value: "24h", label: "Reaktionszeit" },
                { value: "KI", label: "Gestuetzte Analyse" },
              ].map((stat) => (
                <Card key={stat.label} variant="default" padding="lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-qanna-gold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-qanna-gray-600">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-qanna-navy">
        <div className="container-qanna text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ihre Branche ist nicht dabei?
          </h2>
          <p className="text-xl text-qanna-gray-300 mb-8 max-w-2xl mx-auto">
            Kein Problem. Unsere Methodik laesst sich auf viele Branchen uebertragen.
            Sprechen Sie mit uns ueber Ihre Nachfolge.
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
