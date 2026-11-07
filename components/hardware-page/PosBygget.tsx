import Image from "next/image";

/**
 * "Bygget for vekst" photo scatter, pixel-matched to the Figma
 * frame: nine 120x120 staff photos (rounded 24, cropped from the
 * Figma export) in two staggered rows at measured positions — the
 * first row inset, the second running to both page edges — above
 * the centred 44px heading "Bygget for vekst – Skapt for suksess"
 * (glyphs y5488-5537; section 4980-5564 in the frame).
 */

const row1 = [
  { src: "/images/pos/staff-1.png", left: 213 },
  { src: "/images/pos/staff-2.png", left: 640 },
  { src: "/images/pos/staff-3.png", left: 1066 },
  { src: "/images/pos/staff-4.png", left: 1493 },
];

const row2 = [
  { src: "/images/pos/staff-5.png", left: 0 },
  { src: "/images/pos/staff-6.png", left: 426 },
  { src: "/images/pos/staff-7.png", left: 853 },
  { src: "/images/pos/staff-8.png", left: 1280 },
  { src: "/images/pos/staff-9.png", left: 1706 },
];

export default function PosBygget() {
  return (
    <section className="relative h-[584px] bg-white max-lg:h-auto">
      {row1.map((photo) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt=""
          width={120}
          height={120}
          className="absolute top-[96px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
          style={{ left: photo.left }}
        />
      ))}
      {row2.map((photo) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt=""
          width={120}
          height={120}
          className="absolute top-[296px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
          style={{ left: photo.left }}
        />
      ))}
      <h2 className="absolute inset-x-0 bottom-[27px] text-center text-[48px] font-normal leading-[57px] text-[#0A0A0A] max-lg:static max-lg:px-6 max-lg:py-16 max-lg:text-[32px] max-lg:leading-[1.25]">
        Bygget for vekst – Skapt for suksess
      </h2>
      <Image
        src="/images/pos/staff-10.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-0 top-[613px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
      <Image
        src="/images/pos/staff-11.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-[1706px] top-[613px] h-[120px] w-[120px] rounded-[24px] object-cover max-lg:hidden"
      />
    </section>
  );
}
