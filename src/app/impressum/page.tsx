import { Header, Footer } from "@/components/layout";

export const metadata = {
  title: "Impressum | QANNA Consulting",
  description: "Impressum und rechtliche Informationen von QANNA Consulting.",
};

export default function ImpressumPage() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-16 bg-qanna-navy">
        <div className="container-qanna">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Impressum
          </h1>
          <p className="text-xl text-gray-300">
            Angaben gemäß § 5 TMG
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-qanna max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-qanna-navy mb-4">
              Anbieter und Verantwortlicher
            </h2>
            <p className="text-qanna-gray-700 mb-6">
              Qanna GmbH
              <br />
              Suttnerstraße 10
              <br />
              33790 Halle/Westfalen
              <br />
              Deutschland
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Kontakt
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Telefon: 015253594902
              <br />
              E-Mail: info@qanna-beratung.de
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Vertretungsberechtigte Geschäftsführer
            </h3>
            <p className="text-qanna-gray-700 mb-6">Sergej Schulz, Andreas Sudermann</p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Registereintrag
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Eintragung im Handelsregister
              <br />
              Registergericht: Amtsgericht Gütersloh
              <br />
              Registernummer: HRB 13500
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Umsatzsteuer-ID
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE366906427
            </p>

            <h2 className="text-2xl font-bold text-qanna-navy mt-12 mb-4">
              Verantwortlicher für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-qanna-gray-700 mb-6">
              Sergej Schulz
              <br />
              Qanna GmbH
              <br />
              Suttnerstraße 10
              <br />
              33790 Halle/Westfalen
            </p>

            <h2 className="text-2xl font-bold text-qanna-navy mt-12 mb-4">
              Streitschlichtung
            </h2>
            <p className="text-qanna-gray-700 mb-6">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-qanna-gold hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <br />
              <br />
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <h2 className="text-2xl font-bold text-qanna-navy mt-12 mb-4">
              Haftung für Inhalte
            </h2>
            <p className="text-qanna-gray-700 mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-qanna-gray-700 mb-6">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>

            <h2 className="text-2xl font-bold text-qanna-navy mt-12 mb-4">
              Haftung für Links
            </h2>
            <p className="text-qanna-gray-700 mb-6">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p className="text-qanna-gray-700 mb-6">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>

            <h2 className="text-2xl font-bold text-qanna-navy mt-12 mb-4">
              Urheberrecht
            </h2>
            <p className="text-qanna-gray-700 mb-6">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-qanna-gray-700 mb-6">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>

            <h2 className="text-2xl font-bold text-qanna-navy mt-12 mb-4">
              Berufsrechtliche Angaben
            </h2>
            <p className="text-qanna-gray-700 mb-6">
              Berufsbezeichnung: Unternehmensberater (verliehen in der
              Bundesrepublik Deutschland)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
