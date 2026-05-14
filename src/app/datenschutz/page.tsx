import { Header, Footer } from "@/components/layout";

export const metadata = {
  title: "Datenschutzerklärung | QANNA Consulting",
  description:
    "Datenschutzerklärung von QANNA Consulting - Informationen zur Verarbeitung personenbezogener Daten.",
};

export default function DatenschutzPage() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-16 bg-qanna-navy">
        <div className="container-qanna">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-xl text-gray-300">
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-qanna max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-qanna-navy mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Allgemeine Hinweise
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Datenerfassung auf dieser Website
            </h3>
            <p className="text-qanna-gray-700 mb-4">
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
            </p>
            <p className="text-qanna-gray-700 mb-6">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>

            <p className="text-qanna-gray-700 mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong>
            </p>
            <p className="text-qanna-gray-700 mb-6">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>
            <p className="text-qanna-gray-700 mb-6">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie diese Website betreten.
            </p>

            <p className="text-qanna-gray-700 mb-4">
              <strong>Wofür nutzen wir Ihre Daten?</strong>
            </p>
            <p className="text-qanna-gray-700 mb-6">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h2 className="text-2xl font-bold text-qanna-navy mt-12 mb-4">
              2. Hosting
            </h2>
            <p className="text-qanna-gray-700 mb-6">
              Wir hosten die Inhalte unserer Website bei Vercel Inc. Anbieter
              ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>
            <p className="text-qanna-gray-700 mb-6">
              Details entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-qanna-gold hover:underline"
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </p>

            <h2 className="text-2xl font-bold text-qanna-navy mt-12 mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Datenschutz
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-qanna-gray-700 mb-6">
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p className="text-qanna-gray-700 mb-6">
              QANNA Consulting GmbH
              <br />
              Musterstraße 123
              <br />
              80333 München
              <br />
              <br />
              Telefon: +49 (0) 89 123 456 78
              <br />
              E-Mail: datenschutz@qanna-consulting.de
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Speicherdauer
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
              die Speicherung Ihrer personenbezogenen Daten haben; in einem
              solchen Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde zu. Das Beschwerderecht
              besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Recht auf Datenübertragbarkeit
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Auskunft, Löschung und Berichtigung
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich
              jederzeit an uns wenden.
            </p>

            <h2 className="text-2xl font-bold text-qanna-navy mt-12 mb-4">
              4. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Server-Log-Dateien
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-qanna-gray-700 mb-6 space-y-2">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-qanna-gray-700 mb-6">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Kontaktformular
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-qanna-gray-700 mb-6">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>

            <h2 className="text-2xl font-bold text-qanna-navy mt-12 mb-4">
              5. Plugins und Tools
            </h2>
            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Google Fonts (lokales Hosting)
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              so genannte Google Fonts, die von Google bereitgestellt werden.
              Die Google Fonts sind lokal installiert. Eine Verbindung zu
              Servern von Google findet dabei nicht statt.
            </p>

            <h2 className="text-2xl font-bold text-qanna-navy mt-12 mb-4">
              6. KI-gestützte Tools
            </h2>
            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              KI-Beratungsassistent
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Auf unserer Website bieten wir einen KI-gestützten
              Beratungsassistenten an. Wenn Sie diesen nutzen, werden Ihre
              Eingaben verarbeitet, um Ihnen passende Antworten zu liefern. Die
              Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
              (Einwilligung).
            </p>
            <p className="text-qanna-gray-700 mb-6">
              Die Daten werden nicht dauerhaft gespeichert und nicht für andere
              Zwecke verwendet. Eine Weitergabe an Dritte erfolgt nicht.
            </p>

            <h3 className="text-xl font-semibold text-qanna-navy mb-3">
              Unternehmensbewertungsrechner
            </h3>
            <p className="text-qanna-gray-700 mb-6">
              Unser Bewertungsrechner verarbeitet die von Ihnen eingegebenen
              Finanzkennzahlen, um eine indikative Unternehmensbewertung zu
              erstellen. Die Verarbeitung erfolgt lokal in Ihrem Browser. Es
              werden keine Daten an unsere Server übertragen.
            </p>

            <p className="text-qanna-gray-500 mt-12 text-sm">
              Stand: Januar 2024
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
