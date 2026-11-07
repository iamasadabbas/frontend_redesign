"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useVendorAuth } from "@/context/VendorAuthContext";

export default function VendorPlaceholder() {
  const router = useRouter();
  const { vendor, vendorUser, vendorAccessToken, isVendorAuthLoading, vendorLogout } = useVendorAuth();

  useEffect(() => {
    if (!isVendorAuthLoading && !vendorAccessToken) router.push("/vendor/login");
  }, [isVendorAuthLoading, vendorAccessToken, router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow p-8 text-center space-y-4">
        <h1 className="text-2xl font-semibold">Signed in</h1>
        <p className="text-gray-600">
          {(vendorUser as { name?: string } | null)?.name || (vendor as { name?: string } | null)?.name || "Login succeeded."} The vendor portal is not part of this
          website-only build.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="px-4 py-2 rounded-lg bg-black text-white">
            Home
          </Link>
          <button
            className="px-4 py-2 rounded-lg border"
            onClick={() => {
              vendorLogout();
              router.push("/vendor/login");
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </main>
  );
}
