// Shared SEO helpers: site-wide constants plus small builders for JSON-LD
// structured data. Keeping these in one place avoids every page re-deriving
// the site URL / name and re-typing JSON-LD boilerplate.

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://betalia.no"
).replace(/\/$/, "");

export const siteName = "Betalia";

export const defaultDescription =
  "Betalia er et komplett kassesystem og restaurantplattform for servering, kafé og takeaway - kasse, selvbetjening, kjøkkenskjerm, display og online bestilling i ett system.";

export const defaultOgImage = `${siteUrl}/images/hardware-hero.png`;

/** Build an absolute URL from a site-relative path (e.g. "/hardware"). */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Server-side base URL for fetches made from inside the frontend container.
 * In Docker, NEXT_PUBLIC_API_URL may point at a host-only address
 * (e.g. http://localhost:3001) that isn't reachable from inside the
 * frontend container. API_INTERNAL_URL lets us override that for
 * server-side fetches only, falling back to the public API URL.
 */
export const apiInternalUrl = (
  process.env.API_INTERNAL_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api.betalia.no"
).replace(/\/$/, "");

type JsonLdValue = Record<string, unknown>;

/** Serialize a JSON-LD object for embedding in a <script> tag, escaping `<`
 * so a value can never prematurely close the script element. */
export function jsonLdScript(data: JsonLdValue | JsonLdValue[]): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationJsonLd(opts?: {
  email?: string;
  phone?: string;
  sameAs?: string[];
}): JsonLdValue {
  const data: JsonLdValue = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/brand/betalia-512.png"),
  };

  if (opts?.email || opts?.phone) {
    data.contactPoint = {
      "@type": "ContactPoint",
      ...(opts.email ? { email: opts.email } : {}),
      ...(opts.phone ? { telephone: opts.phone } : {}),
      contactType: "customer support",
    };
  }

  if (opts?.sameAs?.length) {
    data.sameAs = opts.sameAs;
  }

  return data;
}

export function websiteJsonLd(): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
  };
}

export function softwareApplicationJsonLd(): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android",
    description: defaultDescription,
    url: siteUrl,
    // No `offers`/`aggregateRating` — no price or review data exists in any
    // marketing component, and schema.org disallows fabricating them.
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageJsonLd(
  faqs: { question: string; answer: string }[]
): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function productJsonLd(opts: {
  name: string;
  description: string;
  image: string;
  category?: string;
  price?: number;
  priceCurrency?: string;
}): JsonLdValue {
  const data: JsonLdValue = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    image: opts.image,
    brand: {
      "@type": "Brand",
      name: siteName,
    },
  };

  if (opts.category) data.category = opts.category;

  if (typeof opts.price === "number") {
    data.offers = {
      "@type": "Offer",
      price: opts.price,
      priceCurrency: opts.priceCurrency || "NOK",
      availability: "https://schema.org/InStock",
    };
  }

  return data;
}
