<template>
  <div
    :class="[
      'flex flex-row rounded-xl max-w-xl p-4 items-center gap-3',
      alertTypeClass,
    ]"
  >
    <component
      :is="alertIcon"
      class="font-bold uppercase"
      style="width: 200px; height: auto"
    />

    <slot />
  </div>
</template>

<script setup lang="ts">
import {
  TriangleAlertIcon,
  SirenIcon,
  InfoIcon,
  CircleCheckIcon,
} from "lucide-vue-next";

const props = defineProps<{
  type: "info" | "warning" | "success" | "error";
}>();

const alertTypeClass = computed(() => {
  switch (props.type) {
    case "info":
      return "bg-blue-600/50";
    case "warning":
      return "bg-yellow-600/50";
    case "success":
      return "bg-green-600/50";
    case "error":
      return "bg-red-600/50";
    default:
      return "bg-blue-600/50";
  }
});

const alertIcon = computed(() => {
  switch (props.type) {
    case "info":
      return InfoIcon;
    case "warning":
      return TriangleAlertIcon;
    case "success":
      return CircleCheckIcon;
    case "error":
      return SirenIcon;
    default:
      return InfoIcon;
  }
});
</script>
