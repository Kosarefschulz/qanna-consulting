"use client";

import Image from "next/image";

interface LogoProps {
  isScrolled: boolean;
  isLight?: boolean;
  className?: string;
}

export function Logo({ isScrolled, isLight = false, className = "" }: LogoProps) {
  const textColor = "text-qanna-gold";

  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Q Monogram - switches between gold-only and with-pattern based on scroll */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 z-10">
        {/* Gold Q only - for dark backgrounds (hero) */}
        <Image
          src="/images/q-gold.png"
          alt="QANNA"
          fill
          className={`object-contain transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}
          priority
        />
        {/* Q with navy pattern - for white backgrounds (scrolled) */}
        <Image
          src="/images/q-with-pattern.png"
          alt="QANNA"
          fill
          className={`object-contain transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}
          priority
        />
      </div>

      {/* ANNA Text - slides into Q when scrolled */}
      <div className="overflow-hidden" style={{ marginTop: "-8px" }}>
        <span
          className={`
            block font-normal tracking-[0.25em] whitespace-nowrap uppercase
            text-[1.4rem] md:text-[1.7rem]
            transition-all duration-1000 ease-out
            ${textColor}
            ${isScrolled ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100 ml-0.5"}
          `}
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          ANNA
        </span>
      </div>
    </div>
  );
}

// Full logo for footer and other static uses
export function LogoFull({
  className = "",
  variant = "dark",
  size = "default"
}: {
  className?: string;
  variant?: "dark" | "light";
  size?: "small" | "default" | "large";
}) {
  // ANNA always in gold to match Q
  const textColor = "text-qanna-gold";

  const sizes = {
    small: { container: "w-10 h-10", text: "text-[1.1rem]" },
    default: { container: "w-12 h-12 md:w-14 md:h-14", text: "text-[1.4rem] md:text-[1.7rem]" },
    large: { container: "w-16 h-16", text: "text-[1.8rem]" }
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center ${className}`}>
      {/* Q Monogram - already has gold Q + navy pattern */}
      <div className={`relative flex-shrink-0 ${s.container}`}>
        <Image
          src="/images/q-gold.png"
          alt="QANNA"
          fill
          className="object-contain"
        />
      </div>

      {/* ANNA - same spacing as header */}
      <span
        className={`ml-0.5 font-normal tracking-[0.25em] uppercase ${textColor} ${s.text}`}
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", marginTop: "-8px" }}
      >
        ANNA
      </span>
    </div>
  );
}

// Just the Q monogram
export function LogoMonogram({
  className = "",
  size = "default",
  invert = false
}: {
  className?: string;
  size?: "small" | "default" | "large";
  invert?: boolean;
}) {
  const sizes = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16"
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      <Image
        src="/images/q-gold.png"
        alt="QANNA"
        fill
        className={`object-contain ${invert ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}
