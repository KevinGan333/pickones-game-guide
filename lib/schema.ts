import { siteConfig } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
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
      item: `${siteConfig.url}${item.path}`,
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
    url: `${siteConfig.url}${path}`,
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
    url: `${siteConfig.url}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
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
    url: `${siteConfig.url}${path}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${path}`,
    },
    inLanguage: "en-US",
  };
}