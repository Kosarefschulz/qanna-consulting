"use client";

import { useState } from "react";
import { Header, Footer } from "@/components/layout";
import { Button, Card, CardTitle, CardDescription } from "@/components/ui";

const contactReasons = [
  { value: "bewertung", label: "Unternehmensbewertung" },
  { value: "nachfolgersuche", label: "Kaeufer-/Nachfolgersuche" },
  { value: "due-diligence", label: "Due Diligence Begleitung" },
  { value: "verhandlung", label: "Vertragsverhandlung" },
  { value: "integration", label: "Post-Merger Integration" },
  { value: "andere", label: "Anderes Anliegen" },
];

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-qanna-navy to-qanna-navy-dark">
        <div className="container-qanna text-center">
          <span className="inline-block px-4 py-1 bg-qanna-gold text-white text-xs font-semibold uppercase tracking-wider rounded mb-6">
            KONTAKT
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sprechen wir ueber Ihre Nachfolge
          </h1>
          <p className="text-xl text-qanna-gray-300 max-w-2xl mx-auto">
            Vereinbaren Sie ein unverbindliches Erstgespraech. Diskret, kostenfrei und persoenlich.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="default" padding="xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-qanna-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-qanna-green"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-qanna-navy mb-4">
                      Vielen Dank fuer Ihre Anfrage!
                    </h2>
                    <p className="text-qanna-gray-600 mb-8">
                      Wir haben Ihre Nachricht erhalten und werden uns
                      schnellstmoeglich bei Ihnen melden.
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Weitere Anfrage senden
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-qanna-navy mb-6">
                      Kontaktformular
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-qanna-gray-700 mb-2"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-qanna-gray-200 rounded-lg focus:ring-2 focus:ring-qanna-gold focus:border-transparent transition-all"
                            placeholder="Ihr vollstaendiger Name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-qanna-gray-700 mb-2"
                          >
                            Unternehmen
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-qanna-gray-200 rounded-lg focus:ring-2 focus:ring-qanna-gold focus:border-transparent transition-all"
                            placeholder="Ihr Unternehmen"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-qanna-gray-700 mb-2"
                          >
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-qanna-gray-200 rounded-lg focus:ring-2 focus:ring-qanna-gold focus:border-transparent transition-all"
                            placeholder="ihre@email.de"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-qanna-gray-700 mb-2"
                          >
                            Telefon
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-qanna-gray-200 rounded-lg focus:ring-2 focus:ring-qanna-gold focus:border-transparent transition-all"
                            placeholder="+49 123 456 789"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="reason"
                          className="block text-sm font-medium text-qanna-gray-700 mb-2"
                        >
                          Anliegen *
                        </label>
                        <select
                          id="reason"
                          name="reason"
                          required
                          value={formData.reason}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-qanna-gray-200 rounded-lg focus:ring-2 focus:ring-qanna-gold focus:border-transparent transition-all bg-white"
                        >
                          <option value="">Bitte waehlen Sie...</option>
                          {contactReasons.map((reason) => (
                            <option key={reason.value} value={reason.value}>
                              {reason.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-qanna-gray-700 mb-2"
                        >
                          Nachricht *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-qanna-gray-200 rounded-lg focus:ring-2 focus:ring-qanna-gold focus:border-transparent transition-all resize-none"
                          placeholder="Beschreiben Sie kurz Ihre Situation und Ihr Anliegen..."
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="privacy"
                          required
                          checked={formData.privacy}
                          onChange={handleChange}
                          className="mt-1 w-5 h-5 text-qanna-gold border-qanna-gray-300 rounded focus:ring-qanna-gold"
                        />
                        <label
                          htmlFor="privacy"
                          className="text-sm text-qanna-gray-600"
                        >
                          Ich habe die{" "}
                          <a
                            href="/datenschutz"
                            className="text-qanna-gold hover:underline"
                          >
                            Datenschutzerklaerung
                          </a>{" "}
                          gelesen und bin mit der Verarbeitung meiner Daten
                          einverstanden. *
                        </label>
                      </div>

                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        className="w-full md:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin h-5 w-5"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Wird gesendet...
                          </span>
                        ) : (
                          "Nachricht senden"
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card variant="navy" padding="lg">
                <CardTitle className="text-white mb-4">
                  Kontaktinformationen
                </CardTitle>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-qanna-gold mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="text-qanna-gray-300 text-sm">
                      <p className="font-medium text-white">Qanna GmbH</p>
                      <p>Suttnerstr. 10</p>
                      <p>33790 Halle/Westfalen</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-qanna-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:+49015253594902"
                      className="text-qanna-gray-300 hover:text-qanna-gold transition-colors text-sm"
                    >
                      01525 3594902
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-qanna-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:info@qanna-beratung.de"
                      className="text-qanna-gray-300 hover:text-qanna-gold transition-colors text-sm"
                    >
                      info@qanna-beratung.de
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-qanna-navy">
                  <p className="text-sm text-qanna-gray-400">Geschaeftszeiten</p>
                  <p className="text-white text-sm mt-1">
                    Mo - Fr: 9:00 - 18:00 Uhr
                  </p>
                </div>
              </Card>

              <Card variant="default" padding="lg" hover>
                <div className="text-center">
                  <div className="w-12 h-12 bg-qanna-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-qanna-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="mb-2">Termin buchen</CardTitle>
                  <CardDescription className="mb-4">
                    Buchen Sie direkt einen Termin fuer Ihr kostenloses
                    Erstgespraech.
                  </CardDescription>
                  <Button variant="outline" className="w-full" id="termin">
                    Calendly oeffnen
                  </Button>
                </div>
              </Card>

              <Card variant="gray" padding="lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-qanna-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-qanna-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-qanna-navy mb-1">
                      Vertraulichkeit garantiert
                    </h4>
                    <p className="text-sm text-qanna-gray-600">
                      Alle Anfragen werden streng vertraulich behandelt und
                      DSGVO-konform verarbeitet.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-qanna">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4">
              Haeufig gestellte Fragen
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Was kostet die Beratung?",
                answer:
                  "Das Erstgespraech ist immer kostenlos und unverbindlich. Die Kosten fuer die Begleitung haengen vom Umfang und der Komplexitaet der Transaktion ab. Wir erstellen Ihnen ein individuelles Angebot.",
              },
              {
                question: "Wie lange dauert eine Unternehmensnachfolge?",
                answer:
                  "Eine typische M&A-Transaktion dauert 6-12 Monate vom Start bis zum Closing. Die Dauer haengt von vielen Faktoren ab, wie z.B. der Komplexitaet des Unternehmens und der Kaeufersuche.",
              },
              {
                question: "Wie diskret ist der Prozess?",
                answer:
                  "Diskretion hat fuer uns hoechste Prioritaet. Wir sprechen potenzielle Kaeufer erst nach Ihrer Freigabe an und alle Informationen werden nur gegen Unterzeichnung einer Vertraulichkeitsvereinbarung weitergegeben.",
              },
              {
                question: "In welchen Regionen sind Sie taetig?",
                answer:
                  "Wir beraten Unternehmen deutschlandweit. Durch unser Netzwerk koennen wir auch bei grenzueberschreitenden Transaktionen unterstuetzen.",
              },
            ].map((faq, index) => (
              <Card key={index} variant="default" padding="lg">
                <h3 className="font-semibold text-qanna-navy mb-2">
                  {faq.question}
                </h3>
                <p className="text-qanna-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
