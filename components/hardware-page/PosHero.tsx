"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRegistrationModal } from "@/hooks/useRegistrationModal";
import HeroVisualBox from "./HeroVisualBox";

const SANS = "[font-family:var(--font-home-sans)]";

/**
 * POS hero — "Redesign Concept" version: white panel with faint 88px
 * plus-mark grid, eyebrow chip, two-tone heading, buttons on the left;
 * bordered 560x500 square grid box with radial pink glow and "+" corner
 * marks on the right, containing the opaque silver terminal.
 */
export default function PosHero() {
  const { openModal } = useRegistrationModal();

  return (
    <section className="px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-[#EEE3E8] bg-white px-5 pb-[88px] pt-[64px] sm:px-8 lg:px-[32px]">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="max-w-[580px]">
            <span className="inline-flex items-center gap-2 rounded-[6px] border border-[#EEE3E8] bg-white px-3 py-2">
              <span className="h-[6px] w-[6px] rounded-full bg-[#AE4D70]" />
              <span
                className={`text-[10px] uppercase leading-[16px] tracking-[5px] text-[#AE4D70] ${SANS}`}
              >
                Betalia POS
              </span>
            </span>
            <h1
              className={`mt-[36px] text-[40px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#1A1218] sm:text-[48px] lg:text-[56px] ${SANS}`}
            >
              Moderne kasse
              <span className="block">
                &amp; <span className="text-[#AE4D70]">POS-system</span>
              </span>
            </h1>
            <p className="mt-[24px] max-w-[540px] text-[17px] leading-[1.6] text-[#6E6168]">
              I Betalia har vi satt oss som mål å utvikle den beste
              kasseløsningen for serveringsbransjen, en løsning som forenkler
              hverdagen, effektiviserer driften og gir en bedre opplevelse for
              både ansatte og gjester.
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

          <HeroVisualBox className="lg:h-[500px] lg:w-[580px]">
            <Image
              src="/images/pos/hero-terminal.png"
              alt="Betalia POS-terminal sett bakfra"
              width={775}
              height={600}
              priority
              className="h-auto w-full max-w-[490px] object-contain"
            />
          </HeroVisualBox>
        </div>
      </div>
    </section>
  );
}
