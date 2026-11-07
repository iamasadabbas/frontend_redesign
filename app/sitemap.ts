import type { MetadataRoute } from "next";
import { absoluteUrl, apiInternalUrl } from "@/lib/seo";

export const revalidate = 3600;

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/hardware", priority: 0.9, changeFrequency: "weekly" },
  { path: "/hardware/cashier", priority: 0.8, changeFrequency: "monthly" },
  { path: "/hardware/self-kiosk", priority: 0.8, changeFrequency: "monthly" },
  { path: "/hardware/display", priority: 0.8, changeFrequency: "monthly" },
  { path: "/hardware/ksd", priority: 0.8, changeFrequency: "monthly" },
  { path: "/hardware/online-qr", priority: 0.8, changeFrequency: "monthly" },
  { path: "/hardware/back-office", priority: 0.8, changeFrequency: "monthly" },
];

type CompanyHandle = { handle: string; updatedAt?: string };

async function fetchVendorHandles(): Promise<CompanyHandle[]> {
  try {
    const res = await fetch(`${apiInternalUrl}/company-handles`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    if (!json?.success || !Array.isArray(json.data)) return [];
    return json.data;
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const vendors = await fetchVendorHandles();

  const vendorEntries: MetadataRoute.Sitemap = vendors
    .filter((v) => v?.handle)
    .map((v) => ({
      url: absoluteUrl(`/${v.handle}`),
      lastModified: v.updatedAt ? new Date(v.updatedAt) : new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    }));

  return [...staticEntries, ...vendorEntries];
}
