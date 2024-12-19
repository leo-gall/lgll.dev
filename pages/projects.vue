<template>
  <div class="flex flex-col gap-10 text-white">
    <div>
      <h1 class="text-5xl mb-3 font-bold font-kranky">My Awesome Projects</h1>
      <p class="max-w-[40rem] text-xl my-1 font-funnel">
        In contrast to many other developers, I don't have a lot of projects.
        That's the reason why I don't have tons of cancelled side-projects
        waiting on Github to be finished.
      </p>
    </div>
    <div class="flex flex-col gap-10">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="flex flex-row-reverse lg:flex-row justify-between items-center"
      >
        <div class="flex flex-col gap-3">
          <p class="font-kranky text-4xl">{{ project.title }}</p>
          <div class="flex flex-row gap-3">
            <div
              v-for="tag in project.tags"
              class="font-funnel text-md bg-gray-900/20 px-3 py-1 rounded-full"
            >
              {{ tag }}
            </div>
          </div>
        </div>
        <NuxtLink
          :to="project.link"
          target="_blank"
          :data-umami-event="`projects-redirect-${project.title.toLowerCase()}`"
        >
          <ExternalLink class="w-8 lg:w-12 h-auto" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next";

const projects = ref([
  {
    title: "Daytistics",
    link: "//daytistics.com",
    tags: ["Nuxt", "FastAPI", "Tailwind"],
  },
  {
    title: "Ottilianer",
    link: "https://ottilianer.de",
    tags: ["Nuxt", "Keystone", "Tailwind"],
  },
]);

useHead({
  title: "Leo Gall - Projects",
});
</script>
