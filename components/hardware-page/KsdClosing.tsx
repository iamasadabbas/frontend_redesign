import Image from "next/image";

/**
 * Closing photo scatter for KjøkkenPluss, pixel-matched to the
 * Figma frame: the staggered 120x120 tile rows (cropped from this
 * frame's export) follow the usual pattern shifted 26px right —
 * this frame's closing section sits at Left 26 — with the centred
 * 48px heading and two edge tiles flanking the CTA card below.
 */

const row1 = [239, 666, 1092, 1519];
const row2 = [26, 452, 879, 1306, 1732];

export default function KsdClosing() {
  return (
    <section className="relative mt-[273px] h-[508px] bg-white max-lg:mt-16 max-lg:h-auto">
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
      <h2 className="absolute inset-x-0 top-[404px] text-center text-[48px] font-normal leading-[57px] text-[#0A0A0A] max-lg:static max-lg:px-6 max-lg:py-16 max-lg:text-[32px] max-lg:leading-[1.25]">
        Bygget for vekst – Skapt for suksess
      </h2>
      <Image
        src="/images/pos/staff-10.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-[26px] top-[510px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
      <Image
        src="/images/pos/staff-11.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-[1732px] top-[510px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
    </section>
  );
}
