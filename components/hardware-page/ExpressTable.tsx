const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Express specifications — "Redesign Concept" version: panel-less
 * section on the #FBF6F8 grid tint, eyebrow + heading left, bordered
 * white two-column table card right.
 */
const specs: [string, string][] = [
  ["Bestilling", "Rask og intuitiv selvbetjening"],
  ["Betaling", "Integrasjon med Verifone terminal"],
  ["Meny", "Oppdater priser og produkter i sanntid"],
  ["Tilpasninger", "Ubegrensede valg, tillegg og produktvarianter"],
  ["Kjøkken", "Øyeblikkelig synkronisering med kassa og kjøkkensystem"],
  ["Administrasjon", "Skybasert kontrollpanel med innsikt og analyser"],
];

export default function ExpressTable() {
  return (
    <section className="px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-y border-[#EEE3E8] bg-white px-5 pb-[104px] pt-[88px] sm:px-8 lg:px-[32px]">
        <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-[440px_1fr] lg:gap-[64px]">
          <div>
            <p
              className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
            >
              — Specs —
            </p>
            <h2
              className={`mt-4 text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
            >
              Alt du trenger i en selvbetjeningskiosk
            </h2>
          </div>

          <div className="border border-[#EEE3E8] bg-white px-[28px] py-[6px]">
            {specs.map(([label, value], i) => (
              <div
                key={label}
                className={`flex items-center py-[27px] ${
                  i > 0 ? "border-t border-[#EEE3E8]" : ""
                }`}
              >
                <span
                  className={`w-[38%] shrink-0 text-[11px] uppercase leading-none tracking-[2px] text-[#AE4D70] ${MONO}`}
                >
                  { label }
                </span>
            <span
              className={`text-[15px] font-medium leading-[1.5] text-[#1A1218] ${SANS}`}
            >
              — {value}
            </span>
          </div>
            ))}
        </div>
      </div>
    </div>
    </section >
  );
}
