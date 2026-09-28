<template>
  <GarySetion>
    <h2
      class="text-center alx mb-4 md:mb-8 text-zero3 font-[400] text-xl md:text-2xl capitalize"
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
              data-aos="fade-up"
              :data-aos-duration="index * 100"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="200"
              class="bg-white rounded-lg shadow-slide grid place-items-center place-content-center"
            >
              <ResuxImg
                :src="slide.image"
                alt="slide"
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
const config = useRuntimeConfig();
const url = config.public.ConstUrl;

const { data: dataVal, error } = await useFetch(`${url}/clients`);

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
