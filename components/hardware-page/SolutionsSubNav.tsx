import Image from "next/image";
import Link from "next/link";

/**
 * Solutions sub-nav strip shared by the Løsninger overview and the
 * solution subpages (identical in both Figma frames: product thumbnails
 * over two-tone 17px labels, strip height 130).
 */

const subNav = [
  { img: 1, a: "Betalia", b: "POS", sp: true, href: "/hardware/cashier" },
  { img: 2, a: "Online", b: "& QR", sp: true, href: "/hardware/online-qr" },
  { img: 3, a: "Kjøkken", b: "Pluss", sp: false, href: "/hardware/ksd" },
  { img: 4, a: "Kunde", b: "Display", sp: false, href: "/hardware/display" },
  { img: 5, a: "Betalia", b: "Express", sp: true, href: "/hardware/self-kiosk" },
  { img: 6, a: "Back", b: "Office", sp: false, href: "/hardware/back-office" },
];

export default function SolutionsSubNav({
  activeHref,
}: {
  activeHref?: string;
} = {}) {
  return (
    <nav className="flex h-[130px] items-start justify-center gap-[50px] bg-white pt-[20px] max-lg:hidden">
      {subNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex w-[120px] flex-col items-center"
        >
          <Image
            src={`/images/hardware/subnav-${item.img}.png`}
            alt=""
            width={120}
            height={60}
            className="h-[60px] w-[120px] object-contain"
          />
          <span className="mt-[4px] whitespace-nowrap text-[17px] font-medium leading-[22px]">
            <span className="text-[#0A0A0A]">{item.a}</span>{item.sp ? " " : ""}
            <span
              className={
                item.href === activeHref ? "text-[#0A0A0A]" : "text-[#B54F6F]"
              }
            >
              {item.b}
            </span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
