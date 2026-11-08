import Image from "next/image";
import { Cloud, Layers, Plug, Zap } from "lucide-react";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

const features = [
  {
    title: "Komplett løsning for serveringsbransjen",
    body: "Bestillinger, betalinger, bord, kjøkken, kunder og ansatte i ett samlet system.",
    Icon: Layers,
  },
  {
    title: "Integrasjoner som sparer tid",
    body: "Koble Betalia mot regnskap, betalingsterminaler, nettbestillinger og andre tjenester.",
    Icon: Plug,
  },
  {
    title: "Skybasert og alltid tilgjengelig",
    body: "Få tilgang hvor som helst. All data synkroniseres automatisk.",
    Icon: Cloud,
  },
  {
    title: "Rask og brukervennlig",
    body: "Intuitivt for ansatte — kom raskt i gang med minimal opplæring.",
    Icon: Zap,
  },
];

/** Funksjoner — inner white, padding 104/32, gap 72. Left: exported
 *  feature visual (520x657, Verifone card baked into the export).
 *  Right: eyebrow + title + hairline-separated numbered list. */
export default function HomeFeatures() {
  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 border-x border-[#EEE3E8] bg-white px-5 py-[104px] sm:px-8 lg:flex-row lg:items-center lg:gap-[48px] lg:px-[32px] xl:gap-[72px]">
        <div className="relative mx-auto w-full max-w-[520px] shrink-0 overflow-hidden rounded-[6px] lg:mx-0 lg:w-[420px] xl:w-[520px]">
          <Image
            src="/images/home/feature-visual.png"
            alt="Betalia betalingsterminal"
            width={520}
            height={657}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p
            className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
          >
            — Funksjoner —
          </p>
          <h2 className={`mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-1.6px] text-[#1A1218] lg:text-[48px] ${SANS}`}>
            <span className="block">Alt du trenger,</span>
            <span className="block">i én plattform</span>
          </h2>

          <div className="mt-[40px]">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`flex items-start gap-6 border-t border-[#EEE3E8] py-[24px] ${
                  i === features.length - 1 ? "border-b" : ""
                }`}
              >
                <span
                  className={`pt-[6px] text-[12px] leading-none text-[#6E6168] ${MONO}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className={`text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#1A1218] ${SANS}`}>
                    {f.title}
                  </h3>
                  <p className="mt-[6px] text-[15px] leading-[1.55] text-[#6E6168]">
                    {f.body}
                  </p>
                </div>
                <f.Icon
                  size={22}
                  className="mt-[2px] shrink-0 text-[#733A72]"
                  strokeWidth={1.8}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
