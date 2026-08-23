<template>
  <div class="w-full">
    <VeeForm
      @submit="submit"
      v-slot="{ isSubmitting }"
      class="flex flex-col items-center mx-auto my-8 justify-center w-full gap-4 lg:gap-6 lg:max-w-[730px]"
    >
      <p class="text-seven2 flex w-full font-medium text-lg">
        {{ $t("Personal Information") }}:
      </p>

      <div class="flex justify-center gap-4 xl:flex-row flex-col xl:gap-8 w-full">
        <!-- First Name -->
        <div class="w-full space-y-2">
          <label for="name" class="text-three4 text-sm font-medium capitalize">
            {{ $t("First name") }}
          </label>
          <VeeField
            :placeholder="$t('First name')"
            rules="required|alphaSpaces|min:4|max:50"
            name="name"
            id="name"
            type="text"
            class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
          <VeeErrorMessage name="name" class="text-red-500 text-sm block mt-1" />
        </div>

        <!-- Last Name -->
        <div class="w-full space-y-2">
          <label for="last" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Last name") }}
          </label>
          <VeeField
            :placeholder="$t('Last name')"
            rules="required|alphaSpaces|min:4|max:50"
            name="last"
            id="last"
            type="text"
            class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
          <VeeErrorMessage name="last" class="text-red-500 text-sm block mt-1" />
        </div>
      </div>

      <div class="flex justify-center gap-4 xl:flex-row flex-col xl:gap-8 w-full">
        <!-- Email -->
        <div class="w-full space-y-2">
          <label for="Email" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Email") }}
          </label>
          <VeeField
            :placeholder="'you@example.com'"
            rules="required|email|min:4|max:70"
            name="Email"
            id="Email"
            type="email"
            class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
          <VeeErrorMessage name="Email" class="text-red-500 text-sm block mt-1" />
        </div>

        <!-- Phone Number -->
        <div class="w-full relative z-50 space-y-2">
          <label for="phone" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Phone Number") }}
          </label>
          <div class="flex gap-2">
            <!-- Country Code Dropdown -->
            <div class="relative w-1/3" ref="dropdownRef">
              <button
                type="button"
                @click="toggleDropdown"
                class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4 flex items-center justify-between"
              >
                {{ selectedCountry.short }}
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div v-if="isDropdownOpen" class="absolute z-[9999] mt-1 w-full bg-white border border-d0 shadow-form rounded-lg">
                <ul>
                  <li v-for="country in countries" :key="country.code" @click="selectCountry(country)" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {{ country.name }} ({{ country.code }})
                  </li>
                </ul>
              </div>
            </div>
            <VeeField
              :placeholder="selectedCountry.placeholder"
              rules="required|min:8|max:15"
              name="phone"
              id="phone"
              type="tel"
              class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
            />
          </div>
          <VeeErrorMessage name="phone" class="text-red-500 text-sm block mt-1" />
        </div>
      </div>

      <div class="flex justify-center gap-4 xl:flex-row flex-col xl:gap-8 w-full">
        <!-- Country -->
        <div class="w-full relative z-40 space-y-2">
          <label for="country" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Country of Residence") }}
          </label>
          <VeeField rules="required" id="country" v-slot="{ field }" name="country">
            <SelectMenu
              v-bind="field"
              class="w-full bg-white border rounded-lg border-d0 text-base text-six6 font-normal shadow-form"
              :placeholder="$t('select country')"
              v-model="selectedCountries"
              :options="Countries"
            />
          </VeeField>
          <VeeErrorMessage name="country" class="text-red-500 text-sm block mt-1" />
        </div>

        <!-- City -->
        <div class="w-full relative z-30 space-y-2">
          <label for="city" class="text-three4 text-sm font-medium capitalize">
            {{ $t("city") }}
          </label>
          <VeeField rules="required" id="city" v-slot="{ field }" name="city">
            <SelectMenu
              v-bind="field"
              class="w-full bg-white border rounded-lg border-d0 text-base text-six6 font-normal shadow-form"
              :placeholder="$t('select city')"
              v-model="selectedCities"
              :options="cities"
            />
          </VeeField>
          <VeeErrorMessage name="city" class="text-red-500 text-sm block mt-1" />
        </div>
      </div>

      <p class="text-seven2 flex w-full mt-6 font-medium text-lg">
        {{ $t("Educational Background") }}:
      </p>

      <div class="flex justify-center gap-4 xl:flex-row flex-col xl:gap-8 w-full">
        <!-- Degree -->
        <div class="w-full space-y-2">
          <label for="Degree" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Degree") }}
          </label>
          <VeeField
            :placeholder="$t('Degree')"
            rules="required|alphaSpaces|min:2|max:50"
            name="Degree"
            id="Degree"
            type="text"
            class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
          <VeeErrorMessage name="Degree" class="text-red-500 text-sm block mt-1" />
        </div>

        <!-- Graduation Year -->
        <div class="w-full relative z-20 space-y-2">
          <label for="Years" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Graduation year") }}
          </label>
          <VeeField rules="required" id="Years" v-slot="{ field }" name="Years">
            <SelectMenu
              v-bind="field"
              class="w-full bg-white border rounded-lg border-d0 text-base text-six6 font-normal shadow-form"
              :placeholder="$t('select year')"
              v-model="selectedYears"
              :options="Years"
            />
          </VeeField>
          <VeeErrorMessage name="Years" class="text-red-500 text-sm block mt-1" />
        </div>
      </div>

      <!-- University -->
      <div class="w-full space-y-2">
        <label for="University" class="text-three4 text-sm font-medium capitalize">
          {{ $t("University") }}
        </label>
        <VeeField
          :placeholder="$t('University')"
          rules="required|alphaSpaces|min:4|max:50"
          name="University"
          id="University"
          type="text"
          class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
        />
        <VeeErrorMessage name="University" class="text-red-500 text-sm block mt-1" />
      </div>

      <p class="text-seven2 flex w-full mt-6 font-medium text-lg">
        {{ $t("Professional Information") }}:
      </p>

      <div class="flex justify-center gap-4 xl:flex-row flex-col xl:gap-8 w-full">
        <!-- Recent Job Title -->
        <div class="w-full space-y-2">
          <label for="job" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Recent Job Title") }}
          </label>
          <VeeField
            :placeholder="$t('Recent Job Title')"
            rules="required|alphaSpaces|min:2|max:50"
            name="job"
            id="job"
            type="text"
            class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
          <VeeErrorMessage name="job" class="text-red-500 text-sm block mt-1" />
        </div>

        <!-- Recent Company -->
        <div class="w-full space-y-2">
          <label for="Company" class="text-three4 text-sm font-medium capitalize">
            {{ $t("Recent Company") }}
          </label>
          <VeeField
            :placeholder="$t('Recent Company')"
            rules="required|alphaSpaces|min:2|max:50"
            name="Company"
            id="Company"
            type="text"
            class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
          <VeeErrorMessage name="Company" class="text-red-500 text-sm block mt-1" />
        </div>
      </div>

      <!-- Department -->
      <div class="w-full space-y-2">
        <label for="Department" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Department of Interest") }}
        </label>
        <VeeField
          :placeholder="$t('Department of Interest')"
          rules="required|alphaSpaces|min:4|max:50"
          name="Department"
          id="Department"
          type="text"
          class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
        />
        <VeeErrorMessage name="Department" class="text-red-500 text-sm block mt-1" />
      </div>

      <!-- Description / Message -->
      <div class="w-full space-y-2">
        <label for="mess" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Job description / message") }}
        </label>
        <VeeField
          as="textarea"
          rules="alphaSpaces|min:4|max:500"
          name="mess"
          id="mess"
          type="text"
          class="w-full resize-none h-[128px] text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
        />
        <VeeErrorMessage name="mess" class="text-red-500 text-sm block mt-1" />
      </div>

      <!-- Skills addition -->
      <div class="w-full space-y-2">
        <label for="Skills" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Key Skills") }}
        </label>
        <div class="flex gap-2">
          <input
            v-model="Skills"
            @keydown.enter.prevent="handleSkills"
            :placeholder="$t('add skill')"
            type="text"
            class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
          <button type="button" @click="handleSkills" class="bg-three3 text-white px-4 py-2 rounded-lg font-bold">
            {{ $t("Add") || "Add" }}
          </button>
        </div>
        <div class="flex flex-wrap gap-2 mt-2">
          <span v-for="skill in SkillsToAdd" :key="skill" class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1">
            {{ skill }}
            <button type="button" @click="removeSkills(skill)" class="text-blue-800 hover:text-blue-900 font-bold">&times;</button>
          </span>
        </div>
      </div>

      <!-- Qualifications addition -->
      <div class="w-full space-y-2">
        <label for="Qualifications" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Key Qualifications") }}
        </label>
        <div class="flex gap-2">
          <input
            v-model="Qualifications"
            @keydown.enter.prevent="handleQualifications"
            :placeholder="$t('add qualification')"
            type="text"
            class="w-full text-six6 font-normal text-base placeholder:text-base placeholder:text-six6 placeholder:font-normal outline-none bg-white border border-d0 shadow-form rounded-lg py-3 px-4"
          />
          <button type="button" @click="handleQualifications" class="bg-three3 text-white px-4 py-2 rounded-lg font-bold">
            {{ $t("Add") || "Add" }}
          </button>
        </div>
        <div class="flex flex-wrap gap-2 mt-2">
          <span v-for="qual in QualificationsToAdd" :key="qual" class="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1">
            {{ qual }}
            <button type="button" @click="removeQualifications(qual)" class="text-emerald-800 hover:text-emerald-900 font-bold">&times;</button>
          </span>
        </div>
      </div>

      <!-- File Zone / Resume Upload -->
      <div class="w-full space-y-2">
        <label class="text-three4 text-sm font-medium capitalize">{{ $t("Resume") }}</label>
        <div
          ref="dropDownZone"
          class="border-2 border-dashed border-d1 rounded-lg p-6 text-center cursor-pointer hover:border-three3 transition-colors"
          @click="$refs.fileInput.click()"
        >
          <input
            type="file"
            ref="fileInput"
            @change="changeImg"
            class="hidden"
            accept=".pdf,.doc,.docx"
          />
          <p class="text-six6">{{ fileToShow || $t("Drag and drop your resume here or click to browse") }}</p>
        </div>
      </div>

      <!-- Sponsoring Position (if any) -->
      <div class="w-full relative z-10 space-y-2">
        <label for="Position" class="text-three4 text-sm font-medium capitalize">
          {{ $t("Position of Interest") }}
        </label>
        <VeeField rules="required" id="Position" v-slot="{ field }" name="Position">
          <SelectMenu
            v-bind="field"
            class="w-full bg-white border rounded-lg border-d0 text-base text-six6 font-normal shadow-form"
            :placeholder="$t('select position')"
            v-model="selectedPosition"
            :options="Positions"
          />
        </VeeField>
        <VeeErrorMessage name="Position" class="text-red-500 text-sm block mt-1" />
      </div>

      <!-- Error message banner -->
      <div v-if="formError" class="w-full bg-red-50 border border-red-200 rounded-lg p-4 mt-4 text-sm text-red-700">
        {{ formError }}
      </div>

      <button
        :disabled="isSubmitting || loading"
        class="block w-full bg-three3 shadow-lg hover:shadow-3xl text-white capitalize py-3 px-5 rounded-lg hover:bg-zero3 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
        type="submit"
      >
        <span v-if="isSubmitting || loading">
          {{ $t("Sending...") }}
        </span>
        <span v-else>
          {{ $t("Send message") }}
        </span>
      </button>
    </VeeForm>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useDropZone } from "@vueuse/core";
import SelectMenu from "../../components/public/SelectMenu.vue";
import { useToast } from "../../composables/useToast";
import ar from "../../i18n/locales/ar.json";
import en from "../../i18n/locales/en.json";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  locale: {
    type: String,
    default: "en",
  },
});

const messages = computed(() => (props.locale === "ar" ? ar : en));

const $t = (key) => {
  const parts = key.split(".");
  let current = messages.value;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return key;
    }
  }
  return typeof current === "string" ? current : key;
};

const isDropdownOpen = ref(false);
const dropdownRef = ref(null);
const loading = ref(false);
const formError = ref(null);

const selectedCountry = ref({
  code: "+20",
  placeholder: "+20 (010) 000-0000",
  name: "Egypt",
  short: "EG",
});

const countries = ref([
  {
    code: "+20",
    placeholder: "+20 (010) 000-0000",
    name: "Egypt",
    short: "EG",
  },
  {
    code: "+966",
    placeholder: "+966 (500) 000-0000",
    name: "Saudi Arabia",
    short: "SA",
  },
  {
    code: "+1",
    placeholder: "+1 (555) 000-0000",
    name: "United States",
    short: "US",
  },
]);

const selectCountry = (country) => {
  selectedCountry.value = country;
  isDropdownOpen.value = false;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const country22Data = ref({});

const Countries = computed(() =>
  Object.entries(country22Data.value).map(([country, cities]) => ({
    label: country,
    cities,
  }))
);

const selectedCountries = ref();
const selectedCities = ref();
const cities = ref([]);

watch(selectedCountries, (newD) => {
  selectedCities.value = "";
  cities.value = newD?.cities || [];
});

const startYear = 1980;
const currentYear = new Date().getFullYear();
const Years = ref(
  Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i).reverse()
);
const selectedYears = ref();

const Positions = ref([
  "Medical Representative",
  "Product Specialist",
  "Area Manager",
  "Dental Specialist",
  "Key Account Manager",
]);
const selectedPosition = ref();

const Skills = ref("");
const SkillsToAdd = ref([]);
const handleSkills = () => {
  if (!Skills.value) return;
  const trimmed = Skills.value.trim();
  if (trimmed && !SkillsToAdd.value.includes(trimmed)) {
    SkillsToAdd.value.push(trimmed);
    Skills.value = "";
  }
};
const removeSkills = (skill) => {
  SkillsToAdd.value = SkillsToAdd.value.filter((s) => s !== skill);
};

const Qualifications = ref("");
const QualificationsToAdd = ref([]);
const handleQualifications = () => {
  if (!Qualifications.value) return;
  const trimmed = Qualifications.value.trim();
  if (trimmed && !QualificationsToAdd.value.includes(trimmed)) {
    QualificationsToAdd.value.push(trimmed);
    Qualifications.value = "";
  }
};
const removeQualifications = (qual) => {
  QualificationsToAdd.value = QualificationsToAdd.value.filter((q) => q !== qual);
};

const file = ref(null);
const fileToShow = ref("");
const changeImg = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    file.value = selectedFile;
    fileToShow.value = selectedFile.name;
  }
};

const dropDownZone = ref(null);
useDropZone(dropDownZone, (files) => {
  if (files && files.length > 0) {
    file.value = files[0];
    fileToShow.value = files[0].name;
  }
});

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(async () => {
  document.addEventListener("click", handleClickOutside);
  if (typeof window !== "undefined") {
    try {
      const res = await fetch("/assets/countries.json");
      if (res.ok) {
        country22Data.value = await res.json();
      }
    } catch (e) {
      console.error("Failed to load countries list", e);
    }
  }
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const toast = useToast();

const submit = async (values, { resetForm }) => {
  formError.value = null;
  loading.value = true;

  try {
    const formData = new FormData();
    formData.append("first_name", values.name);
    formData.append("last_name", values.last);
    formData.append("email", values.Email);
    formData.append("phone", values.phone);
    formData.append("country", values.country?.label || values.country);
    formData.append("city", values.city);
    formData.append("degree", values.Degree);
    formData.append("graduation_year", values.Years);
    formData.append("university", values.University);
    formData.append("recent_job", values.job);
    formData.append("company", values.Company);
    formData.append("department", values.Department);
    formData.append("description", values.mess);
    formData.append("skills[]", Array.from(SkillsToAdd.value).join(", "));
    formData.append("qualifications[]", Array.from(QualificationsToAdd.value).join(", "));
    formData.append("position", values.Position);
    if (file.value) {
      formData.append("resume_file", file.value);
    }

    const response = await fetch(`${props.url}/careers`, {
      method: "POST",
      body: formData,
    });

    const resData = await response.json();

    if (!response.ok) {
      throw { data: resData };
    }

    toast.add({
      title: resData.message || $t("Form submitted successfully!"),
      type: "success",
      color: "green",
    });

    resetForm();
    SkillsToAdd.value = [];
    QualificationsToAdd.value = [];
    file.value = null;
    fileToShow.value = "";
    selectedPosition.value = null;
    selectedCountries.value = null;
    selectedCities.value = null;
    selectedYears.value = null;
    
  } catch (error) {
    console.error("Careers form error:", error);
    if (error?.data?.errors) {
      let firstError = null;
      Object.entries(error.data.errors).forEach(([field, messages]) => {
        messages.forEach((message) => {
          if (!firstError) firstError = message;
          toast.add({ title: message, type: "error", color: "red" });
        });
      });
      if (firstError) formError.value = firstError;
    } else {
      formError.value = error?.data?.message || $t("Form submission failed");
      toast.add({ title: formError.value, type: "error", color: "red" });
    }
  } finally {
    loading.value = false;
  }
};
</script>
