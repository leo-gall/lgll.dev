<template>
  <div
    :class="[
      'flex items-center gap-4 rounded-lg p-4 shadow-lg transition-all duration-300 max-w-xl',
      alertTypeClass,
    ]"
    role="alert"
  >
    <div :class="['p-2 rounded-full', iconBackgroundClass]">
      <component
        :is="alertIcon"
        :class="['w-6 h-6', iconColorClass]"
        aria-hidden="true"
      />
    </div>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  InfoIcon,
  CheckCircleIcon,
} from "lucide-vue-next";

const props = defineProps<{
  type: "info" | "warning" | "success" | "error";
}>();

const alertTypeClass = computed(() => {
  switch (props.type) {
    case "info":
      return "bg-blue-50/60 text-blue-800 border border-blue-100/60";
    case "warning":
      return "bg-orange-300/60 text-orange-800 border border-orange-400/60";
    case "success":
      return "bg-green-50/60 text-green-800 border border-green-100/60";
    case "error":
      return "bg-red-50/60 text-red-800 border border-red-100/60";
    default:
      return "bg-gray-50/60 text-gray-800 border border-gray-100/60";
  }
});

const iconBackgroundClass = computed(() => {
  switch (props.type) {
    case "info":
      return "bg-blue-100";
    case "warning":
      return "bg-yellow-100";
    case "success":
      return "bg-green-100";
    case "error":
      return "bg-red-100";
    default:
      return "bg-gray-100";
  }
});

const iconColorClass = computed(() => {
  switch (props.type) {
    case "info":
      return "text-blue-500";
    case "warning":
      return "text-yellow-500";
    case "success":
      return "text-green-500";
    case "error":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
});

const alertIcon = computed(() => {
  switch (props.type) {
    case "info":
      return InfoIcon;
    case "warning":
      return AlertTriangleIcon;
    case "success":
      return CheckCircleIcon;
    case "error":
      return AlertCircleIcon;
    default:
      return InfoIcon;
  }
});
</script>
