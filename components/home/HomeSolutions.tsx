import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  ChefHat,
  QrCode,
  TabletSmartphone,
  Tv,
} from "lucide-react";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

type Card = {
  title: string;
  desc: string;
  href: string;
  badge?: string;
  icon: "kasse" | "qr" | "chef" | "tv" | "tablet" | "chart";
};

const cards: Card[] = [
  {
    title: "Kassesystem",
    desc: "Et moderne kassesystem som effektiviserer hverdagen — raskt å lære, enkelt å bruke.",
    href: "/hardware/cashier",
    badge: "Populært",
    icon: "kasse",
  },
  {
    title: "Online & QR",
    desc: "Gjester kan bestille og betale direkte fra mobilen, via QR-kode på bordet eller online.",
    href: "/hardware/online-qr",
    icon: "qr",
  },
  {
    title: "Kjøkkenskjerm",
    desc: "Effektiviserer kommunikasjonen mellom servering og kjøkken, med sanntidsoversikt over alle bestillinger.",
    href: "/hardware/ksd",
    badge: "KDS",
    icon: "chef",
  },
  {
    title: "Kundedisplay",
    desc: "Kundene følger statusen på bestillingen i sanntid, og vet alltid når maten er klar for henting.",
    href: "/hardware/display",
    icon: "tv",
  },
  {
    title: "Selvbetjent kasse",
    desc: "Reduser køer, avlast personalet og skap en mer effektiv drift — selv i de travleste periodene.",
    href: "/hardware/self-kiosk",
    icon: "tablet",
  },
  {
    title: "Backoffice",
    desc: "Full kontroll over hele virksomheten, samlet i én moderne og oversiktlig plattform.",
    href: "/hardware/back-office",
    icon: "chart",
  },
];

function CardIcon({ icon }: { icon: Card["icon"] }) {
  const cls = "text-[#AE4D70] transition-colors group-hover:text-white";
  const size = 22;
  switch (icon) {
    case "kasse":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cls}
        >
          <path
            d="M3.66683 2.75H18.3335C19.346 2.75 20.1668 3.57081 20.1668 4.58333V13.75C20.1668 14.7625 19.346 15.5833 18.3335 15.5833H3.66683C2.65431 15.5833 1.8335 14.7625 1.8335 13.75V4.58333C1.8335 3.57081 2.65431 2.75 3.66683 2.75Z"
            stroke="currentColor"
            strokeWidth="1.83333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.3335 19.25H14.6668"
            stroke="currentColor"
            strokeWidth="1.83333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 15.5835V19.2502"
            stroke="currentColor"
            strokeWidth="1.83333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "qr":
      return <QrCode size={size} className={cls} strokeWidth={1.8} />;
    case "chef":
      return <ChefHat size={size} className={cls} strokeWidth={1.8} />;
    case "tv":
      return <Tv size={size} className={cls} strokeWidth={1.8} />;
    case "tablet":
      return <TabletSmartphone size={size} className={cls} strokeWidth={1.8} />;
    case "chart":
      return <BarChart3 size={size} className={cls} strokeWidth={1.8} />;
  }
}

/** Løsninger — inner white, padding 40/32/104, head + 6 cards in a
 *  hairline grid (2 rows x 3), each card 300 tall, padding 32. */
export default function HomeSolutions() {
  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-t border-[#EEE3E8] bg-white px-5 pb-[104px] pt-[48px] sm:px-8 lg:px-[32px]">
        {/* Section head */}
        <div className="max-w-[640px]">
          <p
            className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
          >
            — Løsninger —
          </p>
          <h2 className={`mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-1.6px] text-[#1A1218] lg:text-[48px] ${SANS}`}>
            Teknologi som driver vekst
          </h2>
          <p className="mt-4 text-[17px] leading-[1.55] text-[#6E6168]">
            Fra kassen til kjøkkenet: alt du trenger for å drive et moderne
            serveringssted, samlet i én plattform.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[56px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Link
              key={c.title}
              href={c.href}
              className="group -ml-px -mt-px flex min-h-[300px] flex-col border border-[#EEE3E8] bg-white p-[32px] pb-[34px] transition-colors hover:bg-[#FBF4F7]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#F9EDF2] transition-colors group-hover:bg-[#AE4D70]">
                  <CardIcon icon={c.icon} />
                </span>
                <span className="flex items-center gap-3">
                  {c.badge && (
                    <span
                      className={`rounded-[4px] bg-[#F9EDF2] px-2 py-1 text-[10px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
                    >
                      {c.badge}
                    </span>
                  )}
                  <span
                    className={`text-[12px] leading-none text-[#6E6168] ${MONO}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </div>

              <h3 className={`mt-[64px] text-[24px] font-semibold leading-none tracking-[-0.6px] text-[#1A1218] ${SANS}`}>
                {c.title}
              </h3>
              <p className="mt-3 max-w-[339px] text-[15px] leading-[1.55] text-[#6E6168]">
                {c.desc}
              </p>
              <span
                className={`mt-auto flex items-center gap-[6px] pt-5 text-[11px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
              >
                Les mer
                <ArrowUpRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
