<template>
  <div class="relative w-full">
    <select
      :id="id"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      :class="customClass"
      @change="onChange"
    >
      <option v-if="placeholder" value="" disabled :selected="!modelValue">
        {{ placeholder }}
      </option>
      <option
        v-for="opt in normalizedOptions"
        :key="opt.value"
        :value="opt.value"
      >
        {{ opt.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
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
  id: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (event) => {
  emit("update:modelValue", event.target.value);
};

const customClass = computed(() => props.class);

const normalizedOptions = computed(() => {
  return (props.options || []).map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt
  );
});
</script>
