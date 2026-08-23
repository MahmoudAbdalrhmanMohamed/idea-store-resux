<template>
  <WhiteSetion>
    <h2
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="text-one0 text-xl font-semibold tracking-[-2%] text-center md:text-3xl"
    >
      {{ $t("Get in touch") }}
    </h2>
    <p
      data-aos="fade-down"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
      class="text-six6 max-w-[946px] mx-auto text-sm font-[400] tracking-[-2%] text-center md:text-xl my-4"
    >
      {{ $t("Our friendly team would love to hear from you") }}
    </p>

    <div class="lg:max-w-[946px] mx-auto">
      <div
        class="flex md:flex-row flex-col gap-4 lg:gap-8 items-stretch justify-center"
      >
        <!-- Email Card -->
        <div
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          class="md:basis-[calc(100%/3-1rem)] rounded-2xl p-6 bg-three3/[8%]"
        >
          <div
            class="bg-zero3 rounded-[10px] w-12 h-12 grid place-items-center place-content-center text-white"
          >
            <Icon
              size="2rem"
              name="material-symbols:mail"
            />
          </div>
          <div class="pt-8 md:pt-16">
            <h3 class="text-zero03 capitalize font-semibold text-xl">
              {{ $t("footer.contactUs") }}
            </h3>
            <p class="text-five5 text-base font-normal pt-2 pb-8">
              {{ $t("You can reach us anytime via") }}
            </p>
            <a
              :href="`mailto:${contactData.email}`"
              class="underline text-three3 font-semibold"
              >{{ contactData.email }}</a
            >
            <div v-if="isUsingFallback" class="mt-2 text-xs text-yellow-600">
              * {{ $t('apiError.usingFallback') || 'Using fallback contact information' }}
            </div>
          </div>
        </div>
        
        <!-- Address Card -->
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          class="md:basis-[calc(100%/3-1rem)] rounded-2xl p-6 bg-three3/[8%]"
        >
          <div
            class="bg-zero3 rounded-[10px] w-12 h-12 grid place-items-center place-content-center text-white"
          >
            <Icon
              size="2rem"
              name="material-symbols:location-on-outline-rounded"
            />
          </div>
          <div class="mt-8 md:mt-16 h-full">
            <h3 class="text-zero03 capitalize font-semibold text-xl">
              {{ $t("Visit us") }}
            </h3>
            <p class="text-five5 text-base font-normal pt-2 pb-8">
              {{ $t("See you at our location!") }}
            </p>
            <div class="underline text-three3 font-semibold">
              {{ contactData.address || $t('Address not available') }}
            </div>
          </div>
        </div>
        
        <!-- Phone Card -->
        <div
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          class="md:basis-[calc(100%/3-1rem)] rounded-2xl p-6 bg-three3/[8%]"
        >
          <div
            class="bg-zero3 rounded-[10px] w-12 h-12 grid place-items-center place-content-center text-white"
          >
            <Icon size="2rem" name="material-symbols:call" />
          </div>
          <div class="mt-8 md:mt-16">
            <h3 class="text-zero03 capitalize font-semibold text-xl">
              {{ $t("Call us") }}
            </h3>
            <p class="text-five5 text-base font-normal pt-2 pb-8">
              {{ $t("Sun-Thr from 9am to 5pm For Customer Support.") }}
            </p>
            <a
              :href="`tel:${contactData.phone_sa}`"
              class="underline text-three3 font-semibold flex items-end"
            >
              {{ contactData.phone_sa }}
            </a>
            <div v-if="isUsingFallback" class="mt-2 text-xs text-yellow-600">
              * {{ $t('apiError.usingFallbackPhone') || 'Using fallback phone number' }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- API Error Banner -->
    <div v-if="apiError && showApiError" class="lg:max-w-[946px] mx-auto mt-6">
      <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div class="flex items-start">
          <div class="ml-3">
            <h3 class="text-sm font-medium text-yellow-800">
              {{ $t('apiError.title') || 'Connection Issue' }}
            </h3>
            <div class="mt-2 text-sm text-yellow-700">
              <p>{{ $t('apiError.message') || 'Unable to load contact information.' }}</p>
            </div>
            <div class="mt-3">
              <button
                @click="apiError = false"
                class="text-sm font-medium text-yellow-800 hover:text-yellow-900"
              >
                {{ $t('apiError.dismiss') || 'Dismiss' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form Component -->
    <div class="mt-8">
      <ContactFormIsland :url="url" :locale="locale" />
    </div>
  </WhiteSetion>
</template>

<script setup>
import { ref, computed } from "vue";

// Fallback contact data
const fallbackContactData = {
  phone_sa: "+966 12 345 6789",
  email: "info@idealstores.com",
  address: "Riyadh, Saudi Arabia",
};

const apiError = ref(false);
const showApiError = ref(true);

const { locale } = useI18n();
const config = useRuntimeConfig();
const url = config.public.ConstUrl;

// Fetch settings with server-side caching
const { data, error } = await useFetch(`${url}/settings`, {
  timeout: 10000,
});

if (error.value) {
  apiError.value = true;
}

const contactData = computed(() => {
  if (error.value || apiError.value || !data.value?.data) {
    return fallbackContactData;
  }
  const apiData = data.value.data;
  return {
    phone_sa: apiData.phone_sa || fallbackContactData.phone_sa,
    email: apiData.email || fallbackContactData.email,
    address: apiData.address || fallbackContactData.address,
  };
});

const isUsingFallback = computed(() => {
  return error.value || apiError.value || !data.value?.data;
});
</script>
