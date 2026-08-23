<template>
  <GarySetion>
    <div
      class="flex justify-center md:flex-row flex-col items-center gap-4 md:gap-10 lg:gap-12 xl:gap-24 py-8"
    >
      <div class="relative">
        <ResuxImg
          :src="one"
          alt="img"
          class="rounded-[12px] tooSmall:w-[300px] tooSmall:h-[250px] md:w-[400px] lg:w-[500px] md:h-[350px] lg:h-[514px] object-cover shadow-sm"
        />
        <ResuxImg
          :src="two"
          alt="img"
          :class="
            locale === 'en'
              ? 'tooSmall:-right-3 md:-right-8 lg:-right-4 xl:-right-8 border-l-[10px] border-l-white'
              : 'tooSmall:-left-3 md:-left-8 lg:-left-4 xl:-left-8 border-r-[10px] border-r-white'
          "
          class="rounded-[12px] tooSmall:w-[150px] tooSmall:h-[130px] md:w-[220px] md:h-[170px] lg:w-[300px] lg:h-[268px] border-t-[10px] border-t-white absolute bottom-4 border-b-[10px] border-b-white object-cover shadow-md"
        />
      </div>

      <div>
        <span class="text-[#38bdf8] text-base font-semibold block mb-2 tracking-wide">{{ $t("About Us") }}</span>
        <h2
          class="text-[#1e293b] text-center md:text-start text-[28px] font-bold md:text-[38px] leading-tight"
        >
          {{ $t("Healthcare Innovation Leader") }}
        </h2>
        <p
          class="text-gray-600 max-w-[300px] md:max-w-[430px] lg:max-w-[509px] text-center md:text-start text-base font-normal my-4 leading-relaxed"
        >
          {{ $t("test") }}
        </p>

        <ResuxLink
          :to="localePath('/about-us')"
          class="border-2 border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-white font-medium w-fit mx-auto md:mx-0 transition-all duration-300 rounded-lg py-3 px-8 inline-block shadow-sm"
        >
          {{ $t("Learn More") }}
        </ResuxLink>
      </div>
    </div>
  </GarySetion>
</template>

<script setup>
const one = "/assets/1.webp";
const two = "/assets/2.webp";
const { locale } = useI18n();
const localePath = useLocalePath();
</script>
