import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Nfc, QrCode } from "lucide-react";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Løsninger sections — "Redesign Concept" versions.
 * Muligheter: white panel, eyebrow + heading + intro, three flat
 * numbered cards, then the Nettbestilling / Kundelojalitet text blocks
 * with the devices image spanning both. Integrasjoner: panel-less
 * section on the frame tint — two text cards and the logo grid that
 * REPLACES the Page-1 pink pill band. All copy verbatim from the
 * Concept frame.
 */

const muligheter = [
  {
    Icon: Layers,
    title: "Én plattform for alle bestillinger",
    body: "Samle bestillinger fra kasse, QR-bestilling, nettbutikk, Wolt og Foodora i ett oversiktlig system. Effektiv drift med full kontroll.",
  },
  {
    Icon: Nfc,
    title: "Betaling uten begrensninger",
    body: "Gi kundene en sømløs betalingsopplevelse med støtte for alle populære betalingsmetoder. Enklere betaling gir raskere ekspedering og mer fornøyde kunder.",
  },
  {
    Icon: QrCode,
    title: "QR-bestilling ved bordet",
    body: "La gjestene bestille og betale direkte fra mobilen ved å skanne en QR-kode. Raskere servering, kortere ventetid og økt omsetning.",
  },
];

export function Muligheter() {
  return (
    <section id="muligheter" className="px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-y border-[#EEE3E8] bg-white px-5 pb-[104px] pt-[80px] sm:px-8 lg:px-[32px]">
        <p
          className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
        >
          — Løsninger —
        </p>
        <h2
          className={`mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
        >
          Muligheter
        </h2>
        <p className="mt-4 max-w-[640px] text-[16px] leading-[1.6] text-[#6E6168]">
          Fra kassen til kjøkkenet: alt du trenger for å drive et moderne
          serveringssted, samlet i én plattform.
        </p>

        <div className="mt-[48px] grid grid-cols-1 border border-[#EEE3E8] md:grid-cols-3">
          {muligheter.map(({ Icon, title, body }, i) => (
            <article
              key={title}
              className={`group bg-white p-[36px] transition-colors hover:bg-[#FBF6F8] ${
                i > 0
                  ? "border-t border-[#EEE3E8] md:border-l md:border-t-0"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#FBF6F8] text-[#AE4D70] transition-colors group-hover:bg-[#AE4D70] group-hover:text-white">
                  <Icon size={22} />
                </span>
                <span
                  className={`text-[13px] leading-none text-[#9A8C93] ${MONO}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className={`mt-[28px] text-[24px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#1A1218] ${SANS}`}
              >
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#6E6168]">
                {body}
              </p>
            </article>
          ))}
        </div>

        {/* Nettbestilling + Lojalitet, devices image spanning both */}
        <div className="mt-[96px] grid grid-cols-1 items-start gap-[48px] lg:grid-cols-[1fr_470px] lg:gap-[56px]">
          <div>
            <p
              className={`text-[11px] uppercase leading-none tracking-[2.5px] text-[#9A8C93] ${MONO}`}
            >
              Nettbestilling
            </p>
            <h3
              className={`mt-3 text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-[#1A1218] ${SANS}`}
            >
              Nettbestilling for takeaway
            </h3>
            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.65] text-[#6E6168]">
              Med Betalias nettbestillingsløsning kan kundene bestille og
              betale direkte fra din egen nettside. Løsningen er fullt
              integrert med kassesystemet, slik at alle bestillinger håndteres
              automatisk i én samlet plattform.
            </p>
            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.65] text-[#6E6168]">
              I travle perioder bidrar en effektiv bestillingsflyt til kortere
              ventetid, færre feil og raskere utlevering. Kundene kan velge
              mellom henting eller levering, mens du får full kontroll over
              menyer, åpningstider og ordre alt administrert fra ett sted.
            </p>

            <div className="mt-[40px] border-t border-[#EEE3E8] pt-[40px]">
              <p
                className={`text-[11px] uppercase leading-none tracking-[2.5px] text-[#9A8C93] ${MONO}`}
              >
                Kundelojalitet
              </p>
              <h3
                className={`mt-3 text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-[#1A1218] ${SANS}`}
              >
                Lojalitet som skaper faste kunder
              </h3>
              <p className="mt-4 max-w-[640px] text-[15px] leading-[1.65] text-[#6E6168]">
                Øk inntektene og styrk kundelojaliteten med Betalia Loyalty. Vårt
                smarte lojalitetssystem gjør det enkelt å lage personaliserte
                belønningsprogrammer som skaper engasjement, øker gjenkjøp og
                gir kundene en bedre opplevelse.
              </p>
              <Link
                href="/hardware/online-qr"
                className={`mt-[28px] inline-flex h-[54px] items-center gap-2 rounded-[4px] bg-[#AE4D70] px-[32px] text-[16px] font-semibold leading-none text-white transition-opacity hover:opacity-90 ${SANS}`}
              >
                Les mer
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <Image
            src="/images/hardware/nettbestilling-concept.png"
            alt="Betalia nettbestilling på kasse og mobil"
            width={460}
            height={370}
            className="h-auto w-full self-center"
          />
        </div>
      </div>
    </section>
  );
}

const integrasjoner = [
  {
    title: "Én meny. Alle salgskanaler.",
    body: "Med Betalia synkroniseres meny, priser og produkter automatisk på tvers av dine salgskanaler. Publiser oppdateringer til Wolt & Foodora fra én plattform raskt, enkelt og uten dobbeltarbeid.",
    note: "Samlet ordrehåndtering",
  },
  {
    title: "Alle bestillinger – på ett sted.",
    body: "Få full oversikt over bestillinger fra kiosk, kasse, nettbestilling og leveringsplattformer i én løsning. Betalia samler ordrene i ett grensesnitt, slik at teamet kan jobbe raskere, redusere feil og levere en mer effektiv kundeopplevelse.",
    note: null as string | null,
  },
  {
    title: "Regnskap uten manuelt arbeid",
    body: "Koble Betalia direkte til ditt regnskapssystem og automatiser flyten av salg, betalinger og rapportering. Støtte for Tripletex, PowerOffice Go og Fiken gir deg en mer effektiv og oversiktlig økonomihverdag",
    note: null as string | null,
  },
];

export function Integrasjoner() {
  return (
    <section className="px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-[#EEE3E8] bg-[#FBF6F8] px-5 pb-[104px] pt-[88px] sm:px-8 lg:px-[32px]">
        <p
          className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
        >
          — Integrasjoner —
        </p>
        <h2
          className={`mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
        >
          Smarte integrasjoner
        </h2>
        <p className="mt-4 max-w-[640px] text-[16px] leading-[1.6] text-[#6E6168]">
          Koble sammen salgskanaler, bestillinger og regnskap. Med Betalia får
          du sømløs dataflyt og mindre manuelt arbeid.
        </p>

        <div className="mt-[48px] grid grid-cols-1 gap-[24px] lg:grid-cols-2">
          {integrasjoner.slice(0, 2).map((block) => (
            <article
              key={block.title}
              className="border border-[#EEE3E8] bg-white p-[40px]"
            >
              <h3
                className={`text-[24px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#1A1218] ${SANS}`}
              >
                {block.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#6E6168]">
                {block.body}
              </p>
              {block.note && (
                <p className="mt-5 text-[13px] font-medium text-[#6E6168]">
                  {block.note}
                </p>
              )}
            </article>
          ))}

          <article className="border border-[#EEE3E8] bg-white p-[40px]">
            <h3
              className={`text-[24px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#1A1218] ${SANS}`}
            >
              {integrasjoner[2].title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-[#6E6168]">
              {integrasjoner[2].body}
            </p>
          </article>

          {/* Logo grid — replaces the Page-1 pink pill band */}
          <div className="flex flex-col justify-center border border-[#EEE3E8] bg-white text-[#A08E97]">
            <div className="grid grid-cols-2">
              <span className="flex h-[76px] items-center justify-center border-b border-r border-[#EEE3E8] text-[22px] font-bold lowercase tracking-tight">
                tripletex
              </span>
              <span className="flex h-[76px] items-center justify-center border-b border-[#EEE3E8] text-[22px] font-semibold tracking-tight">
                PowerOffice
              </span>
              <span className="flex h-[76px] items-center justify-center border-b border-r border-[#EEE3E8] text-[22px] font-extrabold lowercase">
                fiken
              </span>
              <span className="flex h-[76px] items-center justify-center border-b border-[#EEE3E8] text-[24px] font-bold italic">
                Wolt
              </span>
            </div>
            <span className="flex h-[76px] items-center justify-center text-[22px] font-extrabold lowercase">
              foodora
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
