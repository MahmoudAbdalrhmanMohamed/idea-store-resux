<template>
  <header class="w-full absolute z-20">
    <div class="hidden lg:block">
      <HeaderLargeHeaderTop />
    </div>
    <nav class="containerClass pt-4 lg:pt-3">
      <div
        class="border-b border-b-d9 pb-3 w-full flex items-center justify-between"
      >
        <ResuxLink
          class="flex gap-1 items-center"
          :class="locale.value === 'ar' ? 'flex-row-reverse text-left' : ''"
          :to="localePath('/')"
        >
          <ResuxImg
            :src="logo"
            class="w-[40px] h-[72px] lg:h-[80px] object-contain"
            loading="eager"
            alt="img"
          />
          <div>
            <p class="text-white text-xl font-bold text-nowrap">
              Ideal Stores
            </p>
            <p class="text-white text-xs font-normal">
              Pharmaceutical<br />& medical co.
            </p>
          </div>
        </ResuxLink>

        <HeaderLargeHeader />
        <HeaderSmallHeader />
      </div>
    </nav>
  </header>
</template>

<script setup>
const logo = "/assets/logo.webp";
const props = defineProps({
  color: {
    default: false,
  },
});
const localePath = useLocalePath();
useHead({
  link: [
    {
      rel: "preload",
      fetchpriority: "high",
      as: "image",
      href: logo,
      type: "image/webp",
    },
  ],
});
const { locale } = useI18n();
</script>
