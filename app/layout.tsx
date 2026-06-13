import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PRODUCTION_DOMAIN, getCanonicalBaseUrl } from "@/lib/site-url";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(getCanonicalBaseUrl()),
  title: {
    default: "PickOnes | Practical Game Guides for Everyday Players",
    template: "%s | PickOnes",
  },
  description:
    "PickOnes provides practical game guides, walkthroughs, setup tips, best settings, and beginner-friendly recommendations for Nintendo Switch, Switch 2, retro handhelds, cozy games, and RPG players.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PickOnes | Practical Game Guides for Everyday Players",
    description:
      "PickOnes provides practical game guides, walkthroughs, setup tips, best settings, and beginner-friendly recommendations for Nintendo Switch, Switch 2, retro handhelds, cozy games, and RPG players.",
    url: PRODUCTION_DOMAIN,
    siteName: "PickOnes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PickOnes | Practical Game Guides for Everyday Players",
    description:
      "PickOnes provides practical game guides, walkthroughs, setup tips, best settings, and beginner-friendly recommendations for Nintendo Switch, Switch 2, retro handhelds, cozy games, and RPG players.",
    creator: "@pickones",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <JsonLd data={websiteSchema()} />
        <JsonLd data={organizationSchema()} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}