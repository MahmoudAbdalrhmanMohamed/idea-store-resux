<template>
  <GarySetion>
    <h2
      data-aos="fade-down"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="text-center font-semibold text-2xl text-zero3 capitalize"
    >
      {{ $t("gallery") }}
    </h2>
    <p
      data-aos="fade-left"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="text-center capitalize text-two9 text-xl font-semibold pt-3 pb-2 md:text-3xl"
    >
      {{ $t("Discover Our Gallery") }}
    </p>
    <p
      data-aos="fade-right"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="text-center capitalize text-six6 max-w-[768px] mx-auto text-base font-[400] pt-3 pb-6 md:text-lg"
    >
      {{ $t("desdes3") }}
    </p>

    <ClientEnhance
      name="swiper-carousel"
      trigger="visible"
      :options="swiperOptions"
      class="mt-8 mb-4 md:my-8"
    >
      <div class="swiper">
        <div class="swiper-wrapper flex gap-4 overflow-x-auto md:overflow-x-visible">
          <div
            v-for="(slide, index) in 8"
            :key="index"
            class="swiper-slide flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <div
              data-aos="fade-down"
              :data-aos-duration="index * 100"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="200"
              class="grid place-items-center place-content-center"
            >
              <ResuxImg
                :src="al"
                alt="slide"
                class="object-cover rounded-lg h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </ClientEnhance>
  </GarySetion>
</template>

<script setup>
const al = "/assets/products/img.webp";

const swiperOptions = {
  loop: true,
  speed: 2000,
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
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  navigation: false,
  pagination: false,
};
</script>
