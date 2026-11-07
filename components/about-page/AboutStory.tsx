"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRegistrationModal } from "@/hooks/useRegistrationModal";

const SANS = "[font-family:var(--font-home-sans)]";

/**
 * About hero — "Redesign Concept" version: white 1280 panel on the
 * #FBF6F8 frame tint, faint plus-grid inside, left-aligned copy.
 * (The old Page-1 intro block with corner photos is gone in Concept.)
 * Panel anchors: chip ~159, H1 two lines 66px, buttons ~455-510,
 * dark section starts at 640.
 */
export default function AboutStory() {
  const { openModal } = useRegistrationModal();

  return (
    <section className="px-0 lg:px-[80px]">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden border-x border-[#EEE3E8] bg-white px-5 pb-[94px] pt-[68px] sm:px-8 lg:px-[32px]">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-[6px] border border-[#EEE3E8] bg-white px-3 py-2">
            <span className="h-[6px] w-[6px] rounded-full bg-[#AE4D70]" />
            <span
              className={`text-[10px] uppercase leading-[16px] tracking-[5px] text-[#AE4D70] ${SANS}`}
            >
              Our story
            </span>
          </span>

          <h1
            className={`mt-[36px] text-[44px] font-semibold leading-[1.06] tracking-[-2.2px] text-[#1A1218] sm:text-[56px] lg:text-[66px] ${SANS}`}
          >
            Bygget for vekst.
            <span className="block text-[#AE4D70]">Skapt for suksess.</span>
          </h1>

          <p className="mt-[24px] max-w-[560px] text-[18px] leading-[1.55] text-[#6E6168]">
            Effektiviser driften, spar tid og skap bedre kundeopplevelser med
            en komplett kasseløsning utviklet for moderne serveringssteder.
          </p>

          <div className={`mt-[40px] flex flex-wrap items-center gap-3 ${SANS}`}>
            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-[6px] bg-[#AE4D70] px-[26px] py-4 text-[15px] font-semibold leading-none text-white transition-opacity hover:opacity-90"
            >
              Kontakt oss
              <ArrowRight size={16} />
            </Link>
            <button
              onClick={openModal}
              className="rounded-[6px] border border-[#EEE3E8] bg-white px-[26px] py-4 text-[15px] font-semibold leading-none text-[#1A1218] transition-colors hover:bg-[#FBF6F8]"
            >
              Få et tilbud
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
