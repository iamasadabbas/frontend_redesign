import Image from "next/image";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * KSD features — "Redesign Concept" version: white panel; eyebrow +
 * heading + intro; five numbered hairline rows on the left, the
 * in-kitchen KDS photo on the right. Copy verbatim from the frame
 * (= the codebase's texts).
 */
const features: [string, string][] = [
  [
    "Papirløst kjøkken",
    "Erstatt papirboner med en digital og oversiktlig arbeidsflyt.",
  ],
  [
    "Sanntidsvarsler",
    "Motta nye bestillinger umiddelbart med lydvarsling",
  ],
  [
    "Optimalisert ordrehåndtering",
    "Prioriter, administrer og fullfør bestillinger raskt og effektivt.",
  ],
  [
    "Fleksible skjermoppsett",
    "Tilpass visningen etter kjøkkenets arbeidsflyt og behov.",
  ],
  [
    "Støtte for opptil 24\" skjerm",
    "Optimalisert for profesjonelle kjøkkenskjermer og nettbrett.",
  ],
];

export default function KsdFeatures() {
  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
        <div className="mx-auto max-w-[1280px] border-x border-b border-[#EEE3E8] bg-white px-5 pb-[104px] pt-[88px] sm:px-8 lg:px-[32px]">
          <p
            className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
          >
            — Live kjøkken display —
          </p>
          <h2
            className={`mt-4 max-w-[640px] text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
          >
            Smart kjøkkenstyring i sanntid
          </h2>
          <p className="mt-4 max-w-[680px] text-[16px] leading-[1.6] text-[#6E6168]">
            Gi kjøkkenpersonalet verktøyene de trenger for å levere raskere og
            mer presist. Betalia Kjøkkenskjerm samler alle bestillinger i én
            digital oversikt, automatiserer kommunikasjonen og skaper en mer
            effektiv arbeidsflyt fra bestilling til servering.
          </p>

          <div className="mt-[48px] grid grid-cols-1 items-start gap-[48px] lg:grid-cols-2 xl:grid-cols-[1fr_560px]">
            <div>
              {features.map(([title, body], i) => (
                <div
                  key={title}
                  className={`flex gap-5 py-[22px] ${i > 0 ? "border-t border-[#EEE3E8]" : "pt-0"
                    }`}
                >
                  <span
                    className={`w-[28px] shrink-0 pt-[4px] text-[12px] leading-none text-[#9A8C93] ${MONO}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className={`text-[18px] font-semibold leading-[1.3] tracking-[-0.3px] text-[#1A1218] ${SANS}`}
                    >
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] leading-[1.55] text-[#6E6168]">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Image
              src="/images/ksd/feature-kds.png"
              alt="Kjøkkenskjerm i bruk i et profesjonelt kjøkken"
              width={1120}
              height={880}
              className="h-auto w-full rounded-[4px] object-cover"
            />
          </div>
        </div>
    </section>
  );
}
