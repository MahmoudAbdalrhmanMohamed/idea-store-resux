<template>
  <div class="w-full" @date-change="handleDateChange" @date-close="handleClose">
    <VueIsland
      name="DatePickerIsland"
      :props="{ value: modelValue }"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    default: null,
  },
});

const emit = defineEmits(["update:model-value", "close"]);


const handleDateChange = (event) => {
  emit("update:model-value", event.detail);
};

const handleClose = () => {
  emit("close");
};

</script>
