import FaqCards from "@/components/site/FaqCards";

/**
 * Contact FAQ — "Redesign Concept" version: the shared numbered-card
 * accordion. Question 01 and its answer match Kontakt.png verbatim;
 * questions 02–04 carry Norwegian answers.
 */
const items = [
  {
    question: "How quickly will someone contact me?",
    answer:
      "Når rutineoppgavene automatiseres, får du mer tid til å utvikle virksomheten, styrke kundeforholdene og øke salget. Betalias mål er å være den foretrukne POS- og betalingsplattformen for norske virksomheter som ønsker en enklere, smartere og mer lønnsom hverdag.",
  },
  {
    question: "Kan jeg bestille en demo?",
    answer:
      "Ja, absolutt. Vi viser deg gjerne plattformen og hvordan Betalia kan tilpasses arbeidsflyten i din restaurant, kafé eller kjede.",
  },
  {
    question: "Tilbyr dere onboarding-støtte?",
    answer:
      "Ja. Vi hjelper deg med oppsett, opplæring av ansatte, menykonfigurasjon og overgang fra ditt eksisterende system.",
  },
  {
    question: "Tilbyr dere maskinvare?",
    answer:
      "Ja. Vi leverer komplett maskinvare inkludert kasser, betalingsterminaler, kjøkkenskjermer, kundedisplay og selvbetjeningskiosker.",
  },
];

export default function ContactFaq() {
  return <FaqCards items={items} />;
}
