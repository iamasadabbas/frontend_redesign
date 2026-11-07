import {
  Activity,
  BarChart3,
  Monitor,
  PenLine,
  Tag,
  TrendingUp,
  Users,
} from "lucide-react";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Backoffice features — "Redesign Concept" version: panel-less
 * section on the frame tint (grid background); eyebrow + heading +
 * intro, then a divided 4x2 grid — seven white icon cells and the
 * last cell dark with "Og mye mer". TWO frame copy-paste slips are
 * reproduced as designed and flagged in REDESIGN-NOTES: the eyebrow
 * reads "— Spesifikasjoner —", and the heading + intro are the
 * Display/Express text ("Den smarte plattformen for moderne
 * kundedialog" / "Velg den løsningen som passer best …"), not
 * Backoffice copy. The seven cell titles are the codebase's data.
 */
const cells = [
  { Icon: Monitor, title: "Administrere kasse, selvbetjening og online bestillinger" },
  { Icon: Activity, title: "Følge ordrestatus og aktivitet i sanntid" },
  { Icon: Tag, title: "Administrere menyer, produkter og priser" },
  { Icon: Users, title: "Håndtere ansatte og brukerroller" },
  { Icon: BarChart3, title: "Se salgsrapporter og analyser" },
  { Icon: PenLine, title: "Tilpasse branding og innstillinger" },
  { Icon: TrendingUp, title: "Få oversikt over populære produkter og omsetning" },
];

export default function BackofficeFeatures() {
  return (
    <section className="px-0 lg:px-[80px]">
        <div className="mx-auto max-w-[1280px] border-x border-[#EEE3E8] bg-[#FBF6F8] px-5 pb-[104px] pt-[88px] sm:px-8 lg:px-[32px]">
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

          <div className="mt-[48px] grid grid-cols-1 border border-[#EEE3E8] sm:grid-cols-2 lg:grid-cols-4">
            {cells.map(({ Icon, title }, i) => (
              <article
                key={title}
                className={`bg-white p-[32px] ${i % 4 !== 0 ? "lg:border-l lg:border-[#EEE3E8]" : ""
                  } ${i % 2 === 1 ? "sm:border-l sm:border-[#EEE3E8] lg:border-l" : ""} ${i >= 2 ? "border-t border-[#EEE3E8] sm:border-t lg:border-t-0" : ""
                  } ${i >= 4 ? "lg:border-t" : ""}`}
              >
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[8px] bg-[#FBF6F8] text-[#AE4D70]">
                  <Icon size={20} />
                </span>
                <h3
                  className={`mt-[24px] text-[20px] font-semibold leading-[1.35] tracking-[-0.3px] text-[#1A1218] ${SANS}`}
                >
                  {title}
                </h3>
              </article>
            ))}
            <div
              className="relative flex items-center overflow-hidden bg-[#2A1328] p-[32px] max-lg:border-t max-lg:border-[#EEE3E8] lg:border-l lg:border-[#EEE3E8] lg:border-t-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            >
              <p
                className={`relative text-[36px] font-semibold leading-[1.15] tracking-[-1px] text-white ${SANS}`}
              >
                Og mye mer
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}
