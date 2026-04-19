import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Onyx - Fine Dining, London",
  description: "Onyx is a Mayfair fine-dining destination offering seasonal tasting menus, private dining, and refined reservation-led service.",
  metadataBase: new URL("https://luxury-restaurant.novarastudios.co.uk"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Onyx - Fine Dining, London",
    description: "Onyx is a Mayfair fine-dining destination offering seasonal tasting menus, private dining, and refined reservation-led service.",
    url: "https://luxury-restaurant.novarastudios.co.uk",
    siteName: "Onyx",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onyx - Fine Dining, London",
    description: "Onyx is a Mayfair fine-dining destination offering seasonal tasting menus, private dining, and refined reservation-led service.",
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