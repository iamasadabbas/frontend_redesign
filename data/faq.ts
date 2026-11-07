export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Hvordan fungerer Betalia POS?",
    answer:
      "Betalia POS samler bestillinger, betalinger og restaurantdrift i ett system. Du kan administrere meny, ansatte og rapporter fra én plattform.",
  },
  {
    id: 2,
    question: "Kan Betalia integreres med Wolt og Foodora?",
    answer:
      "Ja. Betalia synkroniserer automatisk meny, priser og produkter med Wolt og Foodora. Alle bestillinger kommer inn i samme system, slik at personalet slipper å håndtere flere enheter.",
  },
  {
    id: 3,
    question: "Kan jeg administrere flere restauranter?",
    answer:
      "Ja. Betalia er utviklet for både enkeltstående restauranter og kjeder. Du kan administrere flere lokasjoner fra ett administrasjonspanel.",
  },
  {
    id: 4,
    question: "Hvordan kommer jeg i gang?",
    answer:
      "Kontakt oss for en gratis demonstrasjon. Vi hjelper deg med oppsett, onboarding og opplæring slik at du kan komme raskt i gang.",
  },
];