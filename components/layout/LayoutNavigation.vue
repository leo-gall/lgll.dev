<template>
  <div class="flex flex-row gap-6 text-white">
    <NuxtLink
      v-for="(route, index) in routes"
      v-tooltip="route.tooltip"
      :to="route.to"
      :aria-label="`go to ${route.to}`"
      class="text-center mt-4 text-lg font-bold"
    >
      <div
        class="p-2 border rounded-full shadow-xl transition duration-200"
        :class="colorClasses[index % colorClasses.length]"
      >
        <component :is="route.icon" class="w-6 h-6" />
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { Folder, House, NotebookPen } from "lucide-vue-next";

const routes = [
  { to: "/", icon: House, tooltip: "Home" },
  { to: "/projects", icon: Folder, tooltip: "Projects" },
  { to: "/articles", icon: NotebookPen, tooltip: "Articles" },
];

const colorClasses = [
  "bg-pink-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
];
</script>

<style></style>
