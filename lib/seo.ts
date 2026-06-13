import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { getCanonicalBaseUrl, PRODUCTION_DOMAIN } from "@/lib/site-url";

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  image = "/og-default.jpg",
  type = "website",
  noIndex = false,
}: SeoOptions): Metadata {
  const url = `${PRODUCTION_DOMAIN}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(getCanonicalBaseUrl()),
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
