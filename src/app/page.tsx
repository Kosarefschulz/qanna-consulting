import React from "react";
import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import {
  Card,
  CardTitle,
  CardDescription,
  Button,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Counter,
  SlideIn,
} from "@/components/ui";
import Link from "next/link";

// SVG Icon Component
const Icon = ({ name, className = "w-8 h-8" }: { name: string; className?: string }) => {
  const icons: Record<string, React.ReactElement> = {
    building: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    currency: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    "chart-down": (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    lightning: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    factory: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    shopping: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    computer: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    medical: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    "building-office": (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    bank: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    chip: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    "chart-bar": (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    "sparkles": (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

// Problem Cards Data - Nachfolge-fokussiert
const problems = [
  {
    icon: "building",
    title: "Keine Nachfolger",
    description:
      "Kein geeigneter Nachfolger in Sicht? Wir identifizieren und qualifizieren potenzielle Kaeufer aus unserem Netzwerk.",
    href: "/leistungen/nachfolgersuche",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "currency",
    title: "Unternehmenswert unklar",
    description:
      "Was ist Ihr Unternehmen wirklich wert? Wir erstellen fundierte Bewertungen nach anerkannten Methoden.",
    href: "/leistungen/unternehmensbewertung",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "chart-down",
    title: "Uebergabe-Zeitplan",
    description:
      "Wann ist der richtige Zeitpunkt? Wir entwickeln mit Ihnen einen realistischen Zeitplan fuer die Uebergabe.",
    href: "/leistungen/vertragsverhandlung",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "lightning",
    title: "Steuerfragen",
    description:
      "Steueroptimale Gestaltung der Nachfolge? Wir strukturieren die Transaktion fuer minimale Steuerbelastung.",
    href: "/leistungen/due-diligence",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=80",
  },
];

// Services Data - Nachfolge-Services
const services = [
  {
    title: "Unternehmensbewertung",
    description:
      "Fundierte Bewertung Ihres Unternehmens nach anerkannten Methoden. Wir ermitteln den fairen Marktwert als Basis fuer erfolgreiche Verhandlungen.",
    href: "/leistungen/unternehmensbewertung",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Kaeufer- & Nachfolgersuche",
    description:
      "Systematische Identifikation geeigneter Kaeufer aus unserem Netzwerk. Diskret und zielorientiert finden wir den passenden Nachfolger.",
    href: "/leistungen/nachfolgersuche",
    image:
      "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80",
  },
];

// Industries Data - Bento Grid Style (Nachfolge-fokussiert)
const industries = [
  {
    slug: "industrie",
    title: "Industrie & Handwerk",
    subtitle: "Produktion & Fertigung",
    count: "Spezialisiert",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    slug: "handel",
    title: "Handel & Einzelhandel",
    subtitle: "Retail & E-Commerce",
    count: "Spezialisiert",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    slug: "dienstleistungen",
    title: "Dienstleistungen",
    subtitle: "Professional Services",
    count: "Spezialisiert",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    slug: "gesundheitswesen",
    title: "Gesundheitswesen",
    subtitle: "Medizin & Pflege",
    count: "Spezialisiert",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    slug: "gastronomie",
    title: "Gastronomie & Hotel",
    subtitle: "Hospitality",
    count: "Spezialisiert",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
];

// Stats Data
const stats = [
  { value: 100, suffix: "%", prefix: "", label: "Diskretion garantiert" },
  { value: 24, suffix: "h", prefix: "", label: "Reaktionszeit" },
  { value: 100, suffix: "%", prefix: "", label: "Persoenliche Betreuung" },
  { value: 1, suffix: "", prefix: "", label: "KI-gestuetzte Analyse" },
];

// Insights Data
const insights = [
  {
    slug: "unternehmensbewertung-methoden",
    title: "Unternehmensbewertung: Die wichtigsten Methoden im Ueberblick",
    category: "Bewertung",
    date: "15. Januar 2025",
    excerpt:
      "Von DCF bis Multiplikatorverfahren - welche Bewertungsmethode ist fuer Ihr Unternehmen die richtige?",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "nachfolge-steuern-2025",
    title: "Steueroptimierte Unternehmensnachfolge 2025",
    category: "Steuern",
    date: "8. Januar 2025",
    excerpt:
      "Aktuelle steuerliche Gestaltungsmoeglichkeiten bei der Unternehmensuebergabe und wie Sie davon profitieren.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "kaeufer-matching-ki",
    title: "KI-gestuetztes Kaeufer-Matching: So finden wir den idealen Nachfolger",
    category: "M&A",
    date: "3. Januar 2025",
    excerpt:
      "Wie kuenstliche Intelligenz die Suche nach dem passenden Unternehmenskaeufer revolutioniert.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
  },
];

// Team Data
const team = [
  {
    name: "Sergej Schulz",
    position: "Prozess- und KI-Experte",
    expertise: "Prozessoptimierung, KI-Loesungen",
    image: "/team/sergej-schulz.jpg",
  },
  {
    name: "Andreas Sudermann",
    position: "Finanz- und Nachfolge-Experte",
    expertise: "Finanzierung, Nachfolgeberatung",
    image: "/team/andreas-sudermann.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        badge="UNTERNEHMENSNACHFOLGE"
        title="Ihre Unternehmensnachfolge in guten Haenden"
        subtitle="Wir begleiten Sie von der ersten Bewertung ueber die Kaeufersuche bis zum erfolgreichen Abschluss. Mit Expertise, Diskretion und KI-gestuetzter Analyse."
        primaryCTA={{ text: "Erstgespraech vereinbaren", href: "/kontakt" }}
        secondaryCTA={{ text: "Leistungen entdecken", href: "/leistungen" }}
      />

      {/* Problems Section */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Herausforderungen bei der Nachfolge
            </h2>
            <p className="text-lg text-qanna-gray-600 max-w-2xl mx-auto">
              Die Unternehmensuebergabe ist eine der wichtigsten Entscheidungen Ihres Lebens.
              Wir loesen die typischen Herausforderungen.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem) => (
              <StaggerItem key={problem.title}>
                <Card variant="default" hover padding="none" className="overflow-hidden group h-full">
                  {/* Image Section */}
                  <div className="relative h-40 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={problem.image}
                      alt={problem.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="p-5">
                    <CardTitle className="mb-2 group-hover:text-qanna-gold transition-colors">{problem.title}</CardTitle>
                    <CardDescription className="mb-4 text-sm">
                      {problem.description}
                    </CardDescription>
                    <Link
                      href={problem.href}
                      className="inline-flex items-center text-qanna-gold font-medium hover:text-qanna-gold-light transition-colors text-sm"
                    >
                      Mehr erfahren
                      <svg
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-qanna-gray-600 max-w-2xl mx-auto">
              Ganzheitliche Begleitung Ihrer Unternehmensnachfolge
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 items-center`}
              >
                <div className="flex-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-qanna-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-qanna-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="primary">
                    <Link href={service.href}>Mehr erfahren</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Link href="/leistungen">Alle Leistungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* KI Teaser Section - Modern Bento Grid */}
      <section className="section-padding bg-qanna-navy overflow-hidden">
        <div className="container-qanna">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <SlideIn from="left">
              <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-6">
                INNOVATION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                KI-gestuetzte Nachfolgeberatung
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Wir nutzen modernste KI-Technologien fuer praezise Bewertungen
                und effizientes Kaeufer-Matching.
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-qanna-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-qanna-gold transition-colors">
                    <Icon name="chip" className="w-6 h-6 text-qanna-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Bewertungsrechner</h4>
                    <p className="text-gray-400 text-sm">
                      Erste Einschaetzung Ihres Unternehmenswertes in wenigen Minuten
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-qanna-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-qanna-gold transition-colors">
                    <Icon name="chart-bar" className="w-6 h-6 text-qanna-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Kaeufer-Matching</h4>
                    <p className="text-gray-400 text-sm">
                      KI-gestuetzte Identifikation passender Kaeufer aus unserem Netzwerk
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-qanna-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-qanna-gold transition-colors">
                    <Icon name="sparkles" className="w-6 h-6 text-qanna-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Due Diligence Analyse</h4>
                    <p className="text-gray-400 text-sm">
                      Automatisierte Dokumentenanalyse fuer schnellere Pruefungsprozesse
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="gold" size="lg">
                <Link href="/ki-loesungen">Unsere KI-Loesungen entdecken</Link>
              </Button>
            </SlideIn>

            {/* Right: Visual */}
            <SlideIn from="right" className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                  alt="KI-gestuetzte Nachfolgeberatung"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-qanna-navy via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-qanna-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-qanna-gold text-xl font-bold">%</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-qanna-navy">73%</p>
                    <p className="text-sm text-qanna-gray-500">Schnellere Analyse</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-qanna-gold text-white rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold">NEU 2025</span>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Industries Section - Bento Grid */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <FadeIn className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="inline-block px-4 py-2 bg-qanna-navy/10 text-qanna-navy text-sm font-semibold rounded-full mb-4">
                BRANCHENEXPERTISE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy">
                Nachfolge in Ihrer Branche
              </h2>
            </div>
            <p className="text-qanna-gray-600 max-w-md text-right">
              Spezialisiert auf mittelstaendische Unternehmen
            </p>
          </FadeIn>

          {/* Bento Grid Layout */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]" staggerDelay={0.15}>
            {industries.map((industry, index) => (
              <StaggerItem
                key={industry.slug}
                className={`
                  ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                  ${index === 2 ? 'md:col-span-2' : ''}
                `}
              >
                <Link
                  href={`/branchen/${industry.slug}`}
                  className="group relative overflow-hidden rounded-2xl block h-full"
                >
                {/* Background Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-qanna-navy via-qanna-navy/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div>
                      <h4 className="text-white font-bold text-lg md:text-xl mb-1">
                        {industry.title}
                      </h4>
                      <p className="text-gray-300 text-sm hidden md:block">
                        {industry.subtitle}
                      </p>
                    </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/0 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <svg className="w-5 h-5 text-qanna-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              <Link href="/branchen">Alle Branchen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Cards */}
      <section className="py-16 bg-gradient-to-br from-qanna-navy-dark via-qanna-navy to-qanna-navy-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-qanna-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-qanna-gold rounded-full blur-3xl" />
        </div>

        <div className="container-qanna relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  group relative p-6 md:p-8 rounded-2xl
                  bg-white/5 backdrop-blur-sm border border-white/10
                  hover:bg-white/10 hover:border-qanna-gold/30
                  transition-all duration-300
                  ${index === 0 ? 'lg:scale-105' : ''}
                `}
              >
                {/* Highlight for main stat */}
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-qanna-gold text-white text-xs font-semibold rounded-full">
                    HIGHLIGHT
                  </div>
                )}
                <div className="text-center">
                  <div className="text-3xl md:text-5xl font-bold text-qanna-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Counter
                      from={0}
                      to={stat.value}
                      duration={2.5}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </div>
                {/* Decorative line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-qanna-gold/0 group-hover:bg-qanna-gold/50 rounded-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Insights Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <FadeIn className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <span className="inline-block px-4 py-2 bg-qanna-navy/10 text-qanna-navy text-sm font-semibold rounded-full mb-4">
                INSIGHTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy">
                Aktuelle Einblicke
              </h2>
            </div>
            <Button variant="outline">
              <Link href="/insights">Alle Artikel ansehen</Link>
            </Button>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <StaggerItem key={insight.slug}>
                <Card
                  variant="default"
                  hover
                  padding="none"
                  className="overflow-hidden group h-full"
                >
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-qanna-gold text-white text-xs font-semibold rounded-full">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-qanna-gray-500 mb-2">{insight.date}</p>
                  <CardTitle className="mb-3 group-hover:text-qanna-gold transition-colors">
                    {insight.title}
                  </CardTitle>
                  <CardDescription>{insight.excerpt}</CardDescription>
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="inline-flex items-center text-qanna-gold font-medium hover:text-qanna-gold-light transition-colors mt-4"
                  >
                    Weiterlesen
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna">
          <FadeIn className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
              UNSER TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Ihre Ansprechpartner
            </h2>
            <p className="text-lg text-qanna-gray-600 max-w-2xl mx-auto">
              Erfahrene M&A-Berater mit persoenlichem Engagement fuer Ihre erfolgreiche Nachfolge
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member) => (
              <StaggerItem key={member.name} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-qanna-navy/90 via-qanna-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm opacity-90">{member.expertise}</p>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-qanna-navy">
                  {member.name}
                </h4>
                <p className="text-qanna-gray-600">{member.position}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="text-center mt-12">
            <Button variant="primary" size="lg">
              <Link href="/ueber-uns/team">Das gesamte Team kennenlernen</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-qanna-navy">
        <div className="container-qanna text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bereit fuer Ihre Nachfolge?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns ueber Ihre Unternehmensuebergabe sprechen. Das Erstgespraech
              ist unverbindlich, kostenfrei und streng vertraulich.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-qanna-gold hover:border-qanna-gold"
            >
              <Link href="/ki-loesungen/bewertungsrechner">Unternehmenswert berechnen</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
