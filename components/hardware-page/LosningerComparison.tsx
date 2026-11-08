"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { comparisonProducts } from "@/data/hardwareComparisonData";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Product comparison — "Redesign Concept" version: eyebrow + the
 * frame's repeated "Muligheter" heading, then one bordered grid of
 * three columns (photo, name bar, description, spec groups). The
 * name bar keeps the original swap behaviour via an invisible native
 * select. Copy/data = the codebase's hardwareComparisonData (the
 * frame's English copy is identical); photos are the Figma crops.
 */
const cropImages: Record<string, string> = {
  cashier: "/images/hardware/comp-1.png",
  "online-qr": "/images/hardware/comp-2.png",
  "self-kiosk": "/images/hardware/comp-3.png",
};

const groups: {
  key: "payments" | "power" | "connectivity" | "bestFor";
  label: string;
}[] = [
  { key: "payments", label: "Betalingsmetoder" },
  { key: "power", label: "Strømforsyning / løsning" },
  { key: "connectivity", label: "Tilkobling" },
  { key: "bestFor", label: "Ideelt for" },
];

export default function LosningerComparison() {
  const [ids, setIds] = useState(["cashier", "online-qr", "self-kiosk"]);
  const products = ids.map(
    (id) => comparisonProducts.find((p) => p.id === id) ?? comparisonProducts[0]
  );

  const setColumn = (col: number, id: string) =>
    setIds((prev) => prev.map((old, i) => (i === col ? id : old)));

  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-y border-[#EEE3E8] bg-white px-5 pb-[104px] pt-[88px] sm:px-8 lg:px-[32px]">
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

        <div className="mt-[56px] grid grid-cols-1 border border-[#EEE3E8] lg:grid-cols-3">
          {products.map((product, col) => (
            <article
              key={col}
              className={
                col > 0
                  ? "border-t border-[#EEE3E8] lg:border-l lg:border-t-0"
                  : ""
              }
            >
              <div className="relative h-[264px] overflow-hidden">
                <Image
                  src={cropImages[product.id] ?? product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 405px"
                  className="object-cover"
                />
              </div>

              {/* Name bar with the swap select */}
              <div className="relative flex items-center justify-between border-y border-[#EEE3E8] bg-[#FBF6F8] px-[28px] py-[16px]">
                <span
                  className={`text-[20px] font-semibold leading-none tracking-[-0.3px] text-[#1A1218] ${SANS}`}
                >
                  {product.name}
                </span>
                <ChevronDown size={20} className="text-[#AE4D70]" />
                <select
                  aria-label={`Velg produkt for kolonne ${col + 1}`}
                  value={product.id}
                  onChange={(e) => setColumn(col, e.target.value)}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                >
                  {comparisonProducts.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="px-[28px] py-[32px]">
                <p className="text-[15px] leading-[1.6] text-[#6E6168]">
                  {product.description}
                </p>
                {groups
                  .filter((group) => product.specs[group.key].length > 0)
                  .map((group) => (
                    <div
                      key={group.key}
                      className="mt-[28px] border-t border-[#EEE3E8] pt-[28px]"
                    >
                      <p
                        className={`text-[11px] uppercase leading-none tracking-[2px] text-[#AE4D70] ${MONO}`}
                      >
                        {group.label}
                      </p>
                      <ul className="mt-3 space-y-[6px] text-[15px] leading-[1.5] text-[#1A1218]">
                        {product.specs[group.key].map((item) => (
                          <li key={item}>— {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
