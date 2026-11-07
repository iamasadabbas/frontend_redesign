"use client";

import { useState } from "react";
import Image from "next/image";

const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Industry photo band — matches betalia.no hover expansion
 * (flex-[3.25] vs flex-[1.25], duration-700 ease-out, active title slide-up).
 */
const photos = [
  { src: "/images/home/industry-restaurant-hd.jpg", label: "Resturant" },
  { src: "/images/home/industry-bakeri-hd.jpg", label: "Bakeri" },
  { src: "/images/home/industry-kafe-hd.jpg", label: "Kafé" },
  { src: "/images/home/industry-fastfood-hd.jpg", label: "Fastfood" },
];

export default function PosBand() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-[#2A1328] px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-white/[0.0784] px-5 py-[88px] sm:px-8 lg:px-[32px]">
        <div className="flex h-auto flex-col md:h-[480px] md:flex-row">
          {photos.map((photo, i) => {
            const isActive = activeIdx === i;
            return (
              <div
                key={photo.label}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-out ${isActive
                    ? "h-[480px] md:flex-[3.25]"
                    : "h-[120px] md:h-auto md:flex-[1.25]"
                  }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1328] via-transparent to-transparent" />
                {isActive ? (
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-8">
                    <h3
                      key={`active-${photo.label}`}
                      className={`animate-[industryTitleIn_0.5s_cubic-bezier(0.32,0,0.67,0)_forwards] text-2xl font-semibold text-white md:text-3xl ${SANS}`}
                    >
                      {photo.label}
                    </h3>
                  </div>
                ) : (
                  <div className="absolute inset-0 z-10 flex items-center justify-center md:items-end md:justify-start md:p-6">
                    <h3 className={`text-xl font-semibold text-white md:text-3xl ${SANS}`}>
                      {photo.label}
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
