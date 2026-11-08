"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Cookie, ShieldCheck, X } from "lucide-react";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

export type LegalTab = "personvern" | "cookies";

type LegalSection = {
  num: string;
  title: string;
  blocks: (
    | { type: "p"; text: string }
    | { type: "subheading"; text: string }
    | { type: "list"; items: { bold?: string; text: string }[] }
    | { type: "info"; rows: [string, string][] }
  )[];
};

const PERSONVERN_SECTIONS: LegalSection[] = [
  {
    num: "01",
    title: "Innledning",
    blocks: [
      {
        type: "p",
        text: "Hos Betalia tar vi personvern og informasjonssikkerhet på alvor. Vi er opptatt av at kunder, samarbeidspartnere og sluttbrukere skal føle seg trygge når de benytter våre tjenester.",
      },
      {
        type: "p",
        text: "Denne personvernerklæringen forklarer hvordan Betalia samler inn, bruker, lagrer og beskytter personopplysninger, hvilke rettigheter du har, og hvordan du kan kontakte oss ved spørsmål om personvern.",
      },
      {
        type: "p",
        text: "Behandling av personopplysninger skjer i samsvar med gjeldende personvernlovgivning, herunder EUs personvernforordning (GDPR) og den norske personopplysningsloven.",
      },
    ],
  },
  {
    num: "02",
    title: "Hvem er ansvarlig for personopplysningene?",
    blocks: [
      {
        type: "p",
        text: "Betalia leverer digitale løsninger for kassasystemer, betaling, bestilling og administrasjon av virksomheter.",
      },
      {
        type: "info",
        rows: [
          ["Virksomhet", "Betalia"],
          ["Organisasjonsnummer", "937 988 710"],
          ["Nettside", "www.betalia.no"],
          ["E-post", "hei@betalia.no"],
          ["Adresse", "Strandveien 20, 3050 Mjøndalen"],
        ],
      },
      {
        type: "p",
        text: "Betalia kan ha ulike roller ved behandling av personopplysninger:",
      },
      {
        type: "list",
        items: [
          {
            bold: "Behandlingsansvarlig:",
            text: "Når vi behandler personopplysninger om våre egne kunder, kontaktpersoner, potensielle kunder og besøkende på nettsiden.",
          },
          {
            bold: "Databehandler:",
            text: "Når vi behandler personopplysninger på vegne av virksomheter som benytter Betalias kassasystem, nettbestilling, selvbetjening eller andre tjenester.",
          },
        ],
      },
      {
        type: "p",
        text: "Når Betalia opptrer som databehandler, er det normalt virksomheten som benytter løsningen, som bestemmer formålet med og grunnlaget for behandlingen.",
      },
    ],
  },
  {
    num: "03",
    title: "Hvilke personopplysninger behandler vi?",
    blocks: [
      {
        type: "p",
        text: "Avhengig av hvilke tjenester som benyttes, kan vi behandle følgende opplysninger:",
      },
      { type: "subheading", text: "Kunde- og kontaktinformasjon" },
      {
        type: "list",
        items: [
          { text: "Navn og kontaktinformasjon" },
          { text: "Telefonnummer og e-postadresse" },
          { text: "Virksomhetsnavn og organisasjonsnummer" },
          { text: "Fakturaadresse og faktureringsinformasjon" },
          { text: "Brukeridentifikasjon og tilgangsrettigheter" },
        ],
      },
      { type: "subheading", text: "Bestillings- og transaksjonsinformasjon" },
      {
        type: "list",
        items: [
          { text: "Bestillingshistorikk og kjøpsinformasjon" },
          { text: "Tidspunkt og beløp for transaksjoner" },
          { text: "Valgt betalingsmetode og betalingsstatus" },
          { text: "Informasjon om rabatter, gavekort og kundekonto" },
          { text: "Leveringsadresse og kontaktinformasjon ved levering" },
        ],
      },
      { type: "subheading", text: "Teknisk informasjon" },
      {
        type: "list",
        items: [
          { text: "IP-adresse" },
          { text: "Enhets- og nettleserinformasjon" },
          { text: "Systemlogger og feilmeldinger" },
          { text: "Brukeraktivitet knyttet til drift og sikkerhet" },
          { text: "Informasjon om bruk av våre digitale tjenester" },
        ],
      },
      { type: "subheading", text: "Kundeklubb og lojalitetsprogram" },
      {
        type: "p",
        text: "Dersom en virksomhet benytter Betalias funksjoner for kunderegister eller lojalitetsprogram, kan opplysninger som kontaktinformasjon, kjøpshistorikk, opptjente fordeler og bonuspoeng behandles.",
      },
      {
        type: "p",
        text: "Vi begrenser innsamlingen til opplysninger som er nødvendige for relevante og lovlige formål.",
      },
    ],
  },
  {
    num: "04",
    title: "Hva bruker vi personopplysningene til?",
    blocks: [
      { type: "p", text: "Vi behandler personopplysninger for å:" },
      {
        type: "list",
        items: [
          { text: "Levere, administrere og vedlikeholde våre tjenester." },
          { text: "Gjennomføre og registrere bestillinger og transaksjoner." },
          { text: "Administrere kundeforhold, abonnementer og fakturering." },
          { text: "Tilby teknisk support og kundeservice." },
          { text: "Sikre stabil drift, forebygge misbruk og beskytte systemene." },
          { text: "Oppfylle rettslige forpliktelser, blant annet innen bokføring og dokumentasjon." },
          { text: "Forbedre funksjonalitet, brukervennlighet og tjenestekvalitet." },
          { text: "Sende relevant informasjon og markedsføring der dette er lovlig." },
        ],
      },
      {
        type: "p",
        text: "Vi bruker ikke personopplysninger til formål som er uforenlige med de opprinnelige formålene uten et gyldig rettslig grunnlag.",
      },
    ],
  },
  {
    num: "05",
    title: "Rettslig grunnlag for behandlingen",
    blocks: [
      {
        type: "p",
        text: "Betalia behandler personopplysninger når minst ett av følgende rettslige grunnlag foreligger:",
      },
      { type: "subheading", text: "Avtale – GDPR artikkel 6 nr. 1 bokstav b" },
      {
        type: "p",
        text: "Når behandlingen er nødvendig for å inngå eller oppfylle en avtale med den registrerte.",
      },
      { type: "subheading", text: "Rettslig forpliktelse – GDPR artikkel 6 nr. 1 bokstav c" },
      {
        type: "p",
        text: "Når behandling er nødvendig for å oppfylle lovpålagte krav, eksempelvis bokførings- og regnskapsregler.",
      },
      { type: "subheading", text: "Berettiget interesse – GDPR artikkel 6 nr. 1 bokstav f" },
      {
        type: "p",
        text: "Når behandlingen er nødvendig for legitime interesser, som driftssikkerhet, forebygging av misbruk og forbedring av tjenester, forutsatt at den registrertes interesser og rettigheter ikke veier tyngre.",
      },
      { type: "subheading", text: "Samtykke – GDPR artikkel 6 nr. 1 bokstav a" },
      {
        type: "p",
        text: "Når behandlingen krever samtykke, eksempelvis for bestemte typer markedsføring eller ikke-nødvendige informasjonskapsler. Samtykke kan trekkes tilbake når som helst, uten at det påvirker lovligheten av behandling som allerede er gjennomført.",
      },
      {
        type: "p",
        text: "Når Betalia er databehandler, er det den behandlingsansvarlige virksomheten som skal fastsette et gyldig behandlingsgrunnlag.",
      },
    ],
  },
  {
    num: "06",
    title: "Betaling og betalingsinformasjon",
    blocks: [
      {
        type: "p",
        text: "Betalia kan integreres med eksterne betalingsleverandører for å muliggjøre sikre betalingstransaksjoner.",
      },
      {
        type: "p",
        text: "Betalingsopplysninger behandles i samsvar med den aktuelle betalingsleverandørens sikkerhetskrav og personvernbestemmelser. Betalia kan behandle informasjon som transaksjonsbeløp, betalingsstatus, transaksjonsreferanse og tidspunkt for betaling.",
      },
      {
        type: "p",
        text: "Håndtering av kortinformasjon og andre sensitive betalingsdata avhenger av den konkrete betalingsintegrasjonen og ansvarsfordelingen mellom Betalia og betalingsleverandøren.",
      },
    ],
  },
  {
    num: "07",
    title: "Deling av personopplysninger",
    blocks: [
      {
        type: "p",
        text: "Vi selger ikke personopplysninger til tredjeparter. Personopplysninger kan deles med leverandører og samarbeidspartnere når dette er nødvendig for å levere våre tjenester, eksempelvis:",
      },
      {
        type: "list",
        items: [
          { text: "Leverandører av serverdrift og skylagring." },
          { text: "Betalingsleverandører og finansielle tjenesteytere." },
          { text: "Leverandører av teknisk infrastruktur og systemintegrasjoner." },
          { text: "Leverandører av kundeservice- og kommunikasjonstjenester." },
          { text: "Offentlige myndigheter når utlevering følger av lov." },
        ],
      },
      {
        type: "p",
        text: "Når eksterne leverandører behandler personopplysninger på våre vegne, inngår vi nødvendige databehandleravtaler og stiller krav til informasjonssikkerhet og konfidensialitet.",
      },
    ],
  },
  {
    num: "08",
    title: "Lagring og sletting av personopplysninger",
    blocks: [
      {
        type: "p",
        text: "Personopplysninger lagres ikke lenger enn nødvendig for formålet de ble samlet inn for, med mindre lovgivningen krever lengre oppbevaring. Lagringstiden avhenger blant annet av opplysningstype, avtaleforhold, lovpålagte dokumentasjonskrav og behovet for sikkerhet.",
      },
      {
        type: "p",
        text: "Regnskaps- og bokføringsopplysninger oppbevares i samsvar med gjeldende lovkrav. Når opplysninger ikke lenger er nødvendige, slettes eller anonymiseres de i samsvar med gjeldende regler og våre rutiner.",
      },
      {
        type: "p",
        text: "For opplysninger Betalia behandler på vegne av kunder, reguleres sletting og tilbakelevering også av databehandleravtalen.",
      },
    ],
  },
  {
    num: "09",
    title: "Informasjonssikkerhet",
    blocks: [
      {
        type: "p",
        text: "Betalia arbeider for å beskytte personopplysninger mot uautorisert tilgang, tap, endring, misbruk og utilsiktet offentliggjøring. Sikkerhetstiltakene skal være tilpasset risikoen ved behandlingen og kan omfatte:",
      },
      {
        type: "list",
        items: [
          { text: "Tilgangsstyring og brukerautentisering." },
          { text: "Kryptering av data under overføring." },
          { text: "Sikker lagring og sikkerhetskopiering." },
          { text: "Logging og overvåking av relevante sikkerhetshendelser." },
          { text: "Oppdateringer og vedlikehold av systemer." },
          { text: "Begrensning av tilgang til autorisert personell." },
        ],
      },
      {
        type: "p",
        text: "Ved brudd på personopplysningssikkerheten følger vi gjeldende regler om håndtering, dokumentasjon og eventuell varsling.",
      },
    ],
  },
  {
    num: "10",
    title: "Informasjonskapsler (cookies)",
    blocks: [
      {
        type: "p",
        text: "Betalias nettsider og digitale tjenester kan benytte informasjonskapsler og tilsvarende teknologier. Disse kan brukes til nødvendig funksjonalitet, sikkerhet, lagring av brukerinnstillinger og, der det er aktuelt, statistikk og analyse.",
      },
      {
        type: "p",
        text: "Informasjonskapsler som krever samtykke, skal ikke benyttes før gyldig samtykke er innhentet. Besøkende skal få informasjon om hvilke informasjonskapsler som benyttes, formålene med dem, eventuell deling med tredjeparter og hvordan samtykke kan endres eller trekkes tilbake.",
      },
    ],
  },
  {
    num: "11",
    title: "Overføring av personopplysninger til utlandet",
    blocks: [
      {
        type: "p",
        text: "Dersom personopplysninger overføres til land utenfor EØS, skal Betalia sørge for at overføringen har et gyldig rettslig grunnlag og nødvendige garantier i samsvar med GDPR.",
      },
      {
        type: "p",
        text: "Dette kan blant annet innebære bruk av EU-kommisjonens standard personvernbestemmelser, der disse er relevante, og nødvendige supplerende tiltak. Informasjon om aktuelle overføringer og mottakerland gjøres tilgjengelig der dette kreves.",
      },
    ],
  },
  {
    num: "12",
    title: "Dine rettigheter",
    blocks: [
      {
        type: "p",
        text: "I henhold til personvernlovgivningen kan du, avhengig av situasjonen, ha rett til å:",
      },
      {
        type: "list",
        items: [
          { bold: "Innsyn:", text: "Få informasjon om hvilke personopplysninger som behandles om deg." },
          { bold: "Retting:", text: "Få uriktige eller ufullstendige opplysninger korrigert." },
          { bold: "Sletting:", text: "Be om sletting når vilkårene for dette er oppfylt." },
          { bold: "Begrensning:", text: "Be om at behandlingen begrenses i bestemte tilfeller." },
          { bold: "Dataportabilitet:", text: "Motta eller overføre relevante opplysninger i et strukturert format." },
          { bold: "Innsigelse:", text: "Protestere mot behandling som bygger på bestemte rettslige grunnlag." },
          { bold: "Tilbaketrekking av samtykke:", text: "Trekke tilbake et tidligere gitt samtykke." },
        ],
      },
      {
        type: "p",
        text: "Du kan kontakte oss dersom du ønsker å utøve dine rettigheter. Dersom opplysningene behandles av Betalia på vegne av en virksomhet, bør henvendelsen som hovedregel rettes til den aktuelle virksomheten. Betalia bistår den behandlingsansvarlige i samsvar med databehandleravtalen.",
      },
      {
        type: "p",
        text: "Vi besvarer henvendelser innen fristene som følger av GDPR, normalt innen én måned.",
      },
    ],
  },
  {
    num: "13",
    title: "Personopplysninger om ansatte hos våre kunder",
    blocks: [
      {
        type: "p",
        text: "Betalias løsninger kan benyttes til administrasjon av ansatte, brukertilgang, kasselogger og registrering av handlinger i kassasystemet. Slike opplysninger behandles for å støtte virksomhetens drift, sikkerhet, internkontroll og relevante dokumentasjonskrav.",
      },
      {
        type: "p",
        text: "Virksomheten som benytter Betalia, er normalt behandlingsansvarlig for opplysninger om egne ansatte. Tilgang til opplysningene skal begrenses til personer med et saklig og nødvendig behov.",
      },
    ],
  },
  {
    num: "14",
    title: "Personvern ved nettbestilling og selvbetjening",
    blocks: [
      {
        type: "p",
        text: "Når sluttkunder benytter nettbestilling, QR-bestilling eller selvbetjeningsløsninger levert av Betalia, kan personopplysninger behandles for å gjennomføre bestillinger og levere tjenestene. Dette kan omfatte kontaktinformasjon, bestillingsdetaljer, leveringsinformasjon og transaksjonsreferanser.",
      },
      {
        type: "p",
        text: "Det er normalt virksomheten som mottar bestillingen, som er behandlingsansvarlig for disse opplysningene. Betalia behandler opplysningene i samsvar med avtalte instrukser og gjeldende databehandleravtale.",
      },
    ],
  },
  {
    num: "15",
    title: "Endringer i personvernerklæringen",
    blocks: [
      {
        type: "p",
        text: "Vi kan oppdatere denne personvernerklæringen ved endringer i våre tjenester, tekniske løsninger eller gjeldende regelverk. Den nyeste versjonen vil være tilgjengelig på vår nettside, med oppdatert dato. Ved vesentlige endringer vil vi gi særskilt informasjon når dette er nødvendig.",
      },
    ],
  },
  {
    num: "16",
    title: "Kontakt og klager",
    blocks: [
      {
        type: "p",
        text: "Dersom du har spørsmål om hvordan Betalia behandler personopplysninger, eller ønsker å utøve dine personvernrettigheter, kan du kontakte oss:",
      },
      {
        type: "info",
        rows: [
          ["Virksomhet", "Betalia"],
          ["Nettside", "www.betalia.no"],
          ["E-post", "hei@betalia.no"],
          ["Adresse", "Strandveien 20, 3050 Mjøndalen"],
        ],
      },
      {
        type: "p",
        text: "Du har også rett til å klage til Datatilsynet dersom du mener at personopplysningene dine behandles i strid med gjeldende personvernregler. Mer informasjon finnes på www.datatilsynet.no.",
      },
    ],
  },
];

const COOKIES_SECTIONS: LegalSection[] = [
  {
    num: "01",
    title: "Hva er informasjonskapsler?",
    blocks: [
      {
        type: "p",
        text: "Betalia bruker informasjonskapsler (cookies) og lignende teknologier for å sikre at nettsiden fungerer optimalt, forbedre brukeropplevelsen og forstå hvordan våre digitale tjenester benyttes.",
      },
      {
        type: "p",
        text: "Informasjonskapsler er små tekstfiler som lagres på enheten din når du besøker en nettside. De kan blant annet brukes til å huske innstillinger, sikre funksjonalitet og samle statistikk om bruk av nettsiden.",
      },
      {
        type: "p",
        text: "Vi respekterer ditt personvern og ønsker å gi deg full kontroll over hvilke informasjonskapsler du tillater.",
      },
    ],
  },
  {
    num: "02",
    title: "Hvilke typer informasjonskapsler bruker vi?",
    blocks: [
      { type: "subheading", text: "Nødvendige informasjonskapsler" },
      {
        type: "p",
        text: "Disse er nødvendige for at nettsiden og dens grunnleggende funksjoner skal fungere korrekt. De kan blant annet brukes til sikkerhet, navigasjon og lagring av personverninnstillinger. Nødvendige informasjonskapsler krever normalt ikke samtykke når de er strengt nødvendige for å levere en tjeneste du har bedt om.",
      },
      { type: "subheading", text: "Statistikk og analyse" },
      {
        type: "p",
        text: "Disse hjelper oss med å forstå hvordan besøkende bruker nettsiden, hvilke sider som besøkes, og hvordan vi kan forbedre funksjonalitet og brukeropplevelse. Vi benytter slike informasjonskapsler bare når nødvendig samtykke er gitt.",
      },
      { type: "subheading", text: "Funksjonelle informasjonskapsler" },
      {
        type: "p",
        text: "Disse kan brukes til å huske valg og preferanser, eksempelvis språk eller andre brukerinnstillinger. Funksjonelle informasjonskapsler som ikke er strengt nødvendige, brukes bare etter samtykke.",
      },
      { type: "subheading", text: "Markedsføring" },
      {
        type: "p",
        text: "Markedsføringskapsler kan brukes til å måle effekten av annonser og vise mer relevant markedsføring på digitale plattformer. Slike informasjonskapsler benyttes bare dersom du har gitt samtykke.",
      },
    ],
  },
  {
    num: "03",
    title: "Hvordan bruker Betalia informasjonskapsler?",
    blocks: [
      { type: "p", text: "Informasjonskapsler kan brukes til å:" },
      {
        type: "list",
        items: [
          { text: "Sikre stabil og trygg drift av nettsiden." },
          { text: "Huske relevante innstillinger og brukerpreferanser." },
          { text: "Forbedre navigasjon og brukervennlighet." },
          { text: "Analysere besøk og bruksmønstre." },
          { text: "Måle effekten av markedsføring dersom du samtykker." },
        ],
      },
      {
        type: "p",
        text: "Vi bruker ikke informasjonskapsler som krever samtykke før du har gitt et gyldig samtykke.",
      },
    ],
  },
  {
    num: "04",
    title: "Ditt samtykke og dine valg",
    blocks: [
      {
        type: "p",
        text: "Når du besøker nettsiden vår, kan du bli bedt om å velge hvilke informasjonskapsler du ønsker å tillate. Du kan godta alle, avvise valgfrie informasjonskapsler eller tilpasse innstillingene etter dine preferanser.",
      },
      {
        type: "p",
        text: "Det skal være like enkelt å trekke tilbake et samtykke som å gi det. Du kan når som helst endre eller trekke tilbake samtykket ditt gjennom nettsidens personverninnstillinger.",
      },
    ],
  },
  {
    num: "05",
    title: "Informasjonskapsler fra tredjeparter",
    blocks: [
      {
        type: "p",
        text: "Enkelte funksjoner på nettsiden kan leveres av eksterne tjenesteleverandører. Disse kan benytte egne informasjonskapsler eller lignende teknologier når dette er nødvendig for den aktuelle tjenesten, eller når du har gitt påkrevd samtykke.",
      },
      {
        type: "p",
        text: "Vi skal informere om relevante tredjepartsleverandører, formålene med behandlingen og eventuell deling av personopplysninger.",
      },
    ],
  },
  {
    num: "06",
    title: "Hvor lenge lagres informasjonskapsler?",
    blocks: [
      {
        type: "p",
        text: "Lagringstiden varierer etter informasjonskapselens formål og funksjon. Noen informasjonskapsler slettes automatisk når nettleseren lukkes, mens andre lagres i en begrenset periode.",
      },
      {
        type: "p",
        text: "Vi skal ikke lagre informasjonskapsler lenger enn nødvendig for det aktuelle formålet. En oversikt over informasjonskapslene som faktisk brukes, inkludert leverandør, formål og lagringstid, skal være tilgjengelig i våre informasjonskapselinnstillinger.",
      },
    ],
  },
  {
    num: "07",
    title: "Behandling av personopplysninger",
    blocks: [
      {
        type: "p",
        text: "Enkelte informasjonskapsler kan innebære behandling av personopplysninger, eksempelvis IP-adresser, enhetsidentifikatorer eller informasjon om bruk av nettsiden. Når dette skjer, behandler vi opplysningene i samsvar med gjeldende personvernlovgivning.",
      },
      {
        type: "p",
        text: "Du kan lese mer om hvordan vi behandler personopplysninger i vår personvernerklæring på www.betalia.no.",
      },
    ],
  },
  {
    num: "08",
    title: "Endringer i erklæringen",
    blocks: [
      {
        type: "p",
        text: "Vi kan oppdatere denne erklæringen ved endringer i våre tjenester, informasjonskapsler eller gjeldende regelverk. Den nyeste versjonen vil alltid være tilgjengelig på nettsiden vår.",
      },
    ],
  },
  {
    num: "09",
    title: "Kontakt oss",
    blocks: [
      {
        type: "p",
        text: "Har du spørsmål om vår bruk av informasjonskapsler eller behandling av personopplysninger, kan du kontakte oss:",
      },
      {
        type: "info",
        rows: [
          ["Virksomhet", "Betalia"],
          ["Nettside", "www.betalia.no"],
          ["E-post", "hei@betalia.no"],
        ],
      },
      {
        type: "p",
        text: "Du kan også kontakte Datatilsynet dersom du mener at personopplysningene dine behandles i strid med regelverket. Mer informasjon finnes på www.datatilsynet.no.",
      },
    ],
  },
];

export default function LegalModal({
  activeTab,
  onSelectTab,
  onClose,
}: {
  activeTab: LegalTab | null;
  onSelectTab: (tab: LegalTab) => void;
  onClose: () => void;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab) {
      document.body.style.overflow = "hidden";
      scrollContainerRef.current?.scrollTo({ top: 0 });
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeTab]);

  useEffect(() => {
    if (!activeTab) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeTab, onClose]);

  if (!activeTab) return null;

  const isPersonvern = activeTab === "personvern";
  const sections = isPersonvern ? PERSONVERN_SECTIONS : COOKIES_SECTIONS;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#2A1328]/65 p-2.5 backdrop-blur-sm sm:p-5 md:p-6 lg:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        data-lenis-prevent-wheel
        onWheel={(e) => e.stopPropagation()}
        className="relative flex max-h-[92vh] max-h-[92dvh] w-full max-w-[920px] flex-col overflow-hidden rounded-[8px] border border-[#EEE3E8] bg-white shadow-2xl sm:max-h-[88vh] sm:max-h-[88dvh]"
      >
        {/* Top Header */}
        <div className="shrink-0 border-b border-[#EEE3E8] bg-[#FBF6F8] px-4 pb-3.5 pt-4 sm:px-6 sm:pb-4 sm:pt-5 md:px-8 md:pb-5 md:pt-6">
              <div className="flex items-center justify-between gap-3">
                <Image
                  src="/images/betalia_logo_burgundy.png"
                  alt="Betalia"
                  width={118}
                  height={33}
                  className="h-[24px] w-auto sm:h-[28px] md:h-[30px]"
                />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Lukk"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#EEE3E8] bg-white text-[#6E6168] transition-colors hover:bg-[#AE4D70] hover:text-white sm:h-9 sm:w-9"
                >
                  <X size={17} />
                </button>
              </div>

              {/* Tab Switcher + Title */}
              <div className="mt-3 flex flex-col gap-3 sm:mt-4 md:mt-5 md:flex-row md:items-end md:justify-between md:gap-4">
                <div className="min-w-0">
                  <span className="inline-flex max-w-full items-center gap-2 rounded-[6px] border border-[#EEE3E8] bg-white px-2.5 py-1 sm:px-3 sm:py-1.5">
                    <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#AE4D70]" />
                    <span
                      className={`truncate text-[9.5px] uppercase leading-none tracking-[1.4px] text-[#AE4D70] sm:text-[10px] sm:tracking-[2.4px] ${MONO}`}
                    >
                Sist oppdatert: 7. november 2026
              </span>
            </span>
            <h2
              className={`mt-2 break-words text-[20px] font-semibold leading-[1.18] tracking-[-0.5px] text-[#1A1218] sm:mt-2.5 sm:text-[26px] md:text-[30px] md:tracking-[-0.8px] ${SANS}`}
            >
              {isPersonvern
                ? "Personvernerklæring for Betalia"
                : "Informasjonskapsler (Cookies)"}
            </h2>
          </div>

              <div className="grid w-full shrink-0 grid-cols-2 rounded-[6px] border border-[#EEE3E8] bg-white p-1 sm:inline-flex sm:w-auto">
                <button
                  type="button"
                  onClick={() => onSelectTab("personvern")}
                  className={`flex items-center justify-center gap-2 rounded-[4px] px-3 py-2 text-[12.5px] font-semibold leading-none transition-colors sm:px-3.5 sm:text-[13px] ${SANS} ${isPersonvern
                      ? "bg-[#AE4D70] text-white"
                      : "text-[#6E6168] hover:text-[#1A1218]"
                    }`}
                >
                  <ShieldCheck size={14} className="shrink-0" />
                  <span>Personvern</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTab("cookies")}
                  className={`flex items-center justify-center gap-2 rounded-[4px] px-3 py-2 text-[12.5px] font-semibold leading-none transition-colors sm:px-3.5 sm:text-[13px] ${SANS} ${!isPersonvern
                      ? "bg-[#AE4D70] text-white"
                      : "text-[#6E6168] hover:text-[#1A1218]"
                    }`}
                >
            <Cookie size={14} className="shrink-0" />
            <span>Cookies</span>
          </button>
        </div>
      </div>
    </div>

        {/* Scrollable Content */ }
  <div
    ref={scrollContainerRef}
    className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3.5 py-4 [-webkit-overflow-scrolling:touch] sm:px-6 sm:py-6 md:px-8 md:py-7"
  >
    <div className="space-y-3 sm:space-y-4">
      {sections.map((section) => (
        <section
          key={section.num}
          className="rounded-[6px] border border-[#EEE3E8] bg-white p-4 transition-colors hover:border-[#DDA6BE] sm:p-5 md:p-6"
        >
          <div className="flex items-start gap-2.5 sm:items-baseline sm:gap-3">
            <span
              className={`mt-[2px] shrink-0 rounded-[4px] bg-[#FBF6F8] px-2 py-1 text-[10.5px] font-medium leading-none tracking-[1.2px] text-[#AE4D70] sm:mt-0 sm:text-[11px] ${MONO}`}
            >
              {section.num}
            </span>
            <h3
              className={`min-w-0 break-words text-[16px] font-semibold leading-[1.3] tracking-[-0.3px] text-[#1A1218] sm:text-[18px] md:text-[20px] ${SANS}`}
            >
              {section.title}
            </h3>
          </div>

                <div className="mt-3 space-y-2.5 break-words text-[13.5px] leading-[1.65] text-[#6E6168] sm:mt-4 sm:space-y-3 sm:text-[14.5px]">
                  {section.blocks.map((block, idx) => {
                    if (block.type === "p") {
                      return <p key={idx}>{block.text}</p>;
                    }
                    if (block.type === "subheading") {
                      return (
                        <h4
                          key={idx}
                          className={`pt-1.5 text-[14px] font-semibold text-[#1A1218] sm:pt-2 sm:text-[15px] ${SANS}`}
                        >
                          {block.text}
                        </h4>
                      );
                    }
                    if (block.type === "list") {
                      return (
                        <ul key={idx} className="space-y-1.5 pl-0.5 sm:pl-1">
                          {block.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 sm:gap-2.5">
                              <span className="mt-[2px] shrink-0 text-[#AE4D70]">
                                —
                              </span>
                              <span className="min-w-0 break-words">
                                {item.bold && (
                                  <strong className="font-semibold text-[#1A1218]">
                                    {item.bold}{" "}
                                  </strong>
                                )}
                                {item.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                            );
                    }
                    if (block.type === "info") {
                      return (
                              <div
                                key={idx}
                                className="my-2.5 rounded-[6px] border border-[#EEE3E8] bg-[#FBF6F8] px-3.5 py-1.5 sm:my-3 sm:px-4 sm:py-2"
                              >
                                {block.rows.map(([label, val], rIdx) => (
                                  <div
                                    key={label}
                                    className={`flex flex-col gap-1 py-2 sm:flex-row sm:items-baseline sm:gap-4 sm:py-2.5 ${rIdx > 0 ? "border-t border-[#EEE3E8]" : ""
                                      }`}
                                  >
                                    <span
                                      className={`w-full text-[10.5px] uppercase leading-none tracking-[1.4px] text-[#AE4D70] sm:w-[190px] sm:shrink-0 sm:text-[11px] sm:tracking-[1.5px] md:w-[210px] ${MONO}`}
                                    >
                                { label }
                              </span>
                              <span className="min-w-0 break-words text-[13.5px] font-medium text-[#1A1218] sm:text-[14px]">
                                {val}
                              </span>
                            </div>
                          ))}
                        </div>
                  );
                    }
                  return null;
                  })}
                </div>
        </section>
      ))}
          </div >
        </div >

  {/* Bottom Bar */ }
  <div className="flex shrink-0 items-center justify-between gap-3 border-t border-[#EEE3E8] bg-[#FBF6F8] px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4">
    <p className="flex min-w-0 items-center gap-2 text-[11.5px] leading-[1.35] text-[#6E6168] sm:text-[13px]">
      <ShieldCheck size={15} className="shrink-0 text-[#AE4D70]" />
      <span className="truncate sm:whitespace-normal">
        © 2026 Betalia. Alle rettigheter forbeholdt.
      </span>
    </p>
    <button
      type="button"
      onClick={onClose}
      className={`shrink-0 rounded-[6px] bg-[#AE4D70] px-4 py-2 text-[13px] font-semibold leading-none text-white transition-opacity hover:opacity-90 sm:px-6 sm:py-2.5 sm:text-[14px] ${SANS}`}
    >
      Lukk vindu
    </button>
  </div>
      </div >
    </div >
  );
}

