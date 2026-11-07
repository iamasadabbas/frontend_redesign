const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

const stats = [
  {
    label: "Erfaring",
    value: "Over 10 års",
    desc: "Erfaring med teknologi og betaling",
  },
  {
    label: "Support",
    value: "24/7",
    desc: "Vi er her for deg, hele døgnet",
  },
  {
    label: "Oppetid",
    value: "99,9%",
    desc: "Stabil drift du kan stole på",
  },
  {
    label: "Betaling",
    value: "Verifone",
    desc: "Sertifisert partner for trygg betaling",
  },
];

/** Stats (184px white inner, hairline dividers) + Payments strip
 *  (tint inner, seven brand wordmarks, grey #9A8C93). */
export function HomeStats() {
  return (
    <section className="px-0 lg:px-[80px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 border-x border-t border-[#EEE3E8] bg-white sm:grid-cols-2 lg:h-[184px] lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col px-[32px] py-8 lg:justify-start lg:py-0 lg:pt-[35px] ${
              i > 0 ? "border-t border-[#EEE3E8] sm:border-l lg:border-t-0" : ""
            }`}
          >
            <p
              className={`flex items-center justify-between text-[12px] uppercase leading-none tracking-[1.2px] text-[#6E6168] ${MONO}`}
            >
              {s.label}
              {s.label === "Support" && <span aria-hidden>−</span>}
            </p>
            <p className={`mt-[22px] text-[48px] font-semibold leading-none tracking-[-1.5px] text-[#1A1218] ${SANS}`}>
              {s.value}
            </p>
            {s.desc && (
              <p className="mt-[22px] text-[14px] leading-[1.35] text-[#6E6168]">
                {s.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomePayments() {
  return (
    <section className="px-0 lg:px-[80px]">
      <div
        className={`mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-[40px] gap-y-5 border-x border-t border-[#EEE3E8] bg-[#FBF6F8] px-[32px] py-[34px] text-[#8F8088] ${SANS}`}
      >
        {/* Vipps */}
        <span className="inline-flex items-center text-[22px] font-bold lowercase tracking-[-0.6px]">
          v
          <span className="relative mx-[1px] inline-block">
            <span className="opacity-0">i</span>
            <svg
              aria-hidden
              viewBox="0 0 14 14"
              className="absolute inset-x-0 bottom-[3px] h-[12px] w-[12px]"
              fill="none"
            >
              <circle cx="9.5" cy="3" r="1.5" fill="currentColor" />
              <path
                d="M2 7.5C4.2 11 9.5 11 11.8 7.2"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
            </svg>
          </span>
          pps
        </span>

        {/* BankAxept */}
        <span className="inline-flex flex-col text-[15px] font-extrabold lowercase leading-[0.92] tracking-[-0.5px]">
          <span>bank</span>
          <span>axept</span>
        </span>

        {/* Mastercard */}
        <span className="text-[20px] font-bold lowercase tracking-[-0.5px]">
          mastercard
        </span>

        {/* VISA */}
        <span className="text-[22px] font-extrabold italic tracking-[0.8px]">
          VISA
        </span>

        {/* Apple Pay */}
        <span className="inline-flex items-center gap-[4px] text-[20px] font-semibold tracking-[-0.5px]">
          <svg
            aria-hidden
            viewBox="0 0 16 20"
            className="h-[18px] w-[15px] -translate-y-[1px]"
            fill="currentColor"
          >
            <path d="M13.2 10.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3.1-1.7-1.3-.1-2.6.8-3.2.8-.7 0-1.7-.8-2.8-.7-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7 1.3 0 1.7.7 2.8.7 1.2 0 1.9-1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.5-.1 0-2.4-.9-2.4-3.4zM10.9 4.2c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z" />
          </svg>
          Pay
        </span>

        {/* Google Pay */}
        <span className="inline-flex items-center gap-[5px] text-[20px] font-medium tracking-[-0.4px]">
          <svg
            aria-hidden
            viewBox="0 0 18 18"
            className="h-[17px] w-[17px]"
            fill="currentColor"
          >
            <path d="M9 7.4v3.3h4.6c-.2 1.1-.8 2-1.7 2.6-2.7 1.8-6.4.9-7.9-1.9-1.5-2.8-.4-6.3 2.4-7.8 1.9-1 4.2-.8 5.9.5l2.4-2.4C13.1 0.3 11.1-.3 9 0 4 0 0 4 0 9s4 9 9 9c5.2 0 8.6-3.6 8.6-8.8 0-.6-.1-1.2-.2-1.8H9z" />
          </svg>
          Pay
        </span>

        {/* Klarna. */}
        <span className="text-[21px] font-extrabold tracking-[-0.6px]">
          Klarna.
        </span>
      </div>
    </section>
  );
}
