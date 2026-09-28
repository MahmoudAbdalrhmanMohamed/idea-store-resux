<template>
  <div class="relative w-full">
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="w-full bg-white border border-d0 rounded-lg py-3 px-4 text-base text-six6 font-normal shadow-form flex items-center justify-between outline-none"
    >
      <span>{{ displayValue }}</span>
      <Icon
        name="material-symbols:keyboard-arrow-down"
        size="1.25rem"
        class="ml-2 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>
    <div
      v-if="isOpen"
      class="absolute z-[9999] mt-1 w-full bg-white border border-d0 shadow-form rounded-lg max-h-60 overflow-y-auto"
    >
      <ul>
        <li
          v-for="option in options"
          :key="getOptionKey(option)"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-six6 text-base"
        >
          {{ getOptionLabel(option) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number, Object],
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);

const displayValue = computed(() => {
  if (!props.modelValue) return props.placeholder;
  if (typeof props.modelValue === "object") {
    return props.modelValue.label || props.modelValue.name || props.modelValue.code || String(props.modelValue);
  }
  return props.modelValue;
});

const getOptionLabel = (option) => {
  if (typeof option === "object" && option !== null) {
    return option.label || option.name || option.code || String(option);
  }
  return option;
};

const getOptionKey = (option) => {
  if (typeof option === "object" && option !== null) {
    return option.label || option.name || option.code || JSON.stringify(option);
  }
  return option;
};

const selectOption = (option) => {
  emit("update:modelValue", option);
  isOpen.value = false;
};

</script>
