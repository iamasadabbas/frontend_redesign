import type { Metadata } from "next";

import { aboutSans, homeMono, homeSans } from "@/app/fonts";
import HomeNav from "@/components/home/HomeNav";
import DisplayHero from "@/components/hardware-page/DisplayHero";
import DisplayFeatures from "@/components/hardware-page/DisplayFeatures";
import DisplaySpecs from "@/components/hardware-page/DisplaySpecs";
import { SiteCTA, SiteFooter } from "@/components/site/SiteClosing";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, productJsonLd } from "@/lib/seo";
import { displayPageSeo } from "@/lib/page-seo";

const { title, description, path } = displayPageSeo;

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
    images: [{ url: absoluteUrl("/images/display/hero-photo.png") }],
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
            name: "Betalia Display",
            description,
            image: absoluteUrl("/images/display/hero-photo.png"),
            category: "Customer display",
          }),
          breadcrumbJsonLd([
            { name: "Hjem", path: "/" },
            { name: "Hardware", path: "/hardware" },
            { name: "Kunde display", path },
          ]),
        ]}
      />
      <HomeNav variant="hardware" />
      <main>
        <DisplayHero />
        <DisplayFeatures />
        <DisplaySpecs />
      </main>
      <SiteCTA
        heading="La oss finne den rette løsningen for deg"
        paragraph="Enten du driver restaurant, kafé, bakeri eller en kjede, hjelper vi deg med å finne den kasseløsningen som passer best for din virksomhet."
      />
      <SiteFooter />
    </div>
  );
}
