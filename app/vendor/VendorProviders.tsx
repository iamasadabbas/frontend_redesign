"use client";

import { VendorAuthProvider } from "@/context/VendorAuthContext";

export default function VendorProviders({ children }: { children: React.ReactNode }) {
  return <VendorAuthProvider>{children}</VendorAuthProvider>;
}
