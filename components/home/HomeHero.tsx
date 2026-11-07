"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRegistrationModal } from "@/hooks/useRegistrationModal";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

const HERO_TAGS = [
  "Verifone-partner",
  "Vipps",
  "BankAxept",
  "Skybasert",
];

/** Hero — Figma: 1440 outer, inner 1280 white panel, side borders #EEE3E8,
 *  padding 88/32, gap 56. Copy column 578 wide, gap 28. */
export default function HomeHero() {
  const { openModal } = useRegistrationModal();

  return (
    <section className="px-0 lg:px-[80px]">
      <div className="mx-auto flex max-w-[1280px] flex-col border-x border-[#EEE3E8] bg-white px-5 py-14 sm:px-8 lg:h-[701px] lg:flex-row lg:items-center lg:gap-[56px] lg:px-[32px] lg:py-[88px]">
        {/* Copy */}
        <div className="flex w-full max-w-[578px] flex-col gap-[28px]">
          {/* Eyebrow chip */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-[6px] border border-[#EEE3E8] px-3 py-2">
              <span className="h-[6px] w-[6px] rounded-full bg-[#AE4D70]" />
              <span className={`text-[10px] uppercase leading-[16px] tracking-[5px] text-[#AE4D70] ${SANS}`}>
                Moderne løsninger. Et steg foran
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1 className={`text-[44px] font-semibold leading-[1.06] tracking-[-2.2px] text-[#1A1218] sm:text-[56px] lg:text-[66px] ${SANS}`}>
            Ta virksomheten til neste nivå
            <span className="block text-[#AE4D70]">
              med smarte kasseløsninger
            </span>
          </h1>

          {/* Subhead */}
          <p className="max-w-[540px] text-[18px] leading-[1.55] text-[#6E6168]">
            Effektiviser hele virksomheten med én komplett plattform for
            bestilling, betaling, rapportering, lagerstyring og
            kundeopplevelser.
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap items-center gap-3 ${SANS}`}>
            <button
              onClick={() => openModal()}
              className="flex items-center gap-3 rounded-[6px] bg-[#AE4D70] px-[26px] py-4 text-[15px] font-semibold leading-none text-white transition-opacity hover:opacity-90"
            >
              Få et tilbud
              <ArrowRight size={16} />
            </button>
            <Link
              href="/hardware"
              className="rounded-[6px] border border-[#EEE3E8] bg-white px-[26px] py-4 text-[15px] font-semibold leading-none text-[#1A1218] transition-colors hover:bg-[#FBF6F8]"
            >
              Se løsninger
            </Link>
          </div>
        </div>

        {/* Visual — 580x500 frame: faint grid, pink glow, corner marks,
            exported hardware image + 4-tag strip at bottom */}
        <div className="relative mt-10 flex w-full flex-col items-center justify-between border border-[#EEE3E8] pt-8 md:mt-14 md:h-[500px] md:w-[580px] md:shrink-0 md:pt-0 lg:mt-0">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #F7E6EE 1px, transparent 1px), linear-gradient(to bottom, #F7E6EE 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[380px] md:w-[380px]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(221,166,190,0.4), rgba(221,166,190,0))",
            }}
          />
          <span aria-hidden className="pointer-events-none absolute -left-[4px] -top-[7px] text-[14px] leading-none text-[#DDA6BE]">+</span>
          <span aria-hidden className="pointer-events-none absolute -right-[4px] -top-[7px] text-[14px] leading-none text-[#DDA6BE]">+</span>
          <span aria-hidden className="pointer-events-none absolute -bottom-[7px] -left-[4px] text-[14px] leading-none text-[#DDA6BE]">+</span>
          <span aria-hidden className="pointer-events-none absolute -bottom-[7px] -right-[4px] text-[14px] leading-none text-[#DDA6BE]">+</span>
          <Image
            src="/images/home/hero-hardware.png"
            alt="Betalia kassesystem"
            width={560}
            height={373}
            priority
            className="relative z-10 h-auto w-full max-w-[540px] px-4 md:mt-[38px] md:w-[540px] md:px-0"
          />
          <div className="relative z-10 mt-6 grid w-full grid-cols-2 border-t border-[#EEE3E8] bg-white/85 sm:grid-cols-4 md:mt-auto">
            {HERO_TAGS.map((tag, i) => (
              <span
                key={tag}
                className={`flex h-[42px] items-center justify-center px-2 text-center text-[10px] uppercase leading-none tracking-[1.4px] text-[#6E6168] ${MONO} ${
                  i > 0 ? "border-t border-[#EEE3E8] sm:border-l sm:border-t-0" : ""
                } ${i % 2 === 1 ? "border-l border-[#EEE3E8]" : ""}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
