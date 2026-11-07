import type { MetadataRoute } from "next";
import { siteName } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description:
      "Betalia er et komplett kassesystem og restaurantplattform for servering, kafé og takeaway.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/brand/betalia-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/betalia-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
