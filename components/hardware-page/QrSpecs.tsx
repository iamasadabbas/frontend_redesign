const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * "Alt du trenger" platform table — "Redesign Concept" version:
 * panel-less section on the #FBF6F8 grid tint, eyebrow + heading
 * left, bordered white two-column table card right.
 */
const specs: [string, string][] = [
  ["QR - Bestilling", "Ubegrenset antall QR-menyer"],
  ["Bestilling", "Støtter servering, takeaway og levering"],
  ["Betalinger*", "Kort & Vipps"],
  ["Menyadministrasjon", "Oppdater menyen i sanntid"],
  ["Ordrehåndtering", "Live dashboard og varslinger"],
  ["Tilgjengelighet", "Online bestilling tilgjengelig 24/7"],
  [
    "Lojalitetsprogram",
    "Belønn kunder med poeng, rabatter og personlige tilbud.",
  ],
];

export default function QrSpecs() {
  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-y border-[#EEE3E8] bg-white px-5 pb-[88px] pt-[88px] sm:px-8 lg:px-[32px]">
        <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-[400px_1fr] lg:gap-[64px]">
          <div>
            <p
              className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
            >
              — Plattform —
            </p>
            <h2
              className={`mt-4 text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
            >
              Alt du trenger
            </h2>
          </div>

          <div className="border border-[#EEE3E8] bg-white px-5 py-[6px] sm:px-[28px]">
            {specs.map(([label, value], i) => (
              <div
                key={label}
                className={`flex flex-col items-start gap-2 py-[18px] sm:flex-row sm:items-center sm:gap-4 sm:py-[21px] ${
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
