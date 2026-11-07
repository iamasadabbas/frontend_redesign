import type { Metadata } from "next";

import { aboutSans, homeMono, homeSans } from "@/app/fonts";
import HomeNav from "@/components/home/HomeNav";
import QrHero from "@/components/hardware-page/QrHero";
import QrFeatures from "@/components/hardware-page/QrFeatures";
import QrMarkerStats from "@/components/hardware-page/QrMarkerStats";
import QrSpecs from "@/components/hardware-page/QrSpecs";
import { SiteCTA, SiteFooter } from "@/components/site/SiteClosing";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, productJsonLd } from "@/lib/seo";
import { onlineQrPageSeo } from "@/lib/page-seo";

const { title, description, path } = onlineQrPageSeo;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl(path),
  },
  openGraph: {
    url: absoluteUrl(path),
    title,
    description,
    images: [{ url: absoluteUrl("/images/online-qr-ordering.webp") }],
  },
};

export default function RegisterPage() {
  return (
    <div
      className={`${aboutSans.variable} ${homeSans.variable} ${homeMono.variable} bg-concept-grid overflow-x-clip font-[family-name:var(--font-about-sans)] text-[#0A0A0A]`}
    >
      <JsonLd
        data={[
          productJsonLd({
            name: "Betalia Online & QR-bestilling",
            description,
            image: absoluteUrl("/images/online-qr-ordering.webp"),
            category: "Online ordering platform",
          }),
          breadcrumbJsonLd([
            { name: "Hjem", path: "/" },
            { name: "Hardware", path: "/hardware" },
            { name: "Online & QR bestilling", path },
          ]),
        ]}
      />
      <HomeNav variant="hardware" />
      <main>
        <QrHero />
        <QrFeatures />
        <QrMarkerStats />
        <QrSpecs />
      </main>
      <SiteCTA
        heading="La oss finne den rette løsningen for deg"
        paragraph="Enten du driver restaurant, kafé, bakeri eller en kjede, hjelper vi deg med å finne den kasseløsningen som passer best for din virksomhet."
      />
      <SiteFooter />
    </div>
  );
}
