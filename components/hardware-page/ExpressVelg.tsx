import { BarChart3, Check, Percent, Users, Zap } from "lucide-react";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Express features — "Redesign Concept" version: panel-less section
 * on the frame tint (grid background); eyebrow + heading + intro,
 * then five separate white cards (three + two), titles only, with
 * icon chips and numbers. NOTE: the frame's eyebrow for this section
 * literally reads "— Spesifikasjoner —" (the specs section lower on
 * the page has its own "— Specs —"); reproduced as designed and
 * flagged in REDESIGN-NOTES.
 */
const cards = [
  { Icon: Zap, title: "Kortere køer og raskere ekspedering" },
  { Icon: BarChart3, title: "Økt kapasitet i travle perioder" },
  { Icon: Percent, title: "Færre avbrytelser ved kassen" },
  { Icon: Users, title: "Reduser arbeidsbelastningen for medarbeiderne." },
  { Icon: Check, title: "Redusert risiko for feilbestillinger" },
];

export default function ExpressVelg() {
  return (
    <section className="px-0 lg:px-[80px]">
        <div className="mx-auto max-w-[1280px] px-5 pb-[96px] pt-[88px] sm:px-8 lg:px-[32px]">
          <p
            className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
          >
            — Spesifikasjoner —
          </p>
          <h2
            className={`mt-4 max-w-[720px] text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
          >
            Den smarte plattformen for moderne kundedialog
          </h2>
          <p className="mt-4 max-w-[680px] text-[16px] leading-[1.6] text-[#6E6168]">
            Velg den løsningen som passer best for ditt lokale. Våre modeller
            kan plasseres frittstående på gulvet, monteres på veggen eller stå
            på disken. Alle modeller kan tilpasses din profil og dine ønsker,
            med valgfri farge, logo, banner og innhold på skjermen.
          </p>

          <div className="mt-[48px] grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-6">
            {cards.map(({ Icon, title }, i) => (
              <article
                key={title}
                className={`group border border-[#EEE3E8] bg-white p-[34px] transition-colors hover:bg-[#FBF6F8] ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"
                  }`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#FBF6F8] text-[#AE4D70] transition-colors group-hover:bg-[#AE4D70] group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <span
                    className={`text-[13px] leading-none text-[#9A8C93] ${MONO}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className={`mt-[32px] max-w-[340px] text-[22px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#1A1218] ${SANS}`}
                >
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
    </section>
  );
}
