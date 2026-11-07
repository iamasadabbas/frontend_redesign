import Image from "next/image";

/**
 * Closing photo scatter for Backoffice, pixel-matched to the
 * Figma frame: the closing section sits at Left 43, so the tile
 * columns are x43/256/470/683/896/1110/1323/1536/1750, the
 * heading centres on x1003, and the two edge tiles (columns 1
 * and 9, pixel-verified) flank the CTA card.
 */

const row1 = [256, 683, 1110, 1536];
const row2 = [43, 470, 896, 1323, 1750];

export default function BackofficeClosing() {
  return (
    <section className="relative mt-[166px] h-[466px] bg-white max-lg:mt-16 max-lg:h-auto">
      {row1.map((left, i) => (
        <Image
          key={left}
          src={`/images/pos/staff-${i + 1}.png`}
          alt=""
          width={120}
          height={120}
          className="absolute top-0 h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
          style={{ left }}
        />
      ))}
      {row2.map((left, i) => (
        <Image
          key={left}
          src={`/images/pos/staff-${i + 5}.png`}
          alt=""
          width={120}
          height={120}
          className="absolute top-[200px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
          style={{ left }}
        />
      ))}
      <h2 className="absolute inset-x-0 top-[390px] pl-[86px] text-center text-[48px] font-normal leading-[57px] text-[#0A0A0A] max-lg:static max-lg:px-6 max-lg:py-16 max-lg:text-[32px] max-lg:leading-[1.25]">
        Bygget for vekst – Skapt for suksess
      </h2>
      <Image
        src="/images/pos/staff-10.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-[43px] top-[517px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
      <Image
        src="/images/pos/staff-11.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-[1749px] top-[517px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
    </section>
  );
}
