<template>
  <div class="w-full">
    <form
      @submit.prevent="submit"
      class="flex flex-col items-center mx-auto my-8 justify-center w-full gap-4 lg:gap-6 lg:max-w-[730px]"
    >
      <div class="flex justify-center gap-4 xl:flex-row flex-col xl:gap-8 w-full">
        <!-- Suffix -->
        <div class="w-full relative z-20 space-y-2">
          <label for="SuffixGary" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Suffix") }}
          </label>
          <ResuxSelect
            id="SuffixGary"
            v-model="formData.suffix"
            :options="Suffixes"
            :placeholder="$t('Mr')"
            class="w-full bg-white border rounded-lg border-d0 text-base text-six6 font-normal shadow-form py-3 px-4 outline-none"
            required
          />
        </div>

        <!-- Position -->
        <div class="w-full space-y-2">
          <label for="PositionGary" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Position") }}
          </label>
          <ResuxInput
            id="PositionGary"
            v-model="formData.position"
            type="text"
            :placeholder="$t('Position')"
            class="w-full text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
        </div>
      </div>

      <div class="flex justify-center gap-4 xl:flex-row flex-col xl:gap-8 w-full">
        <!-- First name -->
        <div class="w-full space-y-2">
          <label for="nameGary" class="text-three4 text-sm font-medium capitalize">
            {{ $t("First name") }}
          </label>
          <ResuxInput
            id="nameGary"
            v-model="formData.name"
            type="text"
            required
            minlength="2"
            maxlength="50"
            :placeholder="$t('First name')"
            class="w-full text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
        </div>

        <!-- Last name -->
        <div class="w-full space-y-2">
          <label for="lastGary" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Last name") }}
          </label>
          <ResuxInput
            id="lastGary"
            v-model="formData.last"
            type="text"
            required
            minlength="2"
            maxlength="50"
            :placeholder="$t('Last name')"
            class="w-full text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
        </div>
      </div>

      <!-- Company -->
      <div class="w-full space-y-2">
        <label for="CompanyGary" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Company") }}
        </label>
        <ResuxInput
          id="CompanyGary"
          v-model="formData.company"
          type="text"
          :placeholder="$t('Company')"
          class="w-full text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
        />
      </div>

      <!-- Email -->
      <div class="w-full space-y-2">
        <label for="EmailGary" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Email") }}
        </label>
        <ResuxInput
          id="EmailGary"
          v-model="formData.email"
          type="email"
          required
          placeholder="you@example.com"
          class="w-full text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
        />
      </div>

      <!-- Phone Number -->
      <div class="w-full space-y-2">
        <label for="phoneGary" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Phone Number") }}
        </label>
        <div class="flex gap-2">
          <ResuxSelect
            v-model="formData.countryCode"
            :options="countryOptions"
            class="w-1/3 text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
          <ResuxInput
            id="phoneGary"
            v-model="formData.phone"
            type="tel"
            required
            minlength="6"
            placeholder="010 000-0000"
            class="w-full text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
        </div>
      </div>

      <!-- Message -->
      <div class="w-full space-y-2">
        <label for="messGary" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Message") }}
        </label>
        <ResuxTextarea
          id="messGary"
          v-model="formData.mess"
          :rows="4"
          :placeholder="$t('Message')"
          class="w-full resize-none text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
        />
      </div>

      <ResuxButton
        :disabled="isSubmitting"
        type="submit"
        class="block w-full bg-three3 shadow-lg hover:shadow-3xl text-white capitalize py-3 px-5 rounded-lg hover:bg-zero3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="isSubmitting">
          {{ $t('Sending...') }}
        </span>
        <span v-else>
          {{ $t("Send message") }}
        </span>
      </ResuxButton>
    </form>

    <!-- Error Banner -->
    <div v-if="formError" class="lg:max-w-[730px] mx-auto mt-4">
      <ResuxAlert
        variant="danger"
        :title="$t('formError.title') || 'Submission Failed'"
        dismissible
        @dismiss="formError = null"
      >
        <p>{{ formError }}</p>
      </ResuxAlert>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
function useToast() {
  const toasts = useState("idea-store-toasts", () => []);

  function remove(id) {
    toasts.value = toasts.value.filter((toast) => toast.id !== id);
  }

  function add(toast) {
    const entry = {
      id: Math.random().toString(36).slice(2, 9),
      ...toast,
    };

    toasts.value.push(entry);
    setTimeout(() => remove(entry.id), toast.timeout ?? 4000);
    return entry;
  }

  return { toasts, add, remove };
}


const props = defineProps({
  url: {
    type: String,
    default: "",
  },
  locale: {
    type: String,
    default: "en",
  },
});

const { t } = useI18n();
const $t = (key) => t(key);

const isSubmitting = ref(false);
const formError = ref(null);
const toast = useToast();

const Suffixes = ["Mr", "Mis"];

const countries = [
  { code: "+20", name: "Egypt", short: "EG" },
  { code: "+966", name: "Saudi Arabia", short: "SA" },
  { code: "+1", name: "United States", short: "US" },
];

const countryOptions = computed(() =>
  countries.map((c) => ({ label: `${c.short} (${c.code})`, value: c.code }))
);

const formData = reactive({
  suffix: "Mr",
  position: "",
  name: "",
  last: "",
  company: "",
  email: "",
  countryCode: "+20",
  phone: "",
  mess: "",
});

const submit = async () => {
  formError.value = null;
  isSubmitting.value = true;

  try {
    const payload = {
      suffix: formData.suffix,
      position: formData.position,
      last_name: formData.last,
      first_name: formData.name,
      message: formData.mess,
      email: formData.email,
      company: formData.company,
      phone: `${formData.countryCode} ${formData.phone}`,
    };

    const response = await fetch(`${props.url || ''}/contact-us`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const resData = await response.json();

    if (!response.ok) {
      throw resData;
    }

    toast.add({
      title: resData.message || $t('formSuccess.message') || 'Message sent successfully!',
      type: "success",
      color: "green",
    });

    formData.name = "";
    formData.last = "";
    formData.position = "";
    formData.company = "";
    formData.email = "";
    formData.phone = "";
    formData.mess = "";
  } catch (error) {
    console.error("Form submission error:", error);
    const msg = error?.message || $t('formError.generic') || 'Submission failed. Please try again.';
    formError.value = msg;
    toast.add({
      title: msg,
      type: "error",
      color: "red",
    });
  } finally {
    isSubmitting.value = false;
  }
};
</script>
