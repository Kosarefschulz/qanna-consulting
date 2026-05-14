import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { Card, Button } from "@/components/ui";
import Link from "next/link";

const categories = [
  { name: "Alle", slug: "all", count: 8 },
  { name: "Nachfolge", slug: "nachfolge", count: 3 },
  { name: "M&A", slug: "ma", count: 2 },
  { name: "Bewertung", slug: "bewertung", count: 2 },
  { name: "Steuern", slug: "steuern", count: 1 },
];

const featuredArticle = {
  slug: "ki-unternehmensbewertung",
  title: "Wie KI die Unternehmensbewertung revolutioniert",
  excerpt:
    "Kuenstliche Intelligenz veraendert die Art und Weise, wie Unternehmen bewertet werden. Erfahren Sie, welche Moeglichkeiten sich dadurch eroeffnen und wie Sie davon profitieren koennen.",
  category: "Bewertung",
  author: "QANNA Team",
  date: "15. Januar 2025",
  readTime: "8 Min. Lesezeit",
  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
};

const articles = [
  {
    slug: "nachfolgeplanung-steueroptimierung",
    title: "Steueroptimierte Unternehmensnachfolge",
    excerpt:
      "Die steuerliche Gestaltung der Unternehmensnachfolge bietet erhebliches Optimierungspotenzial. Ein Ueberblick ueber die wichtigsten Strategien.",
    category: "Steuern",
    author: "QANNA Team",
    date: "10. Januar 2025",
    readTime: "6 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "ma-markt-2025",
    title: "M&A-Markt 2025: Trends und Prognosen",
    excerpt:
      "Das neue Jahr bringt neue Chancen im M&A-Markt. Wir analysieren die wichtigsten Trends und geben Prognosen fuer die Entwicklung.",
    category: "M&A",
    author: "QANNA Team",
    date: "5. Januar 2025",
    readTime: "5 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "kaeufersuche-strategie",
    title: "Kaeufersuche: So finden Sie den idealen Nachfolger",
    excerpt:
      "Die systematische Suche nach dem richtigen Kaeufer ist entscheidend fuer den Erfolg der Transaktion. Tipps fuer eine erfolgreiche Strategie.",
    category: "Nachfolge",
    author: "QANNA Team",
    date: "20. Dezember 2024",
    readTime: "7 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "unternehmensbewertung-methoden",
    title: "Die wichtigsten Methoden der Unternehmensbewertung",
    excerpt:
      "Von DCF bis Multiplikatorverfahren: Ein umfassender Ueberblick ueber die gaengigsten Bewertungsmethoden und ihre Anwendungsbereiche.",
    category: "Bewertung",
    author: "QANNA Team",
    date: "15. Dezember 2024",
    readTime: "10 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "familienunternehmen-nachfolge",
    title: "Familienunternehmen: Die emotionale Seite der Nachfolge",
    excerpt:
      "Wenn das Unternehmen zur Familie gehoert, ist die Nachfolge mehr als eine geschaeftliche Transaktion. Tipps fuer einen erfolgreichen Generationenwechsel.",
    category: "Nachfolge",
    author: "QANNA Team",
    date: "10. Dezember 2024",
    readTime: "6 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "due-diligence-vorbereitung",
    title: "Due Diligence: So bereiten Sie Ihr Unternehmen vor",
    excerpt:
      "Eine gute Vorbereitung auf die Due Diligence beschleunigt den Verkaufsprozess und vermeidet boese Ueberraschungen.",
    category: "M&A",
    author: "QANNA Team",
    date: "5. Dezember 2024",
    readTime: "8 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
];

const newsletter = {
  title: "Bleiben Sie informiert",
  description:
    "Erhalten Sie monatlich die wichtigsten Insights zu M&A und Unternehmensnachfolge direkt in Ihr Postfach.",
};

export const metadata = {
  title: "Insights | QANNA Unternehmensnachfolge",
  description:
    "Aktuelle Artikel und Analysen zu Unternehmensnachfolge, M&A, Bewertung und Steuern von QANNA Unternehmensnachfolge.",
};

export default function InsightsPage() {
  return (
    <main>
      <Header />

      <Hero
        badge="INSIGHTS"
        title="Wissen fuer Ihre Nachfolge"
        subtitle="Aktuelle Analysen, Trends und Expertenwissen zu Unternehmensnachfolge, M&A und Unternehmensbewertung."
        primaryCTA={{ text: "Newsletter abonnieren", href: "#newsletter" }}
        secondaryCTA={{ text: "Kontakt aufnehmen", href: "/kontakt" }}
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-qanna-gray-200 sticky top-20 z-40">
        <div className="container-qanna">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.slug === "all"
                    ? "bg-qanna-navy text-white"
                    : "bg-qanna-gray-100 text-qanna-gray-700 hover:bg-qanna-gold hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full">
              FEATURED
            </span>
          </div>
          <Link href={`/insights/${featuredArticle.slug}`}>
            <Card
              variant="default"
              padding="none"
              hover
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-qanna-gold text-white text-sm font-medium rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl lg:text-3xl font-bold text-qanna-navy mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-qanna-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-qanna-gray-500">
                    <span>{featuredArticle.author}</span>
                    <span className="mx-2">-</span>
                    <span>{featuredArticle.date}</span>
                    <span className="mx-2">-</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Aktuelle Artikel
            </h2>
            <p className="text-lg text-qanna-gray-600">
              Die neuesten Analysen und Insights unserer Experten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`}>
                <Card
                  variant="default"
                  padding="none"
                  hover
                  className="overflow-hidden h-full group"
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-qanna-navy/80 text-white text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-qanna-navy mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-qanna-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-qanna-gray-500">
                      <span>{article.author}</span>
                      <span className="mx-2">-</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Weitere Artikel laden
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section-padding bg-qanna-navy">
        <div className="container-qanna">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
              NEWSLETTER
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {newsletter.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-qanna-gold"
              />
              <Button variant="gold" type="submit">
                Abonnieren
              </Button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              Mit der Anmeldung akzeptieren Sie unsere{" "}
              <Link href="/datenschutz" className="text-qanna-gold hover:underline">
                Datenschutzerklaerung
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-qanna text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
            Haben Sie Fragen?
          </h2>
          <p className="text-xl text-qanna-gray-600 mb-8 max-w-2xl mx-auto">
            Unsere Experten stehen Ihnen fuer ein unverbindliches Gespraech zur
            Verfuegung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/ki-loesungen/bewertungsrechner">Unternehmenswert berechnen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
