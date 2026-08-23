<template>
  <div class="lg:hidden">
    <!-- Hamburger Icon -->
    <transition name="fade">
      <Icon
        v-show="!show"
        name="hamburger"
        size="2rem"
        @click="toggleMenu"
        class="cursor-pointer my-auto text-ea"
      />
    </transition>

    <!-- Menu Overlay (Teleported) -->
    <teleport to="#teleports">
      <transition name="fade">
        <div
          v-if="show"
          class="fixed space-y-1 right-0 top-0 z-[100] bg-color14 font-bold text-[20px] w-[70vw] min-h-full text-white flex flex-col justify-center items-start p-5 shadow-lg"
        >
          <!-- Navigation Links -->
          <ResuxLink
            :to="localePath('/')"
            class="py-2 px-4 text-white hover:text-zero3 transition-all duration-300"
            @click="toggleMenu"
          >
            {{ $t("footer.home") }}
          </ResuxLink>

          <ResuxLink
            :to="localePath('/about-us')"
            aria-label="about-us"
            class="py-2 px-4 text-white hover:text-zero3 transition-all duration-300"
            @click="toggleMenu"
          >
            {{ $t("footer.aboutUs") }}
          </ResuxLink>
          <!-- <ResuxLink
            :to="localePath('/products')"
            class="py-2 px-4 text-white hover:text-zero3 transition-all duration-300"
            @click="toggleMenu"
          >
            {{ $t("products") }}
          </ResuxLink> -->
          <ResuxLink
            :to="localePath('/partners')"
            class="py-2 px-4 text-white hover:text-zero3 transition-all duration-300"
            @click="toggleMenu"
          >
            {{ $t("Partners and Customers") }}
          </ResuxLink>
          <ResuxLink
            :to="localePath('/careers')"
            class="py-2 px-4 text-white hover:text-zero3 transition-all duration-300"
            @click="toggleMenu"
          >
            {{ $t("careers") }}
          </ResuxLink>
          <ResuxLink
            :to="localePath('/invest-with-us')"
            class="py-2 px-4 text-white hover:text-zero3 transition-all duration-300"
            @click="toggleMenu"
          >
            {{ $t("invest with us") }}
          </ResuxLink>

          <ResuxLink
            :to="localePath('/contact-us')"
            class="py-2 px-4 text-white hover:text-zero3 transition-all duration-300"
            @click="toggleMenu"
          >
            {{ $t("herocontactUs") }}
          </ResuxLink>
          <!-- <ResuxLink
            :to="localePath('/blogs')"
            class="py-2 px-4 text-white hover:text-zero3 transition-all duration-300"
            @click="toggleMenu"
          >
            {{ $t("blogs") }}
          </ResuxLink> -->

          <!-- Locale Switch -->
          <ResuxLink
            :to="switchLocalePath($t('locale'))"
            class="py-2 px-4 text-white hover:text-zero3 flex items-center transition-all duration-300"
            @click.prevent="changeLocale"
          >
            {{ locale.value === "en" ? "العربية" : "English" }}
          </ResuxLink>

const toggleMenu = () => {
  show.value = !show.value;
};
const { locale, setLocale } = useI18n();

const changeLocale = () => {
  show.value = false;
  setLocale(locale.value === "en" ? "ar" : "en");
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
</style>
