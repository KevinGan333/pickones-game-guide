import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    (process.env.NODE_ENV === "production" && !process.env.VERCEL_URL);

  if (!isProduction) {
    // Block all crawling on Vercel preview / staging deployments
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: undefined,
    };
  }

  // Production — allow crawling with restrictions
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/", "/search", "/tag/", "/author/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
