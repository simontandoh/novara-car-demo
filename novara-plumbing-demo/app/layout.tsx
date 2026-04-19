import type { Metadata, Viewport } from "next";
import { Exo_2, Libre_Franklin } from "next/font/google";

import "./globals.css";
import "./plumbing.css";
import "./privacy.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Ironside Plumbing | Trusted Liverpool Plumbers",
  description:
    "Ironside Plumbing provides emergency plumbing, heating, boiler, and bathroom services across Liverpool and surrounding areas.",
  metadataBase: new URL("https://plumbing.novarastudios.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ironside Plumbing | Trusted Liverpool Plumbers",
    description:
      "Emergency plumbing, heating, boiler, and bathroom services across Liverpool and surrounding areas.",
    url: "https://plumbing.novarastudios.co.uk",
    siteName: "Ironside Plumbing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ironside Plumbing | Trusted Liverpool Plumbers",
    description:
      "Emergency plumbing, heating, boiler, and bathroom services across Liverpool and surrounding areas.",
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
    <html lang="en">
      <body className={`${exo2.variable} ${libreFranklin.variable}`}>
        {children}
      </body>
    </html>
  );
}
