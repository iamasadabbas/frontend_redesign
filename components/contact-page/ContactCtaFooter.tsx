"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { useRegistrationModal } from "@/hooks/useRegistrationModal";

/**
 * Contact CTA card + footer, pixel-matched to the Figma "Kontakt"
 * frame: white card (1144 x 259, radius 28) overlapping the top of
 * the same centred gradient footer block as "Om oss" (1489 x 692,
 * radius 20). Measured: card top y2819, bottom y3077; footer top
 * y2964 (113px overlap), bottom y3656 (page end). Footer content
 * sits at the same page heights as the About footer; only the top
 * padding differs (255 vs 300) because this frame's footer starts
 * lower.
 */

const solutionFooterLinks = [
  { label: "Kasse", href: "/hardware/cashier" },
  { label: "Online & QR bestilling", href: "/hardware/online-qr" },
  { label: "Selvbetjent kasse", href: "/hardware/self-kiosk" },
  { label: "Kunde display", href: "/hardware/display" },
  { label: "Kjøkkenskjerm(KDS)", href: "/hardware/ksd" },
  { label: "Backoffice", href: "/hardware/back-office" },
];

const betaliaFooterLinks = [
  { label: "Om oss", href: "/about" },
  { label: "Support", href: "/contact" },
  { label: "Løsninger", href: "/hardware" },
  { label: "Logg inn", href: "/vendor/login" },
];

const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Instagram, label: "Instagram" },
];

export default function ContactCtaFooter({
  footerHeightClass = "lg:h-[692px]",
  footerMtClass = "lg:-mt-[113px]",
}: {
  footerHeightClass?: string;
  footerMtClass?: string;
} = {}) {
  const { openModal } = useRegistrationModal();

  return (
    <div className="px-4 lg:px-0">
      {/* CTA card */}
      <div className="relative z-10 mx-auto mt-[137px] flex w-full max-w-[1144px] flex-col items-center gap-8 rounded-[28px] border border-[#B74E6F]/10 bg-white px-6 py-10 shadow-[0_24px_60px_-24px_rgba(52,25,104,0.35),0_4px_16px_rgba(0,0,0,0.08)] lg:h-[259px] lg:translate-x-[4px] lg:flex-row lg:items-center lg:gap-0 lg:px-[48px] lg:py-0">
        <h2 className="w-full max-w-[310px] shrink-0 text-center text-[36px] leading-[35px] text-[#733A72]">
          La oss finne den rette løsningen for deg
        </h2>
        <div className="w-full flex-1 lg:ml-[74px]">
          <p className="text-[18px] leading-[28px] tracking-[-0.1px] text-black/60">
            Enten du driver restaurant, kafé, bakeri eller en kjede, hjelper
            vi deg med å finne den kasseløsningen som passer best for din
            virksomhet.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              openModal({
                email: String(fd.get("email") || ""),
              });
            }}
            className="mt-[25px] flex h-[64px] items-stretch overflow-hidden rounded-[14px] bg-white shadow-[0_2px_4px_-2px_rgba(0,0,0,0.10),0_4px_6px_-1px_rgba(0,0,0,0.10)]"
          >
            <label className="flex flex-1 items-center gap-3 px-[20px]">
              <Mail size={20} className="shrink-0 text-slate-400" />
              <input
                type="email"
                name="email"
                required
                placeholder="E-postadresse"
                className="w-full bg-transparent text-[16px] text-black outline-none placeholder:text-black/45"
              />
            </label>
            <button
              type="submit"
              className="w-[281px] shrink-0 bg-[#341968] text-[16px] font-medium text-white transition-opacity hover:opacity-90 max-md:w-auto max-md:px-4"
            >
              Få et uforpliktende tilbud
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className={`relative mx-auto -mt-[70px] w-full max-w-[1489px] overflow-hidden rounded-[20px] text-white ${footerMtClass} ${footerHeightClass}`}>
        <Image
          src="/images/footer_background.webp"
          alt=""
          fill
          className="object-cover"
          sizes="1489px"
        />
        {/* Vertical wordmark */}
        <Image
          src="/images/betalia_vertical_logo_burgundy.png"
          alt="Betalia"
          width={112}
          height={400}
          className="absolute left-[29px] top-[38px] hidden lg:block"
        />

        <div className="relative flex flex-col gap-12 px-6 pb-[120px] pt-[120px] lg:flex-row lg:items-start lg:gap-0 lg:pl-[48px] lg:pr-[48px] lg:pt-[255px] xl:pl-[170px] xl:pr-[110px]">
          <p className="w-full max-w-[597px] shrink-0 text-[46px] font-bold leading-[40px] lg:mt-[91px]">
            <span className="block">ENKELT Å BRUKE</span>
            <span className="ml-[45px] block text-white/60">
              FULLT AV MULIGHETER
            </span>
          </p>

          <nav className="lg:ml-[36px] xl:ml-[66px]">
            <p className="text-[20px] font-medium leading-[24px]">Løsninger</p>
            <ul className="mt-[44px] space-y-[15px]">
              {solutionFooterLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] leading-[24px] text-white/85 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:ml-[48px] xl:ml-[127px]">
            <p className="text-[20px] font-medium leading-[24px]">Betalia</p>
            <ul className="mt-[44px] space-y-[15px]">
              {betaliaFooterLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] leading-[24px] text-white/85 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Socials */}
        <div className="absolute bottom-[105px] left-[57px] hidden gap-[12px] lg:flex">
          {socials.map(({ Icon, label }) => (
            <span
              key={label}
              aria-label={label}
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/35 text-white"
            >
              <Icon size={18} />
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-[85px] left-[55px] right-[160px] hidden h-px bg-white/15 lg:block" />
        <p className="absolute bottom-[45px] left-[57px] hidden text-[13px] leading-[20px] text-white/60 lg:block">
          © 2026 Betalia. All rights reserved. - Betalia.No Org nr: 937 988 710
        </p>
      </footer>
    </div>
  );
}
