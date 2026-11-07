import type { Metadata } from "next";
import { homeSans, homeMono, homeBody } from "./fonts";
import HomeNav from "@/components/home/HomeNav";
import HomeHero from "@/components/home/HomeHero";
import { HomeStats, HomePayments } from "@/components/home/HomeStatsPayments";
import HomeSolutions from "@/components/home/HomeSolutions";
import HomeIndustries from "@/components/home/HomeIndustries";
import HomeFeatures from "@/components/home/HomeFeatures";
import { SiteCTA, SiteFooter } from "@/components/site/SiteClosing";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, defaultOgImage, organizationJsonLd, softwareApplicationJsonLd, websiteJsonLd } from "@/lib/seo";
import { homePageSeo } from "@/lib/page-seo";

export const metadata: Metadata = {
  title: homePageSeo.title,
  description: homePageSeo.description,
  alternates: {
    canonical: absoluteUrl(homePageSeo.path),
  },
  openGraph: {
    url: absoluteUrl(homePageSeo.path),
    title: homePageSeo.title,
    description: homePageSeo.description,
    images: [{ url: defaultOgImage }],
  },
};

/**
 * Home — pixel-matched rebuild (2026-11-05) from the Figma frame
 * "Betalia - Hjem" (1440 x 4754): sections stack Nav 70 / Hero 800 /
 * Stats 184 / Payments 90 / Løsninger 955 / Bransjer 862 / Funksjoner 865 /
 * CTA 531 / Footer 407, all inners 1280 wide on the #FBF6F8 frame tint.
 * Assets are the actual Figma exports (public/images/home/*).
 * The global navbar is suppressed for "/" in NavbarSwitcher.
 */
export default function Home() {
  return (
    <div
      className={`${homeSans.variable} ${homeMono.variable} ${homeBody.variable} bg-concept-grid overflow-x-clip [font-family:var(--font-home-body)]`}
    >
      <JsonLd
        data={[
          organizationJsonLd({ email: "sales@betalia.com" }),
          websiteJsonLd(),
          softwareApplicationJsonLd(),
        ]}
      />
      <HomeNav />
      <HomeHero />
      <HomeStats />
      <HomeSolutions />
      <HomeIndustries />
      <HomeFeatures />
      <HomePayments />
      <SiteCTA
        heading="Bygget for vekst. Skapt for suksess."
        paragraph="Enten du driver restaurant, kafé, bakeri eller en kjede — vi hjelper deg å finne kasseløsningen som passer best for din virksomhet."
      />
      <SiteFooter />
    </div>
  );
}
