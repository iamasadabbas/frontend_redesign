import type { Metadata } from "next";
import VendorProviders from "./VendorProviders";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function VendorLayout({ children }: { children: React.ReactNode }) {
  return <VendorProviders>{children}</VendorProviders>;
}
