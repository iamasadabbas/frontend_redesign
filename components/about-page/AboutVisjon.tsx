import {
  AlarmClock,
  BarChart3,
  LayoutGrid,
  ShoppingCart,
} from "lucide-react";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * About "Visjon" — "Redesign Concept" version: eyebrow + heading + intro
 * on the white 1280 panel, then a 2x2 hairline card grid (icon chip,
 * mono number, title, body). Card 01 sits on the frame tint.
 * Note: the Concept frame duplicates card 01's body text onto card 02 and
 * numbers the last card "03" — the distinct Page-1 text for card 02 is
 * kept here and the last card is numbered 04 (flagged for the client).
 */
const cards = [
  {
    Icon: ShoppingCart,
    num: "01",
    tinted: true,
    title: "Smartere salg. Bedre kundeopplevelser.",
    text: "Vi digitaliserer og forenkler hele salgsprosessen fra bestilling og betaling til kundelojalitet og oppfølging. Med rask arbeidsflyte og sømløse betalingsløsninger kan du bruke mindre tid på administrasjon og mer tid på kundene dine.",
  },
  {
    Icon: LayoutGrid,
    num: "02",
    tinted: false,
    title: "Én plattform for hele virksomheten",
    text: "Betalia samler kassesystem, betaling, enkelt lagerstyring, rapportering, kundeprogrammer og administrasjon i én skybasert plattform. Med sanntidsdata og verdifull innsikt får du et bedre beslutningsgrunnlag og full kontroll over virksomheten uansett hvor du er.",
  },
  {
    Icon: BarChart3,
    num: "03",
    tinted: false,
    title: "Teknologi som skaper vekst",
    text: "Gjennom automatisering, smarte analyser og effektive arbeidsprosesser hjelper vi virksomheter med å redusere kostnader, øke produktiviteten og skape nye vekstmuligheter. Sammen med vår betalingspartner Verifone leverer vi en sikker, stabil og fremtidsrettet betalingsopplevelse.",
  },
  {
    Icon: AlarmClock,
    num: "04",
    tinted: false,
    title: "Mer tid til det som skaper verdi",
    text: "Når rutineoppgavene automatiseres, får du mer tid til å utvikle virksomheten, styrke kundeforholdene og øke salget. Betalias mål er å være den foretrukne POS- og betalingsplattformen for norske virksomheter som ønsker en enklere, smartere og mer lønnsom hverdag.",
  },
];

export default function AboutVisjon() {
  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
        <div className="mx-auto max-w-[1280px] border-x border-[#EEE3E8] bg-white px-5 pb-[105px] pt-[88px] sm:px-8 lg:px-[32px]">
          <p
            className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
          >
            — Løsninger —
          </p>
          <h2
            className={`mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-1.2px] text-[#1A1218] lg:text-[44px] ${SANS}`}
          >
            Visjon
          </h2>
          <p className="mt-5 max-w-[660px] text-[16px] leading-[1.6] text-[#6E6168]">
            Hos Betalia tror vi at teknologi skal gjøre hverdagen enklere ikke
            mer komplisert. Derfor utvikler vi moderne POS- og
            betalingsløsninger som hjelper serveringssteder med å effektivisere
            driften, øke lønnsomheten og skape bedre kundeopplevelser.
          </p>

          <div className="mt-[48px] grid grid-cols-1 border border-[#EEE3E8] md:grid-cols-2">
            {cards.map((card, i) => (
              <div
                key={card.num}
                className={`group bg-white p-[36px] transition-colors hover:bg-[#FBF6F8] ${i % 2 === 0 ? "md:border-r md:border-[#EEE3E8]" : ""
                  } ${i < 3 ? "border-b border-[#EEE3E8]" : ""} ${i === 2 ? "md:border-b-0" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#FBF6F8] text-[#AE4D70] transition-colors group-hover:bg-[#AE4D70] group-hover:text-white">
                    <card.Icon size={22} />
                  </span>
                  <span
                    className={`text-[12px] leading-none tracking-[1.2px] text-[#9A8C93] ${MONO}`}
                  >
                    {card.num}
                  </span>
                </div>
                <h3
                  className={`mt-[28px] text-[24px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#1A1218] ${SANS}`}
                >
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#6E6168]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
