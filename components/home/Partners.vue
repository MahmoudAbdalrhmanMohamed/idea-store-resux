<template>
  <div>
    <h2 class="text-center text-three3 font-semibold text-lg md:text-2xl">
      {{ $t("Our Partners") }}
    </h2>

    <!-- API Error Banner -->
    <div v-if="apiError && showApiError" class="max-w-2xl mx-auto my-6">
      <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <Icon
              name="material-symbols:warning"
              class="h-5 w-5 text-yellow-400"
            />
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-yellow-800">
              {{ $t("apiError.partnersTitle") || "Connection Issue" }}
            </h3>
            <div class="mt-2 text-sm text-yellow-700">
              <p>
                {{
                  $t("apiError.partnersMessage") ||
                  "Unable to load partner information."
                }}
              </p>
            </div>
            <div class="mt-3">
              <button
                @click="retryApiCall"
                class="text-sm font-medium text-yellow-800 hover:text-yellow-900"
                :disabled="isRetrying"
              >
                <span v-if="isRetrying">{{
                  $t("apiError.retrying") || "Retrying..."
                }}</span>
                <span v-else>{{ $t("apiError.retry") || "Try again" }}</span>
              </button>
              <button
                @click="showApiError = false"
                class="ml-4 text-sm font-medium text-yellow-800 hover:text-yellow-900"
              >
                {{ $t("apiError.dismiss") || "Dismiss" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div
      v-if="pending && !apiError"
      class="flex justify-center items-center my-16"
    >
      <div class="flex flex-col items-center gap-4">
        <div
          class="animate-spin rounded-full h-8 w-8 border-b-2 border-three3"
        ></div>
        <p class="text-gray-500 text-sm">
          {{ $t("loadingPartners") || "Loading partners..." }}
        </p>
      </div>
    </div>

    <!-- Partners Grid -->
    <div
      v-if="!pending && displayedPartners.length > 0"
      class="grid grid-cols-1 NotTooSmall:grid-cols-2 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 px-6 lg:px-16 xl:px-24 my-8"
    >
      <div
        v-for="(partner, index) in displayedPartners"
        :key="partner.id || `partner-${index}`"
        class="partner-card bg-white rounded-lg w-[148px] h-[148px] max-w-[148px] max-h-[148px] grid place-items-center place-content-center md:basis-[calc(100%/6-2rem)] p-4"
      >
        <ResuxImg
          :src="partner.image || fallbackPartnerImage"
          :alt="partner.name || 'Partner logo'"
          class="object-contain w-full h-full"
        />
      </div>
    </div>

    <!-- Empty State (when API succeeds but returns empty) -->
    <div
      v-if="!pending && displayedPartners.length === 0 && !apiError"
      class="flex flex-col items-center justify-center my-16"
    >
      <div class="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
        <Icon
          name="material-symbols:handshake"
          class="h-16 w-16 text-gray-400 mx-auto mb-4"
        />
        <h3 class="text-lg font-medium text-gray-700 mb-2 text-center">
          {{ $t("noPartnersTitle") || "No partners available" }}
        </h3>
        <p class="text-gray-500 text-sm text-center">
          {{
            $t("noPartnersDescription") ||
            "Partner information will be displayed here when available."
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const fallbackPartnerImage =
  "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg";

// Fallback partners data (optional - you can add placeholder images)
const fallbackPartners = [
  {
    id: 1,
    name: "Partner 1",
    image: fallbackPartnerImage,
  },
  {
    id: 2,
    name: "Partner 2",
    image: fallbackPartnerImage,
  },
  {
    id: 3,
    name: "Partner 3",
    image: fallbackPartnerImage,
  },
  {
    id: 4,
    name: "Partner 4",
    image: fallbackPartnerImage,
  },
  {
    id: 5,
    name: "Partner 5",
    image: fallbackPartnerImage,
  },
  {
    id: 6,
    name: "Partner 6",
    image: fallbackPartnerImage,
  },
];

const apiError = ref(false);
const showApiError = ref(true);
const retryCount = ref(0);
const isRetrying = ref(false);
const maxRetries = 3;

// API fetch
const config = useRuntimeConfig();
const url = config.public.ConstUrl;
const resuxApp = useResuxApp();

const { data, error, pending, refresh } = await useFetch(`${url}/partners`, {
  getCachedData: (key) => resuxApp.payload.data[key] || resuxApp.static.data[key],

  retry: maxRetries,
  retryDelay: 1000,
  timeout: 10000,

  onRequestError({ error: requestError }) {
    console.error("Partners request failed:", requestError);
    apiError.value = true;
  },

  onResponseError({ response }) {
    console.error("Partners API error:", {
      status: response?.status,
      data: response?._data,
    });
    apiError.value = true;
  },

  // Fallback data structure
  default: () => ({
    data: [],
  }),
});

// Computed property for displayed partners with fallback
const displayedPartners = computed(() => {
  if (pending.value) {
    return []; // Show loading state
  }

  if (
    error.value ||
    apiError.value ||
    !data.value?.data ||
    data.value.data.length === 0
  ) {
    // Return fallback partners or empty array
    return fallbackPartners;
  }

  // Return API data with unique IDs
  return data.value.data.map((partner, index) => ({
    ...partner,
    id: partner.id || `partner-${index}`,
  }));
});

// Retry API call
const retryApiCall = async () => {
  if (retryCount.value >= maxRetries) {
    console.warn("Max retries reached for partners");
    showApiError.value = false; // Hide error after max retries
    return;
  }

  retryCount.value++;
  isRetrying.value = true;
  showApiError.value = false;
  apiError.value = false;

  try {
    await refresh();

    if (error.value || apiError.value) {
      showApiError.value = true;
    }
  } catch (err) {
    console.error("Retry failed:", err);
    showApiError.value = true;
  } finally {
    isRetrying.value = false;
  }
};

// Auto-dismiss error after 10 seconds
let errorTimeout;
onMounted(() => {
  if (apiError.value) {
    errorTimeout = setTimeout(() => {
      showApiError.value = false;
    }, 10000);
  }

  // Initialize AOS if not already initialized
  if (typeof window !== "undefined" && window.AOS) {
    window.AOS.init({
      once: true,
      duration: 300,
      easing: "ease-out-cubic",
    });
  }
});

// Cleanup timeout
onBeforeUnmount(() => {
  if (errorTimeout) {
    clearTimeout(errorTimeout);
  }
});

// Network recovery detection
let onlineHandler;
if (process.client) {
  onlineHandler = () => {
    if (apiError.value) {
      apiError.value = false;
      showApiError.value = false;
      retryCount.value = 0;
      // Auto-retry when network comes back
      setTimeout(() => retryApiCall(), 1000);
    }
  };

  window.addEventListener("online", onlineHandler);

  // Check initial network status
  if (!navigator.onLine) {
    apiError.value = true;
    showApiError.value = true;
  }
}

// Cleanup event listener
onBeforeUnmount(() => {
  if (process.client && onlineHandler) {
    window.removeEventListener("online", onlineHandler);
  }
});
</script>

<style scoped>
/* Animation for loading spinner */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Partner card styles */
.partner-card {
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.partner-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: var(--color-three3);
}
</style>
