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
            {{ $t("pp77") }}
          </p>
          <p class="font-[500] text-white text-3xl md:text-5xl tracking-[-1%]">
            {{ $t("invest with us") }}
          </p>
        </div>
      </div>
    </div>
    <PublicGarySetion>
      <p
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
        class="text-center text-2xl font-semibold text-one0 tracking-[-2%] md:text-4xl"
      >
        {{ $t("invest with us") }}
      </p>
      <p
        data-aos="fade-down"
        data-aos-duration="300"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
        class="text-center text-lg font-normal mx-auto max-w-[936px] mt-4 mb-6 md:mb-8 text-six6 md:text-xl"
      >
        {{ $t("investDes") }}
      </p>
      
      <!-- Form Component -->
      <div class="mt-8">
        <FormsInvestFormIsland :url="url" :locale="locale" />
      </div>
    </PublicGarySetion>
  </section>
</template>

<script setup>
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const url = config.public.ConstUrl;

useSeoMeta({
  title: t("seoMega.careers.title"),
  description: t("seoMega.careers.description"),
  ogTitle: t("seoMega.careers.title"),
  ogDescription: t("seoMega.careers.description"),
  ogUrl: `https://www.idealstores.com.sa/${locale.value}/invest-with-us`,
  ogImage: "https://www.idealstores.com.sa/logo.webp",
  ogImageAlt: t("altText.logo"),
  ogSiteName: t("seoMega.careers.title"),
  ogType: "website",
  ogImageType: "image/webp",
  ogImageUrl: "https://www.idealstores.com.sa/logo.webp",
  ogLocale: locale.value,
  ogLocaleAlternate: locale.value === "en" ? "ar" : "en",
  twitterTitle: t("seoMega.careers.title"),
  twitterDescription: t("seoMega.careers.description"),
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
