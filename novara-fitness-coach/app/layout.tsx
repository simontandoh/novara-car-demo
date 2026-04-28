import type { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import { createSiteMetadata } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = createSiteMetadata(siteConfig);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
