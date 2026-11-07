"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

export type FaqItem = { question: string; answer: string };

/**
 * Shared FAQ block from the "Redesign Concept" frames: centred mono
 * eyebrow + "FAQ" heading over a column of numbered white accordion
 * cards on the tint + faint-grid background.
 */
export default function FaqCards({
  items,
  eyebrow = "— Ofte stilte spørsmål —",
  defaultOpenIdx = 0,
  sectionClassName = "",
}: {
  items: FaqItem[];
  eyebrow?: string;
  defaultOpenIdx?: number;
  sectionClassName?: string;
}) {
  const [openIdx, setOpenIdx] = useState(defaultOpenIdx);

  return (
    <section className={`px-5 pb-[96px] pt-[88px] sm:px-8 ${sectionClassName}`}>
      <div className="mx-auto max-w-[752px]">
        <p
          className={`text-center text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-4 text-center text-[40px] font-semibold leading-[1.1] tracking-[-1.2px] text-[#1A1218] lg:text-[44px] ${SANS}`}
        >
          FAQ
        </h2>

        <div className="mt-[48px] space-y-4">
          {items.map((item, i) => {
            const open = openIdx === i;
            const paragraphs = item.answer.split("\n\n");
            return (
              <div
                key={item.question}
                className="rounded-[4px] border border-[#EEE3E8] bg-white px-[28px] py-[24px]"
              >
                <p
                  className={`text-[12px] leading-none tracking-[1.2px] text-[#9A8C93] ${MONO}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <button
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  aria-expanded={open}
                  className="mt-2 flex w-full items-center justify-between gap-4 text-left"
                >
                  <span
                    className={`text-[20px] font-semibold leading-[1.3] tracking-[-0.3px] text-[#1A1218] ${SANS}`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#733A72] transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <div className="mt-3 max-w-[680px] space-y-4 text-[15px] leading-[1.6] text-[#6E6168]">
                    {paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
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
