import SolutionsSubNav from "./SolutionsSubNav";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Hardware header + solutions sub-nav, pixel-matched to the Figma
 * "Løsninger" frame: full-width white header (h80) with the full
 * Betalia logo lockup at x16, "Løsninger" (bold, active) + "Support"
 * nav at x602, pink "Få et tilbud" and bold "Kundeportal" at right;
 * below it a 130px sub-nav strip with the six solutions as product
 * thumbnails (cropped from the Figma export) over two-tone labels.
 */


export default function HardwarePageHeader() {
  return (
    <>
      <header className="relative flex h-[80px] items-center bg-white px-4 pt-[9px]">
        <Link href="/" aria-label="Betalia" className="shrink-0">
          <Image
            src="/images/betalia_logo_burgundy.png"
            alt="Betalia"
            width={533}
            height={149}
            className="h-[34px] w-auto"
            priority
          />
        </Link>

        <nav className="ml-[464px] hidden items-center gap-[42px] text-[16px] text-[#0A0A0A] lg:flex">
          <Link href="/hardware" className="font-bold">
            Løsninger
          </Link>
          <Link href="/contact" className="font-medium">
            Support
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-[42px] text-[16px]">
          <button
            type="button"
            className="hidden items-center gap-2 font-medium text-[#B54F6F] lg:flex"
          >
            Få et tilbud
            <ArrowRight size={18} />
          </button>
          <Link href="/vendor/login" className="font-bold text-[#0A0A0A]">
            Kundeportal
          </Link>
        </div>
      </header>

      <SolutionsSubNav />
    </>
  );
}
