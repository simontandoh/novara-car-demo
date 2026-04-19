import type { Metadata, Viewport } from "next";
import {
  Anton,
  Barlow,
  Barlow_Condensed,
  DM_Sans,
  Libre_Baskerville,
} from "next/font/google";

import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-barlow-cond",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: {
    default: "Redfield FC — Home",
    template: "Redfield FC — %s",
  },
  description:
    "Redfield FC — Northern Premier League. Founded 1924. One hundred years of passion, grit, and identity.",
  metadataBase: new URL("https://football.novarastudios.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Redfield FC — Official Club Site",
    description:
      "Official Redfield FC site with fixtures, club updates, and supporter information.",
    url: "https://football.novarastudios.co.uk",
    siteName: "Redfield FC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redfield FC — Official Club Site",
    description:
      "Official Redfield FC site with fixtures, club updates, and supporter information.",
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
    <html
      lang="en"
      className={`${anton.variable} ${barlow.variable} ${barlowCondensed.variable} ${libreBaskerville.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
