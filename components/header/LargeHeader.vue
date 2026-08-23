<template>
  <div class="lg:contents hidden">
    <div
      class="flex w-full flex-grow-1 lg:gap-8 xl:gap-14 justify-end items-center"
    >
      <ResuxLink
        :to="localePath('/')"
        class="linkClass font-semibold text-base text-white"
      >
        {{ $t("footer.home") }}
      </ResuxLink>
      <ResuxLink
        :to="localePath('/about-us')"
        aria-label="about-us"
        class="linkClass font-semibold text-base text-white"
      >
        {{ $t("footer.aboutUs") }}
      </ResuxLink>
      <!-- <ResuxLink
        :to="localePath('/products')"
        class="linkClass font-semibold text-base text-white"
      >
        {{ $t("products") }}
      </ResuxLink> -->
      <ResuxLink
        :to="localePath('/partners')"
        class="linkClass font-semibold text-base text-white"
      >
        {{ $t("Partners and Customers") }}
      </ResuxLink>
      <ResuxLink
        :to="localePath('/careers')"
        class="linkClass font-semibold text-base text-white"
      >
        {{ $t("careers") }}
      </ResuxLink>
      <ResuxLink
        :to="localePath('/contact-us')"
        class="linkClass font-semibold text-base text-white"
      >
        {{ $t("footer.contactUs") }}
      </ResuxLink>
      <ResuxLink
        :to="localePath('/invest-with-us')"
        class="linkClass font-medium text-base text-white"
      >
        {{ $t("invest with us") }}
      </ResuxLink>
      <!-- <ResuxLink
        :to="localePath('/blogs')"
        class="linkClass font-medium text-base text-white"
      >
        {{ $t("blogs") }}
      </ResuxLink> -->
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
const switcher = useSwitchLocalePath();
const { locale } = useI18n();

const getBodyAttrs = (localeValue) => ({
  style: {
    direction: localeValue === "ar" ? "rtl" : "ltr",
  },
});

const getHtmlAttrs = (localeValue) => ({
  dir: localeValue === "ar" ? "rtl" : "ltr",
});

useHead({
  bodyAttrs: getBodyAttrs(locale.value),
  htmlAttrs: getHtmlAttrs(locale.value),
});

watch(locale, (newLocale) => {
  useHead({
    bodyAttrs: getBodyAttrs(newLocale),
    htmlAttrs: getHtmlAttrs(newLocale),
  });
});
</script>

<style scoped>
/* Shared transition */
.search-enter-active,
.search-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.search-enter-from,
.search-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.search-enter-to,
.search-leave-from {
  opacity: 1;
  transform: scale(1);
}

.search2-enter-active,
.search2-leave-active {
  transition: opacity 0.3s ease, filter 0.3s ease;
}
.search2-enter-from,
.search2-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.search2-enter-to,
.search2-leave-from {
  opacity: 1;
  filter: blur(0rem);
}

/* clears the ‘X’ from Internet Explorer */
input[type="search"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type="search"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
/* clears the ‘X’ from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
