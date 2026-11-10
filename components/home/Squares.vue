<template>
  <WhiteSetion>
    <div class="py-8">
      <p
        v-anime="'fade-up'"
        class="text-[#0369a1] text-lg font-semibold mb-4"
      >
        {{ $t("Pioneering the Future of Healthcare") }}
      </p>

      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <!-- Left Text Column -->
        <div class="space-y-8 w-full lg:w-1/2">
          <div class="space-y-4">
            <div
              v-anime="'fade-up'"
              class="flex items-center gap-4 pt-2"
            >
              <ResuxImg :src="vision" alt="Ideal Stores Vision" width="32" height="32" class="w-8 h-8 object-contain" />
              <h2 class="font-bold text-two9 text-2xl md:text-3xl">
                {{ $t("Our Vision") }}
              </h2>
            </div>
            <p
              v-anime="'fade-up'"
              class="text-gray-600 font-normal text-base md:text-lg leading-relaxed"
            >
              {{ $t("des1") }}
            </p>
          </div>

          <div class="space-y-4">
            <div
              v-anime="'fade-up'"
              class="flex items-center gap-4 pt-4"
            >
              <ResuxImg :src="mission" alt="Ideal Stores Mission" width="32" height="32" class="w-8 h-8 object-contain" />
              <h2 class="font-bold text-two9 text-2xl md:text-3xl">
                {{ $t("Our Mission") }}
              </h2>
            </div>
            <p
              v-anime="'fade-up'"
              class="text-gray-600 font-normal text-base md:text-lg leading-relaxed"
            >
              {{ $t("des2") }}
            </p>
          </div>

          <div
            v-anime="'fade-up'"
            class="pt-4"
          >
            <ResuxImg :src="newLogo" alt="Ideal Stores Healthcare Innovation" width="160" height="40" class="h-10 w-auto object-contain" />
          </div>
        </div>

        <!-- Right Pyramid Graphic Column -->
        <div
          v-anime="'fade-up'"
          class="w-full lg:w-1/2 flex flex-col items-center justify-center min-w-[320px]"
        >
          <div class="relative w-[340px] h-[340px] md:w-[420px] md:h-[400px] flex flex-col items-center justify-center">
            <!-- Top Triangle: Identity -->
            <div
              class="bg-[#1a68ba] flex items-end justify-center w-[160px] h-[150px] md:w-[200px] md:h-[180px] custom-triangle z-10 shadow-sm"
            >
              <p class="text-white font-medium text-lg md:text-xl pb-6">
                {{ $t("Identity") }}
              </p>
            </div>

            <!-- Bottom Row Triangles: Aspiration, Strength, Value -->
            <div class="flex items-center justify-center -mt-2">
              <div
                class="bg-[#1a68ba] flex items-end justify-center w-[150px] h-[140px] md:w-[190px] md:h-[170px] custom-triangle shadow-sm"
              >
                <p class="text-white font-medium text-base md:text-lg pb-4">
                  {{ $t("Aspiration") }}
                </p>
              </div>
              <div
                class="bg-[#0f766e] rotate-180 flex items-end justify-center w-[150px] h-[140px] md:w-[190px] md:h-[170px] custom-triangle -mx-8 md:-mx-10 shadow-sm"
              >
                <p class="text-white rotate-180 font-medium text-base md:text-lg pt-4">
                  {{ $t("Strength") }}
                </p>
              </div>
              <div
                class="bg-[#1a68ba] flex items-end justify-center w-[150px] h-[140px] md:w-[190px] md:h-[170px] custom-triangle shadow-sm"
              >
                <p class="text-white font-medium text-base md:text-lg pb-4">
                  {{ $t("Value") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WhiteSetion>
</template>

<script setup>
const vision = "/assets/vision.svg";
const mission = "/assets/mission.svg";
const newLogo = "/assets/newLogo.webp";
const { locale } = useI18n();
</script>

<style scoped>
.custom-triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
