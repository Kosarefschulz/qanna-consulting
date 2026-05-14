"use client";

import { useState } from "react";
import { Header, Footer } from "@/components/layout";
import { Card, Button } from "@/components/ui";
import Link from "next/link";

interface ValuationResult {
  minValue: number;
  maxValue: number;
  avgValue: number;
  multiple: { min: number; max: number };
  method: string;
}

const industries = [
  { value: "industrie", label: "Industrie & Handwerk", multiple: [4.5, 7] },
  { value: "handel", label: "Handel & Einzelhandel", multiple: [3.5, 5.5] },
  { value: "dienstleistungen", label: "Dienstleistungen", multiple: [4, 7] },
  { value: "gesundheitswesen", label: "Gesundheitswesen", multiple: [5, 8] },
  { value: "gastronomie", label: "Gastronomie & Hotel", multiple: [3, 5] },
  { value: "technologie", label: "Technologie & Software", multiple: [6, 12] },
  { value: "bau", label: "Immobilien & Bau", multiple: [4, 6.5] },
  { value: "logistik", label: "Logistik & Transport", multiple: [4, 6] },
  { value: "sonstige", label: "Sonstige", multiple: [4, 6] },
];

function calculateValuation(
  revenue: number,
  ebit: number,
  industry: string,
  employees: number,
  growthRate: number
): ValuationResult {
  const industryData = industries.find((i) => i.value === industry);
  const baseMultiple = industryData?.multiple || [4, 6];

  // Adjust multiple based on growth rate
  let growthAdjustment = 0;
  if (growthRate > 10) growthAdjustment = 0.5;
  if (growthRate > 20) growthAdjustment = 1;
  if (growthRate < 0) growthAdjustment = -0.5;

  // Adjust for company size
  let sizeAdjustment = 0;
  if (revenue > 10000000) sizeAdjustment = 0.3;
  if (revenue > 50000000) sizeAdjustment = 0.5;
  if (revenue < 2000000) sizeAdjustment = -0.3;

  // Adjust for profitability
  const profitMargin = (ebit / revenue) * 100;
  let profitAdjustment = 0;
  if (profitMargin > 15) profitAdjustment = 0.5;
  if (profitMargin > 25) profitAdjustment = 1;
  if (profitMargin < 5) profitAdjustment = -0.5;

  const adjustedMultiple = {
    min: Math.max(2, baseMultiple[0] + growthAdjustment + sizeAdjustment + profitAdjustment),
    max: Math.max(3, baseMultiple[1] + growthAdjustment + sizeAdjustment + profitAdjustment),
  };

  const minValue = ebit * adjustedMultiple.min;
  const maxValue = ebit * adjustedMultiple.max;
  const avgValue = (minValue + maxValue) / 2;

  return {
    minValue,
    maxValue,
    avgValue,
    multiple: adjustedMultiple,
    method: "EBIT-Multiplikator",
  };
}

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)} Mio. EUR`;
  }
  return `${(value / 1000).toFixed(0)} Tsd. EUR`;
}

export default function BewertungsrechnerPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    revenue: "",
    ebit: "",
    industry: "",
    employees: "",
    growthRate: "",
  });
  const [result, setResult] = useState<ValuationResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCalculate = () => {
    const revenue = parseFloat(formData.revenue);
    const ebit = parseFloat(formData.ebit);
    const employees = parseInt(formData.employees);
    const growthRate = parseFloat(formData.growthRate);

    if (revenue && ebit && formData.industry) {
      const valuation = calculateValuation(
        revenue,
        ebit,
        formData.industry,
        employees || 0,
        growthRate || 0
      );
      setResult(valuation);
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setFormData({
      revenue: "",
      ebit: "",
      industry: "",
      employees: "",
      growthRate: "",
    });
    setResult(null);
    setShowResult(false);
    setStep(1);
  };

  const canProceed = () => {
    if (step === 1) return formData.revenue && formData.ebit;
    if (step === 2) return formData.industry;
    return true;
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-qanna-navy to-qanna-navy-dark">
        <div className="container-qanna text-center">
          <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
            BEWERTUNGSRECHNER
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Was ist Ihr Unternehmen wert?
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Erhalten Sie eine erste Einschaetzung zum Wert Ihres Unternehmens.
            Basierend auf bewaehrten Bewertungsmethoden und aktuellen Marktdaten.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-qanna-gray-50">
        <div className="container-qanna max-w-3xl">
          {!showResult ? (
            <Card variant="default" padding="lg">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        s <= step
                          ? "bg-qanna-gold text-white"
                          : "bg-qanna-gray-200 text-qanna-gray-500"
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`w-24 h-1 mx-2 ${
                          s < step ? "bg-qanna-gold" : "bg-qanna-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Financial Data */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-qanna-navy mb-2">
                      Finanzkennzahlen
                    </h2>
                    <p className="text-qanna-gray-600">
                      Geben Sie Ihre aktuellen Finanzdaten ein
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-qanna-gray-700 mb-2">
                      Jahresumsatz (EUR) *
                    </label>
                    <input
                      type="number"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleInputChange}
                      placeholder="z.B. 5000000"
                      className="w-full px-4 py-3 border border-qanna-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-qanna-gold focus:border-transparent"
                    />
                    <p className="text-xs text-qanna-gray-500 mt-1">
                      Umsatz des letzten Geschaeftsjahres
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-qanna-gray-700 mb-2">
                      EBIT (EUR) *
                    </label>
                    <input
                      type="number"
                      name="ebit"
                      value={formData.ebit}
                      onChange={handleInputChange}
                      placeholder="z.B. 500000"
                      className="w-full px-4 py-3 border border-qanna-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-qanna-gold focus:border-transparent"
                    />
                    <p className="text-xs text-qanna-gray-500 mt-1">
                      Ergebnis vor Zinsen und Steuern
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2: Industry & Size */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-qanna-navy mb-2">
                      Branche & Groesse
                    </h2>
                    <p className="text-qanna-gray-600">
                      Waehlen Sie Ihre Branche und geben Sie die
                      Unternehmensgroesse an
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-qanna-gray-700 mb-2">
                      Branche *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-qanna-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-qanna-gold focus:border-transparent bg-white"
                    >
                      <option value="">Bitte waehlen...</option>
                      {industries.map((industry) => (
                        <option key={industry.value} value={industry.value}>
                          {industry.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-qanna-gray-700 mb-2">
                      Anzahl Mitarbeiter
                    </label>
                    <input
                      type="number"
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      placeholder="z.B. 50"
                      className="w-full px-4 py-3 border border-qanna-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-qanna-gold focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Growth */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-qanna-navy mb-2">
                      Wachstum
                    </h2>
                    <p className="text-qanna-gray-600">
                      Wie hat sich Ihr Unternehmen entwickelt?
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-qanna-gray-700 mb-2">
                      Umsatzwachstum der letzten 3 Jahre (% p.a.)
                    </label>
                    <input
                      type="number"
                      name="growthRate"
                      value={formData.growthRate}
                      onChange={handleInputChange}
                      placeholder="z.B. 10"
                      className="w-full px-4 py-3 border border-qanna-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-qanna-gold focus:border-transparent"
                    />
                    <p className="text-xs text-qanna-gray-500 mt-1">
                      Durchschnittliches jaehrliches Wachstum
                    </p>
                  </div>

                  <div className="bg-qanna-gold/10 rounded-xl p-4 mt-6">
                    <h4 className="font-semibold text-qanna-navy mb-2">
                      Zusammenfassung Ihrer Eingaben:
                    </h4>
                    <ul className="text-sm text-qanna-gray-600 space-y-1">
                      <li>
                        Umsatz:{" "}
                        {formatCurrency(parseFloat(formData.revenue) || 0)}
                      </li>
                      <li>
                        EBIT: {formatCurrency(parseFloat(formData.ebit) || 0)}
                      </li>
                      <li>
                        Branche:{" "}
                        {industries.find((i) => i.value === formData.industry)
                          ?.label || "-"}
                      </li>
                      <li>Mitarbeiter: {formData.employees || "-"}</li>
                      <li>Wachstum: {formData.growthRate || "0"}% p.a.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                  className={step === 1 ? "invisible" : ""}
                >
                  Zurueck
                </Button>

                {step < 3 ? (
                  <Button
                    variant="primary"
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                  >
                    Weiter
                  </Button>
                ) : (
                  <Button
                    variant="gold"
                    onClick={handleCalculate}
                    disabled={!canProceed()}
                  >
                    Bewertung berechnen
                  </Button>
                )}
              </div>
            </Card>
          ) : (
            /* Results Section */
            <div className="space-y-6">
              <Card variant="default" padding="lg" className="text-center">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-qanna-gold/20 text-qanna-gold text-sm font-semibold rounded-full mb-4">
                    BEWERTUNGSERGEBNIS
                  </span>
                  <h2 className="text-2xl font-bold text-qanna-navy mb-2">
                    Geschaetzter Unternehmenswert
                  </h2>
                  <p className="text-qanna-gray-600">
                    Basierend auf der {result?.method}-Methode
                  </p>
                </div>

                <div className="bg-qanna-navy rounded-2xl p-8 mb-6">
                  <p className="text-gray-300 mb-2">Wertspanne</p>
                  <div className="text-4xl md:text-5xl font-bold text-qanna-gold mb-2">
                    {formatCurrency(result?.minValue || 0)} -{" "}
                    {formatCurrency(result?.maxValue || 0)}
                  </div>
                  <p className="text-gray-300">
                    Mittlerer Wert: {formatCurrency(result?.avgValue || 0)}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-qanna-gray-50 rounded-xl p-4">
                    <p className="text-sm text-qanna-gray-600">
                      Verwendeter Multiplikator
                    </p>
                    <p className="text-2xl font-bold text-qanna-navy">
                      {result?.multiple.min.toFixed(1)}x -{" "}
                      {result?.multiple.max.toFixed(1)}x
                    </p>
                  </div>
                  <div className="bg-qanna-gray-50 rounded-xl p-4">
                    <p className="text-sm text-qanna-gray-600">Basis</p>
                    <p className="text-2xl font-bold text-qanna-navy">
                      {formatCurrency(parseFloat(formData.ebit))} EBIT
                    </p>
                  </div>
                </div>

                <div className="bg-qanna-gold/10 rounded-xl p-4 text-left mb-6">
                  <h4 className="font-semibold text-qanna-navy mb-2">
                    Wichtiger Hinweis:
                  </h4>
                  <p className="text-sm text-qanna-gray-600">
                    Diese Berechnung ist eine erste Orientierung und ersetzt
                    keine professionelle Unternehmensbewertung. Der tatsaechliche
                    Wert haengt von vielen weiteren Faktoren ab (Marktumfeld,
                    Kaeuferinteresse, Verhandlungsgeschick, Nachfolgeregelung, etc.).
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gold" size="lg">
                    <Link href="/kontakt">Detaillierte Bewertung anfragen</Link>
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleReset}>
                    Neue Berechnung
                  </Button>
                </div>
              </Card>

              {/* What's Next */}
              <Card variant="default" padding="lg">
                <h3 className="text-xl font-bold text-qanna-navy mb-4">
                  Wie geht es weiter?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-qanna-gold text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-qanna-navy">
                        Kostenloses Erstgespraech
                      </h4>
                      <p className="text-sm text-qanna-gray-600">
                        Besprechen Sie Ihre Nachfolgesituation mit unseren Experten -
                        unverbindlich und vertraulich.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-qanna-gold text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-qanna-navy">
                        Professionelle Bewertung
                      </h4>
                      <p className="text-sm text-qanna-gray-600">
                        Wir erstellen eine fundierte Bewertung mit mehreren
                        Methoden und Marktanalyse.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-qanna-gold text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-qanna-navy">
                        Nachfolgestrategie entwickeln
                      </h4>
                      <p className="text-sm text-qanna-gray-600">
                        Gemeinsam entwickeln wir die optimale Strategie fuer Ihre
                        Unternehmensnachfolge - ob Verkauf, MBO oder Familiennachfolge.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Disclaimer */}
          <p className="text-xs text-qanna-gray-500 text-center mt-6">
            * Pflichtfelder. Alle Angaben werden vertraulich behandelt und nicht
            gespeichert.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
