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
            {{ $t("pp7") }}
          </p>
          <p class="font-[500] text-white text-3xl md:text-5xl tracking-[-1%]">
            {{ $t("blogs") }}
          </p>
        </div>
      </div>
    </div>

    <WhiteSetion>
      <div
        class="flex justify-end md:justify-between gap-4 items-center"
      >
        <p class="text-three0 font-medium hidden md:block md:text-3xl">
          {{ $t("blogs") }}
        </p>
        <div class="w-full flex flex-col justify-end items-end">
          <div
            class="relative mahmoud bg-fc w-1/2 xl:w-1/3 rounded-lg flex gap-2 item-center py-3 px-4 border border-db"
          >
            <Icon name="hugeicons:search-01" class="text-nine9" size="1.5rem" />
            <input
              name="search"
              v-model="showval"
              :placeholder="$t('common.search')"
              class="placeholder:text-seven8 w-full outline-none text-seven8 bg-transparent placeholder:font-normal font-normal placeholder:text-sm text-sm"
              type="search"
              id="search"
            />
            <div
              v-if="show && showval && showval?.length > 3"
              class="absolute z-10 mt-12 left-0 px-4 py-3 w-full bg-white border border-d0 shadow-form rounded-lg"
            >
              {{ showval }}
            </div>
          </div>
          <p v-if="showval && showval.length > 0 && showval.length < 4" class="text-red-600 text-sm md:text-base mt-1">
            {{ $t("Search term too short") || "Search term too short" }}
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 md:gap-12 my-4">
        <ResuxLink
          :to="localePath(`/blog/1`)"
          v-for="i in 9"
          :key="i"
          class="bg-white w-fit md:w-full grid lg:grid-cols-2 items-center shadow-carding space-y-4 rounded-lg border border-e9"
        >
          <img
            :src="img"
            loading="lazy"
            alt="img"
            class="object-cover h-full rounded-md"
          />
          <div class="px-4">
            <p class="text-three3 text-xl md:text-2xl">
              {{ $t("Product Name") }}
            </p>
            <div>
              <p class="text-six6 text-sm md:text-base" v-for="j in 4" :key="j">
                {{ $t("Product Description should be written here") }}
              </p>
            </div>
          </div>
        </ResuxLink>
      </div>
      <div
        class="rounded-[6px] cursor-pointer py-3 border text-center mx-auto my-4 block w-fit border-db text-fourb text-sm font-medium transition-all duration-300 hover:bg-zero3 hover:text-white md:py-3 bg-white px-6 md:px-8"
      >
        {{ $t("Load more") }}
      </div>
    </WhiteSetion>
  </section>
</template>

<script setup>
const img = "/assets/products/img.webp";

const { t, locale } = useI18n();

const show = ref(true);
const showval = ref("");

watch(showval, (newVal) => {
  if (newVal && newVal.length > 3) {
    show.value = true;
  }
});


const localePath = useLocalePath();

useSeoMeta({
  title: t("seoMega.products.title"),
  description: t("seoMega.products.description"),
  ogTitle: t("seoMega.products.title"),
  ogDescription: t("seoMega.products.description"),
  ogUrl: `https://www.idealstores.com.sa/${locale.value}/products`,
  ogImage: "https://www.idealstores.com.sa/logo.webp",
  ogImageAlt: t("altText.logo"),
  ogSiteName: t("seoMega.products.title"),
  ogType: "website",
  ogImageType: "image/webp",
  ogImageUrl: "https://www.idealstores.com.sa/logo.webp",
  ogLocale: locale.value,
  ogLocaleAlternate: locale.value === "en" ? "ar" : "en",
  twitterTitle: t("seoMega.products.title"),
  twitterDescription: t("seoMega.products.description"),
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
