<template>
  <footer class="bg-oned relative">
    <ResuxImg :src="img" alt="img" class="absolute left-4 top-4" />
    <div class="containerClass relative z-10">
      <div
        class="grid py-4 md:py-8 grid-cols-1 gap-6 md:gap-8 justify-center items-center md:items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <ResuxLink
          class="flex gap-1 relative justify-center md:-top-4 items-center"
          :to="localePath('/')"
          :class="
            locale === 'ar' ? 'flex-row-reverse text-left' : 'md:justify-start'
          "
        >
          <ResuxImg
            :src="logo"
            class="object-contain w-[40px] h-[100px]"
            alt="img"
          />
          <div>
            <p class="text-white text-xl font-bold tracking-[-1%] text-nowrap">
              Ideal Stores
            </p>
            <p class="text-white font-[300] text-xs tracking-[-1%]">
              Pharmaceutical<br />& medical co.
            </p>
          </div>
        </ResuxLink>

        <div class="mx-auto w-fit md:mx-0">
          <p class="md:mb-6 mb-4 text-d9 text-xl font-semibold">
            {{ $t("footer.contactUs") }}
          </p>
          <div class="mt-4 md:mt-6 space-y-4">
            <ResuxLink
              external
              aria-label="link"
              :to="`tel:${contactData.phone_sa}`"
              class="flex items-center gap-1 text-seven7 transition-all duration-300 hover:text-zero3 font-[300] text-base"
            >
              <Icon name="material-symbols:call" size="1.5rem" />
              <p class="text-base font-[300]">{{ contactData.phone_sa }}</p>
              <span v-if="isUsingFallback" class="text-xs text-yellow-400 ml-1">*</span>
            </ResuxLink>
            <ResuxLink
              external
              aria-label="link"
              :to="`tel:${contactData.phone_eg}`"
              class="flex items-center gap-1 text-seven7 font-[300] transition-all duration-300 hover:text-zero3 text-base"
            >
              <Icon name="material-symbols:call" size="1.5rem" />
              <p class="text-base font-[300]">{{ contactData.phone_eg }}</p>
              <span v-if="isUsingFallback" class="text-xs text-yellow-400 ml-1">*</span>
            </ResuxLink>

            <ResuxLink
              external
              :to="`mailto:${contactData.email}`"
              aria-label="link"
              class="flex items-center gap-1 text-seven7 font-[300] transition-all duration-300 hover:text-zero3 text-base"
            >
              <Icon name="material-symbols:mail" size="1.5rem" />
              <p class="text-base font-[300]">{{ contactData.email }}</p>
              <span v-if="isUsingFallback" class="text-xs text-yellow-400 ml-1">*</span>
            </ResuxLink>
            
            <!-- API Error Indicator (Optional) -->
            <div v-if="apiError && showApiError" class="mt-2 p-2 bg-red-900/20 border border-red-700/30 rounded text-xs text-red-200">
              <p class="flex items-center gap-1">
                <Icon name="material-symbols:warning" size="1rem" />
                {{ $t('apiError.contactInfoFallback') || 'Using fallback contact information' }}
              </p>
              <button @click="showApiError = false" class="mt-1 text-red-300 hover:text-white">
                {{ $t('apiError.dismiss') || 'Dismiss' }}
              </button>
            </div>
          </div>
        </div>
        <div class="mx-auto w-fit md:mx-0">
          <p class="md:mb-6 mb-4 text-d9 text-xl font-semibold">
            {{ $t("Countries") }}
          </p>
          <div class="mt-4 md:mt-6 space-y-4">
            <div
              class="text-seven7 font-[300] transition-all duration-300 hover:text-zero3 text-base"
            >
              {{ $t("Saudi Arabia") }}
            </div>
            <div
              class="text-seven7 font-[300] transition-all duration-300 hover:text-zero3 text-base"
            >
              {{ $t("United Arab Emirates") }}
            </div>
            <div
              class="text-seven7 font-[300] transition-all duration-300 hover:text-zero3 text-base"
            >
              {{ $t("Egypt") }}
            </div>
          </div>
        </div>
        <div class="mx-auto w-fit md:mx-0">
          <p class="md:mb-6 mb-4 text-d9 text-xl font-semibold">
            {{ $t("Links") }}
          </p>
          <div class="mt-4 md:mt-6 space-y-4">
            <ResuxLink
              :to="localePath('/about-us')"
              aria-label="about-us"
              class="text-seven7 font-[300] transition-all duration-300 block hover:text-zero3 text-base"
            >
              {{ $t("footer.aboutUs") }}
            </ResuxLink>
            <!-- <ResuxLink
              :to="localePath('/products')"
              class="text-seven7 font-[300] transition-all duration-300 block hover:text-zero3 text-base"
            >
              {{ $t("products") }}
            </ResuxLink> -->
            <ResuxLink
              :to="localePath('/partners')"
              class="text-seven7 font-[300] transition-all duration-300 block hover:text-zero3 text-base"
            >
              {{ $t("Partners and Customers") }}
            </ResuxLink>
            <ResuxLink
              :to="localePath('/contact-us')"
              class="text-seven7 font-[300] transition-all duration-300 block hover:text-zero3 text-base"
            >
              {{ $t("footer.contactUs") }}
            </ResuxLink>
            <ResuxLink
              :to="localePath('/invest-with-us')"
              class="text-seven7 font-[300] transition-all duration-300 block hover:text-zero3 text-base"
            >
              {{ $t("invest with us") }}
            </ResuxLink>
            <!-- <ResuxLink
              :to="localePath('/blogs')"
              class="text-seven7 font-[300] transition-all duration-300 block hover:text-zero3 text-base"
            >
              {{ $t("blogs") }}
            </ResuxLink> -->
          </div>
        </div>
      </div>
    </div>
    <div class="bg-one9">
      <div class="py-4 containerClass">
        <div
          class="items-center flex gap-4 justify-center flex-col sm:flex-row sm:justify-between"
        >
          <div class="flex items-center gap-1 text-white font-[300]">
            <ResuxLink
              external
              target="_blank"
              aria-label="link"
              :to="contactData.facebook"
            >
              <Icon
                name="mdi:facebook-box"
                size="1.5rem"
                class="hover:text-zero3 transition-all duration-300 cursor-pointer object-contain"
              />
            </ResuxLink>
            <ResuxLink
              target="_blank"
              external
              aria-label="link"
              :to="contactData.instagram"
            >
              <Icon
                name="mingcute:instagram-fill"
                size="1.5rem"
                class="hover:text-zero3 transition-all duration-300 cursor-pointer object-contain"
              />
            </ResuxLink>
            <ResuxLink
              target="_blank"
              external
              aria-label="link"
              :to="contactData.linkedin"
            >
              <Icon
                name="cib:linkedin"
                size="1.25rem"
                class="hover:text-zero3 transition-all duration-300 cursor-pointer object-contain"
              />
            </ResuxLink>
            <ResuxLink
              target="_blank"
              external
              aria-label="link"
              :to="contactData.youtube"
            >
              <Icon
                name="uil:youtube"
                size="1.5rem"
                class="hover:text-zero3 transition-all duration-300 cursor-pointer object-contain"
              />
            </ResuxLink>
            <ResuxLink
              target="_blank"
              external
              aria-label="link"
              :to="contactData.twitter"
            >
              <Icon
                name="line-md:twitter-x"
                size="1.5rem"
                class="hover:text-zero3 transition-all duration-300 cursor-pointer object-contain"
              />
            </ResuxLink>
          </div>
          <div
            class="text-white text-base font-medium flex gap-2 items-center flex-wrap"
          >
            Made with ❤️ by
            <ResuxLink
              to="https://www.megatron-soft.com/en"
              external
              aria-label="megatron"
              class="underline inline-block transition-all duration-300 hover:text-three3"
              >MegaTron</ResuxLink
            >
            <svg
              width="1"
              height="17"
              viewBox="0 0 1 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="0.436523"
                x2="0.499999"
                y2="16.4365"
                stroke="white"
              />
            </svg>
            ISP © 2025
            <span v-if="isUsingFallback" class="text-xs text-yellow-400" title="Using fallback contact information">*</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Loading overlay -->
    <div v-if="pending" class="absolute inset-0 bg-black/20 flex items-center justify-center z-20">
      <div class="bg-black/70 text-white px-4 py-2 rounded-lg flex items-center gap-2">
        <Icon name="svg-spinners:ring-resize" size="1.5rem" />
        <span>Loading contact information...</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const img = "/assets/footer/footer.webp";
const localePath = useLocalePath();
const { locale } = useI18n();
const logo = "/assets/logo.webp";

// Define fallback data
const fallbackContactData = {
  phone_sa: "+966 12 345 6789", // Replace with your fallback Saudi phone
  phone_eg: "+20 100 000 0000", // Replace with your fallback Egypt phone
  email: "info@idealstores.com", // Replace with your fallback email
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
  twitter: "https://twitter.com",
  whatsapp: "https://wa.me/1234567890",
};

const apiError = ref(false);
const showApiError = ref(true);

const config = useRuntimeConfig();
const url = config.public.ConstUrl;
// Fetch settings through the Resux async-data resource.
const { data, error, pending } = await useFetch(`${url}/settings`);

if (error.value) {
  apiError.value = true;
}

// Computed property for safe data access
const contactData = computed(() => {
  if (pending.value) {
    // Show loading placeholders
    return {
      phone_sa: "Loading...",
      phone_eg: "Loading...",
      email: "loading@example.com",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      youtube: "#",
      twitter: "#",
      whatsapp: "#",
    };
  }
  
  if (error.value || apiError.value || !data.value?.data) {
    // Use fallback data
    console.warn("Footer: Using fallback contact data");
    return fallbackContactData;
  }
  
  // Use API data with fallback for each property
  const apiData = data.value.data;
  return {
    phone_sa: apiData.phone_sa || fallbackContactData.phone_sa,
    phone_eg: apiData.phone_eg || fallbackContactData.phone_eg,
    email: apiData.email || fallbackContactData.email,
    facebook: apiData.facebook || fallbackContactData.facebook,
    instagram: apiData.instagram || fallbackContactData.instagram,
    linkedin: apiData.linkedin || fallbackContactData.linkedin,
    youtube: apiData.youtube || fallbackContactData.youtube,
    twitter: apiData.twitter || fallbackContactData.twitter,
    whatsapp: apiData.whatsapp || fallbackContactData.whatsapp,
  };
});

// Computed to check if we're using fallback data
const isUsingFallback = computed(() => {
  return error.value || apiError.value || !data.value?.data;
});

// Optional: Auto-dismiss error after 10 seconds
onMounted(() => {
  if (apiError.value) {
    setTimeout(() => {
      showApiError.value = false;
    }, 10000);
  }
});

// Optional: Network recovery detection
if (process.client) {
  window.addEventListener('online', () => {
    if (apiError.value) {
      apiError.value = false;
      showApiError.value = false;
      // You could trigger a refetch here
      // refresh();
    }
  });
}
</script>

<style>
footer {
  font-family: Alexandria;
}

/* Optional: Add subtle animation for loading state */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.loading-placeholder {
  animation: pulse 2s infinite;
}
</style>