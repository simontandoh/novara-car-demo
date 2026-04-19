import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vellum & Co - Fine Jewellery",
  description: "Vellum & Co creates handcrafted fine jewellery in Mayfair with private appointments, bespoke commissions, and heirloom-quality design.",
  metadataBase: new URL("https://luxury-brand.novarastudios.co.uk"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vellum & Co - Fine Jewellery",
    description: "Vellum & Co creates handcrafted fine jewellery in Mayfair with private appointments, bespoke commissions, and heirloom-quality design.",
    url: "https://luxury-brand.novarastudios.co.uk",
    siteName: "Vellum & Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vellum & Co - Fine Jewellery",
    description: "Vellum & Co creates handcrafted fine jewellery in Mayfair with private appointments, bespoke commissions, and heirloom-quality design.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}