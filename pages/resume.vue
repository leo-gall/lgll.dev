<template>
  <div class="mx-auto">
    <div class="flex flex-col gap-10 text-white">
      <NuxtImg
        src="/png/profile-picture.png"
        alt="Leo Gall"
        class="w-40 h-40 rounded-full shadow-xl"
      />
      <div>
        <h1 class="text-5xl mb-3 font-bold font-kranky">Leo Gall</h1>
        <div v-if="resume">
          <ContentRenderer :value="resume">
            <ContentRendererMarkdown
              :value="resume"
              class="prose prose-invert"
            />
          </ContentRenderer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Leo Gall - Home",
});

const { data: resume } = await useAsyncData("resume", () =>
  queryContent("/documents").where({ identifier: "resume" }).findOne()
);
</script>
