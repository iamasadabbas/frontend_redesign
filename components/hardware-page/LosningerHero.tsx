"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Cloud, Globe, Headphones } from "lucide-react";
import { useRegistrationModal } from "@/hooks/useRegistrationModal";
import HeroVisualBox from "./HeroVisualBox";

const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Løsninger hero — "Redesign Concept" version: white panel,
 * eyebrow chip, 56px semibold heading, the frame's two buttons,
 * the right-hand square grid box with hardware-hero.png, and the
 * four-column bordered white trust strip below a tint gap.
 */
const trust = [
  { Icon: Cloud, label: "Skybasert plattform" },
  { Icon: BarChart3, label: "Sanntidsrapportering og innsikt" },
  { Icon: Headphones, label: "24/7 support" },
  { Icon: Globe, label: "Tilgang fra hvor som helst" },
];

export default function LosningerHero() {
  const { openModal } = useRegistrationModal();

  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-b border-[#EEE3E8] bg-white px-5 pb-[64px] pt-[64px] sm:px-8 lg:px-[32px]">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-[580px] lg:flex-1">
            <span className="inline-flex items-center gap-2 rounded-[6px] border border-[#EEE3E8] bg-white px-3 py-2">
              <span className="h-[6px] w-[6px] rounded-full bg-[#AE4D70]" />
              <span
                className={`text-[10px] uppercase leading-[16px] tracking-[5px] text-[#AE4D70] ${SANS}`}
              >
                Betalia
              </span>
            </span>
            <h1
              className={`mt-[36px] max-w-[560px] text-[40px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#1A1218] sm:text-[48px] lg:text-[56px] ${SANS}`}
            >
              Kassesystem for restaurant, kafé og takeaway
            </h1>
            <p className="mt-[24px] max-w-[540px] text-[17px] leading-[1.6] text-[#6E6168]">
              Administrer salg, betalinger og rapportering fra én plattform –
              med full oversikt, enten du driver én eller flere lokasjoner.
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
                href="#muligheter"
                className={`flex h-[54px] items-center rounded-[4px] border border-[#EEE3E8] bg-white px-[28px] text-[16px] font-semibold leading-none text-[#1A1218] transition-colors hover:bg-[#FBF6F8] ${SANS}`}
              >
                Se løsninger
              </Link>
            </div>
          </div>

          <HeroVisualBox className="lg:h-[440px] lg:w-[440px] xl:h-[480px] xl:w-[540px]">
            <Image
              src="/images/hardware-hero.png"
              alt="Betalia kassesystem i bruk"
              width={1086}
              height={1448}
              priority
              className="h-[340px] w-full max-w-[380px] object-cover sm:h-[390px]"
            />
          </HeroVisualBox>
        </div>
      </div>

            {/* Tint gap + 4 separate bordered white trust cards */ }
            < div className = "mx-auto max-w-[1280px] border-x border-[#EEE3E8] bg-[#FBF6F8] px-5 py-[24px] sm:px-8 lg:px-[32px]" >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trust.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center justify-center gap-3 rounded-[8px] border border-[#EEE3E8] bg-white px-[20px] py-[16px]"
                >
                  <Icon size={20} className="shrink-0 text-[#AE4D70]" />
                  <span
                    className={`text-[14px] font-semibold leading-snug text-[#1A1218] ${SANS}`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
}
