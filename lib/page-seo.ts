// Single source of truth for marketing-page titles/descriptions, consumed by
// both each page's own `metadata` export and the /llms.txt route — so the
// copy is written once and never drifts between the two.
import { defaultDescription } from "@/lib/seo";

export type PageSeoEntry = {
  path: string;
  title: string;
  description: string;
};

export const homePageSeo: PageSeoEntry = {
  path: "/",
  title: "Betalia - Kassesystem for restaurant, kafé og servering",
  description: defaultDescription,
};

export const aboutPageSeo: PageSeoEntry = {
  path: "/about",
  title: "Om oss",
  description:
    "Les om Betalia - vårt mål er å bygge den beste kasseløsningen for restaurant, kafé og takeaway i Norge.",
};

export const contactPageSeo: PageSeoEntry = {
  path: "/contact",
  title: "Kontakt oss",
  description:
    "Ta kontakt med Betalia for salg, support eller partnersamarbeid. Vi hjelper deg med å finne den beste kasseløsningen for din restaurant eller kafé.",
};

export const hardwarePageSeo: PageSeoEntry = {
  path: "/hardware",
  title: "Kasseløsninger og hardware",
  description:
    "Utforsk Betalias kassesystem for restaurant, kafé og takeaway - kasse, selvbetjening, kjøkkenskjerm, kundedisplay og online bestilling i ett system.",
};

export const cashierPageSeo: PageSeoEntry = {
  path: "/hardware/cashier",
  title: "Kasseløsning for restaurant og servering",
  description:
    "Betalia kasseløsning utviklet for serveringsbransjen - forenkler hverdagen, effektiviserer driften og gir en bedre opplevelse for ansatte og gjester.",
};

export const selfKioskPageSeo: PageSeoEntry = {
  path: "/hardware/self-kiosk",
  title: "Selvbetjent kasse / kiosk",
  description:
    "Effektiviser serveringen med selvbetjening fra Betalia. Gi gjestene en rask, intuitiv bestillingsopplevelse og reduser køer i de travleste periodene.",
};

export const displayPageSeo: PageSeoEntry = {
  path: "/hardware/display",
  title: "Kunde- og bestillingsstatusskjerm",
  description:
    "Betalia bestillingsstatusskjerm lar kundene følge statusen på bestillingen sin i sanntid, med automatisk oppdatering når ordren endrer status.",
};

export const ksdPageSeo: PageSeoEntry = {
  path: "/hardware/ksd",
  title: "Kjøkkenskjerm (KDS)",
  description:
    "Betalia Kjøkkenskjerm effektiviserer kommunikasjonen mellom servering og kjøkken, med sanntidsoversikt over alle aktive bestillinger.",
};

export const onlineQrPageSeo: PageSeoEntry = {
  path: "/hardware/online-qr",
  title: "Online bestilling og QR-bestilling",
  description:
    "Betalia er en alt-i-ett plattform for online bestilling og QR-bestilling, utviklet for restauranter, takeaway og fastfood. Gjester bestiller og betaler direkte fra mobilen.",
};

export const backOfficePageSeo: PageSeoEntry = {
  path: "/hardware/back-office",
  title: "Backoffice - en smartere måte å drive restaurant på",
  description:
    "Betalia Backoffice gir full kontroll over hele virksomheten i én plattform - administrer salg, ordre, ansatte, menyer, rapporter og drift i sanntid.",
};

export const hardwareProductPages: PageSeoEntry[] = [
  cashierPageSeo,
  selfKioskPageSeo,
  displayPageSeo,
  ksdPageSeo,
  onlineQrPageSeo,
  backOfficePageSeo,
];

/** All public marketing pages, in the order they should be listed/sitemapped. */
export const marketingPages: PageSeoEntry[] = [
  homePageSeo,
  aboutPageSeo,
  contactPageSeo,
  hardwarePageSeo,
  ...hardwareProductPages,
];
