import Image from "next/image";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

const narrowCards = [
  {
    src: "/images/home/industry-kafe.png",
    alt: "Kafé",
    num: "02",
    caption: "Effektiv drift fra bestilling til betaling",
  },
  {
    src: "/images/home/industry-bakeri.png",
    alt: "Bakeri",
    num: "03",
    caption: "Sanntidsinnsikt for bedre beslutninger",
  },
  {
    src: "/images/home/industry-fastfood.png",
    alt: "Fastfood",
    num: "04",
    caption: "Alt samlet i én plattform",
  },
];

/**
 * About dark section — "Redesign Concept" version (Om oss.png):
 * #2A1328 outer, 1280 inner with white/8% side borders, 3-line
 * semibold heading, then a flush 4-photo strip using the four
 * industry photos with 01-04 top-left badges and bottom-left titles.
 */
export default function AboutDark() {
  return (
    <section className="bg-[#2A1328] px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-white/[0.0784] px-5 py-[104px] sm:px-8 lg:px-[32px]">
        <h2
          className={`max-w-[680px] text-[36px] font-semibold leading-[1.12] tracking-[-1.6px] text-white sm:text-[42px] lg:text-[48px] ${SANS}`}
        >
          Smart restaurantteknologi utviklet for dagens serveringsbransje.
        </h2>

        <div className="mt-[56px] flex flex-col gap-4 lg:flex-row lg:gap-0">
          {/* Wide card — 01 */}
          <div className="relative h-[420px] overflow-hidden rounded-[6px] lg:h-[480px] lg:w-[460px] lg:shrink-0 lg:rounded-none">
            <Image
              src="/images/home/industry-restaurant.png"
              alt="Utviklet for serveringsbransjen"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 460px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A1328] via-[#2A1328]/35 to-transparent" />
            <span
              className={`absolute left-4 top-4 rounded-[3px] bg-black/35 px-[6px] py-[3px] text-[10px] leading-none text-white ${MONO}`}
            >
              01
            </span>
            <div className="absolute bottom-6 left-6 right-6">
              <h3
                className={`text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-white ${SANS}`}
              >
                Utviklet for serveringsbransjen
              </h3>
              <p className="mt-3 max-w-[400px] text-[14.5px] leading-[1.55] text-white/80">
                Skreddersydd for restauranter, kafeer, gatekjøkken, barer, food
                trucks og virksomheter med én eller flere lokasjoner.
              </p>
            </div>
          </div>

          {/* Narrow cards — 02, 03, 04 */}
          {narrowCards.map((card) => (
            <div
              key={card.num}
              className="relative h-[420px] overflow-hidden rounded-[6px] lg:h-[480px] lg:flex-1 lg:rounded-none"
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 250px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1328] via-[#2A1328]/30 to-transparent" />
              <span
                className={`absolute left-4 top-4 rounded-[3px] bg-black/35 px-[6px] py-[3px] text-[10px] leading-none text-white ${MONO}`}
              >
                {card.num}
              </span>
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className={`text-[22px] font-semibold leading-[1.25] tracking-[-0.4px] text-white ${SANS}`}
                >
                  {card.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
