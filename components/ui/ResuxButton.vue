<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="customClass"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: "",
  },
});

const customClass = computed(() => props.class);
</script>
