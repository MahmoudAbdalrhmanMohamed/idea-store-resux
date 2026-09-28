# Idea Store — Resux

This application runs on [Resux](https://github.com/MahmoudAbdalrhmanMohamed/resux) and is configured for deployment on Vercel.

## Requirements

- Node.js 20.19 or newer
- npm
- Resux is installed from npm through the `resuxjs` dependency

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

Copy `.env.example` to `.env` when you need to override the public API base URL:

```bash
cp .env.example .env
```

```env
RESUX_PUBLIC_CONSTURL=https://isp.megatron-soft.com/api/v1
```

If the variable is not set, the application uses the same URL as its built-in default.

## Production build

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

For Vercel, use Node.js 20.19+ and configure `RESUX_PUBLIC_CONSTURL` only if the production API base URL must differ from the built-in default.

## Main Resux configuration

- `resux.config.ts` — Resux modules, i18n, runtime config, fonts, icons, UI and package modes
- `nitro.config.ts` — server adapter/runtime routing configuration
- `client-enhancements/` — progressive browser integrations such as Swiper
- `islands/vue/` — Vue-owned interactive islands
- `pages/` — file-based application routes
