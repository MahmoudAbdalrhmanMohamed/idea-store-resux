<template>
  <div
    class="containerClass flex items-center py-2 z-10 justify-between bg-black/35 shadow-topBlack text-white"
  >
    <div class="flex items-center gap-2 xl:gap-4">
      <ResuxLink
        external
        target="_blank"
        aria-label="phone link"
        :to="`tel:${contactData.phone_sa}`"
        class="flex items-center gap-2 text-white transition-all duration-300 hover:text-[#38bdf8]"
      >
        <Icon name="material-symbols:call" size="1.25rem" />
        <p class="text-sm font-medium">{{ contactData.phone_sa }}</p>
      </ResuxLink>
      <ResuxLink
        external
        target="_blank"
        :to="`mailto:${contactData.email}`"
        aria-label="email link"
        class="flex items-center gap-2 text-white px-2 group xl:px-4 border-x border-x-white/30 transition-all duration-300 hover:text-[#38bdf8]"
      >
        <Icon name="material-symbols:mail" size="1.25rem" />
        <p
          class="text-sm font-medium border-b group-hover:border-b-[#38bdf8] border-b-transparent"
        >
          {{ contactData.email }}
        </p>
      </ResuxLink>

      <div class="relative hidden xl:flex items-center gap-3">
        <div class="flex cursor-pointer items-center gap-1.5 text-white/90 hover:text-white transition-colors">
          <ResuxImg :src="sa" class="w-[32px] h-[22px] object-contain rounded-sm" alt="Saudi Arabia" />
          <p class="text-xs font-medium">
            {{ $t("Saudi Arabia") }}
          </p>
        </div>
        <div class="flex cursor-pointer items-center gap-1.5 text-white/90 hover:text-white transition-colors">
          <ResuxImg :src="ua" class="w-[32px] h-[22px] object-contain rounded-sm" alt="UAE" />
          <p class="text-xs font-medium">
            {{ $t("UAE") }}
          </p>
        </div>
        <div class="flex cursor-pointer items-center gap-1.5 text-white/90 hover:text-white transition-colors">
          <ResuxImg :src="eg" class="w-[32px] h-[22px] object-contain rounded-sm" alt="Egypt" />
          <p class="text-xs font-medium">
            {{ $t("egypt") }}
          </p>
        </div>
      </div>

      <div ref="dropdownRef" class="relative flex xl:hidden items-center gap-1">
        <div
          class="flex cursor-pointer items-center gap-1.5 text-white"
          @click="toggleDropdown"
        >
          <ResuxImg
            :src="countries[active].flag"
            class="w-[30px] h-[20px] object-contain"
            alt="flag"
          />
          <p class="text-xs font-medium">{{ $t(countries[active].name) }}</p>
          <Icon name="material-symbols:keyboard-arrow-down" size="1rem" />
        </div>

        <transition name="fade">
          <div
            v-if="show"
            class="absolute w-40 bg-white text-gray-800 top-full shadow-lg rounded-lg mt-2 z-30"
          >
            <ul class="py-2">
              <li
                v-for="(country, key) in countries"
                :key="key"
                @click="setActiveCountry(key)"
                class="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm font-medium"
              >
                <ResuxImg
                  :src="country.flag"
                  class="w-[26px] h-[18px] object-contain"
                  alt="flag"
                />
                <span>{{ $t(country.name) }}</span>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <div class="flex items-center gap-3 xl:gap-5">
      <div class="flex items-center text-white">
        <ResuxLink
          :to="switchLocalePath(currentLocale === 'en' ? 'ar' : 'en')"
          class="text-sm font-medium block transition-all duration-300 hover:text-[#38bdf8] cursor-pointer"
          @click.prevent="changeLocale"
        >
          {{ currentLocale === "en" ? "العربية" : "English" }}
        </ResuxLink>
      </div>

      <div
        class="flex items-center gap-3 text-white"
        :class="
          currentLocale === 'en'
            ? 'pl-4 border-l border-l-white/30'
            : 'pr-4 border-r border-r-white/30'
        "
      >
        <ResuxLink
          external
          target="_blank"
          aria-label="facebook"
          :to="contactData.facebook"
        >
          <Icon
            name="mdi:facebook"
            size="1.25rem"
            class="hover:text-[#38bdf8] transition-all duration-300 cursor-pointer"
          />
        </ResuxLink>
        <ResuxLink
          target="_blank"
          external
          aria-label="instagram"
          :to="contactData.instagram"
        >
          <Icon
            name="mingcute:instagram-fill"
            size="1.25rem"
            class="hover:text-[#38bdf8] transition-all duration-300 cursor-pointer"
          />
        </ResuxLink>
        <ResuxLink
          target="_blank"
          external
          aria-label="linkedin"
          :to="contactData.linkedin"
        >
          <Icon
            name="cib:linkedin"
            size="1.15rem"
            class="hover:text-[#38bdf8] transition-all duration-300 cursor-pointer"
          />
        </ResuxLink>
        <ResuxLink
          target="_blank"
          external
          aria-label="youtube"
          :to="contactData.youtube"
        >
          <Icon
            name="uil:youtube"
            size="1.25rem"
            class="hover:text-[#38bdf8] transition-all duration-300 cursor-pointer"
          />
        </ResuxLink>
        <ResuxLink
          target="_blank"
          external
          aria-label="twitter x"
          :to="contactData.twitter"
        >
          <Icon
            name="line-md:twitter-x"
            size="1.25rem"
            class="hover:text-[#38bdf8] transition-all duration-300 cursor-pointer"
          />
        </ResuxLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
const eg = "/assets/top/eg.svg";
const ua = "/assets/top/ua.svg";
const sa = "/assets/top/sa.svg";

const active = ref("sa");
const show = ref(false);
const dropdownRef = ref(null);
const apiError = ref(false);

const fallbackContactData = {
  phone_sa: "+966 12 345 6789",
  email: "info@idealstores.com.sa",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
  twitter: "https://twitter.com",
  whatsapp: "https://wa.me/1234567890",
};

const toggleDropdown = () => {
  show.value = !show.value;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    show.value = false;
  }
};

onMounted(() => {
  if (typeof document !== "undefined") {
    document.addEventListener("click", handleClickOutside);
  }
});

onUnmounted(() => {
  if (typeof document !== "undefined") {
    document.removeEventListener("click", handleClickOutside);
  }
});

const switchLocalePath = useSwitchLocalePath();
const { locale, setLocale } = useI18n();

const currentLocale = computed(() => (typeof locale.value === "string" ? locale.value : locale));

const changeLocale = () => {
  const target = currentLocale.value === "en" ? "ar" : "en";
  setLocale(target);
};

const countries = {
  sa: { name: "Saudi Arabia", flag: sa },
  ua: { name: "UAE", flag: ua },
  eg: { name: "egypt", flag: eg },
};

const setActiveCountry = (key) => {
  active.value = key;
  show.value = false;
};

const config = useRuntimeConfig();
const url = config.public.ConstUrl;
const resuxApp = useResuxApp();

const { data, error, pending } = await useFetch(`${url}/settings`, {
  getCachedData: (key) => resuxApp.payload.data[key] || resuxApp.static.data[key],
  retry: 3,
  retryDelay: 1000,
  timeout: 10000,
  onRequestError({ error: requestError }) {
    console.error("TopBar settings request failed:", requestError);
    apiError.value = true;
  },
  onResponseError({ response }) {
    console.error("TopBar settings API error:", {
      status: response?.status,
      data: response?._data,
    });
    apiError.value = true;
  },
});

const contactData = computed(() => {
  if (pending.value) {
    return {
      phone_sa: "...",
      email: "loading...",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      youtube: "#",
      twitter: "#",
      whatsapp: "#",
    };
  }
  
  if (error.value || apiError.value || !data.value?.data) {
    return fallbackContactData;
  }
  
  return {
    phone_sa: data.value.data.phone_sa || fallbackContactData.phone_sa,
    email: data.value.data.email || fallbackContactData.email,
    facebook: data.value.data.facebook || fallbackContactData.facebook,
    instagram: data.value.data.instagram || fallbackContactData.instagram,
    linkedin: data.value.data.linkedin || fallbackContactData.linkedin,
    youtube: data.value.data.youtube || fallbackContactData.youtube,
    twitter: data.value.data.twitter || fallbackContactData.twitter,
    whatsapp: data.value.data.whatsapp || fallbackContactData.whatsapp,
  };
});
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  filter: blur(0.5rem);
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  filter: blur(0);
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease;
}
</style>
