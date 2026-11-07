import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

// Shared disallow list: anything behind login (vendor/admin dashboards, the
// cashier/kiosk/display/checkout/track in-store app surfaces per restaurant)
// plus internal API routes. Public landing pages and restaurant menu pages
// are intentionally NOT in this list so crawlers (search + AI) can read them.
const disallow = [
  "/admin",
  "/vendor",
  "/cashier",
  "/api",
  "/gift-card",
  "/*/cashier",
  "/*/kiosk",
  "/*/display",
  "/*/checkout",
  "/*/track",
];

// `/*/cashier` and `/*/display` are also a prefix-match for the public
// `/hardware/cashier` and `/hardware/display` product pages. Robots.txt
// resolves overlapping rules by the most specific (longest) match, with
// allow winning ties, so explicit allow entries for the real product paths
// override the wildcard disallow above.
const hardwareAllow = [
  "/hardware/cashier",
  "/hardware/self-kiosk",
  "/hardware/display",
  "/hardware/ksd",
  "/hardware/online-qr",
  "/hardware/back-office",
];

// AI assistant / answer-engine crawlers get their own explicit rule groups so
// intent isn't left to default-rule guessing: same public surface, same
// disallow list as everyone else.
const aiUserAgents = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  const rules: MetadataRoute.Robots["rules"] = [
    {
      userAgent: "*",
      allow: ["/", ...hardwareAllow],
      disallow,
    },
    {
      userAgent: "Googlebot",
      allow: ["/", ...hardwareAllow],
      disallow,
    },
    {
      userAgent: "Bingbot",
      allow: ["/", ...hardwareAllow],
      disallow,
    },
    ...aiUserAgents.map((userAgent) => ({
      userAgent,
      allow: ["/", ...hardwareAllow],
      disallow,
    })),
  ];

  return {
    rules,
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
