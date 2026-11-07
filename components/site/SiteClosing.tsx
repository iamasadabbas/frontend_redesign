"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  ShieldCheck,
  Twitter,
} from "lucide-react";
import { useRegistrationModal } from "@/hooks/useRegistrationModal";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Shared closing system from the Figma "Redesign Concept" frames:
 * full-width gradient CTA band (copy left, white mini lead form right —
 * company + email only, no card title) over a solid dark footer.
 * Replaces the old ContactCtaFooter / AboutCtaFooter / HomeCtaFooter.
 */
export function SiteCTA({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) {
  const { openModal } = useRegistrationModal();

  return (
    <section className="bg-[linear-gradient(90deg,#AE4D70_0%,#733A72_100%)] px-0 lg:px-[80px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-[64px] border-x border-white/[0.149] px-5 py-[93px] sm:px-8 lg:flex-row lg:items-center lg:px-[32px]">
        <div className="max-w-[630px] flex-1">
          <p
            className={`text-[12px] uppercase leading-none tracking-[1.2px] text-white/70 ${MONO}`}
          >
            Kom i gang
          </p>
          <h2
            className={`mt-5 max-w-[540px] text-[44px] font-semibold leading-[1.08] tracking-[-1.8px] text-white lg:text-[56px] ${SANS}`}
          >
            {heading}
          </h2>
          <p className="mt-5 max-w-[500px] text-[17px] leading-[1.55] text-white/85">
            {paragraph}
          </p>
        </div>

        <form
          className="w-full max-w-[500px] shrink-0 rounded-[8px] bg-white p-[36px]"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            openModal({
              companyName: String(fd.get("company") || ""),
              email: String(fd.get("email") || ""),
            });
          }}
        >
          <label className="flex h-[52px] items-center gap-3 rounded-[6px] border border-[#EEE3E8] bg-[#FBF6F8] px-4">
            <Building2 size={18} className="shrink-0 text-[#6E6168]" />
            <input
              type="text"
              name="company"
              placeholder="Firmanavn"
              className="w-full bg-transparent text-[15px] text-[#1A1218] outline-none placeholder:text-[#6E6168]"
            />
          </label>

          <label className="mt-4 flex h-[52px] items-center gap-3 rounded-[6px] border border-[#EEE3E8] bg-[#FBF6F8] px-4">
            <Mail size={18} className="shrink-0 text-[#6E6168]" />
            <input
              type="email"
              name="email"
              placeholder="E-postadresse"
              className="w-full bg-transparent text-[15px] text-[#1A1218] outline-none placeholder:text-[#6E6168]"
            />
          </label>

          <button
            type="submit"
            className={`mt-5 flex w-full items-center justify-center gap-2 rounded-[6px] bg-[#AE4D70] py-4 text-[16px] font-semibold leading-none text-white transition-opacity hover:opacity-90 ${SANS}`}
          >
            Få et uforpliktende tilbud
            <ArrowRight size={16} />
          </button>

          <p className="mt-4 flex items-center gap-2 text-[13px] text-[#6E6168]">
            <ShieldCheck size={16} className="text-[#AE4D70]" />
            Gratis rådgivning — helt uforpliktende.
          </p>
        </form>
      </div>
    </section>
  );
}

const colLabel = `text-[12px] uppercase leading-none tracking-[1.2px] text-[#DDA6BE] ${MONO}`;
const colLink = "text-[15px] leading-none text-white/70 hover:text-white";

/** Concept footer — solid deep #2A1328, unnumbered mono column labels,
 *  KONTAKT column carries org number, street address and hei@betalia.no. */
export function SiteFooter() {
  return (
    <footer className="bg-[#2A1328] px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-white/[0.0784] px-5 sm:px-8 lg:px-[32px]">
        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 pb-[36px] pt-[48px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-[390px_288px_266px_1fr] xl:gap-0">
          {/* Brand */}
          <div className="lg:pr-[48px]">
            <div className="flex items-start gap-[48px] xl:ml-[36px]">
              <Image
                src="/images/betalia_vertical_logo.png"
                alt="Betalia"
                width={40}
                height={143}
                className="h-[124px] w-auto shrink-0 opacity-50"
              />
              <p
                className={`self-end pb-[4px] text-center text-[20px] font-medium leading-[1.4] text-white/30 ${SANS}`}
              >
                <span className="block">Enkelt å bruke.</span>
                <span className="block">Fullt av muligheter.</span>
              </p>
            </div>
            <div className="mt-[44px]">
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Instagram, label: "Instagram" },
                ].map(({ Icon, label }) => (
                  <span
                    key={label}
                    aria-label={label}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/25 text-white/70"
                  >
                    <Icon size={15} />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Løsninger */}
          <div className="xl:border-l xl:border-white/[0.0784] xl:pl-[48px]">
            <p className={colLabel}>Løsninger</p>
            <ul className="mt-6 space-y-4">
              <li><Link className={colLink} href="/hardware/cashier">Kasse</Link></li>
              <li><Link className={colLink} href="/hardware/online-qr">Online &amp; QR bestilling</Link></li>
              <li><Link className={colLink} href="/hardware/self-kiosk">Selvbetjent kasse</Link></li>
              <li><Link className={colLink} href="/hardware/display">Kundedisplay</Link></li>
              <li><Link className={colLink} href="/hardware/ksd">Kjøkkenskjerm (KDS)</Link></li>
              <li><Link className={colLink} href="/hardware/back-office">Backoffice</Link></li>
            </ul>
          </div>

          {/* Betalia */}
          <div className="xl:border-l xl:border-white/[0.0784] xl:pl-[48px]">
            <p className={colLabel}>Betalia</p>
            <ul className="mt-6 space-y-4">
              <li><Link className={colLink} href="/about">Om oss</Link></li>
              <li><Link className={colLink} href="/contact">Support</Link></li>
              <li><Link className={colLink} href="/hardware">Løsninger</Link></li>
              <li><Link className={colLink} href="/vendor/login">Kundeportal</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="xl:border-l xl:border-white/[0.0784] xl:pl-[48px]">
            <p className={colLabel}>Kontakt</p>
            <ul className="mt-6 space-y-4">
              <li className="text-[15px] leading-none text-white/70">Betalia</li>
              <li className="text-[15px] leading-none text-white/70">Org nr: 937 988 710</li>
              <li className="text-[15px] leading-[1.45] text-white/70">
                <span className="block">Strandveien 20</span>
                <span className="block">3050 Mjøndalen</span>
              </li>
              <li>
                <a className={colLink} href="mailto:hei@betalia.no">
                  hei@betalia.no
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex h-[63px] flex-wrap items-center justify-between gap-4 border-t border-white/[0.0784]">
          <p
            className={`text-[11px] uppercase leading-none tracking-[1.2px] text-white/50 ${MONO}`}
          >
            © 2026 Betalia — Alle rettigheter forbeholdt
          </p>
          <div
            className={`flex gap-8 text-[11px] uppercase leading-none tracking-[1.2px] text-white/50 ${MONO}`}
          >
            <span>Personvern</span>
            <span>Cookies</span>
            <span>Betalia.no</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
