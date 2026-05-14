import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { Button } from "@/components/ui";
import Link from "next/link";
import { notFound } from "next/navigation";

const industriesData: Record<string, {
  title: string;
  badge: string;
  subtitle: string;
  heroImage: string;
  description: string;
  challenges: string[];
  solutions: string[];
  caseStudies: { title: string; result: string }[];
}> = {
  industrie: {
    title: "Industrie & Handwerk",
    badge: "BRANCHENFOKUS",
    subtitle:
      "Von Maschinenbau bis Handwerksbetrieb - wir begleiten produzierende Unternehmen bei der erfolgreichen Nachfolge.",
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80",
    description:
      "Die produzierende Industrie und das Handwerk stehen vor besonderen Nachfolgeherausforderungen: Oft sind Unternehmen und Inhaber eng miteinander verwoben, die Uebergabe von Know-how und Kundenbeziehungen erfordert Zeit und Fingerspitzengefuehl. Wir kennen diese Herausforderungen und finden die richtigen Kaeufer.",
    challenges: [
      "Generationswechsel in Familienunternehmen",
      "Know-how-Transfer an den Nachfolger",
      "Mitarbeiter- und Kundenbindung",
      "Angemessene Unternehmensbewertung",
      "Diskretion waehrend des Prozesses",
    ],
    solutions: [
      "Strukturierte Nachfolgeplanung",
      "Professionelle Unternehmensbewertung",
      "Kaeufersuche im relevanten Netzwerk",
      "Due Diligence Begleitung",
      "Post-Merger Integration",
    ],
    caseStudies: [
      { title: "Maschinenbauunternehmen", result: "Erfolgreicher Verkauf an strategischen Investor" },
      { title: "Handwerksbetrieb Metallbau", result: "Management-Buyout mit Mitarbeitern" },
    ],
  },
  handel: {
    title: "Handel & Einzelhandel",
    badge: "BRANCHENFOKUS",
    subtitle:
      "Einzelhandel, Grosshandel oder E-Commerce - wir kennen die besonderen Herausforderungen der Handelsbranche.",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80",
    description:
      "Der Handel befindet sich im Wandel, doch gerade fuer etablierte Unternehmen mit stabilen Kundenbeziehungen und guten Standorten gibt es interessierte Kaeufer. Wir kennen die relevanten Investoren und finden die passende Nachfolgeoption.",
    challenges: [
      "Bewertung von Standorten und Mietvertraegen",
      "Digitalisierungsdruck",
      "Nachfolge im Familienunternehmen",
      "Warenbestandsbewertung",
      "Mitarbeiterbindung",
    ],
    solutions: [
      "Handelsspezifische Bewertung",
      "Kaeufersuche bei Filialisten und Investoren",
      "Due Diligence mit Fokus auf Standorte",
      "Vertragsverhandlung inkl. Mietuebernahme",
      "Reibungslose Uebergabe",
    ],
    caseStudies: [
      { title: "Textileinzelhaendler (15 Filialen)", result: "Erfolgreicher Verkauf an Filialkette" },
      { title: "Grosshaendler Sanitaer", result: "Familieninterne Nachfolge umgesetzt" },
    ],
  },
  dienstleistungen: {
    title: "Dienstleistungen",
    badge: "BRANCHENFOKUS",
    subtitle:
      "IT-Dienstleister, Beratungen und Engineering-Unternehmen - wir verstehen wissensintensive Unternehmen.",
    heroImage:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80",
    description:
      "Dienstleistungsunternehmen leben von ihrem Know-how, ihren Mitarbeitern und Kundenbeziehungen. Bei der Nachfolge steht daher die Sicherung dieser Werte im Vordergrund. Wir finden Kaeufer, die diese Werte zu schaetzen wissen.",
    challenges: [
      "Mitarbeiter- und Mandatenbindung",
      "Know-how-Transfer sicherstellen",
      "Bewertung von Kundenbeziehungen",
      "Inhaberabhaengigkeit reduzieren",
      "Kulturelle Passung des Kaeufers",
    ],
    solutions: [
      "Dienstleistungsspezifische Bewertung",
      "Kaeufersuche mit Fokus auf Kulturfit",
      "Strukturierte Uebergabephase",
      "Mitarbeiterintegration begleiten",
      "Earnout-Strukturen gestalten",
    ],
    caseStudies: [
      { title: "IT-Dienstleister (50 Mitarbeiter)", result: "Verkauf an groesseren Wettbewerber" },
      { title: "Engineering-Buero", result: "Management-Buyout erfolgreich umgesetzt" },
    ],
  },
  gesundheitswesen: {
    title: "Gesundheitswesen",
    badge: "BRANCHENFOKUS",
    subtitle:
      "Arztpraxen, Pflegeeinrichtungen und Medizintechnik - regulierte Branchen erfordern spezielle Expertise.",
    heroImage:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2000&q=80",
    description:
      "Das Gesundheitswesen unterliegt besonderen regulatorischen Anforderungen. Praxisverkauf, MVZ-Strukturen und Pflegeheim-Transaktionen erfordern spezielles Know-how. Wir kennen die Spielregeln und die passenden Kaeufergruppen.",
    challenges: [
      "Regulatorische Anforderungen beachten",
      "Zulassungen uebertragen",
      "Patientenkontinuitaet sichern",
      "Mitarbeiter im Gesundheitswesen halten",
      "MVZ-Strukturen verstehen",
    ],
    solutions: [
      "Branchenspezifische Bewertung",
      "Kaeufersuche bei MVZ-Betreibern und Investoren",
      "Regulatorische Due Diligence",
      "Begleitung bei Zulassungsuebertragung",
      "Strukturierte Patientenuebergabe",
    ],
    caseStudies: [
      { title: "Zahnarztpraxis (3 Behandler)", result: "Integration in regionales MVZ" },
      { title: "Pflegeeinrichtung (80 Plaetze)", result: "Verkauf an Betreiberkette" },
    ],
  },
  gastronomie: {
    title: "Gastronomie & Hotel",
    badge: "BRANCHENFOKUS",
    subtitle:
      "Restaurants, Hotels und Catering-Unternehmen - wir kennen die Hospitality-Branche und ihre Investoren.",
    heroImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80",
    description:
      "Die Hospitality-Branche ist gepraegt von Standort, Konzept und Inhaber. Bei der Nachfolge muessen diese Faktoren sorgfaeltig bewertet und an den richtigen Kaeufer uebergeben werden. Wir kennen die Branche und ihre besonderen Anforderungen.",
    challenges: [
      "Standort- und Pachtbewertung",
      "Konzept- und Markenuebergabe",
      "Saisonalitaet beruecksichtigen",
      "Mitarbeiter in der Gastronomie halten",
      "Lieferantenbeziehungen uebertragen",
    ],
    solutions: [
      "Branchenspezifische Bewertung",
      "Kaeufersuche bei Betreibern und Investoren",
      "Pachtuebernahme verhandeln",
      "Konzeptdokumentation erstellen",
      "Mitarbeiter-Retention planen",
    ],
    caseStudies: [
      { title: "Restaurant (gehobene Kueche)", result: "Verkauf an jungen Nachfolger-Koch" },
      { title: "Hotel (60 Zimmer)", result: "Verkauf an Hotelkette" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    return { title: "Branche nicht gefunden | QANNA Unternehmensnachfolge" };
  }

  return {
    title: `${industry.title} | QANNA Unternehmensnachfolge`,
    description: industry.subtitle,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  return (
    <main>
      <Header />

      <Hero
        badge={industry.badge}
        title={industry.title}
        subtitle={industry.subtitle}
        primaryCTA={{ text: "Erstgespraech vereinbaren", href: "/kontakt" }}
        secondaryCTA={{ text: "Alle Branchen", href: "/branchen" }}
        backgroundImage={industry.heroImage}
      />

      {/* Description */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-qanna-gray-600 leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-qanna-navy mb-6">
                Typische Herausforderungen
              </h2>
              <ul className="space-y-4">
                {industry.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <span className="text-qanna-burgundy text-lg">-</span>
                    <span className="text-qanna-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-qanna-navy mb-6">
                Unsere Loesungen
              </h2>
              <ul className="space-y-4">
                {industry.solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-3">
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
                    <span className="text-qanna-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="section-padding bg-qanna-navy">
        <div className="container-qanna text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sie sind in der Branche {industry.title} taetig?
          </h2>
          <p className="text-xl text-qanna-gray-300 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns ueber Ihre Nachfolge sprechen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              <Link href="/kontakt">Erstgespraech vereinbaren</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-qanna-navy">
              <Link href="/branchen">Alle Branchen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
