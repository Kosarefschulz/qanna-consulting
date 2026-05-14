"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button, Logo } from "@/components/ui";

// Navigation Data - Nachfolge-fokussiert
const services = [
  {
    title: "Unternehmensbewertung",
    href: "/leistungen/unternehmensbewertung",
    description: "Fundierte Bewertung nach anerkannten Methoden",
  },
  {
    title: "Kaeufer-/Nachfolgersuche",
    href: "/leistungen/nachfolgersuche",
    description: "Systematische Identifikation geeigneter Kaeufer",
  },
  {
    title: "Due Diligence",
    href: "/leistungen/due-diligence",
    description: "Professionelle Pruefungsprozesse",
  },
  {
    title: "Vertragsverhandlung",
    href: "/leistungen/vertragsverhandlung",
    description: "Erfahrene Verhandlungsfuehrung",
  },
  {
    title: "Post-Merger Integration",
    href: "/leistungen/post-merger-integration",
    description: "Erfolgreiche Uebergabe und Integration",
  },
];

const industries = [
  { title: "Industrie & Handwerk", href: "/branchen/industrie" },
  { title: "Handel & Einzelhandel", href: "/branchen/handel" },
  { title: "Dienstleistungen", href: "/branchen/dienstleistungen" },
  { title: "Gesundheitswesen", href: "/branchen/gesundheitswesen" },
  { title: "Gastronomie & Hotel", href: "/branchen/gastronomie" },
];

const aboutLinks = [
  { title: "Unser Team", href: "/ueber-uns/team" },
  { title: "Ueber uns", href: "/ueber-uns" },
];

// Dropdown Component with proper hover handling
function NavDropdown({
  label,
  isScrolled,
  children,
  width = "w-[500px]",
  align = "left",
}: {
  label: string;
  isScrolled: boolean;
  children: React.ReactNode;
  width?: string;
  align?: "left" | "right";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`
          px-4 py-2 text-sm font-medium rounded-md
          transition-colors duration-200
          ${isScrolled ? "text-qanna-navy hover:bg-qanna-gray-100" : "text-white hover:bg-white/10"}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg
          className={`inline-block ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Invisible bridge to connect button and dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 h-3" />
      )}

      {/* Dropdown Menu */}
      <div
        className={`
          absolute top-full ${align === "right" ? "right-0" : "left-0"} pt-3 ${width}
          transition-all duration-200 origin-top
          ${isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}
        `}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-qanna-gray-200 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }
      `}
    >
      <nav className="container-qanna">
        <div className="relative flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Leistungen Dropdown */}
            <NavDropdown label="LEISTUNGEN" isScrolled={isScrolled} width="w-[600px]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-qanna-gray-400 uppercase mb-4">
                    Nachfolge-Leistungen
                  </h3>
                  <div className="space-y-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block group p-2 -m-2 rounded-lg hover:bg-qanna-gray-50 transition-colors"
                      >
                        <span className="text-qanna-navy font-medium group-hover:text-qanna-gold group-hover:underline transition-colors">
                          {service.title}
                        </span>
                        <p className="text-sm text-qanna-gray-500">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="bg-qanna-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-qanna-navy mb-2">
                    Unternehmenswert berechnen
                  </h4>
                  <p className="text-sm text-qanna-gray-500 mb-3">
                    Erste Einschaetzung Ihres Unternehmenswertes in wenigen Minuten.
                  </p>
                  <Link
                    href="/ki-loesungen/bewertungsrechner"
                    className="text-sm text-qanna-gold font-medium hover:underline"
                  >
                    Zum Bewertungsrechner
                  </Link>
                </div>
              </div>
            </NavDropdown>

            {/* Branchen Dropdown */}
            <NavDropdown label="BRANCHEN" isScrolled={isScrolled} width="w-[400px]">
              <h3 className="text-sm font-semibold text-qanna-gray-400 uppercase mb-4">
                Branchen
              </h3>
              <div className="grid grid-cols-1 gap-1">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="px-3 py-2 text-qanna-navy hover:bg-qanna-gray-50 hover:text-qanna-gold hover:underline rounded-md transition-colors"
                  >
                    {industry.title}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-qanna-gray-200">
                <Link
                  href="/branchen"
                  className="text-sm text-qanna-gold font-medium hover:underline"
                >
                  Alle Branchen ansehen
                </Link>
              </div>
            </NavDropdown>

            {/* Insights Link */}
            <Link
              href="/insights"
              className={`
                px-4 py-2 text-sm font-medium rounded-md
                transition-colors duration-200
                ${isScrolled ? "text-qanna-navy hover:bg-qanna-gray-100" : "text-white hover:bg-white/10"}
              `}
            >
              INSIGHTS
            </Link>
          </div>

          {/* Logo Center - Q is always centered, ANNA animates away */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-[28px] md:-translate-x-[30px] flex items-center"
          >
            <Logo isScrolled={isScrolled} isLight={!isScrolled} />
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Ueber uns Dropdown */}
            <NavDropdown label="UEBER UNS" isScrolled={isScrolled} width="w-[350px]" align="right">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-qanna-gray-400 uppercase mb-4">
                    Ueber uns
                  </h3>
                  <div className="space-y-1">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-2 text-qanna-navy hover:bg-qanna-gray-50 hover:text-qanna-gold hover:underline rounded-md transition-colors"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="bg-qanna-gray-50 rounded-lg p-4">
                  <p className="text-sm text-qanna-gray-600 mb-3">
                    Lernen Sie die Experten hinter QANNA Unternehmensnachfolge kennen.
                  </p>
                  <Link
                    href="/ueber-uns/team"
                    className="text-sm text-qanna-gold font-medium hover:underline"
                  >
                    Team kennenlernen
                  </Link>
                </div>
              </div>
            </NavDropdown>

            {/* KI-Loesungen Link */}
            <Link
              href="/ki-loesungen"
              className="px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--qanna-gold)" }}
            >
              KI-LOESUNGEN
            </Link>

            {/* Kontakt Button */}
            <Button
              variant={isScrolled ? "primary" : "outline"}
              size="sm"
              className={!isScrolled ? "border-white text-white hover:bg-qanna-gold hover:border-qanna-gold hover:text-white" : ""}
            >
              <Link href="/kontakt">KONTAKT</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? "text-qanna-navy" : "text-white"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-qanna-gray-200 shadow-lg">
          <div className="container-qanna py-4 space-y-4">
            {/* Services */}
            <div>
              <p className="text-xs font-semibold text-qanna-gray-400 uppercase mb-2">
                Leistungen
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block py-2 text-qanna-navy hover:text-qanna-gold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <hr className="border-qanna-gray-200" />

            {/* Industries */}
            <div>
              <p className="text-xs font-semibold text-qanna-gray-400 uppercase mb-2">
                Branchen
              </p>
              <div className="grid grid-cols-1 gap-2">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="py-2 text-qanna-navy hover:text-qanna-gold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {industry.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/branchen"
                className="block mt-2 text-sm text-qanna-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Alle Branchen
              </Link>
            </div>

            <hr className="border-qanna-gray-200" />

            {/* Other Links */}
            <div className="space-y-2">
              <Link
                href="/insights"
                className="block py-2 text-qanna-navy hover:text-qanna-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Insights
              </Link>
              <Link
                href="/ki-loesungen"
                className="block py-2 text-qanna-navy hover:text-qanna-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                KI-Loesungen
              </Link>
              <Link
                href="/ueber-uns"
                className="block py-2 text-qanna-navy hover:text-qanna-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ueber uns
              </Link>
            </div>

            <hr className="border-qanna-gray-200" />

            {/* CTA */}
            <Button variant="primary" fullWidth>
              <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                Kontakt aufnehmen
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
