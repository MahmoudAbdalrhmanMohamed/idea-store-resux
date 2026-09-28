<template>
  <input
    :id="id"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :minlength="minlength"
    :maxlength="maxlength"
    :class="customClass"
    @input="onInput"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
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
  minlength: {
    type: [String, Number],
    default: undefined,
  },
  maxlength: {
    type: [String, Number],
    default: undefined,
  },
  class: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (event) => {
  emit("update:modelValue", event.target.value);
};

const customClass = computed(() => props.class);
</script>
