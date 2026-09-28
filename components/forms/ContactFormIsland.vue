<template>
  <div class="w-full">
    <form
      @submit.prevent="submit"
      class="flex flex-col items-center mx-auto my-8 justify-center w-full gap-4 lg:gap-6 lg:max-w-[730px]"
    >
      <div class="flex justify-center gap-4 xl:flex-row flex-col xl:gap-8 w-full">
        <!-- Suffix -->
        <div class="w-full relative z-20 space-y-2">
          <label for="Suffix" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Suffix") }}
          </label>
          <ResuxSelect
            id="Suffix"
            v-model="formData.suffix"
            :options="Suffixes"
            :placeholder="$t('Mr')"
            class="w-full bg-white border rounded-lg border-d0 text-base text-six6 font-normal shadow-form py-3 px-4 outline-none"
            required
          />
        </div>

        <!-- Position -->
        <div class="w-full space-y-2">
          <label for="Position" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Position") }}
          </label>
          <ResuxInput
            id="Position"
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
          <label for="name" class="text-three4 text-sm font-medium capitalize">
            {{ $t("First name") }}
          </label>
          <ResuxInput
            id="name"
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
          <label for="last" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Last name") }}
          </label>
          <ResuxInput
            id="last"
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
        <label for="Company" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Company") }}
        </label>
        <ResuxInput
          id="Company"
          v-model="formData.company"
          type="text"
          :placeholder="$t('Company')"
          class="w-full text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
        />
      </div>

      <!-- Email -->
      <div class="w-full space-y-2">
        <label for="Email" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Email") }}
        </label>
        <ResuxInput
          id="Email"
          v-model="formData.email"
          type="email"
          required
          placeholder="you@example.com"
          class="w-full text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
        />
      </div>

      <!-- Phone Number -->
      <div class="w-full space-y-2">
        <label for="phone" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Phone Number") }}
        </label>
        <div class="flex gap-2">
          <ResuxSelect
            v-model="formData.countryCode"
            :options="countryOptions"
            class="w-1/3 text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
          <ResuxInput
            id="phone"
            v-model="formData.phone"
            type="tel"
            required
            minlength="6"
            placeholder="010 000-0000"
            class="w-full text-six6 font-normal text-base outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
        </div>
      </div>

      <!-- Checkbox Options -->
      <p class="text-one2 w-full -mb-2 flex text-sm font-medium">
        {{ $t("Are you interested in") }}
      </p>
      <div class="w-full">
        <div class="flex flex-col md:flex-row my-2 gap-4 flex-wrap w-full">
          <label
            v-for="(item, index) in options"
            :key="index"
            :for="`checkbox${index}`"
            :class="
              formData.interests.includes(item.label)
                ? 'border-three3 bg-three3/10'
                : 'border-e9 bg-white'
            "
            class="w-full md:basis-[calc(100%/2-1rem)] relative cursor-pointer transition-all duration-300 flex items-center gap-3 md:gap-4 rounded-lg border px-3 py-2 md:p-[12px]"
          >
            <input
              type="checkbox"
              :id="`checkbox${index}`"
              :value="item.label"
              v-model="formData.interests"
              class="w-5 h-5 accent-three3 outline-none rounded border border-d1"
            />
            <span class="font-normal text-sm text-one2">
              {{ $t(item.label) }}
            </span>
          </label>
        </div>
      </div>

      <!-- Message -->
      <div class="w-full space-y-2">
        <label for="mess" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Message") }}
        </label>
        <ResuxTextarea
          id="mess"
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
import { useToast } from "@/composables/useToast";

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

const options = [
  { label: "Pharmaceuticals" },
  { label: "Dental Line" },
  { label: "Supplements" },
  { label: "Medical Devices" },
  { label: "Medical consumables Service" },
];

const formData = reactive({
  suffix: "Mr",
  position: "",
  name: "",
  last: "",
  company: "",
  email: "",
  countryCode: "+20",
  phone: "",
  interests: [],
  mess: "",
});

const submit = async () => {
  formError.value = null;
  isSubmitting.value = true;

  try {
    const payload = {
      suffix: formData.suffix,
      position: formData.position,
      interests: formData.interests,
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
    formData.interests = [];
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
