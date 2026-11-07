import type { Metadata } from "next";
import { faqs } from "@/components/contact/faqs";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, defaultOgImage, faqPageJsonLd } from "@/lib/seo";
import { contactPageSeo } from "@/lib/page-seo";

const { title, description, path } = contactPageSeo;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl(path),
  },
  openGraph: {
    url: absoluteUrl(path),
    title: "Kontakt Betalia",
    description,
    images: [{ url: defaultOgImage }],
  },
};

import ContactHero from "@/components/contact-page/ContactHero";
import ContactCards from "@/components/contact-page/ContactCards";
import ContactForm from "@/components/contact-page/ContactForm";
import ContactFaq from "@/components/contact-page/ContactFaq";
import HomeNav from "@/components/home/HomeNav";
import { SiteCTA, SiteFooter } from "@/components/site/SiteClosing";
import { aboutSans, homeMono, homeSans } from "../fonts";

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Kontakt Betalia",
            url: absoluteUrl(path),
            description,
          },
          faqPageJsonLd(faqs),
        ]}
      />
      <div
        className={`${aboutSans.variable} ${homeSans.variable} ${homeMono.variable} bg-concept-grid overflow-x-clip [font-family:var(--font-about-sans)]`}
      >
        <HomeNav />
        <ContactHero />
        <ContactCards />
        <ContactForm />
        <ContactFaq />
        <SiteCTA
          heading="La oss finne den rette løsningen for deg"
          paragraph="Enten du driver restaurant, kafé, bakeri eller en kjede, hjelper vi deg med å finne den kasseløsningen som passer best for din virksomhet."
        />
        <SiteFooter />
      </div>
    </>
  );
}
