import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Elodie Marsh — Photographer",
    template: "%s",
  },
  description:
    "Elodie Marsh — Wedding, Fashion, Commercial, and Editorial Photography.",
  metadataBase: new URL("https://photographer.novarastudios.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elodie Marsh — Photographer",
    description:
      "Editorial, wedding, and commercial photography by Elodie Marsh.",
    url: "https://photographer.novarastudios.co.uk",
    siteName: "Elodie Marsh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elodie Marsh — Photographer",
    description:
      "Editorial, wedding, and commercial photography by Elodie Marsh.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
