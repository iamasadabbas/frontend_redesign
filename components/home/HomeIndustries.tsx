"use client";

import { useState } from "react";
import Image from "next/image";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

const industries = [
  { name: "Restaurant", img: "/images/home/industry-restaurant-hd.jpg" },
  { name: "Bakeri", img: "/images/home/industry-bakeri-hd.jpg" },
  { name: "Kafé", img: "/images/home/industry-kafe-hd.jpg" },
  { name: "Fastfood", img: "/images/home/industry-fastfood-hd.jpg" },
];

/** Bransjer — deep #2A1328 outer, inner side borders white 7.84%,
 *  padding 104/32. Matches betalia.no hover expansion (flex-[3.25] vs flex-[1.25],
 *  duration-700 ease-out, active title slide-up animation, no number badges). */
export default function HomeIndustries() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-[#2A1328] px-0 lg:px-8 xl:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-white/[0.0784] px-5 py-[104px] sm:px-8 lg:px-[32px]">
        <p
          className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#DDA6BE] ${MONO}`}
        >
          — Bransjer —
        </p>
        <h2 className={`mt-4 max-w-[620px] text-[40px] font-semibold leading-[1.1] tracking-[-1.6px] text-white lg:text-[48px] ${SANS}`}>
          Bransjetilpasset programvare
        </h2>

        <div className="mt-[56px] flex h-auto flex-col md:h-[480px] md:flex-row">
          {industries.map((ind, i) => {
            const isActive = activeIdx === i;
            return (
              <div
                key={ind.name}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-out ${isActive
                    ? "h-[480px] md:flex-[3.25]"
                    : "h-[120px] md:h-auto md:flex-[1.25]"
                  }`}
              >
                <Image
                  src={ind.img}
                  alt={ind.name}
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1328] via-transparent to-transparent" />
                {isActive ? (
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-8">
                    <h3
                      key={`active-${ind.name}`}
                      className={`animate-[industryTitleIn_0.5s_cubic-bezier(0.32,0,0.67,0)_forwards] text-2xl font-semibold text-white md:text-3xl ${SANS}`}
                    >
                      {ind.name}
                    </h3>
                  </div>
                ) : (
                  <div className="absolute inset-0 z-10 flex items-center justify-center md:items-end md:justify-start md:p-6">
                    <h3 className={`text-xl font-semibold text-white md:text-3xl ${SANS}`}>
                      {ind.name}
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
