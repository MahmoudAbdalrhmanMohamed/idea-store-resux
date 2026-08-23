<template>
  <section v-if="show">
    <teleport to="#teleports">
      <transition name="fade">
        <div
          v-if="loading"
          class="w-screen h-screen z-[99999999] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center"
        >
          <div
            class="w-full left-0 top-0 h-full backdrop-blur-lg bg-black/50 fixed"
          ></div>
          <span class="loader"></span>
        </div>
      </transition>
    </teleport>
  </section>
</template>

<script setup>
// Props
const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
});

// Reactive variable to handle visibility
const show = ref(false);

// Watch the `loading` prop
watch(
  () => props.loading,
  (newVal) => {
    show.value = newVal;
  }
);
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.loader {
  width: 100px;
  height: 100px;
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 1) 0%,
    rgb(220, 220, 220) 40%,
    rgb(170, 170, 170) 98%,
    rgb(10, 10, 10) 100%
  );
  border-radius: 50%;
  position: relative;
}

.loader:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border-bottom: 0 solid #ffffff05;
  box-shadow:
    0 -10px 20px 20px #ffffff40 inset,
    0 -5px 15px 10px #ffffff50 inset,
    0 -2px 5px #ffffff80 inset,
    0 -3px 2px #ffffffbb inset,
    0 2px 0px #ffffff,
    0 2px 3px #ffffff,
    0 5px 5px #ffffff90,
    0 10px 15px #ffffff60,
    0 10px 20px 20px #ffffff40;
  filter: blur(3px);
  animation: 2s rotate linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
