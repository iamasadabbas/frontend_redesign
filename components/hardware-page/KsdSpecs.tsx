const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * KSD specifications — "Redesign Concept" version: PANEL-LESS section
 * on the frame tint (the grid background shows), eyebrow + heading
 * left, the spec table as a white bordered card right. The first
 * value is the frame's own verbatim text — "Opptill 24``" with a
 * double l and two backticks, exactly as in the codebase's render.
 */
const specs: [string, string][] = [
  ["Skjerm", "Opptill 24``"],
  ["Ordreoppdatering", "Synkronisering i sanntid"],
  ["Tilkobling", "Wi-Fi & Ethernet"],
  ["Kjøkkenstasjoner", "Ubegrenset støtte for kjøkkenstasjoner"],
  ["Integrasjon", "Betalia POS & Online Ordering"],
];

export default function KsdSpecs() {
  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
      <div className="mx-auto max-w-[1280px] px-5 pb-[104px] pt-[96px] sm:px-8 lg:px-[32px]">
        <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-[400px_1fr] lg:gap-[64px]">
          <div>
            <p
              className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
            >
              — Spesifikasjoner —
            </p>
            <h2
              className={`mt-4 text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
            >
              Utviklet for maksimal effektivitet
            </h2>
          </div>

          <div className="border border-[#EEE3E8] bg-white px-5 py-[6px] sm:px-[28px]">
            {specs.map(([label, value], i) => (
              <div
                key={label}
                className={`flex flex-col items-start gap-2 py-[18px] sm:flex-row sm:items-center sm:gap-4 sm:py-[24px] ${
                  i > 0 ? "border-t border-[#EEE3E8]" : ""
                }`}
              >
                <span
                  className={`w-full text-[11px] uppercase leading-snug tracking-[2px] text-[#AE4D70] sm:w-[40%] sm:shrink-0 sm:leading-none ${MONO}`}
                >
                  {label}
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
