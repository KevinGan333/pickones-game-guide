/**
 * Environment-safe URL configuration for PickONEs.
 *
 * Preview (Vercel / staging):
 *   - robots.txt  → Disallow: / (block all crawlers)
 *   - sitemap.xml → minimal (homepage only)
 *   - canonical   → always points to production domain
 *
 * Production (www.pickones.com):
 *   - robots.txt  → Allow: / (selective disallow)
 *   - sitemap.xml → full 36+ URLs
 *   - canonical   → https://www.pickones.com/...
 */

// ---- Domain constants ----

export const PRODUCTION_DOMAIN = "https://www.pickones.com";

// ---- URL helpers ----

/** Canonical base URL — always the production domain, even on preview */
export function getCanonicalBaseUrl(): string {
  return PRODUCTION_DOMAIN;
}

/** Build a full canonical URL for the given path */
export function getCanonicalUrl(path: string): string {
  const base = getCanonicalBaseUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

/** Sitemap base URL — always production domain */
export function getSitemapBaseUrl(): string {
  return PRODUCTION_DOMAIN;
}

/**
 * Checks whether the current request comes from the production domain.
 * Used by robots.ts and sitemap.ts at request time.
 *
 * This is more reliable than VERCEL_ENV because it checks the actual
 * incoming Host header rather than build-time environment variables.
 */
export async function isProductionHost(): Promise<boolean> {
  try {
    const { headers } = await import("next/headers");
    const headersList = await headers();
    const host = headersList.get("host") || "";
    return host === "www.pickones.com" || host === "pickones.com";
  } catch {
    // Fallback: if next/headers is unavailable (unlikely), use env vars
    if (process.env.VERCEL_ENV) {
      return process.env.VERCEL_ENV === "production";
    }
    return false;
  }
}

/**
 * Returns true if the full sitemap should be served.
 * Only true in production — preview/staging get a minimal sitemap.
 */
export async function shouldServeFullSitemap(): Promise<boolean> {
  return isProductionHost();
}

/**
 * Returns robots.txt rules based on host.
 * Preview: block all · Production: allow with selective disallow.
 */
export async function getRobotsRules(): Promise<{
  userAgent: string;
  allow?: string;
  disallow: string | string[];
}> {
  const production = await isProductionHost();

  if (production) {
    return {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/", "/search", "/tag/", "/author/"],
    };
  }

  return {
    userAgent: "*",
    disallow: "/",
  };
}

/** Returns the sitemap URL for robots.txt — only in production */
export async function getRobotsSitemapUrl(): Promise<string | undefined> {
  const production = await isProductionHost();
  if (production) {
    return `${PRODUCTION_DOMAIN}/sitemap.xml`;
  }
  return undefined;
}
