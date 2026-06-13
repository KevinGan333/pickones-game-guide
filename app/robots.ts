import type { MetadataRoute } from "next";
import { getRobotsRules, getRobotsSitemapUrl } from "@/lib/site-url";

// Force dynamic so VERCEL_ENV is checked at request time, not build time
export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  const rules = getRobotsRules();
  const sitemap = getRobotsSitemapUrl();

  return {
    rules: {
      userAgent: rules.userAgent,
      allow: rules.allow,
      disallow: rules.disallow,
    },
    sitemap,
  };
}
