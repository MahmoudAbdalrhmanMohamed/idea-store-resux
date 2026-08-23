export default defineResuxConfig({
  css: ["/tailwind.css"],
  modules: [
    "resux:security",
    ["resux:performance", { assetMaxAge: 31536000 }],
    ["resuxjs/fonts", {
      google: [
        { name: "Inter", weights: [400, 500, 600, 700, 800], display: "swap" },
        { name: "Alexandria", weights: [300, 400, 500, 600, 700], display: "swap" }
      ]
    }],
    ["resuxjs/icons", {
      component: "Icon",
      mode: "svg",
      collections: ["material-symbols", "mdi", "mingcute", "cib", "uil", "line-md", "gg", "iconoir", "solar", "streamline", "lineicons", "hugeicons", "icon-park-solid", "svg-spinners"]
    }],
    ["resuxjs/ui", {
      tokens: {
        accent: "#03C8BF",
        heroOverlay: "rgba(0,0,0,0.55)"
      }
    }],
    ["resux:i18n", {
      defaultLocale: "en",
      strategy: "prefix",
      locales: [
        { code: "en", name: "English", dir: "ltr" },
        { code: "ar", name: "Arabic", dir: "rtl" }
      ],
      messages: {
        en: "./i18n/locales/en.json",
        ar: "./i18n/locales/ar.json"
      }
    }]
  ],
  packages: {
    mode: {
      swiper: "progressive",
      "date-fns": "ssr",
      "v-calendar": "clientOnly",
      "vee-validate": "clientOnly"
    },
    css: {
      swiper: [
        "swiper/css",
        "swiper/css/navigation",
        "swiper/css/pagination"
      ],
      "v-calendar": [
        "v-calendar/dist/style.css"
      ]
    }
  },
  runtimeConfig: {
    public: {
      ConstUrl: process.env.RESUX_PUBLIC_CONSTURL || process.env.NUXT_PUBLIC_CONSTURL || "https://isp.megatron-soft.com/api/v1",
      image: {
        provider: "resux",
        quality: 82,
        format: "webp",
        densities: [1, 2],
        providers: {
          resux: { baseURL: "/__resux/image" }
        }
      }
    }
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/webp", href: "/logo.webp" },
        { rel: "apple-touch-icon", href: "/logo.webp", type: "image/webp" }
      ]
    }
  }
});
