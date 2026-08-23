<template>
  <div
    class="w-full my-16 md:h-[542px] rounded-2xl relative grid place-items-center"
  >
    <ResuxImg
      :src="img"
      alt="img"
      class="absolute w-full h-full top-0 left-0 object-cover rounded-2xl"
    />
    <div
      data-aos="zoom-in-down"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="w-full h-full containerClass py-8 bg-three3/80 relative z-10 justify-center items-center flex flex-col gap-8 rounded-2xl"
    >
      <div
        class="w-[56px] rounded-full bg-white grid place-items-center h-[56px]"
      >
        <Icon name="iconoir:flash" class="text-three3" size="2rem" />
      </div>
      <p class="text-white font-bold text-xl text-center md:text-3xl">
        {{ $t("Ideal Stores in Numbers") }}
      </p>
      <p class="text-white font-[300] text-center text-lg md:text-xl">
        {{ $t("imgdes") }}
      </p>

      <div class="flex justify-center md:flex-row flex-col my-8 items-center">
        <div
          class="text-white pb-8 md:py-0 space-y-4 border-b-2 border-b-white md:border-none md:border-b-0"
          :class="
            locale === 'en'
              ? 'md:border-r-2 md:pr-6  md:border-r-ea'
              : 'md:border-l-2 md:pl-6  md:border-l-ea'
          "
        >
          <p
            class="text-white text-center font-semibold text-3xl -tracking-[-2%] md:text-6xl"
          >
            212+
          </p>
          <p class="text-lg font-medium text-center">
            {{ $t("International Vendors") }}
          </p>
        </div>
        <div
          class="text-white pb-8 pt-8 w-full md:w-fit md:py-0 space-y-4 border-b-2 border-b-white md:border-none md:border-b-0"
          :class="
            locale === 'en'
              ? 'md:border-r-2 md:border-r-ea'
              : 'md:border-l-2  md:border-l-ea'
          "
        >
          <p
            class="text-white text-center w-full md:w-fit md:px-6 lg:px-14 xl:px-16 font-semibold text-3xl -tracking-[-2%] md:text-6xl"
          >
            1500+
          </p>
          <p class="text-lg font-medium text-center">
            {{ $t("Happy Client") }}
          </p>
        </div>
        <div
          class="text-white py-8 md:py-0 w-full md:w-fit space-y-4 border-b-2 border-b-white md:border-none md:border-b-0"
          :class="
            locale === 'en'
              ? 'md:border-r-2 md:border-r-ea'
              : 'md:border-l-2  md:border-l-ea'
          "
        >
          <p
            class="text-white text-center md:px-6 lg:px-14 xl:px-16 font-semibold text-3xl -tracking-[-2%] md:text-6xl"
          >
            150+
          </p>
          <p class="text-lg font-medium text-center">
            {{ $t("International Brand") }}
          </p>
        </div>
        <div class="text-white pt-8 md:py-0 space-y-4">
          <p
            class="text-white md:px-6 w-full md:w-fit lg:px-14 xl:px-16 text-center font-semibold text-3xl -tracking-[-2%] md:text-6xl"
          >
            3
          </p>
          <p class="text-lg font-medium text-center">
            {{ $t("Countries") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const img = "/assets/img.webp";
const { locale } = useI18n();
</script>
