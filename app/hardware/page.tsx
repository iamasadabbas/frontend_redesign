import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, faqPageJsonLd } from "@/lib/seo";
import { faqs } from "@/data/faq";
import { hardwarePageSeo } from "@/lib/page-seo";
import { aboutSans, homeMono, homeSans } from "@/app/fonts";
import HomeNav from "@/components/home/HomeNav";
import LosningerHero from "@/components/hardware-page/LosningerHero";
import {
  Integrasjoner,
  Muligheter,
} from "@/components/hardware-page/LosningerSections";
import LosningerComparison from "@/components/hardware-page/LosningerComparison";
import LosningerFaq from "@/components/hardware-page/LosningerFaq";
import { SiteCTA, SiteFooter } from "@/components/site/SiteClosing";

const { title, description, path } = hardwarePageSeo;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl(path),
  },
  openGraph: {
    url: absoluteUrl(path),
    title: "Betalia kasseløsninger og hardware",
    description,
    images: [{ url: absoluteUrl("/images/hardware-hero.png") }],
  },
};

export default function HardwarePage() {
  return (
    <div className={`${aboutSans.variable} ${homeSans.variable} ${homeMono.variable} bg-concept-grid overflow-x-clip font-[family-name:var(--font-about-sans)] text-black antialiased`}>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <HomeNav variant="hardware" />
      <main>
        <LosningerHero />
        <Muligheter />
        <Integrasjoner />
        <LosningerComparison />
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
