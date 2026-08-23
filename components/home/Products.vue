<template>
  <WhiteSetion>
    <p
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="text-center font-semibold text-2xl text-zero3 capitalize"
    >
      {{ $t("products") }}
    </p>
    <p
      data-aos="fade-down"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="text-center capitalize text-two9 text-xl font-semibold pt-3 pb-2 md:text-3xl"
    >
      {{ $t("Trusted Medical Supplies") }}
    </p>
    <p
      data-aos="zoom-in-down"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="text-center capitalize text-six6 max-w-[768px] mx-auto text-base font-[400] pt-2 md:text-lg"
    >
      {{ $t("desdes2") }}
    </p>

    <div
      class="flex items-center md:flex-row flex-wrap flex-col gap-6 md:gap-12 mt-12 justify-center"
    >
      <div
        v-for="i in 3"
        data-aos="fade-down-right"
        :data-aos-duration="i * 100"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
        class="bg-white lg:basis-[calc(100%/3-3rem)] shadow-carding space-y-4 rounded-lg py-4 px-6 border border-e9 md:px-8 md:py-6"
      >
        <ResuxImg
          :src="img"
          alt="img"
          class="w-[346px] h-[240px] object-cover rounded-md"
        />
        <p class="text-three3 text-xl md:text-2xl">{{ $t("Product Name") }}</p>
        <div>
          <p class="text-six6 text-sm md:text-base" v-for="i in 4" :key="i">
            {{ $t("Product Description should be written here") }}
          </p>
        </div>
      </div>
    </div>

    <ResuxLink
      :to="localePath('/products')"
      class="rounded-[6px] py-3 border text-center mx-auto my-4 block w-fit border-db text-fourb text-sm font-medium transition-all duration-300 hover:bg-zero3 hover:text-white md:py-3 bg-white px-6 md:px-8"
      >{{ $t("View All") }}</ResuxLink
    >
  </WhiteSetion>
</template>

<script setup>
const img = "/assets/products/img.webp";
const localePath = useLocalePath();
</script>
