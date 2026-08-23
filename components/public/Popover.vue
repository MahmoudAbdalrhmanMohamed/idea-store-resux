<template>
  <div class="relative inline-block w-full" ref="popoverRef">
    <div @click="togglePopover" class="w-full cursor-pointer">
      <slot />
    </div>
    <div
      v-if="isOpen"
      class="absolute z-[9999] mt-2 bg-white border border-d0 shadow-lg rounded-xl p-4 min-w-[280px]"
      :class="placementClass"
    >
      <slot name="panel" :close="closePopover" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

const props = defineProps({
  placement: {
    type: String,
    default: "bottom-start",
  },
});

const isOpen = ref(false);
const popoverRef = ref(null);

const togglePopover = () => {
  isOpen.value = !isOpen.value;
};

const closePopover = () => {
  isOpen.value = false;
};

const placementClass = computed(() => {
  if (props.placement === "bottom-start") return "left-0 origin-top-left";
  if (props.placement === "bottom-end") return "right-0 origin-top-right";
  return "left-0 origin-top-left";
});

const handleClickOutside = (event) => {
  if (popoverRef.value && !popoverRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
