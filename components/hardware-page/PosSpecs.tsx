const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * POS specifications — "Redesign Concept" version: white panel,
 * eyebrow + heading on the left, double-bordered two-column spec table
 * on the right (mono rose labels, values with the frame's em-dash).
 */
const specs: [string, string][] = [
  ["Skjerm", "15.6`` Full HD berøringsskjerm"],
  ["Prossesor", "Octa-Core Performance Prosessor"],
  ["Minne", "8 GB RAM"],
  ["Lagring", "128 GB SSD"],
  ["Betaling", "Integrasjon med Verifone-terminaler"],
  ["Tilkobling", "Wi-Fi, Ethernet & Bluetooth"],
  ["Kvitteringsprinter", "Ekstern USB-kvitteringsskriver"],
  ["Operativsystem", "Android POS Platform"],
];

export default function PosSpecs() {
  return (
    <section className="px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-b border-[#EEE3E8] bg-white px-5 pb-[96px] pt-[88px] sm:px-8 lg:px-[32px]">
        <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-[400px_1fr] lg:gap-[64px]">
          <div>
            <p
              className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
            >
              — Specs —
            </p>
            <h2
              className={`mt-4 text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
            >
              Utviklet for profesjonell drift
            </h2>
          </div>

          <div className="border border-[#EEE3E8] bg-white px-[28px] py-[6px]">
            {specs.map(([label, value], i) => (
              <div
                key={label}
                className={`flex items-center py-[22px] ${
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
