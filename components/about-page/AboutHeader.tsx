"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRegistrationModal } from "@/hooks/useRegistrationModal";

/**
 * About-only header, pixel-matched to the Figma "Om oss" frame's
 * "1920w light" header: 80px white bar, 48px side padding, B-mark logo
 * (34x51), Løsninger / Support links, pink "Få et tilbud" text action
 * and "Kundeportal" on the right. Other pages keep their own header
 * via NavbarSwitcher.
 */
export default function AboutHeader() {
  const { openModal } = useRegistrationModal();

  return (
    <header className="relative bg-white">
      <div className="flex h-[80px] items-center px-6 lg:px-[48px]">
        <Link href="/" className="shrink-0" aria-label="Betalia hjem">
          <Image
            src="/images/betalia_logo_burgundy.png"
            alt="Betalia"
            width={34}
            height={51}
            priority
          />
        </Link>

        <nav className="ml-[76px] hidden items-center gap-[38px] lg:flex">
          <Link
            href="/hardware"
            className="text-[16px] font-semibold leading-[24px] text-black"
          >
            Løsninger
          </Link>
          <Link
            href="/contact"
            className="text-[16px] font-semibold leading-[24px] text-black"
          >
            Support
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-[28px]">
          <button
            onClick={openModal}
            className="hidden items-center gap-[6px] text-[16px] font-semibold leading-[24px] text-[#AE4D70] transition-opacity hover:opacity-80 md:flex"
          >
            Få et tilbud
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
          <Link
            href="/vendor/login"
            className="hidden text-[16px] font-semibold leading-[24px] text-black md:block"
          >
            Kundeportal
          </Link>
        </div>
      </div>
    </header>
  );
}
