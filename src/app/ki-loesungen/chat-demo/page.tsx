"use client";

import { useState, useRef, useEffect } from "react";
import { Header, Footer } from "@/components/layout";
import { Card, Button } from "@/components/ui";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "Was ist mein Unternehmen wert?",
  "Wie läuft eine Unternehmensnachfolge ab?",
  "Welche Käufertypen gibt es?",
  "Wie lange dauert ein Verkaufsprozess?",
  "Was ist eine Due Diligence?",
  "Welche Unterlagen brauche ich?",
];

const sampleResponses: Record<string, string> = {
  "was ist mein unternehmen wert":
    "Der Unternehmenswert hängt von vielen Faktoren ab: Umsatz, EBIT/EBITDA, Branche, Marktposition, Wachstumspotenzial und mehr. Als Faustregel gilt: Der Wert liegt oft zwischen dem 4- bis 8-fachen des EBIT. Für eine genaue Einschätzung empfehle ich unseren **Bewertungsrechner** oder ein persönliches Gespräch mit unseren Experten.",
  "wie läuft eine unternehmensnachfolge ab":
    "Eine typische Unternehmensnachfolge durchläuft mehrere Phasen:\n\n1. **Vorbereitung** (3-6 Monate): Unternehmensbewertung, Dokumentation, Strategie\n2. **Käufersuche** (3-6 Monate): Ansprache potenzieller Käufer, NDAs, erste Gespräche\n3. **Due Diligence** (2-3 Monate): Detailprüfung durch den Käufer\n4. **Verhandlung & Abschluss** (2-3 Monate): Kaufvertrag, Closing\n\nDer gesamte Prozess dauert typischerweise 9-18 Monate.",
  "welche käufertypen gibt es":
    "Es gibt verschiedene Käufertypen mit unterschiedlichen Motivationen:\n\n• **Strategische Käufer**: Wettbewerber oder Unternehmen aus verwandten Branchen, die Synergien nutzen wollen\n• **Finanzinvestoren**: Private Equity, Family Offices – fokussiert auf Rendite\n• **Management Buy-Out (MBO)**: Das bestehende Management übernimmt\n• **Management Buy-In (MBI)**: Externe Manager kaufen das Unternehmen\n• **Familieninterne Nachfolge**: Übergabe an die nächste Generation\n\nJeder Käufertyp hat Vor- und Nachteile.",
  "wie lange dauert ein verkaufsprozess":
    "Ein professionell geführter Unternehmensverkauf dauert typischerweise **9-18 Monate**. Die Dauer hängt ab von:\n\n• Komplexität des Unternehmens\n• Qualität der Vorbereitung\n• Marktumfeld und Käuferinteresse\n• Finanzierungssituation des Käufers\n• Verhandlungsbereitschaft beider Seiten\n\nMit guter Vorbereitung kann der Prozess beschleunigt werden.",
  "was ist eine due diligence":
    "Die **Due Diligence** ist die sorgfältige Prüfung eines Unternehmens vor dem Kauf. Sie umfasst:\n\n• **Financial DD**: Prüfung von Finanzen, Buchhaltung, Steuern\n• **Legal DD**: Verträge, Rechtsrisiken, Compliance\n• **Commercial DD**: Markt, Kunden, Wettbewerb\n• **Technical DD**: Produkte, IT-Systeme, Patente\n• **HR DD**: Mitarbeiter, Verträge, Pensionsverpflichtungen\n\nWir unterstützen Sie bei der Vorbereitung und Begleitung der Due Diligence.",
  "welche unterlagen brauche ich":
    "Für einen Unternehmensverkauf benötigen Sie typischerweise:\n\n**Finanziell:**\n• Jahresabschlüsse der letzten 3-5 Jahre\n• BWA und Summen-Salden-Listen\n• Planungsrechnungen\n\n**Rechtlich:**\n• Gesellschaftsvertrag\n• Wichtige Verträge (Kunden, Lieferanten, Mitarbeiter)\n• Grundbuchauszüge bei Immobilien\n\n**Operativ:**\n• Organigramm\n• Beschreibung der Geschäftsprozesse\n• Kundenliste (anonymisiert)\n\nWir helfen Ihnen bei der strukturierten Aufbereitung.",
};

function getResponse(question: string): string {
  const normalizedQuestion = question.toLowerCase().trim();

  for (const [key, response] of Object.entries(sampleResponses)) {
    if (normalizedQuestion.includes(key)) {
      return response;
    }
  }

  return `Vielen Dank für Ihre Frage. Das ist ein wichtiges Thema im Bereich Unternehmensnachfolge und M&A.

Für eine fundierte Antwort auf Ihre spezifische Situation empfehle ich ein **persönliches Gespräch** mit unseren Experten. Wir können dann auf Ihre individuelle Situation eingehen.

**Möchten Sie:**
• Einen kostenlosen Beratungstermin vereinbaren?
• Unseren Bewertungsrechner nutzen?
• Mehr über unsere Leistungen erfahren?

Kontaktieren Sie uns gerne unter [info@qanna-consulting.de](mailto:info@qanna-consulting.de) oder nutzen Sie unser Kontaktformular.`;
}

export default function ChatDemoPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Guten Tag! Ich bin der KI-Assistent von QANNA Consulting. Ich kann Ihnen erste Fragen zur Unternehmensnachfolge, Bewertung und M&A-Prozessen beantworten.\n\n**Wie kann ich Ihnen helfen?**",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (question?: string) => {
    const text = question || input;
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const response = getResponse(text);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-qanna-navy to-qanna-navy-dark">
        <div className="container-qanna text-center">
          <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
            KI-ASSISTENT
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ihr persönlicher Beratungsassistent
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stellen Sie Ihre Fragen zur Unternehmensnachfolge, Bewertung und
            M&A-Prozessen. Unser KI-Assistent gibt Ihnen erste Orientierung.
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna max-w-4xl">
          <Card variant="default" padding="none" className="overflow-hidden">
            {/* Chat Header */}
            <div className="bg-qanna-navy px-6 py-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-qanna-gold rounded-full flex items-center justify-center">
                <Icon name="chip" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">QANNA KI-Assistent</h3>
                <p className="text-sm text-gray-300">
                  {isTyping ? "Schreibt..." : "Online"}
                </p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-[500px] overflow-y-auto p-6 bg-white">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-qanna-navy text-white"
                        : "bg-qanna-gray-100 text-qanna-gray-800"
                    }`}
                  >
                    <div
                      className="prose prose-sm max-w-none"
                      style={{
                        color: message.role === "user" ? "white" : "inherit",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: message.content
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                          .replace(/\n/g, "<br />")
                          .replace(
                            /• /g,
                            '<span class="text-qanna-gold mr-1">•</span> '
                          ),
                      }}
                    />
                    <p
                      className={`text-xs mt-2 ${
                        message.role === "user"
                          ? "text-gray-300"
                          : "text-qanna-gray-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString("de-DE", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-qanna-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-qanna-gray-400 rounded-full animate-bounce" />
                      <span
                        className="w-2 h-2 bg-qanna-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <span
                        className="w-2 h-2 bg-qanna-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-6 py-4 bg-qanna-gray-50 border-t border-qanna-gray-200">
                <p className="text-sm text-qanna-gray-600 mb-3">
                  Häufig gestellte Fragen:
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSend(question)}
                      className="px-3 py-1.5 text-sm bg-white border border-qanna-gray-200 rounded-full hover:border-qanna-gold hover:text-qanna-gold transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="px-6 py-4 bg-white border-t border-qanna-gray-200">
              <div className="flex gap-4">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Stellen Sie Ihre Frage..."
                  className="flex-1 px-4 py-3 border border-qanna-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-qanna-gold focus:border-transparent"
                  rows={1}
                />
                <Button
                  variant="primary"
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </Button>
              </div>
              <p className="text-xs text-qanna-gray-500 mt-2">
                Dies ist eine Demo. Für verbindliche Beratung kontaktieren Sie
                uns bitte direkt.
              </p>
            </div>
          </Card>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card variant="default" padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-qanna-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="chart-bar" className="w-6 h-6 text-qanna-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-qanna-navy mb-2">
                    Bewertung berechnen
                  </h4>
                  <p className="text-sm text-qanna-gray-600 mb-3">
                    Erhalten Sie eine erste Einschätzung zum Wert Ihres
                    Unternehmens.
                  </p>
                  <Link
                    href="/ki-loesungen/bewertungsrechner"
                    className="text-qanna-gold font-medium text-sm hover:underline"
                  >
                    Zum Bewertungsrechner
                  </Link>
                </div>
              </div>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-qanna-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="calendar" className="w-6 h-6 text-qanna-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-qanna-navy mb-2">
                    Persönliches Gespräch
                  </h4>
                  <p className="text-sm text-qanna-gray-600 mb-3">
                    Für komplexe Fragen vereinbaren Sie einen Termin mit unseren
                    Experten.
                  </p>
                  <Link
                    href="/kontakt"
                    className="text-qanna-gold font-medium text-sm hover:underline"
                  >
                    Termin buchen
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
