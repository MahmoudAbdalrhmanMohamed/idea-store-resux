import { ref } from "vue";

export interface ToastMessage {
  id: string;
  title: string;
  type?: "success" | "error" | "info" | "warning";
  icon?: string;
  color?: string;
  timeout?: number;
}

const toasts = ref<ToastMessage[]>([]);

export function useToast() {
  function add(toast: Omit<ToastMessage, "id">) {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, ...toast };
    toasts.value.push(newToast);

    const timeout = toast.timeout ?? 4000;
    setTimeout(() => {
      remove(id);
    }, timeout);

    return newToast;
  }

  function remove(id: string) {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  }

  return {
    toasts,
    add,
    remove,
  };
}
