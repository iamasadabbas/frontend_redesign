import Image from "next/image";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Industry photo band — "Redesign Concept" version: full-bleed dark
 * #2A1328 section, 1280 inner container with white/8% side borders,
 * first photo 460px wide and the other three flexible (flush on desktop),
 * with number chips and bottom-left labels.
 * "Resturant" is the frame's own spelling, kept as designed.
 */
const photos = [
  { src: "/images/home/industry-restaurant.png", label: "Resturant" },
  { src: "/images/home/industry-bakeri.png", label: "Bakeri" },
  { src: "/images/home/industry-kafe.png", label: "Kafé" },
  { src: "/images/home/industry-fastfood.png", label: "Fastfood" },
];

export default function PosBand() {
  return (
    <section className="bg-[#2A1328] px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-white/[0.0784] px-5 py-[88px] sm:px-8 lg:px-[32px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0">
          {photos.map((photo, i) => (
            <div
              key={photo.label}
              className={`relative h-[460px] overflow-hidden rounded-[6px] lg:rounded-none ${
                i === 0 ? "lg:w-[460px] lg:shrink-0" : "lg:flex-1"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                sizes={i === 0 ? "(max-width: 1024px) 100vw, 460px" : "(max-width: 1024px) 100vw, 250px"}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1328] via-transparent to-transparent" />
              <span
                className={`absolute left-4 top-4 rounded-[3px] bg-black/35 px-[6px] py-[3px] text-[10px] leading-none text-white ${MONO}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`absolute bottom-6 left-6 text-[26px] font-semibold leading-none tracking-[-0.6px] text-white ${SANS}`}
              >
                {photo.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
