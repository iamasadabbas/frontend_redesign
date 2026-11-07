import type { Metadata } from "next";
import HomeNav from "@/components/home/HomeNav";
import AboutStory from "@/components/about-page/AboutStory";
import AboutDark from "@/components/about-page/AboutDark";
import AboutVisjon from "@/components/about-page/AboutVisjon";
import { SiteCTA, SiteFooter } from "@/components/site/SiteClosing";
import JsonLd from "@/components/seo/JsonLd";
import { aboutSans, homeMono, homeSans } from "../fonts";
import { absoluteUrl, defaultOgImage } from "@/lib/seo";
import { aboutPageSeo } from "@/lib/page-seo";

const { title, description, path } = aboutPageSeo;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl(path),
  },
  openGraph: {
    url: absoluteUrl(path),
    title: "Om Betalia",
    description,
    images: [{ url: defaultOgImage }],
  },
};

export default function AboutPage() {
  return (
    <div
      className={`${aboutSans.variable} ${homeSans.variable} ${homeMono.variable} bg-concept-grid overflow-x-clip [font-family:var(--font-about-sans)]`}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Om Betalia",
          url: absoluteUrl(path),
          description,
        }}
      />
      <HomeNav />
      <AboutStory />
      <AboutDark />
      <AboutVisjon />
      <SiteCTA
        heading="La oss finne den rette løsningen for deg"
        paragraph="Enten du driver restaurant, kafé, bakeri eller en kjede, hjelper vi deg med å finne den kasseløsningen som passer best for din virksomhet."
      />
      <SiteFooter />
    </div>
  );
}
