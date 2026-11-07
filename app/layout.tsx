import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { exactBlock, cashSans } from "./fonts";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import "../styles/globals.css";
import RegistrationModalProvider from "@/components/RegistrationModalProvider";
import { siteUrl, siteName, defaultDescription, defaultOgImage } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Kassesystem for restaurant og servering`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  openGraph: {
    siteName,
    type: "website",
    locale: "nb_NO",
    url: siteUrl,
    title: `${siteName} - Kassesystem for restaurant og servering`,
    description: defaultDescription,
    images: [{ url: defaultOgImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Kassesystem for restaurant og servering`,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/brand/betalia-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/betalia-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/brand/betalia-180.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body
        className={`
          ${exactBlock.variable}
          ${cashSans.variable}
          antialiased
        `}
      >
        <RegistrationModalProvider>
          {children}
        </RegistrationModalProvider>
        <Analytics />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}