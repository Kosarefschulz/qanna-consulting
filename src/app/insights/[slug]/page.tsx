import { Header, Footer } from "@/components/layout";
import { Card, Button } from "@/components/ui";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample articles data - in production this would come from CMS
const articles: Record<
  string,
  {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: { name: string; role: string; image: string };
    date: string;
    readTime: string;
    image: string;
  }
> = {
  "ki-due-diligence-revolution": {
    title: "Wie KI die Due Diligence revolutioniert",
    excerpt:
      "Künstliche Intelligenz verändert die Art und Weise, wie Unternehmen analysiert und bewertet werden.",
    content: `
      <p>Die Due Diligence ist ein kritischer Bestandteil jeder M&A-Transaktion. Traditionell erfordert dieser Prozess die manuelle Durchsicht tausender Dokumente – ein zeitaufwändiger und fehleranfälliger Vorgang. Mit dem Einzug der künstlichen Intelligenz ändert sich das grundlegend.</p>

      <h2>Die Herausforderungen der traditionellen Due Diligence</h2>
      <p>In der Vergangenheit bedeutete Due Diligence oft wochenlange Arbeit für große Teams von Analysten und Beratern. Dabei wurden folgende Probleme regelmäßig beobachtet:</p>
      <ul>
        <li>Hoher Zeitaufwand für die Dokumentenprüfung</li>
        <li>Risiko, kritische Informationen zu übersehen</li>
        <li>Inkonsistente Qualität der Analyse</li>
        <li>Hohe Kosten für externe Berater</li>
      </ul>

      <h2>KI als Game-Changer</h2>
      <p>Moderne KI-Systeme können diese Herausforderungen adressieren. Natural Language Processing (NLP) ermöglicht es, Verträge, Finanzberichte und andere Dokumente automatisch zu analysieren und relevante Informationen zu extrahieren.</p>

      <h3>Konkrete Anwendungsfälle</h3>
      <p>In unserer Beratungspraxis setzen wir KI-gestützte Tools für folgende Aufgaben ein:</p>
      <ul>
        <li><strong>Vertragsanalyse:</strong> Automatische Identifikation von Klauseln, Change-of-Control-Bestimmungen und Risiken</li>
        <li><strong>Finanzdatenextraktion:</strong> Strukturierung unstrukturierter Finanzdaten aus verschiedenen Quellen</li>
        <li><strong>Compliance-Prüfung:</strong> Automatische Überprüfung auf regulatorische Anforderungen</li>
        <li><strong>Anomalieerkennung:</strong> Identifikation ungewöhnlicher Muster in Finanzdaten</li>
      </ul>

      <h2>Ergebnisse aus der Praxis</h2>
      <p>Die Implementierung von KI-Tools in unsere Due-Diligence-Prozesse hat zu messbaren Verbesserungen geführt:</p>
      <ul>
        <li>60% Reduktion der Analysezeit</li>
        <li>Erhöhte Konsistenz der Ergebnisse</li>
        <li>Frühere Identifikation von Deal-Breakern</li>
        <li>Mehr Zeit für strategische Analyse</li>
      </ul>

      <h2>Der menschliche Faktor bleibt entscheidend</h2>
      <p>Trotz aller technologischen Fortschritte bleibt die menschliche Expertise unverzichtbar. KI-Systeme sind Werkzeuge, die Berater unterstützen – sie ersetzen sie nicht. Die Interpretation der Ergebnisse, die strategische Bewertung und die finale Entscheidung erfordern weiterhin menschliches Urteilsvermögen und Erfahrung.</p>

      <h2>Fazit</h2>
      <p>Die Integration von KI in die Due Diligence ist kein Trend, sondern eine Notwendigkeit. Unternehmen, die diese Technologie nicht nutzen, riskieren, gegenüber ihren Wettbewerbern zurückzufallen. Bei QANNA Consulting unterstützen wir Sie dabei, diese neuen Möglichkeiten optimal zu nutzen.</p>
    `,
    category: "KI & Innovation",
    author: {
      name: "Dr. Thomas Müller",
      role: "Gründer & Managing Partner",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    },
    date: "15. Januar 2024",
    readTime: "8 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  "nachfolgeplanung-steueroptimierung": {
    title: "Nachfolgeplanung: Steueroptimierte Übergabestrategien",
    excerpt:
      "Die steuerliche Gestaltung der Unternehmensnachfolge bietet erhebliches Optimierungspotenzial.",
    content: `
      <p>Die Übertragung eines Unternehmens an die nächste Generation oder an externe Käufer hat weitreichende steuerliche Konsequenzen. Eine vorausschauende Planung kann erhebliche Steuervorteile bringen.</p>

      <h2>Schenkungsteuer und Erbschaftsteuer</h2>
      <p>Bei der unentgeltlichen Übertragung von Unternehmensvermögen spielen Schenkung- und Erbschaftsteuer eine zentrale Rolle. Das deutsche Steuerrecht bietet jedoch verschiedene Begünstigungen:</p>
      <ul>
        <li>Regelverschonung (85% Steuerbefreiung)</li>
        <li>Optionsverschonung (100% Steuerbefreiung)</li>
        <li>Abschmelzmodell bei großem Vermögen</li>
      </ul>

      <h2>Gestaltungsmöglichkeiten</h2>
      <p>Je nach Situation kommen verschiedene Strategien in Betracht:</p>
      <ul>
        <li><strong>Schenkungen zu Lebzeiten:</strong> Nutzung der Freibeträge alle 10 Jahre</li>
        <li><strong>Nießbrauch:</strong> Übertragung bei Vorbehalt der Erträge</li>
        <li><strong>Familienholding:</strong> Bündelung von Vermögen in einer Gesellschaft</li>
        <li><strong>Stiftungslösungen:</strong> Vermögenserhalt über Generationen</li>
      </ul>

      <h2>Der richtige Zeitpunkt</h2>
      <p>Steueroptimierte Nachfolgeplanung erfordert Zeit. Idealerweise beginnt der Prozess 5-10 Jahre vor der geplanten Übergabe. Nur so können alle Gestaltungsmöglichkeiten optimal genutzt werden.</p>

      <h2>Fazit</h2>
      <p>Die steuerliche Optimierung der Unternehmensnachfolge ist komplex und erfordert die Zusammenarbeit von Steuerberatern, Rechtsanwälten und M&A-Beratern. Bei QANNA Consulting koordinieren wir alle Beteiligten für ein optimales Ergebnis.</p>
    `,
    category: "Unternehmensnachfolge",
    author: {
      name: "Sarah Weber",
      role: "Partner & Head of Restructuring",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    date: "10. Januar 2024",
    readTime: "6 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },
};

const relatedArticles = [
  {
    slug: "ma-markt-2024",
    title: "M&A-Markt 2024: Trends und Prognosen",
    category: "M&A",
    date: "5. Januar 2024",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "restrukturierung-krisenzeiten",
    title: "Restrukturierung in Krisenzeiten: Ein Leitfaden",
    category: "Restrukturierung",
    date: "20. Dezember 2023",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "ki-finanzanalyse",
    title: "KI in der Finanzanalyse: Chancen und Grenzen",
    category: "KI & Innovation",
    date: "5. Dezember 2023",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
  },
];

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  if (!article) {
    return {
      title: "Artikel nicht gefunden | QANNA Consulting",
    };
  }
  return {
    title: `${article.title} | QANNA Consulting Insights`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-qanna-navy">
        <div className="container-qanna max-w-4xl">
          <Link
            href="/insights"
            className="inline-flex items-center text-gray-300 hover:text-qanna-gold transition-colors mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Zurück zu Insights
          </Link>
          <span className="inline-block px-3 py-1 bg-qanna-gold text-white text-sm font-medium rounded-full mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {article.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">{article.excerpt}</p>
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.author.image}
              alt={article.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-white font-medium">{article.author.name}</p>
              <p className="text-gray-400 text-sm">
                {article.date} • {article.readTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="container-qanna max-w-4xl">
          <div className="-mt-8 mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="container-qanna max-w-4xl">
          <div
            className="prose prose-lg max-w-none prose-headings:text-qanna-navy prose-headings:font-bold prose-p:text-qanna-gray-700 prose-li:text-qanna-gray-700 prose-strong:text-qanna-navy prose-a:text-qanna-gold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Author Box */}
      <section className="py-12 bg-qanna-gray-50">
        <div className="container-qanna max-w-4xl">
          <Card variant="default" padding="lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.author.image}
                alt={article.author.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-qanna-navy mb-1">
                  {article.author.name}
                </h3>
                <p className="text-qanna-gold mb-3">{article.author.role}</p>
                <p className="text-qanna-gray-600">
                  Experte für M&A-Beratung und Unternehmensnachfolge mit über 20
                  Jahren Erfahrung in der Branche.
                </p>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    <Link href="/ueber-uns/team">Mehr über den Autor</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <h2 className="text-2xl md:text-3xl font-bold text-qanna-navy mb-8 text-center">
            Weitere Artikel, die Sie interessieren könnten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((related) => (
              <Link key={related.slug} href={`/insights/${related.slug}`}>
                <Card
                  variant="default"
                  padding="none"
                  hover
                  className="overflow-hidden h-full group"
                >
                  <div className="relative h-40 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-qanna-navy/80 text-white text-xs font-medium rounded-full">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-qanna-navy line-clamp-2 mb-2">
                      {related.title}
                    </h3>
                    <p className="text-xs text-qanna-gray-500">{related.date}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-qanna-navy">
        <div className="container-qanna text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Haben Sie Fragen zu diesem Thema?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Unsere Experten stehen Ihnen für ein unverbindliches Gespräch zur
            Verfügung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-qanna-navy"
            >
              <Link href="/insights">Weitere Artikel</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
