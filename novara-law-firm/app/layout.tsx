import type { Metadata, Viewport } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";

import "./globals.css";

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
    default: "Hale & Partners — Solicitors",
    template: "%s",
  },
  description:
    "Clear, honest legal support without jargon and hidden costs.",
  metadataBase: new URL("https://law.novarastudios.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hale & Partners — Solicitors",
    description:
      "Hale & Partners provides practical legal support across family, property, and business matters.",
    url: "https://law.novarastudios.co.uk",
    siteName: "Hale & Partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hale & Partners — Solicitors",
    description:
      "Hale & Partners provides practical legal support across family, property, and business matters.",
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
      className={`${libreBaskerville.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
