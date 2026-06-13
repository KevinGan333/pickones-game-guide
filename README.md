# PickOnes Game Guide

A practical game guide website for Nintendo Switch, Switch 2, retro handhelds, cozy games, RPGs, and family-friendly players. Built with Next.js App Router + TypeScript + Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev      # Development server (Turbopack)
npm run lint     # ESLint
npm run build    # Production build
npm run start    # Production server
```

## Project Structure

```
pickones-game-guide/
├── app/                    # Next.js App Router
│   ├── about/              # About page
│   ├── games/              # Game hub & detail pages
│   │   ├── [gameSlug]/     # Per-game detail page
│   │   └── [gameSlug]/[guideSlug]/  # Guide detail page
│   ├── gear/               # Gaming gear guides
│   │   └── [gearSlug]/     # Per-gear detail page
│   ├── guides/             # All guides index
│   ├── news/               # News & updates
│   ├── platforms/          # Platform hubs
│   │   └── [platformSlug]/ # Per-platform detail
│   ├── reviews/            # Game reviews
│   │   └── [reviewSlug]/   # Review detail page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   └── globals.css         # Global styles (Tailwind)
├── components/             # Shared components
│   ├── SiteHeader.tsx      # Navigation (desktop + mobile)
│   ├── SiteFooter.tsx      # Footer
│   └── JsonLd.tsx          # JSON-LD schema component
├── data/                   # Content data files
│   ├── games.ts            # Game definitions
│   ├── guides.ts           # Guide content
│   ├── platforms.ts        # Platform definitions
│   ├── reviews.ts          # Review content
│   └── gear.ts             # Gear definitions
├── lib/                    # Shared utilities
│   ├── site.ts             # Site configuration
│   ├── seo.ts              # SEO metadata helpers
│   └── schema.ts           # JSON-LD schema generators
├── public/                 # Static assets
└── next.config.ts          # Next.js config (includes redirects)
```

## Core Navigation

- **Home** — `/`
- **Games** — `/games` (index) + `/games/[gameSlug]` (detail)
- **Guides** — `/guides` (index) + `/games/[gameSlug]/[guideSlug]` (detail)
- **Platforms** — `/platforms` (index) + `/platforms/[platformSlug]` (detail)
- **Gear** — `/gear` (index) + `/gear/[gearSlug]` (detail)
- **Reviews** — `/reviews` (index) + `/reviews/[reviewSlug]` (detail)
- **News** — `/news`
- **About** — `/about`

## SEO Features

- Dynamic sitemap.xml generation
- robots.txt with crawl rules
- Canonical URLs on all pages
- JSON-LD structured data (WebSite, Organization, BreadcrumbList, VideoGame, Article)
- Open Graph and Twitter card metadata
- Semantic HTML with proper heading hierarchy

## Deployment

Production deployment uses Node.js + PM2 + Nginx reverse proxy with HTTPS (Let's Encrypt).

1. Copy project to `/var/www/pickones-game-guide/`
2. `npm ci --production && npm run build`
3. Start with PM2: `pm2 start ecosystem.config.cjs`
4. Configure Nginx with `nginx-pickones.conf`
5. Set up HTTPS: `certbot --nginx -d www.pickones.com -d pickones.com`

## Redirects

The site includes 30+ redirect rules in `next.config.ts` to handle old WooCommerce, product, blog, and category URLs from the previous PickOnes site.
