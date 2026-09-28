<template>
  <GarySetion>
    <p
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="100"
      class="text-center alx mb-4 md:mb-8 text-zero3 font-[400] text-xl md:text-2xl capitalize"
    >
      {{ $t("Our Clients") }}
    </p>

    <!-- API Error Banner -->
    <div v-if="apiError && showApiError" class="max-w-2xl mx-auto mb-6">
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
              {{ $t("apiError.clientsTitle") || "Connection Issue" }}
            </h3>
            <div class="mt-2 text-sm text-yellow-700">
              <p>
                {{
                  $t("apiError.clientsMessage") ||
                  "Unable to load client information."
                }}
              </p>
            </div>
            <div class="mt-3">
              <button
                @click="retryApiCall"
                class="text-sm font-medium text-yellow-800 hover:text-yellow-900"
              >
                {{ $t("apiError.retry") || "Try again" }}
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
      class="flex justify-center items-center py-8"
    >
      <div class="flex flex-col items-center gap-4">
        <div
          class="animate-spin rounded-full h-8 w-8 border-b-2 border-zero3"
        ></div>
        <p class="text-gray-500 text-sm">
          {{ $t("loading") || "Loading clients..." }}
        </p>
      </div>
    </div>

    <!-- Clients Grid -->
    <div v-if="!pending && (displayedClients.length > 0 || apiError)">
      <div
        class="flex md:flex-row flex-col justify-center items-center flex-wrap gap-6 md:gap-8"
      >
        <div
          v-for="(client, index) in displayedClients"
          :key="client.id || `client-${index}`"
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
          class="bg-white w-[141px] md:basis-[calc(100%/4-2rem)] rounded-lg shadow-slide grid place-items-center place-content-center min-h-[148px]"
        >
          <ResuxImg
            :src="client.image"
            :alt="client.name || 'Client logo'"
            class="object-contain h-[148px] rounded-lg"
          />
        </div>

        <!-- Fallback clients when no data -->
        <div
          v-if="displayedClients.length === 0"
          v-for="i in 4"
          :key="`fallback-${i}`"
          class="bg-white w-[141px] md:basis-[calc(100%/4-2rem)] rounded-lg shadow-slide grid place-items-center place-content-center min-h-[148px]"
        >
          <div
            class="w-24 h-24 bg-gray-200 rounded animate-pulse flex items-center justify-center text-gray-400"
          >
            {{ $t("Loading...") || "Loading..." }}
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-if="!pending && displayedClients.length === 0 && !apiError"
      class="text-center py-8"
    >
      <div class="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
        <Icon
          name="material-symbols:groups"
          class="h-12 w-12 text-gray-400 mx-auto mb-4"
        />
        <h3 class="text-lg font-medium text-gray-700 mb-2">
          {{ $t("noClientsTitle") || "No clients available" }}
        </h3>
        <p class="text-gray-500 text-sm">
          {{
            $t("noClientsDescription") ||
            "Client information will be displayed here when available."
          }}
        </p>
      </div>
    </div>
  </GarySetion>
</template>

<script setup>
// Fallback client data (optional - you can add placeholder images)
const fallbackClients = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg",
    name: "Client 1",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg",
    name: "Client 2",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg",
    name: "Client 3",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg",
    name: "Client 4",
  },
];

const apiError = ref(false);
const showApiError = ref(true);
const retryCount = ref(0);
const maxRetries = 3;
const imageErrors = ref({});

const config = useRuntimeConfig();
const url = config.public.ConstUrl;
const {
  data: dataVal,
  error,
  pending,
  refresh,
} = await useFetch(`${url}/clients`);

if (error.value) {
  apiError.value = true;
}

// Computed property for displayed clients with fallback
const displayedClients = computed(() => {
  if (pending.value) {
    return []; // Show loading state
  }

  if (
    error.value ||
    apiError.value ||
    !dataVal.value?.data ||
    dataVal.value.data.length === 0
  ) {
    // Return fallback clients or empty array
    return fallbackClients;
  }

  // Return API data with unique IDs
  return dataVal.value.data.map((client, index) => ({
    ...client,
    id: client.id || `client-${index}`,
  }));
});

// Handle individual image loading errors
const handleImageError = (index) => {
  console.warn(`Image failed to load for client at index ${index}`);
  imageErrors.value[index] = true;
};

// Retry API call
const retryApiCall = async () => {
  if (retryCount.value >= maxRetries) {
    console.warn("Max retries reached for clients grid");
    return;
  }

  retryCount.value++;
  showApiError.value = false;
  apiError.value = false;
  imageErrors.value = {};

  await refresh();

  if (error.value || apiError.value) {
    showApiError.value = true;
  }
};


</script>

<style>
.alx {
  font-family: Alexandria;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
