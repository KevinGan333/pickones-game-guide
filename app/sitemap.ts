import type { MetadataRoute } from "next";
import { games } from "@/data/games";
import { guideContents } from "@/data/guides";
import { standaloneGuides } from "@/data/standalone-guides";
import { platforms } from "@/data/platforms";
import { reviewContents } from "@/data/reviews";
import { gearItems } from "@/data/gear";
import { shouldServeFullSitemap, PRODUCTION_DOMAIN } from "@/lib/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = PRODUCTION_DOMAIN;
  const now = new Date();

  if (!(await shouldServeFullSitemap())) {
    return [
      {
        url: baseUrl,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 1,
      },
    ];
  }

  const staticRoutes = [
    "",
    "/games",
    "/guides",
    "/platforms",
    "/gear",
    "/reviews",
    "/news",
    "/about",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const gameRoutes = games.map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const guideRoutes = guideContents.map((guide) => ({
    url: `${baseUrl}/games/${guide.gameSlug}/${guide.guideSlug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const standaloneGuideRoutes = standaloneGuides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const platformRoutes = platforms.map((platform) => ({
    url: `${baseUrl}/platforms/${platform.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const reviewRoutes = reviewContents.map((review) => ({
    url: `${baseUrl}/reviews/${review.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const gearRoutes = gearItems.map((item) => ({
    url: `${baseUrl}/gear/${item.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...gameRoutes,
    ...guideRoutes,
    ...standaloneGuideRoutes,
    ...platformRoutes,
    ...reviewRoutes,
    ...gearRoutes,
  ];
}
