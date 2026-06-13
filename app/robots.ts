import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/private/",
        "/search",
        "/tag/",
        "/author/",
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}