import type { Metadata } from "next";

import { aboutSans, homeMono, homeSans } from "@/app/fonts";
import HomeNav from "@/components/home/HomeNav";
import ExpressHero from "@/components/hardware-page/ExpressHero";
import ExpressVelg from "@/components/hardware-page/ExpressVelg";
import ExpressSkapt from "@/components/hardware-page/ExpressSkapt";
import ExpressTable from "@/components/hardware-page/ExpressTable";
import PosBand from "@/components/hardware-page/PosBand";
import { SiteCTA, SiteFooter } from "@/components/site/SiteClosing";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, productJsonLd } from "@/lib/seo";
import { selfKioskPageSeo } from "@/lib/page-seo";

const { title, description, path } = selfKioskPageSeo;

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
    images: [{ url: absoluteUrl("/images/express/hero-art.png") }],
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
            name: "Betalia Selvbetjent Kasse",
            description,
            image: absoluteUrl("/images/express/hero-art.png"),
            category: "Self-service kiosk",
          }),
          breadcrumbJsonLd([
            { name: "Hjem", path: "/" },
            { name: "Hardware", path: "/hardware" },
            { name: "Selvbetjent kasse", path },
          ]),
        ]}
      />
      <HomeNav variant="hardware" />
      <main>
        <ExpressHero />
        <ExpressVelg />
        <ExpressSkapt />
        <PosBand />
        <ExpressTable />
      </main>
      <SiteCTA
        heading="La oss finne den rette løsningen for deg"
        paragraph="Enten du driver restaurant, kafé, bakeri eller en kjede, hjelper vi deg med å finne den kasseløsningen som passer best for din virksomhet."
      />
      <SiteFooter />
    </div>
  );
}
