"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRegistrationModal } from "@/hooks/useRegistrationModal";
import HeroVisualBox from "./HeroVisualBox";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Express hero — "Redesign Concept" version: white panel, eyebrow chip,
 * heading, paragraph and buttons on the left; bordered square grid box
 * with radial pink glow and "+" corner marks on the right; then a tint
 * gap and the three-stat white bordered bar below.
 */
const stats: [string, string][] = [
  ["Raskere betjening", "70 %"],
  ["Bedre kundeopplevelse", "99%"],
  ["Mer omsetning per kunde", "+25%"],
];

export default function ExpressHero() {
  const { openModal } = useRegistrationModal();

  return (
    <section className="px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-b border-[#EEE3E8] bg-white px-5 pb-[72px] pt-[64px] sm:px-8 lg:px-[32px]">
        <div className="flex flex-col items-center gap-10 xl:flex-row">
          <div className="max-w-[580px]">
            <span className="inline-flex items-center gap-2 rounded-[6px] border border-[#EEE3E8] bg-white px-3 py-2">
              <span className="h-[6px] w-[6px] rounded-full bg-[#AE4D70]" />
              <span
                className={`text-[10px] uppercase leading-[16px] tracking-[5px] text-[#AE4D70] ${SANS}`}
              >
                Betalia Express
              </span>
            </span>
            <h1
              className={`mt-[36px] text-[40px] font-semibold leading-[1.1] tracking-[-1.8px] text-[#1A1218] sm:text-[48px] lg:text-[56px] ${SANS}`}
            >
              Effektiv servering med selvbetjening fra Betalia
            </h1>
            <p className="mt-[24px] max-w-[540px] text-[17px] leading-[1.6] text-[#6E6168]">
              Gi gjestene en rask og intuitiv bestillingsopplevelse med
              Betalia selvbetjening. Reduser køer, avlast personalet og skap
              en mer effektiv drift selv i de travleste periodene.
            </p>
            <div className="mt-[36px] flex flex-wrap gap-4">
              <button
                onClick={() => openModal()}
                className={`flex h-[54px] items-center gap-2 rounded-[4px] bg-[#AE4D70] px-[28px] text-[16px] font-semibold leading-none text-white transition-opacity hover:opacity-90 ${SANS}`}
              >
                Få et tilbud
                <ArrowRight size={18} />
              </button>
              <Link
                href="/hardware"
                className={`flex h-[54px] items-center rounded-[4px] border border-[#EEE3E8] bg-white px-[28px] text-[16px] font-semibold leading-none text-[#1A1218] transition-colors hover:bg-[#FBF6F8] ${SANS}`}
              >
                Se løsninger
              </Link>
            </div>
          </div>

          <HeroVisualBox className="xl:h-[520px] xl:w-[560px]">
            <Image
              src="/images/express/hero-kiosk-concept.png"
              alt="Betalia Express selvbetjeningskiosk"
              width={244}
              height={510}
              priority
              className="h-auto max-h-[440px] w-auto max-w-[230px] object-contain"
            />
          </HeroVisualBox>
        </div>
      </div>

          {/* 3-column bordered white stats bar flush under hero */}
          <div className="mx-auto max-w-[1280px] border-x border-b border-[#EEE3E8] bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {stats.map(([label, value], i) => (
                <div
                  key={label}
                  className={`px-[32px] py-[28px] ${i > 0 ? "border-t border-[#EEE3E8] sm:border-l sm:border-t-0" : ""
                    }`}
                >
                  <p
                    className={`text-[11px] uppercase leading-none tracking-[2px] text-[#9A8C93] ${MONO}`}
                  >
                    {label}
                  </p>
                  <p
                    className={`mt-3 text-[44px] font-semibold leading-none tracking-[-1.5px] text-[#1A1218] ${SANS}`}
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
