import type { Metadata } from "next";

import { aboutSans, homeMono, homeSans } from "@/app/fonts";
import HomeNav from "@/components/home/HomeNav";
import PosHero from "@/components/hardware-page/PosHero";
import PosFeatures from "@/components/hardware-page/PosFeatures";
import PosHardware from "@/components/hardware-page/PosHardware";
import PosBand from "@/components/hardware-page/PosBand";
import LosningerFaq from "@/components/hardware-page/LosningerFaq";
import PosSpecs from "@/components/hardware-page/PosSpecs";
import { SiteCTA, SiteFooter } from "@/components/site/SiteClosing";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from "@/lib/seo";
import { faqs } from "@/data/faq";
import { cashierPageSeo } from "@/lib/page-seo";

const { title, description, path } = cashierPageSeo;

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
    images: [{ url: absoluteUrl("/images/pos/hero-terminal.png") }],
  },
};

export default function HandheldPage() {
  return (
    <div className={`${aboutSans.variable} ${homeSans.variable} ${homeMono.variable} bg-concept-grid overflow-x-clip font-[family-name:var(--font-about-sans)] text-[#0A0A0A]`}>
      <JsonLd
        data={[
          productJsonLd({
            name: "Betalia Kasse",
            description,
            image: absoluteUrl("/images/pos/hero-terminal.png"),
            category: "Point of Sale terminal",
          }),
          breadcrumbJsonLd([
            { name: "Hjem", path: "/" },
            { name: "Hardware", path: "/hardware" },
            { name: "Kasse", path },
          ]),
          faqPageJsonLd(faqs),
        ]}
      />
      <HomeNav variant="hardware" />
      <main>
        <PosHero />
        <PosFeatures />
        <PosHardware />
        <PosBand />
        <PosSpecs />
        <LosningerFaq />
      </main>
      <SiteCTA
        heading="La oss finne den rette løsningen for deg"
        paragraph="Enten du driver restaurant, kafé, bakeri eller en kjede, hjelper vi deg med å finne den kasseløsningen som passer best for din virksomhet."
      />
      <SiteFooter />
    </div>
  );
}
