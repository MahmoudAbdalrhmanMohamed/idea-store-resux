<template>
  <section ref="root" :style="{ minHeight }">
    <slot v-if="visible"></slot>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  minHeight: {
    type: String,
    default: "420px",
  },
  rootMargin: {
    type: String,
    default: "600px 0px",
  },
});

const root = ref(null);
const visible = ref(false);
let observer = null;

onMounted(() => {
  if (!root.value || visible.value) {
    return;
  }

  if (typeof IntersectionObserver === "undefined") {
    visible.value = true;
    return;
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return;
      }
      visible.value = true;
      observer?.disconnect();
      observer = null;
    },
    { rootMargin: props.rootMargin },
  );
  observer.observe(root.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
