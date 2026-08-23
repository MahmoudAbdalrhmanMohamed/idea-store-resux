<template>
  <ResuxLink
    :to="props.to"
    :class="[
      'inline-flex min-h-[58px] min-w-[160px] items-center justify-center rounded-none border px-8 text-base font-medium transition-all duration-300',
      props.variant === 'outline'
        ? 'border-zero3 bg-black/35 text-zero3 hover:border-white hover:bg-transparent hover:text-white'
        : 'border-zero3 bg-zero3 text-zero0 hover:border-white hover:bg-transparent hover:text-white',
    ]"
  >
    <slot></slot>
  </ResuxLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "solid",
  },
});
</script>
