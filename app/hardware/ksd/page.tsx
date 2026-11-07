import type { Metadata } from "next";

import { aboutSans, homeMono, homeSans } from "@/app/fonts";
import HomeNav from "@/components/home/HomeNav";
import KsdHero from "@/components/hardware-page/KsdHero";
import KsdFeatures from "@/components/hardware-page/KsdFeatures";
import KsdSpecs from "@/components/hardware-page/KsdSpecs";
import { SiteCTA, SiteFooter } from "@/components/site/SiteClosing";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, productJsonLd } from "@/lib/seo";
import { ksdPageSeo } from "@/lib/page-seo";

const { title, description, path } = ksdPageSeo;

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
    images: [{ url: absoluteUrl("/images/kds-display.jpg") }],
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
            name: "Betalia Kjøkkenskjerm (KDS)",
            description,
            image: absoluteUrl("/images/kds-display.jpg"),
            category: "Kitchen display system",
          }),
          breadcrumbJsonLd([
            { name: "Hjem", path: "/" },
            { name: "Hardware", path: "/hardware" },
            { name: "Kjøkkenskjerm", path },
          ]),
        ]}
      />
      <HomeNav variant="hardware" />
      <main>
        <KsdHero />
        <KsdFeatures />
        <KsdSpecs />
      </main>
      <SiteCTA
        heading="La oss finne den rette løsningen for deg"
        paragraph="Enten du driver restaurant, kafé, bakeri eller en kjede, hjelper vi deg med å finne den kasseløsningen som passer best for din virksomhet."
      />
      <SiteFooter />
    </div>
  );
}
