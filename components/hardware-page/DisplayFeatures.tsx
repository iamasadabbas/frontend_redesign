import { Eye, Link2, PenLine, RefreshCw } from "lucide-react";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Display features — "Redesign Concept" version: no section heading;
 * the white panel carries a 2x2 divided card grid (first card tinted,
 * icon chips, numbers top-right). Copy verbatim from the frame —
 * the fourth title's trailing full stop is the frame's own.
 */
const cards = [
  {
    Icon: Eye,
    title: "Skap trygghet med full oversikt",
    body: "La kundene følge bestillingen sin i sanntid. Tydelige statusoppdateringer reduserer usikkerhet, minimerer spørsmål og bidrar til en mer profesjonell og sømløs kundeopplevelse.",
  },
  {
    Icon: PenLine,
    title: "Tilpass etter din merkevare",
    body: "Tilpass ordrestatuskjermen med bedriftens logo, farger og visuelle profil. Vis kampanjer, tilbud, produktnyheter eller annen viktig informasjon mens kundene venter på bestillingen – en effektiv måte å styrke merkevaren, kommunisere med kundene og skape økt mersalg.",
  },
  {
    Icon: RefreshCw,
    title: "Optimaliser driften med sanntidsoppdateringer",
    body: "Reduser behovet for manuell kommunikasjon mellom kjøkken og ansatte. Effektive arbeidsflyter sørger for raskere servering, færre feil og en bedre opplevelse for både ansatte og kunder.",
  },
  {
    Icon: Link2,
    title: "Hold bestillingene i flyt gjennom hele serveringen.",
    body: "Oppdater ordrestatus med ett trykk, og endringene synkroniseres umiddelbart mellom kjøkkenskjermen, kassen, online og kundedisplayet. Alle involverte har alltid tilgang til oppdatert informasjon i sanntid.",
  },
];

export default function DisplayFeatures() {
  return (
    <section className="px-0 lg:px-[80px]">
        <div className="mx-auto max-w-[1280px] border-x border-b border-[#EEE3E8] bg-white px-5 pb-[80px] pt-[56px] sm:px-8 lg:px-[32px]">
          <div className="grid grid-cols-1 border border-[#EEE3E8] md:grid-cols-2">
            {cards.map(({ Icon, title, body }, i) => (
              <article
                key={title}
                className={`p-[32px] ${i === 0 ? "bg-[#FBF6F8]" : "bg-white"} ${i % 2 === 1 ? "border-t border-[#EEE3E8] md:border-l md:border-t-0" : ""
                  } ${i >= 2 ? "border-t border-[#EEE3E8]" : ""} ${i === 2 ? "md:border-t" : ""
                  }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-[48px] w-[48px] items-center justify-center rounded-[8px] ${i === 0
                        ? "bg-[#AE4D70] text-white"
                        : "bg-[#FBF6F8] text-[#AE4D70]"
                      }`}
                  >
                    <Icon size={22} />
                  </span>
                  <span
                    className={`text-[13px] leading-none text-[#9A8C93] ${MONO}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className={`mt-[24px] text-[24px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#1A1218] ${SANS}`}
                >
                  {title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.55] text-[#6E6168]">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
    </section>
  );
}
