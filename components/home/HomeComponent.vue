<template>
  <section class="w-screen relative h-screen">
    <div
      class="hero-video absolute inset-0 -z-20 w-full h-full overflow-hidden"
    >
      <ResuxVideo
        :src="home"
        :poster="poster"
        load-strategy="page-ready"
        autoplay
        muted
        loop
        playsinline
        controls-mode="none"
      />
    </div>

    <!-- Dark overlay -->
    <div
      class="test w-full h-full object-cover -z-10 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
    ></div>

    <!-- Scroll down icon -->
    <div
      v-if="$device.isDesktop"
      :class="locale.value === 'en' ? 'right-8' : 'left-8'"
      class="absolute hidden lg:block bottom-36 space-y-4 text-white"
    >
      <Icon name="gg:mouse" size="2rem" />
      <p class="font-semibold text-base">{{ $t("scroll down") }}</p>
    </div>

    <!-- WhatsApp floating button -->
    <UiFloatingVideoLink
      :to="whatsappLink"
      :src="whatsapp"
      :locale="locale.value"
      aria-label="whatsapp-link"
    />

    <!-- API Error Indicator -->
    <div v-if="apiError && showApiError" class="fixed top-4 right-4 z-[1000]">
      <div class="bg-red-50 border border-red-200 rounded-lg p-3">
        <div class="flex items-center gap-2">
          <Icon name="material-symbols:warning" class="h-5 w-5 text-red-400" />
          <p class="text-sm text-red-700">
            {{ $t("apiError.heroWarning") || "Contact info loading failed" }}
          </p>
          <button
            @click="showApiError = false"
            class="text-red-500 hover:text-red-700"
          >
            <Icon name="material-symbols:close" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Hero text -->
    <div
      class="containerClass flex flex-col items-center md:items-start justify-center md:justify-end md:pb-12 w-full h-full"
    >
      <h1>
        <UiHeroLabel class="text-lg leading-6 md:text-[28px] md:leading-[34px]">
          {{ $t("idealStores") }}
        </UiHeroLabel>
        <div
          class="text-white py-5 font-semibold text-2xl text-center md:text-start md:text-[56px] md:leading-[68px]"
        >
          {{ $t("innovatingHealthcare") }}
        </div>
      </h1>
      <p
        class="mb-8 max-w-[330px] md:max-w-[760px] mx-auto md:mx-0 text-white font-normal text-center md:text-start text-lg leading-7 md:text-2xl md:leading-8"
      >
        {{ $t("Delivering") }}
      </p>

      <div class="flex md:flex-row flex-col items-center gap-4">
        <UiAppButton :to="localePath('/contact-us')">
          {{ $t("herocontactUs") }}
        </UiAppButton>
        <UiAppButton :to="localePath('/invest-with-us')" variant="outline">
          {{ $t("Invest With Us") }}
        </UiAppButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const home = "/assets/home.webm";
const whatsapp = "/assets/whatsapp.webm";
const poster = "/assets/poster.webp";

const { locale } = useI18n();
const localePath = useLocalePath();

const apiError = ref(false);
const showApiError = ref(false);
const retryCount = ref(0);

// Fallback WhatsApp link
const whatsappFallback = ref("https://wa.me/1234567890");

// Preload important assets
useHead({
  link: [
    {
      rel: "preload",
      as: "video",
      href: whatsapp,
      fetchpriority: "high",
      type: "video/webm",
      tagPriority: "critical",
    },
    {
      rel: "preload",
      as: "image",
      href: poster,
      fetchpriority: "high",
      type: "image/webp",
      tagPriority: "critical",
    },
  ],
});

const config = useRuntimeConfig();
const url = config.public.ConstUrl;

// Fetch settings
const { data, error, pending } = await useFetch(`${url}/settings`, {
  timeout: 10000,
});

if (error.value) {
  apiError.value = true;
  showApiError.value = true;
}

// Computed property for WhatsApp link with fallback
const whatsappLink = computed(() => {
  if (pending.value) {
    return "#";
  }
  if (error.value || apiError.value || !data.value?.data) {
    return whatsappFallback.value;
  }
  return data.value.data.whatsapp || whatsappFallback.value;
});

onMounted(() => {
  if (apiError.value) {
    setTimeout(() => {
      showApiError.value = false;
    }, 8000);
  }

  // Handle online/offline events on the client
  if (typeof window !== "undefined") {
    window.addEventListener("online", () => {
      if (apiError.value) {
        apiError.value = false;
        showApiError.value = false;
        retryCount.value = 0;
      }
    });

    if (!navigator.onLine) {
      apiError.value = true;
      showApiError.value = true;
    }
  }
});
</script>

<style scoped>
.test {
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.fixed.top-4.right-4 {
  animation: slideIn 0.3s ease-out;
}

.hero-video :deep([data-rx-video-shell="true"]),
.hero-video :deep(.resux-video__stage),
.hero-video :deep(video) {
  width: 100% !important;
  height: 100% !important;
}

.hero-video :deep(video) {
  object-fit: cover !important;
  background: transparent !important;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
