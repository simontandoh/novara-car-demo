import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Celeste Vane - Content Creator & Lifestyle",
  description: "Celeste Vane is a Manchester-based creator partnering with brands across lifestyle, fashion, travel, and beauty through conversion-focused campaigns.",
  metadataBase: new URL("https://influencer.novarastudios.co.uk"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Celeste Vane - Content Creator & Lifestyle",
    description: "Celeste Vane is a Manchester-based creator partnering with brands across lifestyle, fashion, travel, and beauty through conversion-focused campaigns.",
    url: "https://influencer.novarastudios.co.uk",
    siteName: "Celeste Vane",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Celeste Vane - Content Creator & Lifestyle",
    description: "Celeste Vane is a Manchester-based creator partnering with brands across lifestyle, fashion, travel, and beauty through conversion-focused campaigns.",
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