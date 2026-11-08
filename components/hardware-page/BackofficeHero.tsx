"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRegistrationModal } from "@/hooks/useRegistrationModal";

const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Backoffice hero — "Redesign Concept" version: white panel,
 * eyebrow chip, heading, paragraph and buttons on the left;
 * the frame's grid-backed dashboard desk visual on the right.
 */
export default function BackofficeHero() {
  const { openModal } = useRegistrationModal();

  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-b border-[#EEE3E8] bg-white px-5 pb-[72px] pt-[64px] sm:px-8 lg:px-[32px]">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-[580px] lg:flex-1">
            <span className="inline-flex items-center gap-2 rounded-[6px] border border-[#EEE3E8] bg-white px-3 py-2">
              <span className="h-[6px] w-[6px] rounded-full bg-[#AE4D70]" />
              <span
                className={`text-[10px] uppercase leading-[16px] tracking-[5px] text-[#AE4D70] ${SANS}`}
              >
                Betalia Backoffice
              </span>
            </span>
            <h1
              className={`mt-[36px] text-[40px] font-semibold leading-[1.1] tracking-[-1.8px] text-[#1A1218] sm:text-[48px] lg:text-[56px] ${SANS}`}
            >
              En smartere måte å drive restaurant på
            </h1>
            <p className="mt-[24px] max-w-[540px] text-[17px] leading-[1.6] text-[#6E6168]">
              Betalia Backoffice samler salg, ordre, ansatte, menyer og
              rapporter i én oversiktlig plattform. Administrer driften i
              sanntid, uansett hvor du er. Dashboardet viser dagens
              omsetning, bestillinger og populære produkter, slik at du kan
              ta bedre beslutninger og følge utviklingen.
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

          <div className="relative mx-auto w-full max-w-[540px] shrink-0 lg:ml-auto lg:mr-0 lg:w-[440px] xl:w-[540px]">
            <Image
              src="/images/backoffice/hero-dashboard-concept.png"
              alt="Betalia Backoffice dashboard på en skjerm"
              width={518}
              height={472}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
