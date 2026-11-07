import Image from "next/image";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

const industries = [
  { name: "Restaurant", img: "/images/home/industry-restaurant.png" },
  { name: "Kafé", img: "/images/home/industry-kafe.png" },
  { name: "Bakeri", img: "/images/home/industry-bakeri.png" },
  { name: "Fastfood", img: "/images/home/industry-fastfood.png" },
];

/** Bransjer — deep #2A1328 outer, inner side borders white 7.84%,
 *  padding 104/32. Cards 460 tall: first 460 wide, others flexible,
 *  number chip top-left, caption bottom-left, dark gradient at base. */
export default function HomeIndustries() {
  return (
    <section className="bg-[#2A1328] px-0 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-white/[0.0784] px-5 py-[104px] sm:px-8 lg:px-[32px]">
        <p
          className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#DDA6BE] ${MONO}`}
        >
          — Bransjer —
        </p>
        <h2 className={`mt-4 max-w-[620px] text-[40px] font-semibold leading-[1.1] tracking-[-1.6px] text-white lg:text-[48px] ${SANS}`}>
          Bransjetilpasset programvare
        </h2>

        <div className="mt-[56px] flex flex-col gap-4 lg:flex-row lg:gap-0">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`relative h-[460px] overflow-hidden rounded-[6px] lg:rounded-none ${
                i === 0 ? "lg:w-[460px] lg:shrink-0" : "lg:flex-1"
              }`}
            >
              <Image
                src={ind.img}
                alt={ind.name}
                fill
                className="object-cover"
                sizes={i === 0 ? "460px" : "240px"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1328] via-transparent to-transparent" />
              <span
                className={`absolute left-4 top-4 rounded-[3px] bg-black/30 px-[6px] py-[3px] text-[10px] leading-none text-white ${MONO}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className={`absolute bottom-6 left-6 text-[26px] font-semibold leading-none tracking-[-0.6px] text-white ${SANS}`}>
                {ind.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
