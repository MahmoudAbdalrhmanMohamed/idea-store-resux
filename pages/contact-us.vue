<template>
  <section>
    <div class="h-[300px] md:h-[448px] relative w-full bg-two3">
      <div
        class="test w-full h-full object-cover absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
      ></div>
      <div class="containerClass relative z-10 w-full h-full">
        <div
          class="flex gap-4 flex-col items-start justify-end md:pb-16 pb-8 w-full h-full"
        >
          <p class="font-[400] text-white text-xl md:text-2xl tracking-[-1%]">
            {{ $t("pp4") }}
          </p>
          <p class="font-[500] text-white text-3xl md:text-5xl tracking-[-1%]">
            {{ $t("herocontactUs") }}
          </p>
        </div>
      </div>
    </div>

    <FormGary />
  </section>
</template>

<script setup>
const { t, locale } = useI18n();

useSeoMeta({
  title: t("seoMega.contact.title"),
  description: t("seoMega.contact.description"),
  ogTitle: t("seoMega.contact.title"),
  ogDescription: t("seoMega.contact.description"),
  ogUrl: `https://www.idealstores.com.sa/${locale.value}/contact-us`,
  ogImage: "https://www.idealstores.com.sa/logo.webp",
  ogImageAlt: t("altText.logo"),
  ogSiteName: t("seoMega.contact.title"),
  ogType: "website",
  ogImageType: "image/webp",
  ogImageUrl: "https://www.idealstores.com.sa/logo.webp",
  ogLocale: locale.value,
  ogLocaleAlternate: locale.value === "en" ? "ar" : "en",
  twitterTitle: t("seoMega.contact.title"),
  twitterDescription: t("seoMega.contact.description"),
  twitterImage: "https://www.idealstores.com.sa/logo.webp",
  twitterCard: "summary",
  fbAppId: "123456789",
});
</script>

<style scoped>
.test {
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
}
</style>
