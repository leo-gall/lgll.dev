<template>
  <div>
    <div class="flex flex-col gap-4">
      <Alert v-if="checkIfOutdated(article.updatedAt)" type="warning">
        This article hasn't been updated for more than a year and could be
        outdated!
      </Alert>
      <Alert v-if="!article.done" type="warning">
        This article is a work in progress and could be incomplete!
      </Alert>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content";

defineProps<{
  article: ParsedContent;
}>();
</script>

<style></style>
