<template>
  <div class="flex flex-row gap-6 text-white">
    <NuxtLink
      v-for="route in routes"
      v-tooltip="route.tooltip"
      :to="route.to"
      :aria-label="`go to ${route.to}`"
      class="text-center mt-4 text-lg font-bold"
    >
      <div
        class="p-2 border-2 border-black bg-white text-black rounded-full shadow-xl transition duration-200 hover:bg-white/80"
      >
        <component :is="route.icon" class="w-6 h-6" />
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { FileUser, Folder, House, NotebookPen } from "lucide-vue-next";

const routes = [
  { to: "/", icon: House, tooltip: "Home" },
  { to: "/projects", icon: Folder, tooltip: "Projects" },
  { to: "/blog", icon: NotebookPen, tooltip: "Blog" },
  { to: "/resume.pdf", icon: FileUser, tooltip: "Resume" },
];
</script>

<style></style>
