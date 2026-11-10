<template>
  <GarySetion>
    <h2
      class="text-center alx mb-4 md:mb-8 text-[#0f766e] font-semibold text-xl md:text-2xl capitalize"
    >
      {{ $t("Our Clients") }}
    </h2>

    <ClientEnhance
      v-if="dataVal && dataVal.data && dataVal.data.length > 0"
      name="swiper-carousel"
      trigger="visible"
      :options="swiperOptions"
    >
      <div class="swiper">
        <div class="swiper-wrapper flex gap-4 overflow-x-auto md:overflow-x-visible">
          <div
            v-for="(slide, index) in dataVal.data"
            :key="index"
            class="swiper-slide flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          >
            <div
              v-anime="'fade-up'"
              class="bg-white rounded-lg shadow-slide grid place-items-center place-content-center"
            >
              <ResuxImg
                :src="slide.image"
                :alt="slide.title || slide.name || ('Client partner ' + (index + 1))" width="148" height="148"
                class="object-contain rounded-lg h-[148px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </ClientEnhance>

    <p v-if="error" class="text-center text-red-400 text-sm">
      {{ $t("Service is temporarily unavailable. Please try again later.") }}
    </p>
  </GarySetion>
</template>

<script setup>
import { ref } from "vue";

const config = useRuntimeConfig();
const url = config.public.ConstUrl;

const { data: dataVal, error } = await useFetch(`${url}/clients`, {
  timeout: 10000,
});

const swiperOptions = {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    789: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
  navigation: false,
  pagination: false,
};
</script>

<style>
.alx {
  font-family: Alexandria;
}
</style>
