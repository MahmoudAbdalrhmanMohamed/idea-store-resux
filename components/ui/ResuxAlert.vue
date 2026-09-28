<template>
  <div :class="containerClass" role="alert">
    <div class="flex items-start justify-between">
      <div>
        <h3 v-if="title" class="text-sm font-medium text-red-800 mb-1">
          {{ title }}
        </h3>
        <div class="text-sm text-red-700">
          <slot></slot>
        </div>
      </div>
      <button
        v-if="dismissible"
        type="button"
        @click="onDismiss"
        class="text-sm font-medium text-red-800 hover:text-red-900 ml-4"
      >
        Dismiss
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "danger",
  },
  title: {
    type: String,
    default: "",
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["dismiss"]);

const onDismiss = () => {
  emit("dismiss");
};

const containerClass = computed(() => {
  if (props.variant === "danger") {
    return "bg-red-50 border border-red-200 rounded-lg p-4";
  }
  return "bg-blue-50 border border-blue-200 rounded-lg p-4";
});
</script>
