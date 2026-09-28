<template>
  <section ref="root" :style="{ minHeight }">
    <slot v-if="visible"></slot>
  </section>
</template>

<script setup>
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

onMounted(() => {
  if (!root.value || visible.value) {
    return;
  }

  if (typeof IntersectionObserver === "undefined") {
    visible.value = true;
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return;
      }
      visible.value = true;
      observer.disconnect();
    },
    { rootMargin: props.rootMargin },
  );
  observer.observe(root.value);
});
</script>
