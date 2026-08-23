<template>
  <div ref="wrapperRef" class="w-full">
    <VueIsland
      name="DatePickerIsland"
      :props="{ value: modelValue }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  modelValue: {
    default: null,
  },
});

const emit = defineEmits(["update:model-value", "close"]);

const wrapperRef = ref(null);

const handleDateChange = (event) => {
  emit("update:model-value", event.detail);
};

const handleClose = () => {
  emit("close");
};

onMounted(() => {
  if (wrapperRef.value) {
    wrapperRef.value.addEventListener("date-change", handleDateChange);
    wrapperRef.value.addEventListener("date-close", handleClose);
  }
});

onBeforeUnmount(() => {
  if (wrapperRef.value) {
    wrapperRef.value.removeEventListener("date-change", handleDateChange);
    wrapperRef.value.removeEventListener("date-close", handleClose);
  }
});
</script>
