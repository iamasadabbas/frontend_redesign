export const comparisonProducts = [
  {
    id: "cashier",
    name: "Betalia POS",
    image: "/images/hardware/comp-1.png",
    description:
      "En komplett kasseløsning som sikrer rask, enkel og effektiv betaling og betjening i restauranter og serveringssteder.",

    specs: {
      payments: [
        "Kort",
        "Kontant",
        "Gavekort",
        "Bærebarterminal",
      ],
      power: [
        "Strømtilkobling",
      ],
      connectivity: [
        "Wi-Fi og Ethernet",
      ],
      bestFor: [
        "Resturant",
        "Bakeri",
        "Kafé",
        "Fastfood",
      ],
    },
  },

  {
    id: "online-qr",
    name: "Online & QR",
    image: "/images/online-qr-ordering.webp",
    description:
      "La kundene utforske menyen og bestille enkelt på nett eller ved å skanne en QR-kode.",

    specs: {
      payments: [
        "Kort",
        "Betaling ved kassa / Betaling kontant ved henting",
        "Gavekort",
      ],
      power: [
        "Skybasert løsning",
      ],
      connectivity: [
        "Internett",
      ],
      bestFor: [
        "Bestilling via QR-kode",
        "Nettbestillinger",
        "Kontaktløs bestilling og servering",
      ],
    },
  },

  {
    id: "self-kiosk",
    name: "Betalia Express",
    image: "/images/hardware/comp-3.png",
    description:
      "En moderne selvbetjeningsløsning som reduserer køer, effektiviserer bestillingsprosessen og gir kundene en raskere og enklere handleopplevelse.",

    specs: {
      payments: [
        "Kort",
        "Gavekort",
        "Betaling ved kassa",
      ],
      power: [
        "Strømtilkobling",
      ],
      connectivity: [
        "Wi-Fi og Ethernet",
      ],
      bestFor: [
        "Selvbetjent bestilling",
        "Rask og effektiv servering",
        "Restauranter med rask og uformell servering",
      ],
    },
  },

  {
    id: "display",
    name: "KundeDisplay",
    image: "/images/display-ordering.webp",
    description:
      "Med Betalia Bestillingsstatusskjerm kan kundene enkelt følge statusen på bestillingen sin i sanntid, slik at de alltid vet når maten er klar for henting.",

    specs: {
      payments: [
        "Kun visning – ingen betalingsfunksjon",
      ],
      power: [
        "Eget skjerm",
      ],
      connectivity: [
        "Eget skjerm",
      ],
      bestFor: [
        "Visning og kontroll av bestillinger",
      ],
    },
  },

  {
    id: "ksd",
    name: "KjøkkenPluss",
    image: "/images/kds.webp",
    description:
      "Administrer kjøkkenbestillinger digitalt, med sanntidsoversikt over ordrestatus og tilberedning. Løsningen gir bedre arbeidsflyt, færre feil og mer effektiv håndtering av bestillinger.",

    specs: {
      payments: [
        "Ikke relevant –",
      ],
      power: [
        "Eget skjerm",
      ],
      connectivity: [
        "Wi-Fi og Ethernet",
      ],
      bestFor: [
        "Effektiv arbeidsflyt på kjøkkenet",
        "Ordrehåndtering",
        "Oppfølging av tilberedningsstatus",
      ],
    },
  },

  {
    id: "backoffice",
    name: "BackOffice",
    image: "/images/backoffice/hero-dashboard.png",
    description:
      "Få full kontroll over rapporter, menyer, ansatte og flere avdelinger og mye mer, samlet i ett oversiktlig administrasjonspanel.",

    specs: {
      payments: [
        "Ikke relevant",
      ],
      power: [
        "Skybasert plattform",
      ],
      connectivity: [
        "Internett",
      ],
      bestFor: [] as string[],
    },
  },
];