import Image from "next/image";

/**
 * Closing photo scatter for Display, pixel-matched to the Figma
 * frame: the whole closing section is shifted 54px right in this
 * frame, so the tile columns sit at x54/267/481/694/
 * 907/1121/1334/1547/1761 (pitch 213.33) and the centred heading
 * centres on x1014 instead of the page centre. The two edge tiles
 * flank the CTA card as usual.
 */

const row1 = [267, 694, 1121, 1547];
const row2 = [54, 481, 907, 1334, 1761];

export default function DisplayClosing() {
  return (
    <section className="relative mt-[139px] h-[472px] bg-white max-lg:mt-16 max-lg:h-auto">
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
      <h2 className="absolute inset-x-0 top-[404px] pl-[108px] text-center text-[48px] font-normal leading-[57px] text-[#0A0A0A] max-lg:static max-lg:px-6 max-lg:py-16 max-lg:text-[32px] max-lg:leading-[1.25]">
        Bygget for vekst – Skapt for suksess
      </h2>
      <Image
        src="/images/pos/staff-10.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-[54px] top-[517px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
      <Image
        src="/images/pos/staff-11.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-[1761px] top-[517px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
    </section>
  );
}
