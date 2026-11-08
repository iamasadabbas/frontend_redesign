"use client";

import { useState } from "react";
import Image from "next/image";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

const cards = [
  {
    src: "/images/home/industry-restaurant-hd.jpg",
    alt: "Utviklet for serveringsbransjen",
    num: "01",
    caption: "Utviklet for serveringsbransjen",
    description:
      "Skreddersydd for restauranter, kafeer, gatekjøkken, barer, food trucks og virksomheter med én eller flere lokasjoner.",
  },
  {
    src: "/images/home/industry-bakeri-hd.jpg",
    alt: "Bakeri",
    num: "02",
    caption: "Effektiv drift fra bestilling til betaling",
    description:
      "Sømløs arbeidsflyt fra bestilling ved bordet eller i kassen til betaling og kjøkken, helt uten flaskehalser.",
  },
  {
    src: "/images/home/industry-kafe-hd.jpg",
    alt: "Kafé",
    num: "03",
    caption: "Sanntidsinnsikt for bedre beslutninger",
    description:
      "Full oversikt over salg, populære varer og bemanning i sanntid — uansett hvor du befinner deg.",
  },
  {
    src: "/images/home/industry-fastfood-hd.jpg",
    alt: "Fastfood",
    num: "04",
    caption: "Alt samlet i én plattform",
    description:
      "Kasse, selvbetjening, nettbestilling, kjøkkenskjerm og backoffice knyttet sammen i ett system.",
  },
];

/**
 * About dark section — "Redesign Concept" version (Om oss.png):
 * #2A1328 outer, 1280 inner with white/8% side borders, 3-line
 * semibold heading, then a flush 4-photo strip using the four
 * industry photos with 01-04 top-left badges and bottom-left titles.
 */
export default function AboutDark() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-[#2A1328] px-0 lg:px-8 xl:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-white/[0.0784] px-5 py-[104px] sm:px-8 lg:px-[32px]">
        <h2
          className={`max-w-[680px] text-[36px] font-semibold leading-[1.12] tracking-[-1.6px] text-white sm:text-[42px] lg:text-[48px] ${SANS}`}
        >
          Smart restaurantteknologi utviklet for dagens serveringsbransje.
        </h2>

        <div className="mt-[56px] flex h-auto flex-col md:h-[480px] md:flex-row">
          {cards.map((card, i) => {
            const isActive = activeIdx === i;
            return (
              <div
                key={card.num}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-out ${isActive
                    ? "h-[480px] md:flex-[3.25]"
                    : "h-[120px] md:h-auto md:flex-[1.25]"
                  }`}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1328] via-[#2A1328]/35 to-transparent" />
                {isActive ? (
                  <div
                    key={`active-${card.num}`}
                    className="absolute inset-0 z-10 flex animate-[industryTitleIn_0.5s_cubic-bezier(0.32,0,0.67,0)_forwards] flex-col justify-end p-5 md:p-8"
                  >
                    <h3
                      className={`text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-white ${SANS}`}
                    >
                      {card.caption}
                    </h3>
                    <p className="mt-3 max-w-[400px] text-[14.5px] leading-[1.55] text-white/80">
                      {card.description}
                    </p>
                  </div>
                ) : (
                  <div className="absolute inset-0 z-10 flex items-center justify-center md:items-end md:justify-start md:p-6">
                    <h3
                      className={`text-[20px] font-semibold leading-[1.25] tracking-[-0.4px] text-white md:text-[22px] ${SANS}`}
                    >
                      {card.caption}
                    </h3>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
