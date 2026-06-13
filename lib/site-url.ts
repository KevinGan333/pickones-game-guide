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

// ---- Environment detection ----

/**
 * Returns true if the current build is a production deployment
 * on the custom domain. Vercel Preview and local dev return false.
 */
export function isProductionDeployment(): boolean {
  // Vercel sets VERCEL_ENV to "production", "preview", or "development"
  if (process.env.VERCEL_ENV) {
    return process.env.VERCEL_ENV === "production";
  }

  // Local production build (npm run build && npm run start without Vercel)
  // Treat as production-like for sitemap/robots
  if (process.env.NODE_ENV === "production" && !process.env.VERCEL_URL) {
    return true;
  }

  return false;
}

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

/** Sitemap base URL — only used in production */
export function getSitemapBaseUrl(): string {
  return PRODUCTION_DOMAIN;
}

/**
 * Returns true if the full sitemap should be served.
 * Only true in production — preview/staging get a minimal sitemap.
 */
export function shouldServeFullSitemap(): boolean {
  return isProductionDeployment();
}

/**
 * Returns robots.txt rules based on environment.
 * Preview: block all · Production: allow with selective disallow.
 */
export function getRobotsRules(): {
  userAgent: string;
  allow?: string;
  disallow: string | string[];
} {
  if (isProductionDeployment()) {
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
export function getRobotsSitemapUrl(): string | undefined {
  if (isProductionDeployment()) {
    return `${PRODUCTION_DOMAIN}/sitemap.xml`;
  }
  return undefined;
}
