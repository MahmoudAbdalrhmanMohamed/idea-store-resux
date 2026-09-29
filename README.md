# Idea Store — Resux

This application runs on [Resux](https://github.com/MahmoudAbdalrhmanMohamed/resux) and is configured for deployment on Vercel.

## Requirements

- Node.js 20.19.x, or Node.js 22.12 or newer
- npm
- Resux is pinned to the current `next` beta `resuxjs@0.4.0-beta.4`

## Local development

```bash
npm ci
npm run check
npm run dev
```

The development server runs on:

```text
http://localhost:6534
```

## Environment

Copy `.env.example` to `.env` when you need local environment overrides:

```bash
cp .env.example .env
```

The public API URL is optional because the application has the same URL as a built-in fallback:

```env
RESUX_PUBLIC_CONSTURL=https://isp.megatron-soft.com/api/v1
```

Resux production builds require a report-signing secret:

```env
RESUX_HALAL_REPORT_SIGNING_SECRET=replace-with-a-unique-32-plus-character-secret
```

Use a unique value with at least 32 characters. Never commit the real production secret.

## Production build

Set `RESUX_HALAL_REPORT_SIGNING_SECRET`, then run:

```bash
npm ci
npm run check
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Vercel

The repository includes `vercel.json`. Vercel runs:

```bash
npm run build
```

Resux detects the Vercel environment and produces the Vercel Build Output automatically.

Configure the Vercel project with:

- Node.js 20.19.x, or Node.js 22.12 or newer
- `RESUX_HALAL_REPORT_SIGNING_SECRET` for Production and Preview, using a unique value of at least 32 characters
- `RESUX_PUBLIC_CONSTURL` only when the deployed API base URL must differ from the built-in default

Do not store the production signing secret in the repository.

## Main Resux configuration

- `resux.config.ts` — Resux modules, i18n, runtime config, fonts, icons, UI and package modes
- `nitro.config.ts` — server adapter/runtime routing configuration
- `client-enhancements/` — progressive browser integrations such as Swiper
- `islands/vue/` — Vue-owned interactive islands
- `pages/` — file-based application routes
