<template>
  <div class="flex flex-col gap-10 text-white">
    <div>
      <h1 class="text-5xl mb-3 font-bold font-orbitron">Projects</h1>
      <p class="max-w-[40rem] text-xl my-1 font-funnel">
        Oh, you want to know what I'm working on? Here you go!
      </p>
    </div>
    <div class="flex flex-col gap-10">
      <ProjectsListItem
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :link="project.link"
        :reverse="index % 2 === 0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Daytistics",
    description:
      "Daytistics is a web app that helps you to track your daily habits and routines. It's built with Vue.js and Tailwind CSS. It's currently in development and will be released soon.",
    image: "https://placehold.co/400",
    link: "/",
  },
  {
    title: "Ottilianer",
    description:
      "This is my portfolio. It's built with Nuxt.js and Tailwind CSS. It's currently in development and will be released soon.",
    image: "/png/ottilianer.png",
    link: "/",
  },
];
</script>
