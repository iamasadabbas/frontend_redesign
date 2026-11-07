"use client";

import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

const inputClass =
  "h-[52px] w-full rounded-[6px] border border-[#EEE3E8] bg-[#FBF6F8] px-4 text-[15px] text-[#1A1218] outline-none placeholder:text-[#6E6168]";

/**
 * Form + head-office section — "Redesign Concept" version: centred
 * eyebrow + heading on the white panel, then a bordered form card
 * (left) and the map + Hovedkontor card (right). The map is the
 * client's own asset (public/images/contact-map.png). Note the frame
 * gives the address as "Strandveien 20A" here but "Strandveien 20" in
 * the footer — both implemented as designed, flagged for the client.
 * Submit behaviour unchanged (toast confirmation).
 */
export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Takk for din melding! Vi tar kontakt med deg snart.");
    e.currentTarget.reset();
  };

  return (
    <section className="px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-[#EEE3E8] bg-white px-5 pb-[96px] pt-[88px] sm:px-8 lg:px-[32px]">
        <p
          className={`text-center text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
        >
          — Kontakt —
        </p>
        <h2
          className={`mx-auto mt-4 max-w-[760px] text-center text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
        >
          Skriv til oss eller finn veien til oss på hovedkontoret
        </h2>

        <div className="mt-[64px] grid grid-cols-1 gap-[32px] lg:grid-cols-[1fr_405px]">
          {/* Form card */}
          <div className="border border-[#EEE3E8] p-[36px]">
            <h3
              className={`text-[24px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#1A1218] ${SANS}`}
            >
              Mer tid til det som skaper verdi
            </h3>
            <p className="mt-3 max-w-[640px] text-[15px] leading-[1.6] text-[#6E6168]">
              Når rutineoppgavene automatiseres, får du mer tid til å utvikle
              virksomheten, styrke kundeforholdene og øke salget. Betalias mål
              er å være den foretrukne POS- og betalingsplattformen for norske
              virksomheter som ønsker en enklere, smartere og mer lønnsom
              hverdag.
            </p>

            <form onSubmit={handleSubmit} className="mt-[32px]">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input type="text" name="firstName" required placeholder="Navn" className={inputClass} />
                <input type="text" name="lastName" placeholder="Etternavn" className={inputClass} />
              </div>
              <input type="email" name="email" required placeholder="E-post" className={`${inputClass} mt-4`} />
              <input type="tel" name="phone" placeholder="Telefonnummer" className={`${inputClass} mt-4`} />
              <input type="text" name="company" placeholder="Firma" className={`${inputClass} mt-4`} />
              <textarea
                name="message"
                placeholder="Hva kan vi hjelpe deg med?"
                className="mt-4 h-[150px] w-full resize-none rounded-[6px] border border-[#EEE3E8] bg-[#FBF6F8] px-4 pt-4 text-[15px] text-[#1A1218] outline-none placeholder:text-[#6E6168]"
              />
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="flex items-center gap-2 text-[13px] text-[#6E6168]">
                  <ShieldCheck size={16} className="text-[#AE4D70]" />
                  Gratis rådgivning — helt uforpliktende.
                </p>
                <button
                  type="submit"
                  className={`flex h-[54px] items-center rounded-[4px] bg-[#AE4D70] px-[36px] text-[16px] font-semibold leading-none text-white transition-opacity hover:opacity-90 ${SANS}`}
                >
                  Send melding
                </button>
              </div>
            </form>
          </div>

          {/* Map + head office */}
          <div>
            <Image
              src="/images/contact-map.png"
              alt="Kart — Betalia hovedkontor, Mjøndalen"
              width={610}
              height={230}
              className="block h-[185px] w-full border border-[#EEE3E8] object-cover"
            />
            <div className="mt-[24px] border border-[#EEE3E8] p-[28px]">
              <p
                className={`flex items-center gap-2 text-[20px] font-semibold leading-none tracking-[-0.3px] text-[#1A1218] ${SANS}`}
              >
                <MapPin size={20} className="text-[#AE4D70]" />
                Hovedkontor
              </p>
              <p className="mt-4 text-[15px] leading-[1.55] text-[#6E6168]">
                <span className="block">Strandveien 20A</span>
                <span className="block">3050 Mjøndalen</span>
                <span className="block">Norge</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
