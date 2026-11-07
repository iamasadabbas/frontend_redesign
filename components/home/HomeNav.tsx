"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useRegistrationModal } from "@/hooks/useRegistrationModal";

const SOLUTIONS = [
  { img: 1, label: "Betalia POS", href: "/hardware/cashier" },
  { img: 4, label: "Kunde Display", href: "/hardware/display" },
  { img: 2, label: "Online & QR", href: "/hardware/online-qr" },
  { img: 5, label: "Betalia Express", href: "/hardware/self-kiosk" },
  { img: 3, label: "Kjøkken Pluss", href: "/hardware/ksd" },
  { img: 6, label: "BackOffice", href: "/hardware/back-office" },
];

/**
 * Shared site header from the Figma "Redesign Concept" frames:
 * - Default ("solid"): Kundeportal + solid rose "Få et tilbud →" button
 *   (used on Home, Om oss, Kontakt).
 * - "hardware": rose text "Få et tilbud →" + bold dark "Kundeportal"
 *   (used on Løsninger and the 6 hardware subpages, matching their frames).
 */
export default function HomeNav({
  variant = "solid",
}: {
  variant?: "solid" | "hardware";
}) {
  const { openModal } = useRegistrationModal();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="relative border-b border-[#EEE3E8] bg-white [font-family:var(--font-home-sans)]">
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center px-5 sm:px-8 lg:px-[112px]">
        <Link href="/" className="shrink-0" aria-label="Betalia hjem">
          <Image
            src="/images/home/logo-mark.png"
            alt="Betalia"
            width={117}
            height={30}
            priority
            className="opacity-80"
          />
        </Link>

        {/* Links */}
        <nav className="ml-[56px] hidden items-center gap-[32px] lg:flex">
          <Link
            href="/"
            className="text-[15px] font-medium leading-none text-[#1A1218]"
          >
            Hjem
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <div
              className={`flex items-center gap-[4px] rounded-[6px] px-3 py-2 text-[15px] font-medium leading-none text-[#1A1218] transition-colors ${
                solutionsOpen ? "bg-[#FBF6F8]" : ""
              }`}
            >
              <Link
                href="/hardware"
                onClick={() => setSolutionsOpen(false)}
                className="leading-none text-[#1A1218]"
              >
                Løsninger
              </Link>
              <button
                type="button"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
                aria-label="Vis løsninger"
                className="flex items-center"
              >
                <ChevronDown
                  size={14}
                  className={`text-[#6E6168] transition-transform ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {solutionsOpen && (
              <div className="absolute left-0 top-full z-50 w-[440px] pt-[8px]">
                <div className="grid grid-cols-2 overflow-hidden rounded-[8px] border border-[#EEE3E8] bg-white shadow-[0_24px_48px_-16px_rgba(42,19,40,0.18)]">
                  {SOLUTIONS.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSolutionsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-[14px] transition-colors hover:bg-[#FBF6F8] ${
                        i % 2 === 0 ? "border-r border-[#EEE3E8]" : ""
                      } ${i < 4 ? "border-b border-[#EEE3E8]" : ""}`}
                    >
                      <Image
                        src={`/images/hardware/subnav-${item.img}.png`}
                        alt=""
                        width={96}
                        height={48}
                        className="h-[34px] w-[52px] shrink-0 object-contain"
                      />
                      <span className="text-[13.5px] font-semibold leading-none text-[#1A1218]">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-7">
          {variant === "hardware" ? (
            <>
              <button
                onClick={() => openModal()}
                className="hidden items-center gap-2 text-[14px] font-semibold leading-none text-[#AE4D70] transition-opacity hover:opacity-80 sm:flex"
              >
                Få et tilbud
                <ArrowRight size={14} />
              </button>
              <Link
                href="/vendor/login"
                className="hidden text-[14px] font-semibold leading-none text-[#1A1218] md:block"
              >
                Kundeportal
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/vendor/login"
                className="hidden text-[14px] font-medium leading-none text-[#6E6168] md:block"
              >
                Kundeportal
              </Link>
              <button
                onClick={() => openModal()}
                className="flex items-center gap-2 rounded-[6px] bg-[#AE4D70] px-5 py-[11px] text-[14px] font-semibold leading-none text-white transition-opacity hover:opacity-90"
              >
                Få et tilbud
                <ArrowRight size={14} />
              </button>
            </>
          )}
          <button
            className="text-[#1A1218] lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Meny"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-[70px] z-50 border-b border-[#EEE3E8] bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-4 text-[15px] font-medium text-[#1A1218]">
            <Link href="/" onClick={() => setOpen(false)}>
              Hjem
            </Link>
            <Link href="/hardware" onClick={() => setOpen(false)}>
              Løsninger
            </Link>
            <div className="flex flex-col gap-3 border-l border-[#EEE3E8] pl-4">
              {SOLUTIONS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[14px] text-[#6E6168]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/about" onClick={() => setOpen(false)}>
              Om oss
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Kontakt
            </Link>
            <Link href="/vendor/login" onClick={() => setOpen(false)}>
              Kundeportal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
