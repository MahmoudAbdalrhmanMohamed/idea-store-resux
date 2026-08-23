<template>
  <ResuxLink
    :to="props.to"
    target="_blank"
    :aria-label="props.ariaLabel"
    :class="[
      props.locale !== 'ar' ? 'right-6 md:right-10' : 'left-6 md:left-10',
      'floating-whatsapp-btn fixed z-[300] bottom-8 md:bottom-12 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group',
      props.sizeClass,
      props.positionClass,
    ]"
  >
    <!-- Glowing pulse ring background -->
    <span class="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></span>
    
    <!-- WhatsApp Icon -->
    <Icon
      name="ic:baseline-whatsapp"
      class="relative z-10 w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-sm"
    />
  </ResuxLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    default: "",
  },
  locale: {
    type: String,
    default: "en",
  },
  ariaLabel: {
    type: String,
    default: "WhatsApp contact link",
  },
  sizeClass: {
    type: String,
    default: "",
  },
  positionClass: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.floating-whatsapp-btn {
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
}
.floating-whatsapp-btn:hover {
  box-shadow: 0 12px 32px rgba(37, 211, 102, 0.6);
}
</style>
