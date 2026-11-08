import type { ReactNode } from "react";

/**
 * Shared right-hand hero visual box from the "Redesign Concept" frames:
 * bordered square/rectangle with the 44px faint rose grid, radial pink
 * glow, and four "+" corner marks.
 */
export default function HeroVisualBox({
  children,
  className = "lg:h-[440px] lg:w-[440px] xl:h-[500px] xl:w-[560px]",
  showGlow = true,
}: {
  children: ReactNode;
  className?: string;
  showGlow?: boolean;
}) {
  return (
    <div
      className={`relative mx-auto flex w-full max-w-[580px] shrink-0 items-center justify-center border border-[#EEE3E8] bg-white p-6 sm:p-10 lg:ml-auto lg:mr-0 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F7E6EE 1px, transparent 1px), linear-gradient(to bottom, #F7E6EE 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {showGlow && (
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[380px] md:w-[380px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(221,166,190,0.42), rgba(221,166,190,0))",
          }}
        />
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-[4px] -top-[7px] text-[14px] leading-none text-[#DDA6BE]"
      >
        +
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -right-[4px] -top-[7px] text-[14px] leading-none text-[#DDA6BE]"
      >
        +
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[7px] -left-[4px] text-[14px] leading-none text-[#DDA6BE]"
      >
        +
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[7px] -right-[4px] text-[14px] leading-none text-[#DDA6BE]"
      >
        +
      </span>
      <div className="relative z-10 flex w-full items-center justify-center lg:h-full">
        {children}
      </div>
    </div>
  );
}

