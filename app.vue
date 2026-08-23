<template>
  <main>
    <!-- <VitePwaManifest /> -->
    <ResuxLayout>
      <ResuxPage />
    </ResuxLayout>

  </main>
</template>

<script setup>
const { locale } = useI18n();
useHead({
  bodyAttrs: {
    class: "overflow-x-hidden",
  },
  htmlAttrs: {
    lang: locale,
  },
  meta: [
    {
      name: "google-site-verification",
      content: "9H6Kj-xBCncY4t6h80O7AoLpo6uIw0FuN2zwoDnUFFw",
    },
  ],
});
</script>

<style>
html {
  font-family: Inter, Alexandria, Arial, sans-serif;
}

body {
  font-family: Inter, Alexandria, Arial, sans-serif;
  font-synthesis-weight: none;
  text-rendering: optimizeLegibility;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateY(100px);
}
.page-enter-to,
.page-leave-from {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}
</style>
