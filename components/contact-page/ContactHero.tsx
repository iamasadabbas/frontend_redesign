const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Contact hero — "Redesign Concept" version: white 1280 panel with the
 * faint plus-grid, eyebrow chip, two-tone 66px heading, intro line.
 * No buttons in the Concept frame.
 */
export default function ContactHero() {
  return (
    <section className="px-0 lg:px-[80px]">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden border-x border-[#EEE3E8] bg-white px-5 pb-[110px] pt-[88px] sm:px-8 lg:px-[32px]">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-[6px] border border-[#EEE3E8] bg-white px-3 py-2">
            <span className="h-[6px] w-[6px] rounded-full bg-[#AE4D70]" />
            <span
              className={`text-[10px] uppercase leading-[16px] tracking-[5px] text-[#AE4D70] ${SANS}`}
            >
              Kontakt
            </span>
          </span>

          <h1
            className={`mt-[36px] text-[44px] font-semibold leading-[1.06] tracking-[-2.2px] text-[#1A1218] sm:text-[56px] lg:text-[66px] ${SANS}`}
          >
            Velkommen til
            <span className="block">
              <span className="text-[#AE4D70]">Betalia</span> Support
            </span>
          </h1>

          <p className="mt-[24px] max-w-[640px] text-[18px] leading-[1.55] text-[#6E6168]">
            Hvordan kan vi hjelpe deg? Vi gir rask støtte, rådgivning og
            skreddersydde løsninger for salg, support og partnerskap.
          </p>
        </div>
      </div>
    </section>
  );
}
