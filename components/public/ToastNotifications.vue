<template>
  <div
    class="fixed bottom-5 left-5 right-5 md:left-auto md:right-5 z-[9999] flex flex-col gap-3 max-w-sm w-full"
    :dir="dir"
  >
    <transition-group name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="flex items-start gap-3 p-4 rounded-xl border shadow-lg bg-white text-slate-800 transition-all duration-300"
        :class="[
          toast.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : '',
          toast.type === 'error' ? 'border-red-200 bg-red-50 text-red-900' : '',
          toast.type === 'warning' ? 'border-amber-200 bg-amber-50 text-amber-900' : '',
          toast.type === 'info' ? 'border-blue-200 bg-blue-50 text-blue-900' : ''
        ]"
      >
        <span class="flex-shrink-0 mt-0.5">
          <Icon
            :name="
              toast.type === 'success'
                ? 'icon-park-solid:correct'
                : toast.type === 'error'
                  ? 'material-symbols:error'
                  : toast.type === 'warning'
                    ? 'material-symbols:warning'
                    : 'solar:info-circle-outline'
            "
            size="1.25rem"
            :class="
              toast.type === 'success'
                ? 'text-emerald-600'
                : toast.type === 'error'
                  ? 'text-red-600'
                  : toast.type === 'warning'
                    ? 'text-amber-600'
                    : 'text-blue-600'
            "
          />
        </span>
        <div class="flex-grow">
          <p class="text-sm font-semibold">{{ toast.title }}</p>
        </div>
        <button
          type="button"
          @click="remove(toast.id)"
          class="flex-shrink-0 text-slate-400 hover:text-slate-600 p-0.5 rounded"
          aria-label="Close"
        >
          <Icon name="material-symbols:close" size="1rem" />
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
function useToast() {
  const toasts = useState("idea-store-toasts", () => []);

  function remove(id) {
    toasts.value = toasts.value.filter((toast) => toast.id !== id);
  }

  function add(toast) {
    const entry = {
      id: Math.random().toString(36).slice(2, 9),
      ...toast,
    };

    toasts.value.push(entry);
    setTimeout(() => remove(entry.id), toast.timeout ?? 4000);
    return entry;
  }

  return { toasts, add, remove };
}

const { toasts, remove } = useToast();
const { dir } = useI18n();
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.toast-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
<template>
  <div
    class="fixed bottom-5 left-5 right-5 md:left-auto md:right-5 z-[9999] flex flex-col gap-3 max-w-sm w-full"
    :dir="dir"
  >
    <transition-group name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="flex items-start gap-3 p-4 rounded-xl border shadow-lg bg-white text-slate-800 transition-all duration-300"
        :class="[
          toast.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : '',
          toast.type === 'error' ? 'border-red-200 bg-red-50 text-red-900' : '',
          toast.type === 'warning' ? 'border-amber-200 bg-amber-50 text-amber-900' : '',
          toast.type === 'info' ? 'border-blue-200 bg-blue-50 text-blue-900' : ''
        ]"
      >
        <span class="flex-shrink-0 mt-0.5">
          <Icon
            :name="
              toast.type === 'success'
                ? 'icon-park-solid:correct'
                : toast.type === 'error'
                  ? 'material-symbols:error'
                  : toast.type === 'warning'
                    ? 'material-symbols:warning'
                    : 'solar:info-circle-outline'
            "
            size="1.25rem"
            :class="
              toast.type === 'success'
                ? 'text-emerald-600'
                : toast.type === 'error'
                  ? 'text-red-600'
                  : toast.type === 'warning'
                    ? 'text-amber-600'
                    : 'text-blue-600'
            "
          />
        </span>
        <div class="flex-grow">
          <p class="text-sm font-semibold">{{ toast.title }}</p>
        </div>
        <button
          type="button"
          @click="remove(toast.id)"
          class="flex-shrink-0 text-slate-400 hover:text-slate-600 p-0.5 rounded"
          aria-label="Close"
        >
          <Icon name="material-symbols:close" size="1rem" />
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "../../composables/useToast";
const { toasts, remove } = useToast();
const { dir } = useI18n();
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.toast-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
