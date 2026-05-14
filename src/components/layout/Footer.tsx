"use client";

import Link from "next/link";
import { LogoFull } from "@/components/ui";

const footerLinks = {
  services: [
    { title: "Unternehmensbewertung", href: "/leistungen/unternehmensbewertung" },
    { title: "Nachfolgersuche", href: "/leistungen/nachfolgersuche" },
    { title: "Due Diligence", href: "/leistungen/due-diligence" },
    { title: "Vertragsverhandlung", href: "/leistungen/vertragsverhandlung" },
    { title: "Post-Merger Integration", href: "/leistungen/post-merger-integration" },
  ],
  industries: [
    { title: "Industrie & Handwerk", href: "/branchen/industrie" },
    { title: "Handel & Einzelhandel", href: "/branchen/handel" },
    { title: "Dienstleistungen", href: "/branchen/dienstleistungen" },
    { title: "Gesundheitswesen", href: "/branchen/gesundheitswesen" },
    { title: "Alle Branchen", href: "/branchen" },
  ],
  about: [
    { title: "Unser Team", href: "/ueber-uns/team" },
    { title: "Ueber uns", href: "/ueber-uns" },
    { title: "Insights", href: "/insights" },
    { title: "KI-Loesungen", href: "/ki-loesungen" },
  ],
  legal: [
    { title: "Impressum", href: "/impressum" },
    { title: "Datenschutz", href: "/datenschutz" },
    { title: "Cookies", href: "/cookies" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-qanna-navy-dark text-white">
      {/* Main Footer */}
      <div className="container-qanna py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <LogoFull variant="light" size="default" />
            </Link>
            <p className="text-white text-sm mb-4">
              Ihr Partner fuer erfolgreiche Unternehmensnachfolge und
              M&A-Transaktionen. Von der Bewertung bis zum Abschluss.
            </p>
            <div className="space-y-2 text-sm text-white">
              <p>Qanna GmbH</p>
              <p>Suttnerstr. 10</p>
              <p>33790 Halle/Westfalen</p>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-qanna-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://xing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-qanna-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022l7.636-13.544c.093-.188.093-.383.004-.535-.089-.142-.253-.22-.464-.22h-3.454zm-12.188 5.099c-.212 0-.377.079-.464.221-.088.143-.088.338.006.535l2.063 3.674c.003.006.003.016 0 .021l-3.251 5.739c-.096.191-.096.387-.006.535.088.143.252.221.463.221h3.454c.531 0 .756-.351.923-.658l3.317-5.863c-.015-.023-2.136-3.801-2.136-3.801-.167-.307-.394-.624-.923-.624h-3.446z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-qanna-gold">
              Leistungen
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-qanna-gold transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-qanna-gold">
              Branchen
            </h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-qanna-gold transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-qanna-gold">
              Ueber uns
            </h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-qanna-gold transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-qanna-gold">
              Kontakt
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+4915253594902"
                className="flex items-center gap-2 text-white hover:text-qanna-gold transition-colors"
              >
                <svg
                  className="w-4 h-4"
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
                01525 3594902
              </a>
              <a
                href="mailto:info@qanna-beratung.de"
                className="flex items-center gap-2 text-white hover:text-qanna-gold transition-colors"
              >
                <svg
                  className="w-4 h-4"
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
                info@qanna-beratung.de
              </a>
              <p className="text-white text-xs mt-4">
                Mo - Fr: 9:00 - 18:00 Uhr
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-block mt-4 px-4 py-2 bg-qanna-gold text-white text-sm font-medium rounded-md hover:bg-qanna-gold-dark transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-qanna py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              {currentYear} Qanna GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-qanna-gold transition-colors text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
