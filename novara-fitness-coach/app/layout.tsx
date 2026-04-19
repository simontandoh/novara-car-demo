import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Marcus Cole - Elite Performance Coach",
  description: "Marcus Cole Performance delivers elite coaching in Liverpool with precision training, structured nutrition, and accountability-led transformation plans.",
  metadataBase: new URL("https://fitness.novarastudios.co.uk"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Marcus Cole - Elite Performance Coach",
    description: "Marcus Cole Performance delivers elite coaching in Liverpool with precision training, structured nutrition, and accountability-led transformation plans.",
    url: "https://fitness.novarastudios.co.uk",
    siteName: "Marcus Cole",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Cole - Elite Performance Coach",
    description: "Marcus Cole Performance delivers elite coaching in Liverpool with precision training, structured nutrition, and accountability-led transformation plans.",
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