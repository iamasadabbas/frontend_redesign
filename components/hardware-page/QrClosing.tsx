import Image from "next/image";

/**
 * Closing photo scatter for Online&QR, pixel-matched to the Figma
 * frame: the same two staggered 120x120 tile rows as the POS page
 * (cropped from this frame's export), the centred 48px "Bygget for
 * vekst – Skapt for suksess" heading, and a third row of just two
 * edge tiles that flank the CTA card below (they overflow this
 * section, as in the frame).
 */

const row1 = [213, 640, 1066, 1493];
const row2 = [0, 426, 853, 1280, 1706];

export default function QrClosing() {
  return (
    <section className="relative mt-[118px] h-[479px] bg-white max-lg:mt-16 max-lg:h-auto">
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
        className="absolute left-0 top-[517px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
      <Image
        src="/images/pos/staff-11.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-[1706px] top-[517px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
    </section>
  );
}
