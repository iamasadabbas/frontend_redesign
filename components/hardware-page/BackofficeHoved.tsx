import Image from "next/image";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * "Hovedkontor" — "Redesign Concept" version: white panel, eyebrow +
 * heading, the text column LEFT and the tablet photo RIGHT (the
 * Page-1 build had them the other way round, with the sentence as
 * the eyebrow). Copy verbatim from the frame.
 */
export default function BackofficeHoved() {
  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
        <div className="mx-auto max-w-[1280px] border-x border-t border-[#EEE3E8] bg-white px-5 pb-[96px] pt-[88px] sm:px-8 lg:px-[32px]">
          <p
            className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
          >
            — Administrer flere restauranter på ett sted —
          </p>
          <h2
            className={`mt-4 text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
          >
            Hovedkontor
          </h2>

          <div className="mt-[40px] grid grid-cols-1 items-start gap-[48px] lg:grid-cols-2 xl:grid-cols-[1fr_560px]">
            <div className="max-w-[600px] space-y-5 text-[15.5px] leading-[1.65] text-[#6E6168]">
              <p>
                Driver du flere restauranter eller avdelinger, kan du enkelt
                administrere alle virksomhetene samlet i samme plattform. Bytt
                raskt mellom avdelinger, få sentralisert oversikt og
                administrer ansatte og tilgangsnivåer på tvers av lokasjoner.
              </p>
              <p>
                Du bestemmer hvilke ansatte som skal ha tilgang til hvilke
                avdelinger, noe som gir bedre kontroll, sikkerhet og en mer
                effektiv administrasjon av hele virksomheten.
              </p>
              <p>
                Den brukervennlige og moderne løsningen er utviklet for å gjøre
                restaurantdriften enklere, mer effektiv og mer oversiktlig –
                enten du driver én restaurant eller flere lokasjoner.
              </p>
            </div>

            <Image
              src="/images/backoffice/hovedkontor.png"
              alt="Betalia Backoffice rapporter på et nettbrett"
              width={1120}
              height={880}
              className="h-auto w-full rounded-[4px] object-cover"
            />
          </div>
        </div>
    </section>
  );
}
