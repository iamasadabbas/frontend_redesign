import Image from "next/image";

/**
 * Closing photo scatter for Express, pixel-matched to the Figma
 * frame: the closing section sits at Left 8, so the tile columns
 * are x8/221/435/648/861/1075/1288/1501/1715 and the heading —
 * "Bygget for vekst – Skapt for suksess" (the frame's own wording,
 * panel and render agree) — centres on x968. The two edge tiles
 * flank the CTA card as usual.
 */

const row1 = [221, 648, 1075, 1501];
const row2 = [8, 435, 861, 1288, 1715];

export default function ExpressClosing() {
  return (
    <section className="relative mt-[98px] h-[492px] bg-white max-lg:mt-16 max-lg:h-auto">
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
      <h2 className="absolute inset-x-0 top-[404px] pl-[16px] text-center text-[48px] font-normal leading-[57px] text-[#0A0A0A] max-lg:static max-lg:px-6 max-lg:py-16 max-lg:text-[32px] max-lg:leading-[1.25]">
        Bygget for vekst – Skapt for suksess
      </h2>
      <Image
        src="/images/pos/staff-10.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-[8px] top-[518px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
      <Image
        src="/images/pos/staff-11.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-[1715px] top-[518px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
    </section>
  );
}
