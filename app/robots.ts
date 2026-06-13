import type { MetadataRoute } from "next";
import { getRobotsRules, getRobotsSitemapUrl } from "@/lib/site-url";

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
