import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "QANNA Unternehmensnachfolge | M&A-Beratung",
    template: "%s | QANNA Unternehmensnachfolge",
  },
  description:
    "QANNA Unternehmensnachfolge - Ihr Partner fuer erfolgreiche Unternehmensnachfolge und M&A-Transaktionen. Von der Bewertung bis zum Abschluss.",
  keywords: [
    "Unternehmensnachfolge",
    "M&A-Beratung",
    "Unternehmensbewertung",
    "Kaeufersuche",
    "Due Diligence",
    "Vertragsverhandlung",
    "Post-Merger Integration",
  ],
  authors: [{ name: "QANNA Unternehmensnachfolge" }],
  creator: "QANNA Unternehmensnachfolge",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://qanna-beratung.de",
    siteName: "QANNA Unternehmensnachfolge",
    title: "QANNA Unternehmensnachfolge | M&A-Beratung",
    description:
      "Ihr Partner fuer erfolgreiche Unternehmensnachfolge und M&A-Transaktionen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "QANNA Unternehmensnachfolge",
    description: "Unternehmensnachfolge & M&A-Beratung",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
