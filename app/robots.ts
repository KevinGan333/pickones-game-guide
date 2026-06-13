import type { MetadataRoute } from "next";
import { getRobotsRules, getRobotsSitemapUrl } from "@/lib/site-url";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const rules = await getRobotsRules();
  const sitemap = await getRobotsSitemapUrl();

  return {
    rules: {
      userAgent: rules.userAgent,
      allow: rules.allow,
      disallow: rules.disallow,
    },
    sitemap,
  };
}
