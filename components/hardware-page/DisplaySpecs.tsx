const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Display specifications — "Redesign Concept" version: panel-less
 * section on the frame tint (grid background), eyebrow + heading
 * left, the spec table as a white bordered card right. The Concept
 * frame's labels are Norwegian (Skjermoppløsning / Tilkobling /
 * Kompatibilitet) where the Page-1 build's were English, and its
 * inch marks are the frame's double backticks — both as designed.
 */
const specs: [string, string][] = [
  ["Display", "Støtte opptil 65` skjerm"],
  ["Skjermoppløsning", "1920 × 1200 IPS Touch"],
  ["Tilkobling", "Wi-Fi & Ethernet"],
  ["Kompatibilitet", "Fungerer med Betalia Kasse"],
];

export default function DisplaySpecs() {
  return (
    <section className="px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] px-5 pb-[88px] pt-[80px] sm:px-8 lg:px-[32px]">
        <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-[440px_1fr] lg:gap-[64px]">
          <div>
            <p
              className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
            >
              — Spesifikasjoner —
            </p>
            <h2
              className={`mt-4 text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
            >
              Den smarte plattformen for moderne kundedialog.
            </h2>
          </div>

          <div className="border border-[#EEE3E8] bg-white px-[28px] py-[6px]">
            {specs.map(([label, value], i) => (
              <div
                key={label}
                className={`flex items-center py-[21px] ${
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
