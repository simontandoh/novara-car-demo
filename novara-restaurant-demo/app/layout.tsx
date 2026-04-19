import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Calabash - Caribbean Soul Kitchen",
  description: "Calabash serves bold Caribbean soul food in Liverpool with warm hospitality, signature classics, and easy table booking.",
  metadataBase: new URL("https://restaurant.novarastudios.co.uk"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Calabash - Caribbean Soul Kitchen",
    description: "Calabash serves bold Caribbean soul food in Liverpool with warm hospitality, signature classics, and easy table booking.",
    url: "https://restaurant.novarastudios.co.uk",
    siteName: "Calabash",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calabash - Caribbean Soul Kitchen",
    description: "Calabash serves bold Caribbean soul food in Liverpool with warm hospitality, signature classics, and easy table booking.",
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