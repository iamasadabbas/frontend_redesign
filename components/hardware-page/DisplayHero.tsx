"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRegistrationModal } from "@/hooks/useRegistrationModal";
import HeroVisualBox from "./HeroVisualBox";

const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Display hero — "Redesign Concept" version: white panel, eyebrow chip,
 * "Bestillingsstatus" heading, two paragraphs and buttons on the left;
 * bordered square grid box with radial pink glow and "+" corner marks
 * on the right.
 */
export default function DisplayHero() {
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
                Betalia Display
              </span>
            </span>
            <h1
              className={`mt-[36px] text-[40px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#1A1218] sm:text-[48px] lg:text-[56px] ${SANS}`}
            >
              Bestillingsstatus
            </h1>
            <p className="mt-[24px] max-w-[540px] text-[17px] leading-[1.6] text-[#6E6168]">
              Med Betalia Bestillingsstatusskjerm kan kundene enkelt følge
              statusen på bestillingen sin i sanntid, slik at de alltid vet
              når maten er klar for henting.
            </p>
            <p className="mt-4 max-w-[540px] text-[17px] leading-[1.6] text-[#6E6168]">
              Skjermen oppdateres automatisk når status på ordren endres i
              systemet, noe som skaper en mer effektiv og oversiktlig
              opplevelse for både kunder og ansatte.
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

          <HeroVisualBox className="xl:h-[440px] xl:w-[560px]">
            <Image
              src="/images/display/hero-screen-concept.png"
              alt="Betalia bestillingsstatus på skjerm"
              width={420}
              height={234}
              priority
              className="h-auto w-full max-w-[420px] object-contain"
            />
          </HeroVisualBox>
        </div>
      </div>
    </section>
  );
}
