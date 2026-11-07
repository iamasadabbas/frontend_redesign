import localFont from "next/font/local";

/* Home page (Figma "Betalia - Hjem"): text styles resolve to Poppins for
   head/body (Poppins is the family named in the Figma styles) and a mono
  for the small caps labels.Self - hosted via next/ font / local so builds
   never depend on external Google Fonts requests during CI / Vercel builds. */
export const homeSans = localFont({
    src: [
      { path: "../public/fonts/Poppins-400.woff2", weight: "400", style: "normal" },
      { path: "../public/fonts/Poppins-500.woff2", weight: "500", style: "normal" },
      { path: "../public/fonts/Poppins-600.woff2", weight: "600", style: "normal" },
      { path: "../public/fonts/Poppins-800.woff2", weight: "800", style: "normal" },
    ],
    variable: "--font-home-sans",
    display: "swap",
  });

/* Body text on Home runs in Inter: screenshot comparison against the
   Figma frame showed Poppins body copy wrapping ~4% wider than the
   design on every paragraph, while Poppins headings matched exactly. */
  export const homeBody = localFont({
    src: "../public/fonts/Inter-Latin.woff2",
    weight: "100 900",
    style: "normal",
    variable: "--font-home-body",
    display: "swap",
  });

    /* About & Hardware pages: every text style resolves to Poppins
       (400, 500, 600, 700). */
    export const aboutSans = localFont({
      src: [
        { path: "../public/fonts/Poppins-400.woff2", weight: "400", style: "normal" },
        { path: "../public/fonts/Poppins-500.woff2", weight: "500", style: "normal" },
        { path: "../public/fonts/Poppins-600.woff2", weight: "600", style: "normal" },
        { path: "../public/fonts/Poppins-700.woff2", weight: "700", style: "normal" },
      ],
      variable: "--font-about-sans",
      display: "swap",
    });

      export const homeMono = localFont({
        src: [
          { path: "../public/fonts/IBMPlexMono-400.woff2", weight: "400", style: "normal" },
          { path: "../public/fonts/IBMPlexMono-500.woff2", weight: "500", style: "normal" },
        ],
        variable: "--font-home-mono",
        display: "swap",
      });

      export const exactBlock = localFont({
        src: "../public/fonts/ExactBlock-Regular.woff2",
        variable: "--font-heading",
      });

      export const cashSans = localFont({
        src: [
          {
            path: "../public/fonts/CashSans-Regular.woff2",
            weight: "400",
          },
          {
            path: "../public/fonts/CashSans-Medium.woff2",
            weight: "500",
          },
        ],
        variable: "--font-body",
      });
