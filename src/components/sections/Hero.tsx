"use client";

import { Button } from "@/components/ui";
import Link from "next/link";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export function Hero({
  badge = "UNTERNEHMENSBERATUNG",
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-qanna-navy-dark/90 via-qanna-navy-dark/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-qanna py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          {badge && (
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-1 bg-qanna-gold text-white text-xs font-semibold uppercase tracking-wider rounded">
                {badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl text-qanna-gray-200 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCTA && (
              <Button variant="gold" size="lg">
                <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
              </Button>
            )}
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-qanna-gold hover:border-qanna-gold"
              >
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-xs uppercase tracking-wider mb-2">Mehr erfahren</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
