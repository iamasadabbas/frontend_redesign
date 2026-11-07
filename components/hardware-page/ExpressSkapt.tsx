import Image from "next/image";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * "Skapt for en enklere arbeidshverdag" — "Redesign Concept"
 * version: white panel, eyebrow + heading, the text column LEFT and
 * the burger-restaurant photo RIGHT (the Page-1 build had them the
 * other way round). Copy verbatim from the frame — including its
 * "hver arbeidsdag flere kunder" line, which has no comma in the
 * frame either.
 */
export default function ExpressSkapt() {
  return (
    <section className="px-0 lg:px-[80px]">
        <div className="mx-auto max-w-[1280px] border-x border-t border-[#EEE3E8] bg-white px-5 pb-[96px] pt-[88px] sm:px-8 lg:px-[32px]">
          <p
            className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
          >
            — Selvbetjening fra Betalia —
          </p>
          <h2
            className={`mt-4 max-w-[680px] text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
          >
            Skapt for en enklere arbeidshverdag
          </h2>

          <div className="mt-[48px] grid grid-cols-1 items-start gap-[48px] lg:grid-cols-[1fr_560px]">
            <div className="max-w-[600px] space-y-5 text-[15.5px] leading-[1.65] text-[#6E6168]">
              <p>
                Gjør hver bestilling enklere, raskere og mer lønnsom med Betalia
                Express. Løsningen er utviklet for restauranter, bakerier,
                kafeer og fastfood-virksomheter som ønsker å betjene flere
                kunder, øke kapasiteten og skape en førsteklasses
                kundeopplevelse – selv når det er som travlest.
              </p>
              <p>
                Med en intuitiv og brukervennlig selvbetjeningsløsning kan
                kundene enkelt utforske menyen, bestille og betale i sitt eget
                tempo. Resultatet er kortere køer, smidigere bestillinger og
                flere salgsmuligheter, samtidig som de ansatte får mer tid til
                å levere god service.
              </p>
              <p>
                Bestillingene sendes automatisk til kjøkkenet og videre gjennom
                systemet, slik at hele prosessen flyter sømløst fra bestilling
                til servering. Det gir mindre manuelt arbeid, raskere
                ordrebehandling og en mer effektiv drift.
              </p>
              <p>
                Med Betalia Express får du mer ut av hver arbeidsdag flere
                kunder, bedre flyt og større salgspotensial. La teknologien ta
                seg av bestillingene, slik at du kan fokusere på kundene og
                veksten i virksomheten.
              </p>
            </div>

            <Image
              src="/images/express/skapt-photo.png"
              alt="Betalia Express kiosker i en burger-restaurant"
              width={1120}
              height={880}
              className="h-auto w-full rounded-[4px] object-cover lg:h-[520px]"
            />
          </div>
        </div>
    </section>
  );
}
