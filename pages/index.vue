<template>
  <div>
    <HomeComponent />
    <HomeAboutUs />
    <HomeSquares />
    <HomeOffer />
    <HomeStandards />
    <HomeOurClients />
    <HomeGallery />
    <HomeForm />
  </div>
</template>

<script setup>
const { t, locale } = useI18n();

useSeoMeta({
  title: t("seoMega.home.title"),
  description: t("seoMega.home.description"),
  ogTitle: t("seoMega.home.title"),
  ogDescription: t("seoMega.home.description"),
  ogUrl: `https://www.idealstores.com.sa/${locale.value}`,
  ogImage: "https://www.idealstores.com.sa/logo.webp",
  ogImageAlt: t("altText.logo"),
  ogSiteName: t("seoMega.home.title"),
  ogType: "website",
  ogImageType: "image/webp",
  ogImageUrl: "https://www.idealstores.com.sa/logo.webp",
  ogLocale: locale.value,
  ogLocaleAlternate: locale.value === "en" ? "ar" : "en",
  twitterTitle: t("seoMega.home.title"),
  twitterDescription: t("seoMega.home.description"),
  twitterImage: "https://www.idealstores.com.sa/logo.webp",
  twitterCard: "summary",
  fbAppId: "123456789",
});
</script>
