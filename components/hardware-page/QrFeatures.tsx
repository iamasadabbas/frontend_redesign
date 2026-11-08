import Image from "next/image";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Online & QR features + loyalty — "Redesign Concept" version: white
 * panel; eyebrow + heading + intro; seven numbered hairline rows on
 * the left, the QR table-stand photo on the right; then the loyalty
 * block. Copy verbatim from the frame (= the codebase's texts).
 */
const features: [string, string][] = [
  [
    "Raske og kontinuerlige oppdateringer",
    "Plattformen utvikles kontinuerlig for å møte behovene til moderne restaurantdrift. Nye funksjoner, forbedringer og oppdateringer leveres sømløst uten å forstyrre den daglige driften.",
  ],
  [
    "Online bestilling på alle enheter",
    "Kundene kan enkelt bestille fra mobil, nettbrett eller PC, noe som gir en rask, fleksibel og sømløs bestillingsopplevelse – uansett hvor de befinner seg.",
  ],
  [
    "Tilpasset din merkevare",
    "Tilpass design, farger og profilering slik at bestillingsopplevelsen gjenspeiler restaurantens identitet og skaper en helhetlig kundeopplevelse.",
  ],
  [
    "Alt samlet i én plattform",
    "Betalia Online fungerer som en sentral løsning for hele virksomheten – fra online bestillinger og QR-bestilling til menyer, kontaktinformasjon, kampanjer og kundekommunikasjon.",
  ],
  [
    "Sømløs og effektiv drift",
    "Administrer takeaway, servering, levering og catering samlet på ett sted. Plattformen er direkte integrert med kassasystem, kjøkken og rapportering for en mer effektiv og oversiktlig drift.",
  ],
  [
    "Full integrasjon med restaurantdriften",
    "Alle bestillinger synkroniseres direkte med POS-systemet og kjøkkenet i sanntid, noe som reduserer feil, sparer tid og gir bedre flyt gjennom hele virksomheten.",
  ],
  [
    "Kunden følger bestillingen",
    "Følg min bestilling, kunden følger med på hele bestillingen",
  ],
];

export default function QrFeatures() {
  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
        <div className="mx-auto max-w-[1280px] border-x border-b border-[#EEE3E8] bg-white px-5 pb-[96px] pt-[88px] sm:px-8 lg:px-[32px]">
          <p
            className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
          >
            — Funksjoner —
          </p>
          <h2
            className={`mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
          >
            Online &amp; QR
          </h2>
          <p className="mt-4 max-w-[640px] text-[16px] leading-[1.6] text-[#6E6168]">
            Gjør det enkelt å bestille fra alle enheter, med din merkevare og
            sømløs kobling til den daglige driften.
          </p>

          <div className="mt-[48px] grid grid-cols-1 items-start gap-[48px] lg:grid-cols-2 xl:grid-cols-[1fr_560px]">
            <div>
              {features.map(([title, body], i) => (
                <div
                  key={title}
                  className={`flex gap-5 py-[24px] ${i > 0 ? "border-t border-[#EEE3E8]" : "pt-0"
                    }`}
                >
                  <span
                    className={`w-[28px] shrink-0 pt-[5px] text-[12px] leading-none text-[#9A8C93] ${MONO}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className={`text-[20px] font-semibold leading-[1.3] tracking-[-0.3px] text-[#1A1218] ${SANS}`}
                    >
                      {title}
                    </h3>
                    <p className="mt-2 max-w-[560px] text-[15px] leading-[1.6] text-[#6E6168]">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Image
              src="/images/onlineqr/qr-photo.png"
              alt="QR-kode på bordet i restauranten"
              width={1120}
              height={880}
              className="h-auto w-full rounded-[4px] object-cover lg:sticky lg:top-[100px]"
            />
          </div>

          {/* Loyalty block */}
          <div className="mt-[72px]">
            <h2
              className={`max-w-[620px] text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
            >
              Lojalitet som skaper faste kunder
            </h2>
            <p className="mt-4 max-w-[640px] text-[16px] leading-[1.6] text-[#6E6168]">
              Øk inntektene og styrk kundelojaliteten med Betalia Loyalty. Vårt
              smarte lojalitetssystem gjør det enkelt å lage personaliserte
              belønningsprogrammer som skaper engasjement, øker gjenkjøp og gir
              kundene en bedre opplevelse.
            </p>
          </div>
        </div>
    </section>
  );
}
