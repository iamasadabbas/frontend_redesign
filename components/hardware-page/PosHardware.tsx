import Image from "next/image";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * POS hardware — "Redesign Concept" version (Løsninger- BetaliaPOS.png):
 * 1280px inner container on solid #FBF6F8 tint with side borders,
 * eyebrow + heading, a 2x2 grid of numbered white chips on the left
 * and the annotated hardware diagram on the right (mix-blend-multiply
 * so its white canvas blends into #FBF6F8).
 */
const items = [
  "Betalia kasse",
  "Kasseskuff",
  "Betalingsterminal",
  "Kvitteringsskriver",
];

export default function PosHardware() {
  return (
    <section className="px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-[#EEE3E8] bg-[#FBF6F8] px-5 pb-[96px] sm:px-8 lg:px-[32px]">
        <p
          className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
        >
          — Hardware —
        </p>
        <h2
          className={`mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
        >
          Betalia Hardware
        </h2>

        <div className="mt-[32px] grid grid-cols-1 items-start gap-[40px] lg:grid-cols-[1fr_620px]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((item, i) => (
              <p
                key={item}
                className="flex items-center gap-2.5 border border-[#EEE3E8] bg-white px-4 py-[14px]"
              >
                <span className={`text-[12px] leading-none text-[#9A8C93] ${MONO}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[#D8C3CD]">-</span>
                <span
                  className={`text-[14px] font-semibold leading-none text-[#1A1218] ${SANS}`}
                >
                  {item}
                </span>
              </p>
            ))}
          </div>

          <Image
            src="/images/pos/diagram.png"
            alt="Betalia hardware: kasse, kasseskuff, betalingsterminal og kvitteringsskriver"
            width={880}
            height={515}
            className="h-auto w-full mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
