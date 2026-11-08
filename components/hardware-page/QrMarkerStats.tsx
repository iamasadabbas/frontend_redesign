const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Provisjon line + stats — "Redesign Concept" version: the old
 * Permanent-Marker line is replaced by a clean semibold line
 * ("0 % provisjon" in rose) over three contiguous white stat boxes
 * on the frame tint. Labels/values = the codebase's resolved stats.
 */
const stats: [string, string][] = [
  ["Reduserte personalkostnader", "−25%"],
  ["Fra QR til bestilling", "50s"],
  ["Mer omsetning per kunde", "+25%"],
];

export default function QrMarkerStats() {
  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
        <div className="mx-auto max-w-[1280px] border-x border-[#EEE3E8] bg-[#FBF6F8] px-5 pb-[64px] pt-[64px] sm:px-8 lg:px-[32px]">
          <h2
            className={`text-center text-[32px] font-semibold leading-[1.15] tracking-[-1px] text-[#1A1218] sm:text-[36px] lg:text-[40px] ${SANS}`}
          >
            <span className="text-[#AE4D70]">0 % provisjon</span> på
            nettbestillinger til Betalia
          </h2>

          <div className="mt-[40px] grid grid-cols-1 border border-[#EEE3E8] bg-white sm:grid-cols-3">
            {stats.map(([label, value], i) => (
              <div
                key={label}
                className={`p-[28px] ${i > 0 ? "border-t border-[#EEE3E8] sm:border-l sm:border-t-0" : ""
                  }`}
              >
                <p
                  className={`text-[11px] uppercase leading-none tracking-[2px] text-[#9A8C93] ${MONO}`}
                >
                  {label}
                </p>
                <p
                  className={`mt-4 text-[44px] font-semibold leading-none tracking-[-1.5px] text-[#1A1218] ${SANS}`}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
