<template>
  <div class="relative w-full">
    <ResuxDatePicker
      v-model="date"
      placeholder="DD/MM/YYYY"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["newDate"]);
const date = ref(null);

watch(date, (newDate) => {
  emit("newDate", newDate);
});
</script>

<style scoped>
.datepicker-button {
  color: #667085 !important;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid #d0d5dd;
  background-color: white !important;
}
</style>
