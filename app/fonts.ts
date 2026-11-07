import localFont from "next/font/local";
import { Poppins, IBM_Plex_Mono, Inter } from "next/font/google";

/* Home page (Figma "Betalia - Hjem"): text styles resolve to Poppins for
   head/body (Poppins is the family named in the Figma styles) and a mono
   for the small caps labels. Scoped via CSS variables so other pages keep
   the existing ExactBlock/CashSans tokens. */
export const homeSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-home-sans",
});

/* Body text on Home runs in Inter: screenshot comparison against the
   Figma frame showed Poppins body copy wrapping ~4% wider than the
   design on every paragraph, while Poppins headings matched exactly. */
export const homeBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-home-body",
});

/* About page (Figma "Om oss"): every text style in the file resolves to
   Poppins (Figma token "Font 1"), including Bold for the footer headline. */
export const aboutSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-about-sans",
});

export const homeMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-home-mono",
});

export const exactBlock = localFont({
  src: "../public/fonts/ExactBlock-Regular.woff2",
  variable: "--font-heading",
});

export const cashSans = localFont({
  src: [
    {
      path: "../public/fonts/CashSans-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/CashSans-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-body",
});
/* Online&QR page (Figma "Løsninger - Online&QR"): the frame mixes in
   Permanent Marker (eyebrow "24/7" + the provision line), Kalam (the
   "&" in "Online & QR") and Manrope (feature-list bodies). */
import { Permanent_Marker, Kalam, Manrope } from "next/font/google";

export const markerFont = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marker",
});

export const kalamFont = Kalam({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kalam",
});

export const manropeFont = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-manrope",
});
