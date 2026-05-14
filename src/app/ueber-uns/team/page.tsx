import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { Card, Button } from "@/components/ui";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

const leadership = [
  {
    name: "Sergej Schulz",
    role: "Prozess- und KI-Experte",
    image: "/team/sergej-schulz.jpg",
    bio: "Experte fuer Prozessoptimierung und KI-gestuetzte Loesungen. Entwickelt innovative Ansaetze fuer effiziente Nachfolgeberatung.",
    expertise: ["Prozessoptimierung", "KI-Integration", "Digitalisierung"],
    linkedin: "#",
  },
  {
    name: "Andreas Sudermann",
    role: "Finanz- und Nachfolge-Experte",
    image: "/team/andreas-sudermann.jpg",
    bio: "Spezialist fuer Finanzierungsberatung und Unternehmensnachfolge. Begleitet Mandanten diskret und kompetent durch den M&A-Prozess.",
    expertise: ["Finanzierungsberatung", "Nachfolgeplanung", "M&A Advisory"],
    linkedin: "#",
  },
];

const culture = [
  {
    icon: "shield",
    title: "Absolute Diskretion",
    description:
      "Vertraulichkeit ist die Basis unserer Arbeit. Ihre sensiblen Informationen sind bei uns sicher.",
  },
  {
    icon: "users",
    title: "Persoenliche Betreuung",
    description:
      "Jede Nachfolge ist einzigartig. Wir begleiten Sie persoenlich durch den gesamten Prozess.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    description:
      "Wir nutzen modernste KI-Technologien fuer praezise Bewertungen und effizientes Matching.",
  },
  {
    icon: "target",
    title: "Ergebnisorientierung",
    description:
      "Wir messen unseren Erfolg am Erfolg Ihrer Nachfolge. Klare Ziele, messbare Ergebnisse.",
  },
];

export const metadata = {
  title: "Unser Team | QANNA Unternehmensnachfolge",
  description:
    "Lernen Sie das Team von QANNA Unternehmensnachfolge kennen - erfahrene M&A-Berater fuer Ihre erfolgreiche Nachfolge.",
};

export default function TeamPage() {
  return (
    <main>
      <Header />

      <Hero
        badge="UNSER TEAM"
        title="Ihre Ansprechpartner"
        subtitle="Erfahrene M&A-Berater mit persoenlichem Engagement fuer Ihre erfolgreiche Nachfolge."
        primaryCTA={{ text: "Kontakt aufnehmen", href: "/kontakt" }}
        secondaryCTA={{ text: "Unsere Leistungen", href: "/leistungen" }}
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
              LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Unsere Partner
            </h2>
            <p className="text-lg text-qanna-gray-600 max-w-2xl mx-auto">
              Erfahrene Berater mit nachgewiesener Erfolgsbilanz in
              M&A-Transaktionen und Unternehmensnachfolge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((person) => (
              <Card
                key={person.name}
                variant="default"
                padding="none"
                hover
                className="overflow-hidden group"
              >
                <div className="relative h-80 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-qanna-navy via-qanna-navy/50 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {person.name}
                    </h3>
                    <p className="text-qanna-gold">{person.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-qanna-gray-600 mb-4">{person.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {person.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-qanna-gray-100 text-qanna-gray-700 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={person.linkedin}
                    className="inline-flex items-center text-qanna-navy hover:text-qanna-gold transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn Profil
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Culture Section */}
      <section className="section-padding bg-qanna-navy">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
              UNSERE WERTE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Was uns ausmacht
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Unsere Grundprinzipien fuer eine erfolgreiche Nachfolgeberatung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-qanna-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="bg-qanna-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Bereit fuer Ihre Nachfolge?
            </h2>
            <p className="text-lg text-qanna-gray-600 mb-8 max-w-2xl mx-auto">
              Vereinbaren Sie ein unverbindliches Erstgespraech und lernen Sie
              uns persoenlich kennen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/ueber-uns">Mehr ueber QANNA</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
