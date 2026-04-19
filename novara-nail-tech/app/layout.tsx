import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Lola Nails Studio - Nail Artist, Liverpool",
  description: "Lola Nails Studio offers premium nail artistry in Liverpool, from gel extensions and BIAB to bespoke bridal and editorial nail sets.",
  metadataBase: new URL("https://nailtech.novarastudios.co.uk"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Lola Nails Studio - Nail Artist, Liverpool",
    description: "Lola Nails Studio offers premium nail artistry in Liverpool, from gel extensions and BIAB to bespoke bridal and editorial nail sets.",
    url: "https://nailtech.novarastudios.co.uk",
    siteName: "Lola Nails Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lola Nails Studio - Nail Artist, Liverpool",
    description: "Lola Nails Studio offers premium nail artistry in Liverpool, from gel extensions and BIAB to bespoke bridal and editorial nail sets.",
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