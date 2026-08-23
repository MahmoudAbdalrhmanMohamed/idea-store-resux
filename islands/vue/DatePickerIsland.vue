<template>
  <div class="flex cursor-pointer justify-end" ref="rootRef">
    <ResuxDatePicker
      v-model="date"
      placeholder="Select date"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  value: {
    default: null,
  },
});

const date = ref(props.value);
const rootRef = ref(null);

watch(() => props.value, (newVal) => {
  date.value = newVal;
});

watch(date, (newVal) => {
  if (rootRef.value) {
    rootRef.value.dispatchEvent(new CustomEvent("date-change", { bubbles: true, detail: newVal }));
  }
});
</script>
