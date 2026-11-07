import type { Metadata } from "next";

import { aboutSans, homeMono, homeSans } from "@/app/fonts";
import HomeNav from "@/components/home/HomeNav";
import BackofficeHero from "@/components/hardware-page/BackofficeHero";
import BackofficeFeatures from "@/components/hardware-page/BackofficeFeatures";
import BackofficeHoved from "@/components/hardware-page/BackofficeHoved";
import { SiteCTA, SiteFooter } from "@/components/site/SiteClosing";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, productJsonLd } from "@/lib/seo";
import { backOfficePageSeo } from "@/lib/page-seo";

const { title, description, path } = backOfficePageSeo;

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
    images: [{ url: absoluteUrl("/images/backoffice/hero-dashboard.png") }],
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
            name: "Betalia Backoffice",
            description,
            image: absoluteUrl("/images/backoffice/hero-dashboard.png"),
            category: "Restaurant management software",
          }),
          breadcrumbJsonLd([
            { name: "Hjem", path: "/" },
            { name: "Hardware", path: "/hardware" },
            { name: "Backoffice", path },
          ]),
        ]}
      />
      <HomeNav variant="hardware" />
      <main>
        <BackofficeHero />
        <BackofficeFeatures />
        <BackofficeHoved />
      </main>
      <SiteCTA
        heading="La oss finne den rette løsningen for deg"
        paragraph="Enten du driver restaurant, kafé, bakeri eller en kjede, hjelper vi deg med å finne den kasseløsningen som passer best for din virksomhet."
      />
      <SiteFooter />
    </div>
  );
}
