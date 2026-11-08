import { Blocks, Cloud, UtensilsCrossed, Zap } from "lucide-react";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * POS features — "Redesign Concept" version (Løsninger- BetaliaPOS.png):
 * 1280px inner container on solid #FBF6F8 tint with side borders,
 * eyebrow + heading + intro, then four flat white cards in one divided row.
 */
const features = [
  {
    Icon: UtensilsCrossed,
    title: "Komplett løsning for serveringsbransjen",
    body: "Administrer bestillinger, betalinger, bord, kjøkken, kunder og ansatte fra ett samlet system som effektiviserer den daglige driften.",
  },
  {
    Icon: Cloud,
    title: "Skybasert og alltid tilgjengelig",
    body: "Få tilgang til virksomheten din hvor som helst. Alle data synkroniseres automatisk, slik at du alltid har oppdatert informasjon.",
  },
  {
    Icon: Zap,
    title: "Rask og brukervennlig",
    body: "Et intuitivt kassesystem som gjør det enkelt for ansatte å komme raskt i gang og ekspedere kunder effektivt med minimal opplæring.",
  },
  {
    Icon: Blocks,
    title: "Integrasjoner som sparer tid",
    body: "Koble Betalia sømløst mot regnskap, betalingsterminaler, nettbestillinger og andre tjenester for en mer effektiv arbeidsflyt.",
  },
];

export default function PosFeatures() {
  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-[#EEE3E8] bg-[#FBF6F8] px-5 pb-[88px] pt-[88px] sm:px-8 lg:px-[32px]">
        <p
          className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
        >
          — Fordeler —
        </p>
        <h2
          className={`mt-4 max-w-[640px] text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
        >
          Funksjoner som gjør hverdagen enklere
        </h2>
        <p className="mt-4 max-w-[640px] text-[16px] leading-[1.6] text-[#6E6168]">
          Alt du trenger for en enklere drift, samlet i ett brukervennlig
          system. Få bedre oversikt og mer tid til gjestene dine.
        </p>

        <div className="mt-[48px] grid grid-cols-1 border border-[#EEE3E8] bg-white sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, body }, i) => (
            <article
              key={title}
              className={`group bg-white p-[28px] transition-colors hover:bg-[#FBF6F8] ${
                i > 0 ? "border-t border-[#EEE3E8] sm:border-l sm:border-t-0" : ""
              } ${i >= 2 ? "border-t border-[#EEE3E8] sm:border-t lg:border-t-0" : ""}`}
            >
              <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#FBF6F8] text-[#AE4D70] transition-colors group-hover:bg-[#AE4D70] group-hover:text-white">
                <Icon size={22} />
              </span>
              <h3
                className={`mt-[24px] text-[20px] font-semibold leading-[1.3] tracking-[-0.3px] text-[#1A1218] ${SANS}`}
              >
                {title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-[#6E6168]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
