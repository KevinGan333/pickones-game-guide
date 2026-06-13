import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ---- Old product inquiry / catalog URLs → new guide pages ----
      {
        source: "/products",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/products/:path*",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/shop/:path*",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/product-category",
        destination: "/platforms",
        permanent: true,
      },
      {
        source: "/product-category/:path*",
        destination: "/platforms",
        permanent: true,
      },
      {
        source: "/product-tag/:path*",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/product/:path*",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/inquiry",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/inquiry/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/quote",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/quote/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/request-quote",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/add-to-quote",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/cart",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/checkout",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/my-account",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/my-account/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/wishlist",
        destination: "/games",
        permanent: true,
      },

      // ---- Old blog URLs → /guides or /news ----
      {
        source: "/blog",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/category",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/tag",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/guides",
        permanent: true,
      },

      // ---- Old phone accessories / office electronics → /gear ----
      {
        source: "/phone-accessories",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/phone-accessories/:path*",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/office-electronics",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/office-electronics/:path*",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/electronics",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/electronics/:path*",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/accessories",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/accessories/:path*",
        destination: "/gear",
        permanent: true,
      },

      // ---- Old about / contact → new About page ----
      {
        source: "/contact",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/about",
        permanent: true,
      },

      // ---- Old sitemap / feed URLs → new ----
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/feed/:path*",
        destination: "/news",
        permanent: true,
      },

      // ---- WooCommerce / WP REST API → redirect to home ----
      {
        source: "/wp-json/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wc-api/:path*",
        destination: "/",
        permanent: true,
      },

      // ---- Buying guides → /gear ----
      {
        source: "/buying-guides",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/buying-guides/:path*",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/buying-guide",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/buying-guide/:path*",
        destination: "/gear",
        permanent: true,
      },

      // ---- WordPress author archives → /about ----
      {
        source: "/author",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/about",
        permanent: true,
      },

      // ---- WordPress pagination → home ----
      {
        source: "/page/:path*",
        destination: "/",
        permanent: true,
      },

      // ---- WordPress date archives → /news ----
      {
        source: "/2025",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/2025/:path*",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/2024",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/2024/:path*",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/2026",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/2026/:path*",
        destination: "/news",
        permanent: true,
      },

      // ---- Miscellaneous old patterns ----
      {
        source: "/store",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/store/:path*",
        destination: "/gear",
        permanent: true,
      },
      {
        source: "/product-page",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/product-page/:path*",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/reviews/page/:path*",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/guides/page/:path*",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/news/page/:path*",
        destination: "/news",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
