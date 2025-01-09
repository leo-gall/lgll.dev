<template>
  <div class="text-white">
    <ContentRenderer :value="article">
      <div class="mb-5">
        <NuxtLink
          class="inline-flex flex-row items-center gap-2 mb-5 border-b-2 border-white pb-2 pr-2"
          to="/articles"
        >
          <ArrowLeftIcon class="w-6 h-6" />
          <span> All Articles </span>
        </NuxtLink>

        <div class="flex flex-col gap-3 mb-3">
          <Alert v-if="checkIfOutdated(article.updatedAt)" type="warning">
            This post hasn't been updated for more than a year and could be
            outdated!
          </Alert>
          <Alert v-if="!article.done" type="warning">
            This post is a work in progress and could be incomplete!
          </Alert>
        </div>

        <h1 class="text-4xl font-bold max-w-xl">
          {{ article.title }}
        </h1>
        <p v-if="article.updatedAt" class="mt-2">
          Updated at
          <span>
            {{ new Date(article.updatedAt).toLocaleDateString() }}
          </span>
          <span v-if="article.updatedAt"> ・ </span>
          <span>
            {{ calculateReadingTime(article.value?.body?.children) }} min read
          </span>
        </p>
      </div>
      <ContentRendererMarkdown
        :value="article"
        class="prose prose-invert !text-white !font-funnel"
      />
    </ContentRenderer>
  </div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content";
import { ArrowLeftIcon } from "lucide-vue-next";

const { article } = defineProps<{
  article: ParsedContent;
}>();
</script>
