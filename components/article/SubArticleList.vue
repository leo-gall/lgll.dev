<template>
  <div>
    <div class="grid md:grid-cols-2 gap-2 mt-10">
      <div
        v-for="article in articles.slice(0, 6)"
        class="bg-gray-900/20 gap-1 p-2 rounded-md"
      >
        <h3>{{ article.title }}</h3>
      </div>
    </div>
    <div
      class="text-white mt-5 flex flex-row items-center justify-center gap-2"
    >
      <p class="text-center">And much more...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content";

defineProps<{
  articles: ParsedContent[];
}>();
</script>

<style></style>
