import { PRODUCTION_DOMAIN } from "@/lib/site-url";

type BreadcrumbItem = { name: string; path: string };

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PickOnes",
    url: PRODUCTION_DOMAIN,
    description:
      "PickOnes provides practical game guides, walkthroughs, setup tips, best settings, and beginner-friendly recommendations for Nintendo Switch, Switch 2, retro handhelds, cozy games, and RPG players.",
    inLanguage: "en-US",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PickOnes",
    url: PRODUCTION_DOMAIN,
    logo: `${PRODUCTION_DOMAIN}/logo.png`,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${PRODUCTION_DOMAIN}${item.path}`,
    })),
  };
}

export function gameHubSchema({
  title,
  description,
  path,
  platform,
  genre,
}: {
  title: string;
  description: string;
  path: string;
  platform: string;
  genre: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: title,
    description,
    url: `${PRODUCTION_DOMAIN}${path}`,
    gamePlatform: platform,
    genre,
    inLanguage: "en-US",
  };
}

export function platformPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${PRODUCTION_DOMAIN}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: "PickOnes",
      url: PRODUCTION_DOMAIN,
    },
    inLanguage: "en-US",
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished = "2026-05-01",
  dateModified = "2026-05-01",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${PRODUCTION_DOMAIN}${path}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "PickOnes",
    },
    publisher: {
      "@type": "Organization",
      name: "PickOnes",
      logo: {
        "@type": "ImageObject",
        url: `${PRODUCTION_DOMAIN}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${PRODUCTION_DOMAIN}${path}`,
    },
    inLanguage: "en-US",
  };
}
